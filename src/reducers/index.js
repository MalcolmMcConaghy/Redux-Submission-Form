import { SUBMIT_PLAYER_INFO, SUBMIT_OVERWATCH_INFO } from '../actions';

const initialState = {
  playerInfo: {
    name: '',
    surname: '',
    age: '',
    location: ''
  },
  overwatchInfo: {
    battletag: '',
    mainTank: '',
    offTank: '',
    peakSR: ''
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_PLAYER_INFO:
      return Object.assign({}, state, {
        playerInfo: {
          ...action.payload 
        }
      })
    case SUBMIT_OVERWATCH_INFO:
      return Object.assign({}, state, {
        overwatchInfo: {
          ...action.payload 
        }
      })
    default:
      return state
  }
}

export default rootReducer;