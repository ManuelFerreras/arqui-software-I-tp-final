export type CourseType = {
  course_id: number;
  course_name: string;
  description: string;
  instructor_id: number;
  category: string;
  requirements: string;
  length: number;
  ImageURL: string;
  CreationTime: string;
  LastUpdated: string;
  is_subscribed: boolean;
};

export type UserType = {
  id: number;
  email: string;
  username: string;
  name: string;
  last_name: string;
  usertype: boolean;
  password_hash: string;
  CreationTime: string;
  LastUpdated: string;
};
