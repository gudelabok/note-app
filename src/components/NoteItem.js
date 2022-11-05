import React from "react";
import NoteItemAction from "./NoteItemAction.js";
import NoteContent from "./NoteContent.js";

function NoteItem({ title, createdAt, body, id, archived, onDelete, onArchive }) {

    return (
        <div className="note-item">
            < NoteContent title={title} body={body} date={createdAt} />
            < NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
        </div>
    )
}

export default NoteItem;