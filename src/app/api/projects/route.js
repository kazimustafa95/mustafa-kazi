
import { NextResponse,NextRequest } from "next/server";
import Projects from "@/models/projectsModel";
import { connect } from "@/dbConfig/dbConfig";


export async function POST(request) {
    try {
      // Ensure the request body is properly formatted JSON
      if (typeof request.body !== 'object') {
        throw new Error('Invalid request body');
      }

      await connect();
      const project = new Projects(request.body); // Directly using request.body
      await project.save();
      return NextResponse.json({ message: 'Project saved successfully', project });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
}


