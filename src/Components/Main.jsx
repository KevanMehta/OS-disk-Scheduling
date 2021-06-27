import React,{useState, useEffect} from 'react'
import '../CSS/Main.css'
import { Button } from "@material-ui/core";
import {isEmpty ,toInteger} from "lodash";
import { useStateValue } from '../StateProvider';

const Main = () => {
        let [track0, setTrack0] = useState("")
        let [track1, setTrack1] = useState("")
        let [track2, setTrack2] = useState("")
        let [track3, setTrack3] = useState("")
        let [track4, setTrack4] = useState("")
        let [track5, setTrack5] = useState("")
        let [track6, setTrack6] = useState("")
        let [active0] = useState("")
        let [active1] = useState("")
        let [active2] = useState("")
        let [active3] = useState("")
        let [active4] = useState("")
        let [active5] = useState("")
        let [active6] = useState("")
        const [disabled0,setDisabled0] = useState(false)
        const [disabled1,setDisabled1] = useState(false)
        const [disabled2,setDisabled2] = useState(false)
        const [disabled3,setDisabled3] = useState(false)
        const [disabled4,setDisabled4] = useState(false)
        const [disabled5,setDisabled5] = useState(false)
        const [disabled6,setDisabled6] = useState(false)
        
        const [{range,tracks,startTrack}, dispatch] = useStateValue()

        const handleChange = (e) => {
                e.preventDefault()
                setDisabled0(true)
                dispatch({
                        type: "SET_STARTTRACK",
                        start: track0
                })
        }
        const handleClick1 = (e) => {
                e.preventDefault()
                setDisabled1(true)
        }
        const handleClick2 = (e) => {
                e.preventDefault()
                setDisabled2(true);
        }
        const handleClick3 = (e) => {
                e.preventDefault()
                setDisabled3(true);
        }
        const handleClick4 = (e) => {
                e.preventDefault()
                setDisabled4(true);
        }
        const handleClick5 = (e) => {
                e.preventDefault()
                setDisabled5(true);
        }
        const handleClick6 = (e) => {
                e.preventDefault()
                setDisabled6(true);
        }

        useEffect(() => {
                        dispatch({
                                type: "ADD_NUMBERS",
                                track: [track1,track2,track3,track4,track5,track6],
                                ftrack: [track1,track2,track3,track4,track5,track6],
                                ttrack: [track1,track2,track3,track4,track5,track6],
                        })
        }, [track1,track2,track4,track3,track5,track6])

        useEffect(() => {
                if (range !== "" && !isEmpty(tracks) && track0 === "" && track1 === ""  && track2 === "" && track3 === "" && track4 === "" && track5 === "" &&track6 === "") {
                        setTrack0(toInteger(startTrack))
                        setTrack1(toInteger(176))
                        setTrack2(toInteger(78))
                        setTrack3(toInteger(11))
                        setTrack4(toInteger(34))
                        setTrack5(toInteger(60))
                        setTrack6(toInteger(92))
                        setDisabled0(true)
                        setDisabled1(true)
                        setDisabled2(true)
                        setDisabled3(true)
                        setDisabled4(true)
                        setDisabled5(true)
                        setDisabled6(true)
                }
        }, [tracks,startTrack])

        let count = 1
        return (
                <div className="main">
                        <div className="tracks">
                        <div className="ttrack">
                        <form className="track start-track">
                                <div className="name">
                                <h1 className="track-name name0">Starting Track</h1>
                                </div>
                                <div className="number">
                                <h2 className="track-label" htmlFor={`track0`}>Track Number: </h2>
                                <input className="track-number" id={`track0`} value={track0} onChange={(e) => setTrack0(track0 = toInteger(e.target.value))}  min={range[0]}  max={range[1]} disabled={disabled0}  required type="number"/>
                                </div>
                                <Button className={`add-button ${active0}`} type="submit" onClick={handleChange} disabled={!(track0 >= range[0] && track0 <= range[1]&& track0 !== "" && !disabled0)} variant="contained">
                                        ADD Track
                                </Button>
                        </form>
                        </div>
                        <form className="track">
                                <div className="name">
                                <h2 className="track-label">Track Name: </h2>
                                <h3 className="track-name">{`Track${count++}`}</h3>
                                </div>
                                <div className="number">
                                <h2 className="track-label" htmlFor={`track${count}`}>Track Number: </h2>
                                <input className="track-number" id={`track${count}`} value={track1} onChange={(e) => setTrack1(track1 = toInteger(e.target.value))}  min={range[0]}  max={range[1]} disabled={disabled1}  required type="number"/>
                                </div>
                                <Button className={`add-button ${active1}`} type="submit" onClick={handleClick1} disabled={!(track1 >= range[0] && track1 <= range[1]&& track1 !== "" && !disabled1)} variant="contained">
                                        ADD Track
                                </Button>
                        </form>
                        <form className="track">
                                <div className="name">
                                <h2 className="track-label">Track Name: </h2>
                                <h3 className="track-name">{`Track${count++}`}</h3>
                                </div>
                                <div className="number">
                                <h2 className="track-label" htmlFor={`track${count}`}>Track Number: </h2>
                                <input className="track-number" id={`track${count}`} value={track2} onChange={(e) => setTrack2(track2 = toInteger(e.target.value))}  min={range[0]}  max={range[1]} disabled={disabled2}  required type="number"/>
                                </div>
                                <Button className={`add-button ${active2}`} onClick={handleClick2} type="submit" disabled={!(track2 >= range[0] && track2 <= range[1]&& track2 !== "" && !disabled2)} variant="contained">
                                        ADD Track
                                </Button>
                        </form>
                        <form className="track">
                                <div className="name">
                                <h2 className="track-label">Track Name: </h2>
                                <h3 className="track-name">{`Track${count++}`}</h3>
                                </div>
                                <div className="number">
                                <h2 className="track-label" htmlFor={`track${count}`}>Track Number: </h2>
                                <input className="track-number" id={`track${count}`} value={track3} onChange={(e) => setTrack3(track3 = toInteger(e.target.value))}  min={range[0]}  max={range[1]} disabled={disabled3}  required type="number"/>
                                </div>
                                <Button className={`add-button ${active3}`} type="submit" onClick={handleClick3} disabled={!(track3 >= range[0] && track3 <= range[1]&& track3 !== "" && !disabled3)} variant="contained">
                                        ADD Track
                                </Button>
                        </form>
                        <form className="track">
                                <div className="name">
                                <h2 className="track-label">Track Name: </h2>
                                <h3 className="track-name">{`Track${count++}`}</h3>
                                </div>
                                <div className="number">
                                <h2 className="track-label" htmlFor={`track${count}`}>Track Number: </h2>
                                <input className="track-number" id={`track${count}`} value={track4} onChange={(e) => setTrack4(track4 = toInteger(e.target.value))}  min={range[0]}  max={range[1]} disabled={disabled4}  required type="number"/>
                                </div>
                                <Button className={`add-button ${active4}`} type="submit" onClick={handleClick4} disabled={!(track4 >= range[0] && track4 <= range[1]&& track4 !== "" && !disabled4)} variant="contained">
                                        ADD Track
                                </Button>
                        </form>
                        <form className="track">
                                <div className="name">
                                <h2 className="track-label">Track Name: </h2>
                                <h3 className="track-name">{`Track${count++}`}</h3>
                                </div>
                                <div className="number">
                                <h2 className="track-label" htmlFor={`track${count}`}>Track Number: </h2>
                                <input className="track-number" id={`track${count}`} value={track5} onChange={(e) => setTrack5(track5 = toInteger(e.target.value))}  min={range[0]}  max={range[1]} disabled={disabled5}  required type="number"/>
                                </div>
                                <Button className={`add-button ${active5}`} type="submit" onClick={handleClick5} disabled={!(track5 >= range[0] && track5 <= range[1]&& track5 !== "" && !disabled5)} variant="contained">
                                        ADD Track
                                </Button>
                        </form>
                        <form className="track">
                                <div className="name">
                                <h2 className="track-label">Track Name: </h2>
                                <h3 className="track-name">{`Track${count++}`}</h3>
                                </div>
                                <div className="number">
                                <h2 className="track-label" htmlFor={`track${count}`}>Track Number: </h2>
                                <input className="track-number" id={`track${count}`} value={track6} onChange={(e) => setTrack6(track6 = toInteger(e.target.value))}  min={range[0]}  max={range[1]} disabled={disabled6}  required type="number"/>
                                </div>
                                <Button className={`add-button ${active6}`} type="submit" onClick={handleClick6} disabled={!(track6 >= range[0] && track6 <= range[1]&& track6 !== "" && !disabled6)} variant="contained">
                                        ADD Track
                                </Button>
                        </form>
                        
                        </div>
                        {/* <div className="empty-names">
                                <h1 className="see-request">
                                        Add Range To Unlock This
                                </h1>
                        </div> */}
                </div>
        )
}

export default Main
