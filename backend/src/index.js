import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import { errorHandler } from './middleware/auth.js';

// Import routes
import authRoutes from './routes/auth.js';
import resumeRoutes from './routes/resume.js';
import coverLetterRoutes from './routes/coverLetter.js';
import portfolioRoutes from './routes/portfolio.js';
import jobMatchRoutes from './routes/jobMatch.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', process.env.FRONTEND_URL],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB().catch(err => {
  console.warn('MongoDB connection failed, but server will continue:', err.message);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);
app.use('/api/cover-letters', coverLetterRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/job-matches', jobMatchRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend is running' });
});

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});