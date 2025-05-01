import { useState, useEffect } from "react";
import Button from "./Button";

function Joke() {
  const [joke, setJoke] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const fetchApi = () => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((res) => res.json())
      .then((data) => {
        let formattedJoke = "";

        if (data.type === "single") {
          formattedJoke = data.setup;
          console.log("single");
        } else if (data.type === "twopart") {
          formattedJoke = `${data.setup} - ${data.delivery}`;
        }

        setJoke([formattedJoke]); // store in array for consistent rendering
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        setJoke(["Failed to load joke."]);
      });
  };

  useEffect(() => {
    if (buttonClicked) {
      fetchApi();
      setButtonClicked(false);
    }
  }, [buttonClicked]);

  return (
    <div>
      <h2>Here is your joke</h2>
      <ul>
        {joke.map((j, index) => (
          <li key={index}>{j}</li>
        ))}
      </ul>
      <Button callApi={() => setButtonClicked(true)} />
    </div>
  );
}

export default Joke;
