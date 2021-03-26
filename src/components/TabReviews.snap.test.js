import React from 'react';
import {render} from '@testing-library/react';
import TabReviews from "./TabReviews";

test(`Should TabReviews render correctly`, () => {
  const {container} = render(<TabReviews />);
  expect(container).toMatchSnapshot();
});
