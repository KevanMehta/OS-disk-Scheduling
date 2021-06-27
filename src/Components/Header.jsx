import React from 'react'
import { ReactComponent as R } from "../disk.svg";
import "../CSS/Header.css";
import { useStateValue } from '../StateProvider';

const Header = () => {
        const [{},dispatch] = useStateValue()
        const handleClick = () => {
                dispatch(
                {
                        type: 'SET_ALL',
                        range: [0,200],
                        tracksall: [176,78,11,34,60,92],
                        ftracksall: [176,78,11,34,60,92],
                        ttracksall: [176,78,11,34,60,92],
                        start: 50,
                        algo: "FCFS"
                }
                )
        }
        return (
                <nav className="header">
                        <R onDoubleClick={handleClick} className="img"></R>
                        <h1>Disk Scheduling Visualizer</h1>
                </nav>
        )
}

export default Header
