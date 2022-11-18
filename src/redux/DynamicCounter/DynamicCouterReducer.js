import { DINCREMENT,DDECREMENT } from "../DynamicCounter/ActionTypes"

const initialState={
    value: 30
}
const DynamicCounterReducer =(state =initialState ,action)=>{
   switch(action.type){
      case DINCREMENT:
        return {
            ...state,
            value: state.value + action.payload
        }
        case DDECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }
        default:
         return state ;
   }
}
export default DynamicCounterReducer;