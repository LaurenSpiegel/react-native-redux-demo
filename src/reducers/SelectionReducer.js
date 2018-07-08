// can't return undefined from a reducer. 
// so if nothing ever selected yet, return null as our default reducer state
export default (state = null, action) => {
    console.log("called selection reducer!! action:", action)
    switch(action.type) {
        case 'select_library':
            return action.payload;
        default:
            // if reducer called with an action it doesn't care about,
            // just return the state this reducer returned last time it was ran
            return state;
    }
}