var express = require( 'express' );
var path = require( 'path' );
var app = express();
var server = require( 'http' ).Server( app );

var config = require( './sysconfig.js' );

app.use( express.static( path.join( __dirname, 'dist' ) ) );
server.listen( config.port, function () {
    console.log( 'server staring..., port: %s', config.port );
} );


app.get( '/', function ( req, res ) {
    console.log('/index')
    res.sendFile( __dirname + '/dist/index.html' );
} );
