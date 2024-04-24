import { ACTIONS } from "../Kalkulator/Kalkulator"

export default function DigitButton({dispatch, digit}){
    return(
        <button 
            onClick={()=> dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }})} className='calcBTN'
        >
            {digit}
        </button>
    )

}