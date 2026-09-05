import "dotenv/config";

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: frontendUrl,
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

export default app;

if (process.env.VERCEL !== "1") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}