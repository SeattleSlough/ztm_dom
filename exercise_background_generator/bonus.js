


var css = document.querySelector( 'h3' );
var color1 = document.querySelector( '.color1' );
var color2 = document.querySelector( '.color2' );
var body = document.getElementById( 'gradient' );


let propValue = function( element, index ) {
    let elementObj = getComputedStyle( element );
    let propertyKey = elementObj[ index ];
    return elementObj.getPropertyValue( propertyKey );
};

var propertyString = propValue( body, 22 );

function gradientToHex( string ) {
    let rawArray = string.match( /([0-9]+)/ig );
    let hexArray = [];
    rawArray.forEach( item => {
        item = ~~item;
        item = item.toString( 16 );
        item = colorToHex( item );
        hexArray.push( item );
    } );
    pickerHex( hexArray );
}

const colorToHex = ( color ) => {
    let hexadecimal = color.toString( 16 );
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
};


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

gradientToHex( propertyString );

color1.addEventListener( "input", setGradient );

color2.addEventListener( "input", setGradient );
