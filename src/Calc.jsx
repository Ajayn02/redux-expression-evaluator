import React ,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { calculate,clear } from './calcSlice'

function Calc() {

    const calc=useSelector((state)=>state.calcReducer.result)
    // console.log(calc);

    const dispatch=useDispatch()

    const [val,setVal]=useState("")

    return (
        <>
            <div className='container-fluid d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
                <div className=' p-5  rounded border border-dark   shadow' >
                    <h3 className='text-center mb-3'>Calculate</h3>
                    <input type="text" className='form-control mb-3 me-3 ' placeholder='Enter an expression' onChange={(e)=>{setVal(e.target.value)}} value={val} />
                    
                        <button className='btn btn-success mb-3' onClick={()=>{dispatch(calculate(val))}}>Result</button>
                        <button className='btn btn-warning ms-3 ' onClick={()=>{dispatch(clear(setVal))}} style={{marginTop:"-15px"}}>Reset</button>

                    <h4 className='mt-2'>Result : {calc}</h4>
                </div>
            </div>
        </>
    )
}

export default Calc