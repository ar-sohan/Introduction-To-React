import { useState } from "react"

export default function Counter(){
    let [hours, setHours] = useState(10);

    function handleAdd() {
        const addHours = hours + 1;
        setHours(addHours);
    }

    function handleForget() {
        const removedHours = hours - 1;
        setHours(removedHours);
    }

    return (
        <div className="bg-gray-300">
            <h1 className="text-center font-semibold text-lime-600 text-3xl p-5">React Will You Be My First Love?</h1>
            <h2 className="text-center font-semibold text-lime-600 text-xl p-5">Total Hours : {hours} </h2>
            <div className="flex gap-5 justify-center">
            <button className="btn btn-success" onClick={handleAdd}>Add</button>
            <button className="btn btn-warning" onClick={handleForget}>Forget</button>
            </div>
            <p className="text- text-l p-2">This is my memories with react. I wish this will go for so long.</p>
        </div>
    )
}