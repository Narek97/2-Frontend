import React from "react";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";

const HomePage = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps(context) {
  console.log("RE-...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
    // notFound: !data.products.length,
  };
}

export default HomePage;
