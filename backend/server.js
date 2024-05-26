require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Middleware pentru a permite CORS și pentru a interpreta JSON
app.use(cors());
app.use(express.json());

// Conectarea la baza de date
connectDB();

// Rutele pentru autentificare și înregistrare
app.use("/", authRoutes); 

// Gestionarea erorilor 404 pentru rutele neimplementate
app.use(notFound);

// Middleware pentru gestionarea erorilor globale
app.use(errorHandler);

// Pornirea serverului
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
