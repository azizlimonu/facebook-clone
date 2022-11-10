require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const userRouter = require('./router/userRoutes');
const PostRouter = require('./router/postRoutes');

const PORT = process.env.PORT || 3500;

const connectDB = async () => {
  try {
      await mongoose.connect(process.env.DATABASE_URI);
  } catch (err) {
      console.log(err)
  }
}
connectDB();

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
});

app.use(cors());

// Routes
app.use(express.json()); 
app.use("/api/user", userRouter);
app.use("/api/post", PostRouter);