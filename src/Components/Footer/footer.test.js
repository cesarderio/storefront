import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  it('renders as expected', () => {
    render(<Footer />);

    let footer = screen.getByText('&copy; 2023 Raphael Cesar');

    expect(footer).toBeTruthy();
    expect(footer).toBeInTheDocument();

    
  })
})
