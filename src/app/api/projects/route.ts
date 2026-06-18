import { connectDB } from "@/src/lib/db";
import Project, { IProject } from "@/src/lib/models/Project";
import { ApiResponse } from "@/src/lib/types";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const projects = await Project.find({}).sort({ createdAt: -1 });

    return NextResponse.json<ApiResponse<IProject[]>>(
      {
        success: true,
        data: projects,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch projects",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { title, description, slug, image, tags, link, github } = body;

    // Validate required fields
    if (!title || !description || !slug || !image) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const newProject = await Project.create({
      title,
      description,
      slug,
      image,
      tags: tags || [],
      link,
      github,
    });

    return NextResponse.json<ApiResponse<IProject>>(
      {
        success: true,
        data: newProject,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to create project",
      },
      { status: 500 }
    );
  }
}
