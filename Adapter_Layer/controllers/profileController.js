import * as ProfileService from "../services/profileService.js";

export const getProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await ProfileService.getStudentProfile(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message || "Profile not found."
        });
    }
};