import React, { useState } from "react";

function Counter () {
    const [angka,setAngka]=useState(0)

    const handleIncrement=()=>{
        setAngka(angka + 1);
    }
      const handleIncrement1=()=>{
        setAngka(angka - 1);
    }
    return (  
        <div>
            <div className='text-6xl font-bold'>{angka}</div>       
       <button className="btn btn-secondary"onClick={handleIncrement}>+</button>
       <button className="btn btn-secondary"onClick={handleIncrement1}>-</button>
       </div>
    );
}
 
export default Counter