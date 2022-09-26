import { useEffect, useState } from "react";
import './SortingVisualizer.css';


export default function SortingVisualizer() {

    const [array, setArray] = useState([]);

    useEffect(() => {
        generateArray();
    }, []);

    const generateArray = () => {
        const temp = [];
        for (let i = 0; i < 320; i++) {
            temp.push(randomIntFromInterval(5,1000));
        }
        setArray(temp);
    };

    return (
        <div className="array-window">
            {array.map((value, index) => (
                <div 
                    className="array-bar" 
                    key={index}
                    style={{height: `${value}px`}}
                    >
                </div>
            ))}
            <button onClick={generateArray}>Generate new array</button>
        </div>
    );
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
