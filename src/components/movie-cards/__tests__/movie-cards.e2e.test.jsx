import React from "react";
import { mount } from "enzyme";

import MovieCards from "../movie-cards.jsx";

const mock = {
  movies: [
    {
      id: 1,
      poster: `image`,
      src: `source_11`,
      title: `Fantastic Beasts`,
    },
    {
      id: 2,
      poster: `image2`,
      src: `source_22`,
      title: `Aviator`,
    },
    {
      id: 3,
      poster: `image`,
      src: `source_33`,
      title: `Drive`,
    },
  ],
};

describe(`mouse events`, () => {
  const { movies } = mock;

  it(`mouseEnter&mouseLeave on movieCard change state idPlay`, () => {
    jest.useFakeTimers();
    const firstMovieId = movies[0].id;
    const component = mount(<MovieCards movies={movies} />);
    const movieCard = component.find(`.small-movie-card`);

    expect(component.state(`idPlay`)).toBe(-1);
    movieCard.at(0).simulate(`mouseEnter`);
    jest.advanceTimersByTime(1000);
    expect(component.state(`idPlay`)).toBe(firstMovieId);

    movieCard.at(0).simulate(`mouseLeave`);
    expect(component.state(`idPlay`)).toBe(-1);
  });
});
