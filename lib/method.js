


function Method (){
	this.methods = {};
}

Method.prototype.add = function(name, fun){
	this.methods[name] = func;
};

Method.prototype.get = function(name){
	if(!name){
		throw new Error('Method name not defined');
	}
	try{
		return this.methods[name];
	}
	catch(err){
		throw new Error('Method not defined');
	};
};

module.exports = Method;


//Winery.on('create').method('populate').from('Country').searchSrc('cuntry.name').searchDst('name').map(['country._id','_id'])

function populate(query, next){
	query.receiver.findOne(query.search, function(err, result){
		if(err){
			return next(err);
		}
		query.map.forEach(function(item){
			byString(query.model, item.searchSrc) = byString(query.receiver, item.searchDst)
		});
		next();
	})
};

//Winery.on('create').modify('Region').searchSrc('region._id').searchDst('_id').method('native','addWinery');

function native(query, next){
	query.receiver.findOne(query.search, function(err, result){
		if(err){
			next(err);
		}
		result[query.methodNative](query.model, function(err){
			if(err){
				next(err);
			}
			next();
		});
	});
};

//Winery.on('update').field('name').method('updateAll').modify('Wine').searchSrc('name').searchDst('winery._id').map(['country.name', 'name']);

function native(query, next){
	var items, modified;
	async.series([
		function(callback){
			query.receiver.find(query.search, function(err, res){
				if(err){

				}
				items= res.length;
				callback();
			})
		},
		function(callback){
			query.receiver.update(query.search, {})
		}
		], function(err){
			next();
	});
	query.receiver.find(query.search, function(err, result){
};