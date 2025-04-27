import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import appointmentRoutes from "./routes/appointments.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/server/auth", authRoutes);
app.use("/server/users", userRoutes);
app.use("/server/appointments", appointmentRoutes);

app.listen(8800, () => {
    console.log("Connected!");
});