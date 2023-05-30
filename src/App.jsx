import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootswatch/dist/morph/bootstrap.min.css'; // Added this :boom:
import './App.scss'

import { Col, Container, Form, Row, ToggleButton } from 'react-bootstrap'
import NavigationBar from './components/NavigationBar';
import Click1 from './components/Click1';


// ----------



function App() {
  return (
    // <ViteComponent />

    <div className='app'>
      <NavigationBar />
      
      <Container className='app-wrapper p-2 border border-1'>
        <h1 className='border border-1'>welcome! this a test ground for making a mobile app thingie!</h1>

        <Row>
          <Col>
            <Click1 />
          </Col>
        </Row>
      </Container>
    </div>
  )
}




// ----------



export default App;