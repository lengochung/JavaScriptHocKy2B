import { get } from "./cart.js";

const checkform = ( function () {
    let isval = true;
    return {
        isval: function () {
            return isval;
        },
        isvalReset: function () {
            isval = true;
        },
        form: function ( input , limit,  nodeAlert, str ) {
            if ( input.value.length < limit ) {
                input.style.border = 'red solid 2px';
                nodeAlert.innerText = str;
                isval = false;
            }
        },
        phone: function ( input , limit,  nodeAlert, str ) {
            if ( input.value.length != limit ) {
                input.style.border = 'red solid 2px';
                nodeAlert.innerText = str;
                isval = false;
            }
        },
        formdate: function ( input, nodeAlert, str) {
            if ( input.value.length == '' ) {
                input.style.border = 'red solid 2px';
                nodeAlert.innerText = str;
                isval = false;
            }
        },
        select: function ( select, nodeAlert, str ) {
            if (select.value == "" ) {
                select.style.border = 'red solid 2px';
                nodeAlert.innerText = str;
                isval = false;
            }
        },
        click: function ( select, alertNode ) {
            if ( select.value == "" ) {
                select.style.border = 'none';
            } else {
                select.style.border = 'green solid 2px';
                alertNode.innerText = "";
            }
        },
        keyup: function ( input, alertNode ) {
            if ( input.value.length < 8 ) {
                input.style.border = 'none';
            } else {
                input.style.border = 'green solid 2px';
                alertNode.innerText = "";
            }
        },
        toUpper: function ( string ) {
            let array = string.split(' ');
            for (let i = 0; i < array.length; i++) {
                array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1); 
            }
            return array.join(' ');
        }, 
        
    }
})();
// 
// const getform = ( function () {

//     return {

//     }
// })();
// 
export { checkform };
