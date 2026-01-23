import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      default: 'My Resume',
    },
    personalInfo: {
      name: String,
      email: String,
      phone: String,
      location: String,
      linkedin: String,
      github: String,
    },
    summary: String,
    skills: String,
    experience: [
      {
        title: String,
        company: String,
        startDate: String,
        endDate: String,
        current: Boolean,
        description: String,
      },
    ],
    education: [
      {
        degree: String,
        school: String,
        startDate: String,
        endDate: String,
        gpa: String,
      },
    ],
    projects: [
      {
        name: String,
        description: String,
        technologies: String,
        link: String,
      },
    ],
    certifications: [
      {
        name: String,
        issuer: String,
        date: String,
      },
    ],
    template: {
      type: String,
      default: 'modern',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Resume = mongoose.model('Resume', resumeSchema);