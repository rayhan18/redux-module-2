import { connect, useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../redux/counter/actions";

//use hooks with redux new options

 function HooksCounter({id}) {
    const count = useSelector((state)=> state.value)
    const dispatch =useDispatch()
    

    const hooksincrement = (value) => {
        dispatch(increment(value))
    };

    const hooksdecrement = (value) => {
        dispatch(decrement(value))
    };

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}-{id}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>hooksincrement()}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=> hooksdecrement()}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}



export default HooksCounter;