import express from 'express';
import { getPosts } from '/Users/larryh1981/project05/server/controllers/post.js';

const router = express.Router();

router.get('/', getPosts);
  
export default router;