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

/*
var ret = {};
options.replace(/(\b[^:]+):'([^']+)'/g, function ($0, param, value) {
    ret[param] = value;
});
*/
		console.log(typeof ret);
//		console.log(ret);

		var propValue;
		for(var propName in options) {
    		propValue = options[propName]
		    console.log("propName:"+propName + " propValue:" + propValue);
		}

//		Customers.insert(ret);
	}
});