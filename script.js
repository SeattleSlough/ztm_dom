// var button = document.getElementsByTagName( "button" )[ 0 ]; //remember: this is an array!

// function extensibleListener( element, event ) {
//     element.addEventListener( event, function() {
//         console.log( "I HEAR YOU!!!!!" );
//     } );
// }

// // "click"
// extensibleListener( button, "click" )

// //"mouseleave"
// extensibleListener( button, "mouseleave" )

// //"mouseenter"
// extensibleListener( button, "mouseenter" )


var button = document.getElementById( "enter" );
var input = document.getElementById( "userinput" );
var ul = document.querySelector( "ul" );

//First Draft of Code pre-refactor:
// button.addEventListener( "click", function() {
//     if( input.value.length > 0 ) {
//         var li = document.createElement( "li" );
//         li.appendChild( document.createTextNode( input.value ) );
//         ul.appendChild( li );
//         input.value = "";
//     }
// }
// );

// input.addEventListener( "keydown", function( key ) {
//     if( input.value.length > 0 && key.code === "Enter" ) {
//         var li = document.createElement( "li" );
//         li.appendChild( document.createTextNode( input.value ) );
//         ul.appendChild( li );
//         input.value = "";
//     }
// }
// );


//Refactoring
function inputLength() {
    return input.value.length
}

function createListElement() {
    var li = document.createElement( "li" );
    li.appendChild( document.createTextNode( input.value ) );
    ul.appendChild( li );
    input.value = "";
}

function addListAfterClick() {
    if( inputLength() > 0 ) {
        createListElement();
    }
}

function addListAfterEnter( key ) {
    if( input.value.length > 0 && key.code === "Enter" ) {
        createListElement()
    }
}

button.addEventListener( "click", addListAfterClick ); //we are pointing to, not invoking function

input.addEventListener( "keydown", addListAfterEnter ); //ibid