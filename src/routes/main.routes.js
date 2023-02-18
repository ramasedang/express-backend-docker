import express from 'express';
import morganMiddleware from '../middlewares/morgan.middleware.js';

const router = express.Router();
router.use(morganMiddleware);

router.get('/', (req, res) => {
  res.send('Hello World!');
});

export default router;
