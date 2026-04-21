import * as ProfileController from '../controllers/profileController.js';
import express from 'express';

const profileRoutes = express.Router();

profileRoutes.get('/:id', ProfileController.getProfile);

export default profileRoutes;