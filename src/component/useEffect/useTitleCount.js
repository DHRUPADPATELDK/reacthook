import {useEffect} from "react";

const useTitleCount = (count) => {                   //use ====>  cus hook
     useEffect(() => {
        console.log("I am first one");
        if (count >= 1) {
             document.title = `Chats (${count})`
        } else {
             document.title = `Chats `
        }
    }, [count]);
}

export default useTitleCount;

// com A multi time used 