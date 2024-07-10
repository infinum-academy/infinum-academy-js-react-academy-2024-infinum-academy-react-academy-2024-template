import { IShow } from "../../../typings/show";
import { nanoid } from "nanoid";

export const shows: IShow[] = [
  {
    id: nanoid(),
    title: "The Witcher",
    description:
      "The Witcher is an American fantasy drama series produced by Lauren Schmidt Hissrich. It is based on the book series of the same name by Polish writer Andrzej Sapkowski.",
    averageRating: 5,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
  },
  {
    id: nanoid(),
    title: "Game of Thrones",
    description:
      "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO.",
    averageRating: 3,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  },
  {
    id: nanoid(),
    title: "The Mandalorian",
    description:
      "The Mandalorian is an American space Western television series created by Jon Favreau for the streaming service Disney+.",
    averageRating: 4,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU2YS00NzBlLTgwZWUtYWQzNWFhNDkyYjg3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: nanoid(),
    title: "Breaking Bad",
    description:
      "Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan.",
    averageRating: 5,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
  },
  {
    id: nanoid(),
    title: "The Office",
    description:
      "The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees.",
    averageRating: 3.5,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
  },
];
