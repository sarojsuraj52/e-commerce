import classes from "./Login.module.css";
import React,{ useState,useRef,useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "./Store/auth-context";

const Login = () => {
    const [isLogin,setIsLogin] = useState(true)
    const emailRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()
    const authctx = useContext(AuthContext)


    const submitHandler = async(event)=>{
        event.preventDefault()
        const enteredEmail = emailRef.current.value
        const enteredPassword = passwordRef.current.value
        
        try{
        let url
        if(isLogin){
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDi9GB4fBAmMrj71I5BfDmOb7YC2ca9RH0"
        }
        else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDi9GB4fBAmMrj71I5BfDmOb7YC2ca9RH0'
        }

            const response = await fetch(url,{
                method:'POST',
                body:JSON.stringify({
                    email:enteredEmail,
                    password:enteredPassword,
                    returnSecureToken: true,
                }),
                headers:{
                "Content-Type": "application/json",
                }
            })

            const data = await response.json()
            if(response.ok){
                if(isLogin){
                    authctx.login(data.idToken,enteredEmail)
                }
                alert(isLogin?'Login Successful':'Signup Successful')
                setIsLogin(true)
                if(isLogin){
                    history.replace('/products')
                }
                emailRef.current.value=''
                passwordRef.current.value=''
            }
            else{
                let errorMessage = "Something went Wrong"
                if(data && data.error && data.error.message){
                    errorMessage = data.error.message
                }
                throw new Error(data.error.message || errorMessage)
            }
        }
        catch(err){
            alert(err.message)
        }
    }

    const switchAuthModeHandler = ()=>{
        setIsLogin(prevState=> !prevState)
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <div>
            <h3>{isLogin ?'LOGIN':'SIGNUP'}</h3>
                <label htmlFor="uname">Email</label>
                <input type='email' name='uname' id="uname" ref={emailRef}  />
                <label htmlFor="password">Password</label>
                <input name='password' id="password" ref={passwordRef} />
                <button>{isLogin?'Login':'Create Account'}</button>
                <button type="button" onClick={switchAuthModeHandler} className={classes.switchBtn}>{isLogin?'Create new account':'Login with existing account'}</button>
        </div>
    </form>
};

export default React.memo(Login);
