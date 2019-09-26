import { SET_PLANT } from './plant-actions'

const initialState = {
    selectedPlant: ''
}

function plantReducer(plants = initialState, action) {
    switch (action.type) {
        case SET_PLANT:
            return ({
                ...plants,
                selectedPlant: action.id
            })
        default:
            return plants
    }
}

export default plantReducer