import mongoose from 'mongoose';

const jobMatchSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    jobTitle: String,
    company: String,
    location: String,
    description: String,
    requirements: [String],
    matchScore: Number,
    matchDetails: {
      skillsMatch: Number,
      experienceMatch: Number,
      educationMatch: Number,
    },
    status: {
      type: String,
      enum: ['matched', 'applied', 'rejected', 'archived'],
      default: 'matched',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const JobMatch = mongoose.model('JobMatch', jobMatchSchema);