"use client"
import React from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    document.getElementById(props.id).remove();
  }
  
    return (
    <div id={props.id}>
    <Card className='expense-item'>
    <ExpenseDate date={props.date}/>
    <ExpenseDetails amount={props.amount} title={props.title} LocationOfExpenditure={props.LocationOfExpenditure}/>
    <button className='btn' onClick={deleteHandler}>Delete</button>
    </Card>
    </div>
  )
}

export default ExpenseItem