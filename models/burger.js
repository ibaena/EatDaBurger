var orm = require('../config/orm.js');

var burger_commands = {
	findAllMembers: function(cb) {
		orm.selectAll('burgers', function(res){
			cb(res)
		});
	},
	addOneMemeber: function(nameInput,cb) {
		orm.insertOne('burgers', nameInput, cb);
	},
	updateOneMember: function(inputId, cb){
		orm.updateOne('burgers', inputId, cb);
	},
	removeOneMember: function(inputId, cb) {
		orm.deleteOne('burgers', inputId, cb);
	}
};

module.exports = burger_commands;
