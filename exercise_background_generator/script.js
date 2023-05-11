var body = document.querySelector( "body" );
var bodyObject = getComputedStyle( body );
var color = document.querySelectorAll( "input" );
var h3 = document.getElementsByTagName( "h3" )[ 0 ];
var currentCSS = bodyObject.getPropertyValue( bodyObject[ 22 ] );
console.log( currentCSS );

// function testFunction( event ) {
//     console.log( event );
// }

let fullHex = ( hex ) => {
    let r = hex.slice( 1, 2 );
    let g = hex.slice( 2, 3 );
    let b = hex.slice( 3, 4 );

    r = parseInt( r + r, 16 );
    b = parseInt( b + b, 16 );
    g = parseInt( g + g, 16 );

    return { r, g, b };
};

let hex2rgbObj = ( hex ) => {
    if( hex.length === 4 ) {
        return fullHex( hex );
    }
    const r = parseInt( hex.slice( 1, 3 ), 16 );
    const g = parseInt( hex.slice( 3, 5 ), 16 );
    const b = parseInt( hex.slice( 4, 6 ), 16 );

    return { r, g, b };

};

function makeObjString( obj ) {
    return `(${ obj.r }, ${ obj.g }, ${ obj.b })`;
}

function colorPickerChange( color ) {
    color.forEach( element => {
        element.addEventListener( "change", getNewHexCodes );
    } );
}

function getNewHexCodes() {
    var hex1 = color[ 0 ].value;
    var hex2 = color[ 1 ].value;
    changeBackground( hex1, hex2 );
    hex2RgbString( hex1, hex2 );
}

function hex2RgbString( hex1, hex2 ) {
    var string1 = makeObjString( hex2rgbObj( hex1 ) );
    var string2 = makeObjString( hex2rgbObj( hex2 ) );
    refreshH3( string1, string2 );
}

function refreshH3( code1, code2 ) {
    h3.append( document.createTextNode( `linear-gradient(to right, ${ code1 }, ${ code2 });` ) );
}

function changeBackground( color1, color2 ) {
    body.style.backgroundImage = `linear-gradient(to right, ${ color1 }, ${ color2 }`;
}


colorPickerChange( color );