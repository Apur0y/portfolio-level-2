export interface Project {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
