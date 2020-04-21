import React from "react";
import renderer from "react-test-renderer";

import MainPage from "../main-page.jsx";

it(`Main page renders correctly`, () => {
  const tree = renderer
    .create(<MainPage movies={[`se`, `sefr`]} onClick={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
