const fs = require('fs');
const fsex = require('fs-extra')
const acePluginPath = __dirname + '/../gitbook-plugin-ace'
const aceModePath = acePluginPath + '/assets/ace'
const aceSnippetsPath = aceModePath + '/snippets'
const thisPath = __dirname
const thisSnippetsPath = thisPath + '/snippets'

feelppmode = 'mode-feelpp.js'
feelppsnippet = 'feelpp.js'

const mode = __dirname + '/' + feelppmode
const snippet = thisSnippetsPath + '/' + feelppsnippet

const aceMode = aceModePath + '/' + feelppmode
const aceSnippet = aceSnippetsPath + '/' + feelppsnippet

fs.stat( acePluginPath, (err, stats) => {
    if (err) throw err;
    // async copy to ace plugin
    fs.stat( aceModePath, (err, stats) => {
        if (err) throw err;
        fsex.copy( mode, aceMode, {replace: true}, function (err) {
            if (err) return console.error(err)
        })
    });
    fs.stat( aceSnippetsPath, (err, stats) => {
        if (err) throw err;
        fsex.copy( snippet, aceSnippet, {replace: true}, function (err) {
            if (err) return console.error(err)
        })
    });
});

//module.exports = {
//    //"feelppace":
//    //    {
//    //        "mode" : "mode-feelpp.js",
//    //        "snippets" : "snippets/feelpp.js"
//    //    }
//};
