import { useReducer } from 'react'
import './Calc.css'

const ACTIONS = {
    ADD_DIGIT: 'ad-digit',
    CLEAR: 'clear',
    CHOOSE: 'choose-op',
    DELETE: 'delete',
    EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) {
    switch(type) {

    }
}


export default function Kalkulator() {

    const [{currOp, prevOp, operation}, dispatch] = useReducer(reducer,{})

    return (
    <section id='homeview'>
        
        <div className="calk">
            <h3>Kalkuulator</h3>
            <div className="output">
                <div className="prev-operand">{prevOp} {operation}</div>
                <div className="curr-operand">{currOp}</div>
            </div>

            <button className='span-one calcBTN'>AC</button>
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
  

  