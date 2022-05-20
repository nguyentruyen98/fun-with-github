import { ReactiveVar, makeVar } from "@apollo/client";

type Repo = {
  name: string;
  owner: string;
};

const initialRepo = {
  name: "react-router",
  owner: "remix-run",
};

const currentRepoVar: ReactiveVar<Repo> = makeVar(initialRepo);

export default currentRepoVar;
