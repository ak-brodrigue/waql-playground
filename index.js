var index = 0

queries = [
    'from type Event',
    '"from type Sound',
    '"from type Bus',
    '"from type RandomSequenceContainer, SwitchContainer, BlendContainer',
    'from search "gun"',
    'from search "foot grass"',
]




function onkeydown(e)
{
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }

    document.getElementById("query").value = queries[0];
}

var showMessage = function (kind, message) {
    var e = document.getElementById(kind);

    if (message.length === 0)
        e.style.display = "none";
    else
        e.style.display = "block";

    e.innerHTML = message;
}

function onBodyLoad()
{
    var request = new XMLHttpRequest();

    request.onload = function () {
        var res = JSON.parse(request.responseText);
        if (request.status !== 200) {
            showMessage("load_error", `Error: ${res.message} (${res.details.reasons})!`);
        } else {
            showMessage("load_success",`Connected ${res.displayName} ${res.version.displayName}!`);
        }
    };
    
    request.open("POST", "http://localhost:8090/waapi", true);
    
    request.setRequestHeader("Content-Type", "application/json");
    
    var data = {
        uri: "ak.wwise.core.getInfo",
        options: {},
        args: {}
    };
    
    request.send(JSON.stringify(data));
}

function showResults(results)
{
    document.getElementById("results_block").style.display = results.length > 0 ? "block" : "none";
    document.getElementById("results_header").innerHTML = `Results: ${results.length} object(s)`
    html = results.map(r => `${r.name}</br>`);

    var res = document.getElementById("results");
    while (res.firstChild) {
        res.removeChild(res.firstChild);
      }
    
      

    results.forEach(obj => {
        // var tr = document.createElement("tr")
        // var td1 = document.createElement("td")
        // var td2 = document.createElement("td")

        // var img = document.createElement("img")
        // td1.appendChild()

        // tr.appendChild(td1);
        // tr.appendChild(td2);
        var tr = document.createElement("tr")
        tr.innerHTML = `<td><img src="images/ObjectIcons_${obj.type}_nor.svg" width="16"></td><td>${obj.name}</td>`;

        res.appendChild(tr);

        //res.append(`${obj.name} (${obj.type})`)
        //res.appendChild(document.createElement("td"));

        `ObjectIcons_${obj.type}_nor.svg`
    });    
}

function update()
{
    var request = new XMLHttpRequest();

    request.onload = function () {
        var res = JSON.parse(request.responseText);
        showMessage("error",``);

        if (request.status !== 200) {
            showMessage("error",`Error: ${res.message} (${res.details.reasons})!`);
            showResults([]);
        } else {
            showResults(res.return);
        }
    };
    
    request.open("POST", "http://localhost:8090/waapi", true);
    
    request.setRequestHeader("Content-Type", "application/json");
    
    var query = document.getElementById("query").value;

    var data = {
        uri: "ak.wwise.core.object.get",
        options: { return: ['name','type']},
        args: { waql: query}
    };
    
    request.send(JSON.stringify(data));
}

