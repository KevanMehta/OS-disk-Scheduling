import { reverse } from "lodash";

function fcfs(arr) {
	var result = arr.slice();
	return result;
}
function lifo(arr) {
	var result = reverse(arr);
	return result;
}
function closestTrack(arr, track, direction) {
	var min = {
		track: -1,
		index: -1,
		dist: Number.MAX_VALUE
	}
	for (var i = 0; i < arr.length; i++) {
		var dist;
		if (direction === 0) {
			dist = Math.abs(arr[i] - track);
		} else {
			dist = direction * (arr[i] - track);
		}
		if (dist > -1 && dist < min.dist) {
			min.track = arr[i];
			min.index = i;
			min.dist = dist;
		}
	}
	return min;
}


function sstf(arr, initialTrack) {
	var result = [];
	var currentTrack = initialTrack;
	while (arr.length > 0) {
		var min = closestTrack(arr, currentTrack, 0);
		arr.splice(min.index, 1);
		result.push(min.track);
		currentTrack = min.track;
	}
	return result;
}

function scan(initialTrack, tailTrack, arr) {
	var result = [];
	var scanDirection = 1;
	if (initialTrack < tailTrack / 2) {
		scanDirection = -1;
	}
	var currentTrack = initialTrack;
	
	while (arr.length > 0) {
		var min = closestTrack(arr, currentTrack, scanDirection);
		if (min.track === -1) {
			if (scanDirection === 1) {
				if ((result.indexOf(tailTrack) === -1)) {
					result.push(tailTrack);
				}
				currentTrack = tailTrack
			} else {
				if ((result.indexOf(0) === -1)) {
					result.push(0);
				}
				currentTrack = 0
			}
			scanDirection *= -1;
		} else {
			arr.splice(min.index, 1);
			if (result.indexOf(min.track) === -1) {
				result.push(min.track);
			}
			currentTrack = min.track;
		}
	}
	if ((result.indexOf(0) === -1)) {
		result.push(0);
	}
	return result;
}

function cscan(initialTrack, tailTrack, arr) {
	var result = [];
	var scanDirection = 1;
	if (initialTrack < tailTrack / 2) {
		scanDirection = -1;
	}
	var currentTrack = initialTrack;
	while (arr.length > 0) {
		var min = closestTrack(arr, currentTrack, scanDirection);
		if (min.track === -1) {
			if (scanDirection === 1) {
				if ((result.indexOf(0) === -1)){
					result.push(0);
				}
				if (result.indexOf(tailTrack) === -1) {
					result.push(tailTrack);
				}
				currentTrack = tailTrack;
			} else {
				if (result.indexOf(tailTrack) === -1) {
					result.push(tailTrack);
				}
				if (result.indexOf(0) === -1) {
					result.push(0);
				}
				currentTrack = 0;
			}
			scanDirection *= -1;
		} else {
			arr.splice(min.index, 1);
			if (result.indexOf(min.track) === -1) {
				result.push(min.track);
			}
			currentTrack = min.track;
		}
	}
	return result;
}

function look (arr, initialTrack, tailTrack) {
	var result = [];
	var scanDirection = 1;
	if (initialTrack < tailTrack / 2) {
		scanDirection = -1;
	}
	var currentTrack = initialTrack;
	while (arr.length > 0) {
		var min = closestTrack(arr, currentTrack, scanDirection);
		if (min.track === -1) {
			scanDirection *= -1;
		} else {
			arr.splice(min.index, 1);
			result.push(min.track);
			currentTrack = min.track;
		}
	}
	return result;
	}

function clook(arr, initialTrack, tailTrack) {
	var result = [];
	var scanDirection = 1;
	if (initialTrack < tailTrack / 2) {
		scanDirection = -1;
	}
	var currentTrack = initialTrack;
	while (arr.length > 0) {
		var min = closestTrack(arr, currentTrack, scanDirection);
		if (min.track === -1) {
			if (scanDirection === 1) {
				currentTrack = 0;
			} else {
				currentTrack = tailTrack;
			}
		} else {
			arr.splice(min.index, 1);
			result.push(min.track);
			currentTrack = min.track;
		}
	}
	return result;
	}

export function selectAlgorithm(algorithm,track,startTrack){
	const track1 = track.slice()
	const track2 = track.slice()
	const track3 = track.slice()
	const track4 = track.slice()
	const track5 = track.slice()
	const track6 = track.slice()
	switch(algorithm){
		case 'FCFS':
			return fcfs(track)
		case 'LIFO':
			return lifo(track)
		case 'SSTF':
			return sstf(track, startTrack)
		case 'LOOK':
			return look(track, startTrack, track[track.length - 1]);
		case 'CLOOK':
			return clook(track, startTrack, track[track.length - 1]);
		case 'SCAN':
			return scan(startTrack, track[track.length - 1], track);
		case 'CSCAN':
			return cscan(startTrack, track[track.length - 1], track);
		case 'LALALA':
			return [
				fcfs(track),
				lifo(track1),
				sstf(track2, startTrack),
				look(track3, startTrack, track3[track3.length - 1]),
				clook(track4, startTrack, track4[track4.length - 1]),
				scan(startTrack, track5[track5.length - 1], track5),
				cscan(startTrack, track6[track6.length - 1], track6)
			]
		default:
			return 0
	}
}

