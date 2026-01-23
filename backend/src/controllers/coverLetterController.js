import { CoverLetter } from '../models/CoverLetter.js';

export const createCoverLetter = async (req, res) => {
  try {
    const { jobTitle, companyName, content, template } = req.body;

    const coverLetter = new CoverLetter({
      userId: req.userId,
      jobTitle,
      companyName,
      content,
      template,
    });

    await coverLetter.save();

    res.status(201).json({
      message: 'Cover letter created successfully',
      coverLetter,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCoverLetters = async (req, res) => {
  try {
    const coverLetters = await CoverLetter.find({ userId: req.userId });
    res.json({ coverLetters });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCoverLetterById = async (req, res) => {
  try {
    const coverLetter = await CoverLetter.findOne({ _id: req.params.id, userId: req.userId });

    if (!coverLetter) {
      return res.status(404).json({ message: 'Cover letter not found' });
    }

    res.json({ coverLetter });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCoverLetter = async (req, res) => {
  try {
    const coverLetter = await CoverLetter.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );

    if (!coverLetter) {
      return res.status(404).json({ message: 'Cover letter not found' });
    }

    res.json({
      message: 'Cover letter updated successfully',
      coverLetter,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCoverLetter = async (req, res) => {
  try {
    const coverLetter = await CoverLetter.findOneAndDelete({ _id: req.params.id, userId: req.userId });

    if (!coverLetter) {
      return res.status(404).json({ message: 'Cover letter not found' });
    }

    res.json({ message: 'Cover letter deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};