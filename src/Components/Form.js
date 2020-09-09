import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Form({ onChange, onSubmmit, value }) {

    return (
        <form className="favMusicList__form">
            <TextField
                onChange={onChange}
                value={value}
                id="standard-basic"
                label="favourite album"
            />
            <Button
                onClick={onSubmmit}
                type="submit"
                variant="contained"
                color="primary"
            >
                Add to List
            </Button>
        </form>
    )
}

export default Form;