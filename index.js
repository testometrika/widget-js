/*!
 * testometrika/widget-js <https://github.com/testometrika/widget-js>
 *
 * Copyright (c) testometrika.com
 * Released under the Apache-2.0 License.
 */

var testometrika_widget = (function(){
    "use strict";

    const classWidgetAutoInit = 'testometrika_widget';
    const tmDomain = 'testometrika.com';
    const tmDir = 'w';
    const tmProtocol = 'https';
    let testWidgets = [];
    let runListenMessageFromOrigin = true;

    let AutoInit = function (){
        let els = document.getElementsByClassName(classWidgetAutoInit);

        // get settings from attr data-*
        Array.prototype.forEach.call(els, function(el) {
            let nodes=[], values=[];
            let settings = {};
            for (let att, i = 0, atts = el.attributes, n = atts.length; i < n; i++){
                att = atts[i];

                if(att.nodeName === 'id') {
                    settings.key = att.nodeValue;
                }

                let name = att.nodeName.toLowerCase();

                if(name.indexOf('data') === 0 ) {
                    settings[name.replace("data-","")] = att.nodeValue;
                }
            }

            // convert string parameter to boolean
            if(typeof settings.auto_height !== 'undefined' ){
                settings.auto_height = settings.auto_height.toLowerCase() === 'true';
            }

            testometrika_widget.Test(settings);
        });
    }

    let Session = function (){
        const sessionKey = 'testometrika_session';

        function init() {
            if(!isSession() ){
                setSession();
            }

            return '?sid='+getSession(); // return GET param
        }

        function setSession() {
            localStorage.setItem(sessionKey, generateId(20) );
        }

        function generateId (len) {
            let id = "wgt";
            let possible = "abcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < len; i++) {
                id += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return id;
        }

        function getSession() {
            return localStorage.getItem(sessionKey);
        }

        function isSession() {
            return getSession() !== null;
        }

        return init();
    }

    let Test = function(settings){
        if(!settings.key){
            console.log('Error not declared key');
            return;
        }

        // default settings:
        if(settings.subdomain){ // subdomain for lang test
            settings.subdomain = `${settings.subdomain}.`;
        }else{
            settings.subdomain = '';
        }

        if(!settings.height_initial){
            settings.height_initial = "700px";
        }

        if(typeof settings.auto_height !== "boolean"){
            settings.auto_height = true;
        }

        if(!settings.loading){
            settings.loading = "lazy";
        }

        let iframeId = `${settings.key}_iframe`;
        if(document.getElementById(iframeId) ){
            return;
        }

        let iframe = document.createElement("iframe");

        iframe.src = `${tmProtocol}://${settings.subdomain}${tmDomain}/${tmDir}/${settings.key}${Session()}`;
        iframe.id = iframeId;
        iframe.name = `${settings.key}_name`; // this is important

        if (settings.auto_height === true) {
            iframe.scrolling = "no"; // browsers support tag scrolling even in html5
        }

        iframe.setAttribute('loading', settings.loading);

        // style
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.display = "block";
        iframe.style.height = settings.height_initial;

        let container = document.getElementById(settings.key);
        container.appendChild(iframe);

        // save objects
        testWidgets[settings.key] = new function() {
            this.settings = settings;
            this.iframe = iframe;
        }

        if(runListenMessageFromOrigin) {
            runListenMessageFromOrigin = false;
            window.onmessage = (e) => {
                if (!e.data.hasOwnProperty("frameHeight") ) {
                    return;
                }

                if (testWidgets[e.data.key].settings.auto_height !== true) {
                    return;
                }

                let h = parseInt(e.data.frameHeight);
                let f = document.getElementById(`${e.data.key}_iframe`);

                if (e.origin.indexOf(tmDomain) === -1) {
                    return;
                }

                if (isNaN(h)) {
                    return;
                }

                f.style.height = h + 'px';
            }
        }
    }

    return {
        Test: Test,
        AutoInit: AutoInit,
        Session: Session,
    }
})();

// if script after elements && after DOMContentLoaded (for async script)
testometrika_widget.AutoInit();

// if script before elements
document.addEventListener("DOMContentLoaded", function(event) {
    testometrika_widget.AutoInit();
});

if(typeof module != "undefined") {
    module.exports = testometrika_widget;
}
