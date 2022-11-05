import React from "react";

function ArchivedButton({ archived, id, onArchive }) {
    return <button className="note-item__archive-button " archived={archived} id={id} onClick={() => onArchive(id)} > {!archived ? 'Arsipkan' : 'Pindahkan'
    }</button >
}

export default ArchivedButton;