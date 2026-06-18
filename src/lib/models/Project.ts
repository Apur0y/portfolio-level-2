import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  slug: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, "Please provide a project title"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please provide a project description"],
    },
    slug: {
      type: String,
      required: [true, "Please provide a slug"],
      unique: true,
    },
    image: {
      type: String,
      required: [true, "Please provide a project image"],
    },
    tags: {
      type: [String],
      default: [],
    },
    link: {
      type: String,
    },
    github: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", projectSchema);
