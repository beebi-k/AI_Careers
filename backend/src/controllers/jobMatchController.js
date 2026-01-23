import { JobMatch } from '../models/JobMatch.js';

export const createJobMatch = async (req, res) => {
  try {
    const { jobTitle, company, location, description, requirements, matchScore, matchDetails } = req.body;

    const jobMatch = new JobMatch({
      userId: req.userId,
      jobTitle,
      company,
      location,
      description,
      requirements,
      matchScore,
      matchDetails,
    });

    await jobMatch.save();

    res.status(201).json({
      message: 'Job match created successfully',
      jobMatch,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobMatches = async (req, res) => {
  try {
    const { status } = req.query;
    const query = { userId: req.userId };

    if (status) {
      query.status = status;
    }

    const jobMatches = await JobMatch.find(query).sort({ createdAt: -1 });
    res.json({ jobMatches });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobMatchById = async (req, res) => {
  try {
    const jobMatch = await JobMatch.findOne({ _id: req.params.id, userId: req.userId });

    if (!jobMatch) {
      return res.status(404).json({ message: 'Job match not found' });
    }

    res.json({ jobMatch });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateJobMatchStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const jobMatch = await JobMatch.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { status },
      { new: true }
    );

    if (!jobMatch) {
      return res.status(404).json({ message: 'Job match not found' });
    }

    res.json({
      message: 'Job match status updated successfully',
      jobMatch,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteJobMatch = async (req, res) => {
  try {
    const jobMatch = await JobMatch.findOneAndDelete({ _id: req.params.id, userId: req.userId });

    if (!jobMatch) {
      return res.status(404).json({ message: 'Job match not found' });
    }

    res.json({ message: 'Job match deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};