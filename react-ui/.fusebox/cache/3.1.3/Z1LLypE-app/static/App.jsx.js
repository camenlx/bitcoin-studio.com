module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = require(\"react\");\nconst Header_1 = require(\"./components/Header\");\nconst Main_1 = require(\"./components/Main\");\nconst Footer_1 = require(\"./components/Footer\");\nclass App extends React.Component {\n    render() {\n        return (React.createElement(\"div\", { className: 'wrapper' },\n            React.createElement(Header_1.default, null),\n            React.createElement(Main_1.default, null),\n            React.createElement(Footer_1.default, null),\n            React.createElement(\"div\", { id: 'copyrights' },\n                React.createElement(\"div\", { className: \"strike\" }),\n                React.createElement(\"p\", null, \"Bitcoin Studio - 2018\"),\n                React.createElement(\"p\", null,\n                    \"Icons made by \",\n                    React.createElement(\"a\", { href: \"https://www.flaticon.com/authors/eucalyp\", title: \"Eucalyp\" }, \"Eucalyp\"),\n                    \" from \",\n                    React.createElement(\"a\", { href: \"https://www.flaticon.com/\", title: \"Flaticon\" }, \"www.flaticon.com\"),\n                    \" is licensed by \",\n                    React.createElement(\"a\", { href: \"http://creativecommons.org/licenses/by/3.0/\", title: \"Creative Commons BY 3.0\", target: \"_blank\" }, \"CC 3.0 BY\")))));\n    }\n}\nexports.default = App;\n//# sourceMappingURL=App.js.map",
dependencies: ["react","./components/Header","./components/Main","./components/Footer"],
sourceMap: "{\"version\":3,\"file\":\"App.jsx\",\"sourceRoot\":\"\",\"sources\":[\"/src/App.tsx\"],\"names\":[],\"mappings\":\";;AAAA,+BAA8B;AAE9B,gDAAwC;AACxC,4CAAoC;AACpC,gDAAwC;AAKxC,SAAU,SAAQ,KAAK,CAAC,SAAS;IAC/B,MAAM;QACJ,OAAO,CACL,6BAAK,SAAS,EAAE,SAAS;YACvB,oBAAC,gBAAM,OAAE;YAET,oBAAC,cAAI,OAAE;YAEP,oBAAC,gBAAM,OAAE;YAET,6BAAK,EAAE,EAAE,YAAY;gBACnB,6BAAK,SAAS,EAAC,QAAQ,GAAO;gBAC9B,uDAA4B;gBAC5B;;oBAAiB,2BAAG,IAAI,EAAC,0CAA0C,EAAC,KAAK,EAAC,SAAS,cAAY;;oBAAM,2BACnG,IAAI,EAAC,2BAA2B,EAAC,KAAK,EAAC,UAAU,uBAAqB;;oBAAgB,2BACtF,IAAI,EAAC,6CAA6C,EAAC,KAAK,EAAC,yBAAyB,EAAC,MAAM,EAAC,QAAQ,gBAC5F,CAAI,CACR,CACF,CACP,CAAA;IACH,CAAC;CACF;AAED,kBAAe,GAAG,CAAA\",\"sourcesContent\":[\"import * as React from 'react'\\n\\nimport Header from './components/Header'\\nimport Main from './components/Main'\\nimport Footer from './components/Footer'\\n\\n/**\\n * Shell\\n */\\nclass App extends React.Component {\\n  render() {\\n    return (\\n      <div className={'wrapper'}>\\n        <Header/>\\n\\n        <Main/>\\n\\n        <Footer/>\\n\\n        <div id={'copyrights'}>\\n          <div className=\\\"strike\\\"></div>\\n          <p>Bitcoin Studio - 2018</p>\\n          <p>Icons made by <a href=\\\"https://www.flaticon.com/authors/eucalyp\\\" title=\\\"Eucalyp\\\">Eucalyp</a> from <a\\n            href=\\\"https://www.flaticon.com/\\\" title=\\\"Flaticon\\\">www.flaticon.com</a> is licensed by <a\\n            href=\\\"http://creativecommons.org/licenses/by/3.0/\\\" title=\\\"Creative Commons BY 3.0\\\" target=\\\"_blank\\\">CC 3.0\\n            BY</a></p>\\n        </div>\\n      </div>\\n    )\\n  }\\n}\\n\\nexport default App\"]}",
headerContent: undefined,
mtime: 1536678888720,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}