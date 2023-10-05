import React from 'react'
import ExpenseItem from './Components/ExpenseItem';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: 'Bathroom',
    },
    { id: 'e2', 
    title: 'New TV',
    amount: 799.49, 
    date: new Date(2021, 2, 12),
    LocationOfExpenditure: 'living Room',
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: 'Car',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: 'Home Office',
    },
  ];
  return (
    <div>
      <div>Let's get Started</div>
      {expenses.map((expense) => (
        <ExpenseItem 
        key ={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date = {expense.date}
        LocationOfExpenditure={expense.LocationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App