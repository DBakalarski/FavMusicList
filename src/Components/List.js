import React from "react";
import ListItem from "./ListItem";

function List({ addFavourite, remove, data }) {

    let list = data.map((item) => {
        return (
            <ListItem
                remove={() => remove(item.id)}
                addFavourite={() => addFavourite(item.id)}
                data={item}
                key={item.id}
            />
        )
    });

    return (
        <ul className="favMusicList__list">
            {list}
        </ul>
    )
}

export default List;