import express from 'express';
import {
  createJobMatch,
  getJobMatches,
  getJobMatchById,
  updateJobMatchStatus,
  deleteJobMatch,
} from '../controllers/jobMatchController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticateToken);

router.post('/', createJobMatch);
router.get('/', getJobMatches);
router.get('/:id', getJobMatchById);
router.put('/:id', updateJobMatchStatus);
router.delete('/:id', deleteJobMatch);

export default router;