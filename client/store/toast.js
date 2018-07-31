//ACTION
const SEND_MESSAGE = 'SHOW_MESSAGE'

//ACTION CREATOR
const sendTheMessage = message => {
  return {
    type: SEND_MESSAGE,
    message
  }
}

//THUNK
export const sendMessage = message => {
  return dispatch => {
    dispatch(sendTheMessage(message))
    setTimeout(() => dispatch(sendTheMessage('')), 2000)
  }
}

const reducer = (state = '', action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return action.message
    default:
      return state
  }
}

export default reducer
