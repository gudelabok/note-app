import React from "react";
import { showFormattedDate } from '../utils/index.js'

function NoteItem({ title, createdAt, body }) {

    const date = showFormattedDate(createdAt)

    return (
        <div className="note-item">
            <div className="note-item__body">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{date}</p>
                <p className="note-item__content">{body}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button">Delete</button>
                <button className="note-item__archive-button">Archive</button>
            </div>
        </div>
    )
}

export default NoteItem;