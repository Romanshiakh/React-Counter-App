
import { useState } from "react"

function Counter()
{
    const [count, setCounter] = useState(0);

    const increment = () =>
    {
        setCounter(count + 1);
    }
    const decrement = () =>
    {
        setCounter(count - 1);
    }

    const reset = () =>
    {
        setCounter(0);
    }

    return (

        <div className="flex justify-center mt-40">
            <div className="flex flex-col items-center shadow-2xl w-100 h-110 bg-[#393939] m-4 p-5 rounded-2xl text-white">
                <h1 className="text-7xl mt-5">{count}</h1>
                <div className="flex flex-col items-center space-y-4 w-full p-4">
                    <button
                        onClick={increment}
                        className="bg-rose-500 mt-5 h-14 p-2 rounded-2xl hover:bg-rose-600 border-2 active:bg-zinc-600 w-full"
                    >
                        Increment
                    </button>
                    <button
                        onClick={reset}
                        className="bg-rose-500 mt-5 h-14 p-2 rounded-2xl hover:bg-rose-600 border-2 active:bg-zinc-600 w-full"
                    >
                        Reset
                    </button>
                    <button
                        onClick={decrement}
                        className="bg-rose-500 mt-5 h-14 p-2 rounded-2xl hover:bg-rose-600 border-2 active:bg-zinc-600 w-full"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Counter
