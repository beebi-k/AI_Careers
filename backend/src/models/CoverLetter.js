import mongoose from 'mongoose';

const coverLetterSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    jobTitle: String,
    companyName: String,
    content: String,
    template: {
      type: String,
      default: 'professional',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const CoverLetter = mongoose.model('CoverLetter', coverLetterSchema);