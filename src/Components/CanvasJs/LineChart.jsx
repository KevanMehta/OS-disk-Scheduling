import React from 'react'
import "../../CSS/LineChart.css";
import CanvasJSReact from './canvasjs.react'
import { useStateValue } from '../../StateProvider';

const LineChart = () => {
        let fcfs = false
        let lifo = false
        let sstf = false
        let scan = false
        let cscan = false
        let look = false
        let clook = false

        var CanvasJSChart = CanvasJSReact.CanvasJSChart;
        const [{salgorithm,tracks,startTrack},dispatch] = useStateValue()

        if(salgorithm === "FCFS"){
          fcfs = true
        } 
        if(salgorithm === "LIFO"){
          lifo = true
        } 
        if(salgorithm === "SSTF"){
          sstf = true
        } 
        if(salgorithm === "SCAN"){
          scan = true
        } 
        if(salgorithm === "CSCAN"){
          cscan = true
        } 
        if(salgorithm === "LOOK"){
          look = true
        } 
        if(salgorithm === "CLOOK"){
          clook = true
        } 

        const options = {
          animationEnabled: true,
          animationDuration: 10000,
          exportEnabled: true,
          theme: "dark1", // "light1", "dark1", "dark2"
          title: {
            text: "Line Chart Visualization",
          },
          axisY: {
            title: "Track Number",
            suffix: "",
          },
          axisX: {
            title: "Order of Arrival",
            prefix: "",
            interval: 1,
          },
          data: [
            fcfs && {
              type: "line",
              toolTipContent: " Track Number: {y}",
              dataPoints: [
                { x: 0, y: startTrack },
                { x: 1, y: tracks[0] },
                { x: 2, y: tracks[1] },
                { x: 3, y: tracks[2] },
                { x: 4, y: tracks[3] },
                { x: 5, y: tracks[4] },
                { x: 6, y: tracks[5] },
              ],
            },
            lifo && {
              type: "line",
              toolTipContent: " Track Number: {y}",
              dataPoints: [
                { x: 0, y: startTrack },
                { x: 1, y: tracks[0] },
                { x: 2, y: tracks[1] },
                { x: 3, y: tracks[2] },
                { x: 4, y: tracks[3] },
                { x: 5, y: tracks[4] },
                { x: 6, y: tracks[5] },
              ],
            },
            sstf && {
              type: "line",
              toolTipContent: " Track Number: {y}",
              dataPoints: [
                { x: 0, y: startTrack },
                { x: 1, y: tracks[0] },
                { x: 2, y: tracks[1] },
                { x: 3, y: tracks[2] },
                { x: 4, y: tracks[3] },
                { x: 5, y: tracks[4] },
                { x: 6, y: tracks[5] },
              ],
            },
            scan && {
              type: "line",
              toolTipContent: " Track Number: {y}",
              dataPoints: [
                { x: 0, y: startTrack },
                { x: 1, y: tracks[0] },
                { x: 2, y: tracks[1] },
                { x: 3, y: tracks[2] },
                { x: 4, y: tracks[3] },
                { x: 5, y: tracks[4] },
                { x: 6, y: tracks[5] },
                { x: 7, y: tracks[6] },
              ],
            },
            cscan && {
              type: "line",
              toolTipContent: " Track Number: {y}",
              dataPoints: [
                { x: 0, y: startTrack },
                { x: 1, y: tracks[0] },
                { x: 2, y: tracks[1] },
                { x: 3, y: tracks[2] },
                { x: 4, y: tracks[3] },
                { x: 5, y: tracks[4] },
                { x: 6, y: tracks[5] },
                { x: 7, y: tracks[6] },
              ],
            },
            look && {
              type: "line",
              toolTipContent: " Track Number: {y}",
              dataPoints: [
                { x: 0, y: startTrack },
                { x: 1, y: tracks[0] },
                { x: 2, y: tracks[1] },
                { x: 3, y: tracks[2] },
                { x: 4, y: tracks[3] },
                { x: 5, y: tracks[4] },
                { x: 6, y: tracks[5] },
              ],
            },
            clook && {
              type: "line",
              toolTipContent: " Track Number: {y}",
              dataPoints: [
                { x: 0, y: startTrack },
                { x: 1, y: tracks[0] },
                { x: 2, y: tracks[1] },
                { x: 3, y: tracks[2] },
                { x: 4, y: tracks[3] },
                { x: 5, y: tracks[4] },
                { x: 6, y: tracks[5] },
              ],
            },
          ],
        };
        
        return (
            <div className="chart">
              <CanvasJSChart
                className="line"
                options={options}
              />
            </div>
        );
}

export default LineChart
