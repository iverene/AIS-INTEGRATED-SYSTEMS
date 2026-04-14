import * as UserModel from '../model/userModel.js';

export const register = async (req, res) => {
    const {
        name, 
        birthdate,
        address,
        program,
        studentStatus,
        email,
        password
    } 
= req.body;
       
    try {
        const userProfile = {name, birthdate, address, program, studentStatus};
        const user = await UserModel.createUser(userProfile, email, password);
        res.status(201).json({
            success: true, 
            message: [
                {result: "A new account has been created!"}
            ]
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
        success: false,
        message: "Internal Server Error"
        })  
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    try {
        const token = await UserModel.loginUser(email, password);
        res.status(201).json({
            success: true, 
            message: [
                {result: "Login successful!", token}
            ]
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
        success: false,
        message: "Internal Server Error"
        })  
    }
}

