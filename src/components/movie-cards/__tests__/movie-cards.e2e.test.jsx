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

describe(`mouseEnter & mouseLeave change state: idActive`, () => {
  const { movies } = mock;

  it(`mouseEnter&mouseLeave on movieCard change state idActive respectively`, () => {
    const firstMovieId = movies[0].id;
    const component = mount(<MovieCards movies={movies} />);
    const movieCard = component.find(`.small-movie-card`);

    expect(component.state(`idActive`)).toBe(-1);
    movieCard.at(0).simulate(`mouseEnter`);
    expect(component.state(`idActive`)).toBe(firstMovieId);

    movieCard.at(0).simulate(`mouseLeave`);
    expect(component.state(`idActive`)).toBe(-1);
  });
});
