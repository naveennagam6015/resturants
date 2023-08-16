const variablename = {
    table_number: 5
}
export default function TableReducer(state = variablename, action) {
    const { type, param2 } = action;
    switch (type) {
        case "SETTABLENUMBER":
            return { ...state,table_number:param2 }
        case "RESETTABLENUMBER":
            return { ...state,table_number:null }
        default:
            return state
    }
}
