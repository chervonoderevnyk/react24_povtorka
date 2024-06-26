import React, {FC} from "react";
import styles from './Recipe.module.css'

export interface IRecipeProps {
    id?: number,
    name?: string,
    ingredients?: string[],
    instructions?: string[],
    prepTimeMinutes?: number,
    cookTimeMinutes?: number,
    servings?: number,
    difficulty?: string,
    cuisine?: string,
    caloriesPerServing?: number,
    tags?: string[],
    userId?: number,
    image?: string,
    rating?:number,
    reviewCount?: number,
    mealType?: string[]
}

export type IRecipeTypeProps = IRecipeProps & {children?:React.ReactNode}

const Recipe:FC<IRecipeTypeProps> = ({id ,
                                         name,
                                         mealType,
                                         cuisine,
                                         instructions,
                                         image
                                     }) => {
    return (
        <div className={styles.recipesStile}>

            <h2>{id}. {name}. {mealType}. {cuisine} </h2>
            <img src={image} alt={name}/>
            <ul>{
                instructions?.map((instruction, index) => <li key={index}>{instruction}</li>)
            }</ul>


        </div>
    );
};

export default Recipe;