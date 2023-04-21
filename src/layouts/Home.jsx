import React from 'react'

// COMPONENTS
import { Menu, Sidebar } from '../components';

// PAGES
import { Products } from '../pages';


function Home() {
  return (
    <>

      <Menu></Menu>

      <div className="row m-0">
        <Sidebar></Sidebar>
        <Products></Products>
      </div>

    </>
  )
}

export default Home
