import React from "react";

function NoteListEmptyMessage({ message }) {
    return (
        <div className="notes-list__empty-message" message={message}>{message}</div>
    )
}

export default NoteListEmptyMessage;