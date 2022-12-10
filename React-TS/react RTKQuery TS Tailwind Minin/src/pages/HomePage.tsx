import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../store/github/guthun.api";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import RepoCard from "../components/RepoCard";

const HomePage = () => {
  const [search, setSearch] = useState<string>("");
  const [dropdown, setDropdown] = useState<boolean>(false);
  const debounced = useDebounce(search);

  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [data?.length, debounced]);

  if (isError) {
    return (
      <div className={"flex justify-center pt-10 mx-auto h-screen w-screen"}>
        <p className={"flex justify-center items-center text-red-600"}>
          Something went wrong
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-[calc(100vh_-_50px)] w-screen">
      <div className={"relative w-[560px]"}>
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown ? (
          <ul
            className={
              "list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white"
            }
          >
            {isLoading ? (
              <p className={"flex justify-center items-center"}>Loading...</p>
            ) : (
              data?.map((user) => (
                <li
                  key={user.id}
                  onClick={() => clickHandler(user.login)}
                  className={
                    "py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                  }
                >
                  {user.login}
                </li>
              ))
            )}
          </ul>
        ) : null}
        <div className={"container"}>
          {areReposLoading && <p className={"text-center"}>Loading...</p>}
          {repos?.map((repo) => (
            <RepoCard repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
