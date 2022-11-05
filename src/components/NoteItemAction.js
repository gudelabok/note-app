import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchivedButton";

function NoteItemAction({ id, archived, onDelete, onArchive }) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchivedButton archived={archived} id={id} onArchive={onArchive} />
        </div>
    )
}

export default NoteItemAction;