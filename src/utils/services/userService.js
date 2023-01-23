export const getToken = () => {
    // getItem returns null if key does not exist
    const token = localStorage.getItem("token");
    if (!token) return null;
    const payload = JSON.parse(atob(token.split(".")[1]));
    // A JWT exp prop is expressed in seconds NOT ms
    if (payload.exp * 1000 < Date.now()) {
      // Token has expired
      localStorage.removeItem("token");
      return null;
    }
    return token;
  };
  
  export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
  }