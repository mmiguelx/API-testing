const access_key = '714d2f24e2803f9f751345fa0dab08d6'

$.ajax({
    url: 'http://api.ipstack.com/check?access_key=' + access_key,
    dataType: 'jsonp',
    success: function(json) {
		console.log(json);
		jsonStr = JSON.stringify(json);
		console.log(jsonStr)
	}
});
