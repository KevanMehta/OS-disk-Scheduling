import React from 'react'
import "../CSS/RadarChart.css";
import { useStateValue } from '../StateProvider';

const Summary = () => {
        const [{ salgorithm }] = useStateValue();

        return (
                <div className="radar-chart" id="summary">
                <div className="all-summary">
                                { salgorithm ==="FCFS" && <div className="summary">
                                        <div className="title-div">
                                        <h2 className="title">
                                                First Come FIrst Serve (FCFS)
                                        </h2>
                                        </div>
                                        <div className="overview overview1">
                                        <div className="o">
                                        <label>Overview</label>
                                        <span className="no"> :</span></div>
                                                        <p>FCFS is the simplest of all the Disk Scheduling Algorithms. In FCFS, the requests are addressed in the order they arrive in the disk queue.</p>
                                        </div>
                                        <div className="overview over">
                                        <div className="advantage">
                                                <label>Advantanges</label>
                                                        <ol>
                                                                <li>It has a very simple logic and executes the process requests one by one in the sequence they arrive</li>
                                                                <li>It is very simple and easy to understand and implement</li>
                                                                <li>Every request gets a fair chance</li>
                                                                <li>No indefinite postponement</li>
                                                        </ol>
                                        </div>
                                        <div className="disadvantage">
                                                <label>Disadvantages</label>
                                                        <ol>
                                                                <li>It is implemented on small systems only where input-output efficiency is not of utmost importance</li>
                                                                <li>Does not try to optimize seek time</li>
                                                                <li>May not provide the best possible service</li>
                                                                <li>The throughput of FCFS is not very efficient</li>
                                                        </ol>
                                        </div>
                                        </div>
                                </div>}
                                { salgorithm ==="LIFO" && <div className="summary">
                                        <div className="title-div">
                                        <h2 className="title">
                                                Last In First Out (LIFO)
                                        </h2>
                                        </div>
                                        <div className="overview overview1">
                                        <div className="o">
                                        <label>Overview</label>
                                        <span className="no"> :</span></div>
                                                        <p>In LIFO (Last In, First Out) algorithm, newest jobs are serviced before the existing ones i.e. in order of requests that get serviced the job that is newest or last entered is serviced first and then the rest in the same order.</p>
                                        </div>
                                        <div className="overview over">
                                        <div className="advantage">
                                                <label>Advantanges</label>
                                                        <ol>
                                                                <li>Every single request gets a fair chance</li>
                                                                <li>Maximizes locality and resource utilization</li>
                                                                <li>It is very simple and easy to understand and implement</li>
                                                        </ol>
                                        </div>
                                        <div className="disadvantage">
                                                <label>Disadvantages</label>
                                                        <ol>
                                                                <li>Does not try to optimize seek time</li>
                                                                <li>Can seem a little unfair to other requests and if new requests keep coming in, it cause starvation to the old and existing ones</li>
                                                                <li>May not provide the best possible service</li>
                                                                <li>The throughput of LIFO is not very efficient</li>
                                                        </ol>
                                        </div>
                                        </div>
                                </div>}
                                { salgorithm ==="SSTF" && <div className="summary">
                                        <div className="title-div">
                                        <h2 className="title">
                                                Shortest Seek Time First (SSTF)
                                        </h2>
                                        </div>
                                        <div className="overview overview1">
                                        <div className="o">
                                        <label>Overview</label>
                                        <span className="no"> :</span></div>
                                                        <p>In SSTF (Shortest Seek Time First), requests having shortest seek time are executed first. So, the seek time of every request is calculated in advance in the queue and then they are scheduled according to their calculated seek time. As a result, the request near the disk arm will get executed first.</p>
                                        </div>
                                        <div className="overview over">
                                        <div className="advantage">
                                                <label>Advantanges</label>
                                                        <ol>
                                                                <li>Every single request gets a fair chance</li>
                                                                <li>It allows the head to move to the closest track in the service queue</li>
                                                                <li>Less average waiting time and response time in SSTF</li>
                                                                <li>No indefinite postponement</li>
                                                        </ol>
                                        </div>
                                        <div className="disadvantage">
                                                <label>Disadvantages</label>
                                                        <ol>
                                                                <li>It may cause starvation for some requests</li>
                                                                <li>Switching direction on the frequent basis slows the working of algorithm</li>
                                                                <li>In SSTF there is an overhead of finding out the closest request</li>
                                                                <li>It is not the most optimal algorithm</li>
                                                        </ol>
                                        </div>
                                        </div>
                                </div>}
                                { salgorithm ==="SCAN" && <div className="summary">
                                        <div className="title-div">
                                        <h2 className="title">
                                                Elevator Algorithm (SCAN)
                                        </h2>
                                        </div>
                                        <div className="overview overview1">
                                        <div className="o">
                                        <label>Overview</label>
                                        <span className="no"> :</span></div>
                                                        <p>In SCAN algorithm the disk arm moves into a particular direction and services the requests coming in its path and after reaching the end of disk, it reverses its direction and again services the request arriving in its path. So, this algorithm works as an elevator and hence also known as elevator algorithm.</p>
                                        </div>
                                        <div className="overview over">
                                        <div className="advantage">
                                                <label>Advantanges</label>
                                                        <ol>
                                                                <li>It is simple and easy to understand and implement</li>
                                                                <li>Starvation is avoided in SCAN algorithm</li>
                                                                <li>High throughput</li>
                                                                <li>Low variance of response time</li>
                                                        </ol>
                                        </div>
                                        <div className="disadvantage">
                                                <label>Disadvantages</label>
                                                        <ol>
                                                                <li>Long waiting time for requests for locations just visited by disk arm</li>
                                                                <li>Switching direction on the frequent basis slows the working of algorithm</li>
                                                                <li>the head moves till the end of the disk despite the absence of requests to be serviced</li>
                                                                <li>It is not the most optimal algorithm</li>
                                                        </ol>
                                        </div>
                                        </div>
                                </div>}
                                { salgorithm ==="CSCAN" && <div className="summary">
                                        <div className="title-div">
                                        <h2 className="title">
                                                Circular Elevator Algorithm (CSCAN)
                                        </h2>
                                        </div>
                                        <div className="overview overview1">
                                        <div className="o">
                                        <label>Overview</label>
                                        <span className="no"> :</span></div>
                                                        <p>In SCAN algorithm, the disk arm again scans the path that has been scanned, after reversing its direction. So, it may be possible that too many requests are waiting at the other end or there may be zero or few requests pending at the scanned area.CSCAN algorithm solves this problem.</p>
                                        </div>
                                        <div className="overview over">
                                        <div className="advantage">
                                                <label>Advantanges</label>
                                                        <ol>
                                                                <li>It is the successor and the improved version of the SCAN scheduling Algorithm</li>
                                                                <li>Provides more uniform wait time compared to SCAN</li>
                                                                <li>Better response time is provided</li>
                                                        </ol>
                                        </div>
                                        <div className="disadvantage">
                                                <label>Disadvantages</label>
                                                        <ol>
                                                                <li>Switching direction on the frequent basis slows the working of algorithm</li>
                                                                <li>More seek movements are caused in C-SCAN compared to SCAN Algorithm</li>
                                                                <li>It is not the most optimal algorithm</li>
                                                        </ol>
                                        </div>
                                        </div>
                                </div>}
                                { salgorithm ==="LOOK" && <div className="summary">
                                        <div className="title-div">
                                        <h2 className="title">
                                                Advance Elevator Algorithm (LOOK)
                                        </h2>
                                        </div>
                                        <div className="overview overview1">
                                        <div className="o">
                                        <label>Overview</label>
                                        <span className="no"> :</span></div>
                                                        <p>It is similar to the SCAN except for the difference that the disk arm in spite of going to the end of the disk goes only to the last request to be serviced in front of the head and then reverses its direction from there only. Thus it prevents the extra delay which occurred due to unnecessary traversal to the end of the disk.</p>
                                        </div>
                                        <div className="overview over">
                                        <div className="advantage">
                                                <label>Advantanges</label>
                                                        <ol>
                                                                <li>If there are no requests left to be services the Head will not move to the end of the disk unlike SCAN algorithm</li>
                                                                <li>Every single request gets a fair chance</li>
                                                                <li>It allows the head to move to the closest track in the service queue</li>
                                                                <li>Low variance is provided in waiting time and response time</li>
                                                        </ol>
                                        </div>
                                        <div className="disadvantage">
                                                <label>Disadvantages</label>
                                                        <ol>
                                                                <li>Switching direction on the frequent basis slows the working of algorithm</li>
                                                                <li>Overhead of finding the end requests is present</li>
                                                                <li>It is not the most optimal algorithm</li>
                                                        </ol>
                                        </div>
                                        </div>
                                </div>}
                                { salgorithm ==="CLOOK" && <div className="summary">
                                        <div className="title-div">
                                        <h2 className="title">
                                                Advance CIrcular Elevator Algorithm (C-LOOK)
                                        </h2>
                                        </div>
                                        <div className="overview overview1">
                                        <div className="o">
                                        <label>Overview</label>
                                        <span className="no"> :</span></div>
                                                        <p>CLOOK is similar to CSCAN disk scheduling algorithm. In CLOOK, the disk arm in spite of going to the end goes only to the last request to be serviced in front of the head and then from there goes to the other end’s last request. Thus, it also prevents the extra delay which occurred due to unnecessary traversal to the end of the disk.</p>
                                        </div>
                                        <div className="overview over">
                                        <div className="advantage">
                                                <label>Advantanges</label>
                                                        <ol>
                                                                <li>Every single request gets a fair chance</li>
                                                                <li>Cylinders which are just visited by Head have to wait for long time</li>
                                                                <li>It allows the head to move to the closest track in the service queue</li>
                                                                <li>It provides better performance when compared to LOOK Algorithm</li>
                                                        </ol>
                                        </div>
                                        <div className="disadvantage">
                                                <label>Disadvantages</label>
                                                        <ol>
                                                                <li>It may cause starvation for some requests</li>
                                                                <li>Switching direction on the frequent basis slows the working of algorithm</li>
                                                                <li>An overhead of finding the end requests is present</li>
                                                        </ol>
                                        </div>
                                        </div>
                                </div>}
                                
                        </div> 
                </div> 
        )
}

export default Summary
