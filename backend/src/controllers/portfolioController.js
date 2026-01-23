import { Portfolio } from '../models/Portfolio.js';

export const createPortfolio = async (req, res) => {
  try {
    const { title, description, projects, socialLinks, theme } = req.body;

    const portfolio = new Portfolio({
      userId: req.userId,
      title,
      description,
      projects,
      socialLinks,
      theme,
    });

    await portfolio.save();

    res.status(201).json({
      message: 'Portfolio created successfully',
      portfolio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ userId: req.userId });

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    res.json({ portfolio });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      { userId: req.userId },
      req.body,
      { new: true, upsert: true }
    );

    res.json({
      message: 'Portfolio updated successfully',
      portfolio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndDelete({ userId: req.userId });

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    res.json({ message: 'Portfolio deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};