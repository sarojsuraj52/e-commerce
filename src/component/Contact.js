import React,{useState} from "react";
import classes from "./Contact.module.css";
import contactImage from '../assets/contact.jpg'

function Contact() {
    const [input, setInput] = useState({
        name:"",
        email:"",
        phone:""
    });

    const changeHandler = (event)=>{
        const {name,value} = event.target;
        setInput(prevInput =>{
            return{
            ...prevInput,
            [name]:value}
        })
    }
    const submitHandler = async(event)=>{
        event.preventDefault();
        const formData = {
            name:input.name,
            email:input.email,
            phone:input.phone
        }
        const response = await fetch('https://e-commerce-c0ab2-default-rtdb.firebaseio.com/e-commerce.json',{
            method: 'POST',
            body: JSON.stringify(formData),
            headers:{
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)
        setInput({
            name:'',
            email:'',
            phone:''
        })
    }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["form-container"]}>
          <h2>Contact Us</h2>
          <img src={contactImage} alt='Contact' width='300px' />
        <div>
          <label htmlFor="name">Name</label>
          <input name='name' type="text" id="name" onChange={changeHandler}  value={input.name}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input name='email' type="email" id="email"  onChange={changeHandler} value={input.email} />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input name='phone' type="number" id="phone"  onChange={changeHandler} value={input.phone} />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default React.memo(Contact);
