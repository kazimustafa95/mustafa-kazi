import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";



export async function POST(request) {
    const reqBody = await request.json();
    const { email, password } = reqBody;
 
    // Check if the email and password match your predefined values
    if (email !== "saleem123@gmail.com" || password !== "Saleem12345!@") {
        return NextResponse.json({
            message: "Invalid email or password",
            success: false,
        }, { status: 401 });
    } 
 
    // Create the token data
    const tokenData = {
        id: "predefinedId",
        username: "predefinedUsername",
        email: "saleem123@gmail.com",
    };
 
    // Generate the token
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
 
    // Set the token in to the cookies
    const response = NextResponse.json({
        message: "Login successful",
        success: true,
    });
    response.cookies.set("token", token, {
        httpOnly: true,
    });
 
    return response;
 }