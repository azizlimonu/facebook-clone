require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// import Routes
const UserRoutes = require('./routes/UserRoutes');
const AuthRoutes = require('./routes/AuthRoutes');
const PostRoutes = require('./routes/PostRoutes');
const UploadRoutes=require('./routes/UploadRoute');
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

// middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// serve image inside public folder
app.use(express.static('public'));
app.use('/images',express.static('images'));

// usage Routes
app.use('/user', UserRoutes);
app.use('/auth', AuthRoutes);
app.use('/posts', PostRoutes);
app.use('/upload',UploadRoutes);