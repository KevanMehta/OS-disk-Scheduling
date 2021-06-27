export const initialState = {
        range: "",
        startTrack: "",
        ttracks:  [],
        fcf: [],
        tracks:  {},
        ftracks:  [],
        count: 1,
        showLine: true,
        salgorithm: "",
        n: "",
        showSummary: true,
        showModel: true,
        showChart: true,
        color: ["#9dc8e4", "#CDEAE5", "#9dc8e4", "#CDEAE5", "#9dc8e4", "#CDEAE5", "#9dc8e4"]
}

export default function reducer(state, action) {
        console.log(action)
        switch(action.type) {

                case 'SET_RANGE':
                        return{
                                ...state,
                                range: action.range
                        }

                case 'ADD_NUMBERS':
                        return {
                                ...state,
                                tracks: action.track,
                                ftracks: action.ftrack,
                                ttracks: action.ttrack,
                        }
                
                case 'SET_STARTTRACK':
                        return {
                                ...state,
                                startTrack: action.start
                        }

                case 'SET_TRACKS':
                        return {
                                ...state,
                                tracks: action.tracksall,
                                ftracks: action.ftracksall,
                                n: Math.abs(action.start - action.tracksall[0]) +Math.abs(action.tracksall[0] - action.tracksall[1]) + Math.abs(action.tracksall[1] - action.tracksall[2]) + Math.abs(action.tracksall[2] - action.tracksall[3])
                                + Math.abs(action.tracksall[3] - action.tracksall[4]) + Math.abs(action.tracksall[4] - action.tracksall[5])
                        }

                case 'SET_N':
                        return {
                                ...state,
                                n: action.n
                        }
                case 'SET_CHART':
                        return {
                                ...state,
                                fcf: action.fcf,
                        }
                case 'LINE':
                        return {
                                ...state,
                                showLine: action.showLine
                                
                        }
                        case 'SUMMARY':
                        return {
                                ...state,
                                showLine: action.showLine,
                                showSummary: action.showSummary

                        }
                case 'MODEL':
                        return {
                                ...state,
                                showModel: action.showModel,
                                showChart: action.showChart

                        }
                case 'SET_ALGORITHM':
                        return {
                                ...state,
                                salgorithm: action.algo

                        }
                case 'SET_COLOR':
                        return {
                                ...state,
                                color: action.color

                        }
                case 'SET_COUNT':
                        return {
                                ...state,
                                        count: action.count
                        }
                case 'ALL':
                        return {
                                ...state,
                                showModel: action.showModel,
                                showChart: action.showChart

                        }
                case "SET_ALL":
                        return {
                                ...state,
                                range: action.range,
                                startTrack: action.start,
                                tracks: action.tracksall,
                                ftracks: action.ftracksall,
                                ttracks: action.ttracksall,
                                n: Math.abs(action.tracksall[0] - action.tracksall[1]) + Math.abs(action.tracksall[1] - action.tracksall[2]) + Math.abs(action.tracksall[2] - action.tracksall[3])
                                        + Math.abs(action.tracksall[3] - action.tracksall[4]) + Math.abs(action.tracksall[4] - action.tracksall[5]),
                                salgorithm: action.algo
                        }
                
                default:
                        return state
        }
}