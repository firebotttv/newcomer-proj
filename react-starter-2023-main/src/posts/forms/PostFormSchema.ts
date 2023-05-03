import { Post } from "../models/Post";
import { object, Schema } from "yup";

const PostFormSchema: Schema = object({});
//const PostFormSchema: Schema<Post> = object({});

export default PostFormSchema;
