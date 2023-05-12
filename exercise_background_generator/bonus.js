var css = document.querySelector( 'h3' );
var color1 = document.querySelector( '.color1' );
var color2 = document.querySelector( '.color2' );
var body = document.getElementById( 'gradient' );
var newArray = [];

var bodyGradient = getComputedStyle( body );
var gradientKey = bodyGradient[ 22 ];
var gradientValue = bodyGradient.getPropertyValue( gradientKey );

var rawColorArray = gradientValue.split( "rgb(" ).slice( 1 );

let convert2number = ( string, index ) => {
    return string[ index ].split( "," );
};

convert2number( rawColorArray[ 0 ] );

// function setPickers( initial1, initial2 ) {
//     color1.value = `${ initial1 }`;
//     color2.value = `${ initial2 }`;
//     // console.log( color1.style );
// }


function setGradient() {
    body.style.background = `linear-gradient(to right, ${ color1.value }, ${ color2.value })`;
    css.textContent = body.style.background;
}

color1.addEventListener( "input", setGradient );

color2.addEventListener( "input", setGradient );

// setPickers( rgb1, rgb2 );
