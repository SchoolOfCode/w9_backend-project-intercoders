import express from "express";
import cors from "cors";

const app = express();

// import routes from route files
import userRouter from "./routes/users.js";
import waitingListRouter from "./routes/waitingList.js";
import courseRouter from "./routes/course.js";
import announcementRouter from "./routes/announcement.js";

//unpack json
app.use(express.json());


// Cors is being used for the deployment of the database
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// All the routes available
app.use("/users", userRouter);
app.use("/waitinglist", waitingListRouter);
app.use("/course", courseRouter);
app.use("/announcement", announcementRouter);

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.listen(process.env.PORT || 3001, function () {
  console.log(`Server is running`);
});

export default app;
