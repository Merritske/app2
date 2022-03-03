import Jokes from './Jokes';

export default function JokeVerz(props){
    return(
        <div className='joke-container'>
            <h1 className='joke-title'>JOKES</h1>
           <ul>
                        <Jokes 
 setup="Helvetica and Times New Roman walk into a bar."
punchline=" 'Get out of here!' shouts the bartender. 'We don’t serve your type.'"
likes={0 }
dislikes = {0}
comments={[{contributor:"", setup:"", punchline:"" }]}
/>  
           

<Jokes 
 setup="Hear about the new restaurant called Karma?"
punchline=" There’s no menu: You get what you deserve."
likes={2}
dislikes = {0}
comments={[{contributor:"", setup:"", punchline:"" }]}
/>
<Jokes
setup="Did you hear about the claustrophobic astronaut?"
punchline="He just needed a little space."
likes={2}
dislikes = {0}
comments={[{contributor:"", setup:"", punchline:"" }]}
/>
<Jokes
setup="What sits at the bottom of the sea and twitches?"
punchline="A nervous wreck."
likes={2}
dislikes = {0}
comments={[{contributor:"", joke:"" }]}
/> 
 </ul>
<form >
    <fieldset className='form--field'>
<legend>Do you want to add a joke?</legend> 
 <p>your name : <input type="text" /> {props.contributor}</p>
 <p className='form--joketext'>your joke : <textarea className='form--textarea' type="text" /> {props.joke}</p>
 <button type='submit'>Submit</button>
 </fieldset>
 </form>
        </div>
    )
}