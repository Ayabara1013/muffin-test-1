import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Col, Container, Form, Row, ToggleButton } from 'react-bootstrap'

import Status from './components/Status'
import Attacks from './components/Attacks'
import Equiptment from './components/Equiptment'
import RollTest from './components/RollTest'



// export default function App() {
//   return (
//     <h1>hello world</h1>
//   )
// }

const player = {
  stats: {
    str: { name: 'strength',      value: 15 },
    dex: { name: 'dexterity',     value: 14 },
    con: { name: 'constitution',  value: 13 },
    int: { name: 'intelligence',  value: 12 },
    wis: { name: 'wisdon',        value: 10 },
    cha: { name: 'charisma',      value: 8  },
  }
}

function App() {
  return (
    // <ViteComponent />

    <Container fluid className='p-2 bg-light'>
      <Row id='sheet-header' className='box1 mb-1'>
        <Col>
        <h1>Character Sheet</h1>
        </Col>
      </Row>

      <Row id='sheet-body' className='box1'>
        <Col className='box1 me-1'>
          <div>column 1</div>

          <Row className='box1 d-flex '>
            <Col>
              <Stats stats={player.stats} />
            </Col>

            <Col>
              <Inspiration />
              <ProficiencyBonus />
              <SavingThrows />
              <Skills />
            </Col>
          </Row>

          <Row className='row box1'>
            passives
          </Row>

          <Row className='row box1'>
            other proficiencies
          </Row>
        </Col>
        
        <Col className='box1 me-1'>
          <div>column 2</div>
          <Placeholder />
          <Status />
          <Attacks />
          <Equiptment />
        </Col> 

        <Col className='box1'>
          <div>column 3</div>
          <RollTest />
        </Col> 


      </Row>

    </Container>
  )
}

function Stats(props) {
  const { stats } = props;

  return (
    <Container className='box1'>
      <Row className=''>
        <Col className=''>
          <h2>stats</h2>
          <Stat stat={stats.str} />
          <Stat stat={stats.dex} />
          <Stat stat={stats.con} />
          <Stat stat={stats.int} />
          <Stat stat={stats.wis} />
          <Stat stat={stats.cha} />
        </Col>

      </Row>
    </Container>
  )
}

function Stat(props) {
  const { stat } = props;

  return (
    <div className='stat-item mb-1 m-auto border'>
      <span className='d-block'>{stat.value}</span>
      <span className='d-block'>{stat.name.slice(0, 3)}</span>
    </div>
  )
}

function Inspiration(props) {
  const [checked, setChecked] = useState(false);

  return (
    <div className='box1'>
      {/* <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Inspiration
      </ToggleButton> */}

      <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)} />
      <span>inspiration</span>
    </div>
  )
}

function ProficiencyBonus(props) {
  return (
    <div className='box1'>
      <input placeholder='proficiency bonus'/>
      <span>proficiency bonus</span>
    </div>
  )
}

function SavingThrows(props) {
  return (
    <div className='box1'>
      <div>Saving Throws</div>
      <ModifierItem name='strength' />
      <ModifierItem name='dexterity' />
      <ModifierItem name='constitution' />
      <ModifierItem name='intelligence' />
      <ModifierItem name='wisdom' />
      <ModifierItem name='charisma' />
    </div>
  )
}

function Skills(props) {
  return (
    <div className='box1'>
      <ModifierItem name='acrobatics' />
      <ModifierItem name='animal handling' />
      <ModifierItem name='arcana' />
      <ModifierItem name='athletics' />
      <ModifierItem name='desception' />
      <ModifierItem name='history' />
      <ModifierItem name='insight' />
      <ModifierItem name='intimidation' />
      <ModifierItem name='investigation' />
      <ModifierItem name='medicine' />
      <ModifierItem name='nature' />
      <ModifierItem name='perception' />
      <ModifierItem name='performance' />
      <ModifierItem name='persuasion' />
      <ModifierItem name='religion' />
      <ModifierItem name='sleight of hand' />
      <ModifierItem name='stealth' />
      <ModifierItem name='survival' />
    </div>
  )
}

function ModifierItem({ item = 'item-identifier', name = 'item-name', value = 0, state = false }) {
  const [checked, setChecked] = useState(state);

  return (
    <div className='d-flex box1'>
      <input className='me-2'
        type="checkbox" checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)} />
      <span className='me-2'>{value}</span>
      <span className=''>{name}</span>
    </div>
  )
}

function Placeholder(props) {
  return (
    <div className='box1'>
      <div>placeholder</div>
      
      <div>

      </div>
    </div>
  )
}


export default App;