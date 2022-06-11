import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const React = require("react");

function ViewGuide() {
  let params = useParams();
  let redirect = useNavigate();
  let validId = true;

  //To do: check if ID matches that of a guide

  if (validId == false) {
    redirect("/error404");
  }
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <h1>View Guide with id {params.id}</h1>
      {/* guide contents go here */}
    </main>
  );
}

export default ViewGuide;
