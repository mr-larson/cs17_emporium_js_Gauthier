/*-------------- liens _js --------------*/
// Variables
import * as module from "./_variables.js";
// Function
import * as module1 from "./_function.js";
// Class
import * as module2 from "./_class.js";

/*----------------- Main.js ------------------------*/

function onsignup(){
    document.getElementById('signup').style.display='block';
    document.getElementById('register').style.display='none';
}

function onregister(){
    document.getElementById('signup').style.display='none';
    document.getElementById('register').style.display='block';
}