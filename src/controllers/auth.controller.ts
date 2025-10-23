import { RequestHandler } from "express";
import UserModel from "../models/user.model";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";

const loginUser: RequestHandler = (req, res) => {
    const { username, password } = req.body;
    let user = UserModel.findOne({ username });
    // Handle login logic here
    return res.status(200).send({
        ok: true,
        message: 'Login successful'
    });
}

const registerUser: RequestHandler = async (req, res) => {
    try {
        const { displayName, username, password } = req.body;
        const avatarFile = req.file;
        if (!displayName || !username || !password) {
            return res.status(400).send({
                ok: false,
                message: 'Missing required fields'
            });
        }

        const passwordHash = await argon2.hash(password);

        let user = await UserModel.findOne({ username });

        if (user) {
            return res.status(409).send({
                ok: false,
                message: 'User already exists'
            });
        }

        const createUser = await UserModel.create({
            avatar: avatarFile ? avatarFile.filename : undefined,
            displayName,
            username,
            password: passwordHash
        });

        return res.status(201).send({
            ok: true,
            message: 'User registered successfully',
            data: createUser
        });
    } catch (err: any) {
        return res.status(500).send({
            ok: false,
            message: 'Internal server error',
            error: err.message ? err.message : err
        });
    }

}

const authController = {
    loginUser,
    registerUser
};

export default authController;