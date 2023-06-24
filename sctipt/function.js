export function getDate (method, url, callback){
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.send();
    request.onreadystatechange = ()=> {
        if (request.readyState === 4 && request.status === 200) {
            callback(JSON.parse(request.responseText))
        }
    }
}