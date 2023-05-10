var body = document.querySelector( "body" );
var bodyObject = getComputedStyle( body );
var color = document.querySelectorAll( "input" );
var h3 = [ ...( document.getElementsByTagName( "h3" ) ) ];
var currentCSS = bodyObject.getPropertyValue( bodyObject[ 22 ] );

function testFunction( event ) {
    console.log( event );
}

function hex2rgb( hex ) {
    const r = parseInt( hex.slice( 1, 3 ), 16 );
    const g = parseInt( hex.slice( 3, 5 ), 16 );
    const b = parseInt( hex.slice( 4, 6 ), 16 );

    return [ r, g, b ];

}

function colorPickerChange( color ) {
    color.forEach( element => {
        element.addEventListener( "change", testFunction );
    } );
}

function refreshColorCode() {
    var color1 = color[ 0 ].value;
    var color2 = color[ 1 ].value;
    changeBackground( color1, color2 );
}

function refreshH3( input1, input2 ) {
    h3.forEach( element => {
        element.appendChild( document.createTextNode( `linear-gradient(to right, ${ input1 }, ${ input2 })` ) );
    } );
}

function changeBackground( color1, color2 ) {
    body.style.backgroundImage = `linear-gradient(to right, ${ color1 }, ${ color2 }`;
    refreshH3( color1, color2 );
}


colorPickerChange( color );