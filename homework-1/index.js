const reviewList = document.querySelector(".review-list");
const averageRatingEl = document.querySelector(".average-rating");
let reviewArr = JSON.parse(localStorage.getItem("review-array")) || [];
let rating;

function renderReviews(newReview) {
  if (newReview) {
    reviewList.insertBefore(
      createReviewElement(newReview),
      reviewList.firstChild
    );
    styleRatingStars(newReview.rating, newReview.id);
  } else {
    reviewArr.forEach((review) => {
      reviewList.appendChild(createReviewElement(review));
      styleRatingStars(review.rating, review.id);
    });
  }
  calculateAverageRating();
}

function createReviewElement(review) {
  const reviewEl = document.createElement("div");
  reviewEl.setAttribute("data-index", review.id);

  reviewEl.classList.add("review-element");
  reviewEl.innerHTML = `
    <div>
      <p>${review.comment}</p>
      <p>${review.rating} / 5</p>
      <p data-rating-index=${review.id} class="review-rated">
        <i class="fa-regular fa-star star"></i>
        <i class="fa-regular fa-star star"></i>
        <i class="fa-regular fa-star star"></i>
        <i class="fa-regular fa-star star"></i>
        <i class="fa-regular fa-star star"></i>
      </p>
    </div>
    <button class="review-delete-btn" onclick='deleteReview(${JSON.stringify(
      review
    )})'>Delete</button>
  `;
  return reviewEl;
}

function addNewReview() {
  const comment = document.getElementById("review-comment");
  let id;

  if (!comment.value || !rating || rating < 1 || rating > 5) {
    alert("Please fill in the comment and select a rating between 1 and 5");
    return;
  }

  if (reviewArr.length) {
    id = reviewArr[0].id + 1;
  }

  const newReview = {
    id: id || 1,
    comment: comment.value,
    rating: rating,
  };
  reviewArr.unshift(newReview);
  localStorage.setItem("review-array", JSON.stringify(reviewArr));
  renderReviews(newReview);
  resetFormInputs();
}

function deleteReview(review) {
  const deletedElement = document.querySelector(`[data-index="${review.id}"]`);
  deletedElement.remove();
  reviewArr = reviewArr.filter((r) => r.id != review.id);

  localStorage.setItem("review-array", JSON.stringify(reviewArr));
  if (!reviewArr.length) {
    localStorage.removeItem("review-array");
  }
  calculateAverageRating();
}

function onRatingChange(event) {
  rating = event.target.value;
  styleRatingStars(rating);
}

function resetFormInputs() {
  rating = null;
  const stars = document.querySelectorAll(".review-rating i");
  stars.forEach((star) => (star.style.color = "#fff"));

  const comment = document.getElementById("review-comment");
  comment.value = "";
}

function calculateAverageRating() {
  const totalRating = reviewArr.reduce(
    (sum, { rating }) => sum + parseInt(rating),
    0
  );
  const averageRating =
    reviewArr.length > 0 ? totalRating / reviewArr.length : 0;
  averageRatingEl.innerHTML = `${averageRating.toFixed(2)} (${
    reviewArr.length
  })`;
}

function styleRatingStars(rating, id) {
  let stars;
  if (id) {
    stars = document.querySelectorAll(`[data-rating-index="${id}"] i`);
  } else {
    stars = document.querySelectorAll(".review-rating i");
  }
  const selectedIndex = 5 - rating;

  stars.forEach((star) => (star.style.color = "#fff"));

  for (let i = 4; i >= selectedIndex; i--) {
    stars[i].style.color = "gold";
  }
}

renderReviews();
