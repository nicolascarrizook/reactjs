import React, { Fragment } from 'react'
import './index.css'

import Button from '@mui/material/Button';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/container/ItemListContainer';
import { Container } from '@mui/material';


export const App = () => {
  return (
      <Container>
        <NavBar />
        <ItemListContainer message="Greeting of app JS"/>
      </Container>
  )
}
