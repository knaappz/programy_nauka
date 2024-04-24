import { ACTIONS } from "../Kalkulator/Kalkulator"

export default function OpButton({dispatch, operation}){
    return(
        <button 
            onClick={()=> dispatch({ type: ACTIONS.CHOOSE_OP, payload: { operation }})} className='calcBTN'
        >
            {operation}
        </button>
    )

}