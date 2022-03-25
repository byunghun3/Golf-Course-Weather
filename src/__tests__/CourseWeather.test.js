import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CourseWeather from '../components/CourseWeather';

describe("Course weather search", () => {
    // test("renders city input value", () => {
    //     render(<CourseWeather />);
    //     const inputElement = screen.getByPlaceholderText(/search city/i);
    //     expect(inputElement).toBeInTheDocument();
    // });

    // test("renders state input value", () => {
    //     render(<CourseWeather />);
    //     const inputElement = screen.getByPlaceholderText(/state code/i);
    //     expect(inputElement).toBeInTheDocument();
    // });

    test("city input value registers when typed", () => {
        render(<CourseWeather />);
        const inputElement = screen.getByPlaceholderText(/search city/i);
        fireEvent.change(inputElement, { target: { value: "test" } });
        expect(inputElement.value).toBe("test");
    });

    test("state input value registers when typed", () => {
        render(<CourseWeather />);
        const inputElement = screen.getByPlaceholderText(/state code/i);
        fireEvent.change(inputElement, { target: { value: "test" } });
        expect(inputElement.value).toBe("test");
    });

    test("search button submits input results", async () => {
        render(<CourseWeather />);
        const inputCityElement = screen.getByPlaceholderText(/search city/i);
        const inputStateElement = screen.getByPlaceholderText(/state code/i);
        const buttonElement = screen.getByText("SEARCH");
        fireEvent.change(inputCityElement, { target: { value: "Mahwah" } });
        fireEvent.change(inputStateElement, { target: { value: "NJ" } });
        fireEvent.click(buttonElement);
        expect(await screen.findByText("Mahwah, NJ")).toBeInTheDocument();
    });
});

describe("Course name", () => {
    test("edits, saves, deletes course name", async () => {
        render(<CourseWeather />);
        const editButtonElement = screen.getByAltText("Edit");
        fireEvent.click(editButtonElement);
        expect(await screen.findByPlaceholderText("Course Name")).toBeInTheDocument();
        const inputElement = screen.getByPlaceholderText("Course Name");
        fireEvent.change(inputElement, { target: { value: "Darlington" } });
        expect(inputElement.value).toBe("Darlington");
        const saveButtonElement = screen.getByText("SAVE");
        fireEvent.click(saveButtonElement);
        expect(await screen.findByText("Darlington")).toBeInTheDocument();
        const deleteButtonElement = screen.getByAltText("Delete");
        fireEvent.click(deleteButtonElement);
        expect(screen.queryByText("Darlington")).not.toBeInTheDocument();
    });
});
