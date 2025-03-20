// create adater pattern with client and server class

interface WebRequestor{
    request(url: string): void;
}

class webAdapter implements WebRequestor{
    service: WebService;
    request(url: string){
        this.service.request(url);
    }

    connect(service: WebService){
        this.service = service;
    }
}

class WebService{
    request(url: string){
        console.log(`Requesting ${url} from service`);
    }
}

class WebClient {
    requestor: WebRequestor;
    constructor(requestor: WebRequestor){
        this.requestor = requestor;
    }

    doWork(){
        this.requestor.request('https://www.google.com');
    }

}

class Program{
    static main(){
        const service = new WebService();
        const adapter = new webAdapter();
        adapter.connect(service);
        const client = new WebClient(adapter);
        client.doWork();
    }
}