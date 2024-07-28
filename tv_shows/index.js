let allReviews = []
let starsSelected = 0;

function createReviewItem(review) {
    const reviewItemElement = document.createElement('div');
    reviewItemElement.classList = ['review-item'];

    const reviewTextItemElement = document.createElement('div');
    reviewTextItemElement.classList = ['review-text-item'];
    reviewTextItemElement.textContent = review.text;
    reviewItemElement.appendChild(reviewTextItemElement);

    const reviewFoterItemElement = document.createElement('div');
    reviewFoterItemElement.classList = ['review-footer-item'];
    reviewItemElement.appendChild(reviewFoterItemElement);

    const reviewRatingItemElement = document.createElement('div');
    reviewRatingItemElement.classList = ['review-rating-item'];
    const rating = review.rating;
    for (let index = 0; index < rating; index++) {
        const filledStar = createFilledStarElement();
        reviewRatingItemElement.appendChild(filledStar);
    };
    for (let index = 0; index < 5 - rating; index++) {
        const emptyStar = createEmptyStarElement();
        reviewRatingItemElement.appendChild(emptyStar);
    };
    const reviewRatingValue = document.createElement('div');
    reviewRatingValue.classList = ['review-rating-value'];
    reviewRatingValue.textContent = rating.toString().concat('/5');
    reviewRatingItemElement.appendChild(reviewRatingValue);
    reviewFoterItemElement.appendChild(reviewRatingItemElement);

    const deleteReviewButtonElement = document.createElement('button');
    deleteReviewButtonElement.classList = ['delete-review-button'];
    deleteReviewButtonElement.textContent = 'Delete';

    reviewFoterItemElement.appendChild(deleteReviewButtonElement);

    return reviewItemElement;
}

function renderReviewItem(review) {
    const reviewItem = createReviewItem(review);

    const reviewListElement = document.getElementById('review-list');
    reviewListElement.appendChild(reviewItem);
    renderAverageRating();
    saveToLocalStorage(allReviews);
}

function createFilledStarElement() {
    const filledStarElement = document.createElement('img');
    filledStarElement.classList = ['filled-star'];
    filledStarElement.src = "images/full_star.png";
    filledStarElement.alt = 'filled-star';
    
    return filledStarElement;
}

function createEmptyStarElement() {
    const emptyStarElement = document.createElement('img');
    emptyStarElement.classList = ['empty-star'];
    emptyStarElement.src = "images/empty_star.png";
    emptyStarElement.alt = 'empty-star';
    
    return emptyStarElement;
}

function renderReviewList() {
    const reviewListElement = document.getElementById('review-list');
    reviewListElement.innerHTML = '';

    allReviews.forEach((review) => {
        reviewListElement.appendChild(createReviewItem(review));
    });

    renderAverageRating();

    saveToLocalStorage(allReviews);
}

function postReview() {
    const reviewTextArea = document.getElementById('review-text');
    const reviewTextValue = reviewTextArea.value;
    
    if (!reviewTextValue || starsSelected <= 0) {
        alert('A review should have text and a rating!');
        return;
    };

    const newReview = {
        text: reviewTextValue,
        rating: starsSelected,
    };
    allReviews.push(newReview);
    renderReviewItem(newReview); // renderaj samo njega, ne cijelu listu brisat pa ispocetka renderat
    
    reviewTextArea.value = '';
    starsSelected = 0;
    unhoverStars();
}

function renderAverageRating() {
    const averageRatingItem = document.getElementById('average-rating');
    let ratingsSum = 0;
    const reviewNumber = allReviews.length;

    allReviews.forEach((review) => {
        ratingsSum += review.rating;
    });

    const averageRating = (ratingsSum/reviewNumber).toFixed(2);
    const averageRatingValue = reviewNumber > 0 ? averageRating.toString().concat('/5.00') : 'No ratings';
    averageRatingItem.textContent = averageRatingValue;
}

function saveToLocalStorage(reviewList) {
    if (reviewList.length == 0) {
        localStorage.removeItem('review-list');
        return;
    };

    const reviewListString = JSON.stringify(reviewList);
    localStorage.setItem('review-list', reviewListString);
}

function loadFromLocalStorage() {
    const reviewListString = localStorage.getItem('review-list');
    const reviewList = JSON.parse(reviewListString);
    return reviewList ?? [];
}

function selectStars(number, clicked) {
    for (let index = 1; index <= number; index++) {
        const emptyStarElement = document.getElementById('star-'.concat(index.toString()));
        emptyStarElement.src = "images/full_star.png"
    };
    for (let index = number + 1; index <= 5; index++) {
        const emptyStarElement = document.getElementById('star-'.concat(index.toString()));
        emptyStarElement.src = "images/empty_star.png"
    };
    if(clicked) {
        starsSelected = number;
    };
}

function unhoverStars() {
    for (let index = 1; index <= starsSelected; index++) {
        const emptyStarElement = document.getElementById('star-'.concat(index.toString()));
        emptyStarElement.src = "images/full_star.png"
    };
    for (let index = starsSelected + 1; index <= 5; index++) {
        const emptyStarElement = document.getElementById('star-'.concat(index.toString()));
        emptyStarElement.src = "images/empty_star.png"
    };
}

const reviewListElement = document.getElementById('review-list');
reviewListElement.addEventListener('click', (e) => {
    const reviewItemElement = e.target.parentElement.parentElement;
    const reviewListElement = e.target.parentElement.parentElement.parentElement;
    const reviewTextItemElement = reviewItemElement.getElementsByClassName('review-text-item')[0];
    const reviewFoterItemElement = reviewItemElement.getElementsByClassName('review-footer-item')[0];
    const reviewRatingItemElement = reviewFoterItemElement.getElementsByClassName('review-rating-item')[0];
    const reviewRatingValueElement = reviewRatingItemElement.getElementsByClassName('review-rating-value')[0];
    const ratingValue = parseInt(reviewRatingValueElement.textContent.split('/')[0]);
    allReviews = allReviews.filter((r) => {
        if (r.text !== reviewTextItemElement.textContent || r.rating !== ratingValue) {
            return true;
        }
        return false;
    });
    saveToLocalStorage(allReviews);

    reviewListElement.removeChild(reviewItemElement);
    renderAverageRating();
});


function renderEmptyEelectorStars() {
    const reviewRatingElement = document.getElementById('review-rating-2');

    for (let index = 1; index <= 5; index++) {
        const selectorStarElement = document.createElement('img');
        selectorStarElement.id = 'star-'.concat(index.toString());
        selectorStarElement.src = 'images/empty_star.png';
        selectorStarElement.classList = ['empty-selector-star'];
        selectorStarElement.alt = 'star';
        reviewRatingElement.appendChild(selectorStarElement);
    };
};

renderEmptyEelectorStars();

const starsWrapper = document.getElementById('review-rating-2');
starsWrapper.addEventListener('mouseover', (e) => {
    if (e.target.className !== 'empty-selector-star') {
        return;
    }

    const starId = parseInt(e.target.id.split('-')[1]);
    selectStars(starId, false);
});

starsWrapper.addEventListener('mouseout', (e) => {
    unhoverStars();
});

starsWrapper.addEventListener('click', (e) => {
    if (e.target.className !== 'empty-selector-star') {
        return;
    }

    const starId = parseInt(e.target.id.split('-')[1]);
    selectStars(starId, true);
});

allReviews = loadFromLocalStorage();
renderReviewList();