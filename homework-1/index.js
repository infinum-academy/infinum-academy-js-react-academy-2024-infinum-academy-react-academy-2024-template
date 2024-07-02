const reviewList = document.querySelector(".review-list");

const reviewArr = [
  {
    comment: "Good show, plots are interesting and it's very dynamic",
    rating: 4,
  },
  {
    comment:
      "Meh, first couple seasons are watchable but the rest is not worth my time",
    rating: 2,
  },
  {
    comment: "Eric shouldn't have left the team, his departure makes no sense.",
    rating: 3,
  },
];

function renderReviews(r) {
  if (!reviewList.childElementCount) {
    reviewArr.forEach((review) => {
      reviewList.appendChild(createReviewElement(review));
    });
  } else if (r) {
    reviewList.appendChild(createReviewElement(r));
  }
}

function createReviewElement(review) {
  const reviewEl = document.createElement("div");

  reviewEl.classList.add("review-element");
  reviewEl.innerHTML = `
    <p>${review.comment}</p>
    <p>${review.rating} / 5</p>
  `;
  return reviewEl;
}

function addNewReview() {
  const comment = document.getElementById("review-comment");
  const rating = document.getElementById("review-rating");

  if (!comment.value || !rating.value || rating.value < 1 || rating.value > 5)
    return;

  const newReview = {
    comment: comment.value,
    rating: rating.value,
  };
  reviewArr.push(newReview);
  renderReviews(newReview);
  comment.value = "";
  rating.value = "";
}

renderReviews();
