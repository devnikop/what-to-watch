import React from "react";
import renderer from "react-test-renderer";

import MainPage from "../main-page.jsx";

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
it(`Main page renders correctly`, () => {
  const { movies } = mock;

  const tree = renderer
    .create(<MainPage movies={movies} onClick={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
