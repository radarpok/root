import React from 'react';

const style_ = {
    backgroundColor: "yellow",
    fontFamily: "monospace",
    textAlign: "center",
    fontSize: "40px",
    border: "2px solid black"
}

function Note() {
    return (
        <div className="note">
            <h1 style={style_}>This is the note title</h1>
            <p>This is the note content</p>
        </div>
    );
}

export default Note;