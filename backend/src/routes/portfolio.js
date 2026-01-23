import express from 'express';
import {
  createPortfolio,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
} from '../controllers/portfolioController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticateToken);

router.post('/', createPortfolio);
router.get('/', getPortfolio);
router.put('/', updatePortfolio);
router.delete('/', deletePortfolio);

export default router;