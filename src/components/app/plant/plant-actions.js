const SET_PLANT = 'SET_PLANT'
function setPlant(id) {
    return ({ type: SET_PLANT, id })
}

export { SET_PLANT, setPlant }