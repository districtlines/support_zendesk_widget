var iframeData = {
	'api_url': '',
	'token': '',
	'custom_field_name': '',
	'custom_field_id': '',
	'order_id': '',
	'email': ''
};

$(function() {
	var client = ZAFClient.init();

	client.metadata().then(function(metadata) {
		iframeData.api_url = metadata.settings.api_url;
		iframeData.token = metadata.settings.token;
		iframeData.custom_field_name = metadata.settings.custom_field_name;
		iframeData.custom_field_id = metadata.settings.custom_field_id;
		getCustomField(client);
	});

	client.invoke('resize', { width: '100%', height: '600px' });
});

function getCustomField(client) {
	var getName = 'ticket.customField:custom_field_'+iframeData.custom_field_id;
	client.get(getName).then(
		function(customData) {
			iframeData.order_id = customData[getName];
			getRequesterEmail(client);
		}
	)
}

function getRequesterEmail(client) {
	client.get('ticket.requester').then(
		function(requesterData) {
			iframeData.email = requesterData['ticket.requester'].email;
			showIframe();
		}
	);
}

function showIframe() {
	var settings = {
		'api_url': iframeData.api_url,
		'token': iframeData.token,
		'custom_field_name': iframeData.custom_field_name,
		'custom_field_id': iframeData.order_id,
		'email': iframeData.email
	};
	console.log(settings);
	var source = $("#iframe-template").html();
	var template = Handlebars.compile(source);
	var html = template(settings);
	$("#iframe-area").html(html);
}