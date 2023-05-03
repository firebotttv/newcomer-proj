import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "../../models/Post";

const rootKey = "posts";
export const getPostsQueryKey = () => [rootKey];

export const usePostsQuery = () =>
  useQuery(getPostsQueryKey(), () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data as Post[])
  );
