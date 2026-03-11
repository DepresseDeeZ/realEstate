# 🏡 EstateHub — Modern Real Estate Platform

![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18-green)
![React](https://img.shields.io/badge/frontend-react-blue)
![MongoDB](https://img.shields.io/badge/database-mongodb-green)
![Socket.io](https://img.shields.io/badge/realtime-socket.io-black)
![Deployment](https://img.shields.io/badge/deployed-vercel-black)

🌐 **Live Demo**  
https://real-estate-omega-five-23.vercel.app/

---

# 🚀 About the Project

**EstateHub** is a modern full-stack real estate platform designed to simplify the way users discover, rent, and purchase properties.

The platform allows users to browse listings, explore property locations on maps, interact with property owners, and manage property listings through an intuitive and responsive interface.

This project was built to demonstrate **production-level full-stack architecture**, combining modern frontend technologies with scalable backend services and real-time communication.

The platform integrates:

- Modern frontend development using **React + Vite**
- Scalable backend architecture using **Node.js and Express**
- Cloud-hosted database with **MongoDB**
- Real-time messaging using **Socket.io**
- Cloud media management using **Cloudinary**

---

# 🎬 Live Project Demo

🔗 **Visit the Live Application**

https://real-estate-omega-five-23.vercel.app/

The demo showcases the full capabilities of the platform including:

- Property browsing
- Property search and filtering
- Real-time messaging
- Property detail views
- Interactive maps
- User authentication

---

# ✨ Key Features

## 🏠 Property Listings

Users can explore a wide variety of property listings categorized into:

- Rental properties
- Properties available for purchase

Each listing includes:

- Property images
- Price information
- Property description
- Location
- Amenities
- Property specifications

---

## 🔎 Advanced Property Search

The platform allows users to search and filter properties based on:

- Property type (rent / buy)
- Location
- Price range
- Property size
- Amenities

This improves user experience by helping users quickly find properties that match their requirements.

---

## 🗺 Interactive Map Integration

EstateHub integrates **Leaflet Maps** to display property locations visually.

Users can:

- View property locations on a map
- Understand nearby areas
- Explore neighborhood locations

---

## 💬 Real-Time Messaging

The platform includes a real-time messaging system that allows direct communication between users and property owners.

Features include:

- Instant message delivery
- Real-time updates
- Conversation tracking

This functionality is powered by **Socket.io**.

---

## 🔐 Secure Authentication

EstateHub includes a secure authentication system using **JWT tokens**.

Features include:

- User registration
- Secure login
- Password hashing using bcrypt
- Protected API routes

---

## 🖼 Cloud Image Storage

Property images are uploaded and stored using **Cloudinary**.

Benefits include:

- fast image delivery
- scalable storage
- optimized media management

---

# 📸 Application Screenshots

## 🏠 Homepage

![Homepage](https://github.com/user-attachments/assets/2047a500-90b6-4c42-ad1f-1d05c6eddebb)

The homepage introduces users to the platform and includes:

- property search bar
- featured listings
- statistics
- informational sections

---

## 🏘 Property Listings

![Listings](https://github.com/user-attachments/assets/f88a91a5-84cc-44e8-8086-7da9f700f4c7)

Users can browse available properties categorized by rental and sale listings.

Each property card displays:

- property image
- price
- location
- quick overview

---

## 📄 Property Details

![Property Details](https://github.com/user-attachments/assets/6fda5663-7af5-47d1-8e89-501609a209da)
Detailed property pages include:

- property gallery
- property description
- amenities
- location map
- contact options

---

# 🧠 System Architecture

EstateHub follows a **client-server architecture**.

```
Client (React + Vite)
        │
        │ Axios API Requests
        ▼
Backend API (Node.js + Express)
        │
        │ Prisma ORM
        ▼
MongoDB Database
        │
        ▼
Socket Server (Real-time messaging)
```

Additional services:

- Cloudinary (media storage)
- Vercel (frontend hosting)

---

# 📁 Project Structure

```
EstateHub
│
├── api
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── prisma
│   ├── lib
│   ├── app.js
│   ├── seedPosts.js
│   └── package.json
│
├── client
│   ├── src
│   ├── public
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
│
├── socket
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# 🧰 Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- React Leaflet
- Formik
- Yup

---

## Backend

- Node.js
- Express.js
- Prisma ORM
- MongoDB
- JWT Authentication
- bcrypt

---

## Real-Time Communication

- Socket.io

---

## Media Storage

- Cloudinary

---

# ⚙️ Environment Variables

Create a `.env` file inside the **api folder**.

Example format:

```
DATABASE_URL=your_database_connection
JWT_SECRET_KEY=your_secret_key
CLIENT_URL=http://localhost:5173
```

Example structure:

```
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>
JWT_SECRET_KEY=secure_secret_key
CLIENT_URL=http://localhost:5173
```

⚠️ Never commit `.env` files to GitHub.

---

# 🛠 Installation

Clone the repository.

```
git clone https://github.com/DepresseDeeZ/realEstate.git
```

Move into the project directory.

```
cd estatehub
```

---

# ▶ Running Backend Server

Navigate to the backend directory.

```
cd api
```

Install dependencies.

```
npm install
```

Start development server.

```
npm run dev
```

Alternative command:

```
node --env-file .env api/app.js
```

---

# 💻 Running Frontend

Navigate to client directory.

```
cd client
```

Install dependencies.

```
npm install
```

Start development server.

```
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# ⚡ Running Socket Server

Navigate to socket folder.

```
cd socket
```

Install dependencies.

```
npm install
```

Run server.

```
node app.js
```

This server manages real-time messaging.

---

# 🌱 Seeding Database

To populate the database with sample property listings run:

```
node --env-file .env seedPosts.js
```

This inserts example property data including posts and post details.

---

# 🔐 Security Practices

The project follows several security practices:

- JWT authentication
- Password hashing with bcrypt
- Environment variable protection
- Secure API route validation

---

# 🚀 Performance Optimizations

Several optimizations were implemented:

- lazy loading components
- efficient database queries
- modular component architecture
- optimized API calls

---

# 🔮 Future Improvements

Planned enhancements include:

- AI property recommendation system
- map-based filtering
- payment integration
- property analytics dashboard
- push notifications

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Umang Raval**


💻 GitHub  
https://github.com/DepresseDeeZ
