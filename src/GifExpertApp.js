import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  //   const handleAdd = () => {
  //     setCategories([...categories, 'Naruto'])
  //   }

  return (
    <div>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      {/* <ol> */}
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      {/* </ol> */}
    </div>
  );
};
