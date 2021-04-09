const examples = [
    '$ where volume = -1',
    '$ where volume < 0',
    '$ where volume > -3 and volume < 0',
    '$ where volume < -10 or volume < 0',
    '$ where pitch = 1200',
    '$ where lowpass > 0',
    '$ where highpass > 0',
    '$ where name = "Hello"',
    '$ where name : "Hello"',
    '$ where name : "Hel"',
    '$ where name : "*ello"',
    '$ where name = /Hello/',
    '$ where name = /llo$/',
    '$ where name = /[a-z][0-9]/',
    '$ where IsLoopingEnabled or IsStreamingEnabled',
    '$ where (volume >= 0 and (lowpass > 0 or highpass > 0))',
    '$ where notes : "hell"',
    '$ where outputbus.name = /^2D$/',
    '$ where parent.name = "Music"',
    '$ where parent.parent.name = "Music"',
    '$ where parent.volume < 0',
    '$ where parent.busvolume < 0',
    '$ where outputbus.parent.name = "Master Audio Bus"',
    '$ where effect0.pluginname = "Wwise Compressor"',
    '$ where soundbankBnkFilePath : "car"',
    '$ where workunitIsDefault',
    '$ where workunitType = "folder"',
    '$ where workunitType = "rootFile" and !workunitIsDefault',
    '$ where workunitIsDirty',
    '$ where id = "{1514A4D8-1DA6-412A-A17E-75CA0C2149F3}"',
    '$ where shortId = 1588715066',
    '$ where name = "Play_Hello"',
    '$ where notes : "audiokinetic"',
    '$ where type = "Sound"',
    '$ where classId = 8847363',
    '$ where category = "Actor-Mixer Hierarchy"',
    '$ where category = "Interactive Music Hierarchy"',
    '$ where category = "Master-Mixer Hierarchy"',
    '$ where category = "Events"',
    '$ where isPlayable',
    '$ where !isPlayable',
    '$ where isPlayable = false',
    '$ where type = "RandomSequenceContainer" and childrenCount > 5',    
    '$ from type Sound',
    '$ from type sound',
    '$ from type Event',
    '$ from type Bus',
    '$ from type audiofilesource',
    '$ from type RandomSequenceContainer, SwitchContainer, BlendContainer',
    '$ where type = "randomsequencecontainer" or type = "switchcontainer" or type = "blendcontainer"',
    '$ from search "hello"',
    '$ from object "\\Actor-Mixer Hierarchy\\Default Work Unit"',
    '$ from object "\\Master-Mixer Hierarchy\\Default Work Unit\\Master Audio Bus"',
    '$ from object "{1514A4D8-1DA6-412A-A17E-75CA0C2149F3}"',
    '$ from object "Event:Play_Hello"',
    '$ from object "Event:2952797154"',
    '$ from object "Event:Play_Hello", "Bus:Master Audio Bus"',
    '$ "Event:Play_Hello", "Bus:Master Audio Bus"',
    '$ "\\Actor-Mixer Hierarchy"',
    '$ "\\"',
    '$ "{1514A4D8-1DA6-412A-A17E-75CA0C2149F3}"',
    '$ "{1514A4D8-1DA6-412A-A17E-75CA0C2149F3}", "{4D1B2AA5-19D8-44D3-AAE5-94024469CE7C}"',
    '$ from object "{1514A4D8-1DA6-412A-A17E-75CA0C2149F3}" select parent',
    '$ from object "Bus:Master Audio Bus" select children',
    '$ from object "Bus:Master Audio Bus" select descendants',
    '$ from object "Bus:Master Audio Bus" select descendants where type = "AuxBus"',
    '$ from object "\\Actor-Mixer Hierarchy\\Default Work Unit" select descendants, this where volume < 0',
    '$ from object "\\Actor-Mixer Hierarchy\\Default Work Unit\\Hello" select OutputBus',
    '$ from object "\\Actor-Mixer Hierarchy\\Default Work Unit" select descendants select OutputBus',
    '$ from object "\\Actor-Mixer Hierarchy\\Default Work Unit" select descendants select OutputBus distinct',
    '$ from object "{CBCD492C-982D-4EE4-AE75-0019CA6577EF}" select parent.Attenuation',
    '$ from search "gun"',
    '$ from search "foot walk"',
    '$ from search "hello" where type = "sound"',
    '$ from query "\\Queries\\Factory Queries\\Audio Source\\Audio Source - Format = Vorbis"',
    '$ from query "{4D1B2AA5-19D8-44D3-AAE5-94024469CE7C}"',
    '$ from type Sound where volume < 0',
    '$ from type Sound where volume < 0 and volume > -10',
    '$ from type Sound where volume = -1 or volume = -2',
    '$ from type Sound where outputbus="Bus:Master Audio Bus"',
    '$ from type Sound where UserAuxSend0="AuxBus:Hangar_Env"',
    '$ from type Sound where Effect0.name : "eq"',
    '$ from type Sound where Effect0.name : "eq" or Effect1.name : "eq" or Effect2.name : "eq" or Effect3.name : "eq"',
    '$ from type Event select children where Target.path : "hello" select parent',
    '$ from type RandomSequenceContainer where childrenCount > 2 and childrenCount <= 4',
    '$ from type Sound where notes : "All"',
    '$ from type Sound where notes : "*audiokinetic*"',
    '$ from type Sound where UserAuxSend0 != null',
    '$ from type Sound where convertedWemFilePath : "hello"',
    '$ from type Sound where originalWavFilePath : "hello"',
    '$ from type Sound where outputBus="Bus:Master Audio Bus"',
    '$ from type Sound where parent.name : "*engine"',
    '$ from type Sound where outputBus="Bus:Master Audio Bus"',
    '$ from type Sound skip 10',
    '$ from type Sound take 10',
    '$ from type Sound orderby name',
    '$ from type Sound orderby name reverse',
    '$ from type Bus orderby busvolume',
    '$ from type Action orderby target.name',
    '$ from object "\\Actor-Mixer Hierarchy" select descendants select outputbus distinct',
    '$ from object "\\Actor-Mixer Hierarchy\\Default Work Unit" select descendants',
    '$ from object "\\Actor-Mixer Hierarchy\\Default Work Unit" select descendants, this',
    '$ from object "Event:Play_Hello" select ancestors',
    '$ from object "Event:Play_Hello" select ancestors, this',
    '$ from type Effect select referencesTo',
    '$ "Event:Play_Hello" select referencesTo',
    '$ from type Sound select parent',
    '$ from type Sound select OutputBus',
    '$ from type sound select outputbus',
    '$ from type sound select outputbus distinct',
    '$ from type sound select outputbus.parent',
    '$ from type Sound select maxRadiusAttenuation',
    '$ from type sound select parent',
    '$ from type sound select effect0',
    '$ from type sound select effect0, effect1, effect2, effect3',
    '$ from type sound select this, ancestors select referencesTo where type = "action" select parent distinct orderby name',
    '$ from type event select children select target select this, descendants where type = "sound" distinct orderby name',
    '$ from type Effect select owner',
    '$ from type Effect where owner.name :"*env"',
    '$ from project select musicTransitionRoot',
    '$ from project select musicPlaylistRoot',
    '$ from object "\\Actor-Mixer Hierarchy" select maxDurationSource',
    '$ from type AudioFileSource select audioSourceLanguage distinct',
    '$ from project select switchContainerChildContext',
    '$ "\\Actor-Mixer Hierarchy\\Default Work Unit" select descendants',
    '$ "\\Actor-Mixer Hierarchy\\Default Work Unit" select parent',
    '$ "\\Actor-Mixer Hierarchy\\Default Work Unit" select ancestors',
    '$ "\\Actor-Mixer Hierarchy\\Default Work Unit" select parent, children',
    '$ "\\Actor-Mixer Hierarchy\\Default Work Unit" select this, parent, children',
]

