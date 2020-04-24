import React from "react";
import { shallow } from "enzyme";

import MovieCard from "../movie-card.jsx";

const mock = {
  movie: {
    id: 1,
    src: `source`,
    title: `movie title`,
  },
};

it(`click on play button call callback with card id`, () => {
  const { movie } = mock;
  const clickHandler = jest.fn();

  const component = shallow(
    <MovieCard
      movie={movie}
      onClick={clickHandler}
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
    />
  );
  const playButton = component.find(`.small-movie-card__play-btn`);
  playButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledWith(movie.id);
});
