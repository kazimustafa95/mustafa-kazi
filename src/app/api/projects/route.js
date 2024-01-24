import { NextResponse } from "next/server";
import Projects from "@/models/projectsModel";
import { connect } from "@/dbConfig/dbConfig";





export async function POST(request) {
  try {
    const body = await request.json();
    await connect();

    await Projects.create(body);

    return NextResponse.json({
      message: "Project created successfully!"
    }, {
      status: 201 // Indicates that a new resource was created
    });
  } catch (error) {

    if (error.name === 'ValidationError') {
      return NextResponse.json({
        message: "Validation error, please check your data.",
        details: error.errors
      }, {
        status: 400
      });
    }
    return NextResponse.json({
      message: "Server error, please try again!"
    }, {
      status: 500
    });
  }
}


export async function GET(request) {
  try {
     await connect();
 
     const projects = await Projects.find({});
 
     return NextResponse.json(projects, {
       status: 200 // Indicates that the request was successful
     });
  } catch (error) {
     console.error('Error:', error); // Helpful for debugging
     return NextResponse.json({
       message: "Server error, please try again!"
     }, {
       status: 500
     });
  }
 }
