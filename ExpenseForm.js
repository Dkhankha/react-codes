"use client"
import React, { useState } from 'react'

const ExpenseForm = () => {
  const [enteredtitle, setenteredtitle] = useState("")
  const [enteredAmount, setenteredAmount] = useState("")
  const [enteredDate, setenteredDate] = useState("")
  const titleChangedHandler = (event) => {
   setenteredtitle(event.target.value)
  }
  
  const AmountChangedHandler = (event) => {
    setenteredAmount(event.target.value)
  }

  const dateChangedHandler = (event) => {
    setenteredDate(event.target.value)
  }
  return (
    <div>
     <form className='form-data'>
      <div className='group'>
        <label htmlFor="Expense">Title:</label>
        <input type="text" id='Expense' onChange={titleChangedHandler} />
        </div>
        <div className='group'>
        <label htmlFor="ExpenseAmt">Expense-Amount:</label>
        <input type="text" id='ExpenseAmt' onChange={AmountChangedHandler}/>
        </div>
        <div className='group'>
        <label htmlFor="dated">Date:</label>
        <input type="date" id='dated' name='dated' onChange={dateChangedHandler}/>
        </div>
        <button className='btnn'>Submit</button>
     </form>
    </div>
  )
}

export default ExpenseForm