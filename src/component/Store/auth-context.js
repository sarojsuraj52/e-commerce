import React,{useState} from "react";

const AuthContext = React.createContext({
  token: "",
  email:"",
  isLoggedIn: false,
  login: (token,email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('userToken')
    const [token,setToken]= useState(initialToken)
    const initialEmail = localStorage.getItem('userEmail')
    const [userEmail, setUserEmail] = useState(initialEmail)
    const userIsLoggedIn = !!token

    const loginHandler = (token,email)=>{
      setToken(token)
      setUserEmail(email)
      localStorage.setItem('userToken',token)
      localStorage.setItem('userEmail',email)
    }

    const logoutHandler =()=>{
      setToken(null)
      setUserEmail(null)
      localStorage.removeItem('userToken')
      localStorage.removeItem('userEmail')
    }

  const contextValue = {
    token: token,
    email:userEmail,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};


export default AuthContext