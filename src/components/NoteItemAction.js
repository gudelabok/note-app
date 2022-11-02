import React from "react";
import DeleteButton from "./deleteButton";
import ArchivedButton from "./ArchivedButton";

function NoteItemAction({ id, archived }) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} />
            <ArchivedButton archived={archived} />
        </div>
    )
}

export default NoteItemAction;