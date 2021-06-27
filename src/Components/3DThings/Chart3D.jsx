import React,{useEffect} from 'react';
import Plot from 'react-plotly.js'
import { useStateValue } from '../../StateProvider';
import { selectAlgorithm } from '../../Algorithms/algo';



function Chart() {

const [{fcf, salgorithm, ftracks,startTrack}, dispatch] = useStateValue()

        useEffect(() => {
                dispatch(
                {
                        type: "SET_CHART",
                        fcf: selectAlgorithm("LALALA",ftracks,startTrack)
                }
                )
        }, [salgorithm])

const arr = [0,1,2,3,4,5,6,7,8]
const arr1 = [0,1,2,3,4,5,6,7,8]
const a = [[0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1],
        [2,2,2,2,2,2,2,2],
        [3,3,3,3,3,3,3,3,3],
        [4,4,4,4,4,4,4,4,4],
        [5,5,5,5,5,5,5,5],
        [6,6,6,6,6,6,6,6]
        ] 
        
const ffc = fcf.slice()
if(ffc.length){
        ffc[0].indexOf(startTrack) === -1 && ffc[0].unshift(startTrack)
        ffc[1].indexOf(startTrack) === -1 && ffc[1].unshift(startTrack)
        ffc[2].indexOf(startTrack) === -1 && ffc[2].unshift(startTrack)
        ffc[3].indexOf(startTrack) === -1 && ffc[3].unshift(startTrack)
        ffc[4].indexOf(startTrack) === -1 && ffc[4].unshift(startTrack)
        ffc[5].indexOf(startTrack) === -1 && ffc[5].unshift(startTrack)
        ffc[6].indexOf(startTrack) === -1 && ffc[6].unshift(startTrack)
}
const fcfs = ffc.slice()
        var FCFS = {
                x: a[0], y: fcfs[0], z: arr,
                name: "0 - FCFS",
                type: 'scatter3d',
                mode: 'lines+markers'
        }
        
        var LIFO = {
                x: a[1], y: fcfs[1], z: arr,
                name: "1 - LIFO",
                type: 'scatter3d',
                mode: 'lines+markers'
                
        }
        
        var SSTF = {
                x: a[2], y: fcfs[2], z: arr,
                name: "2 - SSTF",
                type: 'scatter3d',
                mode: 'lines+markers'
                
        }
        
        var SCAN = {
                x: a[3], y: fcfs[5], z: arr1,
                name: "3 - SCAN",
                type: 'scatter3d',
                mode: 'lines+markers'
                
        }
        
        var CSCAN = {
                x: a[4], y: fcfs[6], z: arr1,
                name: "4 - CSCAN",
                type: 'scatter3d',
                mode: 'lines+markers'
                
        }
        
        var LOOK = {
                x: a[5], y: fcfs[3], z: arr,
                name: "5 - LOOK",
                type: 'scatter3d',
                mode: 'lines+markers'
                
        }
        
        var CLOOK = {
                x: a[6], y: fcfs[4], z: arr,
                name: "6 - CLOOK",
                type: 'scatter3d',
                mode: 'lines+markers'

        }

        return (
        <Plot className="chart3d"
        data={[FCFS,LIFO,SSTF,SCAN,CSCAN,LOOK,CLOOK]}
        layout={{
                width: 1410,
                height: 910,
                title: `Scatter3D Chart for all algorithms`,
        }}
        />
        );
}

export default Chart;