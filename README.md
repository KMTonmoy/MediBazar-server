# 🚴 Bicycle Store API

A robust API built with Express.js, TypeScript, and MongoDB to manage bicycles and orders, featuring CRUD operations, inventory management, and revenue calculation.

## 🌟 Features

- Product Management: Add, view, update, and delete bicycles.
- Order Management: Place orders and calculate total revenue.
- Error Handling: Centralized and standardized responses.

## 🔧 Tech Stack

- Backend: Node.js, Express.js, TypeScript
- Database: MongoDB (Mongoose)

## 📖 API Endpoints

#### Products

- POST /api/products - Add a product
- GET /api/products - List products (supports search)
- GET /api/products/:id - Get product details
- PUT /api/products/:id - Update a product
- DELETE /api/products/:id - Delete a product

#### Orders

- POST /api/orders - Place an order
- GET /api/orders/revenue - Calculate revenue

## 🌍 Live API

Access the live API here: [Bicycle Store API](https://assignment-2-fawn-gamma.vercel.app/)

## 📂 Repository

Find the source code here: [GitHub Repository](replace-with-your-repo-link)

## 🚀 Installation Process

1. Clone the repository:
   git clone <https://github.com/KMTonmoy/PH-Level2-B4-A2>
   cd PH-Level2-B4-A2
   npm install

## 📂 Set up the environment variables

1. MONGO_URI= Your MongoDB URI
2. PORT= 5000

## 🏃‍➡️ Start the server

1. npm run start:dev
