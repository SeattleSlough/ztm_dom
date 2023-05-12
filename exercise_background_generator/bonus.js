var css = document.querySelector( 'h3' );
var color1 = document.querySelector( '.color1' );
var color2 = document.querySelector( '.color2' );
var body = document.getElementById( 'gradient' );

let propValue = function( element, index ) {
    let elementObj = getComputedStyle( element );
    let propertyKey = elementObj[ index ];
    return elementObj.getPropertyValue( propertyKey );
};

var rgbString = propValue( body, 22 );;

function componentToHex( c ) { 
    c.forEach( item  => {
        item === "0" ? "0" + item : item;
    })
}

let rgbExtract = function( string, start, stop = 0 ) {
    let arrayStr = string.match( /([0-9]+)/ig );
    let numbers = [];
    arrayStr.forEach( element => {
        numbers.push( ~~element );
    } );
    return ( stop === 0 ? numbers.slice( start ) : numbers.slice( start, stop ) );
};

function rgbToHex( array ) {
    array.forEach( element => {
        element === 0? element + 0
    })
    }
}

var rgbLeft = stringToNumbers( rgbString, 0, 3 );
var rgbRight = stringToNumbers( rgbString, 3 );






function setGradient() {
    body.style.background = `linear-gradient(to right, ${ color1.value }, ${ color2.value })`;
    css.textContent = body.style.background;
}

color1.addEventListener( "input", setGradient );

color2.addEventListener( "input", setGradient );

// setPickers( rgb1, rgb2 );
