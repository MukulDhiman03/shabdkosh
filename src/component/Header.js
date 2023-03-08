import { TextField, ThemeProvider, createTheme, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import "./Header.css"
import categories from '../data/category'

const Header = ({ category, setCategory, word, setWord }) => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");

    }

    return (
        <div className='header'>
            <span className='title'>
                {word ? word : "SHABDAKOSH"}
            </span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>

                    <TextField className='search' label="Search a word" variant="standard" value={word} onChange={(e) => {
                        setWord(e.target.value)
                    }} />

                    <TextField
                        className='select'
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => {
                            handleChange(e.target.value)
                        }}
                    >
                        {
                            categories.map((value) => [
                                <MenuItem key={value.label} value={value.label}>{value.language}</MenuItem>
                            ])
                        }

                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header