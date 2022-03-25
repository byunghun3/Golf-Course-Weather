import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CourseWeather from '../components/CourseWeather';

describe("CourseWeather Search", () => {
    test('renders city input value', () => {
        render(<CourseWeather />);
        const inputElement = screen.getByPlaceholderText(/search city/i);
        expect(inputElement).toBeInTheDocument();
    });

    test('renders state input value', () => {
        render(<CourseWeather />);
        const inputElement = screen.getByPlaceholderText(/state code/i);
        expect(inputElement).toBeInTheDocument();
    });

    test('city input value changes when typed', () => {
        render(<CourseWeather />);
        const inputElement = screen.getByPlaceholderText(/search city/i);
        fireEvent.change(inputElement, { target: { value: "test" } });
        expect(inputElement.value).toBe("test");
    });

    test('state input value changes when typed', () => {
        render(<CourseWeather />);
        const inputElement = screen.getByPlaceholderText(/state code/i);
        fireEvent.change(inputElement, { target: { value: "test" } });
        expect(inputElement.value).toBe("test");
    });

    test('button submits input results', async () => {
        render(<CourseWeather />);
        const inputCityElement = screen.getByPlaceholderText(/search city/i);
        const inputStateElement = screen.getByPlaceholderText(/state code/i);
        const buttonElement = screen.getByText(/search/i);
        fireEvent.change(inputCityElement, { target: { value: "Mahwah" } });
        fireEvent.change(inputStateElement, { target: { value: "NJ" } });
        fireEvent.click(buttonElement)
        expect(await screen.findByText("Mahwah, NJ")).toBeInTheDocument();
    })
});
