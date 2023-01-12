
'use strict'

/* Importing the Utils JS.*/
import { FisEmpty} from "./utils";


/* GetElmentByID from DOM */
let vUserName   = document.getElementById('user_name')

/* Adding the Event Listner: blur.  */
vUserName.addEventListener('blur', ev => {

    ev.preventDefault()

    /* Using the Utils : FisEmpty to check for a Typed string*/
    if(FisEmpty(vUserName.value)){

        console.log('Correct, you have some content typed.')
    }
})