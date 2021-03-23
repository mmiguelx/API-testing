const access_key = '714d2f24e2803f9f751345fa0dab08d6'

function jsonSetter(json) {
	jsonStr = JSON.stringify(json);
	jsonStr = jsonStr.replace(/{/g,'');
	jsonStr = jsonStr.replace(/,/g,"<br>");
	jsonStr = jsonStr.replace(/:/g,": ");
	jsonStr = jsonStr.replace(/"/g,"");
	jsonStr = jsonStr.replace(/}/g,"");
	jsonStr = jsonStr.replace(/\[/g,"<ul><li>");
	jsonStr = jsonStr.replace(/<br>code/g,"<li>code");
	jsonStr = jsonStr.replace(/]/g,"</ul>");
	jsonStr = jsonStr.replace("</ul><br>","</ul>");

	return (jsonStr);
}

$.ajax({
    url: 'http://api.ipstack.com/check?access_key=' + access_key,
    dataType: 'jsonp',
    success: function(json) {
		/*jsonStr = JSON.stringify(json);
		jsonStr = jsonStr.replace(/{/g,'');
		jsonStr = jsonStr.replace(/,/g,"<br>");
		jsonStr = jsonStr.replace(/:/g,": ");
		jsonStr = jsonStr.replace(/"/g,"");
		jsonStr = jsonStr.replace(/}/g,"");
		jsonStr = jsonStr.replace(/\[/g,"<ul><li>");
		jsonStr = jsonStr.replace(/<br>code/g,"<li>code");
		jsonStr = jsonStr.replace(/]/g,"</ul>");
		jsonStr = jsonStr.replace("</ul><br>","</ul>");*/
		document.getElementById('test').innerHTML = jsonSetter(json);
	}
});
