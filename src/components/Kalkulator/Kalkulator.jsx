import { useReducer } from 'react'
import './Calc.css'

// function reducer(state, action) {

// }


export default function Kalkulator() {

    // const [{currOp, prevOp, operation}, dispatch] = useReducer(reducer)

    return (
    <section id='homeview'>
        
        <div className="calk">



            <div className="output">
                <div className="prev-operand"></div>
                <div className="curr-operand"></div>
            </div>

            <button className='span-two calcBTN'>AC</button>
            <button className='calcBTN'>Del</button>
            <button className='calcBTN'>/</button>
            <button className='calcBTN'>1</button>
            <button className='calcBTN'>2</button>
            <button className='calcBTN'>3</button>
            <button className='calcBTN'>*</button>
            <button className='calcBTN'>4</button>
            <button className='calcBTN'>5</button>
            <button className='calcBTN'>6</button>
            <button className='calcBTN'>+</button>
            <button className='calcBTN'>7</button>
            <button className='calcBTN'>8</button>
            <button className='calcBTN'>9</button>
            <button className='calcBTN'>-</button>
            <button className='calcBTN'>.</button>
            <button className='calcBTN'>0</button>
            <button className='span-two calcBTN'>=</button>


        </div>

    </section>
      
    )
  }
  

  