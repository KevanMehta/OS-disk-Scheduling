import React,{Suspense, lazy} from 'react'
import { useStateValue } from '../../StateProvider';
import { Canvas } from "react-three-fiber";
import {
        GroundPlane,
        BackDrop,
        KeyLight,
        FillLight,
        RimLight
} from './Model'
import Cylinder from './Model';
import Sphere from './MiddleSphere';
import { isEmpty } from 'lodash';
import Boxes from './Boxes'
const Index = () => {

        let nn = 0
        let numbers = 0
        let num

        const [{salgorithm, startTrack, tracks, range }] = useStateValue()


        if (!isEmpty(tracks)) {
                nn = tracks
                numbers = nn.slice();
                numbers.unshift(startTrack)
                numbers.sort(function (a, b) {
                        return a - b;
                });
                numbers.reverse()
                num = tracks.slice()
                for (var i = 0; i < num.length; i++) {
                        if ((num[i] === range[0]) && num.length > 5) {
                                num.splice(i, 1);
                                i--;
                        }
                        if ((numbers[i] === range[0]) && numbers.length > 7) {
                                numbers.splice(i, 1);
                                i--;
                        }
                }
        }

        return (
                <Canvas className="canvas">
                        <GroundPlane />
                        <BackDrop />
                        <KeyLight brightness={0} color="#9dc8e4" />
                        <FillLight brightness={2.6} color="#bdefff" />
                        <RimLight brightness={7} color="#9dc8e4" />

                        <Sphere
                                args={[0.4, 30, 20]}
                                position={[0, 0.6, -0.23]}
                                rotation={[0.38, 0, 0]}
                                color="#9dc8e4"
                                clas="0"
                        />
                        <Cylinder
                                args={[3.8, 3.82, 0.1, 80]}
                                position={[0, 0.6, -0.3]}
                                rotation={[0.38, 1, 0]}
                                color="rgb(7, 93, 139)"
                                clas="1"
                                number={numbers[0]}
                                numb={numbers}
                                startTrack={startTrack}
                                tracks={num}
                                ftracks={numbers}
                        />
                        <Cylinder
                                args={[3.4, 0, 0.1, 70]}
                                position={[0, 0.6, -0.29]}
                                rotation={[0.38, 1, 0]}
                                color="#9dc8e4"
                                clas="2"
                                number={numbers[1]}
                                numb={numbers}
                                startTrack={startTrack}
                                tracks={num}
                                ftracks={numbers}
                        />
                        <Cylinder
                                args={[3.0, 0, 0.1, 45]}
                                position={[0, 0.6, -0.27]}
                                rotation={[0.382, 1, 0]}
                                color="rgb(7, 93, 139)"
                                clas="3"
                                number={numbers[2]}
                                numb={numbers}
                                startTrack={startTrack}
                                tracks={num}
                                numbers={numbers}
                        />
                        <Cylinder
                                args={[2.5, 0, 0.1, 45]}
                                position={[0, 0.6, -0.26]}
                                rotation={[0.382, 1, 0]}
                                color="#9dc8e4"
                                clas="4"
                                number={numbers[3]}
                                numb={numbers}
                                startTrack={startTrack}
                                tracks={num}
                                numbers={numbers}
                        />
                        <Cylinder
                                args={[2.0, 0, 0.1, 45]}
                                position={[0, 0.6, -0.25]}
                                rotation={[0.382, 1, 0]}
                                color="rgb(7, 93, 139)"
                                clas="5"
                                number={numbers[4]}
                                numb={numbers}
                                startTrack={startTrack}
                                tracks={num}
                                numbers={numbers}
                        />
                        <Cylinder
                                args={[1.5, 0, 0.1, 40]}
                                position={[0, 0.6, -0.24]}
                                rotation={[0.382, 1, 0]}
                                color="#9dc8e4"
                                clas="6"
                                number={numbers[5]}
                                numb={numbers}
                                startTrack={startTrack}
                                tracks={num}
                                numbers={numbers}
                        />
                        <Cylinder
                                args={[1.0, 0, 0.1, 45]}
                                position={[0, 0.6, -0.23]}
                                rotation={[0.382, 1, 0]}
                                color="rgb(7, 93, 139)"
                                clas="7"
                                number={numbers[6]}
                                numb={numbers}
                                startTrack={startTrack}
                                numbers={numbers}
                                tracks={num}
                        />
                        <Cylinder
                                args={[0.3, 0.01, 0.3, 10]}
                                position={[5.5, 3.3, -0.24]}
                                rotation={[0.382, 1, 0]}
                                color="#ffcd24"
                                rotate={true}
                                clas="8"
                                startTrack={startTrack}
                                numb={numbers}
                                tracks={num}
                                numbers={numbers}
                        />
                        <Boxes
                                algorithm={salgorithm}
                                args={[6.7, 0.13, 1.4]}
                                position={[5.3, 4.5, -2.5]}
                                rotation={[4.71, 0, 0]}
                                color="rgba(7, 93, 139,0.1)"
                                clas="1"
                                number={num}
                                start={startTrack}
                        />
                </Canvas>
                
        )
}

export default Index