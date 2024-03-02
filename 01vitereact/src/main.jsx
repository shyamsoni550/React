import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// function App(){
//     return(
//         <div>
//         <h1>custom app</h1>
//         </div>
//     )
// }
// const anotherelement=(
//     <a href="https://google.com" target='_blank'>visit google</a>
// )

const anotherelement=`chai aur react`

const reactelement=React.createElement(
    `a`,
    {href:`https://google.com`,target:`_blank`},
    `click me to visit google`,
    anotherelement
)


ReactDOM.createRoot(document.getElementById('root')).render(

    reactelement
  
)


