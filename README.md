# Game Catalog

A full-stack web application for managing a catalog of games. Built with **Laravel (backend)** and **React + Tailwind CSS (frontend)**. Supports CRUD operations, image uploads, filters, and pagination.

---

## Tech Stack

- **Backend:** Laravel 10, PHP 8.2
- **Frontend:** React (Vite), Tailwind CSS
- **Database:** MySQL
- **Image Storage:** Laravel public storage

---

## Features

- Full CRUD operations for games
- Upload cover images (optional)
- Modal-based create/edit forms
- Server-side pagination
- Filtering by title, genre, and platform
- Responsive layout with Tailwind CSS
- API structure using Repository, Service, Request validation
- RESTful Laravel API with custom `ApiResponse` helper

---

## Game Model

| Field         | Type     | Description                 |
|---------------|----------|-----------------------------|
| title         | string   | Game title                  |
| developer     | string   | Developer name              |
| genre         | string   | Game genre                  |
| release_date  | date     | Release date                |
| platform      | string   | e.g. PC, Xbox, PlayStation  |
| price         | decimal  | Price in USD                |
| cover_image   | file     | (optional) cover image      |

---

## Setup Instructions

### Backend (Laravel)

```bash
cd backend
cp .env.example .env
php artisan key:generate

Configure your DB in .env

php artisan migrate --seed

php artisan storage:link
php artisan serve
```

### Frontend (React)

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Set Backend URL in `.env`:
```
VITE_BACKEND_URL=http://localhost:8000
```
