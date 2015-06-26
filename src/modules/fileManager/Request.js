import {HttpClient} from "../../../lib/aurelia-http-client";

var IDE = window.IDE;

class Request extends HttpClient {

	constructor(...args) {
		
		super(...args);
		
		this.configure(function(request){
			var authToken = localStorage.getItem("auth-token");
			var projectID = IDE.qParams.project;
			
			request.withBaseUri(`/api/1.0/projects/${projectID}`);
			request.withHeader('Authorization', `Bearer ${authToken}`);
			request.withHeader('X-R-ID', 'TEST');
			
		});
		
	}

}

export default Request;