import React from "react";
import Notes from "./Notes";

function Home(props) {
  return (
    <div className="container">
      {/* Notes component */}
      <Notes showalert={props.showalert}/>
    </div>
  );
}

export default Home;
