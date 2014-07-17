var Model = require('./lib/model');
var Method = require('./lib/method');

//function to add models from mongoose

//function to add model one by one

//function to get model

//property all models

function Collection(){
	this.models = {};
	this.methods = {};
};

/**
* 	Iterate mongoose models and add to collection
* 
* 	@param {Object} mongoose  
**/
Collection.prototype.init = function(mongoose){

};

/**
* 	Add one or more models to cellection
* 
* 	@param { Object| Array} model
*	@return this
*	@api public  
**/
Collection.prototype.addModel = function(model){
	if(!model){
		throw new Error('Model must be defined');
	}
	//check if array

	//add model
};

/**
* 	Return instatiate model
*	@method get
* 	@param {String} name
*	@return {object}	
*	@api public  
**/
Collection.prototype.get = function(name){
	if(!name){
		throw new Error('Model name must be defined');
	}
	try{
		return this.models[name];
	}
	catch(err){
		throw new Error('Model is not defined');
	};
	
};

/**
* 	Return instatiate model
*	@method get
* 	@param {String} name
*	@return {object}	
*	@api public  
**/
Collection.prototype.getMethods = function(){
	return this.methods;
	
};

/**
* 	Remove model from collection
*
*	@method remove
* 	@param {String} name
*	@return this
*	@api public  
**/
Collection.prototype.remove = function(name){
	
};





