import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../Notes";


function App(){
    return (<div> <header><Header /></header>
    

    {Notes.map((note) =>(
        <Note 
            key= {note.key}
            title ={note.title}
            content={note.content}
        />
    ))}

    <footer><Footer /></footer>

    </div>
    );

}
export default App;