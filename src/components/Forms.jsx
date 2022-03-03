import { useState } from "react"

export default function Forms() {
    const [formData, setFormData] = useState(
        {
            firstName: "", lastName: "",
            email: "", comment: "",
            isFriendly: true,
            employment : "",
            favColor:""
        })

    console.log(formData)
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
function handleSubmit(event){
event.preventDefault()
console.log(formData)
}

    return (
        <div>
            <form className="formI" onSubmit={handleSubmit}>
                <input
                    name="firstName"
                    value={formData.firstName}
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                />
                <input
                    name="lastName"
                    value={formData.lastName}
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                />
                <input
                    name="email"
                    value={formData.email}
                    type="email"
                    placeholder="email"
                    onChange={handleChange}
                />

                <textarea
                    name="comment"
                    value={formData.comment}
                    placeholder="Comment"
                    onChange={handleChange}
                />

                <input
                    name="isFriendly"
                    type="checkbox"
                    id="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                />
                <label htmlFor="isFriendly">Are you friendly?</label>
                <br />

                <fieldset>
                    <legend>Work</legend>
                    <input 
                    type="radio" 
                    id="part-time" 
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                    />
                    <label htmlFor="part-time">part-time</label>

                    <input 
                    type="radio"
                     id="full-time" 
                     name="employment"
                     value="full-time"
                     checked={formData.employment === "full-time"}
                     onChange={handleChange}
                     />
                    <label htmlFor="full-time">full-time</label>

                    <input 
                    type="radio"
                     id="unemployed" 
                     name="employment"
                     value="unemployed"
                     checked={formData.employment === "unemployed"}
                     onChange={handleChange}
                     />
                    <label htmlFor="unemployed">unemployed</label>
                </fieldset>
                <br />

                <label htmlFor="favColor">What is your favorite color?</label>
<select id="favColor"
value={formData.favColor}
onChange={handleChange}
name="favColor"
>
    <option value="">--Choose favorite Color--</option>
    <option value="red">Red</option>
    <option value="orange">Orange</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">Yellow</option>
</select>
<br />
<button>Submit</button>
            </form>

        </div>
    )







    //Bij veel invulvelden niet mogelijk om deze methode te gebruiken
    //beter om via het maken van een object te werken
    //en zo de state te veranderen
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // function handeleChangeF(event) {
    //     setFirstName(event.target.value)

    // }
    // function handeleChangeL(event) { setLastName(event.target.value) }

    // return (
    //     <div>
    //         <form className="formI">
    //             <input type="text"
    //                 placeholder="firstname"
    //                 onChange={handeleChangeF} />
    //             <input type="text"
    //                 placeholder="lastname"
    //                 onChange={handeleChangeL} />
    //         </form>
    //         <h1>
    //             Hello   {firstName} {lastName}
    //         </h1>


    //     </div>
    // )

}