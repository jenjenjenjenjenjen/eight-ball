import React, {useState} from "react";

const EightBall = ({ answers }) => {
    const ans = answers[Math.floor(Math.random() * answers.length)];
    const getAnswer = () => {
        setCurrMsg(ans.msg);
        setColor(ans.color)
    }
    const [color, setColor] = useState("black");
    const [currMsg, setCurrMsg] = useState("Think of a question")
    return (
        <div style={{backgroundColor: color}} className="EightBall" onClick={getAnswer}>
            <p>{currMsg}</p>
        </div>
    )
}

export default EightBall;