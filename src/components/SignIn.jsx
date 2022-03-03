import { useState } from "react"

export default function SingIn(){
    const [login, setLogin] = useState({
        firstName: "",
        lastName: "",
        email: "",
        pasword: "",
        confirmed :"",
        newsletter: false
    })
    console.log(login)
    function handleChange(event){
     
        const {name, value, checked, type} = event.target
        setLogin(prevLog => {return{
            ...prevLog,
[name] : type=== "checkbox" ? checked : value
        }
    })}
    function handleSubmit(event){
        event.preventDefault()
        if(login.pasword === login.confirmed && login.pasword != ""){
            console.log("succesfully signed up")
        }else{
            console.log("paswords don't match")
            return
        }
        if(login.newsletter){
            console.log("thanks for signing up for the newsletter")
        }
    }
    return(
        <div>
            <form className="loginForm" onSubmit={handleSubmit}>
                <input 
                type="text"
                name="firstName"
                value={login.firstName}
                onChange= {handleChange}
                placeholder = "first name"
                 />
                 
                 <input 
                 type="text"
                 name="lastName"
                 value={login.lastName}
                 onChange= {handleChange}
                 placeholder = "last name"
                  />
                 <input 
                 type="email"
                 name="email"
                 value={login.email}
                 onChange= {handleChange}
                 placeholder = "email"
                  />
                    <input 
                 type="text"
                 name="pasword"
                 value={login.pasword}
                 onChange= {handleChange}
                 placeholder = "password"
                  />
                    <input 
                 type="text"
                 name="confirmed"
                 value={login.confirmed}
                 onChange= {handleChange}
                 placeholder = "confirm password"
                  />
                  <label htmlFor="newsLetter">
                      Would you like to receive the newsletter?
                      </label>
                  <input 
                  type="checkbox" 
                  name="newsletter" 
                  checked = {login.newsletter}
                  id="newsLetter"  
                  onChange= {handleChange} 
                  />
                  <button>Login</button>
            </form>
        </div>
    )
}