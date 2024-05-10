import React from 'react'
import '../App.css'

export default function About(props) {

    // const [myStyle] = useState({
    //     color: props.mode === 'white' ? 'black' : 'white',
    // });

    return (
        <div className={`container text-${props.mode === 'light'?'black':'light'}`}  >
            <h2>Welcome to TextUtils</h2>
            <p>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or converting your text into upper case or lower case, TextUtils is here for all your needs. Best of all, it's free!</p>
        </div>
    )
}

