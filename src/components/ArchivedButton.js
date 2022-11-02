import React from "react";

function ArchivedButton({ archived }) {
    return <button className="note-item__archive-button " archived={archived}>Arsipkan</button>
}

export default ArchivedButton;