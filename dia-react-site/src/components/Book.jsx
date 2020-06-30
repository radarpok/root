import React from 'react';


const _ = require("../../data/udemy_react")

const style_ = {
    border: "2px solid black",
    textAlign: "right",
    backgroundColor: "aquamarine",
    marginLeft: "10px",
    marginRight: "10px",
    padding: "10px"
}

export default function Book(){
    return(
        <div>
            <ol style={style_}>
                <h1><i>{_._.section_1.title}</i></h1>
                <li>{_._.section_2.title}</li>
                <li>About</li>
                <li>Books</li>
                <li><a href="https://www.udemy.com/">Udemy courses</a></li>
            </ol>
        </div>
    )
}