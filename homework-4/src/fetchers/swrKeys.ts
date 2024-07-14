const apiUrl = 'https://tv-shows.infinum.academy';

export const swrKeys = {
  register: `${apiUrl}/users`,
  login: `${apiUrl}/users/sign_in`,
  currentUser: `${apiUrl}/users/me`,
  allShows: `${apiUrl}/shows`,
  topRatedShows: `${apiUrl}/shows/top_rated`,
  getShow: (id: string) => `${apiUrl}/shows/${id}`
};