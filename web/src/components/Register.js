import React, {useState, useRef, useEffect} from 'react';
import AuthService from "../Services/AuthService";
import Message from '../components/Message'

const Register = props =>{
    const [user, setUser] = useState({username: "", password : ""})
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(()=>{
      return ()=>{
          clearTimeout(timerID)
      }
    },[])

    const onChange = e => {
        setUser({...user,[e.target.name] : e.target.value})
    };

    const resetForm = () =>{
        setUser({username : '', password : ''})
    };

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.register(user).then(data=>{
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/login');
                }, 2000)
            }
        })
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <h3>Please Register </h3>
                <label htmlFor={"username"} className={"sr-only"}>Username: </label>
                <input type={"text"}
                       name={"username"}
                       onChange={onChange}
                       className={"form-control"}
                       placeholder={"Enter Username"}/>
                <label htmlFor={"email"} className={"sr-only"}>Email: </label>
                <input type={"email"}
                       name={"email"}
                       onChange={onChange}
                       className={"form-control"}
                       placeholder={"Enter email"}/>
                <label htmlFor={"password"} className={"sr-only"}>Password: </label>
                <input type={"password"}
                       name={"password"}
                       onChange={onChange}
                       className={"form-control"}
                       placeholder={"Enter Password"}/>

                <button className={"btn btn-lg btn-primary btn-block"}
                        type={"submit"}
                >Register
                </button>
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    )

};

export default Register;
