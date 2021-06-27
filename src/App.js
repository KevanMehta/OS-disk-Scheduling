import React,{Suspense, lazy} from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Buttons from './Components/Buttons';
import SeekTime from './Components/SeekTime'
import Inputs from './Components/Inputs';
import Tutorials from './Components/Tutorials'
import { useStateValue } from './StateProvider';

let speed = 1500

const Summary = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/Summary')), speed)
  })
});
const LineChart = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/CanvasJs/LineChart')), speed)
  })
});
const Index = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/3DThings')), speed)
  })
});
const Chart = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Components/3DThings/Chart3D')), speed)
  })
});

function App() {
  let brightness = "40%"
  const [{showModel, showChart, showLine, showSummary, count}] = useStateValue()

  if(count >= 10){
    brightness = "100%"
  }

  return (
    <div>
      {(count < 10  && count >= 1)&& <div className="tutorial">
        <Tutorials />
      </div>}
      <div className="app" style={{filter: `brightness(${brightness})`}}>
      <Header></Header>
      <Inputs></Inputs>
      <Main></Main>
      <Buttons></Buttons>

        <div id="lines" className="line-chart">
        {!showLine ? 
            <Suspense fallback={<div className="spinner">
                                  <div></div>
                                  <div></div>
                                </div>}>
            <LineChart />
        </Suspense>
        : 
        <div className="empty-line">
          <h1>
            Visualize Line Chart Here
          </h1>
        </div>
        }
        </div>

        <div className="radar-chart" id="summary">
        {!showSummary ? 
            <Suspense fallback={<div className="spinner">
                                  <div></div>
                                  <div></div>
                                </div>}>
            <Summary />
        </Suspense>
          :
          <div className="empty-radar">
            <h1>
              See Summary Here
            </h1>
          </div>
        }
        </div>

      <SeekTime></SeekTime>
        <div className="model" id="3d">
          {!showModel || !showChart ? (
            <>
              {!showModel && showChart ?
                (<Suspense fallback={<div className="spinner">
                                      <div></div>
                                      <div></div>
                                    </div>}>
                  <Index />
                </Suspense>) : 
                showModel && !showChart ?
                  <Suspense fallback={<div className="spinner">
                                        <div></div>
                                        <div></div>
                                      </div>}>
                  <Chart />
                </Suspense>
                : null
              }
            </>
              ) : (
            <div className="empty-model">
              <h1 className="see-radar">Visualize 3D Model or Chart Here</h1>
            </div>
              )
          }
        </div>
      </div>
    </div>
  );
}


export default App;

