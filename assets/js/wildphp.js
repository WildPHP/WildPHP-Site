$(document).ready(function() {
	//start ajax request
	$.ajax({
		url: "data/version.json",
		//force to handle it as text
		dataType: "text",
		success: function(version) {
			
			//data downloaded so we call parseJSON function 
			//and pass downloaded data
			var json = $.parseJSON(version);
			//now json variable contains data in json format
			//let's display a few items
			$('#version').html(json.version);
			var releaseDate = json.release;
			document.getElementById("versions").setAttribute('data-content','Release Date: ' + getFormattedDate(releaseDate));
		}
	});
	var url = 'https://scrutinizer-ci.com/api/repositories/g/wildphp/wild-irc-bot';
     //start ajax request
     var req = window.XDomainRequest ? new XDomainRequest() : new XMLHttpRequest();

	req.open('GET', 'http://allow-any-origin.appspot.com/' + url, true);
	req.onload = function () {
        var data = JSON.parse(req.response);
        var eventobjects = data.applications.eventobjects.build_status.status;
		var master = data.applications.master.build_status.status;
		var beta = data.applications.modularity-rewrite.build_status.status;
		req = null;
			if(master == "passed")
		$('#master').html('<div class="text-success">Passed</div>');
	else
		$('#master').html('<div class="text-danger">Failed</div>');
	if(beta == "passed")
		$('#beta').html('<div class="text-success">Passed</div>');
	else
		$('#beta').html('<div class="text-danger">Failed</div>');
	}
	req.send(null);
});