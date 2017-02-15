/*
 * * Copyright (c) 2015-2017 Tampere University of Technology.
 * * Use is subject to license terms.
 */

// provides information about device capabilities.

var express = require( 'express' );
var router = express.Router();

var devcaps = [
               {
                   name: 'canPlaySound',
                   description: 'The device has a speaker which can be used to play a sound.'
               },
               {
                   name: 'canMeasureTemperature',
                   description: 'The device has a temperature sensor that can be used to measure temperature.'
               },
	       {
		   name: 'canTurnLight',
		   description: 'The device has an led that can be used to turn on or tuen off a light'
	       }
              ];

// get available device capabilities
router.get( '/', function ( req, res ) {
    res.send( devcaps );
});

module.exports = { router: router, devcaps: devcaps };
