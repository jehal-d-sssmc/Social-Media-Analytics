import axios from "axios";

class ioReq{
    constructor(key = false, url = false){
        this.key = !key ? 'AIzaSyDyDxuL5XCz6AykUHb1sAbEd9r43aWKUF0' : key;
        this.url = !url && typeof(url) !== 'string' ? 'https://youtube.googleapis.com/youtube/v3/' : url;
        this.header = {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }

    

    request = async (url, opt, callback = false) => {
        let response = (await axios.request(url, opt));
        response = response.data;
        //console.log(response)
        try {
            if (!callback) return response;
            callback(null, response)
        } catch (e) {
            if (!callback) return e.response ? e.response.body : { error: e };
            callback(e.response ? e.response.body : { error: e }, null)
        }
    }

    get = async (path, callback) => {
        let url = `${this.url}${path}&key=${this.key}`;
        console.log(url);
        let opt = {
            headers: this.header,
            method: 'GET',
            json: true
        }
        const resp = await this.request(url, opt);
        
        return resp;
    }

    post = async (path, data, callback) => {
        let url = `${this.url}${path}&key=${this.key}`;
        let opt = {
            headers: this.header,
            method: 'GET',
            body: data,
            json: true
        }
        return await this.request(url, opt, callback);
    }
    
    patch = async (path, data, callback) => {
        let url = `${this.url}${path}&key=${this.key}`;
        let opt = {
            headers: this.header,
            method: 'PATCH',
            body: data,
            json: true
        }
        return await this.request(url, opt, callback);
    }
    
    delete = async (path, data, callback) => {
        let url = `${this.url}${path}&key=${this.key}`;
        let opt = {
            headers: this.header,
            method: 'DELETE',
            json: true
        }
        return await this.request(url, opt, callback);
    }



}

export default ioReq;