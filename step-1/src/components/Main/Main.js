import React, { useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Toolbar from '../Toolbar/Toolbar'
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard'
import Editor from '../Editor/Editor'
import Map from '../Map/Map'
import Login from '../Login/Login'
import { useCookies } from 'react-cookie'
import UserContext from '../UserContext'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


function Main() {
  const [loggedIn, setLoggedIn] = useContext(UserContext)
  const [cookies, setCookie] = useCookies(['logged-in'])

  const setOrCheckLoggedIn = (status) => {
    if (cookies['logged-in'] === 'true' || status) {
      setLoggedIn(true)
    }
    if (status && cookies['logged-in'] !== 'true') {
      setCookie('logged-in', true)
} }
  useEffect(() => {
    setOrCheckLoggedIn()
})
  return (
    <Router>
      <Container className="Container">
        <Row>
          <Col xs={1}>
            <Toolbar />
          </Col>
          <Col>
            <div className="Main">
              <Header />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/editor" component={Editor} />
                <Route exact path="/map" component={Map} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}
export default Main