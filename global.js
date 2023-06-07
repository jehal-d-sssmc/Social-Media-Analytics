import config from './config';

class global{
    constructor(){
        this.config = new config();
        this.gapi = this.config.gapi;
    }
}

export default global;