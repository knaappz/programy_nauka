import { useReducer } from 'react'
import './Calc.css'
import DigitButton from '../DigitButton/DigitButton'
import OpButton from '../OpButton/OpButton'

export const ACTIONS = {
    ADD_DIGIT: 'ad-digit',
    CLEAR: 'clear',
    CHOOSE_OP: 'choose-op',
    DELETE: 'delete',
    EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite) {
                return {
                    ...state,
                    currOp: payload.digit,
                    overwrite: false,
                }
            }
            if (payload.digit === '0' && state.currOp === '0') {
                return state
            }
            if (payload.digit === '.' && state.currOp.includes('.')) {
                return state
            }


            return {
                ...state,
                currOp: `${state.currOp || ''}${payload.digit}`,
            }

        case ACTIONS.CHOOSE_OP:
            if (state.currOp == null && state.prevOp == null) {
                return state
            }

            if (state.currOp == null) {
                return{
                    ...state,
                    operation: payload.operation
                }
            }
                
            if (state.prevOp == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    prevOp: state.currOp,
                    currOp: null,
                }
            }

            return {
                ...state,
                prevOp: evaluate(state),
                operation: payload.operation,
                currOp: null,
            }

        case ACTIONS.CLEAR:
            return {}

        case ACTIONS.EVALUATE:
            if (
                state.operation == null || 
                state.currOp == null ||
            state.prevOp == null
        ) {
            return state
        }

        return {
            ...state,
            overwrite: true,
            prevOp: null,
            operation: null,
            currOp: evaluate(state),
        }

        case ACTIONS.DELETE:
            if (state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currOp: null
                }
            }
            if (state.currOp == null) return state
            if (state.currOp.lenght === 1) {
                return { ...state, currOp: null }
            }

            return {
                ...state,
                currOp: state.currOp.slice(0, -1)
            }
    }
}

function evaluate({currOp, prevOp, operation}) {
    const prev = parseFloat(prevOp)
    const curr = parseFloat(currOp)
    if (isNaN(prev) || isNaN(curr)) return ''
    let computation = ''
    switch (operation) {
        case '+':
            computation = prev + curr
            break
        case '-':
            computation = prev - curr
            break
        case '*':
            computation = prev * curr
            break
        case '/':
            computation = prev / curr
            break
    }
    return computation.toString()
}

const Int_Formater = new Intl.NumberFormat('pl', {maximumFractionDigits: 0})

function formatOp(op) {
    if (op == null) return
        const [integer, decimal] = op.split('.')
    if (decimal == null) return Int_Formater.format(integer)
    return `${Int_Formater.format(integer)}.${decimal}`
}

export default function Kalkulator() {

    const [{currOp, prevOp, operation}, dispatch] = useReducer(reducer,{})
    return (
    <section id='homeview'>

        <div className="calk">
            <h3>Kalkuulator</h3>
            <div className="output">

                <div className="prev-operand">{prevOp} {operation}</div>
                <div className="curr-operand">{formatOp(currOp)}</div>
            </div>

            <button 
                onClick={() => dispatch({type: ACTIONS.CLEAR})} className='span-one calcBTN'>
                    AC
                </button>

            <button onClick={() => dispatch({type: ACTIONS.DELETE})} className='calcBTN'>Del</button>

            <OpButton operation='/' dispatch={dispatch} className='calcBTN'/>

            <DigitButton digit='7' dispatch={dispatch} className='calcBTN'/>
            <DigitButton digit='8' dispatch={dispatch} className='calcBTN'/>
            <DigitButton digit='9' dispatch={dispatch} className='calcBTN'/>

            <OpButton operation='*' dispatch={dispatch} className='calcBTN'/>

            <DigitButton digit='4' dispatch={dispatch} className='calcBTN'/>
            <DigitButton digit='5' dispatch={dispatch} className='calcBTN'/>
            <DigitButton digit='6' dispatch={dispatch} className='calcBTN'/>

            <OpButton operation='+' dispatch={dispatch} className='calcBTN'/>


            <DigitButton digit='1' dispatch={dispatch} className='calcBTN'/>
            <DigitButton digit='2' dispatch={dispatch} className='calcBTN'/>
            <DigitButton digit='3' dispatch={dispatch} className='calcBTN'/>

            <OpButton operation='-' dispatch={dispatch} className='calcBTN'/>

            <DigitButton digit='.' dispatch={dispatch} className='calcBTN'/>

            <DigitButton digit='0' dispatch={dispatch} className='calcBTN'/>
            <button onClick={() => dispatch({type: ACTIONS.EVALUATE})} className='span-two calcBTN'>=</button>
        </div>
    </section>
    )}