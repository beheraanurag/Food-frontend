import React from 'react'
import Herosection from '../components/Herosection'
import BrowserMenu from '../components/BrowserMenu'
import WeProvide from '../components/WeProvide'
import Weoffer from '../components/Weoffer'
import Fastestfood from '../components/Fastestfood'
import WhatOurCustomer from '../components/WhatOurCustomer'

function Homepage() {
  return (
    <div>
      <Herosection/>
      <BrowserMenu/>
      <WeProvide/>
      <Weoffer/>
      <Fastestfood/>
      <WhatOurCustomer/>
    </div>
  )
}

export default Homepage
