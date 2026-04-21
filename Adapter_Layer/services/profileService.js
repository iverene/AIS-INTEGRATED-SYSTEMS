import * as ProfileAdapter from "../adapters/profileAdapter.js";

export const getStudentProfile = async (id) => {
    if (!id || id.trim() === '') {
        throw new Error("Student ID is required for retrieval.");
    }

    return await ProfileAdapter.getById(id);
};