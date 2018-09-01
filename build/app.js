(function(FuseBox){FuseBox.$fuse$=FuseBox;
var __process_env__ = {"NODE_ENV":"development"};
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("index.jsx", function(exports, require, module, __filename, __dirname){
/* fuse:injection: */ var process = require("process");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
const React = require("react");
const ReactDOM = require("react-dom");
const App_1 = require("./App");
const serviceWorker = require("./serviceWorker");
require("normalize.css/normalize.css");
require("@blueprintjs/icons/lib/css/blueprint-icons.css");
require("@blueprintjs/core/lib/css/blueprint.css");
require("./global.css");
require("flexboxgrid/css/flexboxgrid.css");
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById('root'));
serviceWorker.unregister();
//# sourceMappingURL=index.js.map
});
___scope___.file("App.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Header_1 = require("./components/Header");
const Main_1 = require("./components/Main");
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement(Header_1.default, null),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: 'col-xs-10 col-xs-offset-1' },
                    React.createElement(Main_1.default, null)))));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map
});
___scope___.file("components/Header.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const fuse_react_1 = require("fuse-react");
class Header extends React.Component {
    render() {
        return (React.createElement("nav", { id: "nav" },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement(fuse_react_1.Link, { activeClassName: "active", to: "/" }, "Home")),
                React.createElement("li", null,
                    React.createElement(fuse_react_1.Link, { to: "/services" }, "Services")),
                React.createElement("li", null,
                    React.createElement(fuse_react_1.Link, { to: "/workshop-preregistration" }, "Worshops")),
                React.createElement("li", null,
                    React.createElement(fuse_react_1.Link, { to: "/ressources" }, "Ressources")),
                React.createElement("li", null,
                    React.createElement(fuse_react_1.Link, { to: "/about" }, "About")))));
    }
}
exports.default = Header;
//# sourceMappingURL=Header.js.map
});
___scope___.file("components/Main.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Home_1 = require("../pages/Home");
const Services_1 = require("../pages/Services");
const WorkshopPreRegistration_1 = require("../pages/WorkshopPreRegistration");
const Ressources_1 = require("../pages/Ressources");
const About_1 = require("../pages/About");
const fuse_react_1 = require("fuse-react");
class Main extends React.Component {
    render() {
        return (React.createElement("main", null,
            React.createElement(fuse_react_1.Switch, null,
                React.createElement(fuse_react_1.Route, { exact: true, path: '/', component: Home_1.default }),
                React.createElement(fuse_react_1.Route, { exact: true, path: '/services', component: Services_1.default }),
                React.createElement(fuse_react_1.Route, { exact: true, path: '/workshop-preregistration', component: WorkshopPreRegistration_1.default }),
                React.createElement(fuse_react_1.Route, { exact: true, path: '/ressources', component: Ressources_1.default }),
                React.createElement(fuse_react_1.Route, { exact: true, path: '/about', component: About_1.default }))));
    }
}
exports.default = Main;
//# sourceMappingURL=Main.js.map
});
___scope___.file("pages/Home.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Home extends React.Component {
    render() {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: 'col-xs-10 col-xs-offset-1' },
                React.createElement("h1", null, "Home"),
                React.createElement("div", { className: 'box' },
                    React.createElement("p", null, "Bitcoin expertise ...and more"),
                    React.createElement("p", null, "Extensive knowledge on blockchain tech"),
                    React.createElement("p", null, "A network of real experts")),
                React.createElement("h2", null, "Services"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "Bitcoin workshops",
                        React.createElement("ul", null,
                            React.createElement("li", null, "Practical: Bitcoin workshop 1 day"),
                            React.createElement("li", null, "Essentials: Bitcoin workshop 2 days"),
                            React.createElement("li", null, "In-depth: Bitcoin workshop 5 days"))),
                    React.createElement("li", null, "Consulting for companies"),
                    React.createElement("li", null, "Private consulting for individuals"),
                    React.createElement("li", null, "Custom Bitcoin development (layer 1, layer 2)"),
                    React.createElement("li", null, "Bitcoin server / node installation / Node as a service")))));
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map
});
___scope___.file("pages/Services.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Services extends React.Component {
    render() {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: 'col-xs-10 col-xs-offset-1' },
                React.createElement("h1", null, "Services"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "Bitcoin workshops",
                        React.createElement("ul", null,
                            React.createElement("li", null, "Practical: Bitcoin workshop 1 day"),
                            React.createElement("li", null, "Essentials: Bitcoin workshop 2 days"),
                            React.createElement("li", null, "In-depth: Bitcoin workshop 5 days"))),
                    React.createElement("li", null, "Consulting for companies"),
                    React.createElement("li", null, "Private consulting for individuals"),
                    React.createElement("li", null, "Custom Bitcoin development (layer 1, layer 2)"),
                    React.createElement("li", null, "Bitcoin server/node installation")),
                React.createElement("h2", null, "Consulting for companies"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Choose a technology for your need"),
                    React.createElement("li", null, "Bitcoin: architecture, custom development, complex transaction, scripts, \u2026"),
                    React.createElement("li", null, "System architecture"),
                    React.createElement("li", null, "Node installation (Bitcoin, LN, BTCPay, Tor) / System administration"),
                    React.createElement("li", null, "Node as a service")),
                React.createElement("h2", null, "Consulting for individuals"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Privately or in group"),
                    React.createElement("li", null, "Learn wallet/key management best practices"),
                    React.createElement("li", null, "General help, 1 day training"),
                    React.createElement("li", null, "Recover coins of bitcoin forks")))));
    }
}
exports.default = Services;
//# sourceMappingURL=Services.js.map
});
___scope___.file("pages/WorkshopPreRegistration.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FormWorkshop_1 = require("../components/FormWorkshop");
const bitcoin_essentials_png_1 = require("../img/bitcoin_essentials.png");
class WorkshopPreRegistration extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Workshop Pre-registration"),
            React.createElement("div", { className: "row tease" },
                React.createElement("div", { className: "col-xs" },
                    React.createElement("p", null, "25% off"),
                    React.createElement("p", null, "Sign Up!"),
                    React.createElement("p", null, "3 tickets for 2"),
                    React.createElement("p", null, "First session: 10 people"),
                    React.createElement("p", null, "Get refunded at any time"),
                    React.createElement("p", null, "Interested in Bitcoin and blockchain? Do you wonder how it works? Let\u2019s study the first, most mature, secure and decentralized blockchain that has given birth to a whole new industry! St\u00E9phane Roche/D10eConsulting offer you a 15 hours immersive course on Bitcoin (Practical, Essentials, In-depth)"),
                    React.createElement("p", null, " If you plan to work anywhere in the blockchain industry, mastering Bitcoin is an essential skill. It is the first of its kind, which means the most attacked and therefore the most robust blockchain. Main Bitcoin Core developers are highly experienced, the ecosystem is big, it has the biggest market capitalization, etc. More than 75% of the blockchains today are, directly or indirectly, software forks of Bitcoin (Litecoin, Dash, Zcash, Decred, Komodo, Factom, Particl, Dogecoin, and thousands of others). Working in the field but skipping Bitcoin is in our view irresponsible. Bitcoin is also a great start because it has the simplest protocol design, with a non-Turing-complete smart-contract functionality. Finally, Lightning Network, the new micropayment feature, should bring tremendous new business opportunities."))),
            "\u00A0 \u00A0",
            React.createElement("img", { className: "col-xs", src: bitcoin_essentials_png_1.default, alt: "bitcoin essential flyer" }),
            "\u00A0 \u00A0",
            React.createElement("div", { className: "offers" },
                React.createElement("div", { className: '' },
                    React.createElement("h2", null, "Practical: Bitcoin workshop 1 day"),
                    React.createElement("h3", null, "Price"),
                    React.createElement("p", null, "100\u20AC inc. VAT. Satisfied or refunded"),
                    React.createElement("h3", null, "Goals"),
                    React.createElement("p", null, "Focused on practical use of Bitcoin. Important things to know. Knowing where to search"),
                    React.createElement("h3", null, "Public and Prerequisite"),
                    React.createElement("p", null, "This workshop is a first hands-on Bitcoin. Accessible by everyone"),
                    React.createElement("h3", null, "Programme"),
                    React.createElement("p", null, "Wallet, key management, transaction, fees, Lightning Network instant payment. Q&A")),
                "\u00A0",
                React.createElement("div", null,
                    React.createElement("h2", null, "Essentials: Bitcoin workshop 2 days"),
                    React.createElement("h3", null, "Price"),
                    React.createElement("p", null, "369\u20AC inc. VAT. Satisfied or refunded"),
                    React.createElement("h3", null, "Goals"),
                    React.createElement("p", null, "Starts your Bitcoin journey on solid basis"),
                    React.createElement("h3", null, "Public and Prerequisite"),
                    React.createElement("p", null, "This workshop is intended to curious people wanting to better understand Bitcoin and blockchain technology. This workshop is technical but should stay accessible as long as you have a basic understanding of computer science. It is intended to all individuals wishing to deepen their knowledge of Bitcoin and blockchain technology, either you are a developer, product manager, attorney, designer, builder, entrepreneur, etc."),
                    React.createElement("h3", null, "Programme"),
                    React.createElement("p", null, "Focus on the essentials")),
                "\u00A0",
                React.createElement("div", null,
                    React.createElement("h2", null, "In-depth: Bitcoin workshop 5 days"),
                    React.createElement("h3", null, "Price"),
                    React.createElement("p", null, "500\u20AC inc. VAT. Satisfied or refunded"),
                    React.createElement("h3", null, "Goals"),
                    React.createElement("p", null, "In this course we will study the Bitcoin protocol quite in-depth and various other aspects like its historical context, the broader ecosystem, the socio-economic implications, the governance of open source decentralized systems, etc. You will also learn all the specific concepts and vocabulary used in this technology. Designed with an academic approach, we will alternate between theory and code practice (command line, Javascript, Python). This training will allow you to deeply understand and evaluate blockchain protocols and will provide you a solid basis to work on Bitcoin or on any blockchain."),
                    React.createElement("p", null, "Bitcoin In-depth is primarily intended to developers. Together we will explore the scripting language and Lightning Network. Focusing on the new Segregated Witness transaction format, we will learn how to construct regular transactions, P2WSH smart contracts, multi-signatures and timelock transactions; composing raw transactions and using Javascript libraries. Attendees are expected to master the main aspects of Bitcoin, otherwise it is recommended to take the Bitcoin Essentials course before. Also, in order to make sure that this course suits you well, you will have a small interview with our team."),
                    React.createElement("p", null, "After this course, you\u2019ll know everything you need to be able to separate fact from fiction when reading claims about Bitcoin and other cryptocurrencies. You\u2019ll have the conceptual foundations you need, and you\u2019ll be able to integrate ideas from Bitcoin in your own projects."),
                    React.createElement("h3", null, "Public and Prerequisite"),
                    React.createElement("p", null, "This course is intended to individuals that needs a deep-dive into Bitcoin protocols. Ideal if you already have a project, a business idea, or simply the strong desire to learn Bitcoin seriously."),
                    React.createElement("h3", null, "Programme"),
                    React.createElement("ul", null,
                        "General background",
                        React.createElement("li", null, "Emergence of cryptography"),
                        React.createElement("li", null, "The Cypherpunks movement"),
                        React.createElement("li", null, "Internet"),
                        React.createElement("li", null, "Blockchain ecosystem")),
                    React.createElement("ul", null,
                        "Bitcoin background",
                        React.createElement("li", null, "Project history"),
                        React.createElement("li", null, "Block size debate"),
                        React.createElement("li", null, "Main Core developers"),
                        React.createElement("li", null, "Ecosystem"),
                        React.createElement("li", null, "Governance model")),
                    React.createElement("ul", null,
                        "Cryptography 101",
                        React.createElement("li", null, "General cryptography concepts"),
                        React.createElement("li", null, "Symmetrical and asymmetrical encryption"),
                        React.createElement("li", null, "Digital signatures"),
                        React.createElement("li", null, "Hash functions"),
                        React.createElement("li", null, "Merkle trees, \u2026")),
                    React.createElement("ul", null,
                        "P2P network",
                        React.createElement("li", null, "Topology"),
                        React.createElement("li", null, "Different types of node")),
                    React.createElement("ul", null,
                        "Mining, consensus and forks",
                        React.createElement("li", null, "Proof of Work"),
                        React.createElement("li", null, "Blockchain mechanisms")),
                    React.createElement("ul", null,
                        "Wallets, keys and addresses",
                        React.createElement("li", null, "Elliptic curve digital signature algorithm (ECDSA)"),
                        React.createElement("li", null, "Bitcoin address"),
                        React.createElement("li", null, "HD wallets"),
                        React.createElement("li", null, "Mnemonic backup")),
                    React.createElement("ul", null,
                        "Transactions",
                        React.createElement("li", null, "Structure (input, output, witness)"),
                        React.createElement("li", null, "Signing and verification"),
                        React.createElement("li", null, "Different types (regular, smart contracts)"),
                        React.createElement("li", null, "Different versions (legacy, Segwit nested in legacy, native Segwit)"),
                        React.createElement("li", null, "Data recording output (colored coins)")),
                    React.createElement("ul", null,
                        "Advanced scripting and transactions",
                        React.createElement("li", null, "Main language opcodes"),
                        React.createElement("li", null, "P2WSH smart contracts"),
                        React.createElement("li", null, "Multi-signatures"),
                        React.createElement("li", null, "Timelocks"),
                        React.createElement("li", null, "Payment channels (Lightning Network)")))),
            "\u00A0",
            React.createElement("h3", null, "Form. BTCpay server / fiat"),
            React.createElement(FormWorkshop_1.FormWorkshop, null)));
    }
}
exports.default = WorkshopPreRegistration;
//# sourceMappingURL=WorkshopPreRegistration.js.map
});
___scope___.file("components/FormWorkshop.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@blueprintjs/core");
const docs_theme_1 = require("@blueprintjs/docs-theme");
const IntentSelect_1 = require("./IntentSelect");
class FormWorkshop extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            disabled: false,
            helperText: false,
            inline: false,
            intent: core_1.Intent.NONE,
            requiredLabel: true,
        };
        this.handleDisabledChange = docs_theme_1.handleBooleanChange(disabled => this.setState({ disabled }));
        this.handleHelperTextChange = docs_theme_1.handleBooleanChange(helperText => this.setState({ helperText }));
        this.handleInlineChange = docs_theme_1.handleBooleanChange(inline => this.setState({ inline }));
        this.handleRequiredLabelChange = docs_theme_1.handleBooleanChange(requiredLabel => this.setState({ requiredLabel }));
        this.handleIntentChange = docs_theme_1.handleStringChange((intent) => this.setState({ intent }));
    }
    render() {
        const { disabled, helperText, inline, intent, requiredLabel } = this.state;
        const options = (React.createElement(React.Fragment, null,
            React.createElement(core_1.H5, null, "Props"),
            React.createElement(core_1.Switch, { label: "Disabled", checked: disabled, onChange: this.handleDisabledChange }),
            React.createElement(core_1.Switch, { label: "Inline", checked: inline, onChange: this.handleInlineChange }),
            React.createElement(core_1.Switch, { label: "Show helper text", checked: helperText, onChange: this.handleHelperTextChange }),
            React.createElement(core_1.Switch, { label: "Show label info", checked: requiredLabel, onChange: this.handleRequiredLabelChange }),
            React.createElement(IntentSelect_1.IntentSelect, { intent: intent, onChange: this.handleIntentChange })));
        return (React.createElement(docs_theme_1.Example, Object.assign({ options: options }, this.props),
            React.createElement(core_1.FormGroup, { disabled: disabled, helperText: helperText && 'Helper text with details...', inline: inline, intent: intent, label: "Name", labelFor: "text-input", labelInfo: requiredLabel && '(required)' },
                React.createElement(core_1.InputGroup, { id: "text-input", placeholder: "Placeholder text", disabled: disabled, intent: intent })),
            React.createElement(core_1.FormGroup, { disabled: disabled, helperText: helperText && 'Helper text with details...', inline: inline, intent: intent, label: "Mail", labelFor: "text-input", labelInfo: requiredLabel && '(required)' },
                React.createElement(core_1.InputGroup, { id: "text-input", placeholder: "Placeholder text", disabled: disabled, intent: intent })),
            React.createElement(core_1.FormGroup, { disabled: disabled, helperText: helperText && 'Helper text with details...', inline: inline, intent: intent, label: "Additional info", labelFor: "text-input", labelInfo: requiredLabel && '(required)' },
                React.createElement(core_1.Switch, { id: "text-input", label: "Pay with Bitcoin?", disabled: disabled }),
                React.createElement(core_1.Switch, { id: "text-input", label: "Are you ready?", disabled: disabled }))));
    }
}
exports.FormWorkshop = FormWorkshop;
//# sourceMappingURL=FormWorkshop.js.map
});
___scope___.file("components/IntentSelect.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@blueprintjs/core");
const React = require("react");
const INTENTS = [
    { label: "None", value: core_1.Intent.NONE },
    { label: "Primary", value: core_1.Intent.PRIMARY },
    { label: "Success", value: core_1.Intent.SUCCESS },
    { label: "Warning", value: core_1.Intent.WARNING },
    { label: "Danger", value: core_1.Intent.DANGER },
];
exports.IntentSelect = props => (React.createElement(core_1.Label, null,
    "Intent",
    React.createElement(core_1.HTMLSelect, { value: props.intent, onChange: props.onChange, options: INTENTS })));
