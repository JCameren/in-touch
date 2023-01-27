import { userActions } from "./userSlice";
import * as userAPI from "../../utils/api/usersAPI";
import { getUser } from "../../utils/services/userService";
import { uiActions } from "../ui/uiSlice";

export const signUpUser = (userData) => {
  return async (dispatch) => {
    const signUp = async () => {
      const token = await userAPI.signUp(userData);
      localStorage.setItem("token", token);
      return getUser();
    };

    try {
      dispatch(uiActions.nowLoading());
      const user = await signUp();
      dispatch(userActions.signUp(user));
      dispatch(uiActions.stoppedLoading());
    } catch (err) {
      dispatch(uiActions.stoppedLoading());
      dispatch(
        uiActions.showNotification({
          message: "Sign up failed.",
        })
      );
      throw new Error("Sign up failed.");
    }
  };
};

export const logInUser = (userData) => {
  return async (dispatch) => {
    const logIn = async () => {
      const token = await userAPI.login(userData);
      localStorage.setItem("token", token);
      return getUser();
    };
    try {
      dispatch(uiActions.nowLoading());
      const user = await logIn();
      dispatch(userActions.logIn(user));
      dispatch(uiActions.stoppedLoading());
    } catch (err) {
      dispatch(uiActions.stoppedLoading());
      dispatch(
        uiActions.showNotification({
          message: " Invalid username or password. Try again.",
        })
      );
      throw new Error("Login in failed.");
    }
  };
};




export const searchQueriedUsers = (query) => {
  return async (dispatch) => {
    const searchForUsers = async () => {
      return await userAPI.searchQueriedUsers(query)
    }
    try {
      dispatch(uiActions.nowLoading())
      const users = await searchForUsers()
      dispatch(uiActions.queriedUsersResponse(users))
      dispatch(uiActions.stoppedLoading())
    } catch (err) {
      dispatch(uiActions.stoppedLoading())
      dispatch(uiActions.showNotification({
        message: "An error occured making this request."
      }))
      throw new Error("Failed to query for users.")
    }
  }
}


export const getSpecificUserProfile = (userId) => {
  return async (dispatch) => {
    const getProfile = async () => {
      return await userAPI.getUserProfile(userId)
    }
    try {
      dispatch(uiActions.nowLoading())
      const profile = await getProfile()
      dispatch(uiActions.getUserProfile(profile))
      dispatch(uiActions.stoppedLoading())
    } catch (err) {
      dispatch(uiActions.stoppedLoading())
      throw new Error("Could not load profile for requested user")
    }
  }
}