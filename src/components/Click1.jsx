import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import '../styles/Click1.scss';


function Click1(props) {
  const [count, setCount] = useState(0);

  return (
    <div className='m-auto p-4 w-fit rounded-5 shadow'>
      <p class="big-text text-center">{count}</p>

      <ButtonGroup className='rounded-5'>
        <Button
          className='fs-1 py-0'
          variant="primary" onClick={() => setCount((count) => count + 1)}>
          <span>+</span>
        </Button>

        <Button
          className='fs-1 py-0'
          variant="primary" onClick={() => setCount((count) => count - 1)}>
          -
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default Click1;