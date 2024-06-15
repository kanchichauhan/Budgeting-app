import React from 'react'

const TotalBudgetRemaining = ({totalBudget, totalAmt}) => {
  const calculateBudget = totalBudget.reduce((accumulator, currentValue) => accumulator + currentValue, totalAmt)
  console.log(calculateBudget)
  
  return (
    <div className='total-budget-calc'><span className='label-name'>TotalBudget </span><span id={calculateBudget < 0 ? 'loss' : 'profit'}>{calculateBudget}</span></div>
  )
}

export default TotalBudgetRemaining