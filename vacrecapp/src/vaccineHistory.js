import React from "react";
import AddVaccine from './addVaccine.js';

function VacHistory() {
    return (
      <div className="container" style={{
        position: "relative",
        marginTop: "30px",
        marginLeft: "30px",
        marginBottom: "30px"
      }}>
          <AddVaccine/> 
      </div>
    ) 
}

export default VacHistory;