const waqlKeywords = [
    "where",
    "from",
    "select",
    "distinct",
    "take",
    "skip",
    "orderby"
]

// Execute a HTTP WAAPI call
function waapiCall(uri, args, options, onSuccess, onError) {
    let request = new XMLHttpRequest();

    request.onload = function () {
        let jsonResponse = JSON.parse(request.responseText)
        if (request.status !== 200) {
            onError(jsonResponse)
        }
        else {
            onSuccess(jsonResponse)
        }
    };
    request.open("POST", "http://localhost:8090/waapi", true);
    request.setRequestHeader("Content-Type", "application/json");

    var data = { uri, options, args }
    request.send(JSON.stringify(data));
}

// Show a generic message
var showMessage = function (kind, message) {
    var e = document.getElementById(kind);

    if (message.length === 0)
        e.style.display = "none";
    else
        e.style.display = "block";

    e.innerHTML = message;
}

// When loading the page
function onBodyLoad() {

    // Load examples
    let examples_ul = document.getElementById("examples_ul")
    examples.forEach(example => {
        let html = example;
        
        // Basic color highligh
        html = html.replaceAll(/("[^"]*")/g, '<span class="text-success">$1</span>')
        html = html.replaceAll(/(\s-?\d+)/g, '<span class="text-danger">$1</span>')
        waqlKeywords.forEach(keyword =>{
            html = html.replaceAll(new RegExp(keyword, 'g'), `<span class="text-primary font-weight-bold">${keyword}</span>`)
        })

        // Create a list entry
        let anchor = document.createElement("a");
        anchor.className = "list-group-item list-group-item-action py-1";
        anchor.innerHTML = html;
        anchor.href = "#"
        anchor.onclick = function(){
            document.getElementById("query").value = example;
            update();
        }
        examples_ul.appendChild(anchor);
    })

    // Set Default options
    document.getElementById("options").value = '["type","name"]';

    // Initiate a first connection and get the Wwise version
    waapiCall("ak.wwise.core.getInfo", {}, {}, 
        function(res){
            showMessage("load_success", `Connected to ${res.displayName} ${res.version.displayName}.`);
        }, 
        function(res){
            showMessage("load_error", `Error: ${res.message} (${res.details.reasons})!`);
        });

    // Get the project name
    waapiCall("ak.wwise.core.object.get", { waql: '$ "\\"'}, {}, 
        function(res){
            showMessage("load_success_project", `Project: ${res.return[0].name}`);
        }, 
        null);        
}

// Present results in a HTML table
function showResults(results) {
    document.getElementById("results_block").style.display = results.length > 0 ? "block" : "none";
    document.getElementById("results_header").innerHTML = `Results: ${results.length} object(s)`
    html = results.map(r => `${r.name}</br>`);

    let res = document.getElementById("results");
    while (res.firstChild) {
        res.removeChild(res.firstChild);
    }

    let options = JSON.parse(document.getElementById("options").value);

    results.forEach(obj => {
        // Create a table row
        let tr = document.createElement("tr")

        let html = options.map(o => {
            if (o === "type") {
                return `<td><img src="images/ObjectIcons_${obj.type}_nor.svg" width="16" style="vertical-align: middle"></td>`;
            }
            return `<td>${obj[o]}</td>`
        })

        tr.innerHTML = html.join('');
        res.appendChild(tr);
    });
}

// Update results after any change in the fields
function update() {
    let query = document.getElementById("query").value;
    let options = JSON.parse(document.getElementById("options").value);

    // Execute the WAQL query, with the specified options
    waapiCall(
        "ak.wwise.core.object.get",
        { waql: query },
        { return: options },
        function (res) {
            showMessage("error", ``);
            showResults(res.return);
            },
        function (res) {
            showMessage("error", `Error: ${res.message} (${res.details.reasons})!`)
            showResults([])
        });

    // Also push the query to the list view
    waapiCall("ak.wwise.ui.commands.execute", { command: 'ShowListView', value: query }, {}, null, null);
}

