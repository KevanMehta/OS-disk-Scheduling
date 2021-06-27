import React,{useState, useEffect} from 'react'
import "../CSS/Buttons.css";
import { Link } from "react-scroll";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Button } from "@material-ui/core"
import { useStateValue } from '../StateProvider';
import {selectAlgorithm} from '../Algorithms/algo'

const Buttons = () => {

        const [active, setactive] = useState("")
        const [disabled, setdisabled] = useState(true)
        const [algorithm, setAlgorithm] = useState("Select Algorithm")
  const [{ttracks,ftracks,salgorithm,startTrack},dispatch] = useStateValue()

        useEffect(() => {
                dispatch(
                {
                        type: 'SET_TRACKS',
                        ftracksall: selectAlgorithm("FCFS", ttracks,ttracks, startTrack),
                        tracksall: selectAlgorithm(algorithm, ftracks,startTrack),
                        start: startTrack
                }
                )
        },[algorithm])

        useEffect(() => { 
                if (salgorithm !== "" && algorithm === "Select Algorithm") {
                        setAlgorithm("FCFS");
                        setdisabled(false);
                }
                if(algorithm !== "Select Algorithm"){
                        dispatch({
                                type: "SET_ALGORITHM",
                                algo: algorithm
                        })
                }
        },[salgorithm,algorithm])

        const handleClick0 = () => {
                dispatch({
                        type: 'LINE',
                        showLine: false
                })
        }
        const handleClick1 = () => {
                dispatch({
                        type: 'SUMMARY',
                        showLine: false,
                        showSummary: false
                }
                )
        }
        const handleClick2 = () => {
                dispatch({
                        type: 'MODEL',
                        showModel: false,
                        showChart: true,
                })
        }

        const handleClick3 = () => {
                dispatch({
                        type: 'ALL',
                        showChart: false,
                        showModel: true,
                })
        }

        const handleClick4 = () => {
                window.location.reload(false);
        }


        
        return (
          <div className="algorithm">
            <div className="container">
              <div className="select-box">
                <div className={`options-container ${active}`}>
                  <div
                    className="option"
                    onClick={() => {
                      setAlgorithm("FCFS");
                      setdisabled(false);
                      setactive("");
                    }}
                  >
                    <input
                      type="radio"
                      className="radio"
                      id="fcfs"
                      name="category"
                    />
                    <label htmlFor="fcfs">FCFS</label>
                  </div>
                  <div
                    className="option"
                    onClick={() => {
                      setAlgorithm("LIFO");
                      setdisabled(false);
                      setactive("");
                    }}
                  >
                    <input
                      type="radio"
                      className="radio"
                      id="lifo"
                      name="category"
                    />
                    <label htmlFor="lifo">LIFO</label>
                  </div>
                  <div
                    className="option"
                    onClick={() => {
                      setAlgorithm("SSTF");
                      setdisabled(false);
                      setactive("");
                    }}
                  >
                    <input
                      type="radio"
                      className="radio"
                      id="sstf"
                      name="category"
                    />
                    <label htmlFor="sstf">SSTF</label>
                  </div>
                  <div
                    className="option"
                    onClick={() => {
                      setAlgorithm("SCAN");
                      setdisabled(false);
                      setactive("");
                    }}
                  >
                    <input
                      type="radio"
                      className="radio"
                      id="scan"
                      name="category"
                    />
                    <label htmlFor="scan">SCAN</label>
                  </div>

                  <div
                    className="option"
                    onClick={() => {
                      setAlgorithm("CSCAN");
                      setdisabled(false);
                      setactive("");
                    }}
                  >
                    <input
                      type="radio"
                      className="radio"
                      id="cscan"
                      name="category"
                    />
                    <label htmlFor="cscan">C-SCAN</label>
                  </div>
                  <div
                    className="option"
                    onClick={() => {
                      setAlgorithm("LOOK");
                      setdisabled(false);
                      setactive("");
                    }}
                  >
                    <input
                      type="radio"
                      className="radio"
                      id="look"
                      name="category"
                    />
                    <label htmlFor="look">LOOK</label>
                  </div>
                  <div
                    className="option"
                    onClick={() => {
                      setAlgorithm("CLOOK");
                      setdisabled(false);
                      setactive("");
                    }}
                  >
                    <input
                      type="radio"
                      className="radio"
                      id="clook"
                      name="category"
                    />
                    <label htmlFor="clook">C-LOOK</label>
                  </div>
                </div>
                <div
                  onClick={() => setactive(active === "" ? "active" : "")}
                  className="selected"
                >
                  <h2>{algorithm}</h2>
                  <ArrowDropDownIcon className="arrow"></ArrowDropDownIcon>
                </div>
              </div>
            </div>
            <div className="buttons">
              <Link
                activeClass="active"
                to="lines"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClick0}
              >
                <Button
                  className="visual-button"
                  id="line-button"
                  type="submit"
                  variant="contained"
                  disabled={disabled}
                >
                  Visualize Line Chart
                </Button>
              </Link>

              <Link
                activeClass="active"
                to="lines"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClick1}
              >
                <Button
                  className="visual-button"
                  id="radar-button"
                  type="submit"
                  variant="contained"
                  disabled={disabled}
                >
                  Show Line Chart & Summary
                </Button>
              </Link>

              <Link
                activeClass="active"
                to="3d"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClick2}
              >
                <Button
                  className="visual-button"
                  id="model-button"
                  type="submit"
                  variant="contained"
                  disabled={disabled}
                >
                  Visualize 3D Model
                </Button>
              </Link>

              <Link
                activeClass="active"
                to="3d"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClick3}
              >
                <Button
                  className="visual-button"
                  id="all-button"
                  type="submit"
                  variant="contained"
                  disabled={disabled}
                >
                  Show 3D Chart
                </Button>
              </Link>

              <div>
                <Button
                  className="visual-button"
                  id="reload-button"
                  type="submit"
                  variant="contained"
                  disabled={disabled}
                  onClick={handleClick4}
                >
                  Reload
                </Button>
              </div>
            </div>
          </div>
        );

}


export default Buttons
