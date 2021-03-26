import React from 'react';
import {render} from '@testing-library/react';
import LoadingScreen from "./LoadingScreen";

test(`Should LoadingScreen render correctly`, () => {
  const {container} = render(<LoadingScreen />);
  expect(container).toMatchSnapshot();
});
