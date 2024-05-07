import Character from "../character/Character";
import React from "react";

const Characters = () => {
    return (
        <div>
            <Character
                name={'bart'}
                img={"https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"}/>

            <Character
                name={'homer'}
                img={"https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"}>
                children= {'Lorem ipsum dolor sit amet, consectetur adipisicing elit.tubus!'}
            </Character>

            <Character
                name={'relle'}
                img={"https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"}>
                asdfasdfasdf
            </Character>

        </div>
    );
};

export default Characters;