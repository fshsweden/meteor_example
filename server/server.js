Meteor.startup(function() {
	// read environment variables from Meteor.settings
	if(Meteor.settings && Meteor.settings.env && _.isObject(Meteor.settings.env)) {
		for(var variableName in Meteor.settings.env) {
			process.env[variableName] = Meteor.settings.env[variableName];
		}
	}

	
});

Meteor.methods({
	"sendMail": function(options) {
		this.unblock();
		Email.send(options);
	},

	"createNewCustomer" : function(options) {
		var ret = JSON.parse(options);
		console.log(typeof ret);
		Customers.insert(ret);
	},

	"updateCustomer" : function(options) {
		var ret = JSON.parse(options);
		console.log(typeof ret);

		for (x in ret) {
			console.log("1) field " + x + " has value " + ret[x]);
		}
		var id = ret['id'];
		delete ret['id'];

		for (x in ret) {
			console.log("2) field " + x + " has value " + ret[x]);
		}
		Customers.update({"_id" : id},ret,function(error, count) {
			if (error)
				console.log("Error updating!");
			else
				console.log(count + " docs updated");

		});
	}

});