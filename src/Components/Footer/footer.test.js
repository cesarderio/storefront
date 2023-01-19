import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  it('renders as expected', () => {
    render(<Footer />);

    let footer = screen.getByTestId('footer-h2');

    expect(footer).toBeTruthy();
    expect(footer).toBeInTheDocument();

    
  })
})
