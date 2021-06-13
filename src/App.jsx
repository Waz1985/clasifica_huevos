import React, { useState } from "react";

import Clasificador from "./components/Clasificador/Clasificador"
import FormHuevos from "./components/FormHuevos/FormHuevos"

function App() {
  const [medidaHuevo, setMedidaHuevo] = useState(0);
  const setearMedidaHuevo = (medidaHuevo)=>{
    setMedidaHuevo(medidaHuevo)
  }

 return(
   <div>
     <Clasificador medidaHuevo={medidaHuevo} />
     <FormHuevos medidaHuevo={medidaHuevo} setMedidaHuevo={setearMedidaHuevo} />
   </div>
 );
}

export default App;
