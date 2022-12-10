import { useAppSelector } from "../hooks/redux";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.github);

  if (!favorites.length) {
    return <p className={"text-center"}>No items</p>;
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-[calc(100vh_-_50px)] w-screen">
      <ul className={"list-none"}>
        {favorites.map((f) => (
          <li>
            <a href={f} target={"_blank"}>
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
