const apiUrl = 'https://tv-shows.infinum.academy';
export const swrKeys = {
  users: `${apiUrl}/users`,
  logIn: `${apiUrl}/users/sign_in`,
  me: `${apiUrl}/users/me`,
  allShows: `${apiUrl}/shows`,
  topRatedShows: `${apiUrl}/shows/top_rated`,
  reviews: `${apiUrl}/reviews`,
  showReviews: (showId: string) => `${apiUrl}/shows/${showId}/reviews`,
  review: (reviewId: string) => `${apiUrl}/reviews/${reviewId}`,
};