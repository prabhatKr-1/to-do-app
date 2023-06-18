import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from '../model/user.js';

export async function loginController(res, res) {
    const { email, password } = req.body;
    const user = Users.findOne({ email: email });
    if (!user) {
        return res.json({
            message: "User doesn't exist!",
            success: false,
        })
    }
    const validPassword = await bcrypt.compare(user.password, password);
    if (!validPassword) {
        return res.json({
            message: 'Invalid Password',
            success: false,
        })
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
    
    res.cookie('token', token,{
        httpOnly: true,

    }).json({
        message: 'Login Successful',
        success: true,
    })


}