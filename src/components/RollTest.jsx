import { useState } from 'react';
import roll from '../utils/roll';



function RollTest(props) {
  const [btn1, setBtn1] = useState('roll 2d6')

  function clickRollButton(q, v, setTxt) {
    setTxt = roll(q, v);
  }

  return (
    <div>
      <button type="submit" onClick={() => clickRollButton(2, 6)} value={btn1}>{btn1}</button>

      <p>{btn1}</p>

    </div>
  )
}

export default RollTest;