import { Col, Container, Row } from 'react-bootstrap'



function Status(props) {
  return (
    <div className='status'>
      <div>status</div>
      
      <Container>
        <Row className='mx-0 my-0 mb-1 p-0 gap-1'>
          <Col className='mx-0 my-0 p-0'>
            <ArmourClass />
          </Col>

          <Col className='mx-0 my-0 p-0'>
            <Initiative />
          </Col>

          <Col className='mx-0 my-0 p-0'>
            <Speed />
          </Col>
        </Row>

        <Row className='mx-0 my-0 mb-1 p-0'>
          <Col className='mx-0 my-0 p-0'>
            <CurrentHP />
          </Col>
        </Row>

        <Row className='mx-0 my-0 mb-1 p-0'>
          <Col className='mx-0 my-0 p-0'>
            <TemporaryHP />
          </Col>
        </Row>

        <Row className='mx-0 my-0 mb-1 p-0 gap-1'>
          <Col className='mx-0 my-0 p-0'>
            <HitDice />
          </Col>

          <Col className='mx-0 my-0 p-0'>
            <DeathSaves />
          </Col>
        </Row>

      </Container>
    </div>
  )
}

function ArmourClass(props) {
  return (
    <div className='bg-light p-1'>
      <div>
        <input className='w-100' type="text" />
      </div>

      <div>armour class</div>
    </div>
  )
}

function Initiative(props) {
  return (
    <div className='bg-light p-1'>
      <div>
        <input className='w-100' type="text" />
      </div>

      <div>armour class</div>
    </div>
  )
}

function Speed(props) {
  return (
    <div className='bg-light p-1'>
      <div>
        <input className='w-100' type="text" />
      </div>

      <div>armour class</div>
    </div>
  )
}

function CurrentHP(props) {
  return (
    <div fluid className='current-hp'>
      <div className='row mb-1 m-auto p-0 gap-1 border'>
        <div className='p-0 w-fit'> 
          <span className=''>max hp</span>
        </div>

        <div className="col m-auto p-0">
          <input className='w-100' type="text" />
        </div>
      </div>

      <div>
        <input className='w-100' type="text" />
      </div>

      <div>
        <span>current hit points</span>
      </div>
    </div>
  )
}

function TemporaryHP(props) {
  return (
    <Container fluid className='bg-light p-1'>
      <Row>
        <Col>
          <input className='w-100' type="text" />
        </Col>
      </Row>

      <Row>
        temporary hit points
      </Row>
    </Container>
  )
}

function HitDice(props) {
  return (
    <div fluid className='bg-light p-1 h-100'>
      <div className='row mb-1 m-auto p-0 gap-1 border'>
        <div className='p-0 w-fit'> 
          <span className='mx-0 my-0 p-0'>total</span>
        </div>

        <div className="col p-0">
          <input className='w-100' type="text" />
        </div>
      </div>

      <div>
        <input className='w-100' type="text" />
      </div>

      <div>
        <span>hit dice</span>
      </div>
    </div>
  )
}

function DeathSaves(props) {

  return (
    <div className='bg-light p-1 h-100'>
      <div>
        <div className='d-flex justify-content-between'>
          <span>successes</span>
          <div>
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
          </div>
        </div>

        <div className='d-flex justify-content-between'>
          <span>failures</span>
          <div>
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
          </div>
        </div>
        
      </div>

      <div>
        death saves
      </div>
    </div>
  )
}

export default Status;