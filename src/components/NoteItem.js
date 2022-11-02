import React from "react";
import { showFormattedDate } from '../utils/index.js'
import NoteItemAction from "./NoteItemAction.js";

function NoteItem({ title, createdAt, body, id, archived }) {

    const date = showFormattedDate(createdAt)

    return (
        <div className="note-item">
            <div className="note-item__body">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{date}</p>
                <p className="note-item__content">{body}</p>
                < NoteItemAction id={id} archived={archived} />
            </div>
        </div>
    )
}

export default NoteItem;