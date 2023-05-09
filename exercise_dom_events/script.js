var button = document.getElementById( "enter" );
var input = document.getElementById( "userinput" );
var ul = document.querySelector( "ul" );
var allListItems = document.querySelectorAll( "li" );
var deleteButtons = getArrayFromCollection( ".status" );


function getArrayFromCollection( classID ) {
    var rawCollection = document.querySelectorAll( classID );
    return [ ...rawCollection ];
}

function inputLength() {
    return input.value.length;
}

function createListElement( parent ) {
    var li = document.createElement( "li" );
    li.appendChild( document.createTextNode( input.value ) );
    parent.appendChild( li );
    input.value = "";
}

function createDeleteButtonElement( parent ) {
    var button = document.createElement( "button" );
    button.appendChild( document.createTextNode( "Done" ) );
    parent.appendChild( button );
}

function createDivElement() {
    var div = document.createElement( "div" );
    createListElement( div );
    createDeleteButtonElement( div );
    ul.appendChild( div );
}

function addListAfterClick() {
    if( inputLength() > 0 ) {
        createDivElement();
    }
}

function addListAfterEnter( key ) {
    if( input.value.length > 0 && key.code === "Enter" ) {
        createDivElement();
    }
}

function elementArrayListener( array, eventType, action ) {
    array.forEach( element => {
        element.addEventListener( eventType, action );
    } );
}

function toggleStatus( item ) {
    item.target.classList.toggle( "done" );
}

function removeElement( item ) {
    item.target.parentElement.remove();
}


button.addEventListener( "click", addListAfterClick ); //CALLBACK FUNCTION (not immediately invoked)

input.addEventListener( "keydown", addListAfterEnter ); //ibid

elementArrayListener( allListItems, "click", toggleStatus );

elementArrayListener( deleteButtons, "click", removeElement );


