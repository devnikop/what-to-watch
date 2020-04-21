import React from "react";
import {shallow} from "enzyme";

import MainPage from "../main-page.jsx";

it(`Click on title works correctly`, () => {
  const clickHandler = jest.fn();
  const component = shallow(
      <MainPage movies={[`dsf`, `sdf`]} onClick={clickHandler} />
  );

  const button = component.find(`.movie-card`);
  button.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
