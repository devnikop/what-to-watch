import React from "react";
import { mount } from "enzyme";

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

describe(`mouse events`, () => {
  const { movies } = mock;

  it(`mouseEnter&mouseLeave on movieCard change state idActive`, () => {
    const firstMovieId = movies[0].id;
    const component = mount(<MovieCards movies={movies} />);
    const movieCard = component.find(`.small-movie-card`);

    expect(component.state(`idActive`)).toBe(-1);
    movieCard.at(0).simulate(`mouseEnter`);
    expect(component.state(`idActive`)).toBe(firstMovieId);

    movieCard.at(0).simulate(`mouseLeave`);
    expect(component.state(`idActive`)).toBe(-1);
  });

  it(`click on play button change state idPlay`, () => {
    const firstMovieId = movies[0].id;
    const component = mount(<MovieCards movies={movies} />);
    const playButton = component.find(`.small-movie-card__play-btn`);

    expect(component.state(`idPlay`)).toBe(-1);
    playButton.at(0).simulate(`click`);
    expect(component.state(`idPlay`)).toBe(firstMovieId);
  });
});
