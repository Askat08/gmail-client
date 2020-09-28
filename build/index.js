
import axios from 'axios';

console.log('This is a text');

//Aidana's code

async function getData() {
    const d = await axios.get("https://polar-reaches-49806.herokuapp.com/api?page=1&category=primary").then(response => {
        console.log(response);
    }).catch(err => {
        console.log('error', err);
    }); //
    console.log("Hello");
}

getData();