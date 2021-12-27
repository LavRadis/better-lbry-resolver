window.onload=function(){

                
               LBRYNETVERSION()
           
    };


async function LBRYNETVERSION() {

  var lookupResults = await fetch("http://localhost:5279/?m=version", {
    
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
    "body": "{\"jsonrpc\":\"2.0\",\"method\":\"version\",\"id\":1635237012652}",
    "method": "POST",
    "mode": "cors"
})


var lookupResultsJSON = await lookupResults.json();    
    var JSONstring = JSON.stringify(lookupResultsJSON)    
    document.getElementById("textraw").style="max-width: 100%; padding: 10px; word-wrap: break-word; background-color: #FAE5E5"
    document.getElementById("textraw").innerHTML=JSONstring
    }
