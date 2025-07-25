import { useState } from 'react'
import "./Gradient.css"

function Gradient() {
  const [rows, setRows] = useState(10)
  const [cols, setCols] = useState(100)
  const [arr, setArr] = useState([]);

  const generateMatrix = () => {
    const matrix = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 'M')
    );
    setArr(matrix);
  };
  

  return (
    <div id="gradient-main">
        <input type='button' onClick={()=>generateMatrix()} value="Click"/>
        {arr.map((row,j)=>(
          <div>
            {row.map((e, i)=>(
              <span className='gradient-span' style={{ color: `rgb(${255/cols*i}, ${255/rows*j}, ${154})` }}>■</span>
            ))}     
          </div>    
        ))}
    </div>
  )
}

export default Gradient