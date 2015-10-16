import {HttpClient} from "../../../../lib/aurelia-http-client";

var IDE = window.IDE;

class Request extends HttpClient {

	constructor(...args) {
		
		super(...args);
		
		this.configure(function(request){
			var projectID = IDE.qParams.project;
			if (projectID) {
				var authToken = localStorage.getItem("auth-token");
				request.withBaseUri(`/api/1.0/projects/${projectID}`);
				request.withHeader('Authorization', `Bearer ${authToken}`);
				request.withHeader('X-R-ID', 'TEST');
			}
		});
		
	}

}

export default Request;