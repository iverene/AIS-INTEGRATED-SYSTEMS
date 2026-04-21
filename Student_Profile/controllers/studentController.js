import * as StudentModel from '../models/studentModel.js';

export const getProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const profile = await StudentModel.getStudentProfile(id);
        res.status(200).json(profile);
    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
};

export const listAllProfiles = async (req, res) => {
    try {
        const profiles = await StudentModel.getAllProfiles();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching profiles."
        });
    }
};