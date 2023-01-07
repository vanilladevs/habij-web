import { FC, useState } from "react";
import { IconButton, ListItemButton, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const style = { bgcolor: "text.secondary", boxShadow: "", borderRadius: 2, mt: 1, minHeight: 75 }

export const BooleanHabit: FC = () => {
    const [checkHabit, setCheckHabit] = useState(0);
    const changeTypes = (checkHabit: number) => {
        console.log(checkHabit);
        if (checkHabit === 0) {
            setCheckHabit(1);
        }
        if (checkHabit === 1) {
            setCheckHabit(2);
        }
        if (checkHabit === 2) { setCheckHabit(0); }

    };
    return (
        <ListItemButton sx={style} onClick={() => changeTypes(checkHabit)}>
            <ListItemText primary="salam" />
            <IconButton edge="end" aria-label="delete">
                {
                    (checkHabit !== 0 && checkHabit === 2) ?
                        <ClearIcon sx={{ color: "red" }} />
                        : (checkHabit !== 0 && checkHabit === 1) ?
                            <CheckIcon sx={{ color: "green" }} />
                            : ""

                }

            </IconButton>
        </ListItemButton>

    )
}
