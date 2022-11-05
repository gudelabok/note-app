import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            limitedTitle: 50,
        }
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)

    }
    onTitleChangeHandler(e) {
        if (this.state.limitedTitle >= 0 && e.target.value.length <= 50) {
            this.setState(() => {
                return {
                    title: e.target.value,
                }
            })
        }
    }
    onBodyChangeHandler(e) {
        this.setState(() => { return { body: e.target.value } })
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.addNote(this.state)
    }

    render() {
        return (
            <div className="note-input" onSubmit={this.onSubmitHandler}>
                <h2>Buat Catatan</h2>
                <form>
                    <p className="note-input__title__char-limit"> Sisa Karakter : {this.state.limitedTitle - this.state.title.length}</p>
                    <input type="text" value={this.state.title} placeholder='Judul Catatan' onChange={this.onTitleChangeHandler} className='note-input__title' />
                    <textarea cols="30" rows="10" value={this.state.body} placeholder='Catatan Hari ini ...' onChange={this.onBodyChangeHandler} className="note-input__body" />
                    <button >Tambah</button>
                </form>
            </div>
        )
    }
}


export default NoteInput;