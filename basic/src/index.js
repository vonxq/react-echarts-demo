import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'
import Chart from './chart'
const Ha = () => (
  <div>
   <Counter />
   <Chart />
 </div>
)
render(<Ha />, document.getElementById("app"))
