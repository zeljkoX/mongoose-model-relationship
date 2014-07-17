function Query(event, model) {
	if (!event) {
		throw new Error('event not defined');
	}
	this.model = model;
	this.query = {
		event: event
	}
};



/**
 * 	Add field property to object. Used on event update
 *
 *	@method field
 * 	@param {String} name
 *	@return {Object}
 *	@api public
 **/
Query.prototype.field = function(name) {
	if (!name) {
		throw new Error('Event not defined');
	}
	if (typeof name !== 'String') {
		throw new Error('Event is not string');
	}
	this['field'] = name;
	return this;
};

/**
 * 	Add field map to object.
 *
 *	@method map
 * 	@param {Array} mapping
 *	@return {Object}
 *	@api public
 **/
Query.prototype.map = function(mapping) {
	var that = this;
	if (!mapping) {
		throw new Error('Event not defined');
	}
	that.query['map'] = that.query['map'] || [];
	if (arguments.length > 1) {
		arguments.forEach(function(item) {
			if (!Array.isArray(item)) {
				throw new Error('Mapping is not Array');
			}
			that.query['map'].push(item);
		});
	} else {
		this.query['map'] = push(mapping);
	}
	return this;
};

/**
 * 	Return a object
 *
 *	@method field
 * 	@param {String} name
 *	@return {Object}
 *	@api public
 **/
Query.prototype.modify = Query.prototype.model = Query.prototype.from = function(name) {

	if (!name) {
		throw new Error('Name not defined');
	}
	if (typeof name !== 'String') {
		throw new Error('Name is not string');
	}

	this.query['receiver'] = this.model.get(name);

	return this;
};


/**
 * 	Add field property to object
 *
 *	@method field
 * 	@param {String} name
 *	@return {Object}
 *	@api public
 **/
Query.prototype.method = function(name) {
	if (!name) {
		throw new Error('Event not defined');
	}
	if (typeof name !== 'String') {
		throw new Error('Event is not string');
	}
	this.query['method'] = this.model.getMethod(name);
	return this;
};


/**
 * 	Add field property to object
 *
 *	@method field
 * 	@param {String} name
 *	@return {Object}
 *	@api public
 **/
Query.prototype.serchScr = function(name) {
	if (!name) {
		throw new Error('Event not defined');
	}
	if (typeof name !== 'String') {
		throw new Error('Event is not string');
	}
	this.query['serchScr'] = name;
	return this;
};


/**
 * 	Add field property to object
 *
 *	@method field
 * 	@param {String} name
 *	@return {Object}
 *	@api public
 **/
Query.prototype.searchDst = function(name) {
	if (!name) {
		throw new Error('Event not defined');
	}
	if (typeof name !== 'String') {
		throw new Error('Event is not string');
	}
	this.query['serchDst'] = name;
	return this;
};


/**
 * 	Add field property to object
 *
 *	@method field
 * 	@param {String} name
 *	@return {Object}
 *	@api public
 **/
Query.prototype.search = function(object) {
	if (!object) {
		throw new Error('Event not defined');
	}
	if (typeof name !== 'String') {
		throw new Error('Event is not string');
	}
	try {
		this.query['searchScr'] = object.searchScr;
		this.query['searchDst'] = object.searchDst;
	} catch (err) {
		throw new Error('Search object properties not defined');
	}
	return this;
};


/**
 * 	Add field property to object
 *
 *	@method field
 * 	@param {String} name
 *	@return {Object}
 *	@api public
 **/
Query.prototype.end = function() {
	if (this.validate()) {

	} else {
		throw new error('Cannot add query, required fields are not defined');
	}
};


Query.prototype.validate = function() {
	var that = this;
	try {
		isUndefined(that.model);
		isUndefined(that.event);
		isUndefined(that.receiver);
		isUndefined(that.searchDst);
		isUndefined(that.searchScr);
		isUndefined(that.method);

		//update specific fields
		if (that.event === 'update') {
			isUndefined(that.field);
		}

		that.model.add(that.query);

	} catch (err) {

	}

};


function isUndefined(obj) {
	if (obj === void 0) {
		throw new Error('roperty not defined');
	}
}
module.exports = Query;