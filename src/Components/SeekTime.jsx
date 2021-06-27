import React,{ useEffect} from 'react'
import { useStateValue } from '../StateProvider';
import '../CSS/SeekTime.css'

const SeekTime = () => {
        const [{ tracks,startTrack, n,salgorithm }, dispatch] = useStateValue();

        useEffect(() => {
          if(salgorithm === "SCAN" || salgorithm === "CSCAN")
          dispatch({
            type: "SET_N",
            n: Math.abs(startTrack - tracks[0]) + Math.abs(tracks[0] - tracks[1]) + Math.abs(tracks[1] - tracks[2]) + Math.abs(tracks[2] - tracks[3])
              + Math.abs(tracks[3] - tracks[4]) + Math.abs(tracks[4] - tracks[5]) + Math.abs(tracks[5] - tracks[6])
          })
        },[tracks])

        return (
          <div className="seek-time">
            {!isNaN(n) ? (
              <div className="seek-values">
                <label>Total Seek Time</label>
                <span className="on">:</span>
                <div className="equation">
                  | {startTrack} - {tracks[0]} | + | {tracks[0]} - {tracks[1]} | + |{" "}
                  {tracks[1]} - {tracks[2]} | + | {tracks[2]} - {tracks[3]} | +
                  | {tracks[3]} - {tracks[4]} | + | {tracks[4]} - {tracks[5]} |
                  {(salgorithm === "SCAN" || salgorithm === "CSCAN") && ` + | ${tracks[5]} - ${tracks[6]} |`} =
                </div>
            <div className="value">{!isNaN(n) && n}</div>
              </div>
            ) : (
              <div className="enter-value">
                <h1>
                  {" "}
                  Enter values and choose an algorithm to get total seek time{" "}
                </h1>
              </div>
            )}
          </div>
        );
}

export default SeekTime
