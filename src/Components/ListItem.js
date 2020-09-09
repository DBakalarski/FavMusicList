import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function ListItem({ data, remove, addFavourite }) {

    return (
        <li className="favMusicListItem"  >
            <p className="favMusicListItem__title"> {data.title} </p>
            <div className="favMusicListItem__removeIcon" onClick={remove}>
                <DeleteOutlineIcon />
            </div>
            <div
                className={data.isBest ? "favMusicListItem__starIcon active" : "favMusicListItem__starIcon"}

                onClick={addFavourite}>
                {data.isBest ? <StarIcon /> : <StarBorderIcon />}
            </div>
        </li>
    )
}

export default ListItem;