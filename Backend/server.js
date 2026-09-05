import "dotenv/config";

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend du portfolio opérationnel.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});