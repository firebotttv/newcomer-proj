import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const usePostRemoveCommand = () =>
  useMutation((id: number) =>
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.data)
  );

export default usePostRemoveCommand;
