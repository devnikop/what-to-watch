import React from "react";
import renderer from "react-test-renderer";

import MovieCard from "../movie-card.jsx";

const mock = {
  movie: {
    src: `source`,
    title: `movie title`,
  },
};

it(`snapshot`, () => {
  const { movie } = mock;

  const tree = renderer.create(<MovieCard movie={movie} />).toJSON();
  expect(tree).toMatchSnapshot();
});
