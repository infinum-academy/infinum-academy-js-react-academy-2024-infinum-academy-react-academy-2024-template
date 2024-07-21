export function styleRatingStars(starsParent: React.RefObject<HTMLDivElement>, currentRating: number) {
  if (starsParent.current) {
    const stars = starsParent.current?.childNodes as NodeListOf<HTMLElement>;
    resetingRatingStars(starsParent);

    const selectedIndex = 5 - currentRating;
    for (let i = 4; i >= selectedIndex; i--) {
      stars[i].style.color = "gold";
    }
  }
}

export function resetingRatingStars(starsParent: React.RefObject<HTMLDivElement>) {
  const stars = starsParent.current?.childNodes as NodeListOf<HTMLLabelElement>;

  stars.forEach((star) => {
    star.style.color = "#fff";
    const inputElement = star.childNodes[0] as HTMLInputElement;
    inputElement.checked = false;
  });
}

