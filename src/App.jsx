import React, { useState, useEffect } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const [tweets, setTweets] = useState([
    {
      userName: "@HumanOverdose: ",
      message: "I love tofu!",
    },
    {
      userName: "@RajonGadong: ",
      message: "I stomp on the floor feet",
    },
    {
      userName: "@oneofYourFriends: ",
      message: "Missssssyyyy",
    },
  ]);

  useEffect(() => {},[tweets]);

  const handleClick = (e) => {
    e.preventDefault();
    let newTweet = { userName: username, message: msg };
    setTweets([...tweets, newTweet]);
    console.log(setTweets);
    console.log(`Button Clicked!`);
};

  const myTweets = tweets.map((value, id) => {
    return (
      <li key={id}>{value.userName + ': '}{value.message}</li>
    );
  });

  return (
    <>
      <input
        value={username}
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        value={msg}
        type="text"
        placeholder="Chirp your thoughts... "
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={(e) => handleClick(e)}>Chirp</button>

      <ul>{myTweets}</ul>
    </>
  );
};

export default App;

