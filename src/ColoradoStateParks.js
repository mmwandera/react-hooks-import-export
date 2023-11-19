import React from "react";
import howManyParks from "./parks/howManyParks";
import elevation from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  elevation(); 

  return <h1>Colorado State Parks!</h1>;
}
