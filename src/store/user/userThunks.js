import { userActions } from './userSlice'
import * as userAPI from '../../utils/api/usersAPI'
import { getUser } from '../../utils/services/userService'
import { uiActions } from '../ui/uiSlice'

export const signUpUser = (userData) => {
    return async (dispatch) => {
      const signUp = async () => {
        const token = await userAPI.signUp(userData)
        localStorage.setItem("token", token);
        return getUser()
      };
  
      try {
          const user = await signUp()
          dispatch(userActions.signUp(user))
      } catch (err) {
          throw new Error('Sign up failed.')
      }
    };
  };


  
  export const logInUser = (userData) => {
    return async (dispatch) => {
        const logIn = async () => {
            const token = await userAPI.login(userData)
            localStorage.setItem("token", token);
            return getUser()
        }
        try {
            dispatch(uiActions.nowLoading())
            const user = await logIn()
            dispatch(userActions.logIn(user))
            dispatch(uiActions.stoppedLoading())
        } catch(err) {
            dispatch(uiActions.stoppedLoading())
            dispatch(uiActions.showNotification({
                message: ' Invalid username or password. Try again.'
            }))
            throw new Error('Login in failed.')
        }
    }
}