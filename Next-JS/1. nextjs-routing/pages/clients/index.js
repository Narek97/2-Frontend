// /client
import { useRouter } from "next/router";
import Link from "next/link";

const ClientsPage = () => {
  const router = useRouter();
  console.log(router);

  const clients = [
    { id: "max", name: "Max" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/*<Link href={`/clients/${client.id}`}>{client.name}</Link>*/}
            <Link
              href={{
                pathname: `/clients/[id]`,
                query: {
                  id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
