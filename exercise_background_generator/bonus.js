
// Bonus Tasks
// Set initial picker colors to initial style.css [DONE]
// show values of initial colors in h3 [DONE]
// Create a randomizer button

var css = document.querySelector( 'h3' );
var color1 = document.querySelector( '.color1' );
var color2 = document.querySelector( '.color2' );
var body = document.getElementById( 'gradient' );


//GETTING THE backgroundImage OBJ PROPERTIES AS STRING
let propValue = function( element, index ) {
    let elementObj = getComputedStyle( element );
    let propertyKey = elementObj[ index ];
    return elementObj.getPropertyValue( propertyKey );
};

var propertyString = propValue( body, 22 );

//RGB --> HEX CODE

//this function ensures each RGB value is converted to a two character hex value
//invoked by gradientToHex() below
const colorToFullHex = ( color ) => {
    let hexadecimal = color.toString( 16 );
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
};
function gradientToHex( string ) {
    let rawArray = string.match( /([0-9]+)/ig );
    let hexArray = [];
    rawArray.forEach( item => {
        item = ~~item;
        item = item.toString( 16 );
        item = colorToFullHex( item );
        hexArray.push( item );
    } );
    pickerHex( hexArray );
}


//VIEW CONTROLLERS
function pickerHex( array ) {
    let array1 = array.slice( 0, 3 );
    let array2 = array.slice( 3 );

    let left = "#" + array1.join( '' );
    let right = "#" + array2.join( '' );
    initialPickerColors( left, right );

}
function initialPickerColors( left, right ) {
    color1.value = left;
    color2.value = right;
    css.textContent = propertyString;
}
function setGradient() {
    body.style.background = `linear-gradient(to right, ${ color1.value }, ${ color2.value })`;
    css.textContent = body.style.background;
}


//KICKING OFF THE PAGE
gradientToHex( propertyString );



color1.addEventListener( "input", setGradient );

color2.addEventListener( "input", setGradient );
