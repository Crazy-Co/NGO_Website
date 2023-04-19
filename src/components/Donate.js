import React from 'react'
import { PaymentForm } from './PaymentForm'

export const Donate = () => {
  return (
    <section className='donate' id='donate_section'>
      <h2>Support Our Program</h2>
      <div className='image'></div> 
        <PaymentForm/>
    </section>
  )
}
