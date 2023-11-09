import { writable } from "svelte/store";

export const dogArray = writable([]);



 function randomDog(){
    const randomIndex = Math.floor(Math.random() * dogs.length);
    return dogArray[randomIndex];
 }

 export {randomDog};
