import React from "react";

function Note(props){
return (<div>    <note><h1>{props.title}</h1> <p>{props.content}</p></note></div>);
}
export default Note;