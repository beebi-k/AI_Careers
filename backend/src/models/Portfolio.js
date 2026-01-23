import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: String,
    description: String,
    projects: [
      {
        title: String,
        description: String,
        image: String,
        link: String,
        technologies: [String],
      },
    ],
    socialLinks: {
      github: String,
      linkedin: String,
      twitter: String,
      personal: String,
    },
    theme: {
      type: String,
      default: 'light',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Portfolio = mongoose.model('Portfolio', portfolioSchema);