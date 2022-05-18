import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const dishes = [
    {
      url:
        "https://eatyourworld.com/images/content_images/images/gallo-pinto.jpg",
      name: "Gallo Pinto",
      country: "Comida típica de Costa Rica",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {dishes.map((food, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <img style={{ height: "20rem" }} src={food.url} />
              <div className="p-4">
                <p
                  style={{ height: "64px" }}
                  className="text-2xl font-semibold"
                >
                  {food.name}
                </p>
                <div style={{ height: "70px", overflow: "hidden" }}>
                  <p>{dishes.name}</p>
                  <p className="text-gray-400">{food.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
