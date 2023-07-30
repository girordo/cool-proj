import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

const app = new Elysia().get("/", () => "Hello BETH Stack World!").listen(3000);
console.log(`🦊Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);

const baseHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cool-proj with BETH Stack</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
</head>
<body class="bg-gray-100">
    <header class="bg-blue-500 text-white p-4">
        <div class="container mx-auto">
            <h1 class="text-3xl font-bold">cool-proj with BETH Stack</h1>
        </div>
    </header>

    <main class="container mx-auto mt-4">
        <div class="prose max-w-full">
            <h2 id="introduction">Introduction</h2>
            <p>cool-proj is an innovative web application built using the BETH stack, which stands for bun, elysia, tailwind, and htmx. This powerful combination of technologies allows for rapid development, seamless integration, and a delightful user experience. Whether you're a developer looking to explore new technologies or a user enjoying the features, cool-proj aims to impress.</p>

            <h2 id="technologies">Technologies</h2>

            <h3 id="bun">Bun</h3>
            <p>Bun is a lightweight and efficient web application framework designed to simplify development and promote best practices. It follows a minimalist approach, focusing on performance and ease of use.</p>
            <ul>
                <li>Routing: Simple and intuitive URL routing to handle different endpoints and views.</li>
                <li>Templating: Provides powerful template rendering for building dynamic web pages.</li>
                <li>Middleware: Easily implement middleware to handle request and response processing.</li>
                <li>RESTful APIs: Support for building RESTful APIs with ease.</li>
            </ul>

            <h3 id="elysia">Elysia</h3>
            <p>Elysia is a database library and ORM (Object-Relational Mapping) system, designed to seamlessly work with the Bun framework. It simplifies database interactions and enables developers to work with databases using intuitive Python classes and methods.</p>
            <ul>
                <li>Model Definitions: Define database tables as Python classes with fields as class attributes.</li>
                <li>Query Building: Construct complex database queries using Pythonic syntax.</li>
                <li>Migration: Simplify database schema changes and versioning.</li>
                <li>Relationships: Define relationships between models for easy data retrieval.</li>
            </ul>

            <h3 id="tailwind-css">Tailwind CSS</h3>
            <p>Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. It provides a set of pre-defined utility classes that can be combined to create custom styles without writing custom CSS.</p>
            <ul>
                <li>Utility Classes: A wide range of utility classes for styling elements without writing custom CSS.</li>
                <li>Responsive Design: Easily create responsive layouts with built-in responsive utilities.</li>
                <li>Customization: Tailwind CSS can be customized to suit project-specific design requirements.</li>
                <li>Dark Mode:

`;
