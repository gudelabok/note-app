import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)

    }
    onTitleChangeHandler(e) {
        this.setState(() => { return { title: e.target.value } })
    }
    onBodyChangeHandler(e) {
        this.setState(() => { return { body: e.target.value } })
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.setState.addNote(this.state)
    }

    render() {
        return (
            <div className="note-input" onSubmit={this.onSubmitHandler}>
                <form>
                    <input type="text" value={this.state.title} placeholder='Title' onChange={this.onTitleChangeHandler} className='note-input__title' />
                    <textarea cols="30" rows="10" value={this.state.body} onChange={this.onBodyChangeHandler} className="note-input__body" />
                    <button >Tambah</button>
                </form>
            </div>
        )
    }
}


export default NoteInput;