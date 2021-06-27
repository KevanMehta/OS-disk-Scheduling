import React, { useState, useEffect } from 'react'
import "../CSS/Inputs.css";
import { Button } from "@material-ui/core"
import { toInteger } from 'lodash';
import { useStateValue } from '../StateProvider';

const Inputs = () => {
        const [{range}, dispatch] = useStateValue()
        const [start, setStart] = useState("")
        const [end, setEnd] = useState("")
        const [disable,setDisable] = useState(false)
        const [disabled] = useState("")

        useEffect(() => {
                if (range !== "" && start === "" && end === ""){
                        setStart(toInteger(0))
                        setEnd(toInteger(200))
                        setDisable(true)
                }
        }, [range])
        
        const addRange = (e) => {
                e.preventDefault()
                setDisable(true)
                dispatch({
                        type: "SET_RANGE",
                        range: [start,end],
                })
        }

        return (
                <div className="inputs">
                <form  className="input">
                        <div className="process-name">
                                <label htmlFor="start">Range From: </label>
                                <input id="start" min={0} disabled={disable} value ={start} onChange={(e) =>setStart(toInteger(e.target.value))}required type="number"/>
                                <span className={`minmax ${disabled}`}>Min: 0</span>
                        </div>
                        <div className="platter-number">
                                <label htmlFor="end">To: </label>
                                <input id="end" min={1 + + start} disabled={disable} value ={end}  max={9999} onChange={(e) => setEnd(toInteger(e.target.value))} required type="number"/>
                                <span className={`minmax ${disabled}`}>Max: 9999</span>
                        </div>
                        <div className="submit">
                        <Button className="submit-button" type="submit" onClick={addRange} disabled={!(start >= 0 && end > start && end <= 9999 && start >= 0 && end !== 0 && !disable)} variant="contained">
                                ADD
                        </Button>
                        </div>
                </form>
                </div>
                
        )
}
export default Inputs
