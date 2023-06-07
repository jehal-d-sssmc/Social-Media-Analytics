class config {
  constructor() {
    this.meta = {
      name: 'sssmc-workspace',
      title: 'SSSMC Workspace',
    };
    this.gapi = {};
    this.gapi.src = 'https://apis.google.com/js/api.js';
    this.gapi.apiKey = 'AIzaSyB6ObEpNufbTPL7_RJe1tnwTICzioVCX8g';
    this.gapi.clientId =
      '975272254787-af35hjfi6jo0g29a7ie98fj4571u6fcj.apps.googleusercontent.com';
    this.gapi.scopes = 'https://www.googleapis.com/auth/youtube.readonly';
    this.gapi.discoveryUrl =
      'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';
   // this.gapi.script = document.createElement('script');
    //this.gapi.script.src = this.gapi.src;
   // this.gapi.accountscript = document.createElement('script');
   // this.gapi.accountscript.src = 'https://accounts.google.com/gsi/client';
  }
}

export default config;
