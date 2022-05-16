
import {useEffect, useState} from "react";
import {Header} from "./components/headers";
import {fetchIMages} from "./utils"
import "./App.css"



const App = () => {
    const [userInput, setUserInput] = useState();
    const [title, setTitle] = useState();
    const [images, setImages] = useState([]);

    useEffect(() => {
      fetchIMages(setImages);
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        setTitle(userInput);
    };

    return(
        <div className="App">
            <Header title={title}/>
            <form onSubmit ={submitHandler}>
            <input onChange ={(e) => setTitle(e.target.value)} /> 
            {/* above changes title upon input */}
            </form>
            {title ? <h2>You wrote a title</h2> : <h2>Hurry up and Write a title </h2>}
            {title && <h2>Hooray</h2>}
            {images.map((image, i) =>{
              return(
                <img src = {image.download_url} alt = {`random file from unsplash number ${i}`}/>
              )
            })}
        </div>
    )
};

export default App;