//# sourceMappingURL=intentSelect.js.map
});
___scope___.file("img/bitcoin_essentials.png", function(exports, require, module, __filename, __dirname){

});
___scope___.file("pages/Ressources.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Ressources extends React.Component {
    render() {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: 'col-xs-10 col-xs-offset-1' },
                React.createElement("h1", null, "Ressources"),
                React.createElement("p", null, "Workshop slides"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Keys, wallet, addresses"),
                    React.createElement("li", null, "Consensus, mining, forks"),
                    React.createElement("li", null, "All about transactions (legacy and segwit format)")))));
    }
}
exports.default = Ressources;
//# sourceMappingURL=Ressources.js.map
});
___scope___.file("pages/About.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class About extends React.Component {
    render() {
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: 'col-xs-10 col-xs-offset-1' },
                React.createElement("h1", null, "About"),
                React.createElement("p", null, "Over the past years, I have dedicated myself to P2P decentralized consensus systems, aka blockchain, (mainly Bitcoin and Ethereum) and became a strong advocate of crypto-anarchy. I highly appreciate working in a field at the crossroad of a multitude of varying disciplines, like computer science, economics, politics, game theory, cryptography, ... I founded D10e Consulting to offer blockchain technical trainings (Bitcoin, Ethereum and a variety of related topics) and application development on Bitcoin and Ethereum."),
                React.createElement("div", null,
                    React.createElement("ul", null,
                        React.createElement("li", null, "I start working on Bitcoin in 2015 at the Hardware wallet company Ledger."),
                        React.createElement("li", null, "Worked on Ethereum in 2016 - mid-2017"),
                        React.createElement("li", null, "Co-found the french non-profit organization Asseth to pomote Ethereum. Now the biggest non-profit across Europe. Did several talks, and did the website asseth.fr"),
                        React.createElement("li", null, "Research work on the UI of dao1901, using Web3 and state of the art Javascript librairies (React, Redux, Redux-sagas)"),
                        React.createElement("li", null, "Dether.io. Heavily involved in the making of the smart contracts and Javascript tests"),
                        React.createElement("li", null, "Bitcoin Workshops (Practical, Essentials, In-depth)"),
                        React.createElement("li", null, "Bitcoin development"))),
                React.createElement("p", null, "Contact form"))));
    }
}
exports.default = About;
//# sourceMappingURL=About.js.map
});
___scope___.file("serviceWorker.js", function(exports, require, module, __filename, __dirname){
/* fuse:injection: */ var process = require("process");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
        if (publicUrl.origin !== window.location.origin) {
            return;
        }
        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
            if (isLocalhost) {
                checkValidServiceWorker(swUrl, config);
                navigator.serviceWorker.ready.then(() => {
                    console.log('This web app is being served cache-first by a service ' +
                        'worker. To learn more, visit https://goo.gl/SC7cgQ');
                });
            }
            else {
                registerValidSW(swUrl, config);
            }
        });
    }
}
exports.register = register;
function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        console.log('New content is available; please refresh.');
                        if (config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    }
                    else {
                        console.log('Content is cached for offline use.');
                        if (config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    })
        .catch(error => {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl)
        .then(response => {
        if (response.status === 404 ||
            response.headers.get('content-type').indexOf('javascript') === -1) {
            navigator.serviceWorker.ready.then(registration => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        }
        else {
            registerValidSW(swUrl, config);
        }
    })
        .catch(() => {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
    }
}
exports.unregister = unregister;
//# sourceMappingURL=app.js.map
});
___scope___.file("global.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("global.css", "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n  background: #e4e8e9 url(/assets/background.jpg) repeat left top;\n\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n#nav {\n\n}\n\n#nav ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}")
});
return ___scope___.entry = "index.jsx";
});
FuseBox.pkg("fusebox-hot-reload", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
/**
 * @module listens to `source-changed` socket events and actions hot reload
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('fusebox-websocket').SocketClient, bundleErrors = {}, outputElement = document.createElement('div'), styleElement = document.createElement('style'), minimizeToggleId = 'fuse-box-toggle-minimized', hideButtonId = 'fuse-box-hide', expandedOutputClass = 'fuse-box-expanded-output', localStoragePrefix = '__fuse-box_';
function storeSetting(key, value) {
    localStorage[localStoragePrefix + key] = value;
}
function getSetting(key) {
    return localStorage[localStoragePrefix + key] === 'true' ? true : false;
}
var outputInBody = false, outputMinimized = getSetting(minimizeToggleId), outputHidden = false;
outputElement.id = 'fuse-box-output';
styleElement.innerHTML = "\n    #" + outputElement.id + ", #" + outputElement.id + " * {\n        box-sizing: border-box;\n    }\n    #" + outputElement.id + " {\n        z-index: 999999999999;\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        width: 400px;\n        overflow: auto;\n        background: #fdf3f1;\n        border: 1px solid #eca494;\n        border-radius: 5px;\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        box-shadow: 0px 3px 6px 1px rgba(0,0,0,.15);\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " {\n        height: auto;\n        width: auto;\n        left: 10px;\n        max-height: calc(100vh - 50px);\n    }\n    #" + outputElement.id + " .fuse-box-errors {\n        display: none;\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " .fuse-box-errors {\n        display: block;\n        border-top: 1px solid #eca494;\n        padding: 0 10px;\n    }\n    #" + outputElement.id + " button {\n        border: 1px solid #eca494;\n        padding: 5px 10px;\n        border-radius: 4px;\n        margin-left: 5px;\n        background-color: white;\n        color: black;\n        box-shadow: 0px 2px 2px 0px rgba(0,0,0,.05);\n    }\n    #" + outputElement.id + " .fuse-box-header {\n        padding: 10px;\n    }\n    #" + outputElement.id + " .fuse-box-header h4 {\n        display: inline-block;\n        margin: 4px;\n    }";
styleElement.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(styleElement);
function displayBundleErrors() {
    var errorMessages = Object.keys(bundleErrors).reduce(function (allMessages, bundleName) {
        var bundleMessages = bundleErrors[bundleName];
        return allMessages.concat(bundleMessages.map(function (message) {
            var messageOutput = message
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbps;&npbs;&nbps;')
                .replace(/ /g, '&nbsp;');
            return "<pre>" + messageOutput + "</pre>";
        }));
    }, []), errorOutput = errorMessages.join('');
    if (errorOutput && !outputHidden) {
        outputElement.innerHTML = "\n        <div class=\"fuse-box-header\" style=\"\">\n            <h4 style=\"\">Fuse Box Bundle Errors (" + errorMessages.length + "):</h4>\n            <div style=\"float: right;\">\n                <button id=\"" + minimizeToggleId + "\">" + (outputMinimized ? 'Expand' : 'Minimize') + "</button>\n                <button id=\"" + hideButtonId + "\">Hide</button>\n            </div>\n        </div>\n        <div class=\"fuse-box-errors\">\n            " + errorOutput + "\n        </div>\n        ";
        document.body.appendChild(outputElement);
        outputElement.className = outputMinimized ? '' : expandedOutputClass;
        outputInBody = true;
        document.getElementById(minimizeToggleId).onclick = function () {
            outputMinimized = !outputMinimized;
            storeSetting(minimizeToggleId, outputMinimized);
            displayBundleErrors();
        };
        document.getElementById(hideButtonId).onclick = function () {
            outputHidden = true;
            displayBundleErrors();
        };
    }
    else if (outputInBody) {
        document.body.removeChild(outputElement);
        outputInBody = false;
    }
}
exports.connect = function (port, uri, reloadFullPage) {
    if (FuseBox.isServer) {
        return;
    }
    port = port || window.location.port;
    var client = new Client({
        port: port,
        uri: uri,
    });
    client.connect();
    client.on('page-reload', function (data) {
        return window.location.reload();
    });
    client.on('page-hmr', function (data) {
        FuseBox.flush();
        FuseBox.dynamic(data.path, data.content);
        if (FuseBox.mainFile) {
            try {
                FuseBox.import(FuseBox.mainFile);
            }
            catch (e) {
                if (typeof e === 'string') {
                    if (/not found/.test(e)) {
                        return window.location.reload();
                    }
                }
                console.error(e);
            }
        }
    });
    client.on('source-changed', function (data) {
        console.info("%cupdate \"" + data.path + "\"", 'color: #237abe');
        if (reloadFullPage) {
            return window.location.reload();
        }
        /**
         * If a plugin handles this request then we don't have to do anything
         **/
        for (var index = 0; index < FuseBox.plugins.length; index++) {
            var plugin = FuseBox.plugins[index];
            if (plugin.hmrUpdate && plugin.hmrUpdate(data)) {
                return;
            }
        }
        if (data.type === "hosted-css") {
            var fileId = data.path.replace(/^\//, '').replace(/[\.\/]+/g, '-');
            var existing = document.getElementById(fileId);
            if (existing) {
                existing.setAttribute("href", data.path + "?" + new Date().getTime());
            }
            else {
                var node = document.createElement('link');
                node.id = fileId;
                node.type = 'text/css';
                node.rel = 'stylesheet';
                node.href = data.path;
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
        if (data.type === 'js' || data.type === "css") {
            FuseBox.flush();
            FuseBox.dynamic(data.path, data.content);
            if (FuseBox.mainFile) {
                try {
                    FuseBox.import(FuseBox.mainFile);
                }
                catch (e) {
                    if (typeof e === 'string') {
                        if (/not found/.test(e)) {
                            return window.location.reload();
                        }
                    }
                    console.error(e);
                }
            }
        }
    });
    client.on('error', function (error) {
        console.log(error);
    });
    client.on('bundle-error', function (_a) {
        var bundleName = _a.bundleName, message = _a.message;
        console.error("Bundle error in " + bundleName + ": " + message);
        var errorsForBundle = bundleErrors[bundleName] || [];
        errorsForBundle.push(message);
        bundleErrors[bundleName] = errorsForBundle;
        displayBundleErrors();
    });
    client.on('update-bundle-errors', function (_a) {
        var bundleName = _a.bundleName, messages = _a.messages;
        messages.forEach(function (message) { return console.error("Bundle error in " + bundleName + ": " + message); });
        bundleErrors[bundleName] = messages;
        displayBundleErrors();
    });
};

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-websocket", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require('events');
var SocketClient = /** @class */ (function () {
    function SocketClient(opts) {
        opts = opts || {};
        var port = opts.port || window.location.port;
        var protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
        var domain = location.hostname || 'localhost';
        this.url = opts.host || "" + protocol + domain + ":" + port;
        if (opts.uri) {
            this.url = opts.uri;
        }
        this.authSent = false;
        this.emitter = new events.EventEmitter();
    }
    SocketClient.prototype.reconnect = function (fn) {
        var _this = this;
        setTimeout(function () {
            _this.emitter.emit('reconnect', { message: 'Trying to reconnect' });
            _this.connect(fn);
        }, 5000);
    };
    SocketClient.prototype.on = function (event, fn) {
        this.emitter.on(event, fn);
    };
    SocketClient.prototype.connect = function (fn) {
        var _this = this;
        console.log('%cConnecting to fusebox HMR at ' + this.url, 'color: #237abe');
        setTimeout(function () {
            _this.client = new WebSocket(_this.url);
            _this.bindEvents(fn);
        }, 0);
    };
    SocketClient.prototype.close = function () {
        this.client.close();
    };
    SocketClient.prototype.send = function (eventName, data) {
        if (this.client.readyState === 1) {
            this.client.send(JSON.stringify({ event: eventName, data: data || {} }));
        }
    };
    SocketClient.prototype.error = function (data) {
        this.emitter.emit('error', data);
    };
    /** Wires up the socket client messages to be emitted on our event emitter */
    SocketClient.prototype.bindEvents = function (fn) {
        var _this = this;
        this.client.onopen = function (event) {
            console.log('%cConnected', 'color: #237abe');
            if (fn) {
                fn(_this);
            }
        };
        this.client.onerror = function (event) {
            _this.error({ reason: event.reason, message: 'Socket error' });
        };
        this.client.onclose = function (event) {
            _this.emitter.emit('close', { message: 'Socket closed' });
            if (event.code !== 1011) {
                _this.reconnect(fn);
            }
        };
        this.client.onmessage = function (event) {
            var data = event.data;
            if (data) {
                var item = JSON.parse(data);
                _this.emitter.emit(item.type, item.data);
                _this.emitter.emit('*', item);
            }
        };
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("events", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
if (FuseBox.isServer) {
    module.exports = global.require("events");
} else {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === "error") {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError("Uncaught, unspecified \"error\" event.");
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                    // slower
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit("newListener", type,
                isFunction(listener.listener) ?
                listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                    this._events[type].length);
                if (typeof console.trace === "function") {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit("removeListener", type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit("removeListener", type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };

    function isFunction(arg) {
        return typeof arg === "function";
    }

    function isNumber(arg) {
        return typeof arg === "number";
    }

    function isObject(arg) {
        return typeof arg === "object" && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }
}

});
return ___scope___.entry = "index.js";
});
FuseBox.import("fusebox-hot-reload").connect(3000, "", false)
FuseBox.target = "browser"

FuseBox.import("default/index.jsx");
FuseBox.main("default/index.jsx");
})
(FuseBox)
//# sourceMappingURL=app.js.map