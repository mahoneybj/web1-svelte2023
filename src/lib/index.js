import { writable } from "svelte/store";

export const dogArray = writable([]);



function randomDog(){
    console.log($dogArray.dogBreeds);
    const randomIndex = Math.floor(Math.random() * $dogArray.dogBreeds.length);
    const rand = $dogArray.dogBreeds[randomIndex];
    return rand;
}

