import React from "react";
import renderer from "react-test-renderer";

import MovieCards from "../movie-cards.jsx";

const mock = {
  movies: [
    {
      id: 1,
      src: `source_11`,
      title: `Fantastic Beasts`,
    },
    {
      id: 2,
      src: `source_22`,
      title: `Aviator`,
    },
    {
      id: 3,
      src: `source_33`,
      title: `Bohemian rhapsody`,
    },
  ],
};

it(`snapshot`, () => {
  const { movies } = mock;

  const tree = renderer.create(<MovieCards movies={movies} />).toJSON();
  expect(tree).toMatchSnapshot();
});
