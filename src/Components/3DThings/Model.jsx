import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Html } from "drei";
import '../../CSS/Model.css'


// Geometry
export function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="rgb(37, 123, 169)" />
    </mesh>
  );
}
export function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -4]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="rgb(7, 93, 139)" />
    </mesh>
  );
}

let stop6 = true;

function test5(flag) {
  if (!flag) {
    setTimeout(function () {
      test5(true);
    }, 2000);
    return;
  }
  stop6 = false
  return stop6
}

export default function Cylinder({position, numb,rotation,color,args, rotate,clas,number,startTrack,tracks}) {
  const mesh = useRef();
  //0.6999999999999957 – 0.8999999999999977 – -0.24
  //1.2100000000000002 – 0.8700000000000072 – -0.24
  //1.6600000000000006 – 0.8700000000000072 – -0.24
  //2.0500000000000007 – 0.8700000000000072 – 0.035399999999999564
  //2.469999999999998 – 0.6399999999999975 – 0.42500000000000043
  //2.8599999999999954 – 0.3399999999999972 – 0.944000000000001
  //2.949999999999995 – 0.09999999999999717 – 1.6000000000000019


// 2.050000000000009 – 0.5280000000000453 – 0.5520000000000004 (2)
// [176, 92, 78, 60, 50, 41, 11] (7)
// [176, 78, 41, 60, 92, 11]

    // code that you cannot modify





  let x7 = 0.7;
  let y7 = 0.7;
  let z7 = 0.24;

  let x6 = 1.21;
  let y6 = 0.6;
  let z6 = 0.34;

  let x5 = 1.62;
  let y5 = 0.6;
  let z5 = 0.4;

  let x4 = 2.05;
  let y4 = 0.53;
  let z4 = 0.55;

  let x3 = 2.47;
  let y3 = 0.48;
  let z3 = 0.65;

  let x2 = 2.8;
  let y2 = 0.46;
  let z2 = 0.85;

  let x1 = 2.95;
  let y1 = 0.1;
  let z1 = 1.6;

  let start1 = false;
  let start2 = false;
  let start3 = false;
  let start4 = false;
  let start5 = false;
  let start6 = false;

  let stop7 = true;

  let speed = 2000

function test(flag) {
  if (!flag) {
    setTimeout(function () {
      test(true);
    }, speed);
    return;
  }
  start6 = true
  stop7 = false
}

function test1(flag) {
  if (!flag) {
    setTimeout(function () {
      test1(true);
    }, speed);
    return;
  }
  start1 = false
  start2 = true
}

  function test2(flag) {
    if (!flag) {
      setTimeout(function () {
        test2(true);
      }, speed);
      return;
    }

    start2 = false
    start3 = true
    
  }
  function test3(flag) {
    if (!flag) {
      setTimeout(function () {
        test3(true);
      }, speed);
      return;
    }
    start3 = false
    start4 = true
    
  }
  function test4(flag) {
    if (!flag) {
      setTimeout(function () {
        test4(true);
      }, speed);
      return;
    }

    start4 = false
    start5 = true
  }
  
  
    
    function test6(flag) {
      if (!flag) {
        setTimeout(function () {
          test6(true);
        }, speed);
        return;
    }
    start6 = false
    start1 = true
}
  
  useFrame(
    () =>
      (rotate && stop6)&&
      ((mesh.current.rotation.y = mesh.current.rotation.y += 0.02),

        start5 && (test5(false)),

        stop7 && startTrack === numb[6] &&
        ((mesh.current.position.x >= x7) && (mesh.current.position.x -= 0.023),
        (mesh.current.position.x < x7 &&
          mesh.current.position.y >= y7) &&
        (mesh.current.position.y -= 0.04),
        (mesh.current.position.x < x7 &&
          mesh.current.position.y < y7 &&
          mesh.current.position.z <= z7) &&
        (mesh.current.position.z += 0.012) &&
        mesh.current.position.z > z7&&
        (test(false))),
        stop7 && startTrack === numb[5] &&
        ((mesh.current.position.x >= x6) && (mesh.current.position.x -= 0.023),
        (mesh.current.position.x < x6 &&
          mesh.current.position.y >= y6) &&
        (mesh.current.position.y -= 0.04),
        (mesh.current.position.x < x6 &&
          mesh.current.position.y < y6 &&
          mesh.current.position.z <= z6) &&
        (mesh.current.position.z += 0.012) &&
        mesh.current.position.z > z6 &&
        (test(false))),
        stop7 && startTrack === numb[4] &&
        ((mesh.current.position.x >= x5) && (mesh.current.position.x -= 0.023),
        (mesh.current.position.x < x5 &&
          mesh.current.position.y >= y5) &&
        (mesh.current.position.y -= 0.04),
        (mesh.current.position.x < x5 &&
          mesh.current.position.y < y5 &&
          mesh.current.position.z <= z5) &&
        (mesh.current.position.z += 0.012) &&
        mesh.current.position.z > z5 &&
        (test(false))),
        stop7 && startTrack === numb[3] &&
        ((mesh.current.position.x >= x4) && (mesh.current.position.x -= 0.023),
        (mesh.current.position.x < x4 &&
          mesh.current.position.y >= y4) &&
        (mesh.current.position.y -= 0.04),
        (mesh.current.position.x < x4 &&
          mesh.current.position.y < y4 &&
          mesh.current.position.z <= z4) &&
        (mesh.current.position.z += 0.012) &&
        mesh.current.position.z > z4 &&
        (test(false))),
        stop7 && startTrack === numb[2] &&
        ((mesh.current.position.x >= x3) && (mesh.current.position.x -= 0.023),
        (mesh.current.position.x < x3 &&
          mesh.current.position.y >= y3) &&
        (mesh.current.position.y -= 0.04),
        (mesh.current.position.x < x3 &&
          mesh.current.position.y < y3 &&
          mesh.current.position.z <= z3) &&
        (mesh.current.position.z += 0.012) &&
        mesh.current.position.z > z3 &&
        (test(false))),
        stop7 && startTrack === numb[1] &&
        ((mesh.current.position.x >= x2) && (mesh.current.position.x -= 0.023),
        (mesh.current.position.x < x2 &&
          mesh.current.position.y >= y2) &&
        (mesh.current.position.y -= 0.04),
        (mesh.current.position.x < x2 &&
          mesh.current.position.y < y2 &&
          mesh.current.position.z <= z2) &&
        (mesh.current.position.z += 0.012) &&
        mesh.current.position.z > z2 &&
        (test(false))),
        stop7 && startTrack === numb[0] &&
        ((mesh.current.position.x >= x1) && (mesh.current.position.x -= 0.023),
        (mesh.current.position.x < x1 &&
          mesh.current.position.y >= y1) &&
        (mesh.current.position.y -= 0.04),
        (mesh.current.position.x < x1 &&
          mesh.current.position.y < y1 &&
          mesh.current.position.z <= z1) &&
        (mesh.current.position.z += 0.012) &&
        mesh.current.position.z > z1 &&
        (test(false))),


        (
          (tracks[0] === numb[6] && startTrack === numb[0] && start6) ||
          (tracks[0] === numb[0] && tracks[1] === numb[6] && start1) ||
          (tracks[1] === numb[0] && tracks[2] === numb[6] && start2) ||
          (tracks[2] === numb[0] && tracks[3] === numb[6] && start3) ||
          (tracks[3] === numb[0] && tracks[4] === numb[6] && start4) ||
          (tracks[4] === numb[0] && tracks[5] === numb[6] && start5)
        ) && (
          mesh.current.position.x >= x7 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y <= y7 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z7 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x7 &&
              mesh.current.position.y > y7 &&
              mesh.current.position.z < z7) &&
            (
              (
                startTrack === numb[0] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[0] && tracks[1] === numb[6]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[0] && tracks[2] === numb[6]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[0] && tracks[3] === numb[6]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[0] && tracks[4] === numb[6]
                && (test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[5] && startTrack === numb[0] && start6) ||
          (tracks[0] === numb[0] && tracks[1] === numb[5] && start1) ||
          (tracks[1] === numb[0] && tracks[2] === numb[5] && start2) ||
          (tracks[2] === numb[0] && tracks[3] === numb[5] && start3) ||
          (tracks[3] === numb[0] && tracks[4] === numb[5] && start4) ||
          (tracks[4] === numb[0] && tracks[5] === numb[5] && start5)
        ) && (
          mesh.current.position.x >= x6 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y <= y6 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z6 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x6 &&
              mesh.current.position.y > y6 &&
              mesh.current.position.z < z6) &&
            (
              (
                startTrack === numb[0] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[0] && tracks[1] === numb[5]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[0] && tracks[2] === numb[5]
                && (test2(false, start2))
              ),
              (
                tracks[2] === numb[0] && tracks[3] === numb[5]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[0] && tracks[4] === numb[5]
              && (test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[4] && startTrack === numb[0] && start6) ||
          (tracks[0] === numb[0] && tracks[1] === numb[4] && start1) ||
          (tracks[1] === numb[0] && tracks[2] === numb[4] && start2) ||
          (tracks[2] === numb[0] && tracks[3] === numb[4] && start3) ||
          (tracks[3] === numb[0] && tracks[4] === numb[4] && start4) ||
          (tracks[4] === numb[0] && tracks[5] === numb[4] && start5)
        ) && (
          mesh.current.position.x >= x5 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y5 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z5 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x5 &&
              mesh.current.position.y >= y5 &&
              mesh.current.position.z < z5) &&
            (
              (
                startTrack === numb[0] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[0] && tracks[1] === numb[4]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[0] && tracks[2] === numb[4]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[0] && tracks[3] === numb[4]
                && (test3(false, start3))
              ),
              (
                tracks[3] === numb[0] && tracks[4] === numb[4]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[3] && startTrack === numb[0] && start6) ||
          (tracks[0] === numb[0] && tracks[1] === numb[3] && start1) ||
          (tracks[1] === numb[0] && tracks[2] === numb[3] && start2) ||
          (tracks[2] === numb[0] && tracks[3] === numb[3] && start3) ||
          (tracks[3] === numb[0] && tracks[4] === numb[3] && start4) ||
          (tracks[4] === numb[0] && tracks[5] === numb[3] && start5)
        ) && (
          mesh.current.position.x >= x4 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y4 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z4 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x4 &&
              mesh.current.position.y >= y4 &&
              mesh.current.position.z < z4) &&
            (
              (
                startTrack === numb[0] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[0] && tracks[1] === numb[3]
                && (test1(false, start1))
              ),
              (
                tracks[1] === numb[0] && tracks[2] === numb[3]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[0] && tracks[3] === numb[3]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[0] && tracks[4] === numb[3]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[2] && startTrack === numb[0] && start6) ||
          (tracks[0] === numb[0] && tracks[1] === numb[2] && start1) ||
          (tracks[1] === numb[0] && tracks[2] === numb[2] && start2) ||
          (tracks[2] === numb[0] && tracks[3] === numb[2] && start3) ||
          (tracks[3] === numb[0] && tracks[4] === numb[2] && start4) ||
          (tracks[4] === numb[0] && tracks[5] === numb[2] && start5)
        ) && (
          mesh.current.position.x > x3 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y3 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z > z3 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x <= x3 &&
              mesh.current.position.y >= y3 &&
              mesh.current.position.z <= z3) &&
            (
              (
                startTrack === numb[0] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[0] && tracks[1] === numb[2]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[0] && tracks[2] === numb[2]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[0] && tracks[3] === numb[2]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[0] && tracks[4] === numb[2]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[1] && startTrack === numb[0] && start6) ||
          (tracks[0] === numb[0] && tracks[1] === numb[1] && start1) ||
          (tracks[1] === numb[0] && tracks[2] === numb[1] && start2) ||
          (tracks[2] === numb[0] && tracks[3] === numb[1] && start3) ||
          (tracks[3] === numb[0] && tracks[4] === numb[1] && start4) ||
          (tracks[4] === numb[0] && tracks[5] === numb[1] && start5)
        ) && (
          mesh.current.position.x > x2 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y2 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z > z2 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x <= x2 &&
              mesh.current.position.y >= y2 &&
              mesh.current.position.z <= z2) &&
            (
              (
                startTrack === numb[0] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[0] && tracks[1] === numb[1]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[0] && tracks[2] === numb[1]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[0] && tracks[3] === numb[1]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[0] && tracks[4] === numb[1]
                && (test4(false, start4))
              )
            )
          )
        ),

        // mesh.current.position.x = x2,
        // mesh.current.position.y = y2,
        // mesh.current.position.z = z2,

        (
          (tracks[0] === numb[0] && startTrack === numb[1] && start6) ||
          (tracks[0] === numb[1] && tracks[1] === numb[0] && start1) ||
          (tracks[1] === numb[1] && tracks[2] === numb[0] && start2) ||
          (tracks[2] === numb[1] && tracks[3] === numb[0] && start3) ||
          (tracks[3] === numb[1] && tracks[4] === numb[0] && start4) ||
          (tracks[4] === numb[1] && tracks[5] === numb[0] && start5)
        ) && (
          mesh.current.position.x < x1 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y1 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z1 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x1 &&
              mesh.current.position.y <= y1 &&
              mesh.current.position.z >= z1) &&
            (
              (
                startTrack === numb[1] && (test6(false, start6))
              ),
              (
                tracks[0] === numb[1] && tracks[1] === numb[0]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[1] && tracks[2] === numb[0]
                && ( test2(false, start2))
              ),
              (
                (tracks[2] === numb[1] && tracks[3] === numb[0])
              && (console.log("ab"),test3(false))
              ),
              (
                tracks[3] === numb[1] && tracks[4] === numb[0]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[6] && startTrack === numb[1] && start6) ||
          (tracks[0] === numb[1] && tracks[1] === numb[6] && start1) ||
          (tracks[1] === numb[1] && tracks[2] === numb[6] && start2) ||
          (tracks[2] === numb[1] && tracks[3] === numb[6] && start3) ||
          (tracks[3] === numb[1] && tracks[4] === numb[6] && start4) ||
          (tracks[4] === numb[1] && tracks[5] === numb[6] && start5)
        ) && (
          mesh.current.position.x >= x7 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y7 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z7 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x1 &&
              mesh.current.position.y >= y1 &&
              mesh.current.position.z < z1) &&
            (
              (
                startTrack === numb[1] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[1] && tracks[1] === numb[6]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[1] && tracks[2] === numb[6]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[1] && tracks[3] === numb[6]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[1] && tracks[4] === numb[6]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[5] && startTrack === numb[1] && start6) ||
          (tracks[0] === numb[1] && tracks[1] === numb[5] && start1) ||
          (tracks[1] === numb[1] && tracks[2] === numb[5] && start2) ||
          (tracks[2] === numb[1] && tracks[3] === numb[5] && start3) ||
          (tracks[3] === numb[1] && tracks[4] === numb[5] && start4) ||
          (tracks[4] === numb[1] && tracks[5] === numb[5] && start5)
        ) && (
          mesh.current.position.x >= x6 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y6 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z6 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x6 &&
              mesh.current.position.y >= y6 &&
              mesh.current.position.z < z6) &&
            (
              (
                startTrack === numb[1] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[1] && tracks[1] === numb[5]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[1] && tracks[2] === numb[5]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[1] && tracks[3] === numb[5]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[1] && tracks[4] === numb[5]
                && (test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[4] && startTrack === numb[1] && start6) ||
          (tracks[0] === numb[1] && tracks[1] === numb[4] && start1) ||
          (tracks[1] === numb[1] && tracks[2] === numb[4] && start2) ||
          (tracks[2] === numb[1] && tracks[3] === numb[4] && start3) ||
          (tracks[3] === numb[1] && tracks[4] === numb[4] && start4) ||
          (tracks[4] === numb[1] && tracks[5] === numb[4] && start5)
        ) && (
          mesh.current.position.x >= x5 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y5 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z5 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x5 &&
              mesh.current.position.y >= y5 &&
              mesh.current.position.z < z5) &&
            (
              (
                startTrack === numb[1] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[1] && tracks[1] === numb[4]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[1] && tracks[2] === numb[4]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[1] && tracks[3] === numb[4]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[1] && tracks[4] === numb[4]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[3] && startTrack === numb[1] && start6) ||
          (tracks[0] === numb[1] && tracks[1] === numb[3] && start1) ||
          (tracks[1] === numb[1] && tracks[2] === numb[3] && start2) ||
          (tracks[2] === numb[1] && tracks[3] === numb[3] && start3) ||
          (tracks[3] === numb[1] && tracks[4] === numb[3] && start4) ||
          (tracks[4] === numb[1] && tracks[5] === numb[3] && start5)
        ) && (
          mesh.current.position.x > x4 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y4 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z > z4 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x <= x4 &&
              mesh.current.position.y >= y4 &&
              mesh.current.position.z <= z4) &&
            (
              (
                startTrack === numb[1] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[1] && tracks[1] === numb[3]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[1] && tracks[2] === numb[3]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[1] && tracks[3] === numb[3]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[1] && tracks[4] === numb[3]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[2] && startTrack === numb[1] && start6) ||
          (tracks[0] === numb[1] && tracks[1] === numb[2] && start1) ||
          (tracks[1] === numb[1] && tracks[2] === numb[2] && start2) ||
          (tracks[2] === numb[1] && tracks[3] === numb[2] && start3) ||
          (tracks[3] === numb[1] && tracks[4] === numb[2] && start4) ||
          (tracks[4] === numb[1] && tracks[5] === numb[2] && start5)
        ) && (
          mesh.current.position.x > x3 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y <= y3 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z > z3 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x <= x3 &&
              mesh.current.position.y > y3 &&
              mesh.current.position.z <= z3) &&
            (
              (
                startTrack === numb[1] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[1] && tracks[1] === numb[2]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[1] && tracks[2] === numb[2]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[1] && tracks[3] === numb[2]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[1] && tracks[4] === numb[2]
                && ( test4(false, start4))
              )
            )
          )
        ),

        // mesh.current.position.x = x3,
        // mesh.current.position.y = y3,
        // mesh.current.position.z = z3,

        (
          (tracks[0] === numb[0] && startTrack === numb[2] && start6) ||
          (tracks[0] === numb[2] && tracks[1] === numb[0] && start1) ||
          (tracks[1] === numb[2] && tracks[2] === numb[0] && start2) ||
          (tracks[2] === numb[2] && tracks[3] === numb[0] && start3) ||
          (tracks[3] === numb[2] && tracks[4] === numb[0] && start4) ||
          (tracks[4] === numb[2] && tracks[5] === numb[0] && start5)
        ) && (
          mesh.current.position.x < x1 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y1 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z1 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x1 &&
              mesh.current.position.y < y1 &&
              mesh.current.position.z >= z1) &&
            (
              (
                startTrack === numb[2] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[2] && tracks[1] === numb[0]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[2] && tracks[2] === numb[0]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[2] && tracks[3] === numb[0]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[2] && tracks[4] === numb[0]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[1] && startTrack === numb[2] && start6) ||
          (tracks[0] === numb[2] && tracks[1] === numb[1] && start1) ||
          (tracks[1] === numb[2] && tracks[2] === numb[1] && start2) ||
          (tracks[2] === numb[2] && tracks[3] === numb[1] && start3) ||
          (tracks[3] === numb[2] && tracks[4] === numb[1] && start4) ||
          (tracks[4] === numb[2] && tracks[5] === numb[1] && start5)
        ) && (
          mesh.current.position.x < x2 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y2 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z2 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x2 &&
              mesh.current.position.y <= y2 &&
              mesh.current.position.z >= z2) &&
            (
              (
                startTrack === numb[2] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[2] && tracks[1] === numb[1]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[2] && tracks[2] === numb[1]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[2] && tracks[3] === numb[1]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[2] && tracks[4] === numb[1]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[3] && startTrack === numb[2] && start6) ||
          (tracks[0] === numb[2] && tracks[1] === numb[3] && start1) ||
          (tracks[1] === numb[2] && tracks[2] === numb[3] && start2) ||
          (tracks[2] === numb[2] && tracks[3] === numb[3] && start3) ||
          (tracks[3] === numb[2] && tracks[4] === numb[3] && start4) ||
          (tracks[4] === numb[2] && tracks[5] === numb[3] && start5)
        ) && (
          mesh.current.position.x >= x4 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y4 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z4 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x4 &&
              mesh.current.position.y >= y4 &&
              mesh.current.position.z < z4) &&
            (
              (
                startTrack === numb[2] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[2] && tracks[1] === numb[3]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[2] && tracks[2] === numb[3]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[2] && tracks[3] === numb[3]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[2] && tracks[4] === numb[3]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[4] && startTrack === numb[2] && start6) ||
          (tracks[0] === numb[2] && tracks[1] === numb[4] && start1) ||
          (tracks[1] === numb[2] && tracks[2] === numb[4] && start2) ||
          (tracks[2] === numb[2] && tracks[3] === numb[4] && start3) ||
          (tracks[3] === numb[2] && tracks[4] === numb[4] && start4) ||
          (tracks[4] === numb[2] && tracks[5] === numb[4] && start5)
        ) && (
          mesh.current.position.x >= x5 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y5 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z5 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x5 &&
              mesh.current.position.y >= y5 &&
              mesh.current.position.z < z5) &&
            (
              (
                startTrack === numb[2] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[2] && tracks[1] === numb[4]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[2] && tracks[2] === numb[4]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[2] && tracks[3] === numb[4]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[2] && tracks[4] === numb[4]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[5] && startTrack === numb[2] && start6) ||
          (tracks[0] === numb[2] && tracks[1] === numb[5] && start1) ||
          (tracks[1] === numb[2] && tracks[2] === numb[5] && start2) ||
          (tracks[2] === numb[2] && tracks[3] === numb[5] && start3) ||
          (tracks[3] === numb[2] && tracks[4] === numb[5] && start4) ||
          (tracks[4] === numb[2] && tracks[5] === numb[5] && start5)
        ) && (
          mesh.current.position.x > x6 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y6 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z > z6 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x <= x6 &&
              mesh.current.position.y >= y6 &&
              mesh.current.position.z <= z6) &&
            (
              (
                startTrack === numb[2] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[2] && tracks[1] === numb[5]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[2] && tracks[2] === numb[5]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[2] && tracks[3] === numb[5]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[2] && tracks[4] === numb[5]
                && (test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[6] && startTrack === numb[2] && start6) ||
          (tracks[0] === numb[2] && tracks[1] === numb[6] && start1) ||
          (tracks[1] === numb[2] && tracks[2] === numb[6] && start2) ||
          (tracks[2] === numb[2] && tracks[3] === numb[6] && start3) ||
          (tracks[3] === numb[2] && tracks[4] === numb[6] && start4) ||
          (tracks[4] === numb[2] && tracks[5] === numb[6] && start5)
        ) && (
          mesh.current.position.x > x7 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y <= y7 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z > z7 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x <= x7 &&
              mesh.current.position.y > y7 &&
              mesh.current.position.z <= z7) &&
            (
              (
                startTrack === numb[2] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[2] && tracks[1] === numb[6]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[2] && tracks[2] === numb[6]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[2] && tracks[3] === numb[6]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[2] && tracks[4] === numb[6]
                && ( test4(false, start4))
              )
            )
          )
        ),

        // mesh.current.position.x = x4,
        // mesh.current.position.y = y4,
        // mesh.current.position.z = z4,

        (
          (tracks[0] === numb[0] && startTrack === numb[3] && start6) ||
          (tracks[0] === numb[3] && tracks[1] === numb[0] && start1) ||
          (tracks[1] === numb[3] && tracks[2] === numb[0] && start2) ||
          (tracks[2] === numb[3] && tracks[3] === numb[0] && start3) ||
          (tracks[3] === numb[3] && tracks[4] === numb[0] && start4) ||
          (tracks[4] === numb[3] && tracks[5] === numb[0] && start5)
        ) && (
          mesh.current.position.x < x1 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y1 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z1 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x1 &&
              mesh.current.position.y <= y1 &&
              mesh.current.position.z >= z1) &&
            (
              (
                startTrack === numb[3] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[3] && tracks[1] === numb[0]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[3] && tracks[2] === numb[0]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[3] && tracks[3] === numb[0]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[3] && tracks[4] === numb[0]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[1] && startTrack === numb[3] && start6) ||
          (tracks[0] === numb[3] && tracks[1] === numb[1] && start1) ||
          (tracks[1] === numb[3] && tracks[2] === numb[1] && start2) ||
          (tracks[2] === numb[3] && tracks[3] === numb[1] && start3) ||
          (tracks[3] === numb[3] && tracks[4] === numb[1] && start4) ||
          (tracks[4] === numb[3] && tracks[5] === numb[1] && start5)
        ) && (
          mesh.current.position.x < x2 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y2 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z2 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x2 &&
              mesh.current.position.y <= y2 &&
              mesh.current.position.z >= z2) &&
            (
              (
                startTrack === numb[3] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[3] && tracks[1] === numb[1]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[3] && tracks[2] === numb[1]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[3] && tracks[3] === numb[1]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[3] && tracks[4] === numb[1]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[2] && startTrack === numb[3] && start6) ||
          (tracks[0] === numb[3] && tracks[1] === numb[2] && start1) ||
          (tracks[1] === numb[3] && tracks[2] === numb[2] && start2) ||
          (tracks[2] === numb[3] && tracks[3] === numb[2] && start3) ||
          (tracks[3] === numb[3] && tracks[4] === numb[2] && start4) ||
          (tracks[4] === numb[3] && tracks[5] === numb[2] && start5)
        ) && (
          mesh.current.position.x < x3 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y3 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z3 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x3 &&
              mesh.current.position.y <= y3 &&
              mesh.current.position.z >= z3) &&
            (
              (
                startTrack === numb[3] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[3] && tracks[1] === numb[2]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[3] && tracks[2] === numb[2]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[3] && tracks[3] === numb[2]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[3] && tracks[4] === numb[2]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[4] && startTrack === numb[3] && start6) ||
          (tracks[0] === numb[3] && tracks[1] === numb[4] && start1) ||
          (tracks[1] === numb[3] && tracks[2] === numb[4] && start2) ||
          (tracks[2] === numb[3] && tracks[3] === numb[4] && start3) ||
          (tracks[3] === numb[3] && tracks[4] === numb[4] && start4) ||
          (tracks[4] === numb[3] && tracks[5] === numb[4] && start5)
        ) && (
          mesh.current.position.x >= x5 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y5 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z5 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x5 &&
              mesh.current.position.y >= y5 &&
              mesh.current.position.z < z5) &&
            (
              (
                startTrack === numb[3] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[3] && tracks[1] === numb[4]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[3] && tracks[2] === numb[4]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[3] && tracks[3] === numb[4]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[3] && tracks[4] === numb[4]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[5] && startTrack === numb[3] && start6) ||
          (tracks[0] === numb[3] && tracks[1] === numb[5] && start1) ||
          (tracks[1] === numb[3] && tracks[2] === numb[5] && start2) ||
          (tracks[2] === numb[3] && tracks[3] === numb[5] && start3) ||
          (tracks[3] === numb[3] && tracks[4] === numb[5] && start4) ||
          (tracks[4] === numb[3] && tracks[5] === numb[5] && start5)
        ) && (
          mesh.current.position.x > x6 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y6 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z > z6 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x <= x6 &&
              mesh.current.position.y >= y6 &&
              mesh.current.position.z <= z6) &&
            (
              (
                startTrack === numb[3] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[3] && tracks[1] === numb[5]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[3] && tracks[2] === numb[5]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[3] && tracks[3] === numb[5]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[3] && tracks[4] === numb[5]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[6] && startTrack === numb[3] && start6) ||
          (tracks[0] === numb[3] && tracks[1] === numb[6] && start1) ||
          (tracks[1] === numb[3] && tracks[2] === numb[6] && start2) ||
          (tracks[2] === numb[3] && tracks[3] === numb[6] && start3) ||
          (tracks[3] === numb[3] && tracks[4] === numb[6] && start4) ||
          (tracks[4] === numb[3] && tracks[5] === numb[6] && start5)
        ) && (
          mesh.current.position.x > x7 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y <= y7 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z > z7 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x <= x7 &&
              mesh.current.position.y > y7 &&
              mesh.current.position.z <= z7) &&
            (
              (
                startTrack === numb[3] && (test6(false, start6))
              ),
              (
                tracks[0] === numb[3] && tracks[1] === numb[6]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[3] && tracks[2] === numb[6]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[3] && tracks[3] === numb[6]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[3] && tracks[4] === numb[6]
                && ( test4(false, start4))
              )
            )
          )
        ),

        // mesh.current.position.x = x5,
        // mesh.current.position.y = y5,
        // mesh.current.position.z = z5,
        // 1.6360000000000103 – 0.09999999999999698 – 1.6080000000000012 (2)
        //1.6360000000000103 – 0.09999999999999698 – 1.6080000000000012
        // [176, 92, 78, 60, 50, 41, 11] (7)
        // [176, 78, 41, 60, 92, 11
        //   let x1 = 2.95;
        //   let y1 = 0.1;
        //   let z1 = 1.6;

        (
          (tracks[0] === numb[0] && startTrack === numb[4] && start6) ||
          (tracks[0] === numb[4] && tracks[1] === numb[0] && start1) ||
          (tracks[1] === numb[4] && tracks[2] === numb[0] && start2) ||
          (tracks[2] === numb[4] && tracks[3] === numb[0] && start3) ||
          (tracks[3] === numb[4] && tracks[4] === numb[0] && start4) ||
          (tracks[4] === numb[4] && tracks[5] === numb[0] && start5)
        ) && (
          mesh.current.position.x < x1 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y1 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z1 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x1 &&
              mesh.current.position.y <= y1 &&
              mesh.current.position.z >= z1) &&
            (
              (
                startTrack === numb[4] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[4] && tracks[1] === numb[0]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[4] && tracks[2] === numb[0]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[4] && tracks[3] === numb[0]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[4] && tracks[4] === numb[0]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[1] && startTrack === numb[4] && start6) ||
          (tracks[0] === numb[4] && tracks[1] === numb[1] && start1) ||
          (tracks[1] === numb[4] && tracks[2] === numb[1] && start2) ||
          (tracks[2] === numb[4] && tracks[3] === numb[1] && start3) ||
          (tracks[3] === numb[4] && tracks[4] === numb[1] && start4) ||
          (tracks[4] === numb[4] && tracks[5] === numb[1] && start5)
        ) && (
          mesh.current.position.x < x2 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y2 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z2 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x2 &&
              mesh.current.position.y < y2 &&
              mesh.current.position.z >= z2) &&
            (
              (
                startTrack === numb[4] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[4] && tracks[1] === numb[1]
                && (test1(false, start1))
              ),
              (
                tracks[1] === numb[4] && tracks[2] === numb[1]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[4] && tracks[3] === numb[1]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[4] && tracks[4] === numb[1]
                && (test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[2] && startTrack === numb[4] && start6) ||
          (tracks[0] === numb[4] && tracks[1] === numb[2] && start1) ||
          (tracks[1] === numb[4] && tracks[2] === numb[2] && start2) ||
          (tracks[2] === numb[4] && tracks[3] === numb[2] && start3) ||
          (tracks[3] === numb[4] && tracks[4] === numb[2] && start4) ||
          (tracks[4] === numb[4] && tracks[5] === numb[2] && start5)
        ) && (
          mesh.current.position.x < x3 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y3 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z3 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x3 &&
              mesh.current.position.y <= y3 &&
              mesh.current.position.z >= z3) &&
            (
              (
                startTrack === numb[4] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[4] && tracks[1] === numb[2]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[4] && tracks[2] === numb[2]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[4] && tracks[3] === numb[2]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[4] && tracks[4] === numb[2]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[3] && startTrack === numb[4] && start6) ||
          (tracks[0] === numb[4] && tracks[1] === numb[3] && start1) ||
          (tracks[1] === numb[4] && tracks[2] === numb[3] && start2) ||
          (tracks[2] === numb[4] && tracks[3] === numb[3] && start3) ||
          (tracks[3] === numb[4] && tracks[4] === numb[3] && start4) ||
          (tracks[4] === numb[4] && tracks[5] === numb[3] && start5)
        ) && (
          mesh.current.position.x < x4 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y4 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z4 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x4 &&
              mesh.current.position.y <= y4 &&
              mesh.current.position.z >= z4) &&
            (
              (
                startTrack === numb[4] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[4] && tracks[1] === numb[3]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[4] && tracks[2] === numb[3]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[4] && tracks[3] === numb[3]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[4] && tracks[4] === numb[3]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[5] && startTrack === numb[4] && start6) ||
          (tracks[0] === numb[4] && tracks[1] === numb[5] && start1) ||
          (tracks[1] === numb[4] && tracks[2] === numb[5] && start2) ||
          (tracks[2] === numb[4] && tracks[3] === numb[5] && start3) ||
          (tracks[3] === numb[4] && tracks[4] === numb[5] && start4) ||
          (tracks[4] === numb[4] && tracks[5] === numb[5] && start5)
        ) && (
          mesh.current.position.x >= x6 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y6 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z6 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x6 &&
              mesh.current.position.y >= y6 &&
              mesh.current.position.z < z6) &&
            (
              (
                startTrack === numb[4] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[4] && tracks[1] === numb[5]
                && (test1(false, start1))
              ),
              (
                tracks[1] === numb[4] && tracks[2] === numb[5]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[4] && tracks[3] === numb[5]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[4] && tracks[4] === numb[5]
                && ( test4(false, start4))
              )
            )
          )
        ),

        (
          (tracks[0] === numb[6] && startTrack === numb[4] && start6) ||
          (tracks[0] === numb[4] && tracks[1] === numb[6] && start1) ||
          (tracks[1] === numb[4] && tracks[2] === numb[6] && start2) ||
          (tracks[2] === numb[4] && tracks[3] === numb[6] && start3) ||
          (tracks[3] === numb[4] && tracks[4] === numb[6] && start4) ||
          (tracks[4] === numb[4] && tracks[5] === numb[6] && start5)
        ) && (
          mesh.current.position.x >= x7 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y7 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z7 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x < x7 &&
              mesh.current.position.y >= y7 &&
              mesh.current.position.z < z7) &&
            (
              (
                startTrack === numb[4] && (test6(false))
              ),
              (
                tracks[0] === numb[4] && tracks[1] === numb[6]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[4] && tracks[2] === numb[6]
                && (test2(false, start2))
              ),
              (
                tracks[2] === numb[4] && tracks[3] === numb[6]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[4] && tracks[4] === numb[6]
                && ( test4(false, start4))
              )
            )
          )
        ),

        // mesh.current.position.x = x6,
        // mesh.current.position.y = y6,
        // mesh.current.position.z = z6,

        (
          (tracks[0] === numb[0] && startTrack === numb[5] && start6) ||
          (tracks[0] === numb[5] && tracks[1] === numb[0] && start1) ||
          (tracks[1] === numb[5] && tracks[2] === numb[0] && start2) ||
          (tracks[2] === numb[5] && tracks[3] === numb[0] && start3) ||
          (tracks[3] === numb[5] && tracks[4] === numb[0] && start4) ||
          (tracks[4] === numb[5] && tracks[5] === numb[0] && start5)
        ) && (
          mesh.current.position.x < x1 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y1 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z1 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x1 &&
              mesh.current.position.y <= y1 &&
              mesh.current.position.z >= z1) &&
            (
              (
                startTrack === numb[5] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[5] && tracks[1] === numb[0]
                && (test1(false, start1))
              ),
              (
                tracks[1] === numb[5] && tracks[2] === numb[0]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[5] && tracks[3] === numb[0]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[5] && tracks[4] === numb[0]
                && ( test4(false, start4))
              )
            )

          )
        ),

        (
          (tracks[0] === numb[1] && startTrack === numb[5] && start6) ||
          (tracks[0] === numb[5] && tracks[1] === numb[1] && start1) ||
          (tracks[1] === numb[5] && tracks[2] === numb[1] && start2) ||
          (tracks[2] === numb[5] && tracks[3] === numb[1] && start3) ||
          (tracks[3] === numb[5] && tracks[4] === numb[1] && start4) ||
          (tracks[4] === numb[5] && tracks[5] === numb[1] && start5)
        ) && (
          mesh.current.position.x < x1 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y2 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z2 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x1 &&
              mesh.current.position.y <= y1 &&
              mesh.current.position.z >= z1) &&
            (
              (
                startTrack === numb[5] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[5] && tracks[1] === numb[0]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[5] && tracks[2] === numb[0]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[5] && tracks[3] === numb[0]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[5] && tracks[4] === numb[0]
                && (test4(false, start4))
              )
            )

          )
        ),

        (
          (tracks[0] === numb[2] && startTrack === numb[5] && start6) ||
          (tracks[0] === numb[5] && tracks[1] === numb[2] && start1) ||
          (tracks[1] === numb[5] && tracks[2] === numb[2] && start2) ||
          (tracks[2] === numb[5] && tracks[3] === numb[2] && start3) ||
          (tracks[3] === numb[5] && tracks[4] === numb[2] && start4) ||
          (tracks[4] === numb[5] && tracks[5] === numb[2] && start5)
        ) && (
          mesh.current.position.x < x3 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y3 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z3 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x3 &&
              mesh.current.position.y <= y3 &&
              mesh.current.position.z >= z3) &&
            (
              (
                startTrack === numb[5] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[5] && tracks[1] === numb[2]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[5] && tracks[2] === numb[2]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[5] && tracks[3] === numb[2]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[5] && tracks[4] === numb[2]
                && ( test4(false, start4))
              )
            )

          )
        ),

        (
          (tracks[0] === numb[3] && startTrack === numb[5] && start6) ||
          (tracks[0] === numb[5] && tracks[1] === numb[3] && start1) ||
          (tracks[1] === numb[5] && tracks[2] === numb[3] && start2) ||
          (tracks[2] === numb[5] && tracks[3] === numb[3] && start3) ||
          (tracks[3] === numb[5] && tracks[4] === numb[3] && start4) ||
          (tracks[4] === numb[5] && tracks[5] === numb[3] && start5)
        ) && (
          mesh.current.position.x < x4 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y4 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z4 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x4 &&
              mesh.current.position.y <= y4 &&
              mesh.current.position.z >= z4) &&
            (
              (
                startTrack === numb[5] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[5] && tracks[1] === numb[3]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[5] && tracks[2] === numb[3]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[5] && tracks[3] === numb[3]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[5] && tracks[4] === numb[3]
                && ( test4(false, start4))
              )
            )

          )
        ),

        (
          (tracks[0] === numb[4] && startTrack === numb[5] && start6) ||
          (tracks[0] === numb[5] && tracks[1] === numb[4] && start1) ||
          (tracks[1] === numb[5] && tracks[2] === numb[4] && start2) ||
          (tracks[2] === numb[5] && tracks[3] === numb[4] && start3) ||
          (tracks[3] === numb[5] && tracks[4] === numb[4] && start4) ||
          (tracks[4] === numb[5] && tracks[5] === numb[4] && start5)
        ) && (
          mesh.current.position.x < x5 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y5 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z5 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x5 &&
              mesh.current.position.y <= y5 &&
              mesh.current.position.z >= z5) &&
            (
              (
                startTrack === numb[5] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[5] && tracks[1] === numb[4]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[5] && tracks[2] === numb[4]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[5] && tracks[3] === numb[4]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[5] && tracks[4] === numb[4]
                && ( test4(false, start4))
              )
            )

          )
        ),

        (
          (tracks[0] === numb[6] && startTrack === numb[5] && start6) ||
          (tracks[0] === numb[5] && tracks[1] === numb[6] && start1) ||
          (tracks[1] === numb[5] && tracks[2] === numb[6] && start2) ||
          (tracks[2] === numb[5] && tracks[3] === numb[6] && start3) ||
          (tracks[3] === numb[5] && tracks[4] === numb[6] && start4) ||
          (tracks[4] === numb[5] && tracks[5] === numb[6] && start5)
        ) && (
          mesh.current.position.x >= x7 &&
          (mesh.current.position.x -= 0.023),
          mesh.current.position.y < y7 &&
          (mesh.current.position.y += 0.006),
          mesh.current.position.z >= z7 &&
          (mesh.current.position.z -= 0.012),
          (
            (mesh.current.position.x >= x7 &&
              mesh.current.position.y <= y7 &&
              mesh.current.position.z >= z7) &&
            (
              (
                startTrack === numb[5] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[5] && tracks[1] === numb[6]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[5] && tracks[2] === numb[6]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[5] && tracks[3] === numb[6]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[5] && tracks[4] === numb[6]
                && ( test4(false, start4))
              )
            )

          )
        ),

        // mesh.current.position.x = x7,
        // mesh.current.position.y = y7,
        // mesh.current.position.z = z7,

        (
          (tracks[0] === numb[0] && startTrack === numb[6] && start6) ||
          (tracks[0] === numb[6] && tracks[1] === numb[0] && start1) ||
          (tracks[1] === numb[6] && tracks[2] === numb[0] && start2) ||
          (tracks[2] === numb[6] && tracks[3] === numb[0] && start3) ||
          (tracks[3] === numb[6] && tracks[4] === numb[0] && start4) ||
          (tracks[4] === numb[6] && tracks[5] === numb[0] && start5)
        ) && (
          mesh.current.position.x < x1 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y1 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z1 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x1 &&
              mesh.current.position.y <= y1 &&
              mesh.current.position.z >= z1) &&
            (
              (
                startTrack === numb[6] && (test6(false, start6))
              ),
              (
                tracks[0] === numb[6] && tracks[1] === numb[0]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[6] && tracks[2] === numb[0]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[6] && tracks[3] === numb[0]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[6] && tracks[4] === numb[0]
                && (test4(false, start4))
              )
            )

          )
        ),

        (
          (tracks[0] === numb[1] && startTrack === numb[6] && start6) ||
          (tracks[0] === numb[6] && tracks[1] === numb[1] && start1) ||
          (tracks[1] === numb[6] && tracks[2] === numb[1] && start2) ||
          (tracks[2] === numb[6] && tracks[3] === numb[1] && start3) ||
          (tracks[3] === numb[6] && tracks[4] === numb[1] && start4) ||
          (tracks[4] === numb[6] && tracks[5] === numb[1] && start5)
        ) && (
          mesh.current.position.x < x2 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y2 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z2 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x2 &&
              mesh.current.position.y <= y2 &&
              mesh.current.position.z >= z2) &&
            (
              (
                startTrack === numb[6] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[6] && tracks[1] === numb[1]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[6] && tracks[2] === numb[1]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[6] && tracks[3] === numb[1]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[6] && tracks[4] === numb[1]
                && ( test4(false, start4))
              )
            )

          )
        ),

        (
          (tracks[0] === numb[2] && startTrack === numb[6] && start6) ||
          (tracks[0] === numb[6] && tracks[1] === numb[2] && start1) ||
          (tracks[1] === numb[6] && tracks[2] === numb[2] && start2) ||
          (tracks[2] === numb[6] && tracks[3] === numb[2] && start3) ||
          (tracks[3] === numb[6] && tracks[4] === numb[2] && start4) ||
          (tracks[4] === numb[6] && tracks[5] === numb[2] && start5)
        ) && (
          mesh.current.position.x < x3 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y3 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z3 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x3 &&
              mesh.current.position.y <= y3 &&
              mesh.current.position.z >= z3) &&
            (
              (
                startTrack === numb[6] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[6] && tracks[1] === numb[2]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[6] && tracks[2] === numb[2]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[6] && tracks[3] === numb[2]
                &&  (test3(false, start3))
              ),
              (
                tracks[3] === numb[6] && tracks[4] === numb[2]
                && ( test4(false, start4))
              )
            )

          )
        ),

        (
          (tracks[0] === numb[3] && startTrack === numb[6] && start6) ||
          (tracks[0] === numb[6] && tracks[1] === numb[3] && start1) ||
          (tracks[1] === numb[6] && tracks[2] === numb[3] && start2) ||
          (tracks[2] === numb[6] && tracks[3] === numb[3] && start3) ||
          (tracks[3] === numb[6] && tracks[4] === numb[3] && start4) ||
          (tracks[4] === numb[6] && tracks[5] === numb[3] && start5)
        ) && (
          mesh.current.position.x < x4 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y4 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z4 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x4 &&
              mesh.current.position.y <= y4 &&
              mesh.current.position.z >= z4) &&
            (
              (
                startTrack === numb[6] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[6] && tracks[1] === numb[3]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[6] && tracks[2] === numb[3]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[6] && tracks[3] === numb[3]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[6] && tracks[4] === numb[3]
                && ( test4(false, start4))
              )
            )

          )
        ),
        

        (
          (tracks[0] === numb[4] && startTrack === numb[6] && start6) ||
          (tracks[0] === numb[6] && tracks[1] === numb[4] && start1) ||
          (tracks[1] === numb[6] && tracks[2] === numb[4] && start2) ||
          (tracks[2] === numb[6] && tracks[3] === numb[4] && start3) ||
          (tracks[3] === numb[6] && tracks[4] === numb[4] && start4) ||
          (tracks[4] === numb[6] && tracks[5] === numb[4] && start5)
        ) && (
          mesh.current.position.x < x5 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y5 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z5 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x5 &&
              mesh.current.position.y <= y5 &&
              mesh.current.position.z >= z5) &&
            (
              (
                startTrack === numb[6] && (test6(false, start6))
              ),
              (
                tracks[0] === numb[6] && tracks[1] === numb[4]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[6] && tracks[2] === numb[4]
                && ( test2(false, start2))
              ),
              (
                tracks[2] === numb[6] && tracks[3] === numb[4]
                && ( test3(false, start3))
              ),
              (
                tracks[3] === numb[6] && tracks[4] === numb[4]
                && ( test4(false, start4))
              )
            )

          )
        ),

        (
          (tracks[0] === numb[5] && startTrack === numb[6] && start6) ||
          (tracks[0] === numb[6] && tracks[1] === numb[5] && start1) ||
          (tracks[1] === numb[6] && tracks[2] === numb[5] && start2) ||
          (tracks[2] === numb[6] && tracks[3] === numb[5] && start3) ||
          (tracks[3] === numb[6] && tracks[4] === numb[5] && start4) ||
          (tracks[4] === numb[6] && tracks[5] === numb[5] && start5)
        ) && (
          mesh.current.position.x < x6 &&
          (mesh.current.position.x += 0.023),
          mesh.current.position.y > y6 &&
          (mesh.current.position.y -= 0.006),
          mesh.current.position.z < z6 &&
          (mesh.current.position.z += 0.012),
          (
            (mesh.current.position.x >= x6 &&
              mesh.current.position.y <= y6 &&
              mesh.current.position.z >= z6) &&
            (
              (
                startTrack === numb[6] && ( test6(false, start6))
              ),
              (
                tracks[0] === numb[6] && tracks[1] === numb[5]
                && ( test1(false, start1))
              ),
              (
                tracks[1] === numb[6] && tracks[2] === numb[5]
                && (test2(false, start2))
              ),
              (
                tracks[2] === numb[6] && tracks[3] === numb[5]
                &&  (test3(false, start3))
              ),
              (
                tracks[3] === numb[6] && tracks[4] === numb[5]
                && (test4(false, start4))
              )
            )

          )
        )
    )

  )


  return (
    <mesh
      ref={mesh}
      userData={{ test: "hello" }}
      position={position}
      rotation={rotation}
      castShadow
    >
      <cylinderGeometry attach="geometry" args={args} />
      <meshStandardMaterial
        attach="material"
        color={color}
        roughness={0.1}
        metalness={0.1}
      />
      <Html scaleFactor={10}>
        <div className={`content content${clas}`}>
          {number === startTrack
            ? `Head: ${number}`
            : clas <= 7
            ? `Track Number:  ${number}` 
            : `Read/Write Head`
          }
        </div>
        <div className={`border border${clas}`}></div>
      </Html>
    </mesh>
  );
}
export function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-10, -10, 5]}
      lookAt={[10, 0, 3]}
      penumbra={1}
    />
  );
}

export function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[1, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
    />
  );
}
export function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={40}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, 3]}
      rotation={[0, 0, 0]}
    />
  );
}