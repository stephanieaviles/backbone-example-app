'use strict';

var Dog = Backbone.Model.extend({
	initialize: function() {
		this.view = new DogView({model: this});
		this.on('change:name', function() {
			this.view.render();
		});
	}
});
