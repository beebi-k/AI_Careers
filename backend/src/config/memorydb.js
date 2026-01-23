// Simple in-memory database for development/testing
// Replace with MongoDB when available

const users = new Map();
const resumes = new Map();
const coverLetters = new Map();
const portfolios = new Map();
const jobMatches = new Map();

export const db = {
  users,
  resumes,
  coverLetters,
  portfolios,
  jobMatches,
  clear() {
    this.users.clear();
    this.resumes.clear();
    this.coverLetters.clear();
    this.portfolios.clear();
    this.jobMatches.clear();
  }
};