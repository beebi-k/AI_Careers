# AI Careers Backend

A Node.js/Express backend for the AI Careers application with JWT authentication and MongoDB integration.

## Features

- User authentication (register, login)
- Resume management (CRUD operations)
- Cover letter generation and management
- Portfolio management
- Job matching and tracking
- User profile management

## Setup

### Prerequisites

- Node.js (v16+)
- MongoDB (local or MongoDB Atlas)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-careers
JWT_SECRET=your_secret_key_here_change_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

### Running the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires token)
- `PUT /api/auth/profile` - Update user profile (requires token)

### Resumes
- `POST /api/resumes` - Create resume
- `GET /api/resumes` - Get all resumes
- `GET /api/resumes/:id` - Get resume by ID
- `PUT /api/resumes/:id` - Update resume
- `DELETE /api/resumes/:id` - Delete resume

### Cover Letters
- `POST /api/cover-letters` - Create cover letter
- `GET /api/cover-letters` - Get all cover letters
- `GET /api/cover-letters/:id` - Get cover letter by ID
- `PUT /api/cover-letters/:id` - Update cover letter
- `DELETE /api/cover-letters/:id` - Delete cover letter

### Portfolio
- `POST /api/portfolio` - Create portfolio
- `GET /api/portfolio` - Get portfolio
- `PUT /api/portfolio` - Update portfolio
- `DELETE /api/portfolio` - Delete portfolio

### Job Matches
- `POST /api/job-matches` - Create job match
- `GET /api/job-matches` - Get all job matches
- `GET /api/job-matches?status=matched` - Get job matches by status
- `GET /api/job-matches/:id` - Get job match by ID
- `PUT /api/job-matches/:id` - Update job match status
- `DELETE /api/job-matches/:id` - Delete job match

## Database Models

### User
- name, email, password
- avatar, tier (free/pro/premium)
- phone, location, bio
- timestamps

### Resume
- userId (reference)
- personalInfo, summary, skills
- experience, education, projects, certifications
- template, title
- timestamps

### CoverLetter
- userId (reference)
- jobTitle, companyName, content
- template
- timestamps

### Portfolio
- userId (reference)
- title, description, projects
- socialLinks, theme
- timestamps

### JobMatch
- userId (reference)
- jobTitle, company, location, description
- requirements, matchScore, matchDetails
- status (matched/applied/rejected/archived)
- timestamps

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT signing
- `JWT_EXPIRE` - JWT expiration time (default: 7d)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS

## Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

Tokens are obtained from `/api/auth/login` or `/api/auth/register` endpoints.