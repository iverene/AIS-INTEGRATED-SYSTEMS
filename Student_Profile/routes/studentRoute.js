import * as StudentController from '../controllers/studentController.js';
import express from 'express';

const studentRoutes = express.Router();

// Get a specific student profile
studentRoutes.get('/:id', StudentController.getProfile);

// Get all student profiles
studentRoutes.get('/', StudentController.listAllProfiles);

export default studentRoutes;