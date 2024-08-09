import { useState } from "react";

function useCounter (initialval = 0){
    const [count, setCount] = useState(initialval);

    const increament = () => {
        setCount(count+1);
    }    
    
    const decreament = () => {
        setCount(count-1);
    }

    return {
        count,
        increament,
        decreament
    }

}

export default useCounter;