import React, { FunctionComponent } from "react";
import { Post, PostFactory } from "../models/Post";
import PostFormSchema from "./PostFormSchema";

export interface PostFormProps {
  isLoading: boolean;
  onSubmit: (values: Post) => void;
  initialValues?: Post;
}

const PostForm: FunctionComponent<PostFormProps> = ({
  isLoading,
  onSubmit,
  initialValues,
}) => {
  return <form></form>;
};

export default PostForm;
