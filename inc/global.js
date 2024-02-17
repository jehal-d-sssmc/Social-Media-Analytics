import config from './config';
import firebase from './firebase';

class global{
    constructor(){
        let __ = new config();
        this.gapi = __.gapi;
        
       // this.auth2 = loadClientAuth2(gapi, this.gapi.clientId, this.gapi.scopes);
    }
    startFirebase = (win) => {
        if(win){
            let __ = new config();
            this.firebase = new firebase(__.firebase);
        }
    }

    loadScript = () => {
        this.gapi.script = document.createElement('script');
        this.gapi.script.src = this.gapi.src;
        this.gapi.accountscript = document.createElement('script');
        this.gapi.accountscript.src = 'https://accounts.google.com/gsi/client';
        return this.gapi;
    }
}

export default global;