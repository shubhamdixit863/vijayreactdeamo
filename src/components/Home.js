import React,{useState} from 'react';


export default function Home(props) {
    console.log(props);
  const [state,setState]=useState({
      name:"Vijaya"
  }) ; // destructuring in js


const ChangeName=()=>{

    setState({name:"Joe"});
    props.ChangeState();
}


  
    return (
        <div>

            <h1>{state.name}</h1>

            <h2>{props.parentData}</h2>
            <button onClick={ChangeName}>Click</button>

            <button onClick={props.ChangeState}>Click Parent</button>
            
        </div>
    )
}
