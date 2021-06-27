import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Html } from "drei";



export default function Boxes({ algorithm,position, rotation, color, args, clas,number,start }) {
        const mesh = useRef();

        return (
                <mesh
                        ref={mesh}
                        userData={{ test: "hello" }}
                        position={position}
                        rotation={rotation}
                        opacity={0}
                        castShadow
                >
                        <boxGeometry attach="geometry" args={args} />
                        <meshStandardMaterial
                                attach="material"
                                color={color}
                        />
                        <Html className="algorithm-name">
                                <div className="r1">
                                        <h1>Algorithm: <span className="name-name">{algorithm}</span></h1>
                                </div>
                        </Html>
                        <Html scaleFactor={10} className={`box${clas}`}>
                        <div className="round"><h3 className ="r">{start}</h3></div>
                        <div className="round"><h3 className ="r2">{number[0]}</h3></div>
                        <div className="round"><h3 className ="r3">{number[1]}</h3></div>
                        <div className="round"><h3 className ="r4">{number[2]}</h3></div>
                        <div className="round"><h3 className ="r5">{number[3]}</h3></div>
                        <div className="round"><h3 className ="r6">{number[4]}</h3></div>
                        <div className="round"><h3 className ="r7">{number[5]}</h3></div>
                        </Html>
                </mesh>
        );
}