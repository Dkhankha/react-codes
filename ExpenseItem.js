"use client"
import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  const [amount,setAmount] = useState(props.amount) 
  
  const deleteHandler = () => {
    setAmount("100")    
    // document.getElementById(props.id).remove();
  }
  
    return (
    
    <div id={props.id}>
    <Card className='expense-item'>
    <ExpenseDate date={props.date}/>
    <ExpenseDetails amount={amount} title={props.title} LocationOfExpenditure={props.LocationOfExpenditure}/>
    <button className='btn' onClick={deleteHandler}>change</button>
    </Card>
    </div>
  
  )
}

export default ExpenseItem