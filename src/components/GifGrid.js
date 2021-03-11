import React, { useEffect, useState } from "react";
import { useFechGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const {data:images, loading } = useFechGifs(category);
  //   const [images, setImages] = useState([]);

  //   getGifs();

  return (
    <div>
      <h3>{category}</h3>
      {loading && "Cargando..."}
      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </div>
  );
};
