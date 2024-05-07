import {FC, useEffect, useState} from "react";
import Recipe, {IRecipeProps} from "../recipe/Recipe";

const Recipes:FC = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([]);

    useEffect(()=>{
fetch('https://dummyjson.com/recipes')
    .then(res=> res.json())
    .then(({recipes}) => {setRecipes(recipes);});
  },[])

    console.log('.')

    return (
        <div>
            {recipes.map(({id, name, cuisine, mealType, instructions, image}:IRecipeProps) =>
                (<Recipe key={id}
                         id={id}
                         name={name}
                         cuisine={cuisine}
                         mealType={mealType}
                         instructions={instructions}
                         image={image}
                />))
            }
        </div>
    );
};

export default Recipes;