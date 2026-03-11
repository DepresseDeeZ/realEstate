# 🏡 EstateHub

![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18-green)
![React](https://img.shields.io/badge/frontend-react-blue)
![MongoDB](https://img.shields.io/badge/database-mongodb-green)
![Socket.io](https://img.shields.io/badge/realtime-socket.io-black)
![Deployment](https://img.shields.io/badge/deployed-vercel-black)

🌐 **Live Demo**  
https://real-estate-omega-five-23.vercel.app/

---

## 🚀 Overview

**EstateHub** is a modern **full-stack real estate platform** where users can:

🏠 Browse properties  
💰 Rent or buy listings  
📍 View properties on interactive maps  
💬 Chat with property owners in real-time  
🖼 Upload property images  

The project demonstrates **production-style architecture** using:

- React
- Node.js
- Express
- MongoDB
- Prisma
- Socket.io
- Cloudinary

---

# 🎬 Project Demo

🔗 **Live Application**

https://real-estate-omega-five-23.vercel.app/

Features available in the demo:

✨ Property Search  
✨ Rental Listings  
✨ Buy Listings  
✨ Real-time Chat  
✨ Authentication  
✨ Interactive Maps  

---

# 📸 Application Preview

## 🏠 Homepage

![Homepage](docs/homepage.png)

Features:

- Property search
- Featured listings
- Blogs
- Property statistics
- Hero section

---

## 🏘 Property Listings

![Listings](docs/listings.png)

Users can filter properties by:

- Rent / Buy
- Location
- Price
- Property type

---

## 📄 Property Details

![Property Details](docs/property-details.png)

Includes:

- image gallery
- amenities
- location map
- property description
- messaging button

---

# 🧠 System Architecture

```
Client (React + Vite)
        │
        │ Axios API Requests
        ▼
API Server (Node.js + Express)
        │
        │ Prisma ORM
        ▼
MongoDB Database
        │
        ▼
Socket Server (Real-time Chat)
```

---

# 🗂 Project Structure

```
EstateHub
│
├── api                # Backend server
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── prisma
│   ├── lib
│   ├── app.js
│   ├── seedPosts.js
│   └── package.json
│
├── client             # Frontend (React + Vite)
│   ├── src
│   ├── public
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
│
├── socket             # Real-time chat server
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# 🧰 Tech Stack

## Frontend

⚛ React  
⚡ Vite  
🎨 TailwindCSS  
📡 Axios  
🗺 React Leaflet  
📋 Formik + Yup  

---

## Backend

🟢 Node.js  
🚏 Express.js  
🧬 Prisma ORM  
🍃 MongoDB  
🔐 JWT Authentication  
🔑 bcrypt  

---

## Real-time System

⚡ Socket.io

Used for:

- messaging
- notifications
- chat updates

---

## Media Management

☁ Cloudinary

Used for:

- property images
- optimized delivery

---

# ⚙️ Environment Configuration

Create `.env` inside **api folder**

```
DATABASE_URL=your_database_connection
JWT_SECRET_KEY=your_secret_key
CLIENT_URL=http://localhost:5173
```

Example format:

```
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>
JWT_SECRET_KEY=<secret_key>
CLIENT_URL=http://localhost:5173
```

⚠️ Never commit `.env` to GitHub.

---

# 📦 Installation

Clone repository

```
git clone https://github.com/DepresseDeeZ/estatehub.git
```

Move into project

```
cd estatehub
```

---

# ▶ Running Backend API

Navigate to api folder

```
cd api
```

Install dependencies

```
npm install
```

Start server

```
npm run dev
```

Alternative run command

```
node --env-file .env api/app.js
```

Using Console Ninja

```
console-ninja node --env-file .env --watch api/app.js
```

---

# 💻 Running Frontend

Navigate to client folder

```
cd client
```

Install dependencies

```
npm install
```

Start development server

```
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# ⚡ Running Socket Server

Navigate to socket folder

```
cd socket
```

Install dependencies

```
npm install
```

Run socket server

```
node app.js
```

Socket server handles:

💬 chat messages  
🔔 real-time updates  

---

# 🌱 Seeding Sample Property Data

To populate database with demo listings:

```
node --env-file .env seedPosts.js
```

This script adds:

- property posts
- property details
- example listings

---

# 💬 Real-Time Messaging System

Messaging is powered by **Socket.io**

Flow:

```
User sends message
        │
        ▼
Socket Server
        │
        ▼
Receiver gets message instantly
```

Chat documentation:

https://www.notion.so/How-the-chat-msg-work-320aa61c163080bfaf71e2813f58ac0e

---

# 📊 Database Schema

```
Users
│
├ id
├ username
├ email
└ password

Posts
│
├ id
├ title
├ price
├ location
├ type
└ images

PostDetails
│
├ postId
├ bedrooms
├ bathrooms
├ size
└ amenities

Messages
│
├ senderId
├ receiverId
├ text
└ timestamp
```

---

# 🔮 Future Improvements

🚀 AI property recommendations  
🚀 property analytics dashboard  
🚀 payment system integration  
🚀 map-based property filters  
🚀 push notifications  

---

# 📜 License

MIT License

---

# 👨‍💻 Author

**Umang Raval**

📧 Email  
umangraval749@gmail.com

💻 GitHub  
https://github.com/DepresseDeeZ
