import {useQuery} from "@tanstack/react-query"
import axios from "axios"
import {User} from "../../models/User"

const rootKey = "users";
export const getUsersQueryKey = () => [rootKey];

export const useUsersQuery = () =>
  useQuery(useUsersQueryKey(), () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data as User[])
  );
