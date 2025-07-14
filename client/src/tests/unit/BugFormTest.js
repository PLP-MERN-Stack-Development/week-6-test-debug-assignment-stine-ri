import { render, fireEvent, screen } from '@testing-library/react';
import BugForm from '../components/BugForm';
import { test, expect } from '@jest/globals';
import { jest } from '@jest/globals'; 
test('submits bug data with Tailwind classes', () => {
  const mockSubmit = jest.fn();
  render(<BugForm onSubmit={mockSubmit} />);

  const input = screen.getByPlaceholderText('Enter bug title...');
  const button = screen.getByText('Report Bug');

  fireEvent.change(input, { target: { value: 'UI Button Broken' } });
  fireEvent.click(button);

  expect(mockSubmit).toHaveBeenCalledWith({
    title: 'UI Button Broken',
    status: 'open'
  });
});