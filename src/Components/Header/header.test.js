import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('renders as expected', () => {
    render(<Header />);

    let header = screen.getByTestId('header-h1');

    expect(header).toBeTruthy();
    expect(header).toBeInTheDocument();

    
  })
})
