import { render, screen, fireEvent } from '@testing-library/react';
import CourseWeather from '../components/CourseWeather';

describe("CourseWeather", () => {
    test('renders input value', () => {
        render(<CourseWeather />);
        const inputElement = screen.getByPlaceholderText(/search city/i);
        expect(inputElement).toBeInTheDocument();
    });

    test('input value changes when typed', () => {
        render(<CourseWeather />);
        const inputElement = screen.getByPlaceholderText(/state code/i);
        fireEvent.change(inputElement, { target: { value: "test" } });
        expect(inputElement.value).toBe("test");
    });
});
