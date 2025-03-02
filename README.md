# 🚀 Medicine Store API

A robust API built with Express.js, TypeScript, and MongoDB to manage medicines and orders, featuring CRUD operations, inventory management, and revenue calculation.

## 🌟 Features

- **Medicine Management**: Add, view, update, and delete medicines.
- **Order Management**: Place orders and calculate total revenue.
- **Error Handling**: Centralized and standardized responses.

## 🔧 Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB (Mongoose)

## 📖 API Endpoints

### 🏥 Medicines

- `POST /api/medicines` - Add a medicine
- `GET /api/medicines` - List all medicines (supports search & filter)
- `GET /api/medicines/:id` - Get medicine details
- `PUT /api/medicines/:id` - Update a medicine
- `DELETE /api/medicines/:id` - Delete a medicine

### 📦 Orders

- `POST /api/orders` - Place an order
- `GET /api/orders/revenue` - Get total revenue

## 🌍 Live API

Access the live API here: [Medicine Store API](https://assignment-2-fawn-gamma.vercel.app/)

## 📂 Repository

Find the source code here: [GitHub Repository](https://github.com/KMTonmoy/MediBazar-server)

## 🚀 Installation Process

1. Clone the repository:
   ```sh
   git clone https://github.com/KMTonmoy/MediBazar-server.git
   cd PH-Level2-B4-A2
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## 📂 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 🏃 Run the Server

### Development Mode
```sh
npm run start:dev
```

### Production Mode
```sh
npm run start
```

## 📌 License

This project is licensed under the MIT License.

---

Developed with ❤️ by Tonmoy Ahamed
