import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App'; // Adjust the path as needed

describe('App', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<App />);
    const appContainer = getByTestId('app-container');
    expect(appContainer).toBeTruthy();
  });
});
