import React, { useState, useEffect } from "react";
import "./App.css";
import teamData from "./CollegeBasketballTeams.json";

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function App() {
  const [teamNames, setTeamNames] = useState<TeamProps[]>([]);

  useEffect(() => {
    setTeamNames(teamData.teams);
  }, []);

  function Welcome() {
    return <h1>Welcome to March Madness Managed!</h1>;
  }

  function Team({ school, name, city, state }: TeamProps) {
    return (
      <div>
        <h2>School Name: {school}</h2>
        <h3>Mascot: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
      </div>
    );
  }

  function TeamList() {
    const [showAllTeams, setShowAllTeams] = useState(false);

    const toggleShowAllTeams = () => {
      setShowAllTeams(!showAllTeams);
    };

    return (
      <div>
        <br></br>
        <h3>
          Click here to learn more about all of the colleges in NCAA Basketball:
        </h3>
        <button onClick={toggleShowAllTeams}>
          {showAllTeams ? "Hide Teams" : "Show All Teams"}
        </button>
        {showAllTeams &&
          teamNames.map((theTeam, index) => (
            <Team
              school={theTeam.school}
              name={theTeam.name}
              city={theTeam.city}
              state={theTeam.state}
              key={index}
            />
          ))}
      </div>
    );
  }

  return (
    <div className="App">
      <Welcome />
      <img
        src={require("./basketball.jpg")}
        alt="Basketball"
        style={{ width: "600px", height: "320x" }}
      />
      <TeamList />
    </div>
  );
}

export default App;
