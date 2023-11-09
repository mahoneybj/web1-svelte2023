# Dog Website

## Description
This is a website that displays a range of dogs with photos and infomation relating to each breed. The website also has a random dog function that displays a random dog breed.

## Technologies used
This website uses sveltes onMound async function to fetch a json of dogs breeds and infomation. The async function utlizes try catch functions to avoid crashable errors. The website uses sveltes `on:click` function to run certain functions, svelte html if and for each loops to run through arrays. The website ustlizes svelte stores and exports datafields to be used on other pages. The random dog page utlizes javascripts math class to generate random numbers.

## Known bugs
### Crashing when reloading random dog page
A major known bug occurs when a user reloads the random dog page. This occurs because the `dogArray` is initalized in the `DogFetch.svelte` componant. As the svelte store is reset and not `dogArray` is not reinitlized a error 500 occurs. 

## Future roadmap
Add spinning wheel to random dog.
Add confetti to winning wheel spin
Add more animations to site
Add dog cursor

## Screenshots
