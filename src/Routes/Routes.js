import React from 'react';
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,

} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Layout from '../Components/Layout/Layout';
import Home from '../Pages/Home/Home';
import ListUser from '../Pages/ListUsers/ListUser';
import Turnos from '../Pages/Turnos/Turnos';
import AgregarTurnos from '../Pages/AgregarTurnos/AgregarTurnos';


const Routes = () => {

  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route
            path="/"
            element={
              
                <CSSTransition
                  classNames="fade"
                  timeout={300}
                  appear
                  in={true}
                  unmountOnExit
                >
                  <Home />
                </CSSTransition>
            }
          />
          <Route
            path="/users"
            element={
              
                <CSSTransition
                  classNames="fade"
                  timeout={300}
                  appear
                  in={true}
                  unmountOnExit
                >
                  <ListUser />
                </CSSTransition>
            }
          />
          <Route
            path="/turnos"
            element={
              
                <CSSTransition
                  classNames="fade"
                  timeout={300}
                  appear
                  in={true}
                  unmountOnExit
                >
                  <Turnos />
                </CSSTransition>
            }
          />
          <Route
            path="/agregarTurnos"
            element={
              
                <CSSTransition
                  classNames="fade"
                  timeout={300}
                  appear
                  in={true}
                  unmountOnExit
                >
                  <AgregarTurnos />
                </CSSTransition>
            }
          />
        </ReactDomRoutes>
      </Layout>
      
    </BrowserRouter>
  );
};

export default Routes;
