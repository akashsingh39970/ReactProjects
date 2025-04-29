import { useState,useEffect } from "react"
import Button from "./Button";



function Joke() {
    const [joke, setJoke] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);
    

    const fetchApi =() =>{
        fetch("https://v2.jokeapi.dev/joke/Any").then((res)=> res.json()).then((data) => setJoke(data.joke));
        
      
    };

    useEffect(() => {
        if(buttonClicked){
            fetchApi();
            setButtonClicked(false);
        }
    
    }, [buttonClicked])
   
  return (  
   
        <div>
            <h2>here is your joke</h2>
            <h3>{joke}</h3>
            <Button callApi={()=> {setButtonClicked(true)}}/>

        </div>
  )
}

export default Joke
