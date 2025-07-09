# Gemini Project Analysis: mieventu.com

This document provides a high-level analysis of the `mieventu.com` project based on its file structure and configuration.

## Project Overview

This is a full-stack web application built with the **Laravel** framework for the backend and **Vue.js** for the frontend. It appears to be an event management or invitation system, with models for `Invitacion`, `Invitados`, and `Grupo`.

The frontend and backend are tightly coupled using **Inertia.js**, which allows for building a modern, single-page application experience with server-side routing and controllers.

## Technology Stack

- **Backend**: PHP 8.1+ with Laravel 10.
- **Frontend**: Vue.js 3 with Vite for asset bundling.
- **Styling**: Tailwind CSS and Bootstrap, processed with PostCSS. It also includes Font Awesome icons.
- **Database**: SQLite (as suggested by `database/database.sqlite`).
- **Authentication**: Laravel Breeze is used for authentication scaffolding.
- **Testing**: Pest is the primary testing framework.

## Key Directories

- `app/`: Contains all core PHP application code, including Models, Controllers, and Policies.
- `config/`: Stores the application's configuration files.
- `database/`: Holds database migrations, seeders, and factories.
- `public/`: The web root. Contains the `index.php` entry point and compiled assets.
- `resources/js/`: Contains all frontend Vue.js components, pages, and layouts.
- `routes/`: Defines all web, API, and authentication routes for the application.

## Development & Build Commands

The following scripts are defined in `package.json`:

- **`npm run dev`**: Starts the Vite development server for hot-module replacement during frontend development.
- **`npm run build`**: Compiles and bundles the frontend assets (JavaScript, CSS) and a server-side rendering build for production.

Standard Laravel commands are also available via the `artisan` script:

- **`php artisan serve`**: Starts the built-in PHP development server.
- **`php artisan test`**: Runs the Pest test suite.
- **`php artisan migrate`**: Executes the database migrations.
