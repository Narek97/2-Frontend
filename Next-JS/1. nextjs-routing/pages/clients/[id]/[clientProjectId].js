// /clients/id/clientId

import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router, "router");
  return (
    <div>
      <h1>SelectedClientProjectPage</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
