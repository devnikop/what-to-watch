import React from "react";
import renderer from "react-test-renderer";

import App from "../app.jsx";

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

it(`App renders correctly`, () => {
  const { movies } = mock;

  const tree = renderer.create(<App movies={movies} />).toJSON();

  expect(tree).toMatchSnapshot();
});
