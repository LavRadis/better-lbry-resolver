var jsonObj = {};
var jsonViewer = new JSONViewer();
document.querySelector("#json").appendChild(jsonViewer.getContainer());
var textarea = document.getElementById("textraw");
/*
var setJSON = function() {
    try {
        var value = textarea.innerHTML;
        jsonObj = JSON.parse(value);
    }
    catch (err) {
        console.log(err)
       // alert(err);
    }
};		
*/
var loadJsonBtn = document.querySelector("button.load-json");
var collapse1Btn = document.querySelector("button.collapse1");
var collapse2Btn = document.querySelector("button.collapse2");
var collapse3Btn = document.querySelector("button.collapse3");
var collapse4Btn = document.querySelector("button.collapse4");
var collapse5Btn = document.querySelector("button.collapse5");        

loadJsonBtn.addEventListener("click", function() {
    setJSON();
    jsonViewer.showJSON(jsonObj);
});
collapse1Btn.addEventListener("click", function() {
    jsonViewer.showJSON(jsonObj, null, 1);
});
collapse2Btn.addEventListener("click", function() {
    jsonViewer.showJSON(jsonObj, null, 2);
});
collapse3Btn.addEventListener("click", function() {
    jsonViewer.showJSON(jsonObj, null, 3);
});
collapse4Btn.addEventListener("click", function() {
    jsonViewer.showJSON(jsonObj, null, 4);
});
collapse5Btn.addEventListener("click", function() {
    jsonViewer.showJSON(jsonObj, null, 5);
});		