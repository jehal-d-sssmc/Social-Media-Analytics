import config from './config';

class global{
    constructor(){
        this.config = new config();
        this.gapi = this.config.gapi;
       // this.auth2 = loadClientAuth2(gapi, this.gapi.clientId, this.gapi.scopes);
    }
}

export default global;