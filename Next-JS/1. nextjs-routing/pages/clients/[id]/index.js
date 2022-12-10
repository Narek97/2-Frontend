// /clients/id

import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router, "router");

  const loadProjectHandler = () => {
    //    load data...
    //   router.replace("/clients/max/projectA"); // chenq kara het gnanq 1 qayl, 2 qayala het tanum kam home (/)
    // router.push("/clients/max/projectA");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: {
        id: "max",
        clientProjectId: "projectA",
      },
    });
  };

  return (
    <div>
      <h1>ClientProjectsPage</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
