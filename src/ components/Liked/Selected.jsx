import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useEffect} from "react";

export default function SelectVariants({handleSortScore,handleSortPrice,likes}) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    console.log(age)

    useEffect(()=>{
        if (Number(age)==10){
            handleSortScore(likes)
        }else if (Number(age)===20){
            handleSortPrice(likes)
        }

    },[age])

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                {/*<InputLabel id="demo-simple-select-standard-label">Age</InputLabel>*/}
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Рейтинг</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                {/*<InputLabel id="demo-simple-select-standard-label">Age</InputLabel>*/}
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={20}>Цена</MenuItem>
                </Select>
            </FormControl>
            {/*<FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>*/}
            {/*    /!*<InputLabel id="demo-simple-select-filled-label">Age</InputLabel>*!/*/}
            {/*    <Select*/}
            {/*        labelId="demo-simple-select-filled-label"*/}
            {/*        id="demo-simple-select-filled"*/}
            {/*        value={age}*/}
            {/*        onChange={handleChange}*/}
            {/*    >*/}
            {/*        <MenuItem value="">*/}
            {/*            <em>None</em>*/}
            {/*        </MenuItem>*/}
            {/*        <MenuItem value={20}>Цена</MenuItem>*/}
            {/*    </Select>*/}
            {/*</FormControl>*/}
        </div>
    );
}
