import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('should trigger a click event when clicked', () => {
    // Given
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>click me</Button>);

    // When
    const realButton = screen.getByText("click me");
    realButton.click();

    // Then
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should render the text dinamically', () => {
    // Given
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>click me 2</Button>);

    // When
    const realButton = screen.getByText("click me 2");

    // Then
    expect(realButton).toBeInTheDocument();
  });
});