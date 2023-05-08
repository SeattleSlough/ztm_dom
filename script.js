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

button.addEventListener( "click", function() {
    if( input.value.length > 0 ) {
        var li = document.createElement( "li" );
        li.appendChild( document.createTextNode( input.value ) );
        ul.appendChild( li );
        input.value = "";
    }
}
);

input.addEventListener( "keydown", function( key ) {
    if( input.value.length > 0 && key.code === "Enter" ) {
        var li = document.createElement( "li" );
        li.appendChild( document.createTextNode( input.value ) );
        ul.appendChild( li );
        input.value = "";
    }
}
);