import toAdobeData from './adobeData/toAdobeData.js'
import { UserActionTypes } from './user.types.js'

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            if (action.payload) {
                const { email } = action.payload
                window.digitalData.user[0].profile[0] = toAdobeData(email)

            } else {
                window.digitalData.user[1].profile[0] = toAdobeData(null)
            }

            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;