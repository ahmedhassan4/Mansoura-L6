import Counter from "@/components/Counter";
import Navigation from "@/components/Navigation";
import React from "react";

// interface Recipe {
//   id: string;
//   title: string;
//   publisher: string;
//   image_url: string;
// }

export default async function page() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // const recipes = await fetch(
  //   "https://forkify-api.jonas.io/api/v2/recipes?search=pizza&key=5846cddd-de99-4600-84f1-06a8dab33407",
  // );

  // const res = await recipes.json();
  // console.log(res.data.recipes);
  return (
    // <div>
    //   <Counter />
    //   <p>Rooms</p>
    //   {res.data.recipes.map((recipe: Recipe) => (
    //     <div key={recipe.id}>
    //       <p>{recipe.title}</p>
    //     </div>
    //   ))}
    // </div>
    <div>
      <h1 className="text-4xl mb-5 text-teal-300 font-medium">
        Our Luxury Rooms
      </h1>
      <p className="text-gray-300 text-lg mb-10">
        Cozy yet luxurious Rooms, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy natures beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
    </div>
  );
}
