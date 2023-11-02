import React from 'react'
import { Navbar } from './components/NavBar/Navbar'
import { ContainerBox } from './components/ContainerBox/ContainerBox'

export const App = () => {
  return (
    <>
    <Navbar/>
    <ContainerBox message={"Hola bienvenido a mi app"}/>
    </>
  )
}
