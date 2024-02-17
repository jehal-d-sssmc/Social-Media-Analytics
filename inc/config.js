
class config {
  constructor() {
    this.meta = {
      name: 'sssmc-workspace',
      title: 'SSSMC Workspace',
    };
    this.gapi = {};
    this.gapi.src = 'https://apis.google.com/js/api.js';
    this.gapi.apiKey = 'AIzaSyDyDxuL5XCz6AykUHb1sAbEd9r43aWKUF0';
    this.gapi.clientId =
      '975272254787-af35hjfi6jo0g29a7ie98fj4571u6fcj.apps.googleusercontent.com';
    this.gapi.scopes = ['https://www.googleapis.com/auth/youtube.readonly','https://www.googleapis.com/auth/youtube','https://www.googleapis.com/auth/youtubepartner-channel-audit'].join(' ');
    this.gapi.discoveryUrl =
      'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';
    this.firebase = {
        apiKey: "AIzaSyBy1yv-iXbFt6Bf_rF3-Int2ake8EuwLpk",
        authDomain: "prasanthi-manager.firebaseapp.com",
        projectId: "prasanthi-manager",
        storageBucket: "prasanthi-manager.appspot.com",
        messagingSenderId: "1046766158512",
        appId: "1:1046766158512:web:33bcb48072d3159d047175",
        measurementId: "G-ERBYCP9CTJ"
      };
    
   // this.gapi.script = document.createElement('script');
    //this.gapi.script.src = this.gapi.src;
   // this.gapi.accountscript = document.createElement('script');
   // this.gapi.accountscript.src = 'https://accounts.google.com/gsi/client';
  }




}

export default config;
