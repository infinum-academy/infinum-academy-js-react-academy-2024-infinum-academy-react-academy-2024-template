import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import React, { act } from "react";
import { mutate } from 'swr';
import { deleteReview, updateReview } from '@/fetchers/mutators';
import { render, screen, waitFor } from "@testing-library/react";
import ReviewItem from "./ReviewItem";
import { swrKeys } from '@/fetchers/swrKeys';

const review = {
  id: "1",
  show_id: "106",
  comment: "...comment...",
  rating: 3,
  user: {
    id: "string",
    email: "string",
    image_url: "string",
  },
};

jest.mock('@/hooks/useUser', () => {
  return {
    useUser: jest.fn().mockReturnValue({ data: { user: { id: 'string', email: 'string', image_url: "string" } } }),
  };
});

jest.mock("@/fetchers/mutators", () => {
  return {
    deleteReview: jest.fn().mockResolvedValue(null),
    updateReview: jest.fn().mockResolvedValue(null),
  };
});

jest.mock("swr", () => {
  return {
    mutate: jest.fn(),
  };
});

describe("ReviewItem", () => {
  it("should check if correct user email is rendered", () => {
    render(
      <ReviewItem
        review={review}
        onDeleteReview={() => {}}
      />
    );
    const email = screen.getByText(review.user.email);

    expect(email).toBeInTheDocument();
  });

  it("should check if correct rating is rendered", () => {
    render(
      <ReviewItem
        review={review}
        onDeleteReview={() => {}}
      />
    );
    const rating = screen.getByText(`${review.rating} / 5`);

    expect(rating).toBeInTheDocument();
  });

  it("should check if correct comment is rendered", () => {
    render(
      <ReviewItem
        review={review}
        onDeleteReview={() => {}}
      />
    );
    const comment = screen.getByText(review.comment);

    expect(comment).toBeInTheDocument();
  });

  it('should call deleteReview on success', async () => {
    const mockDelete = jest.fn();
    render(<ReviewItem review={review} onDeleteReview={mockDelete} />);
    
    const dropdownBtn = screen.getByLabelText('Options');
    act(() => {
      dropdownBtn.click();
    })

    const deleteBtn = await screen.findByText("Delete");
    act(() => {
      deleteBtn.click();
    });
    
    await waitFor(() => {
      expect(deleteReview).toHaveBeenCalled();
    });
  });
  
  it('should call updateReview and mutate on success', async () => {
    render(<ReviewItem review={review} onDeleteReview={() => {}} />);
  
    const dropdownBtn = screen.getByLabelText('Options');
    act(() => {
      dropdownBtn.click();
    });
  
    const editBtn = await screen.findByText('Edit');
    act(() => {
      editBtn.click();
    });
  
    const modalHeader = await screen.findByText('Update review');
    await waitFor(() => {
      expect(modalHeader).toBeInTheDocument();
    });
  
    const commentInput = screen.getByPlaceholderText('Edit review');
    await userEvent.clear(commentInput);
    await userEvent.type(commentInput, 'new comment'); 
  
    const submitBtn = screen.getByText('Save');
    act(() => {
      submitBtn.click();
    });
  
    await waitFor(() => {
      expect(updateReview).toHaveBeenCalledWith(swrKeys.updateReview(review.id), 
      {
        arg: {
          ...review,
          comment: 'new comment'
        }
      });
      expect(mutate).toHaveBeenCalled();
      expect(modalHeader).not.toBeInTheDocument();
    });
  });
});
