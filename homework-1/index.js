const reviewList = document.querySelector(".review-list");
const reviewArr = JSON.parse(localStorage.getItem("review-array")) || [];

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
  localStorage.setItem("review-array", JSON.stringify(reviewArr));
  renderReviews(newReview);
  comment.value = "";
  rating.value = "";
}

renderReviews();
