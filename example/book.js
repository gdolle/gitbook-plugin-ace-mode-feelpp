const fs = require("fs");
module.exports = {
    "gitbook": "3.x.x",
    "title": "Feel++ syntax code example",
    "plugins": [
        "include-codeblock",
        "ace",
        "ace-mode-feelpp"
    ],
    "pluginsConfig": {
        "include-codeblock" : {
            "template" : "ace",
            "unindent": "true",
            "theme": "chrome"
        },
        "ace" : {
            "theme":"chrome"
        }
    }
};
