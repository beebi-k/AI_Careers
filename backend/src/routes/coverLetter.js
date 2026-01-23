import express from 'express';
import {
  createCoverLetter,
  getCoverLetters,
  getCoverLetterById,
  updateCoverLetter,
  deleteCoverLetter,
} from '../controllers/coverLetterController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticateToken);

router.post('/', createCoverLetter);
router.get('/', getCoverLetters);
router.get('/:id', getCoverLetterById);
router.put('/:id', updateCoverLetter);
router.delete('/:id', deleteCoverLetter);

export default router;