const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./router/User');
const PostRouter = require('./router/Post');
dotenv.config();

const PORT = process.env.PORT || 3500;

const connectDB = async () => {
  try {
      await mongoose.connect(process.env.DATABASE_URI)
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
app.use(express.json());
app.use('/api/user')
