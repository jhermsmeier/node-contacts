/**
 * Contacts
 * @constructor
 * @param {Object} options
 */
function Contacts( options ) {
  
  if( !(this instanceof Contacts) )
    return new Contacts( options )
  
}

/** @type {Object} Providers */
Contacts.Provider = {
  // Google: require( './provider/google' ),
  // Microsoft: require( './provider/microsoft' ),
  // Facebook: require( './provider/facebook' ),
}

/**
 * Contacts prototype
 * @type {Object}
 */
Contacts.prototype = {
  
  constructor: Contacts,
  
}

// Exports
module.exports = Contacts
