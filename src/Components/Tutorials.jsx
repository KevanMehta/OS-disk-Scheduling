import React, { useState } from 'react'
import '../CSS/Tutorials.css'
import { ReactComponent as R } from "../disk.svg";
import { Button } from '@material-ui/core';
import { Avatar } from '@material-ui/core'
import { useStateValue } from '../StateProvider';
import video from '../media/1A.mov'
import video2 from '../media/4A.mov'
import video3 from '../media/3A.mov'
import video4 from '../media/5A.mov'

const Tutorials = () => {
        let [{}, dispatch] = useStateValue()
        const [counter,setCounter] = useState(1)
        const [next,setNext] = useState("Next")

        const handleSkip = () => {
                setCounter(11)
                dispatch({
                        type:"SET_COUNT",
                        count: 11
                })
        }

        const handleNext = () => {
                setCounter(counter + 1)
                if(counter < 9){
                        setNext("Next")
                }
                else {
                        setNext("Finish")
                }
                dispatch({
                        type:"SET_COUNT",
                        count: counter
                })
        }
        
        const handlePrev = () => {
                if(counter > 1 && counter < 10){
                        setNext("Next")
                        setCounter(counter - 1)
                        dispatch({
                                type:"SET_COUNT",
                                count: counter
                        })
                }
                else if(counter === 10){
                        setCounter(9)
                        setNext("Next")
                        dispatch({
                                type:"SET_COUNT",
                                count: 9
                        })
                        
                }
        }


        return (
                <div className="tutorials">
                        { counter === 1 && <div className="tutorial1">
                                <h1>Welcome to Disk Scheduling Visualizer</h1>
                                <p className="start-div"> In this tutorial you'll learn about how to use this disk scheduling visualizer and also,how it works in Hard Disk Drive and it will also will walk you through all of the features of this GUI web application. </p>
                                <div className="icon-div logo-div">
                                <R className="icon1"></R>
                                </div>
                                <p className="start-div">If you want to dive right in, feel free to press the "Skip" button below. Otherwise, press "Next"!</p>
                        </div>}
                        {counter === 2 && <div className="tutorial2">
                                <h1>Why do we have Disk Scheduling Algorithms?</h1>
                                <p>As you may already know, our smartphones, laptops and desktop comes with built-in storage with certain capacity in them. In laptops and desktops, it comes in two types, Hard Disk Drive(HDD) and Solid State Drive(SSD). </p>
                                <p>We won't be covering SSD in this project.</p>
                                <div className="icon-div">
                                        <img className="icon2" src="https://www.ebuyer.com/blog/wp-content/uploads/2016/01/replace-HDD-with-SSD-feature.png" 
                                        alt=""/> 
                                </div>
                        </div>}
                        {counter === 3 && <div className="tutorial3">
                                <h1>Why do we have Disk Scheduling Algorithms?</h1>
                                <p>In HDD, there are different components working together as shown in given figure. Here, the two main components are Platter and Read/Write Head.The platters are further divided into tracks and each of them is given a unique value(numbers in this case) and the files are stored in a buffer manner on the tracks.</p>
                                <div className="icon-div">
                                        <img className="icon2" src="https://www.remosoftware.com/images/glossary/inside-harddrive.gif" 
                                        alt=""/> 
                                </div>
                                <p>Whenever we save or edit a file, the R/W head first identifies all the empty tracks on platter and save files on them. Disk scheduling algorithms helps you understand how the r/w decides to move to certain tracks based on different values.</p>
                        </div>}
                        {counter === 4 && <div className="tutorial4">
                                <h1>How this visualizer helps us ?</h1>
                                <p>In this disk scheduling visualizer, we not only provide chart represenation and comprehensive summary of all the algorithms but also an unique 3D Model that gives a proper visualization of how the r/w head moves to certain track based on track with calculated seek time of every algorithm.</p>
                                <div className="icon-div">
                                        <img className="part1" src={require('../media/part1.png')} 
                                        alt="Check your internet connection"/> 
                                        <img className="part2" src={require('../media/part2.png')} 
                                        alt="Check your internet connection"/> 
                                        <img className="part3" src={require('../media/3DModel.png')} 
                                        alt="Check your internet connection"/> 
                                </div>
                        </div>}
                        {counter === 5 && <div className="tutorial5">
                                <h1>Everything you need to know about inputs</h1>
                                <p>Firstly, you can decide the range of track numbers on platter by giving the min and max value. Afterwards, you can add Starting Track(R/W head) track number and also all the track numbers ranging from 1 - 6, where the r/w head will move.</p>
                                <p>After adding all the values, you can select an algorithm and that will enable all the buttons(More about them later).</p>
                                <p><strong>If you want to save yourself from all this trouble then you can just double click the logo icon in the header.</strong></p>
                                <div className="icon-div">
                                        <video className="video" loop autoPlay muted src={video2}>
                                        </video>
                                        <video className="video1" loop autoPlay muted src={video} />
                                </div>
                                <p><strong>Note:</strong> All the numbers should be positive integers. The add button for range wont enable if you try to give a negative value or if you try to give a bigger value to min than max range.
                                </p>
                                <p><strong>Note:</strong> All the numbers should be positive integers. The add tracks button for track numbers wont enable if you try to give a negative value or if you try to give a value out of the given range.
                                </p>
                        </div>}
                        {counter === 6 && <div className="tutorial6">
                                <h1>Everything you need to know about buttons</h1>
                                <p>There are five different buttons where each of them does a certain task.</p>
                                <p><b>First Button</b> will show you the Line Chart if all the given inputs are correct.</p>
                                <p><b>Second Button</b> will show you the Line Chart & Summary of each algorithm where you can know more about them.</p>
                                <p><b>Third Button</b> will show you our 3D Model   (More about this later).</p>
                                <p><b>Fourth Button</b> will show you our 3D chart for all algorithms.</p>
                                <p><b>Fifth Button</b> will reload the page for you.</p>
                                <div className="icon-div video3d">
                                        <video className="video3" loop autoPlay muted src={video3} />
                                </div>
                        </div>}
                        {counter === 7 && <div className="tutorial7">
                                <h1>Line Chart, Summary and Seek Time</h1>
                                <p></p>
                                <p><strong>Line Chart</strong> will show you a 2D visualization of the movement of R/W Head based on given inputs and selected algorithm.</p>
                                <p><strong>Summary</strong> will show you an overview with advantageous and disadvantageous of the selected algorithm.</p>
                                <p><strong>Total Seek Time</strong> will show the total seek time with calculations based on the input values and algorithm.</p>
                                <div className="icon-div">
                                <img className="lss" src={require('../media/LSS.png')} 
                                alt="Check your internet connection"/> 
                                </div>
                        </div>}
                        {counter === 8 && <div className="tutorial8">
                                <h1>3D Model </h1>
                                <p>We made our 3D Model keeping in mind how real HDD works. It sets the input tracks in descending order and dynamically moves the R/W Head to all the tracks based on algorithms resembling real world HDD.</p>
                                <p>The side rectangle box gives you order/path that R/W Head will follow.</p>
                                <div className="icon-div model-div">
                                <img className="dmodel" src={require('../media/3DModel.png')} 
                                alt="Check your internet connection"/> 
                                </div>
                                <p><strong>Note:</strong> In model animation, the position of R/W Head depends on the position of disk as well as the screen, so it's suggested to you not to scroll your screen when the R/W Head gets to the Starting Track(Head) till the time you want to see the animation running as it can hinder the R/W to change  position and maybe restart the animation from head or stop it.
                                <br/><b>A bit of side note is you can scroll a bit while r/w head is reaching towards the head.</b></p>
                        </div>}
                        {counter === 9 && <div className="tutorial8">
                                <h1>3D Chart </h1>
                                <p>This Scatter3D Chart shows you the order/path of R/W Head for all algorithms.</p>
                                <p>You can choose to hide/show all the chart individually.</p>
                                <p>We provide you many tools to interact with the chart like changing position, orbital direction, etc.(Checkout the video given below to learn more about them)</p>
                                <br/>
                                <br/>
                                <div className="icon-div video3d">
                                        <video className="video3" loop autoPlay muted src={video4} />
                                </div>
                                <p><strong>Note:</strong>
                                You can download both scatter3d chart and 2d chart.</p>
                                <p><strong>Note:</strong>
                                Make sure to set the 3d chart back to it's initial position before downloading it.</p>
                        </div>}
                        {counter === 10 && <div className="tutorial9">
                                <h1>The End</h1>
                                <p className="end">Thats all you need to know about using this visualizer.</p>
                                <p className="end">Our team hope you have just as much fun playing around with this visualization tool as we had building it!</p>
                                <h2>Developed by:</h2>
                                <div className="namu">
                                        <Avatar className="avatar">V</Avatar>
                                        <p>Vivek Chauhan - Front End Work</p>
                                </div>
                                <div className="namu">
                                        <Avatar className="avatar">R</Avatar>
                                        <p>Raj Singwala - Algorithms and Debugging</p>
                                </div>
                                <div className="namu">
                                        <Avatar className="avatar">K</Avatar>
                                        <p>Kevan Mehta - Algorithms and Debugging</p>
                                </div>
                                <h2>Software Tools we used:</h2>
                                <p>ReactJS, CanvasJS, Drei, Firebase, MaterialUI, Lodash, ThreeJS, React-Three-Fiber, Plotly, React-Plotly </p>
                        </div>}
                        <div className="buttonss">
                                <Button variant="contained" onClick={handleSkip} className="buttonwas button01">SKIP</Button>
                                <p className="page">Page {counter} / 10</p>
                                <Button variant="contained" onClick={handlePrev} className="buttonwas button02">Prev</Button>
                                <Button variant="contained" onClick={handleNext} className="buttonwas button03">{next}</Button>
                        </div>
                </div>
        )
}

export default Tutorials
