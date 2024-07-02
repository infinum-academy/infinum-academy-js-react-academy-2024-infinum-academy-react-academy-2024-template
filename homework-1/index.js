const reviewList = document.querySelector(".review-list");
const averageRatingEl = document.querySelector(".average-rating");
let reviewArr = JSON.parse(localStorage.getItem("review-array")) || [];

function renderReviews(r) {
  if (r) {
    reviewList.appendChild(createReviewElement(r));
  } else {
    reviewArr.forEach(review => {
      reviewList.appendChild(createReviewElement(review));
    });
  }
  const totalRating = reviewArr.reduce((sum, {rating}) => sum + parseInt(rating), 0);
  const averageRating = reviewArr.length > 0 ? totalRating / reviewArr.length : 0;
  averageRatingEl.innerHTML = `${averageRating.toFixed(2)} (${reviewArr.length})`;
}

function createReviewElement(review) {
  const reviewEl = document.createElement("div");

  reviewEl.classList.add("review-element");
  reviewEl.innerHTML = `
    <div>
      <p>${review.comment}</p>
      <p>${review.rating} / 5</p>
    </div>
    <button class="review-delete-btn" onclick='deleteReview(${JSON.stringify(
      review
    )})'>Delete</button>
  `;
  return reviewEl;
}

function addNewReview() {
  const comment = document.getElementById("review-comment");
  const rating = document.getElementById("review-rating");
  let id;

  if (!comment.value || !rating.value || rating.value < 1 || rating.value > 5)
    return;

  if(reviewArr.length){
    id = reviewArr[reviewArr.length - 1].id + 1;
  }
  
  const newReview = {
    id: id || 1,
    comment: comment.value,
    rating: rating.value,
  };
  reviewArr.push(newReview);
  localStorage.setItem("review-array", JSON.stringify(reviewArr));
  renderReviews(newReview);
  comment.value = "";
  rating.value = "";
}

function deleteReview(review) {
  reviewArr = reviewArr.filter((r) => r.id != review.id);
  localStorage.setItem("review-array", JSON.stringify(reviewArr));
  reviewList.innerHTML = "";
  renderReviews();
}

renderReviews();
