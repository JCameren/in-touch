import sendLocalRequest from '../functions/sendLocalRequest'

const BASE_URL = "/api/users";

export const signUp = async (userData) => {
    return sendLocalRequest(BASE_URL, 'POST', userData)
  };
  
export const login = async (userData) => {
    return sendLocalRequest(`${BASE_URL}/login`, 'POST', userData)
  }

export const searchQueriedUsers = async (query) => {
  return sendLocalRequest(`${BASE_URL}/search/${query}`)
} 

export const getUserProfile = async (userId) => {
  return sendLocalRequest(`${BASE_URL}/user/${userId}`)
}