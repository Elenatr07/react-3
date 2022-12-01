
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "./components/Button/Button";
import { AUTHOR } from '.constants';




export const Form = ({ addMessage }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addMessage({
            autor: AUTHOR.user,
            value,
        });
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField value={value} onChange={(e) => setValue(e.target.value)} />
            <Button label="send" disabled={!value} />
        </form>
    );
};