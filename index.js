;var testometrika_widget = (function(){
    "use strict";

    const classWidgetAutoInit = 'testometrika_widget';
    const tmDomain = 'testometrika.com';
    const tmDir = 'w';
    const tmProtocol = 'https';


    let AutoInit = function (){
        let els = document.getElementsByClassName(classWidgetAutoInit);

        Array.prototype.forEach.call(els, function(el) {
            let nodes=[], values=[];
            let settings = {};
            for (let att, i = 0, atts = el.attributes, n = atts.length; i < n; i++){
                att = atts[i];

                if(att.nodeName == 'id') {
                    settings.key = att.nodeValue;
                }

                let name = att.nodeName.toLowerCase();

                if(name.indexOf('data') === 0 ) {
                    settings[name.replace("data-","")] = att.nodeValue;
                }

            }

            testometrika_widget.Test(settings);
        });
    }

    let Test = function(settings){
        if(!settings.key){
            console.log('Error not declared key');
            return;
        }

        // lang test
        if(settings.subdomain){
            settings.subdomain = `${settings.subdomain}.`;
        }else{
            settings.subdomain = '';
        }

        if(!settings.heightInitial){
            settings.heightInitial = "700px";
        }

        let iframeId = `${settings.key}_iframe`;
        if(document.getElementById(iframeId) ){
            return;
        }

        let iframe = document.createElement("iframe");
        iframe.src = `${tmProtocol}://${settings.subdomain}${tmDomain}/${tmDir}/${settings.key}`;

        iframe.id = iframeId;
        iframe.name = `${settings.key}_name`; // this is important
        iframe.scrolling = "no";
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.display = "block";
        iframe.style.height = settings.heightInitial; // set initial height

        let container = document.getElementById(settings.key);
        container.appendChild(iframe);

        window.onmessage=(e)=>{
            if(e.data.hasOwnProperty("frameHeight")){
                let h = parseInt(e.data.frameHeight);
                let f = document.getElementById(`${e.data.key}_iframe`);

                if (e.origin.indexOf(tmDomain) == -1) {
                    return;
                }

                if (isNaN(h)){
                    return;
                }

                f.style.height = h + 'px';
            }
        }
    }

    return {
        Test: Test,
        AutoInit: AutoInit,
    }
})();

// if script after elements && after DOMContentLoaded (for async script)
testometrika_widget.AutoInit();

// if script before elements
document.addEventListener("DOMContentLoaded", function(event) {
    testometrika_widget.AutoInit();
});
