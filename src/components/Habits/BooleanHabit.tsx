import React, { FC, useState } from "react";
import { IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';


export const BooleanHabit: FC = () => {
    const [checkHabit, setCheckHabit] = useState(0);
    const changeTypes = (checkHabit: number) => {
        console.log(checkHabit);
        if (checkHabit == 0) {
            setCheckHabit(1);
        }
        if (checkHabit == 1) {
            setCheckHabit(2);
        }
        if(checkHabit == 2)
        {setCheckHabit(0);}

    };
    return (
            <ListItemButton sx={{ background: "#1e1e1e", boxShadow: "", borderRadius: 2, mt: 1, minHeight: 75 }} onClick={() => changeTypes(checkHabit)}>
                <ListItemText primary="salam" />
                <IconButton edge="end" aria-label="delete">
                    {
                        (checkHabit !== 0 && checkHabit === 2) ?
                        <ClearIcon sx={{color: "red"}} />
                        : (checkHabit !== 0 && checkHabit === 1) ?
                        <CheckIcon sx={{color: "green"}} />
                        : ""
                        
                    }

                </IconButton>
            </ListItemButton>

    )
}
