(function() {

	return {
		events: {
			'app.created':  'init',
		},

		init: function() {
			var ticket = this.ticket();
			var ticketRequester = ticket.requester();

			var customer = {
				'orderID' : ticket.customField('custom_field_36462'),
				'email' : ticketRequester.email()
			};

			this.switchTo('iframe', customer);
		},
	};

}());
