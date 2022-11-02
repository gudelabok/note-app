import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from '../utils/index.js'


import "../styles/style.css";

function NoteApp() {
    const notes = getInitialData();
    return (
        < >
            <NoteList notes={notes} />
        </>
    )
}

export default NoteApp;