import React from "react";
import renderer from "react-test-renderer";

import MovieCard from "../movie-card.jsx";

const mock = {
  movie: {
    id: 1,
    src: `source`,
    title: `movie title`,
  },
};

it(`snapshot`, () => {
  const { movie } = mock;

  const tree = renderer
    .create(
      <MovieCard
        movie={movie}
        onClick={jest.fn()}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
