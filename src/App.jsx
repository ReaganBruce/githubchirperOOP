import React, { useState, useEffect } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [chirps, setChirps] = useState([
    {
      username: `Joe Biden`,
      chirp: `ahhhh i got hairy legs!`,
    },
    {
      username: `realDonaldTrump`,
      chirp: `pls don't ban me chirper!`,
    },
    {
      username: `jakeLovett`,
      chirp: "thats cool, you know what it is cool. too?",
    },
  ]);

  
  const handleClick = (e) => {
    e.preventDefault();
    let newChirps = { username: userName, chirp: userMessage };
    setChirps([...chirps, newChirps]);
    console.log(newChirps);
  };
  useEffect(() => {}, [chirps]);

  return (
    <>
      <form className="d-flex justify-content-center mt-3">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
        />
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="message"
        />
        <button className="btn btn-primary" onClick={handleClick}>Chirp It!</button>
      </form>

      <main className="container-fluid mt-5">
        {chirps.map((value, id) => (
          <h3 key={id}>
            <div className="border border-primary p-2 ">
            {`@${value.username}: `} {value.chirp}
            </div>
          </h3>
        ))}
      </main>
    </>
  );
};

export default App;