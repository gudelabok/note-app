import React from "react";
import NoteList from "./NoteList";
import NoteListEmptyMessage from "./NoteListEmpyMessage";
import NoteInput from "./NoteInput";
import { getInitialData } from '../utils/index.js'
import "../styles/style.css";


class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData()
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this)
        this.onChangeArchiveHandler = this.onChangeArchiveHandler.bind(this)
    }

    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });

    }
    onChangeArchiveHandler(id) {
        const updatedNotes = this.state.notes.filter((note) => note.id === id).map((note) => (note.archived = !note.archived));
        this.setState({ updatedNotes });


    }



    render() {
        const not = this.state.notes;
        console.log(not)
        const active = not.filter((note) => note.archived == false)
        const inActive = not.filter((note) => note.archived == true)
        return (
            <>
                <div className="note-app__body">
                    <NoteInput />
                    <h2>Catatan Aktif</h2>
                    {active.length > 0 ? <NoteList notes={active} onDelete={this.onDeleteEventHandler} onArchive={this.onChangeArchiveHandler} /> : <NoteListEmptyMessage message="Tidak Ada Catatan Aktif" />}
                    <h2>Arsip</h2>
                    {inActive.length > 0 ? <NoteList notes={inActive} onDelete={this.onDeleteEventHandler} onArchive={this.onChangeArchiveHandler} /> : <NoteListEmptyMessage message="Tidak Ada Arsip" />}
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