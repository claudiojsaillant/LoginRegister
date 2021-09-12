import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

// Decodes token and give back the payload
export const getSession = () => {
  const jwt = Cookies.get("userToken");
  let session;
  try {
    if (jwt) {
      session = jwt_decode(jwt);
    }
  } catch (error) {
    console.log(error);
  }
  return session;
};

// Removing cookie to LogOut the user;
export const logOut = () => {
  Cookies.remove("userToken");
  window.location.replace("/LogIn");
};