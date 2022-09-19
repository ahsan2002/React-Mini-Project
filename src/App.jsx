import React from "react";

function App() {

  let curdate = new Date();
  curdate = curdate.getHours();
  let greeting = "";
  const cssstyle = {};

  if (curdate >= 1 && curdate < 12) {
    greeting = "Good Morning";
    cssstyle.color = "red";
  } else if (curdate >= 12 && curdate < 19) {
    greeting = "Good Afternoon";
    cssstyle.color = "orange";
  } else {
    greeting = "Good Night";
    cssstyle.color = "black";
  }

  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={cssstyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
