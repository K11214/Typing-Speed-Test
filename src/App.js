import React,{useState,useEffect}from 'react';


function App() {
    const TIME=3
    const [text,setText]=useState("")
    const [time,setTime]=useState(TIME)
    const [isStart,setStart]=useState(false)
    const [count,setCount]=useState(0)
    function handleChange(e){
      const {value}=e.target
      setText(value)
    }
    function countWords(str){
      
      const arr=str.trim().split(" ")
      return arr.filter(e=>e!=="").length
    }
   function startGame(){
    setStart(true)
    if(time===0){
      setTime(TIME)
      setCount(0)
      setText("")
    }
   }

    useEffect(()=>{
      if(isStart && time>0){
        setTimeout(()=>{setTime(pre=>pre-1)},1000)
      }else if(time==0){
        setStart(false)
        const words=countWords(text)
      setCount(words);
      }
      
    },[time,isStart])

    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
                disabled={!isStart}
            />
            <h4>Time remaining: {time}</h4>
            <button onClick={startGame} disabled={isStart}>Start</button>
            <h1>Word count: {count}</h1>
        </div>
    )
}

export default App

