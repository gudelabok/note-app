import React from "react";
import NoteList from "./NoteList";
import NoteListEmptyMessage from "./NoteListEmpyMessage";
import { getInitialData } from '../utils/index.js'
import "../styles/style.css";


class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData()
        }
    }
    render() {
        const active = this.state.notes.filter((note) => note.archived === false)
        const inActive = this.state.notes.filter((note) => note.archived === true)
        return (
            <>
                <div className="note-app__body">
                    <h2>Catatan Aktif</h2>
                    {active.length > 0 ? <NoteList notes={active} /> : <NoteListEmptyMessage message="Tidak Ada Catatan Aktif" />}
                    <h2>Arsip</h2>
                    {inActive.length > 0 ? <NoteList notes={inActive} /> : <NoteListEmptyMessage message="Tidak Ada Arsip" />}
                </div>
            </>
        )
    }
}

// function NoteApp() {
//     const notes = getInitialData();
//     return (
//         < >
//             <div className="note-app__body">
//                 <NoteList notes={notes} />
//             </div>
//         </>
//     )
// }

export default NoteApp;