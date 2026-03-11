# EstateHub

**Live Demo:**  
https://real-estate-omega-five-23.vercel.app/

EstateHub is a full-stack real estate platform designed to simplify the process of discovering, renting, and purchasing properties. The platform allows users to browse property listings, view detailed information about properties, explore property locations using interactive maps, and communicate with property owners or agents through a real-time messaging system.

The project demonstrates modern full-stack development practices using **React, Node.js, Express, MongoDB, and cloud-based media storage**. It is designed to be modular, scalable, and suitable as a production-ready architecture for real estate listing platforms.

---

# Project Demo

The application is deployed and accessible at the following link:

https://real-estate-omega-five-23.vercel.app/

The demo includes:

- Property search functionality
- Rental and sale listings
- Property detail pages
- Interactive map visualization
- User authentication
- Real-time messaging system

---

# Application Screenshots

## Homepage

![Homepage](docs/homepage.png)

The homepage introduces the platform with a search bar, featured properties, informational sections, and call-to-action components.

---

## Property Listings

![Listings](docs/listings.png)

Users can explore available properties categorized by rental and sale listings. Listings include pricing, location, property type, and preview images.

---

## Property Details

![Property Details](docs/property-details.png)

Each property page displays detailed information including:

- Property price
- Property description
- Amenities
- Image gallery
- Location map
- Contact or messaging options

---

# Project Objectives

The main objectives of EstateHub are:

- Provide an intuitive property discovery platform
- Demonstrate modern full-stack development architecture
- Implement scalable REST APIs
- Integrate real-time messaging between users
- Utilize cloud services for media management
- Build a responsive interface for multiple devices

---

# System Architecture

EstateHub follows a standard **client-server architecture**.

Frontend (React)
↓
REST API (Node.js / Express)
↓
Database (MongoDB)

The frontend communicates with the backend through REST APIs using Axios.

Real-time communication features use **Socket.io**.

---

# Step-by-Step Development

## 1. Project Setup

### Repository Initialization

The project repository was created on GitHub and cloned to the local development environment.

```bash
git clone https://github.com/DepresseDeeZ/estatehub.git
```

### Directory Structure

The project is divided into two main parts:

- **frontend** — React-based user interface
- **backend** — Node.js and Express API server

Example structure:

```
EstateHub
│
├── frontend
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── context
│   └── assets
│
├── backend
│   ├── api
│   ├── controllers
│   ├── models
│   ├── routes
│   └── middleware
│
└── README.md
```

### Environment Setup

Node.js and npm were installed and the project was initialized.

```bash
npm init -y
```

A `.gitignore` file was configured to exclude:

- `node_modules`
- `.env`
- build directories

---

# Frontend Development

## Bootstrapping the React Application

The frontend application was created using React.

```bash
npx create-react-app frontend
cd frontend
```

## Installing Dependencies

Essential libraries were installed to support routing, API communication, styling, form validation, and mapping functionality.

```bash
npm install react-router-dom axios tailwindcss formik yup leaflet react-leaflet
```

### Key Frontend Technologies

| Technology | Purpose |
|------------|--------|
| React | UI development |
| React Router | Client-side navigation |
| Tailwind CSS | Utility-based styling |
| Axios | API communication |
| Formik / Yup | Form handling and validation |
| React Leaflet | Interactive maps |

---

## Component Development

Reusable components were created to maintain a modular architecture.

### Core Components

- **Navbar** — responsive navigation menu
- **SearchBar** — property search interface
- **PropertyCard** — reusable property display component
- **Footer** — contact information and platform links

### Main Pages

- **HomePage** — landing page with featured listings
- **ListingPage** — displays property search results
- **PropertyDetailPage** — detailed property information
- **AgentProfile** — agent details and listings

---

# Backend Development

## Setting Up Node.js and Express

Backend dependencies were installed.

```bash
npm install express mongoose dotenv body-parser cors jsonwebtoken bcryptjs socket.io
```

### Key Backend Technologies

| Technology | Purpose |
|------------|--------|
| Node.js | Server runtime |
| Express.js | REST API framework |
| MongoDB | Database |
| Mongoose | MongoDB data modeling |
| JWT | Authentication |
| Socket.io | Real-time messaging |

---

# Database Design

The database includes several main collections:

### Users

Stores user authentication data.

Fields include:

- username
- email
- password
- profile information

### Properties (Posts)

Stores property listings.

Fields include:

- title
- price
- location
- type (rent / buy)
- property images
- description

### Property Details

Additional detailed data for properties such as:

- amenities
- room count
- property size
- nearby locations

### Messages

Used for real-time messaging between users.

---

# API Design

The backend exposes RESTful endpoints for managing application data.

Example endpoints:

```
POST /auth/register
POST /auth/login
GET /posts
GET /posts/:id
POST /posts
DELETE /posts/:id
```

These APIs allow the frontend to interact with the database through secure HTTP requests.

---

# Environment Configuration

Create a `.env` file in the backend directory.

Example configuration:

```env
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
CLIENT_URL=http://localhost:5173
```

Sensitive values should **never be committed to version control**.

---

# Running the Application

## Start Backend

Navigate to the backend directory.

```bash
npm run dev
```

Alternative command using Node:

```bash
node --env-file .env api/app.js
```

For debugging using Console Ninja:

```bash
console-ninja node --env-file .env --watch api/app.js
```

---

## Start Frontend

Navigate to the frontend directory.

```bash
npm run dev
```

The frontend typically runs on:

```
http://localhost:5173
```

---

# Seeding Sample Property Data

To populate the database with sample property listings run:

```bash
node --env-file .env seedPosts.js
```

This script inserts predefined property data into the database to allow testing without manual data entry.

---

# Messaging System

EstateHub includes a real-time messaging feature that allows users to communicate with property owners or agents.

The system is implemented using **Socket.io** and supports:

- real-time message delivery
- conversation tracking
- message notifications

Additional documentation:

https://www.notion.so/How-the-chat-msg-work-320aa61c163080bfaf71e2813f58ac0e

---

# Deployment

The project is deployed using:

Frontend:

Vercel

Backend:

Node server deployment (e.g., Heroku or similar platforms)

---

# Future Improvements

Potential enhancements include:

- payment integration
- advanced property recommendation system
- image optimization pipeline
- improved property analytics dashboard
- map-based property search filtering

---

# Summary

EstateHub is a full-stack real estate application that demonstrates scalable architecture, modular frontend design, RESTful APIs, and real-time communication. The project showcases practical integration of modern web technologies to build a responsive and feature-rich real estate platform.

---

# Author

Umang Raval

Email  
umangraval749@gmail.com

GitHub  
https://github.com/DepresseDeeZ
