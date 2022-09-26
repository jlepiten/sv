import { useEffect, useState } from "react";


export default function SortingVisualizer() {

    const [array, setArray] = useState([]);

    useEffect(() => {
        const temp = [];
        for (let i = 0; i < 100; i++) {
            temp.push(randomIntFromInterval(5,1000));
        }
        setArray(temp);
    }, []);

    return (
        <div>
            {array.map((value, index) => (
                <div className="array-bar" key={index}>
                    {value}
                </div>
            ))}
        </div>
    );
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
