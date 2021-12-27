window.onload=function(){

    const urlInput = document.getElementById("urlInput")
    const queryoutput= document.getElementById("queryoutput")
    urlInput.addEventListener('keydown', async function (e) {
        if (e.key === 'Enter') {              
                viewContentViaOdyseeAPI()   
                return
           }
    })
    async function viewContentViaOdyseeAPI() {
    var urlResponse = await fetch("https://api.na-backend.odysee.com/api/v1/proxy?m=get", {
        "credentials": "omit",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:93.0) Gecko/20100101 Firefox/93.0",
            "Accept": "*/*",
            "Accept-Language": "en-GB,en;q=0.5",
            "Content-Type": "application/json-rpc",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site"
        },
        "referrer": "https://odysee.com/",
        "body": "{\"jsonrpc\":\"2.0\",\"method\":\"get\",\"params\":{\"uri\":\"" + urlInput.value + "\",\"save_file\":false},\"id\":1635237012803}",
        "method": "POST",
        "mode": "cors"
    })
var urlResponseJSON = await urlResponse.json()      
   try {document.getElementById("dlLink").innerHTML= ('</br><a href="'+ urlResponseJSON.result.streaming_url+'" target="_blank">This is the cliam download link from ODYSEE / LBRY CDN</a>') } catch (error) {document.getElementById("dlLink").innerHTML= ('</br>This claim is a channel or paid content')}

    
    var lookupResults = await fetch("https://api.na-backend.odysee.com/api/v1/proxy?m=resolve", {
        "credentials": "omit",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:93.0) Gecko/20100101 Firefox/93.0",
            "Accept": "*/*",
            "Accept-Language": "en-GB,en;q=0.5",
            "Content-Type": "application/json-rpc",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site"
        },
        "referrer": "https://odysee.com/",
        "body": "{\"jsonrpc\":\"2.0\",\"method\":\"resolve\",\"params\":{\"urls\":[\"" + urlInput.value + "\"]},\"id\":1635237012652}",
        "method": "POST",
        "mode": "cors"
    })
    var lookupResultsJSON = await lookupResults.json();    
    var JSONstring = JSON.stringify(lookupResultsJSON)    
    document.getElementById("textraw").style="max-width: 100%; padding: 10px; word-wrap: break-word; background-color: #FAE5E5"
    document.getElementById("textraw").innerHTML=JSONstring
   
    }


    }
