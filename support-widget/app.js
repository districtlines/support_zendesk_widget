(function() {

	return {
		events: {
			'app.created':  'init',
		},

		init: function() {
			var ticket = this.ticket();
			var ticketRequester = ticket.requester();

			var customer = {
				'custom_field_id' : ticket.customField('custom_field_' + this.setting('custom_field_id')),
				'email' : ticketRequester.email(),
			};

			this.switchTo('iframe', customer);
		},
	};

}());
