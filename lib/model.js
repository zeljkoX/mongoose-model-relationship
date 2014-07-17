var Query = require('./query');
/**
*	Model wrapper for mongoose models
*	
*	@class Model
*	@param {String}	model
*	
**/
function Model(model, parent){
	var that = this;
	if(!name || !model){
		throw new Error('Arguments not defined');
	}
	this.parent = parent;
	this.methods = this.parent.getMethods();
	this.model = model;

	this.events = {
		create: [],
		remove: [],
		update: []
	};

	this.model.on('create', that.run());
	this.model.on('update', that.run());
	this.model.on('remove', that.run());


};

Model.prototype.run(){};

Model.prototype.on = function(name){
	if(!name){
		throw new Error('Event not defined');
	}
	if(typeof name !== 'String'){
		throw new Error('Event is not string');
	}
	return new Query('name', that);
};

Model.prototype.add = function(obj){
	return this.methods.get(name);
};


Model.prototype.get = function(name){
	return this.parent.get(name);
};




module.exports = Model;