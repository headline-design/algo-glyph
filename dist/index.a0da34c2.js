// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7rHbE":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "f62a8c7ba0da34c2";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"htEpl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _pipeline = require("@pipeline-ui-2/pipeline");
var _pipelineDefault = parcelHelpers.interopDefault(_pipeline);
var Buffer = require("buffer").Buffer;
const wallet = _pipelineDefault.default.init();
var lines = [];
var line = [];
let points = 0;
var mode = false;
var drawing = false;
var canvas = document.getElementById("canvas1");
var address = "";
canvas.addEventListener("mousedown", startDraw, false);
canvas.addEventListener("mousemove", continueDraw, false);
canvas.addEventListener("mouseup", endDraw, false);
document.getElementById("preview").onclick = ()=>preview(lines)
;
document.getElementById("bin2String").onclick = ()=>bin2String()
;
document.getElementById("algo").onclick = ()=>{
    _pipelineDefault.default.connect(wallet).then((data)=>{
        address = data;
        document.getElementById("address").innerText = address;
    });
};
document.getElementById("send").onclick = ()=>send()
;
document.getElementById("fetch").onclick = ()=>handleFetch(document.getElementById("fetchtxid").value)
;
var context = canvas.getContext('2d');
context.lineWidth = 8;
function startDraw(event) {
    if (mode === true) return;
    var pos = mouseXY(canvas, event);
    drawing = true;
    context.beginPath();
    context.moveTo(pos.x, pos.y);
    line = [];
    line.push([
        pos.x,
        pos.y
    ]);
}
function continueDraw(event) {
    if (drawing) {
        var pos = mouseXY(canvas, event);
        context.lineTo(pos.x, pos.y);
        context.stroke();
        context.beginPath();
        context.moveTo(pos.x, pos.y);
        line.push([
            pos.x,
            pos.y
        ]);
    }
}
function endDraw(event) {
    if (drawing) {
        var pos = mouseXY(canvas, event);
        context.lineTo(pos.x, pos.y);
        context.stroke();
        drawing = false;
        lines.push(compress(line));
        let L = lines.length;
        points += lines[L - 1].length;
        document.getElementById("points").innerText = "Points: " + points + " Bytes: " + points * 2;
    }
}
function compress(array) {
    let newline = [];
    for(let i = 0; i < array.length; i += 6){
        let xnew = (array[i][0] / canvas.width * 254).toFixed();
        let ynew = (array[i][1] / canvas.height * 254).toFixed();
        newline.push([
            xnew < 255 ? xnew : 254,
            ynew < 255 ? ynew : 254
        ]);
    }
    return newline;
}
function mouseXY(c, e) {
    var r = c.getBoundingClientRect();
    return {
        x: e.clientX - r.left,
        y: e.clientY - r.top
    };
}
function preview(linesb) {
    let canvas2 = document.getElementById("canvas2");
    let ctx2 = canvas2.getContext('2d');
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    console.log(linesb);
    for(let i = 0; i < linesb.length; i++)drawConstructed(linesb[i]);
}
function drawConstructed(array) {
    let canvas2 = document.getElementById("canvas2");
    let ctx2 = canvas2.getContext('2d');
    ctx2.beginPath();
    ctx2.moveTo(array[0][0] / 255 * canvas2.width, array[0][1] / 255 * canvas2.height);
    for(pt = 1; pt < array.length; pt++){
        var point = array[pt];
        ctx2.lineTo(point[0] / 255 * canvas2.width, point[1] / 255 * canvas2.height);
    }
    ctx2.lineWidth = 8;
    ctx2.lineCap = 'round';
    ctx2.stroke();
}
function bin2String() {
    for(i = 0; i < lines.length - 1; i++)lines[i].push("255");
    let array2 = lines.flat(6);
    console.log(array2);
    let data = String.fromCharCode.apply(String, array2);
    document.getElementById("code").innerText = data;
    return data;
}
async function fetchNote(txid) {
    let indexerURL = 'https://';
    if (_pipelineDefault.default.main == true) indexerURL = indexerURL + 'algoexplorerapi.io/idx2/v2/transactions/';
    else indexerURL = indexerURL + "testnet.algoexplorerapi.io/idx2/v2/transactions/";
    let url2 = indexerURL + txid;
    try {
        let data = await fetch(url2);
        let data2 = await data.json();
        let data3 = data2.transaction.note;
        return data3;
    } catch (error) {
        console.log(error);
    }
}
function handleFetch(noteTxID) {
    fetchNote(noteTxID).then((response)=>{
        let datab = base64ToArrayBuffer(response);
        drawData(datab);
    });
}
function base64ToArrayBuffer(data) {
    let newData = Buffer.from(data, 'base64');
    console.log(newData);
    return newData;
}
function drawData(input) {
    let newlines = [];
    let subarray = [];
    for(let i = 0; i < input.length; i += 2)if (input[i] !== 255) subarray.push([
        input[i],
        input[i + 1]
    ]);
    else {
        newlines.push(subarray);
        subarray = [];
        i -= 1;
    }
    newlines.push(subarray);
    console.log(newlines);
    preview(newlines);
}
function send() {
    _pipelineDefault.default.send(document.getElementById("recipient").value, 0, document.getElementById("note").value, address, wallet, 0).then((data)=>{
        console.log(data);
    });
}

},{"buffer":"8iVrL","@pipeline-ui-2/pipeline":"d4Yso","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"8iVrL":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength1(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength1(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength1;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i1;
    if (dir) {
        var foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 256))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"7YkGm","ieee754":"4iMvP"}],"7YkGm":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i1 = 0, len1 = code.length; i1 < len1; ++i1){
    lookup[i1] = code[i1];
    revLookup[code.charCodeAt(i1)] = i1;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"4iMvP":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"d4Yso":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _myalgoConnect = require("@randlabs/myalgo-connect");
var _myalgoConnectDefault = parcelHelpers.interopDefault(_myalgoConnect);
var _client = require("@walletconnect/client");
var _clientDefault = parcelHelpers.interopDefault(_client);
var _algorandWalletconnectQrcodeModal = require("algorand-walletconnect-qrcode-modal");
var _algorandWalletconnectQrcodeModalDefault = parcelHelpers.interopDefault(_algorandWalletconnectQrcodeModal);
var _utils = require("@json-rpc-tools/utils");
var _algoMsgpackWithBigint = require("algo-msgpack-with-bigint");
var _hiBase32 = require("hi-base32");
var _hiBase32Default = parcelHelpers.interopDefault(_hiBase32);
var _cachedKeyDecoder = require("algo-msgpack-with-bigint/dist/CachedKeyDecoder");
var Buffer = require("buffer").Buffer;
class Pipeline {
    static init() {
        this.EnableDeveloperAPI = false;
        this.indexer = "http://localhost:8980";
        this.algod = "http://localhost:4001";
        this.token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        this.devGenHash = "sC3P7e2SdbqKJK0tbiCdK9tdSpbe6XeCGKdoNzmlj0E=";
        this.devGenId = "devnet-v1.0";
        this.index = 0;
        this.pipeConnector = "myAlgoWallet";
        this.main = true;
        this.address = "";
        this.txID = "";
        this.myBalance = 0;
        this.connector = new _clientDefault.default({
            bridge: "https://bridge.walletconnect.org",
            qrcodeModal: _algorandWalletconnectQrcodeModalDefault.default
        });
        return new _myalgoConnectDefault.default();
    }
    static async balance(address) {
        let indexerURL = 'https://';
        if (this.main == true) indexerURL = indexerURL + 'algoexplorerapi.io/idx2/v2/accounts/';
        else indexerURL = indexerURL + "testnet.algoexplorerapi.io/idx2/v2/accounts/";
        if (this.EnableDeveloperAPI === true) indexerURL = this.indexer + "/v2/accounts/";
        let url2 = indexerURL + address;
        try {
            let data = await fetch(url2);
            let data2 = await data.json();
            let data3 = JSON.stringify(data2.account.amount / 1000000);
            this.myBalance = data3;
            return data3;
        } catch (error) {
            console.log(error);
            return 0;
        }
    }
    static async connect(wallet) {
        this.address = "";
        switch(this.pipeConnector){
            case "myAlgoWallet":
                try {
                    const accounts = await wallet.connect();
                    let item1 = accounts[0];
                    item1 = item1['address'];
                    this.address = item1;
                    return item1;
                } catch (err) {
                    console.error(err);
                }
                break;
            case "WalletConnect":
                this.connector.on("connect", (error, payload)=>{
                    if (error) throw error;
                    this.address = payload.params[0].accounts[0];
                });
                this.connector.on("session_update", (error, payload)=>{
                    alert(error + payload);
                    if (error) throw error;
                // Get updated accounts 
                });
                if (!this.connector.connected) await this.connector.createSession().then((data)=>{
                    console.log(data);
                });
                else this.address = this.connector.accounts[0];
                break;
            case "AlgoSigner":
                if (typeof AlgoSigner !== 'undefined') {
                    await AlgoSigner.connect();
                    let data = await AlgoSigner.accounts({
                        ledger: this.main === true ? 'MainNet' : 'TestNet'
                    });
                    let SignerAdd = data[0].address;
                    this.address = SignerAdd;
                    return SignerAdd;
                } else alert('AlgoSigner is NOT installed.');
                break;
            default:
                break;
        }
        function waitForAddress() {
            return new Promise((resolve)=>{
                var start_time = Date.now();
                function checkFlag() {
                    if (Pipeline.address !== "") resolve(Pipeline.address);
                    else if (Date.now() > start_time + 60000) resolve("error occurred");
                    else window.setTimeout(checkFlag, 200);
                }
                checkFlag();
            });
        }
        const address = await waitForAddress();
        return address;
    }
    static async walletConnectSign(mytxnb) {
        let prototxn = {
            "amt": mytxnb.amount,
            "fee": 1000,
            "fv": mytxnb.lastRound - 1000,
            "gen": mytxnb.genesisID,
            "gh": new Uint8Array(Buffer.from(mytxnb.genesisHash, 'base64')),
            "lv": mytxnb.lastRound,
            "note": mytxnb.note,
            "rcv": new Uint8Array(_hiBase32Default.default.decode.asBytes(mytxnb.to).slice(0, 32)),
            "snd": new Uint8Array(_hiBase32Default.default.decode.asBytes(this.address).slice(0, 32)),
            "type": "pay"
        };
        let prototxnASA = {
        };
        let prototxnb = _algoMsgpackWithBigint.encode(prototxn);
        let txns = [];
        txns[0] = prototxnb;
        if (this.index !== 0) {
            prototxnASA = {
                "aamt": mytxnb.amount,
                "arcv": new Uint8Array(_hiBase32Default.default.decode.asBytes(mytxnb.to).slice(0, 32)),
                "fee": 1000,
                "fv": mytxnb.lastRound - 1000,
                "gen": mytxnb.genesisID,
                "gh": new Uint8Array(Buffer.from(mytxnb.genesisHash, 'base64')),
                "lv": mytxnb.lastRound,
                "note": mytxnb.note,
                "snd": new Uint8Array(_hiBase32Default.default.decode.asBytes(this.address).slice(0, 32)),
                "type": "axfer",
                "xaid": parseInt(mytxnb.assetIndex)
            };
            prototxnb = _algoMsgpackWithBigint.encode(prototxnASA);
            txns[0] = prototxnb;
        }
        /*
                console.log(prototxnb)
                console.log(new TextDecoder().decode(prototxnb))
                console.log(JSON.stringify(decode(prototxnb)))
        */ // Sign transaction
        const txnsToSign = txns.map((txnb)=>{
            const encodedTxn = Buffer.from(txnb).toString("base64");
            if (this.pipeConnetor === "WalletConnect") return {
                txn: encodedTxn,
                message: 'Description of transaction being signed'
            };
            else return {
                txn: encodedTxn
            };
        });
        const requestParams = [
            txnsToSign
        ];
        console.log(requestParams);
        if (this.pipeConnector === "WalletConnect") {
            var request = _utils.formatJsonRpcRequest("algo_signTxn", requestParams);
            request.id = this.connector._handshakeId;
            console.log(request);
            try {
                const result = await this.connector.sendCustomRequest(request);
                const signedPartialTxn = result[0];
                const rawSignedTxn = Buffer.from(signedPartialTxn, "base64");
                return new Uint8Array(rawSignedTxn);
            } catch (error) {
                console.log(error);
            }
        } else try {
            const result = await AlgoSigner.signTxn(requestParams);
            const signedPartialTxn = result[0].blob;
            const rawSignedTxn = Buffer.from(signedPartialTxn, "base64");
            return new Uint8Array(rawSignedTxn);
        } catch (error) {
            console.log(error);
        }
    }
    static async send(address1, amt, myNote, _sendingAddress, wallet1, index = 0) {
        let paramServer = 'https://';
        let transServer = 'https://';
        if (this.main == true) {
            paramServer = paramServer + 'algoexplorerapi.io/v2/transactions/params/';
            transServer = transServer + 'algoexplorerapi.io/v2/transactions/';
        } else {
            paramServer = paramServer + "testnet.algoexplorerapi.io/v2/transactions/params/";
            transServer = transServer + "testnet.algoexplorerapi.io/v2/transactions/";
        }
        if (this.EnableDeveloperAPI === true) {
            paramServer = this.algod + "/v2/transactions/params/";
            transServer = this.algod + "/v2/transactions/";
        }
        var buf = new Array(myNote.length);
        var encodedNote = new Uint8Array(buf);
        for(var i = 0, strLen = myNote.length; i < strLen; i++)encodedNote[i] = myNote.charCodeAt(i);
        console.log('My encoded note: ' + encodedNote);
        try {
            let params = {
            };
            if (this.EnableDeveloperAPI === false) params = await (await fetch(paramServer)).json();
            else {
                params = await (await fetch(paramServer, {
                    method: "GET",
                    headers: {
                        'X-Algo-API-Token': this.token
                    }
                })).json();
                console.log("Params: " + JSON.stringify(params));
            }
            let txn = {
                from: this.address,
                to: address1,
                amount: parseInt(amt),
                note: encodedNote,
                genesisID: 'mainnet-v1.0',
                genesisHash: 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
                type: 'pay',
                flatFee: true,
                fee: 1000,
                firstRound: params['last-round'],
                lastRound: params['last-round'] + 1000
            };
            if (index !== 0) {
                this.index = index;
                txn.type = 'axfer';
                txn.assetIndex = parseInt(index);
            }
            if (this.main == false) {
                txn.genesisID = 'testnet-v1.0';
                txn.genesisHash = 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=';
            }
            if (this.EnableDeveloperAPI === true) {
                txn.genesisID = this.devGenId;
                txn.genesisHash = this.devGenHash;
            }
            console.log(txn);
            let signedTxn = {
            };
            if (this.pipeConnector === "myAlgoWallet") {
                signedTxn = await wallet1.signTransaction(txn);
                signedTxn = signedTxn.blob;
            } else {
                signedTxn = await this.walletConnectSign(txn);
                if (this.pipeConnector === "AlgoSigner") console.log(signedTxn);
            }
            console.log(signedTxn);
            let requestHeaders = {
                'Content-Type': 'application/x-binary'
            };
            if (this.EnableDeveloperAPI === true) requestHeaders = {
                'X-Algo-API-Token': this.token
            };
            let transactionID = await fetch(transServer, {
                method: 'POST',
                headers: requestHeaders,
                body: signedTxn
            }).then((response)=>response.json()
            ).then((data)=>{
                return data.txId;
            }).catch((error)=>{
                console.error('Error:', error);
            });
            this.txID = transactionID;
            if (transactionID === undefined) transactionID = "Transaction failed";
            return transactionID;
        } catch (err) {
            console.error(err);
        }
    }
} /* usage

update balance at intervals:

componentDidMount() {
      this.interval = setInterval(() => this.setState({balance: Pipeline.myBalance}), 1000);
    }

var balance = 0;

Pipeline.balance(address).then(data => balance = data);

const myAlgoWallet = Pipeline.init();

//useTestNet

Pipeline.main = false;

Pipeline.connect(myAlgoWallet)
    .then(data => {
        console.log(data);
    });

Pipeline.send(address, amount, note, sendingAddress, myAlgowallet, index)
    .then(data => {
        console.log(data);
    });

    */ 
exports.default = Pipeline;

},{"buffer":"8iVrL","@randlabs/myalgo-connect":"69CSw","@walletconnect/client":"45vRn","algorand-walletconnect-qrcode-modal":"j4jRI","@json-rpc-tools/utils":"c7Wrj","algo-msgpack-with-bigint":"jMzdH","hi-base32":"3lKGd","algo-msgpack-with-bigint/dist/CachedKeyDecoder":"hmEJq","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"69CSw":[function(require,module,exports) {
module.exports = require("./lib/main");

},{"./lib/main":"i8ddt"}],"i8ddt":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
const { openPopup  } = require("./popup/popup");
const { sleep , prepareTxn  } = require("./utils/utils");
const Errors = require("./utils/errors");
const Messaging = require("./messaging/Messaging");
const bridge = new Messaging();
/**
 * @description Transaction hash
 * @typedef TxHash
 * @type {string}
 */ /**
 * @description Base64 string
 * @typedef Base64
 * @type {string}
 */ /**
  * @description Options
  * @typedef Options
  * @type {object}
  * @property {string} [bridgeUrl] Override wallet.myalgo.com default frame url.
  * @property {number} [timeout] Number of msec to wait the popup response, default value: 1600000 msec.
  */ /**
 * @description Algorand account address
 * @typedef Address
 * @type {string}
 */ /**
 * @description Payment transaction object
 * @typedef PaymentTxn
 * @type {object}
 * @property {"pay"} type Transaction type
 * @property {Address} from Sender Address
 * @property {Address} [to] Receiver Address
 * @property {number} fee Transaction fee (in mAlgos)
 * @property {number} [amount] Amount to transfer (in mAlgos)
 * @property {number} firstRound First block round
 * @property {number} lastRound Last block round
 * @property {Uint8Array|Base64} [note] Transaction note
 * @property {string} genesisID Algorand network genesis ID
 * @property {string} genesisHash Algorand network genesis hash
 * @property {Address} [reKeyTo] Change signer address
 * @property {boolean} [flatFee] flatFee (default: false)
 * @property {Buffer|Base64} [group] Group id
 * @property {Address} [closeRemainderTo] Close remainder to address
 */ /**
 * @description Asset transfer transaction object
 * @typedef AssetTransferTxn
 * @type {object}
 * @property {"axfer"} type Transaction type
 * @property {Address} from Sender Address
 * @property {Address} [to] Receiver Address
 * @property {number} fee Transaction fee (in mAlgos)
 * @property {number} [amount] Amount to transfer (in mAlgos)
 * @property {number} firstRound First block round
 * @property {number} lastRound Last block round
 * @property {Uint8Array|Base64} [note] Transaction note
 * @property {string} genesisID Algorand network genesis ID
 * @property {string} genesisHash Algorand network genesis hash
 * @property {Address} [reKeyTo] Change signer address
 * @property {boolean} [flatFee] flatFee (default: false)
 * @property {Address} [signer] Signer address
 * @property {Buffer|Base64} [group] Group id
 * @property {Address} [closeRemainderTo] Close remainder to address
 * @property {number} [assetIndex] Asset index
 * @property {Address} [assetRevocationTarget] Asset revocation address
 */ /**
 * @description Asset configuration transaction object
 * @typedef AssetConfigTxn
 * @type {object}
 * @property {"acfg"} type Transaction type
 * @property {Address} from Sender Address
 * @property {number} fee Transaction fee (in mAlgos)
 * @property {number} firstRound First block round
 * @property {number} lastRound Last block round
 * @property {Uint8Array|Base64} [note] Transaction note
 * @property {string} genesisID Algorand network genesis ID
 * @property {string} genesisHash Algorand network genesis hash
 * @property {Address} [reKeyTo] Change signer address
 * @property {boolean} [flatFee] flatFee (default: false)
 * @property {Address} [signer] Signer address
 * @property {Buffer|Base64} [group] Group id
 * @property {number} [assetIndex] Asset index
 * @property {number} [assetTotal] Asset total supply
 * @property {number} [assetDecimals] Asset decimals
 * @property {boolean} [assetDefaultFrozen] Default frozen
 * @property {Address} [assetManager] Asset manager address
 * @property {Address} [assetReserve] Asset reserve address
 * @property {Address} [assetFreeze] Asset freeze address
 * @property {Address} [assetClawback] Asset clawback address
 * @property {string} [assetUnitName] Asset unit name
 * @property {string} [assetName] Asset name
 * @property {string} [assetURL] Asset url
 * @property {string} [assetMetadataHash] Asset metadata hash
 * @property {boolean} [strictEmptyAddressChecking]
 */ /**
 * @description Key registration transaction object
 * @typedef KeyRegTxn
 * @type {object}
 * @property {"keyreg"} type Transaction type
 * @property {Address} from Sender Address
 * @property {number} fee Transaction fee (in mAlgos)
 * @property {number} firstRound First block round
 * @property {number} lastRound Last block round
 * @property {Uint8Array|Base64} [note] Transaction note
 * @property {string} genesisID Algorand network genesis ID
 * @property {string} genesisHash Algorand network genesis hash
 * @property {Address} [reKeyTo] Change signer address
 * @property {boolean} [flatFee] flatFee (default: false)
 * @property {Address} [signer] Signer address
 * @property {Buffer|Base64} [group] Group id
 * @property {string} [voteKey] Vote key
 * @property {string} [selectionKey] Selection key
 * @property {number} voteFirst Vote first round
 * @property {number} voteLast Vote last round
 * @property {number} [voteKeyDilution] Vote key dilution
 */ /**
 * @description Application call transaction object
 * @typedef ApplicationTxn
 * @type {object}
 * @property {"appl"} type Transaction type
 * @property {Address} from Sender Address
 * @property {number} fee Transaction fee (in mAlgos)
 * @property {number} firstRound First block round
 * @property {number} lastRound Last block round
 * @property {Uint8Array|Base64} [note] Transaction note
 * @property {string} genesisID Algorand network genesis ID
 * @property {string} genesisHash Algorand network genesis hash
 * @property {Address} [reKeyTo] Change signer address
 * @property {boolean} [flatFee] flatFee (default: false)
 * @property {Address} [signer] Signer address
 * @property {Buffer|Base64} [group] Group id
 * @property {number} [appIndex] Application id
 * @property {0|1|2|3|4|5} [appOnComplete]
 * @property {number} [appLocalInts]
 * @property {number} [appLocalByteSlices]
 * @property {number} [appGlobalInts]
 * @property {number} [appGlobalByteSlices]
 * @property {Uint8Array|Base64} [appApprovalProgram]
 * @property {Uint8Array|Base64} [appClearProgram]
 * @property {Uint8Array[]|Base64[]} [appArgs]
 * @property {Address[]} [appAccounts]
 * @property {number[]} [appForeignApps]
 * @property {number[]} [appForeignAssets]
 */ /**
 * @description Transaction Object
 * @typedef Transaction
 * @type {PaymentTxn | AssetTransferTxn | AssetConfigTxn | KeyRegTxn | ApplicationTxn}
 */ /**
 * @typedef EncodedTransaction
 * @type {Uint8Array|Base64} Algorand Encoded Transaction
 */ /**
 * @typedef SignedTx
 * @type {object}
 * @property {TxHash} txID Transaction hash
 * @property {Uint8Array} blob Signed transaction
 */ class MyAlgoConnect {
    /**
	 * @constructor
	 * @param {Options} [options] Operation options
	 */ constructor(options){
        /**
		 * @access private
		 * @type {Messaging}
		 */ this.bridge = bridge;
        /**
		 * @access private
		 * @type {number} Popup Timeout
		 */ this.timeout = options && options.timeout ? options.timeout : 1600000;
        /**
		 * @access private
		 * @type {string} Frame url
		 */ this.url = options && options.bridgeUrl ? options.bridgeUrl : "https://wallet.myalgo.com/bridge";
        if (this.url.endsWith("/")) this.url = this.url.slice(0, -1);
        /**
		 * @access private
		 * @description This is used to reuse the current connect opened popup
		 * @type {Window|null}
		 */ this.currentConnectPopup = null;
        /**
		 * @access private
		 * @description This is used to reuse the current signtx opened popup
		 * @type {Window|null}
		 */ this.currentSigntxPopup = null;
        /**
		 * @access private
		 * @description This is used to reuse the current signlogic opened popup
		 * @type {Window|null}
		 */ this.currentSignLogicSigPopup = null;
    }
    /**
	 * @async
	 * @access public
	 * @description Open a new window to load accounts from storage.
	 * @param {ConnectionSettings} settings Connect settings
	 * @returns {Promise<string[]>} Returns allowed accounts by the user.
	 */ async connect(settings = {
        shouldSelectOneAccount: false
    }) {
        if (this.currentConnectPopup) {
            this.currentConnectPopup.focus();
            throw new Error(Errors.WINDOW_IS_OPENED);
        }
        try {
            this.currentConnectPopup = openPopup(this.url + "/connect.html");
            await this.waitForWindowToLoad(this.currentConnectPopup);
            const res = await this.bridge.sendMessage(this.currentConnectPopup, {
                method: "unlock",
                params: {
                    shouldSelectOneAccount: settings.shouldSelectOneAccount
                }
            }, this.url, {
                waitForReply: true,
                timeout: this.timeout
            });
            if (this.currentConnectPopup) this.currentConnectPopup.close();
            this.currentConnectPopup = null;
            if (res.status === "error") throw new Error(res.message);
            this.currentConnectPopup = null;
            return res.data.accounts;
        } catch (err) {
            if (this.currentConnectPopup) this.currentConnectPopup.close();
            this.currentConnectPopup = null;
            throw err;
        }
    }
    /**
	 * @async
	 * @access public
	 * @description Open a new window to sign transaction.
	 * @param {Transaction|Transaction[]|EncodedTransaction|EncodedTransaction[]} transaction Transaction object or a Transaction array.
	 * (The signer account must be the same for all transactions).
	 * @returns {(SignedTx|SignedTx[])} Returns transaction blob or an Array of blobs, depends if the
	 * transaction was an object or an array.
	 */ async signTransaction(transaction) {
        let txn;
        if (Array.isArray(transaction)) txn = Array.from(transaction).map((tx)=>prepareTxn(tx)
        );
        else txn = prepareTxn(transaction);
        if (this.currentSigntxPopup) {
            this.currentSigntxPopup.focus();
            throw new Error(Errors.WINDOW_IS_OPENED);
        }
        try {
            this.currentSigntxPopup = openPopup(this.url + "/signtx.html");
            await this.waitForWindowToLoad(this.currentSigntxPopup);
            // Send transaction info
            const res = await this.bridge.sendMessage(this.currentSigntxPopup, {
                method: "transaction",
                params: {
                    txn
                }
            }, this.url, {
                waitForReply: true,
                timeout: this.timeout
            });
            if (this.currentSigntxPopup) this.currentSigntxPopup.close();
            this.currentSigntxPopup = null;
            if (res.status === "error") throw new Error(res.message);
            if (Array.isArray(res.data)) {
                const result = [];
                for (const t of res.data){
                    t.blob = new Uint8Array(Buffer.from(t.blob, "hex"));
                    result.push(t);
                }
                return result;
            }
            res.data.blob = new Uint8Array(Buffer.from(res.data.blob, "hex"));
            return res.data;
        } catch (err) {
            if (this.currentSigntxPopup) this.currentSigntxPopup.close();
            this.currentSigntxPopup = null;
            throw err;
        }
    }
    /**
	 * @async
	 * @access public
	 * @description Open a new window to sign a teal program.
	 * @param {Uint8Array|Base64} logic LogicSig program
	 * @param {Address} address Signer Address
	 * @returns {Uint8Array} Returns logicsig blob
	 */ async signLogicSig(logic, address) {
        if (this.currentSignLogicSigPopup) {
            this.currentSignLogicSigPopup.focus();
            throw new Error(Errors.WINDOW_IS_OPENED);
        }
        try {
            this.currentSignLogicSigPopup = openPopup(this.url + "/logicsigtx.html");
            await this.waitForWindowToLoad(this.currentSignLogicSigPopup);
            // Send program
            let logicInBase64 = logic;
            if (logic.constructor === Uint8Array) logicInBase64 = Buffer.from(logic).toString("base64");
            const res = await this.bridge.sendMessage(this.currentSignLogicSigPopup, {
                method: "logicsig",
                params: {
                    logic: logicInBase64,
                    address
                }
            }, this.url, {
                waitForReply: true,
                timeout: this.timeout
            });
            if (this.currentSignLogicSigPopup) this.currentSignLogicSigPopup.close();
            this.currentSignLogicSigPopup = null;
            if (res.status === "error") throw new Error(res.message);
            return new Uint8Array(Buffer.from(res.data.signedTeal, "base64"));
        } catch (err) {
            if (this.currentSignLogicSigPopup) this.currentSignLogicSigPopup.close();
            this.currentSignLogicSigPopup = null;
            throw err;
        }
    }
    /**
	 * @async
	 * @access private
	 * @description Wait until the window opened loads.
	 * @param {Window} targetWindow Window opened context.
	 * @param {number} retries Times to retry before throw an error.
	 * @returns {Promise<void>} Throw error if the window does not load.
	 */ async waitForWindowToLoad(targetWindow, retries = 30) {
        for(let i = 0; i < retries; i++){
            await sleep(300);
            if (!targetWindow) break;
            try {
                const res = await bridge.sendMessage(targetWindow, {
                    method: "status"
                }, this.url);
                if (res.status == "success") return;
            } catch (err) {
            // Ignore error
            }
        }
        throw new Error(Errors.WINDOW_NOT_LOADED);
    }
}
module.exports = MyAlgoConnect;

},{"buffer":"8iVrL","./popup/popup":"6yPGd","./utils/utils":"3Zkn4","./utils/errors":"7V7Ax","./messaging/Messaging":"8rykV"}],"6yPGd":[function(require,module,exports) {
const dom = require("belter");
const defaultOptions = {
    width: 400,
    height: 600
};
/**
 * @description Open a new window
 * @param {string} url window url
 * @returns {Window} Returns window object
 */ function openPopup(url) {
    return dom.popup(url, defaultOptions);
}
module.exports = {
    openPopup
};

},{"belter":"Ek6xE"}],"Ek6xE":[function(require,module,exports) {
/* @flow */ // $FlowFixMe
module.exports = require('./dist/belter'); // eslint-disable-line import/no-commonjs

},{"./dist/belter":"h8r6c"}],"h8r6c":[function(require,module,exports) {
var process = require("process");
var Buffer = require("buffer").Buffer;
var global1 = arguments[3];
!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("belter", [], factory) : "object" == typeof exports ? exports.belter = factory() : root.belter = factory();
}("undefined" != typeof self ? self : this, function() {
    return (function(modules) {
        var installedModules = {
        };
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {
                }
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.r = function(exports) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        };
        __webpack_require__.t = function(value, mode) {
            1 & mode && (value = __webpack_require__(value));
            if (8 & mode) return value;
            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: !0,
                value: value
            });
            if (2 & mode && "string" != typeof value) for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return ({
            }).hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 0);
    })([
        function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "getUserAgent", function() {
                return getUserAgent;
            });
            __webpack_require__.d(__webpack_exports__, "isDevice", function() {
                return isDevice;
            });
            __webpack_require__.d(__webpack_exports__, "isTablet", function() {
                return isTablet;
            });
            __webpack_require__.d(__webpack_exports__, "isWebView", function() {
                return isWebView;
            });
            __webpack_require__.d(__webpack_exports__, "isStandAlone", function() {
                return isStandAlone;
            });
            __webpack_require__.d(__webpack_exports__, "isFacebookWebView", function() {
                return isFacebookWebView;
            });
            __webpack_require__.d(__webpack_exports__, "isFirefox", function() {
                return isFirefox;
            });
            __webpack_require__.d(__webpack_exports__, "isFirefoxIOS", function() {
                return isFirefoxIOS;
            });
            __webpack_require__.d(__webpack_exports__, "isEdgeIOS", function() {
                return isEdgeIOS;
            });
            __webpack_require__.d(__webpack_exports__, "isOperaMini", function() {
                return isOperaMini;
            });
            __webpack_require__.d(__webpack_exports__, "isAndroid", function() {
                return isAndroid;
            });
            __webpack_require__.d(__webpack_exports__, "isIos", function() {
                return isIos;
            });
            __webpack_require__.d(__webpack_exports__, "isGoogleSearchApp", function() {
                return isGoogleSearchApp;
            });
            __webpack_require__.d(__webpack_exports__, "isQQBrowser", function() {
                return isQQBrowser;
            });
            __webpack_require__.d(__webpack_exports__, "isIosWebview", function() {
                return isIosWebview;
            });
            __webpack_require__.d(__webpack_exports__, "isSFVC", function() {
                return isSFVC;
            });
            __webpack_require__.d(__webpack_exports__, "isSFVCorSafari", function() {
                return isSFVCorSafari;
            });
            __webpack_require__.d(__webpack_exports__, "isAndroidWebview", function() {
                return isAndroidWebview;
            });
            __webpack_require__.d(__webpack_exports__, "isIE", function() {
                return device_isIE;
            });
            __webpack_require__.d(__webpack_exports__, "isIECompHeader", function() {
                return isIECompHeader;
            });
            __webpack_require__.d(__webpack_exports__, "isElectron", function() {
                return isElectron;
            });
            __webpack_require__.d(__webpack_exports__, "isIEIntranet", function() {
                return isIEIntranet;
            });
            __webpack_require__.d(__webpack_exports__, "isMacOsCna", function() {
                return isMacOsCna;
            });
            __webpack_require__.d(__webpack_exports__, "supportsPopups", function() {
                return supportsPopups;
            });
            __webpack_require__.d(__webpack_exports__, "isChrome", function() {
                return isChrome;
            });
            __webpack_require__.d(__webpack_exports__, "isSafari", function() {
                return isSafari;
            });
            __webpack_require__.d(__webpack_exports__, "isApplePaySupported", function() {
                return isApplePaySupported;
            });
            __webpack_require__.d(__webpack_exports__, "getBody", function() {
                return getBody;
            });
            __webpack_require__.d(__webpack_exports__, "isDocumentReady", function() {
                return isDocumentReady;
            });
            __webpack_require__.d(__webpack_exports__, "isDocumentInteractive", function() {
                return isDocumentInteractive;
            });
            __webpack_require__.d(__webpack_exports__, "urlEncode", function() {
                return urlEncode;
            });
            __webpack_require__.d(__webpack_exports__, "waitForWindowReady", function() {
                return waitForWindowReady;
            });
            __webpack_require__.d(__webpack_exports__, "waitForDocumentReady", function() {
                return waitForDocumentReady;
            });
            __webpack_require__.d(__webpack_exports__, "waitForDocumentBody", function() {
                return waitForDocumentBody;
            });
            __webpack_require__.d(__webpack_exports__, "parseQuery", function() {
                return parseQuery;
            });
            __webpack_require__.d(__webpack_exports__, "getQueryParam", function() {
                return getQueryParam;
            });
            __webpack_require__.d(__webpack_exports__, "urlWillRedirectPage", function() {
                return urlWillRedirectPage;
            });
            __webpack_require__.d(__webpack_exports__, "formatQuery", function() {
                return formatQuery;
            });
            __webpack_require__.d(__webpack_exports__, "extendQuery", function() {
                return extendQuery;
            });
            __webpack_require__.d(__webpack_exports__, "extendUrl", function() {
                return extendUrl;
            });
            __webpack_require__.d(__webpack_exports__, "redirect", function() {
                return redirect;
            });
            __webpack_require__.d(__webpack_exports__, "hasMetaViewPort", function() {
                return hasMetaViewPort;
            });
            __webpack_require__.d(__webpack_exports__, "isElementVisible", function() {
                return isElementVisible;
            });
            __webpack_require__.d(__webpack_exports__, "getPerformance", function() {
                return getPerformance;
            });
            __webpack_require__.d(__webpack_exports__, "enablePerformance", function() {
                return enablePerformance;
            });
            __webpack_require__.d(__webpack_exports__, "getPageRenderTime", function() {
                return getPageRenderTime;
            });
            __webpack_require__.d(__webpack_exports__, "htmlEncode", function() {
                return htmlEncode;
            });
            __webpack_require__.d(__webpack_exports__, "isBrowser", function() {
                return dom_isBrowser;
            });
            __webpack_require__.d(__webpack_exports__, "querySelectorAll", function() {
                return querySelectorAll;
            });
            __webpack_require__.d(__webpack_exports__, "onClick", function() {
                return onClick;
            });
            __webpack_require__.d(__webpack_exports__, "getScript", function() {
                return getScript;
            });
            __webpack_require__.d(__webpack_exports__, "isLocalStorageEnabled", function() {
                return isLocalStorageEnabled;
            });
            __webpack_require__.d(__webpack_exports__, "getBrowserLocales", function() {
                return getBrowserLocales;
            });
            __webpack_require__.d(__webpack_exports__, "appendChild", function() {
                return appendChild;
            });
            __webpack_require__.d(__webpack_exports__, "isElement", function() {
                return isElement;
            });
            __webpack_require__.d(__webpack_exports__, "getElementSafe", function() {
                return getElementSafe;
            });
            __webpack_require__.d(__webpack_exports__, "getElement", function() {
                return getElement;
            });
            __webpack_require__.d(__webpack_exports__, "elementReady", function() {
                return elementReady;
            });
            __webpack_require__.d(__webpack_exports__, "PopupOpenError", function() {
                return dom_PopupOpenError;
            });
            __webpack_require__.d(__webpack_exports__, "popup", function() {
                return popup;
            });
            __webpack_require__.d(__webpack_exports__, "writeToWindow", function() {
                return writeToWindow;
            });
            __webpack_require__.d(__webpack_exports__, "writeElementToWindow", function() {
                return writeElementToWindow;
            });
            __webpack_require__.d(__webpack_exports__, "setStyle", function() {
                return setStyle;
            });
            __webpack_require__.d(__webpack_exports__, "awaitFrameLoad", function() {
                return awaitFrameLoad;
            });
            __webpack_require__.d(__webpack_exports__, "awaitFrameWindow", function() {
                return awaitFrameWindow;
            });
            __webpack_require__.d(__webpack_exports__, "createElement", function() {
                return createElement;
            });
            __webpack_require__.d(__webpack_exports__, "iframe", function() {
                return iframe;
            });
            __webpack_require__.d(__webpack_exports__, "addEventListener", function() {
                return addEventListener;
            });
            __webpack_require__.d(__webpack_exports__, "bindEvents", function() {
                return bindEvents;
            });
            __webpack_require__.d(__webpack_exports__, "setVendorCSS", function() {
                return setVendorCSS;
            });
            __webpack_require__.d(__webpack_exports__, "animate", function() {
                return animate;
            });
            __webpack_require__.d(__webpack_exports__, "makeElementVisible", function() {
                return makeElementVisible;
            });
            __webpack_require__.d(__webpack_exports__, "makeElementInvisible", function() {
                return makeElementInvisible;
            });
            __webpack_require__.d(__webpack_exports__, "showElement", function() {
                return showElement;
            });
            __webpack_require__.d(__webpack_exports__, "hideElement", function() {
                return hideElement;
            });
            __webpack_require__.d(__webpack_exports__, "destroyElement", function() {
                return destroyElement;
            });
            __webpack_require__.d(__webpack_exports__, "showAndAnimate", function() {
                return showAndAnimate;
            });
            __webpack_require__.d(__webpack_exports__, "animateAndHide", function() {
                return animateAndHide;
            });
            __webpack_require__.d(__webpack_exports__, "addClass", function() {
                return addClass;
            });
            __webpack_require__.d(__webpack_exports__, "removeClass", function() {
                return removeClass;
            });
            __webpack_require__.d(__webpack_exports__, "isElementClosed", function() {
                return isElementClosed;
            });
            __webpack_require__.d(__webpack_exports__, "watchElementForClose", function() {
                return watchElementForClose;
            });
            __webpack_require__.d(__webpack_exports__, "fixScripts", function() {
                return fixScripts;
            });
            __webpack_require__.d(__webpack_exports__, "onResize", function() {
                return onResize;
            });
            __webpack_require__.d(__webpack_exports__, "getResourceLoadTime", function() {
                return getResourceLoadTime;
            });
            __webpack_require__.d(__webpack_exports__, "isShadowElement", function() {
                return isShadowElement;
            });
            __webpack_require__.d(__webpack_exports__, "getShadowRoot", function() {
                return getShadowRoot;
            });
            __webpack_require__.d(__webpack_exports__, "getShadowHost", function() {
                return getShadowHost;
            });
            __webpack_require__.d(__webpack_exports__, "insertShadowSlot", function() {
                return insertShadowSlot;
            });
            __webpack_require__.d(__webpack_exports__, "preventClickFocus", function() {
                return preventClickFocus;
            });
            __webpack_require__.d(__webpack_exports__, "getStackTrace", function() {
                return getStackTrace;
            });
            __webpack_require__.d(__webpack_exports__, "getCurrentScript", function() {
                return getCurrentScript;
            });
            __webpack_require__.d(__webpack_exports__, "getCurrentScriptUID", function() {
                return getCurrentScriptUID;
            });
            __webpack_require__.d(__webpack_exports__, "submitForm", function() {
                return submitForm;
            });
            __webpack_require__.d(__webpack_exports__, "experiment", function() {
                return experiment;
            });
            __webpack_require__.d(__webpack_exports__, "getGlobalNameSpace", function() {
                return getGlobalNameSpace;
            });
            __webpack_require__.d(__webpack_exports__, "getStorage", function() {
                return getStorage;
            });
            __webpack_require__.d(__webpack_exports__, "getFunctionName", function() {
                return getFunctionName;
            });
            __webpack_require__.d(__webpack_exports__, "setFunctionName", function() {
                return setFunctionName;
            });
            __webpack_require__.d(__webpack_exports__, "base64encode", function() {
                return base64encode;
            });
            __webpack_require__.d(__webpack_exports__, "base64decode", function() {
                return base64decode;
            });
            __webpack_require__.d(__webpack_exports__, "uniqueID", function() {
                return uniqueID;
            });
            __webpack_require__.d(__webpack_exports__, "getGlobal", function() {
                return getGlobal;
            });
            __webpack_require__.d(__webpack_exports__, "getObjectID", function() {
                return getObjectID;
            });
            __webpack_require__.d(__webpack_exports__, "getEmptyObject", function() {
                return getEmptyObject;
            });
            __webpack_require__.d(__webpack_exports__, "memoize", function() {
                return memoize;
            });
            __webpack_require__.d(__webpack_exports__, "promiseIdentity", function() {
                return promiseIdentity;
            });
            __webpack_require__.d(__webpack_exports__, "memoizePromise", function() {
                return memoizePromise;
            });
            __webpack_require__.d(__webpack_exports__, "promisify", function() {
                return promisify;
            });
            __webpack_require__.d(__webpack_exports__, "inlineMemoize", function() {
                return inlineMemoize;
            });
            __webpack_require__.d(__webpack_exports__, "noop", function() {
                return src_util_noop;
            });
            __webpack_require__.d(__webpack_exports__, "once", function() {
                return once;
            });
            __webpack_require__.d(__webpack_exports__, "hashStr", function() {
                return hashStr;
            });
            __webpack_require__.d(__webpack_exports__, "strHashStr", function() {
                return strHashStr;
            });
            __webpack_require__.d(__webpack_exports__, "match", function() {
                return match1;
            });
            __webpack_require__.d(__webpack_exports__, "awaitKey", function() {
                return awaitKey;
            });
            __webpack_require__.d(__webpack_exports__, "stringifyError", function() {
                return stringifyError;
            });
            __webpack_require__.d(__webpack_exports__, "stringifyErrorMessage", function() {
                return stringifyErrorMessage;
            });
            __webpack_require__.d(__webpack_exports__, "stringify", function() {
                return stringify;
            });
            __webpack_require__.d(__webpack_exports__, "domainMatches", function() {
                return domainMatches;
            });
            __webpack_require__.d(__webpack_exports__, "patchMethod", function() {
                return patchMethod;
            });
            __webpack_require__.d(__webpack_exports__, "extend", function() {
                return extend;
            });
            __webpack_require__.d(__webpack_exports__, "values", function() {
                return util_values;
            });
            __webpack_require__.d(__webpack_exports__, "memoizedValues", function() {
                return memoizedValues;
            });
            __webpack_require__.d(__webpack_exports__, "perc", function() {
                return perc1;
            });
            __webpack_require__.d(__webpack_exports__, "min", function() {
                return min;
            });
            __webpack_require__.d(__webpack_exports__, "max", function() {
                return max1;
            });
            __webpack_require__.d(__webpack_exports__, "roundUp", function() {
                return roundUp;
            });
            __webpack_require__.d(__webpack_exports__, "regexMap", function() {
                return regexMap;
            });
            __webpack_require__.d(__webpack_exports__, "svgToBase64", function() {
                return svgToBase64;
            });
            __webpack_require__.d(__webpack_exports__, "objFilter", function() {
                return objFilter;
            });
            __webpack_require__.d(__webpack_exports__, "identity", function() {
                return identity;
            });
            __webpack_require__.d(__webpack_exports__, "regexTokenize", function() {
                return regexTokenize;
            });
            __webpack_require__.d(__webpack_exports__, "promiseDebounce", function() {
                return promiseDebounce;
            });
            __webpack_require__.d(__webpack_exports__, "safeInterval", function() {
                return safeInterval;
            });
            __webpack_require__.d(__webpack_exports__, "isInteger", function() {
                return isInteger;
            });
            __webpack_require__.d(__webpack_exports__, "isFloat", function() {
                return isFloat;
            });
            __webpack_require__.d(__webpack_exports__, "serializePrimitive", function() {
                return serializePrimitive;
            });
            __webpack_require__.d(__webpack_exports__, "deserializePrimitive", function() {
                return deserializePrimitive;
            });
            __webpack_require__.d(__webpack_exports__, "dotify", function() {
                return dotify;
            });
            __webpack_require__.d(__webpack_exports__, "undotify", function() {
                return undotify;
            });
            __webpack_require__.d(__webpack_exports__, "eventEmitter", function() {
                return eventEmitter;
            });
            __webpack_require__.d(__webpack_exports__, "camelToDasherize", function() {
                return camelToDasherize;
            });
            __webpack_require__.d(__webpack_exports__, "dasherizeToCamel", function() {
                return dasherizeToCamel;
            });
            __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() {
                return capitalizeFirstLetter;
            });
            __webpack_require__.d(__webpack_exports__, "get", function() {
                return util_get;
            });
            __webpack_require__.d(__webpack_exports__, "safeTimeout", function() {
                return safeTimeout;
            });
            __webpack_require__.d(__webpack_exports__, "defineLazyProp", function() {
                return defineLazyProp;
            });
            __webpack_require__.d(__webpack_exports__, "arrayFrom", function() {
                return arrayFrom;
            });
            __webpack_require__.d(__webpack_exports__, "isObject", function() {
                return isObject;
            });
            __webpack_require__.d(__webpack_exports__, "isObjectObject", function() {
                return isObjectObject;
            });
            __webpack_require__.d(__webpack_exports__, "isPlainObject", function() {
                return isPlainObject;
            });
            __webpack_require__.d(__webpack_exports__, "replaceObject", function() {
                return replaceObject;
            });
            __webpack_require__.d(__webpack_exports__, "copyProp", function() {
                return copyProp;
            });
            __webpack_require__.d(__webpack_exports__, "regex", function() {
                return regex;
            });
            __webpack_require__.d(__webpack_exports__, "regexAll", function() {
                return regexAll;
            });
            __webpack_require__.d(__webpack_exports__, "isDefined", function() {
                return isDefined;
            });
            __webpack_require__.d(__webpack_exports__, "cycle", function() {
                return cycle;
            });
            __webpack_require__.d(__webpack_exports__, "debounce", function() {
                return debounce;
            });
            __webpack_require__.d(__webpack_exports__, "isRegex", function() {
                return util_isRegex;
            });
            __webpack_require__.d(__webpack_exports__, "weakMapMemoize", function() {
                return util_weakMapMemoize;
            });
            __webpack_require__.d(__webpack_exports__, "weakMapMemoizePromise", function() {
                return util_weakMapMemoizePromise;
            });
            __webpack_require__.d(__webpack_exports__, "getOrSet", function() {
                return getOrSet;
            });
            __webpack_require__.d(__webpack_exports__, "cleanup", function() {
                return cleanup;
            });
            __webpack_require__.d(__webpack_exports__, "tryCatch", function() {
                return tryCatch;
            });
            __webpack_require__.d(__webpack_exports__, "removeFromArray", function() {
                return removeFromArray;
            });
            __webpack_require__.d(__webpack_exports__, "assertExists", function() {
                return assertExists;
            });
            __webpack_require__.d(__webpack_exports__, "unique", function() {
                return unique;
            });
            __webpack_require__.d(__webpack_exports__, "constHas", function() {
                return constHas;
            });
            __webpack_require__.d(__webpack_exports__, "dedupeErrors", function() {
                return dedupeErrors;
            });
            __webpack_require__.d(__webpack_exports__, "ExtendableError", function() {
                return util_ExtendableError;
            });
            __webpack_require__.d(__webpack_exports__, "request", function() {
                return request;
            });
            __webpack_require__.d(__webpack_exports__, "addHeaderBuilder", function() {
                return addHeaderBuilder;
            });
            __webpack_require__.d(__webpack_exports__, "TYPES", function() {
                return types_TYPES;
            });
            __webpack_require__.d(__webpack_exports__, "memoized", function() {
                return memoized;
            });
            __webpack_require__.d(__webpack_exports__, "promise", function() {
                return decorators_promise;
            });
            __webpack_require__.d(__webpack_exports__, "isPerc", function() {
                return isPerc;
            });
            __webpack_require__.d(__webpack_exports__, "isPx", function() {
                return isPx;
            });
            __webpack_require__.d(__webpack_exports__, "toNum", function() {
                return toNum;
            });
            __webpack_require__.d(__webpack_exports__, "toPx", function() {
                return toPx;
            });
            __webpack_require__.d(__webpack_exports__, "toCSS", function() {
                return toCSS;
            });
            __webpack_require__.d(__webpack_exports__, "percOf", function() {
                return percOf;
            });
            __webpack_require__.d(__webpack_exports__, "normalizeDimension", function() {
                return normalizeDimension;
            });
            __webpack_require__.d(__webpack_exports__, "wrapPromise", function() {
                return wrapPromise;
            });
            __webpack_require__.d(__webpack_exports__, "KEY_CODES", function() {
                return KEY_CODES;
            });
            __webpack_require__.d(__webpack_exports__, "ATTRIBUTES", function() {
                return ATTRIBUTES;
            });
            __webpack_require__.d(__webpack_exports__, "UID_HASH_LENGTH", function() {
                return UID_HASH_LENGTH;
            });
            __webpack_require__.d(__webpack_exports__, "iPhoneScreenHeightMatrix", function() {
                return iPhoneScreenHeightMatrix;
            });
            var iPhoneScreenHeightMatrix = {
                926: {
                    device: "iPhone 12 Pro Max",
                    textSizeHeights: [
                        752,
                        748,
                        744,
                        738
                    ],
                    zoomHeight: {
                        1.15: [
                            752,
                            747,
                            744,
                            738
                        ],
                        1.25: [
                            753,
                            748,
                            744,
                            738
                        ],
                        1.5: [
                            752,
                            749,
                            744,
                            738
                        ],
                        1.75: [
                            753,
                            747,
                            744,
                            739
                        ],
                        2: [
                            752,
                            748,
                            744
                        ],
                        2.5: [
                            753,
                            748
                        ],
                        3: [
                            753,
                            744
                        ]
                    },
                    maybeSafari: {
                        2: [
                            738
                        ],
                        2.5: [
                            745,
                            738
                        ],
                        3: [
                            747,
                            738
                        ]
                    }
                },
                896: {
                    device: "iPhone XS Max, iPhone 11 Pro Max, iPhone XR, iPhone 11",
                    textSizeHeights: [
                        721,
                        717,
                        713,
                        707
                    ],
                    zoomHeight: {
                        1.15: [
                            721,
                            716,
                            713,
                            707
                        ],
                        1.25: [
                            721,
                            718,
                            713,
                            708
                        ],
                        1.5: [
                            722,
                            717,
                            713
                        ],
                        1.75: [
                            721,
                            718,
                            712,
                            707
                        ],
                        2: [
                            722,
                            718,
                            714,
                            708
                        ],
                        2.5: [
                            720,
                            718,
                            713,
                            708
                        ],
                        3: [
                            720,
                            717,
                            708
                        ]
                    },
                    maybeSafari: {
                        1.5: [
                            707
                        ],
                        3: [
                            714
                        ]
                    }
                },
                844: {
                    device: "iPhone 12, iPhone 12 Pro",
                    textSizeHeights: [
                        670,
                        666,
                        662,
                        656
                    ],
                    zoomHeight: {
                        1.15: [
                            670,
                            666,
                            662
                        ],
                        1.25: [
                            670,
                            666,
                            663,
                            656
                        ],
                        1.5: [
                            671,
                            666,
                            662
                        ],
                        1.75: [
                            670,
                            667,
                            662,
                            656
                        ],
                        2: [
                            670,
                            666,
                            662
                        ],
                        2.5: [
                            670,
                            663
                        ],
                        3: [
                            669,
                            666,
                            663,
                            657
                        ]
                    },
                    maybeSafari: {
                        1.15: [
                            656
                        ],
                        1.5: [
                            656
                        ],
                        2: [
                            656
                        ],
                        2.5: [
                            665,
                            655
                        ],
                        3: [
                            663
                        ]
                    }
                },
                812: {
                    device: "iPhone X, iPhone XS, iPhone 11 Pro, iPhone 12 Mini",
                    textSizeHeights: [
                        641,
                        637,
                        633,
                        627
                    ],
                    zoomHeight: {
                        1.15: [
                            641,
                            637,
                            633,
                            627
                        ],
                        1.25: [
                            641,
                            638,
                            633,
                            628
                        ],
                        1.5: [
                            641,
                            638,
                            633,
                            627
                        ],
                        1.75: [
                            641,
                            637,
                            634
                        ],
                        2: [
                            642,
                            638,
                            634,
                            628
                        ],
                        2.5: [
                            640,
                            638,
                            633,
                            628
                        ],
                        3: [
                            642,
                            633
                        ]
                    },
                    maybeSafari: {
                        1.75: [
                            627
                        ],
                        3: [
                            636,
                            627
                        ]
                    }
                },
                736: {
                    device: "iPhone 6 Plus, iPhone 6S Plus, iPhone 7 Plus, iPhone 8 Plus",
                    textSizeHeights: [
                        628,
                        624,
                        620,
                        614
                    ],
                    zoomHeight: {
                        1.15: [
                            628,
                            624,
                            620,
                            614
                        ],
                        1.25: [
                            628,
                            624,
                            620,
                            614
                        ],
                        1.5: [
                            629,
                            624,
                            620
                        ],
                        1.75: [
                            628,
                            625,
                            620,
                            614
                        ],
                        2: [
                            628,
                            624,
                            620
                        ],
                        2.5: [
                            628,
                            625,
                            620,
                            615
                        ],
                        3: [
                            627,
                            624,
                            615
                        ]
                    },
                    maybeSafari: {
                        1.5: [
                            614
                        ],
                        2: [
                            614
                        ],
                        3: [
                            621
                        ]
                    }
                },
                667: {
                    device: "iPhone 6, iPhone 6S, iPhone 7, iPhone 8,  iPhone SE2",
                    textSizeHeights: [
                        559,
                        555,
                        551,
                        545
                    ],
                    zoomHeight: {
                        1.15: [
                            559,
                            555,
                            551,
                            545
                        ],
                        1.25: [
                            559,
                            555,
                            551,
                            545
                        ],
                        1.5: [
                            560,
                            555,
                            551
                        ],
                        1.75: [
                            558,
                            555,
                            551
                        ],
                        2: [
                            560,
                            556,
                            552,
                            546
                        ],
                        2.5: [
                            560,
                            555,
                            550
                        ],
                        3: [
                            558,
                            555,
                            546
                        ]
                    },
                    maybeSafari: {
                        1.5: [
                            545
                        ],
                        1.75: [
                            544
                        ],
                        2.5: [
                            545
                        ],
                        3: [
                            552
                        ]
                    }
                }
            };
            function getUserAgent() {
                return window.navigator.mockUserAgent || window.navigator.userAgent;
            }
            var TABLET_PATTERN = /ip(a|ro)d|silk|xoom|playbook|tablet|kindle|Nexus 7|GT-P10|SC-01C|SHW-M180S|SM-T320|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook|FOLIO|MB511.*RUTEM|Mac OS.*Silk/i;
            function isDevice(userAgent) {
                void 0 === userAgent && (userAgent = getUserAgent());
                return !!userAgent.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i);
            }
            function isTablet(userAgent) {
                void 0 === userAgent && (userAgent = getUserAgent());
                return TABLET_PATTERN.test(userAgent);
            }
            function isWebView() {
                var userAgent = getUserAgent();
                return /(iPhone|iPod|iPad|Macintosh).*AppleWebKit(?!.*Safari)|.*WKWebView/i.test(userAgent) || /\bwv\b/.test(userAgent) || /Android.*Version\/(\d)\.(\d)/i.test(userAgent);
            }
            function isStandAlone() {
                return !0 === window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches;
            }
            function isFacebookWebView(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /FBAN/.test(ua) || /FBAV/.test(ua);
            }
            function isFirefox(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /Firefox/i.test(ua);
            }
            function isFirefoxIOS(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /FxiOS/i.test(ua);
            }
            function isEdgeIOS(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /EdgiOS/i.test(ua);
            }
            function isOperaMini(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /Opera Mini/i.test(ua);
            }
            function isAndroid(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /Android/.test(ua);
            }
            function isIos(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /iPhone|iPod|iPad/.test(ua);
            }
            function isGoogleSearchApp(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /\bGSA\b/.test(ua);
            }
            function isQQBrowser(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /QQBrowser/.test(ua);
            }
            function isIosWebview(ua) {
                void 0 === ua && (ua = getUserAgent());
                return !!isIos(ua) && (!!isGoogleSearchApp(ua) || /.+AppleWebKit(?!.*Safari)|.*WKWebView/.test(ua));
            }
            function isSFVC(ua) {
                void 0 === ua && (ua = getUserAgent());
                if (isIos(ua)) {
                    var device = iPhoneScreenHeightMatrix[window.outerHeight];
                    if (!device) return !1;
                    var height = window.innerHeight;
                    var scale = Math.round(window.screen.width / window.innerWidth * 100) / 100;
                    var computedHeight = Math.round(height * scale);
                    return scale > 1 && device.zoomHeight[scale] ? -1 !== device.zoomHeight[scale].indexOf(computedHeight) : -1 !== device.textSizeHeights.indexOf(computedHeight);
                }
                return !1;
            }
            function isSFVCorSafari(ua) {
                void 0 === ua && (ua = getUserAgent());
                if (isIos(ua)) {
                    var sfvc = isSFVC(ua);
                    var device = iPhoneScreenHeightMatrix[window.outerHeight];
                    if (!device) return !1;
                    var height = window.innerHeight;
                    var scale = Math.round(window.screen.width / window.innerWidth * 100) / 100;
                    var computedHeight = Math.round(height * scale);
                    var possibleSafariSizes = device.maybeSafari;
                    var maybeSafari = !1;
                    scale > 1 && possibleSafariSizes[scale] && -1 !== possibleSafariSizes[scale].indexOf(computedHeight) && (maybeSafari = !0);
                    return sfvc || maybeSafari;
                }
                return !1;
            }
            function isAndroidWebview(ua) {
                void 0 === ua && (ua = getUserAgent());
                return !!isAndroid(ua) && /Version\/[\d.]+/.test(ua) && !isOperaMini(ua);
            }
            function device_isIE() {
                return !!window.document.documentMode || Boolean(window.navigator && window.navigator.userAgent && /Edge|MSIE|rv:11/i.test(window.navigator.userAgent));
            }
            function isIECompHeader() {
                var mHttp = window.document.querySelector('meta[http-equiv="X-UA-Compatible"]');
                var mContent = window.document.querySelector('meta[content="IE=edge"]');
                return !(!mHttp || !mContent);
            }
            function isElectron() {
                return !("undefined" == typeof process || !process.versions || !process.versions.electron);
            }
            function isIEIntranet() {
                if (window.document.documentMode) try {
                    var status = window.status;
                    window.status = "testIntranetMode";
                    if ("testIntranetMode" === window.status) {
                        window.status = status;
                        return !0;
                    }
                    return !1;
                } catch (err) {
                    return !1;
                }
                return !1;
            }
            function isMacOsCna() {
                var userAgent = getUserAgent();
                return /Macintosh.*AppleWebKit(?!.*Safari)/i.test(userAgent);
            }
            function supportsPopups(ua) {
                void 0 === ua && (ua = getUserAgent());
                return !(isIosWebview(ua) || isAndroidWebview(ua) || isOperaMini(ua) || isFirefoxIOS(ua) || isEdgeIOS(ua) || isFacebookWebView(ua) || isQQBrowser(ua) || isElectron() || isMacOsCna() || isStandAlone());
            }
            function isChrome(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /Chrome|Chromium|CriOS/.test(ua);
            }
            function isSafari(ua) {
                void 0 === ua && (ua = getUserAgent());
                return /Safari/.test(ua) && !isChrome(ua);
            }
            function isApplePaySupported() {
                try {
                    if (window.ApplePaySession && window.ApplePaySession.supportsVersion(3) && window.ApplePaySession.canMakePayments()) return !0;
                } catch (e) {
                    return !1;
                }
                return !1;
            }
            function _setPrototypeOf(o1, p1) {
                return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
                    o.__proto__ = p;
                    return o;
                })(o1, p1);
            }
            function _inheritsLoose(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype);
                subClass.prototype.constructor = subClass;
                _setPrototypeOf(subClass, superClass);
            }
            function _extends() {
                return (_extends = Object.assign || function(target) {
                    for(var i = 1; i < arguments.length; i++){
                        var source = arguments[i];
                        for(var key in source)({
                        }).hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }).apply(this, arguments);
            }
            function utils_isPromise(item) {
                try {
                    if (!item) return !1;
                    if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                    if ("undefined" != typeof window && "function" == typeof window.Window && item instanceof window.Window) return !1;
                    if ("undefined" != typeof window && "function" == typeof window.constructor && item instanceof window.constructor) return !1;
                    var _toString = {
                    }.toString;
                    if (_toString) {
                        var name = _toString.call(item);
                        if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                    }
                    if ("function" == typeof item.then) return !0;
                } catch (err) {
                    return !1;
                }
                return !1;
            }
            var dispatchedErrors = [];
            var possiblyUnhandledPromiseHandlers = [];
            var activeCount = 0;
            var flushPromise;
            function flushActive() {
                if (!activeCount && flushPromise) {
                    var promise = flushPromise;
                    flushPromise = null;
                    promise.resolve();
                }
            }
            function startActive() {
                activeCount += 1;
            }
            function endActive() {
                activeCount -= 1;
                flushActive();
            }
            var promise_ZalgoPromise = function() {
                function ZalgoPromise(handler) {
                    var _this = this;
                    this.resolved = void 0;
                    this.rejected = void 0;
                    this.errorHandled = void 0;
                    this.value = void 0;
                    this.error = void 0;
                    this.handlers = void 0;
                    this.dispatching = void 0;
                    this.stack = void 0;
                    this.resolved = !1;
                    this.rejected = !1;
                    this.errorHandled = !1;
                    this.handlers = [];
                    if (handler) {
                        var _result;
                        var _error;
                        var resolved = !1;
                        var rejected = !1;
                        var isAsync = !1;
                        startActive();
                        try {
                            handler(function(res) {
                                if (isAsync) _this.resolve(res);
                                else {
                                    resolved = !0;
                                    _result = res;
                                }
                            }, function(err) {
                                if (isAsync) _this.reject(err);
                                else {
                                    rejected = !0;
                                    _error = err;
                                }
                            });
                        } catch (err) {
                            endActive();
                            this.reject(err);
                            return;
                        }
                        endActive();
                        isAsync = !0;
                        resolved ? this.resolve(_result) : rejected && this.reject(_error);
                    }
                }
                var _proto = ZalgoPromise.prototype;
                _proto.resolve = function(result) {
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                    this.resolved = !0;
                    this.value = result;
                    this.dispatch();
                    return this;
                };
                _proto.reject = function(error) {
                    var _this2 = this;
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                    if (!error) {
                        var _err = error && "function" == typeof error.toString ? error.toString() : ({
                        }).toString.call(error);
                        error = new Error("Expected reject to be called with Error, got " + _err);
                    }
                    this.rejected = !0;
                    this.error = error;
                    this.errorHandled || setTimeout(function() {
                        _this2.errorHandled || (function(err, promise) {
                            if (-1 === dispatchedErrors.indexOf(err)) {
                                dispatchedErrors.push(err);
                                setTimeout(function() {
                                    throw err;
                                }, 1);
                                for(var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++)possiblyUnhandledPromiseHandlers[j](err, promise);
                            }
                        })(error, _this2);
                    }, 1);
                    this.dispatch();
                    return this;
                };
                _proto.asyncReject = function(error) {
                    this.errorHandled = !0;
                    this.reject(error);
                    return this;
                };
                _proto.dispatch = function() {
                    var resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                    if (!this.dispatching && (resolved || rejected)) {
                        this.dispatching = !0;
                        startActive();
                        var chain = function(firstPromise, secondPromise) {
                            return firstPromise.then(function(res) {
                                secondPromise.resolve(res);
                            }, function(err) {
                                secondPromise.reject(err);
                            });
                        };
                        for(var i = 0; i < handlers.length; i++){
                            var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise;
                            var _result2 = void 0;
                            if (resolved) try {
                                _result2 = onSuccess ? onSuccess(this.value) : this.value;
                            } catch (err) {
                                promise.reject(err);
                                continue;
                            }
                            else if (rejected) {
                                if (!onError) {
                                    promise.reject(this.error);
                                    continue;
                                }
                                try {
                                    _result2 = onError(this.error);
                                } catch (err) {
                                    promise.reject(err);
                                    continue;
                                }
                            }
                            if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
                                var promiseResult = _result2;
                                promiseResult.resolved ? promise.resolve(promiseResult.value) : promise.reject(promiseResult.error);
                                promiseResult.errorHandled = !0;
                            } else utils_isPromise(_result2) ? _result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected) ? _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error) : chain(_result2, promise) : promise.resolve(_result2);
                        }
                        handlers.length = 0;
                        this.dispatching = !1;
                        endActive();
                    }
                };
                _proto.then = function(onSuccess, onError) {
                    if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                    if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                    var promise = new ZalgoPromise;
                    this.handlers.push({
                        promise: promise,
                        onSuccess: onSuccess,
                        onError: onError
                    });
                    this.errorHandled = !0;
                    this.dispatch();
                    return promise;
                };
                _proto.catch = function(onError) {
                    return this.then(void 0, onError);
                };
                _proto.finally = function(onFinally) {
                    if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
                    return this.then(function(result) {
                        return ZalgoPromise.try(onFinally).then(function() {
                            return result;
                        });
                    }, function(err) {
                        return ZalgoPromise.try(onFinally).then(function() {
                            throw err;
                        });
                    });
                };
                _proto.timeout = function(time, err) {
                    var _this3 = this;
                    if (this.resolved || this.rejected) return this;
                    var timeout = setTimeout(function() {
                        _this3.resolved || _this3.rejected || _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
                    }, time);
                    return this.then(function(result) {
                        clearTimeout(timeout);
                        return result;
                    });
                };
                _proto.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this);
                };
                ZalgoPromise.resolve = function(value) {
                    return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise(function(resolve, reject) {
                        return value.then(resolve, reject);
                    }) : (new ZalgoPromise).resolve(value);
                };
                ZalgoPromise.reject = function(error) {
                    return (new ZalgoPromise).reject(error);
                };
                ZalgoPromise.asyncReject = function(error) {
                    return (new ZalgoPromise).asyncReject(error);
                };
                ZalgoPromise.all = function(promises) {
                    var promise = new ZalgoPromise;
                    var count = promises.length;
                    var results = [].slice();
                    if (!count) {
                        promise.resolve(results);
                        return promise;
                    }
                    var chain = function(i, firstPromise, secondPromise) {
                        return firstPromise.then(function(res) {
                            results[i] = res;
                            0 == (count -= 1) && promise.resolve(results);
                        }, function(err) {
                            secondPromise.reject(err);
                        });
                    };
                    for(var i = 0; i < promises.length; i++){
                        var prom = promises[i];
                        if (prom instanceof ZalgoPromise) {
                            if (prom.resolved) {
                                results[i] = prom.value;
                                count -= 1;
                                continue;
                            }
                        } else if (!utils_isPromise(prom)) {
                            results[i] = prom;
                            count -= 1;
                            continue;
                        }
                        chain(i, ZalgoPromise.resolve(prom), promise);
                    }
                    0 === count && promise.resolve(results);
                    return promise;
                };
                ZalgoPromise.hash = function(promises) {
                    var result = {
                    };
                    var awaitPromises = [];
                    var _loop = function(key) {
                        if (promises.hasOwnProperty(key)) {
                            var value = promises[key];
                            utils_isPromise(value) ? awaitPromises.push(value.then(function(res) {
                                result[key] = res;
                            })) : result[key] = value;
                        }
                    };
                    for(var key1 in promises)_loop(key1);
                    return ZalgoPromise.all(awaitPromises).then(function() {
                        return result;
                    });
                };
                ZalgoPromise.map = function(items, method) {
                    return ZalgoPromise.all(items.map(method));
                };
                ZalgoPromise.onPossiblyUnhandledException = function(handler1) {
                    return (function(handler) {
                        possiblyUnhandledPromiseHandlers.push(handler);
                        return {
                            cancel: function() {
                                possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                            }
                        };
                    })(handler1);
                };
                ZalgoPromise.try = function(method, context, args) {
                    if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
                    var result;
                    startActive();
                    try {
                        result = method.apply(context, args || []);
                    } catch (err) {
                        endActive();
                        return ZalgoPromise.reject(err);
                    }
                    endActive();
                    return ZalgoPromise.resolve(result);
                };
                ZalgoPromise.delay = function(_delay) {
                    return new ZalgoPromise(function(resolve) {
                        setTimeout(resolve, _delay);
                    });
                };
                ZalgoPromise.isPromise = function(value) {
                    return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
                };
                ZalgoPromise.flush = function() {
                    return (function(Zalgo) {
                        var promise = flushPromise = flushPromise || new Zalgo;
                        flushActive();
                        return promise;
                    })(ZalgoPromise);
                };
                return ZalgoPromise;
            }();
            var IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
            function isAboutProtocol(win) {
                void 0 === win && (win = window);
                return "about:" === win.location.protocol;
            }
            function canReadFromWindow(win) {
                try {
                    return !0;
                } catch (err) {
                }
                return !1;
            }
            function getActualDomain(win1) {
                void 0 === win1 && (win1 = window);
                var location = win1.location;
                if (!location) throw new Error("Can not read window location");
                var protocol = location.protocol;
                if (!protocol) throw new Error("Can not read window protocol");
                if ("file:" === protocol) return "file://";
                if ("about:" === protocol) {
                    var parent = function(win) {
                        void 0 === win && (win = window);
                        if (win) try {
                            if (win.parent && win.parent !== win) return win.parent;
                        } catch (err) {
                        }
                    }(win1);
                    return parent && canReadFromWindow() ? getActualDomain(parent) : "about://";
                }
                var host = location.host;
                if (!host) throw new Error("Can not read window host");
                return protocol + "//" + host;
            }
            function getDomain(win) {
                void 0 === win && (win = window);
                var domain = getActualDomain(win);
                return domain && win.mockDomain && 0 === win.mockDomain.indexOf("mock:") ? win.mockDomain : domain;
            }
            function isSameDomain(win2) {
                if (!function(win) {
                    try {
                        if (win === window) return !0;
                    } catch (err) {
                    }
                    try {
                        var desc = Object.getOwnPropertyDescriptor(win, "location");
                        if (desc && !1 === desc.enumerable) return !1;
                    } catch (err1) {
                    }
                    try {
                        if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                    } catch (err2) {
                    }
                    try {
                        if (getActualDomain(win) === getActualDomain(window)) return !0;
                    } catch (err3) {
                    }
                    return !1;
                }(win2)) return !1;
                try {
                    if (win2 === window) return !0;
                    if (isAboutProtocol(win2) && canReadFromWindow()) return !0;
                    if (getDomain(window) === getDomain(win2)) return !0;
                } catch (err) {
                }
                return !1;
            }
            var iframeWindows = [];
            var iframeFrames = [];
            function isWindowClosed(win, allowMock) {
                void 0 === allowMock && (allowMock = !0);
                try {
                    if (win === window) return !1;
                } catch (err) {
                    return !0;
                }
                try {
                    if (!win) return !0;
                } catch (err4) {
                    return !0;
                }
                try {
                    if (win.closed) return !0;
                } catch (err5) {
                    return !err5 || err5.message !== IE_WIN_ACCESS_ERROR;
                }
                if (allowMock && isSameDomain(win)) try {
                    if (win.mockclosed) return !0;
                } catch (err6) {
                }
                try {
                    if (!win.parent || !win.top) return !0;
                } catch (err7) {
                }
                var iframeIndex = function(collection, item) {
                    for(var i = 0; i < collection.length; i++)try {
                        if (collection[i] === item) return i;
                    } catch (err) {
                    }
                    return -1;
                }(iframeWindows, win);
                if (-1 !== iframeIndex) {
                    var frame1 = iframeFrames[iframeIndex];
                    if (frame1 && (function(frame) {
                        if (!frame.contentWindow) return !0;
                        if (!frame.parentNode) return !0;
                        var doc = frame.ownerDocument;
                        if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
                            var parent = frame;
                            for(; parent.parentNode && parent.parentNode !== parent;)parent = parent.parentNode;
                            if (!parent.host || !doc.documentElement.contains(parent.host)) return !0;
                        }
                        return !1;
                    })(frame1)) return !0;
                }
                return !1;
            }
            function isWindow(obj) {
                try {
                    if (obj === window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if ("[object Window]" === ({
                    }).toString.call(obj)) return !0;
                } catch (err8) {
                    if (err8 && err8.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (window.Window && obj instanceof window.Window) return !0;
                } catch (err9) {
                    if (err9 && err9.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.self === obj) return !0;
                } catch (err10) {
                    if (err10 && err10.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.parent === obj) return !0;
                } catch (err11) {
                    if (err11 && err11.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.top === obj) return !0;
                } catch (err12) {
                    if (err12 && err12.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
                } catch (err13) {
                    return !0;
                }
                try {
                    if ("postMessage" in obj && "self" in obj && "location" in obj) return !0;
                } catch (err14) {
                }
                return !1;
            }
            function util_safeIndexOf(collection, item) {
                for(var i = 0; i < collection.length; i++)try {
                    if (collection[i] === item) return i;
                } catch (err) {
                }
                return -1;
            }
            var weakmap_CrossDomainSafeWeakMap = function() {
                function CrossDomainSafeWeakMap() {
                    this.name = void 0;
                    this.weakmap = void 0;
                    this.keys = void 0;
                    this.values = void 0;
                    this.name = "__weakmap_" + (1000000000 * Math.random() >>> 0) + "__";
                    if ((function() {
                        if ("undefined" == typeof WeakMap) return !1;
                        if (void 0 === Object.freeze) return !1;
                        try {
                            var testWeakMap = new WeakMap;
                            var testKey = {
                            };
                            Object.freeze(testKey);
                            testWeakMap.set(testKey, "__testvalue__");
                            return "__testvalue__" === testWeakMap.get(testKey);
                        } catch (err) {
                            return !1;
                        }
                    })()) try {
                        this.weakmap = new WeakMap;
                    } catch (err) {
                    }
                    this.keys = [];
                    this.values = [];
                }
                var _proto = CrossDomainSafeWeakMap.prototype;
                _proto._cleanupClosedWindows = function() {
                    var weakmap = this.weakmap;
                    var keys = this.keys;
                    for(var i = 0; i < keys.length; i++){
                        var value = keys[i];
                        if (isWindow(value) && isWindowClosed(value)) {
                            if (weakmap) try {
                                weakmap.delete(value);
                            } catch (err) {
                            }
                            keys.splice(i, 1);
                            this.values.splice(i, 1);
                            i -= 1;
                        }
                    }
                };
                _proto.isSafeToReadWrite = function(key) {
                    return !isWindow(key);
                };
                _proto.set = function(key, value) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.set(key, value);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var name = this.name;
                        var entry = key[name];
                        entry && entry[0] === key ? entry[1] = value : Object.defineProperty(key, name, {
                            value: [
                                key,
                                value
                            ],
                            writable: !0
                        });
                        return;
                    } catch (err15) {
                    }
                    this._cleanupClosedWindows();
                    var keys = this.keys;
                    var values = this.values;
                    var index = util_safeIndexOf(keys, key);
                    if (-1 === index) {
                        keys.push(key);
                        values.push(value);
                    } else values[index] = value;
                };
                _proto.get = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        if (weakmap.has(key)) return weakmap.get(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        return entry && entry[0] === key ? entry[1] : void 0;
                    } catch (err16) {
                    }
                    this._cleanupClosedWindows();
                    var index = util_safeIndexOf(this.keys, key);
                    if (-1 !== index) return this.values[index];
                };
                _proto.delete = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.delete(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        entry && entry[0] === key && (entry[0] = entry[1] = void 0);
                    } catch (err17) {
                    }
                    this._cleanupClosedWindows();
                    var keys = this.keys;
                    var index = util_safeIndexOf(keys, key);
                    if (-1 !== index) {
                        keys.splice(index, 1);
                        this.values.splice(index, 1);
                    }
                };
                _proto.has = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        if (weakmap.has(key)) return !0;
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) try {
                        var entry = key[this.name];
                        return !(!entry || entry[0] !== key);
                    } catch (err18) {
                    }
                    this._cleanupClosedWindows();
                    return -1 !== util_safeIndexOf(this.keys, key);
                };
                _proto.getOrSet = function(key, getter) {
                    if (this.has(key)) return this.get(key);
                    var value = getter();
                    this.set(key, value);
                    return value;
                };
                return CrossDomainSafeWeakMap;
            }();
            function _getPrototypeOf(o2) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                })(o2);
            }
            function _isNativeReflectConstruct() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                    }));
                    return !0;
                } catch (e) {
                    return !1;
                }
            }
            function construct_construct(Parent1, args1, Class1) {
                return (construct_construct = _isNativeReflectConstruct() ? Reflect.construct : function(Parent, args, Class) {
                    var a = [
                        null
                    ];
                    a.push.apply(a, args);
                    var instance = new (Function.bind.apply(Parent, a));
                    Class && _setPrototypeOf(instance, Class.prototype);
                    return instance;
                }).apply(null, arguments);
            }
            function wrapNativeSuper_wrapNativeSuper(Class2) {
                var _cache = "function" == typeof Map ? new Map : void 0;
                return (wrapNativeSuper_wrapNativeSuper = function(Class) {
                    if (null === Class || !(fn = Class, -1 !== Function.toString.call(fn).indexOf("[native code]"))) return Class;
                    var fn;
                    if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== _cache) {
                        if (_cache.has(Class)) return _cache.get(Class);
                        _cache.set(Class, Wrapper);
                    }
                    function Wrapper() {
                        return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
                    }
                    Wrapper.prototype = Object.create(Class.prototype, {
                        constructor: {
                            value: Wrapper,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    return _setPrototypeOf(Wrapper, Class);
                })(Class2);
            }
            function getFunctionName(fn) {
                return fn.name || fn.__name__ || fn.displayName || "anonymous";
            }
            function setFunctionName(fn, name) {
                try {
                    delete fn.name;
                    fn.name = name;
                } catch (err) {
                }
                fn.__name__ = fn.displayName = name;
                return fn;
            }
            function base64encode(str) {
                if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(m, p1) {
                    return String.fromCharCode(parseInt(p1, 16));
                })).replace(/[=]/g, "");
                if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64").replace(/[=]/g, "");
                throw new Error("Can not find window.btoa or Buffer");
            }
            function base64decode(str) {
                if ("function" == typeof atob) return decodeURIComponent([].map.call(atob(str), function(c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(""));
                if ("undefined" != typeof Buffer) return Buffer.from(str, "base64").toString("utf8");
                throw new Error("Can not find window.atob or Buffer");
            }
            function uniqueID() {
                var chars = "0123456789abcdef";
                return "uid_" + "xxxxxxxxxx".replace(/./g, function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                }) + "_" + base64encode((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            }
            function getGlobal() {
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global1) return global1;
                throw new Error("No global found");
            }
            var objectIDs;
            function getObjectID(obj) {
                objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap;
                if (null == obj || "object" != typeof obj && "function" != typeof obj) throw new Error("Invalid object");
                var uid = objectIDs.get(obj);
                if (!uid) {
                    uid = typeof obj + ":" + uniqueID();
                    objectIDs.set(obj, uid);
                }
                return uid;
            }
            function serializeArgs(args) {
                try {
                    return JSON.stringify([].slice.call(args), function(subkey, val) {
                        return "function" == typeof val ? "memoize[" + getObjectID(val) + "]" : val;
                    });
                } catch (err) {
                    throw new Error("Arguments not serializable -- can not be used to memoize");
                }
            }
            function getEmptyObject() {
                return {
                };
            }
            var memoizeGlobalIndex = 0;
            var memoizeGlobalIndexValidFrom = 0;
            function memoize(method, options) {
                void 0 === options && (options = {
                });
                var _options$thisNamespac = options.thisNamespace, thisNamespace = void 0 !== _options$thisNamespac && _options$thisNamespac, cacheTime = options.time;
                var simpleCache;
                var thisCache;
                var memoizeIndex = memoizeGlobalIndex;
                memoizeGlobalIndex += 1;
                var memoizedFunction = function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                    if (memoizeIndex < memoizeGlobalIndexValidFrom) {
                        simpleCache = null;
                        thisCache = null;
                        memoizeIndex = memoizeGlobalIndex;
                        memoizeGlobalIndex += 1;
                    }
                    var cache;
                    cache = thisNamespace ? (thisCache = thisCache || new weakmap_CrossDomainSafeWeakMap).getOrSet(this, getEmptyObject) : simpleCache = simpleCache || {
                    };
                    var cacheKey = serializeArgs(args);
                    var cacheResult = cache[cacheKey];
                    if (cacheResult && cacheTime && Date.now() - cacheResult.time < cacheTime) {
                        delete cache[cacheKey];
                        cacheResult = null;
                    }
                    if (cacheResult) return cacheResult.value;
                    var time = Date.now();
                    var value = method.apply(this, arguments);
                    cache[cacheKey] = {
                        time: time,
                        value: value
                    };
                    return value;
                };
                memoizedFunction.reset = function() {
                    simpleCache = null;
                    thisCache = null;
                };
                return setFunctionName(memoizedFunction, (options.name || getFunctionName(method)) + "::memoized");
            }
            memoize.clear = function() {
                memoizeGlobalIndexValidFrom = memoizeGlobalIndex;
            };
            function promiseIdentity(item) {
                return promise_ZalgoPromise.resolve(item);
            }
            function memoizePromise(method) {
                var cache = {
                };
                function memoizedPromiseFunction() {
                    var _arguments = arguments, _this = this;
                    for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                    var key = serializeArgs(args);
                    if (cache.hasOwnProperty(key)) return cache[key];
                    cache[key] = promise_ZalgoPromise.try(function() {
                        return method.apply(_this, _arguments);
                    }).finally(function() {
                        delete cache[key];
                    });
                    return cache[key];
                }
                memoizedPromiseFunction.reset = function() {
                    cache = {
                    };
                };
                return setFunctionName(memoizedPromiseFunction, getFunctionName(method) + "::promiseMemoized");
            }
            function promisify(method, options) {
                void 0 === options && (options = {
                });
                function promisifiedFunction() {
                    return promise_ZalgoPromise.try(method, this, arguments);
                }
                options.name && (promisifiedFunction.displayName = options.name + ":promisified");
                return setFunctionName(promisifiedFunction, getFunctionName(method) + "::promisified");
            }
            function inlineMemoize(method, logic, args) {
                void 0 === args && (args = []);
                var cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {
                };
                var key = serializeArgs(args);
                return cache.hasOwnProperty(key) ? cache[key] : cache[key] = logic.apply(void 0, args);
            }
            function src_util_noop() {
            }
            function once(method) {
                var called = !1;
                return setFunctionName(function() {
                    if (!called) {
                        called = !0;
                        return method.apply(this, arguments);
                    }
                }, getFunctionName(method) + "::once");
            }
            function hashStr(str) {
                var hash = 0;
                for(var i = 0; i < str.length; i++)hash += str[i].charCodeAt(0) * Math.pow(i % 10 + 1, 5);
                return Math.floor(Math.pow(Math.sqrt(hash), 5));
            }
            function strHashStr(str) {
                var hash = "";
                for(var i = 0; i < str.length; i++){
                    var total = str[i].charCodeAt(0) * i;
                    str[i + 1] && (total += str[i + 1].charCodeAt(0) * (i - 1));
                    hash += String.fromCharCode(97 + Math.abs(total) % 26);
                }
                return hash;
            }
            function match1(str, pattern) {
                var regmatch = str.match(pattern);
                if (regmatch) return regmatch[1];
            }
            function awaitKey(obj, key) {
                return new promise_ZalgoPromise(function(resolve) {
                    var value = obj[key];
                    if (value) return resolve(value);
                    delete obj[key];
                    Object.defineProperty(obj, key, {
                        configurable: !0,
                        set: function(item) {
                            (value = item) && resolve(value);
                        },
                        get: function() {
                            return value;
                        }
                    });
                });
            }
            function stringifyError(err, level) {
                void 0 === level && (level = 1);
                if (level >= 3) return "stringifyError stack overflow";
                try {
                    if (!err) return "<unknown error: " + ({
                    }).toString.call(err) + ">";
                    if ("string" == typeof err) return err;
                    if (err instanceof Error) {
                        var stack = err && err.stack;
                        var message = err && err.message;
                        if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                        if (stack) return stack;
                        if (message) return message;
                    }
                    return err && err.toString && "function" == typeof err.toString ? err.toString() : ({
                    }).toString.call(err);
                } catch (newErr) {
                    return "Error while stringifying error: " + stringifyError(newErr, level + 1);
                }
            }
            function stringifyErrorMessage(err) {
                var defaultMessage = "<unknown error: " + ({
                }).toString.call(err) + ">";
                return err ? err instanceof Error ? err.message || defaultMessage : "string" == typeof err.message && err.message || defaultMessage : defaultMessage;
            }
            function stringify(item) {
                return "string" == typeof item ? item : item && item.toString && "function" == typeof item.toString ? item.toString() : ({
                }).toString.call(item);
            }
            function domainMatches(hostname, domain) {
                var index = (hostname = hostname.split("://")[1]).indexOf(domain);
                return -1 !== index && hostname.slice(index) === domain;
            }
            function patchMethod(obj, name, handler) {
                var original = obj[name];
                obj[name] = function() {
                    var _arguments2 = arguments, _this2 = this;
                    return handler({
                        context: this,
                        args: [].slice.call(arguments),
                        original: original,
                        callOriginal: function() {
                            return original.apply(_this2, _arguments2);
                        }
                    });
                };
            }
            function extend(obj, source) {
                if (!source) return obj;
                if (Object.assign) return Object.assign(obj, source);
                for(var key in source)source.hasOwnProperty(key) && (obj[key] = source[key]);
                return obj;
            }
            function util_values(obj) {
                if (Object.values) return Object.values(obj);
                var result = [];
                for(var key in obj)obj.hasOwnProperty(key) && result.push(obj[key]);
                return result;
            }
            var memoizedValues = memoize(util_values);
            function perc1(pixels, percentage) {
                return Math.round(pixels * percentage / 100);
            }
            function min() {
                return Math.min.apply(Math, arguments);
            }
            function max1() {
                return Math.max.apply(Math, arguments);
            }
            function roundUp(num, nearest) {
                var remainder = num % nearest;
                return remainder ? num - remainder + nearest : num;
            }
            function regexMap(str, regexp, handler) {
                var results = [];
                str.replace(regexp, function(item) {
                    results.push(handler ? handler.apply(null, arguments) : item);
                });
                return results;
            }
            function svgToBase64(svg) {
                return "data:image/svg+xml;base64," + base64encode(svg);
            }
            function objFilter(obj, filter) {
                void 0 === filter && (filter = Boolean);
                var result = {
                };
                for(var key in obj)obj.hasOwnProperty(key) && filter(obj[key], key) && (result[key] = obj[key]);
                return result;
            }
            function identity(item) {
                return item;
            }
            function regexTokenize(text, regexp) {
                var result = [];
                text.replace(regexp, function(token) {
                    result.push(token);
                    return "";
                });
                return result;
            }
            function promiseDebounce(method, delay) {
                void 0 === delay && (delay = 50);
                var promise;
                var timeout;
                return setFunctionName(function() {
                    timeout && clearTimeout(timeout);
                    var localPromise = promise = promise || new promise_ZalgoPromise;
                    timeout = setTimeout(function() {
                        promise = null;
                        timeout = null;
                        promise_ZalgoPromise.try(method).then(function(result) {
                            localPromise.resolve(result);
                        }, function(err) {
                            localPromise.reject(err);
                        });
                    }, delay);
                    return localPromise;
                }, getFunctionName(method) + "::promiseDebounced");
            }
            function safeInterval(method, time) {
                var timeout;
                !function loop() {
                    timeout = setTimeout(function() {
                        method();
                        loop();
                    }, time);
                }();
                return {
                    cancel: function() {
                        clearTimeout(timeout);
                    }
                };
            }
            function isInteger(str) {
                return Boolean(str.match(/^[0-9]+$/));
            }
            function isFloat(str) {
                return Boolean(str.match(/^[0-9]+\.[0-9]+$/));
            }
            function serializePrimitive(value) {
                return value.toString();
            }
            function deserializePrimitive(value) {
                return "true" === value || "false" !== value && (isInteger(value) ? parseInt(value, 10) : isFloat(value) ? parseFloat(value) : value);
            }
            function dotify(obj, prefix, newobj) {
                void 0 === prefix && (prefix = "");
                void 0 === newobj && (newobj = {
                });
                prefix = prefix ? prefix + "." : prefix;
                for(var key in obj)obj.hasOwnProperty(key) && null != obj[key] && "function" != typeof obj[key] && (obj[key] && Array.isArray(obj[key]) && obj[key].length && obj[key].every(function(val) {
                    return "object" != typeof val;
                }) ? newobj["" + prefix + key + "[]"] = obj[key].join(",") : obj[key] && "object" == typeof obj[key] ? newobj = dotify(obj[key], "" + prefix + key, newobj) : newobj["" + prefix + key] = serializePrimitive(obj[key]));
                return newobj;
            }
            function undotify(obj) {
                var result = {
                };
                for(var key in obj)if (obj.hasOwnProperty(key) && "string" == typeof obj[key]) {
                    var value = obj[key];
                    if (key.match(/^.+\[\]$/)) {
                        key = key.slice(0, -2);
                        value = value.split(",").map(deserializePrimitive);
                    } else value = deserializePrimitive(value);
                    var keyResult = result;
                    var parts = key.split(".");
                    for(var i = 0; i < parts.length; i++){
                        var part = parts[i];
                        var isLast = i + 1 === parts.length;
                        var isIndex = !isLast && isInteger(parts[i + 1]);
                        if ("constructor" === part || "prototype" === part || "__proto__" === part) throw new Error("Disallowed key: " + part);
                        isLast ? keyResult[part] = value : keyResult = keyResult[part] = keyResult[part] || (isIndex ? [] : {
                        });
                    }
                }
                return result;
            }
            function eventEmitter() {
                var triggered = {
                };
                var handlers = {
                };
                var emitter = {
                    on: function(eventName, handler) {
                        var handlerList = handlers[eventName] = handlers[eventName] || [];
                        handlerList.push(handler);
                        var cancelled = !1;
                        return {
                            cancel: function() {
                                if (!cancelled) {
                                    cancelled = !0;
                                    handlerList.splice(handlerList.indexOf(handler), 1);
                                }
                            }
                        };
                    },
                    once: function(eventName, handler) {
                        var listener = emitter.on(eventName, function() {
                            listener.cancel();
                            handler();
                        });
                        return listener;
                    },
                    trigger: function(eventName) {
                        for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
                        var handlerList = handlers[eventName];
                        var promises = [];
                        if (handlerList) {
                            var _loop = function(_i2) {
                                var handler = handlerList[_i2];
                                promises.push(promise_ZalgoPromise.try(function() {
                                    return handler.apply(void 0, args);
                                }));
                            };
                            for(var _i2 = 0; _i2 < handlerList.length; _i2++)_loop(_i2);
                        }
                        return promise_ZalgoPromise.all(promises).then(src_util_noop);
                    },
                    triggerOnce: function(eventName) {
                        if (triggered[eventName]) return promise_ZalgoPromise.resolve();
                        triggered[eventName] = !0;
                        for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
                        return emitter.trigger.apply(emitter, [
                            eventName
                        ].concat(args));
                    },
                    reset: function() {
                        handlers = {
                        };
                    }
                };
                return emitter;
            }
            function camelToDasherize(string) {
                return string.replace(/([A-Z])/g, function(g) {
                    return "-" + g.toLowerCase();
                });
            }
            function dasherizeToCamel(string) {
                return string.replace(/-([a-z])/g, function(g) {
                    return g[1].toUpperCase();
                });
            }
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            }
            function util_get(item, path, def) {
                if (!path) return def;
                var pathParts = path.split(".");
                for(var i = 0; i < pathParts.length; i++){
                    if ("object" != typeof item || null === item) return def;
                    item = item[pathParts[i]];
                }
                return void 0 === item ? def : item;
            }
            function safeTimeout(method, time) {
                var interval = safeInterval(function() {
                    if ((time -= 100) <= 0) {
                        interval.cancel();
                        method();
                    }
                }, 100);
            }
            function defineLazyProp(obj, key, getter) {
                if (Array.isArray(obj)) {
                    if ("number" != typeof key) throw new TypeError("Array key must be number");
                } else if ("object" == typeof obj && null !== obj && "string" != typeof key) throw new TypeError("Object key must be string");
                Object.defineProperty(obj, key, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        delete obj[key];
                        var value = getter();
                        obj[key] = value;
                        return value;
                    },
                    set: function(value) {
                        delete obj[key];
                        obj[key] = value;
                    }
                });
            }
            function arrayFrom(item) {
                return [].slice.call(item);
            }
            function isObject(item) {
                return "object" == typeof item && null !== item;
            }
            function isObjectObject(obj) {
                return isObject(obj) && "[object Object]" === ({
                }).toString.call(obj);
            }
            function isPlainObject(obj) {
                if (!isObjectObject(obj)) return !1;
                var constructor = obj.constructor;
                if ("function" != typeof constructor) return !1;
                var prototype = constructor.prototype;
                return !!isObjectObject(prototype) && !!prototype.hasOwnProperty("isPrototypeOf");
            }
            function replaceObject(item, replacer, fullKey) {
                void 0 === fullKey && (fullKey = "");
                if (Array.isArray(item)) {
                    var length = item.length;
                    var result = [];
                    var _loop2 = function(i) {
                        defineLazyProp(result, i, function() {
                            var itemKey = fullKey ? fullKey + "." + i : "" + i;
                            var child = replacer(item[i], i, itemKey);
                            (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                            return child;
                        });
                    };
                    for(var i1 = 0; i1 < length; i1++)_loop2(i1);
                    return result;
                }
                if (isPlainObject(item)) {
                    var _result = {
                    };
                    var _loop3 = function(key) {
                        if (!item.hasOwnProperty(key)) return "continue";
                        defineLazyProp(_result, key, function() {
                            var itemKey = fullKey ? fullKey + "." + key : "" + key;
                            var child = replacer(item[key], key, itemKey);
                            (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                            return child;
                        });
                    };
                    for(var key2 in item)_loop3(key2);
                    return _result;
                }
                throw new Error("Pass an object or array");
            }
            function copyProp(source, target, name, def) {
                if (source.hasOwnProperty(name)) {
                    var descriptor = Object.getOwnPropertyDescriptor(source, name);
                    Object.defineProperty(target, name, descriptor);
                } else target[name] = def;
            }
            function regex(pattern, string, start) {
                void 0 === start && (start = 0);
                "string" == typeof pattern && (pattern = new RegExp(pattern));
                var result = string.slice(start).match(pattern);
                if (result) {
                    var index = result.index;
                    var regmatch = result[0];
                    return {
                        text: regmatch,
                        groups: result.slice(1),
                        start: start + index,
                        end: start + index + regmatch.length,
                        length: regmatch.length,
                        replace: function(text) {
                            return regmatch ? "" + regmatch.slice(0, start + index) + text + regmatch.slice(index + regmatch.length) : "";
                        }
                    };
                }
            }
            function regexAll(pattern, string) {
                var matches = [];
                var start = 0;
                for(;;){
                    var regmatch = regex(pattern, string, start);
                    if (!regmatch) break;
                    matches.push(regmatch);
                    start = match1.end;
                }
                return matches;
            }
            function isDefined(value) {
                return null != value;
            }
            function cycle(method) {
                return promise_ZalgoPromise.try(method).then(function() {
                    return cycle(method);
                });
            }
            function debounce(method, time) {
                void 0 === time && (time = 100);
                var timeout;
                return setFunctionName(function() {
                    var _arguments3 = arguments, _this3 = this;
                    clearTimeout(timeout);
                    timeout = setTimeout(function() {
                        return method.apply(_this3, _arguments3);
                    }, time);
                }, getFunctionName(method) + "::debounced");
            }
            function util_isRegex(item) {
                return "[object RegExp]" === ({
                }).toString.call(item);
            }
            var util_weakMapMemoize = function(method) {
                var weakmap = new weakmap_CrossDomainSafeWeakMap;
                return function(arg) {
                    var _this4 = this;
                    return weakmap.getOrSet(arg, function() {
                        return method.call(_this4, arg);
                    });
                };
            };
            var util_weakMapMemoizePromise = function(method) {
                var weakmap = new weakmap_CrossDomainSafeWeakMap;
                return function(arg) {
                    var _this5 = this;
                    return weakmap.getOrSet(arg, function() {
                        return method.call(_this5, arg).finally(function() {
                            weakmap.delete(arg);
                        });
                    });
                };
            };
            function getOrSet(obj, key, getter) {
                if (obj.hasOwnProperty(key)) return obj[key];
                var val = getter();
                obj[key] = val;
                return val;
            }
            function cleanup(obj) {
                var tasks = [];
                var cleaned = !1;
                var cleanErr;
                var cleaner = {
                    set: function(name, item) {
                        if (!cleaned) {
                            obj[name] = item;
                            cleaner.register(function() {
                                delete obj[name];
                            });
                        }
                        return item;
                    },
                    register: function(method) {
                        var task = once(function() {
                            return method(cleanErr);
                        });
                        cleaned ? method(cleanErr) : tasks.push(task);
                        return {
                            cancel: function() {
                                var index = tasks.indexOf(task);
                                -1 !== index && tasks.splice(index, 1);
                            }
                        };
                    },
                    all: function(err) {
                        cleanErr = err;
                        var results = [];
                        cleaned = !0;
                        for(; tasks.length;){
                            var task = tasks.shift();
                            results.push(task());
                        }
                        return promise_ZalgoPromise.all(results).then(src_util_noop);
                    }
                };
                return cleaner;
            }
            function tryCatch(fn) {
                var result;
                var error;
                try {
                    result = fn();
                } catch (err) {
                    error = err;
                }
                return {
                    result: result,
                    error: error
                };
            }
            function removeFromArray(arr, item) {
                var index = arr.indexOf(item);
                -1 !== index && arr.splice(index, 1);
            }
            function assertExists(name, thing) {
                if (null == thing) throw new Error("Expected " + name + " to be present");
                return thing;
            }
            function unique(arr) {
                var result = {
                };
                for(var _i4 = 0; _i4 < arr.length; _i4++)result[arr[_i4]] = !0;
                return Object.keys(result);
            }
            var constHas = function(constant, value) {
                return -1 !== memoizedValues(constant).indexOf(value);
            };
            function dedupeErrors(handler) {
                var seenErrors = [];
                var seenStringifiedErrors = {
                };
                return function(err) {
                    if (-1 === seenErrors.indexOf(err)) {
                        seenErrors.push(err);
                        var stringifiedError = stringifyError(err);
                        if (!seenStringifiedErrors[stringifiedError]) {
                            seenStringifiedErrors[stringifiedError] = !0;
                            return handler(err);
                        }
                    }
                };
            }
            var util_ExtendableError = function(_Error) {
                _inheritsLoose(ExtendableError, _Error);
                function ExtendableError(message) {
                    var _this6;
                    (_this6 = _Error.call(this, message) || this).name = _this6.constructor.name;
                    "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(function(self) {
                        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return self;
                    }(_this6), _this6.constructor) : _this6.stack = new Error(message).stack;
                    return _this6;
                }
                return ExtendableError;
            }(wrapNativeSuper_wrapNativeSuper(Error));
            var KEY_CODES = {
                ENTER: 13,
                SPACE: 32
            };
            var ATTRIBUTES = {
                UID: "data-uid"
            };
            var UID_HASH_LENGTH = 30;
            function getBody() {
                var body = document.body;
                if (!body) throw new Error("Body element not found");
                return body;
            }
            function isDocumentReady() {
                return Boolean(document.body) && "complete" === document.readyState;
            }
            function isDocumentInteractive() {
                return Boolean(document.body) && "interactive" === document.readyState;
            }
            function urlEncode(str) {
                return encodeURIComponent(str);
            }
            function waitForWindowReady() {
                return inlineMemoize(waitForWindowReady, function() {
                    return new promise_ZalgoPromise(function(resolve) {
                        isDocumentReady() && resolve();
                        window.addEventListener("load", function() {
                            return resolve();
                        });
                    });
                });
            }
            var waitForDocumentReady = memoize(function() {
                return new promise_ZalgoPromise(function(resolve) {
                    if (isDocumentReady() || isDocumentInteractive()) return resolve();
                    var interval = setInterval(function() {
                        if (isDocumentReady() || isDocumentInteractive()) {
                            clearInterval(interval);
                            return resolve();
                        }
                    }, 10);
                });
            });
            function waitForDocumentBody() {
                return promise_ZalgoPromise.try(function() {
                    return document.body ? document.body : waitForDocumentReady().then(function() {
                        if (document.body) return document.body;
                        throw new Error("Document ready but document.body not present");
                    });
                });
            }
            function parseQuery(queryString) {
                return inlineMemoize(parseQuery, function() {
                    var params = {
                    };
                    if (!queryString) return params;
                    if (-1 === queryString.indexOf("=")) return params;
                    for(var _i2 = 0, _queryString$split2 = queryString.split("&"); _i2 < _queryString$split2.length; _i2++){
                        var pair = _queryString$split2[_i2];
                        (pair = pair.split("="))[0] && pair[1] && (params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]));
                    }
                    return params;
                }, [
                    queryString
                ]);
            }
            function getQueryParam(name) {
                return parseQuery(window.location.search.slice(1))[name];
            }
            function urlWillRedirectPage(url) {
                return -1 === url.indexOf("#") || 0 !== url.indexOf("#") && url.split("#")[0] !== window.location.href.split("#")[0];
            }
            function formatQuery(obj) {
                void 0 === obj && (obj = {
                });
                return Object.keys(obj).filter(function(key) {
                    return "string" == typeof obj[key] || "boolean" == typeof obj[key];
                }).map(function(key) {
                    var val = obj[key];
                    if ("string" != typeof val && "boolean" != typeof val) throw new TypeError("Invalid type for query");
                    return urlEncode(key) + "=" + urlEncode(val.toString());
                }).join("&");
            }
            function extendQuery(originalQuery, props) {
                void 0 === props && (props = {
                });
                return props && Object.keys(props).length ? formatQuery(_extends({
                }, parseQuery(originalQuery), props)) : originalQuery;
            }
            function extendUrl(url, options) {
                var query = options.query || {
                };
                var hash = options.hash || {
                };
                var originalUrl;
                var originalHash;
                var _url$split = url.split("#");
                originalHash = _url$split[1];
                var _originalUrl$split = (originalUrl = _url$split[0]).split("?");
                originalUrl = _originalUrl$split[0];
                var queryString = extendQuery(_originalUrl$split[1], query);
                var hashString = extendQuery(originalHash, hash);
                queryString && (originalUrl = originalUrl + "?" + queryString);
                hashString && (originalUrl = originalUrl + "#" + hashString);
                return originalUrl;
            }
            function redirect(url, win) {
                void 0 === win && (win = window);
                return new promise_ZalgoPromise(function(resolve) {
                    win.location = url;
                    urlWillRedirectPage(url) || resolve();
                });
            }
            function hasMetaViewPort() {
                var meta = document.querySelector("meta[name=viewport]");
                return !(isDevice() && window.screen.width < 660 && !meta);
            }
            function isElementVisible(el) {
                return Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
            }
            function getPerformance() {
                return inlineMemoize(getPerformance, function() {
                    var performance = window.performance;
                    if (performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1000 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0) return performance;
                });
            }
            function enablePerformance() {
                return Boolean(getPerformance());
            }
            function getPageRenderTime() {
                return waitForDocumentReady().then(function() {
                    var performance = getPerformance();
                    if (performance) {
                        var timing = performance.timing;
                        return timing.connectEnd && timing.domInteractive ? timing.domInteractive - timing.connectEnd : void 0;
                    }
                });
            }
            function htmlEncode(html) {
                void 0 === html && (html = "");
                return html.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;");
            }
            function dom_isBrowser() {
                return "undefined" != typeof window && void 0 !== window.location;
            }
            function querySelectorAll(selector, doc) {
                void 0 === doc && (doc = window.document);
                return [].slice.call(doc.querySelectorAll(selector));
            }
            function onClick(element, handler) {
                element.addEventListener("touchstart", src_util_noop);
                element.addEventListener("click", handler);
                element.addEventListener("keypress", function(event) {
                    if (event.keyCode === KEY_CODES.ENTER || event.keyCode === KEY_CODES.SPACE) return handler(event);
                });
            }
            function getScript(_ref) {
                var _ref$host = _ref.host, host = void 0 === _ref$host ? window.location.host : _ref$host, path = _ref.path, _ref$reverse = _ref.reverse, reverse = void 0 !== _ref$reverse && _ref$reverse;
                return inlineMemoize(getScript, function() {
                    var url = "" + host + path;
                    var scripts = [].slice.call(document.getElementsByTagName("script"));
                    reverse && scripts.reverse();
                    for(var _i4 = 0; _i4 < scripts.length; _i4++){
                        var script = scripts[_i4];
                        if (script.src && script.src.replace(/^https?:\/\//, "").split("?")[0] === url) return script;
                    }
                }, [
                    path
                ]);
            }
            function isLocalStorageEnabled() {
                return inlineMemoize(isLocalStorageEnabled, function() {
                    try {
                        if ("undefined" == typeof window) return !1;
                        if (window.localStorage) {
                            var value = Math.random().toString();
                            window.localStorage.setItem("__test__localStorage__", value);
                            var result = window.localStorage.getItem("__test__localStorage__");
                            window.localStorage.removeItem("__test__localStorage__");
                            if (value === result) return !0;
                        }
                    } catch (err) {
                    }
                    return !1;
                });
            }
            function getBrowserLocales() {
                var nav = window.navigator;
                var locales = nav.languages ? [].concat(nav.languages) : [];
                nav.language && locales.push(nav.language);
                nav.userLanguage && locales.push(nav.userLanguage);
                return locales.map(function(locale) {
                    if (locale && locale.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                        var _locale$split = locale.split(/[-_]/);
                        return {
                            country: _locale$split[1],
                            lang: _locale$split[0]
                        };
                    }
                    return locale && locale.match(/^[a-z]{2}$/) ? {
                        lang: locale
                    } : null;
                }).filter(Boolean);
            }
            function appendChild(container, child) {
                container.appendChild(child);
            }
            function isElement(element) {
                return element instanceof window.Element || null !== element && "object" == typeof element && 1 === element.nodeType && "object" == typeof element.style && "object" == typeof element.ownerDocument;
            }
            function getElementSafe(id, doc) {
                void 0 === doc && (doc = document);
                return isElement(id) ? id : "string" == typeof id ? doc.querySelector(id) : void 0;
            }
            function getElement(id, doc) {
                void 0 === doc && (doc = document);
                var element = getElementSafe(id, doc);
                if (element) return element;
                throw new Error("Can not find element: " + stringify(id));
            }
            function elementReady(id) {
                return new promise_ZalgoPromise(function(resolve, reject) {
                    var name = stringify(id);
                    var el = getElementSafe(id);
                    if (el) return resolve(el);
                    if (isDocumentReady()) return reject(new Error("Document is ready and element " + name + " does not exist"));
                    var interval = setInterval(function() {
                        if (el = getElementSafe(id)) {
                            resolve(el);
                            clearInterval(interval);
                        } else if (isDocumentReady()) {
                            clearInterval(interval);
                            return reject(new Error("Document is ready and element " + name + " does not exist"));
                        }
                    }, 10);
                });
            }
            var dom_PopupOpenError = function(_ExtendableError) {
                _inheritsLoose(PopupOpenError, _ExtendableError);
                function PopupOpenError() {
                    return _ExtendableError.apply(this, arguments) || this;
                }
                return PopupOpenError;
            }(util_ExtendableError);
            function popup(url, options) {
                var _options$closeOnUnloa = (options = options || {
                }).closeOnUnload, closeOnUnload = void 0 === _options$closeOnUnloa ? 1 : _options$closeOnUnloa, _options$name = options.name, name = void 0 === _options$name ? "" : _options$name, width = options.width, height = options.height;
                var top = 0;
                var left = 0;
                width && (window.outerWidth ? left = Math.round((window.outerWidth - width) / 2) + window.screenX : window.screen.width && (left = Math.round((window.screen.width - width) / 2)));
                height && (window.outerHeight ? top = Math.round((window.outerHeight - height) / 2) + window.screenY : window.screen.height && (top = Math.round((window.screen.height - height) / 2)));
                delete options.closeOnUnload;
                delete options.name;
                width && height && (options = _extends({
                    top: top,
                    left: left,
                    width: width,
                    height: height,
                    status: 1,
                    toolbar: 0,
                    menubar: 0,
                    resizable: 1,
                    scrollbars: 1
                }, options));
                var params = Object.keys(options).map(function(key) {
                    if (null != options[key]) return key + "=" + stringify(options[key]);
                }).filter(Boolean).join(",");
                var win;
                try {
                    win = window.open(url, name, params);
                } catch (err19) {
                    throw new dom_PopupOpenError("Can not open popup window - " + (err19.stack || err19.message));
                }
                if (isWindowClosed(win)) {
                    var err;
                    throw new dom_PopupOpenError("Can not open popup window - blocked");
                }
                closeOnUnload && window.addEventListener("unload", function() {
                    return win.close();
                });
                return win;
            }
            function writeToWindow(win, html) {
                try {
                    win.document.open();
                    win.document.write(html);
                    win.document.close();
                } catch (err) {
                    try {
                        win.location = "javascript: document.open(); document.write(" + JSON.stringify(html) + "); document.close();";
                    } catch (err2) {
                    }
                }
            }
            function writeElementToWindow(win, el) {
                var tag = el.tagName.toLowerCase();
                if ("html" !== tag) throw new Error("Expected element to be html, got " + tag);
                var documentElement = win.document.documentElement;
                for(var _i6 = 0, _arrayFrom2 = arrayFrom(documentElement.children); _i6 < _arrayFrom2.length; _i6++)documentElement.removeChild(_arrayFrom2[_i6]);
                for(var _i8 = 0, _arrayFrom4 = arrayFrom(el.children); _i8 < _arrayFrom4.length; _i8++)documentElement.appendChild(_arrayFrom4[_i8]);
            }
            function setStyle(el, styleText, doc) {
                void 0 === doc && (doc = window.document);
                el.styleSheet ? el.styleSheet.cssText = styleText : el.appendChild(doc.createTextNode(styleText));
            }
            var awaitFrameLoadPromises;
            function awaitFrameLoad(frame2) {
                if ((awaitFrameLoadPromises = awaitFrameLoadPromises || new weakmap_CrossDomainSafeWeakMap).has(frame2)) {
                    var _promise = awaitFrameLoadPromises.get(frame2);
                    if (_promise) return _promise;
                }
                var promise = new promise_ZalgoPromise(function(resolve, reject) {
                    frame2.addEventListener("load", function() {
                        !function(frame) {
                            !function() {
                                for(var i = 0; i < iframeWindows.length; i++){
                                    var closed = !1;
                                    try {
                                        closed = iframeWindows[i].closed;
                                    } catch (err) {
                                    }
                                    if (closed) {
                                        iframeFrames.splice(i, 1);
                                        iframeWindows.splice(i, 1);
                                    }
                                }
                            }();
                            if (frame && frame.contentWindow) try {
                                iframeWindows.push(frame.contentWindow);
                                iframeFrames.push(frame);
                            } catch (err) {
                            }
                        }(frame2);
                        resolve(frame2);
                    });
                    frame2.addEventListener("error", function(err) {
                        frame2.contentWindow ? resolve(frame2) : reject(err);
                    });
                });
                awaitFrameLoadPromises.set(frame2, promise);
                return promise;
            }
            function awaitFrameWindow(frame) {
                return awaitFrameLoad(frame).then(function(loadedFrame) {
                    if (!loadedFrame.contentWindow) throw new Error("Could not find window in iframe");
                    return loadedFrame.contentWindow;
                });
            }
            function createElement(tag, options, container) {
                void 0 === tag && (tag = "div");
                void 0 === options && (options = {
                });
                tag = tag.toLowerCase();
                var element = document.createElement(tag);
                options.style && extend(element.style, options.style);
                options.class && (element.className = options.class.join(" "));
                options.id && element.setAttribute("id", options.id);
                if (options.attributes) for(var _i10 = 0, _Object$keys2 = Object.keys(options.attributes); _i10 < _Object$keys2.length; _i10++){
                    var key = _Object$keys2[_i10];
                    element.setAttribute(key, options.attributes[key]);
                }
                options.styleSheet && setStyle(element, options.styleSheet);
                container && appendChild(container, element);
                if (options.html) {
                    if ("iframe" === tag) {
                        if (!container || !element.contentWindow) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                        writeToWindow(element.contentWindow, options.html);
                    } else element.innerHTML = options.html;
                }
                return element;
            }
            function iframe(options, container) {
                void 0 === options && (options = {
                });
                var style = options.style || {
                };
                var frame = createElement("iframe", {
                    attributes: _extends({
                        allowTransparency: "true"
                    }, options.attributes || {
                    }),
                    style: _extends({
                        backgroundColor: "transparent",
                        border: "none"
                    }, style),
                    html: options.html,
                    class: options.class
                });
                var isIE = window.navigator.userAgent.match(/MSIE|Edge/i);
                frame.hasAttribute("id") || frame.setAttribute("id", uniqueID());
                awaitFrameLoad(frame);
                container && getElement(container).appendChild(frame);
                (options.url || isIE) && frame.setAttribute("src", options.url || "about:blank");
                return frame;
            }
            function addEventListener(obj, event, handler) {
                obj.addEventListener(event, handler);
                return {
                    cancel: function() {
                        obj.removeEventListener(event, handler);
                    }
                };
            }
            function bindEvents(element, eventNames, handler) {
                handler = once(handler);
                for(var _i12 = 0; _i12 < eventNames.length; _i12++)element.addEventListener(eventNames[_i12], handler);
                return {
                    cancel: once(function() {
                        for(var _i14 = 0; _i14 < eventNames.length; _i14++)element.removeEventListener(eventNames[_i14], handler);
                    })
                };
            }
            var VENDOR_PREFIXES = [
                "webkit",
                "moz",
                "ms",
                "o"
            ];
            function setVendorCSS(element, name, value) {
                element.style[name] = value;
                var capitalizedName = capitalizeFirstLetter(name);
                for(var _i16 = 0; _i16 < VENDOR_PREFIXES.length; _i16++)element.style["" + VENDOR_PREFIXES[_i16] + capitalizedName] = value;
            }
            var ANIMATION_START_EVENTS = [
                "animationstart",
                "webkitAnimationStart",
                "oAnimationStart",
                "MSAnimationStart"
            ];
            var ANIMATION_END_EVENTS = [
                "animationend",
                "webkitAnimationEnd",
                "oAnimationEnd",
                "MSAnimationEnd"
            ];
            function animate(element, name, clean, timeout) {
                void 0 === timeout && (timeout = 1000);
                return new promise_ZalgoPromise(function(resolve, reject) {
                    var el = getElement(element);
                    if (!el) return resolve();
                    var hasStarted = !1;
                    var startTimeout;
                    var endTimeout;
                    var startEvent;
                    var endEvent;
                    function cleanUp() {
                        clearTimeout(startTimeout);
                        clearTimeout(endTimeout);
                        startEvent.cancel();
                        endEvent.cancel();
                    }
                    startEvent = bindEvents(el, ANIMATION_START_EVENTS, function(event) {
                        if (event.target === el && event.animationName === name) {
                            clearTimeout(startTimeout);
                            event.stopPropagation();
                            startEvent.cancel();
                            hasStarted = !0;
                            endTimeout = setTimeout(function() {
                                cleanUp();
                                resolve();
                            }, timeout);
                        }
                    });
                    endEvent = bindEvents(el, ANIMATION_END_EVENTS, function(event) {
                        if (event.target === el && event.animationName === name) {
                            cleanUp();
                            return "string" == typeof event.animationName && event.animationName !== name ? reject("Expected animation name to be " + name + ", found " + event.animationName) : resolve();
                        }
                    });
                    setVendorCSS(el, "animationName", name);
                    startTimeout = setTimeout(function() {
                        if (!hasStarted) {
                            cleanUp();
                            return resolve();
                        }
                    }, 200);
                    clean && clean(cleanUp);
                });
            }
            function makeElementVisible(element) {
                element.style.setProperty("visibility", "");
            }
            function makeElementInvisible(element) {
                element.style.setProperty("visibility", "hidden", "important");
            }
            function showElement(element) {
                element.style.setProperty("display", "");
            }
            function hideElement(element) {
                element.style.setProperty("display", "none", "important");
            }
            function destroyElement(element) {
                element && element.parentNode && element.parentNode.removeChild(element);
            }
            function showAndAnimate(element, name, clean) {
                var animation = animate(element, name, clean);
                showElement(element);
                return animation;
            }
            function animateAndHide(element, name, clean) {
                return animate(element, name, clean).then(function() {
                    hideElement(element);
                });
            }
            function addClass(element, name) {
                element.classList.add(name);
            }
            function removeClass(element, name) {
                element.classList.remove(name);
            }
            function isElementClosed(el) {
                return !(el && el.parentNode && el.ownerDocument && el.ownerDocument.documentElement && el.ownerDocument.documentElement.contains(el));
            }
            function watchElementForClose(element, handler) {
                handler = once(handler);
                var cancelled = !1;
                var mutationObservers = [];
                var interval;
                var sacrificialFrame;
                var sacrificialFrameWin;
                var cancel = function() {
                    cancelled = !0;
                    for(var _i18 = 0; _i18 < mutationObservers.length; _i18++)mutationObservers[_i18].disconnect();
                    interval && interval.cancel();
                    sacrificialFrameWin && sacrificialFrameWin.removeEventListener("unload", elementClosed);
                    sacrificialFrame && destroyElement(sacrificialFrame);
                };
                var elementClosed = function() {
                    if (!cancelled) {
                        handler();
                        cancel();
                    }
                };
                if (isElementClosed(element)) {
                    elementClosed();
                    return {
                        cancel: cancel
                    };
                }
                if (window.MutationObserver) {
                    var mutationElement = element.parentElement;
                    for(; mutationElement;){
                        var mutationObserver = new window.MutationObserver(function() {
                            isElementClosed(element) && elementClosed();
                        });
                        mutationObserver.observe(mutationElement, {
                            childList: !0
                        });
                        mutationObservers.push(mutationObserver);
                        mutationElement = mutationElement.parentElement;
                    }
                }
                (sacrificialFrame = document.createElement("iframe")).setAttribute("name", "__detect_close_" + uniqueID() + "__");
                sacrificialFrame.style.display = "none";
                awaitFrameWindow(sacrificialFrame).then(function(frameWin) {
                    (sacrificialFrameWin = (function(win) {
                        if (!isSameDomain(win)) throw new Error("Expected window to be same domain");
                        return win;
                    })(frameWin)).addEventListener("unload", elementClosed);
                });
                element.appendChild(sacrificialFrame);
                interval = safeInterval(function() {
                    isElementClosed(element) && elementClosed();
                }, 1000);
                return {
                    cancel: cancel
                };
            }
            function fixScripts(el, doc) {
                void 0 === doc && (doc = window.document);
                for(var _i20 = 0, _querySelectorAll2 = querySelectorAll("script", el); _i20 < _querySelectorAll2.length; _i20++){
                    var script = _querySelectorAll2[_i20];
                    var parentNode = script.parentNode;
                    if (parentNode) {
                        var newScript = doc.createElement("script");
                        newScript.text = script.textContent;
                        parentNode.replaceChild(newScript, script);
                    }
                }
            }
            function onResize(el, handler, _temp) {
                var _ref2 = void 0 === _temp ? {
                } : _temp, _ref2$width = _ref2.width, width = void 0 === _ref2$width || _ref2$width, _ref2$height = _ref2.height, height = void 0 === _ref2$height || _ref2$height, _ref2$interval = _ref2.interval, interval = void 0 === _ref2$interval ? 100 : _ref2$interval, _ref2$win = _ref2.win, win = void 0 === _ref2$win ? window : _ref2$win;
                var currentWidth = el.offsetWidth;
                var currentHeight = el.offsetHeight;
                var canceled = !1;
                handler({
                    width: currentWidth,
                    height: currentHeight
                });
                var check = function() {
                    if (!canceled && isElementVisible(el)) {
                        var newWidth = el.offsetWidth;
                        var newHeight = el.offsetHeight;
                        (width && newWidth !== currentWidth || height && newHeight !== currentHeight) && handler({
                            width: newWidth,
                            height: newHeight
                        });
                        currentWidth = newWidth;
                        currentHeight = newHeight;
                    }
                };
                var observer;
                var timeout;
                win.addEventListener("resize", check);
                if (void 0 !== win.ResizeObserver) {
                    (observer = new win.ResizeObserver(check)).observe(el);
                    timeout = safeInterval(check, 10 * interval);
                } else if (void 0 !== win.MutationObserver) {
                    (observer = new win.MutationObserver(check)).observe(el, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !1
                    });
                    timeout = safeInterval(check, 10 * interval);
                } else timeout = safeInterval(check, interval);
                return {
                    cancel: function() {
                        canceled = !0;
                        observer.disconnect();
                        window.removeEventListener("resize", check);
                        timeout.cancel();
                    }
                };
            }
            function getResourceLoadTime(url) {
                var performance = getPerformance();
                if (performance && "function" == typeof performance.getEntries) {
                    var entries = performance.getEntries();
                    for(var i = 0; i < entries.length; i++){
                        var entry = entries[i];
                        if (entry && entry.name && 0 === entry.name.indexOf(url) && "number" == typeof entry.duration) return Math.floor(entry.duration);
                    }
                }
            }
            function isShadowElement(element) {
                for(; element.parentNode;)element = element.parentNode;
                return "[object ShadowRoot]" === element.toString();
            }
            function getShadowRoot(element) {
                for(; element.parentNode;)element = element.parentNode;
                if (isShadowElement(element)) return element;
            }
            function getShadowHost(element) {
                var shadowRoot = getShadowRoot(element);
                if (shadowRoot && shadowRoot.host) return shadowRoot.host;
            }
            function insertShadowSlot(element) {
                var shadowHost = getShadowHost(element);
                if (!shadowHost) throw new Error("Element is not in shadow dom");
                var slotName = "shadow-slot-" + uniqueID();
                var slot = document.createElement("slot");
                slot.setAttribute("name", slotName);
                element.appendChild(slot);
                var slotProvider = document.createElement("div");
                slotProvider.setAttribute("slot", slotName);
                shadowHost.appendChild(slotProvider);
                return isShadowElement(shadowHost) ? insertShadowSlot(slotProvider) : slotProvider;
            }
            function preventClickFocus(el) {
                var onFocus1 = function onFocus(event) {
                    el.removeEventListener("focus", onFocus);
                    event.preventDefault();
                    el.blur();
                    return !1;
                };
                el.addEventListener("mousedown", function() {
                    el.addEventListener("focus", onFocus1);
                    setTimeout(function() {
                        el.removeEventListener("focus", onFocus1);
                    }, 1);
                });
            }
            function getStackTrace() {
                try {
                    throw new Error("_");
                } catch (err) {
                    return err.stack || "";
                }
            }
            var currentScript = "undefined" != typeof document ? document.currentScript : null;
            var getCurrentScript = memoize(function() {
                if (currentScript) return currentScript;
                if (currentScript = (function() {
                    try {
                        var stack = getStackTrace();
                        var stackDetails = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(stack);
                        var scriptLocation = stackDetails && stackDetails[1];
                        if (!scriptLocation) return;
                        for(var _i22 = 0, _Array$prototype$slic2 = [].slice.call(document.getElementsByTagName("script")).reverse(); _i22 < _Array$prototype$slic2.length; _i22++){
                            var script = _Array$prototype$slic2[_i22];
                            if (script.src && script.src === scriptLocation) return script;
                        }
                    } catch (err) {
                    }
                })()) return currentScript;
                throw new Error("Can not determine current script");
            });
            var currentUID = uniqueID();
            var getCurrentScriptUID = memoize(function() {
                var script;
                try {
                    script = getCurrentScript();
                } catch (err) {
                    return currentUID;
                }
                var uid = script.getAttribute(ATTRIBUTES.UID);
                if (uid && "string" == typeof uid) return uid;
                if ((uid = script.getAttribute(ATTRIBUTES.UID + "-auto")) && "string" == typeof uid) return uid;
                if (script.src) {
                    var hashedString = strHashStr(JSON.stringify({
                        src: script.src,
                        dataset: script.dataset
                    }));
                    uid = "uid_" + hashedString.slice(hashedString.length - UID_HASH_LENGTH);
                } else uid = uniqueID();
                script.setAttribute(ATTRIBUTES.UID + "-auto", uid);
                return uid;
            });
            function submitForm(_ref3) {
                var url = _ref3.url, target = _ref3.target, body = _ref3.body, _ref3$method = _ref3.method, method = void 0 === _ref3$method ? "post" : _ref3$method;
                var form = document.createElement("form");
                form.setAttribute("target", target);
                form.setAttribute("method", method);
                form.setAttribute("action", url);
                form.style.display = "none";
                if (body) for(var _i24 = 0, _Object$keys4 = Object.keys(body); _i24 < _Object$keys4.length; _i24++){
                    var _body$key;
                    var key = _Object$keys4[_i24];
                    var input = document.createElement("input");
                    input.setAttribute("name", key);
                    input.setAttribute("value", null == (_body$key = body[key]) ? void 0 : _body$key.toString());
                    form.appendChild(input);
                }
                getBody().appendChild(form);
                form.submit();
                getBody().removeChild(form);
            }
            function getStorage(_ref) {
                var name = _ref.name, _ref$lifetime = _ref.lifetime, lifetime = void 0 === _ref$lifetime ? 1200000 : _ref$lifetime;
                return inlineMemoize(getStorage, function() {
                    var STORAGE_KEY = "__" + name + "_storage__";
                    var newStateID = uniqueID();
                    var accessedStorage;
                    function getState(handler) {
                        var localStorageEnabled = isLocalStorageEnabled();
                        var storage;
                        accessedStorage && (storage = accessedStorage);
                        if (!storage && localStorageEnabled) {
                            var rawStorage = window.localStorage.getItem(STORAGE_KEY);
                            rawStorage && (storage = JSON.parse(rawStorage));
                        }
                        storage || (storage = getGlobal()[STORAGE_KEY]);
                        storage || (storage = {
                            id: newStateID
                        });
                        storage.id || (storage.id = newStateID);
                        accessedStorage = storage;
                        var result = handler(storage);
                        localStorageEnabled ? window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage)) : getGlobal()[STORAGE_KEY] = storage;
                        accessedStorage = null;
                        return result;
                    }
                    function getID() {
                        return getState(function(storage) {
                            return storage.id;
                        });
                    }
                    function getSession(handler) {
                        return getState(function(storage) {
                            var session = storage.__session__;
                            var now = Date.now();
                            session && now - session.created > lifetime && (session = null);
                            session || (session = {
                                guid: uniqueID(),
                                created: now
                            });
                            storage.__session__ = session;
                            return handler(session);
                        });
                    }
                    return {
                        getState: getState,
                        getID: getID,
                        isStateFresh: function() {
                            return getID() === newStateID;
                        },
                        getSessionState: function(handler) {
                            return getSession(function(session) {
                                session.state = session.state || {
                                };
                                return handler(session.state);
                            });
                        },
                        getSessionID: function() {
                            return getSession(function(session) {
                                return session.guid;
                            });
                        }
                    };
                }, [
                    {
                        name: name,
                        lifetime: lifetime
                    }
                ]);
            }
            function getBelterExperimentStorage() {
                return getStorage({
                    name: "belter_experiment"
                });
            }
            function isEventUnique(name) {
                return getBelterExperimentStorage().getSessionState(function(state) {
                    state.loggedBeacons = state.loggedBeacons || [];
                    if (-1 === state.loggedBeacons.indexOf(name)) {
                        state.loggedBeacons.push(name);
                        return !0;
                    }
                    return !1;
                });
            }
            function getRandomInteger(range) {
                return Math.floor(Math.random() * range);
            }
            function experiment(_ref) {
                var name = _ref.name, _ref$sample = _ref.sample, sample = void 0 === _ref$sample ? 50 : _ref$sample, _ref$logTreatment = _ref.logTreatment, logTreatment = void 0 === _ref$logTreatment ? src_util_noop : _ref$logTreatment, _ref$logCheckpoint = _ref.logCheckpoint, logCheckpoint = void 0 === _ref$logCheckpoint ? src_util_noop : _ref$logCheckpoint, _ref$sticky = _ref.sticky;
                var throttle = void 0 === _ref$sticky || _ref$sticky ? function(name) {
                    return getBelterExperimentStorage().getState(function(state) {
                        state.throttlePercentiles = state.throttlePercentiles || {
                        };
                        state.throttlePercentiles[name] = state.throttlePercentiles[name] || getRandomInteger(100);
                        return state.throttlePercentiles[name];
                    });
                }(name) : getRandomInteger(100);
                var group;
                var treatment = name + "_" + (group = throttle < sample ? "test" : sample >= 50 || sample <= throttle && throttle < 2 * sample ? "control" : "throttle");
                var started = !1;
                var forced = !1;
                try {
                    window.localStorage && window.localStorage.getItem(name) && (forced = !0);
                } catch (err) {
                }
                var exp = {
                    isEnabled: function() {
                        return "test" === group || forced;
                    },
                    isDisabled: function() {
                        return "test" !== group && !forced;
                    },
                    getTreatment: function() {
                        return treatment;
                    },
                    log: function(checkpoint, payload) {
                        void 0 === payload && (payload = {
                        });
                        if (!started) return exp;
                        isEventUnique(treatment + "_" + JSON.stringify(payload)) && logTreatment({
                            name: name,
                            treatment: treatment,
                            payload: payload,
                            throttle: throttle
                        });
                        isEventUnique(treatment + "_" + checkpoint + "_" + JSON.stringify(payload)) && logCheckpoint({
                            name: name,
                            treatment: treatment,
                            checkpoint: checkpoint,
                            payload: payload,
                            throttle: throttle
                        });
                        return exp;
                    },
                    logStart: function(payload) {
                        void 0 === payload && (payload = {
                        });
                        started = !0;
                        return exp.log("start", payload);
                    },
                    logComplete: function(payload) {
                        void 0 === payload && (payload = {
                        });
                        return exp.log("complete", payload);
                    }
                };
                return exp;
            }
            function getGlobalNameSpace(_ref) {
                var name = _ref.name, _ref$version = _ref.version, version = void 0 === _ref$version ? "latest" : _ref$version;
                var global = getGlobal();
                var globalKey = "__" + name + "__" + version + "_global__";
                var namespace = global[globalKey] = global[globalKey] || {
                };
                return {
                    get: function(key, defValue) {
                        defValue = defValue || {
                        };
                        return namespace[key] = namespace[key] || defValue;
                    }
                };
            }
            var headerBuilders = [];
            function request(_ref) {
                var url = _ref.url, _ref$method = _ref.method, method = void 0 === _ref$method ? "get" : _ref$method, _ref$headers = _ref.headers, headers = void 0 === _ref$headers ? {
                } : _ref$headers, json = _ref.json, data = _ref.data, body = _ref.body, _ref$win = _ref.win, win = void 0 === _ref$win ? window : _ref$win, _ref$timeout = _ref.timeout, timeout = void 0 === _ref$timeout ? 0 : _ref$timeout;
                return new promise_ZalgoPromise(function(resolve, reject) {
                    if (json && data || json && body || data && json) throw new Error("Only options.json or options.data or options.body should be passed");
                    var normalizedHeaders = {
                    };
                    for(var _i4 = 0, _Object$keys2 = Object.keys(headers); _i4 < _Object$keys2.length; _i4++){
                        var _key2 = _Object$keys2[_i4];
                        normalizedHeaders[_key2.toLowerCase()] = headers[_key2];
                    }
                    json ? normalizedHeaders["content-type"] = normalizedHeaders["content-type"] || "application/json" : (data || body) && (normalizedHeaders["content-type"] = normalizedHeaders["content-type"] || "application/x-www-form-urlencoded; charset=utf-8");
                    normalizedHeaders.accept = normalizedHeaders.accept || "application/json";
                    for(var _i6 = 0; _i6 < headerBuilders.length; _i6++){
                        var builtHeaders = (0, headerBuilders[_i6])();
                        for(var _i8 = 0, _Object$keys4 = Object.keys(builtHeaders); _i8 < _Object$keys4.length; _i8++){
                            var _key3 = _Object$keys4[_i8];
                            normalizedHeaders[_key3.toLowerCase()] = builtHeaders[_key3];
                        }
                    }
                    var xhr = new win.XMLHttpRequest;
                    xhr.addEventListener("load", function() {
                        var responseHeaders = function(rawHeaders) {
                            void 0 === rawHeaders && (rawHeaders = "");
                            var result = {
                            };
                            for(var _i2 = 0, _rawHeaders$trim$spli2 = rawHeaders.trim().split("\n"); _i2 < _rawHeaders$trim$spli2.length; _i2++){
                                var _line$split = _rawHeaders$trim$spli2[_i2].split(":"), _key = _line$split[0], values = _line$split.slice(1);
                                result[_key.toLowerCase()] = values.join(":").trim();
                            }
                            return result;
                        }(this.getAllResponseHeaders());
                        if (!this.status) return reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: no response status code."));
                        var contentType = responseHeaders["content-type"];
                        var isJSON = contentType && (0 === contentType.indexOf("application/json") || 0 === contentType.indexOf("text/json"));
                        var responseBody = this.responseText;
                        try {
                            responseBody = JSON.parse(responseBody);
                        } catch (err) {
                            if (isJSON) return reject(new Error("Invalid json: " + this.responseText + "."));
                        }
                        return resolve({
                            status: this.status,
                            headers: responseHeaders,
                            body: responseBody
                        });
                    }, !1);
                    xhr.addEventListener("error", function(evt) {
                        reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: " + evt.toString() + "."));
                    }, !1);
                    xhr.open(method, url, !0);
                    for(var _key4 in normalizedHeaders)normalizedHeaders.hasOwnProperty(_key4) && xhr.setRequestHeader(_key4, normalizedHeaders[_key4]);
                    json ? body = JSON.stringify(json) : data && (body = Object.keys(data).map(function(key) {
                        return encodeURIComponent(key) + "=" + (data ? encodeURIComponent(data[key]) : "");
                    }).join("&"));
                    xhr.timeout = timeout;
                    xhr.ontimeout = function() {
                        reject(new Error("Request to " + method.toLowerCase() + " " + url + " has timed out"));
                    };
                    xhr.send(body);
                });
            }
            function addHeaderBuilder(method) {
                headerBuilders.push(method);
            }
            var types_TYPES = !0;
            function memoized(target, name, descriptor) {
                descriptor.value = memoize(descriptor.value, {
                    name: name,
                    thisNamespace: !0
                });
            }
            function decorators_promise(target, name, descriptor) {
                descriptor.value = promisify(descriptor.value, {
                    name: name
                });
            }
            function isPerc(str) {
                return "string" == typeof str && /^[0-9]+%$/.test(str);
            }
            function isPx(str) {
                return "string" == typeof str && /^[0-9]+px$/.test(str);
            }
            function toNum(val) {
                if ("number" == typeof val) return val;
                var match = val.match(/^([0-9]+)(px|%)$/);
                if (!match) throw new Error("Could not match css value from " + val);
                return parseInt(match[1], 10);
            }
            function toPx(val) {
                return toNum(val) + "px";
            }
            function toCSS(val) {
                return "number" == typeof val ? toPx(val) : isPerc(val) ? val : toPx(val);
            }
            function percOf(num, perc) {
                return parseInt(num * toNum(perc) / 100, 10);
            }
            function normalizeDimension(dim, max) {
                if ("number" == typeof dim) return dim;
                if (isPerc(dim)) return percOf(max, dim);
                if (isPx(dim)) return toNum(dim);
                throw new Error("Can not normalize dimension: " + dim);
            }
            function wrapPromise(method, _temp) {
                var _ref$timeout = (void 0 === _temp ? {
                } : _temp).timeout, timeout = void 0 === _ref$timeout ? 5000 : _ref$timeout;
                var expected = [];
                var promises = [];
                return new promise_ZalgoPromise(function(resolve, reject) {
                    var timer = setTimeout(function() {
                        expected.length && reject(new Error("Expected " + expected[0].name + " to be called in " + timeout + "ms"));
                        promises.length && reject(new Error("Expected " + promises[0].name + " promise to complete in " + timeout + "ms"));
                    }, timeout);
                    var expect = function(name, handler) {
                        void 0 === handler && (handler = src_util_noop);
                        var exp = {
                            name: name,
                            handler: handler
                        };
                        expected.push(exp);
                        return function() {
                            var _this = this;
                            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                            removeFromArray(expected, exp);
                            var _tryCatch = tryCatch(function() {
                                var _handler;
                                return (_handler = handler).call.apply(_handler, [
                                    _this
                                ].concat(args));
                            }), result = _tryCatch.result, error = _tryCatch.error;
                            if (error) {
                                promises.push({
                                    name: name,
                                    promise: promise_ZalgoPromise.asyncReject(error)
                                });
                                throw error;
                            }
                            promises.push({
                                name: name,
                                promise: promise_ZalgoPromise.resolve(result)
                            });
                            return result;
                        };
                    };
                    var avoid = function(name, fn) {
                        void 0 === fn && (fn = src_util_noop);
                        return function() {
                            var _fn;
                            promises.push({
                                name: name,
                                promise: promise_ZalgoPromise.asyncReject(new Error("Expected " + name + " to not be called"))
                            });
                            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                            return (_fn = fn).call.apply(_fn, [
                                this
                            ].concat(args));
                        };
                    };
                    var expectError = function(name, handler) {
                        void 0 === handler && (handler = src_util_noop);
                        var exp = {
                            name: name,
                            handler: handler
                        };
                        expected.push(exp);
                        return function() {
                            var _this2 = this;
                            for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)args[_key3] = arguments[_key3];
                            removeFromArray(expected, exp);
                            var _tryCatch2 = tryCatch(function() {
                                var _handler2;
                                return (_handler2 = handler).call.apply(_handler2, [
                                    _this2
                                ].concat(args));
                            }), result = _tryCatch2.result, error = _tryCatch2.error;
                            if (error) throw error;
                            promises.push({
                                name: name,
                                promise: promise_ZalgoPromise.resolve(result).then(function() {
                                    throw new Error("Expected " + name + " to throw an error");
                                }, src_util_noop)
                            });
                            return result;
                        };
                    };
                    promises.push({
                        name: "wrapPromise handler",
                        promise: promise_ZalgoPromise.try(function() {
                            return method({
                                expect: expect,
                                avoid: avoid,
                                expectError: expectError,
                                error: avoid,
                                wait: function() {
                                    return promise_ZalgoPromise.resolve();
                                }
                            });
                        })
                    });
                    (function wait() {
                        return promise_ZalgoPromise.try(function() {
                            if (promises.length) {
                                var prom = promises[0];
                                return prom.promise.finally(function() {
                                    removeFromArray(promises, prom);
                                }).then(wait);
                            }
                        }).then(function() {
                            if (expected.length) return promise_ZalgoPromise.delay(10).then(wait);
                        });
                    })().finally(function() {
                        clearTimeout(timer);
                    }).then(resolve, reject);
                });
            }
        }
    ]);
});

},{"process":"1WSHx","buffer":"8iVrL"}],"1WSHx":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"3Zkn4":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
function sleep(msec = 200) {
    return new Promise((resolve)=>setTimeout(resolve, msec)
    );
}
/**
 * @typedef {import("../main").Transaction} Transaction
 */ /**
 * @typedef {import("../main").EncodedTransaction} EncodedTransaction
 */ /**
 * @description Preparate transactions before send it to the bridge.
 * This method changes all ArrayBuffer to base64.
 * @param {Transaction|EncodedTransaction} transaction Transaction provided by the user
 * @returns {any} Return the same input
 */ function prepareTxn(transaction) {
    if (transaction.constructor === Uint8Array) return Buffer.from(transaction).toString("base64");
    else if (typeof transaction === "string") return transaction;
    const txn = Object.assign({
    }, transaction);
    if (txn.note && txn.note.constructor === Uint8Array) txn.note = Buffer.from(txn.note).toString("base64");
    if (txn.assetMetadataHash && txn.assetMetadataHash.constructor === Uint8Array) txn.assetMetadataHash = Buffer.from(txn.assetMetadataHash).toString("base64");
    if (txn.group && txn.group.constructor === Uint8Array) txn.group = Buffer.from(txn.group).toString("base64");
    if (txn.type === "appl" && txn.appApprovalProgram && txn.appApprovalProgram.constructor === Uint8Array) txn.appApprovalProgram = Buffer.from(txn.appApprovalProgram).toString("base64");
    if (txn.type === "appl" && txn.appClearProgram && txn.appClearProgram.constructor === Uint8Array) txn.appClearProgram = Buffer.from(txn.appClearProgram).toString("base64");
    if (txn.type === "appl" && txn.appArgs && txn.appArgs.length > 0) {
        for(let i = 0; i < txn.appArgs.length; i++)if (txn.appArgs[i].constructor === Uint8Array) txn.appArgs[i] = Buffer.from(txn.appArgs[i]).toString("base64");
    }
    return txn;
}
module.exports = {
    sleep,
    prepareTxn
};

},{"buffer":"8iVrL"}],"7V7Ax":[function(require,module,exports) {
const Errors = {
    WINDOW_NOT_LOADED: "Window not loaded",
    WINDOW_IS_OPENED: "Windows is opened"
};
module.exports = Errors;

},{}],"8rykV":[function(require,module,exports) {
const Messenger = require("@randlabs/communication-bridge");
const WALLET_BRIDGE_CHANNEL_NAME = "wallet-bridge-communication-channel";
class Messaging {
    /**
	 * @description Request object
	 * @typedef {Object} Request
	 * @property {string} method Request method
	 * @property {Object} [params] Optionally, request params
	 */ /**
	 * @description Response object
	 * @typedef {Object} Response
	 * @property {"error"|"success"} status Response status
	 * @property {string} message Response message
	 * @property {Object} [data] Optionally, is the request was a success and sent data
	 */ /**
	 * @description Callback function to manage message received from the channel
     * @callback onMessagingCallback
     * @param {Request} request Request received from another window
     * @param {sendResponse} cb Response callback
	 * @returns {void}
     */ /**
     * @constructor Messaging constructor
     * @param {onMessagingCallback} [listenerCallback]
     * @description Create an abstraction of Messenger class
     */ constructor(listenerCallback){
        const that = this;
        /**
		 * @access public
		 * @description Send message options
		 * @type {import("bridge-communication").sendMessageOptions}
		 */ this.options = {
            waitForReply: true,
            timeout: 250
        };
        /**
		 * @access private
		 */ this.listenerCallback = listenerCallback;
        /**
		 * @access private
		 * @type {Messenger}
		 */ this.bridge = new Messenger(WALLET_BRIDGE_CHANNEL_NAME, function(req, source, cb, bridge) {
            if (that.listenerCallback) that.listenerCallback(req, cb);
        });
    }
    /**
	 * @access public
     * @description Send message to a target window
     * @param {Window} window Target window
     * @param {Request} request Request
     * @param {string} origin Target origin
	 * @param {import("bridge-communication").sendMessageOptions} [options] Override default message options
	 * @returns {Promise<Response>} Response of the target window
     */ sendMessage(window, request, origin, options) {
        return this.bridge.sendMessage(window, request, origin, options ? options : this.options);
    }
    /**
	 * @access public
	 * @description Set new listener
	 * @param {onMessagingCallback} [listenerCallback] Set a new listener or override actual listener
	 * @returns {void}
	 */ setNewListener(listenerCallback1) {
        this.listenerCallback = listenerCallback1;
    }
    /**
	 * @access public
	 * @description Close bridge
	 * @returns {void}
	 */ close() {
        this.bridge.close();
    }
}
module.exports = Messaging;

},{"@randlabs/communication-bridge":"4T9Sa"}],"4T9Sa":[function(require,module,exports) {
module.exports = require("./lib/messenger");

},{"./lib/messenger":"80mYk"}],"80mYk":[function(require,module,exports) {
class Messenger {
    /**
	 * @callback onMessage
	 * @param {error} err
	 * @param {Object} result
	 */ /**
	 * @description Callback function to send response to the window source of the message
	 * @callback sendResponse
	 * @param {Object} response Message response
	 * @returns {void}
	 */ /**
	 * @description Callback function to manage message received from the channel
     * @callback onMessageCallback
     * @param {Object} json
	 * @param {Window} source
     * @param {sendResponse} cb
	 * @param {Messenger} bridge
	 * @returns {void}
     */ /**
	 * @description Send message options
	 * @typedef {Object} sendMessageOptions
	 * @property {boolean} waitForReply Wait for a reply from the recipient
	 * @property {string} origin Override Window.origin
	 * @property {number} timeout Timeout to wait for reply message, default 4000 msec
	 */ /**
     * @param {string} channelName  Channel Name
     * @param {onMessageCallback} [onMessageCallback] Callback function
     */ constructor(channelName, onMessageCallback){
        this.channelName = channelName;
        this.onMessage = onMessageCallback;
        this._installListener();
        /**
		 * @access private
		 * @typedef {Object.<string, onMessage>} RequestObject Request objects
		 * @type {RequestObject} _requests Mapping of request ids to callbacks
		 */ this._requests = new Map();
        /**
		 * @access private
		 * @type {number} Next request id
		 */ this._nextId = 0;
        /**
		 * @access private
		 * @type {number} Time to wait for the message response
		 */ this._defaultTimeout = 4000;
    }
    /**
	 * @access private
	 */ _installListener() {
        const that = this;
        /**
		 * @access private
		 * @param {Window} this
		 * @param {MessageEvent} event
		 */ this._listener = function(event) {
            // Ignore invalid messages or those after the client has closed
            if (!event.data || typeof event.data !== 'string') return;
            let json;
            try {
                json = JSON.parse(event.data);
                if (!json.channel || json.channel !== that.channelName) return;
                if (typeof json.message !== 'object') return;
            } catch (err) {
                // Ignore malformed messages or not targetting us
                return;
            }
            // Add request callback
            if (typeof json.replyId !== 'undefined') {
                if (typeof json.replyId !== 'number' || json.replyId % 1 !== 0) return;
                // If we have a message waiting for a reply, process it, else ignore
                const req = that._requests.get(json.replyId);
                if (req) {
                    clearTimeout(req.timeout);
                    that._requests.delete(json.replyId);
                    req.resolve(json.message);
                }
            } else {
                if (typeof json.id !== 'number' || json.id % 1 !== 0 || !that.onMessage) return;
                // We received a message
                const channel = that.channelName;
                const replyId = json.id;
                const origin = event.origin;
                const replyMessage = function(message) {
                    const request = {
                        channel,
                        replyId,
                        message: message
                    };
                    event.source.postMessage(JSON.stringify(request), origin);
                };
                that.onMessage(json.message, event.origin, event.source, replyMessage, that);
            }
        };
        window.addEventListener("message", this._listener);
    }
    /**
	 * @access public
	 * @description Send a message to another window
	 * @param {Window} targetWindow Target Window
	 * @param {Object} message Object Message
	 * @param {string} origin Target origin
	 * @param {sendMessageOptions} [options] Object Message
	 * @returns {Promise<any>} Returns
	 */ sendMessage(targetWindow, message, origin, options) {
        // Prepare message
        const request = {
            channel: this.channelName,
            id: this.getNextId(),
            message: message
        };
        if (options && options.waitForReply) {
            const that = this;
            return new Promise(function(resolve, reject) {
                // Set a timeout if a response is not received
                const timeout = setTimeout(function() {
                    const req = that._requests.get(request.id);
                    if (req) {
                        that._requests.delete(request.id);
                        reject(new Error('Timeout expired for the message response'));
                    }
                }, options && options.timeout ? options.timeout : that._defaultTimeout);
                that._requests.set(request.id, {
                    timeout,
                    resolve
                });
                targetWindow.postMessage(JSON.stringify(request), origin);
            });
        }
        targetWindow.postMessage(JSON.stringify(request), origin);
    }
    /**
	 * @access public
	 * @description Close client connection
	 */ close() {
        window.removeEventListener('message', this._listener);
        this._listener = null;
        delete this._requests;
    }
    /**
	 * @access private
	 */ getNextId() {
        this._nextId += 1;
        return this._nextId;
    }
}
module.exports = Messenger;

},{}],"45vRn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("@walletconnect/core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _isoCrypto = require("@walletconnect/iso-crypto");
class WalletConnect extends _coreDefault.default {
    constructor(connectorOpts, pushServerOpts){
        super({
            cryptoLib: _isoCrypto,
            connectorOpts,
            pushServerOpts
        });
    }
}
exports.default = WalletConnect;

},{"@walletconnect/core":"8BHJw","@walletconnect/iso-crypto":"2TzeP","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"8BHJw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("@walletconnect/utils");
var _socketTransport = require("@walletconnect/socket-transport");
var _socketTransportDefault = parcelHelpers.interopDefault(_socketTransport);
var _errors = require("./errors");
var _events = require("./events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var _storage = require("./storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
var _url = require("./url");
class Connector {
    constructor(opts){
        this.protocol = "wc";
        this.version = 1;
        this._bridge = "";
        this._key = null;
        this._clientId = "";
        this._clientMeta = null;
        this._peerId = "";
        this._peerMeta = null;
        this._handshakeId = 0;
        this._handshakeTopic = "";
        this._connected = false;
        this._accounts = [];
        this._chainId = 0;
        this._networkId = 0;
        this._rpcUrl = "";
        this._eventManager = new _eventsDefault.default();
        this._clientMeta = _utils.getClientMeta() || opts.connectorOpts.clientMeta || null;
        this._cryptoLib = opts.cryptoLib;
        this._sessionStorage = opts.sessionStorage || new _storageDefault.default(opts.connectorOpts.storageId);
        this._qrcodeModal = opts.connectorOpts.qrcodeModal;
        this._qrcodeModalOptions = opts.connectorOpts.qrcodeModalOptions;
        this._signingMethods = [
            ..._utils.signingMethods,
            ...opts.connectorOpts.signingMethods || []
        ];
        if (!opts.connectorOpts.bridge && !opts.connectorOpts.uri && !opts.connectorOpts.session) throw new Error(_errors.ERROR_MISSING_REQUIRED);
        if (opts.connectorOpts.bridge) this.bridge = _url.getBridgeUrl(opts.connectorOpts.bridge);
        if (opts.connectorOpts.uri) this.uri = opts.connectorOpts.uri;
        const session = opts.connectorOpts.session || this._getStorageSession();
        if (session) this.session = session;
        if (this.handshakeId) this._subscribeToSessionResponse(this.handshakeId, "Session request rejected");
        this._transport = opts.transport || new _socketTransportDefault.default({
            protocol: this.protocol,
            version: this.version,
            url: this.bridge,
            subscriptions: [
                this.clientId
            ]
        });
        this._subscribeToInternalEvents();
        this._initTransport();
        if (opts.connectorOpts.uri) this._subscribeToSessionRequest();
        if (opts.pushServerOpts) this._registerPushServer(opts.pushServerOpts);
    }
    set bridge(value) {
        if (!value) return;
        this._bridge = value;
    }
    get bridge() {
        return this._bridge;
    }
    set key(value1) {
        if (!value1) return;
        const key = _utils.convertHexToArrayBuffer(value1);
        this._key = key;
    }
    get key() {
        if (this._key) {
            const key = _utils.convertArrayBufferToHex(this._key, true);
            return key;
        }
        return "";
    }
    set clientId(value2) {
        if (!value2) return;
        this._clientId = value2;
    }
    get clientId() {
        let clientId = this._clientId;
        if (!clientId) clientId = this._clientId = _utils.uuid();
        return this._clientId;
    }
    set peerId(value3) {
        if (!value3) return;
        this._peerId = value3;
    }
    get peerId() {
        return this._peerId;
    }
    set clientMeta(value4) {
    }
    get clientMeta() {
        let clientMeta = this._clientMeta;
        if (!clientMeta) clientMeta = this._clientMeta = _utils.getClientMeta();
        return clientMeta;
    }
    set peerMeta(value5) {
        this._peerMeta = value5;
    }
    get peerMeta() {
        const peerMeta = this._peerMeta;
        return peerMeta;
    }
    set handshakeTopic(value6) {
        if (!value6) return;
        this._handshakeTopic = value6;
    }
    get handshakeTopic() {
        return this._handshakeTopic;
    }
    set handshakeId(value7) {
        if (!value7) return;
        this._handshakeId = value7;
    }
    get handshakeId() {
        return this._handshakeId;
    }
    get uri() {
        const _uri = this._formatUri();
        return _uri;
    }
    set uri(value8) {
        if (!value8) return;
        const { handshakeTopic , bridge , key  } = this._parseUri(value8);
        this.handshakeTopic = handshakeTopic;
        this.bridge = bridge;
        this.key = key;
    }
    set chainId(value9) {
        this._chainId = value9;
    }
    get chainId() {
        const chainId = this._chainId;
        return chainId;
    }
    set networkId(value10) {
        this._networkId = value10;
    }
    get networkId() {
        const networkId = this._networkId;
        return networkId;
    }
    set accounts(value11) {
        this._accounts = value11;
    }
    get accounts() {
        const accounts = this._accounts;
        return accounts;
    }
    set rpcUrl(value12) {
        this._rpcUrl = value12;
    }
    get rpcUrl() {
        const rpcUrl = this._rpcUrl;
        return rpcUrl;
    }
    set connected(value13) {
    }
    get connected() {
        return this._connected;
    }
    set pending(value14) {
    }
    get pending() {
        return !!this._handshakeTopic;
    }
    get session() {
        return {
            connected: this.connected,
            accounts: this.accounts,
            chainId: this.chainId,
            bridge: this.bridge,
            key: this.key,
            clientId: this.clientId,
            clientMeta: this.clientMeta,
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            handshakeId: this.handshakeId,
            handshakeTopic: this.handshakeTopic
        };
    }
    set session(value15) {
        if (!value15) return;
        this._connected = value15.connected;
        this.accounts = value15.accounts;
        this.chainId = value15.chainId;
        this.bridge = value15.bridge;
        this.key = value15.key;
        this.clientId = value15.clientId;
        this.clientMeta = value15.clientMeta;
        this.peerId = value15.peerId;
        this.peerMeta = value15.peerMeta;
        this.handshakeId = value15.handshakeId;
        this.handshakeTopic = value15.handshakeTopic;
    }
    on(event, callback) {
        const eventEmitter = {
            event,
            callback
        };
        this._eventManager.subscribe(eventEmitter);
    }
    off(event1) {
        this._eventManager.unsubscribe(event1);
    }
    async createInstantRequest(instantRequest) {
        this._key = await this._generateKey();
        const request = this._formatRequest({
            method: "wc_instantRequest",
            params: [
                {
                    peerId: this.clientId,
                    peerMeta: this.clientMeta,
                    request: this._formatRequest(instantRequest)
                }, 
            ]
        });
        this.handshakeId = request.id;
        this.handshakeTopic = _utils.uuid();
        this._eventManager.trigger({
            event: "display_uri",
            params: [
                this.uri
            ]
        });
        this.on("modal_closed", ()=>{
            throw new Error(_errors.ERROR_QRCODE_MODAL_USER_CLOSED);
        });
        const endInstantRequest = ()=>{
            this.killSession();
        };
        try {
            const result = await this._sendCallRequest(request);
            if (result) endInstantRequest();
            return result;
        } catch (error) {
            endInstantRequest();
            throw error;
        }
    }
    async connect(opts1) {
        if (!this._qrcodeModal) throw new Error(_errors.ERROR_QRCODE_MODAL_NOT_PROVIDED);
        if (this.connected) return {
            chainId: this.chainId,
            accounts: this.accounts
        };
        await this.createSession(opts1);
        return new Promise(async (resolve, reject)=>{
            this.on("modal_closed", ()=>reject(new Error(_errors.ERROR_QRCODE_MODAL_USER_CLOSED))
            );
            this.on("connect", (error, payload)=>{
                if (error) return reject(error);
                resolve(payload.params[0]);
            });
        });
    }
    async createSession(opts2) {
        if (this._connected) throw new Error(_errors.ERROR_SESSION_CONNECTED);
        if (this.pending) return;
        this._key = await this._generateKey();
        const request = this._formatRequest({
            method: "wc_sessionRequest",
            params: [
                {
                    peerId: this.clientId,
                    peerMeta: this.clientMeta,
                    chainId: opts2 && opts2.chainId ? opts2.chainId : null
                }, 
            ]
        });
        this.handshakeId = request.id;
        this.handshakeTopic = _utils.uuid();
        this._sendSessionRequest(request, "Session update rejected", {
            topic: this.handshakeTopic
        });
        this._eventManager.trigger({
            event: "display_uri",
            params: [
                this.uri
            ]
        });
    }
    approveSession(sessionStatus) {
        if (this._connected) throw new Error(_errors.ERROR_SESSION_CONNECTED);
        this.chainId = sessionStatus.chainId;
        this.accounts = sessionStatus.accounts;
        this.networkId = sessionStatus.networkId || 0;
        this.rpcUrl = sessionStatus.rpcUrl || "";
        const sessionParams = {
            approved: true,
            chainId: this.chainId,
            networkId: this.networkId,
            accounts: this.accounts,
            rpcUrl: this.rpcUrl,
            peerId: this.clientId,
            peerMeta: this.clientMeta
        };
        const response = {
            id: this.handshakeId,
            jsonrpc: "2.0",
            result: sessionParams
        };
        this._sendResponse(response);
        this._connected = true;
        this._setStorageSession();
        this._eventManager.trigger({
            event: "connect",
            params: [
                {
                    peerId: this.peerId,
                    peerMeta: this.peerMeta,
                    chainId: this.chainId,
                    accounts: this.accounts
                }, 
            ]
        });
    }
    rejectSession(sessionError) {
        if (this._connected) throw new Error(_errors.ERROR_SESSION_CONNECTED);
        const message = sessionError && sessionError.message ? sessionError.message : _errors.ERROR_SESSION_REJECTED;
        const response = this._formatResponse({
            id: this.handshakeId,
            error: {
                message
            }
        });
        this._sendResponse(response);
        this._connected = false;
        this._eventManager.trigger({
            event: "disconnect",
            params: [
                {
                    message
                }
            ]
        });
        this._removeStorageSession();
    }
    updateSession(sessionStatus1) {
        if (!this._connected) throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
        this.chainId = sessionStatus1.chainId;
        this.accounts = sessionStatus1.accounts;
        this.networkId = sessionStatus1.networkId || 0;
        this.rpcUrl = sessionStatus1.rpcUrl || "";
        const sessionParams = {
            approved: true,
            chainId: this.chainId,
            networkId: this.networkId,
            accounts: this.accounts,
            rpcUrl: this.rpcUrl
        };
        const request = this._formatRequest({
            method: "wc_sessionUpdate",
            params: [
                sessionParams
            ]
        });
        this._sendSessionRequest(request, "Session update rejected");
        this._eventManager.trigger({
            event: "session_update",
            params: [
                {
                    chainId: this.chainId,
                    accounts: this.accounts
                }, 
            ]
        });
        this._manageStorageSession();
    }
    async killSession(sessionError1) {
        const message = sessionError1 ? sessionError1.message : "Session Disconnected";
        const sessionParams = {
            approved: false,
            chainId: null,
            networkId: null,
            accounts: null
        };
        const request = this._formatRequest({
            method: "wc_sessionUpdate",
            params: [
                sessionParams
            ]
        });
        await this._sendRequest(request);
        this._handleSessionDisconnect(message);
    }
    async sendTransaction(tx) {
        if (!this._connected) throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
        const parsedTx = _utils.parseTransactionData(tx);
        const request = this._formatRequest({
            method: "eth_sendTransaction",
            params: [
                parsedTx
            ]
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    async signTransaction(tx1) {
        if (!this._connected) throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
        const parsedTx = _utils.parseTransactionData(tx1);
        const request = this._formatRequest({
            method: "eth_signTransaction",
            params: [
                parsedTx
            ]
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    async signMessage(params) {
        if (!this._connected) throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
        const request = this._formatRequest({
            method: "eth_sign",
            params
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    async signPersonalMessage(params1) {
        if (!this._connected) throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
        params1 = _utils.parsePersonalSign(params1);
        const request = this._formatRequest({
            method: "personal_sign",
            params: params1
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    async signTypedData(params2) {
        if (!this._connected) throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
        const request = this._formatRequest({
            method: "eth_signTypedData",
            params: params2
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    async updateChain(chainParams) {
        if (!this._connected) throw new Error("Session currently disconnected");
        const request = this._formatRequest({
            method: "wallet_updateChain",
            params: [
                chainParams
            ]
        });
        const result = await this._sendCallRequest(request);
        return result;
    }
    unsafeSend(request6, options) {
        this._sendRequest(request6, options);
        this._eventManager.trigger({
            event: "call_request_sent",
            params: [
                {
                    request: request6,
                    options
                }
            ]
        });
        return new Promise((resolve, reject)=>{
            this._subscribeToResponse(request6.id, (error, payload)=>{
                if (error) {
                    reject(error);
                    return;
                }
                if (!payload) throw new Error(_errors.ERROR_MISSING_JSON_RPC);
                resolve(payload);
            });
        });
    }
    async sendCustomRequest(request1, options1) {
        if (!this._connected) throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
        switch(request1.method){
            case "eth_accounts":
                return this.accounts;
            case "eth_chainId":
                return _utils.convertNumberToHex(this.chainId);
            case "eth_sendTransaction":
            case "eth_signTransaction":
                if (request1.params) request1.params[0] = _utils.parseTransactionData(request1.params[0]);
                break;
            case "personal_sign":
                if (request1.params) request1.params = _utils.parsePersonalSign(request1.params);
                break;
            default:
                break;
        }
        const formattedRequest = this._formatRequest(request1);
        const result = await this._sendCallRequest(formattedRequest, options1);
        return result;
    }
    approveRequest(response4) {
        if (_utils.isJsonRpcResponseSuccess(response4)) {
            const formattedResponse = this._formatResponse(response4);
            this._sendResponse(formattedResponse);
        } else throw new Error(_errors.ERROR_MISSING_RESULT);
    }
    rejectRequest(response1) {
        if (_utils.isJsonRpcResponseError(response1)) {
            const formattedResponse = this._formatResponse(response1);
            this._sendResponse(formattedResponse);
        } else throw new Error(_errors.ERROR_MISSING_ERROR);
    }
    transportClose() {
        this._transport.close();
    }
    async _sendRequest(request2, options2) {
        const callRequest = this._formatRequest(request2);
        const encryptionPayload = await this._encrypt(callRequest);
        const topic = typeof (options2 === null || options2 === void 0 ? void 0 : options2.topic) !== "undefined" ? options2.topic : this.peerId;
        const payload = JSON.stringify(encryptionPayload);
        const silent = typeof (options2 === null || options2 === void 0 ? void 0 : options2.forcePushNotification) !== "undefined" ? !options2.forcePushNotification : _utils.isSilentPayload(callRequest);
        this._transport.send(payload, topic, silent);
    }
    async _sendResponse(response2) {
        const encryptionPayload = await this._encrypt(response2);
        const topic = this.peerId;
        const payload = JSON.stringify(encryptionPayload);
        const silent = true;
        this._transport.send(payload, topic, silent);
    }
    async _sendSessionRequest(request3, errorMsg, options3) {
        this._sendRequest(request3, options3);
        this._subscribeToSessionResponse(request3.id, errorMsg);
    }
    _sendCallRequest(request4, options4) {
        this._sendRequest(request4, options4);
        this._eventManager.trigger({
            event: "call_request_sent",
            params: [
                {
                    request: request4,
                    options: options4
                }
            ]
        });
        return this._subscribeToCallResponse(request4.id);
    }
    _formatRequest(request5) {
        if (typeof request5.method === "undefined") throw new Error(_errors.ERROR_MISSING_METHOD);
        const formattedRequest = {
            id: typeof request5.id === "undefined" ? _utils.payloadId() : request5.id,
            jsonrpc: "2.0",
            method: request5.method,
            params: typeof request5.params === "undefined" ? [] : request5.params
        };
        return formattedRequest;
    }
    _formatResponse(response3) {
        if (typeof response3.id === "undefined") throw new Error(_errors.ERROR_MISSING_ID);
        const baseResponse = {
            id: response3.id,
            jsonrpc: "2.0"
        };
        if (_utils.isJsonRpcResponseError(response3)) {
            const error = _utils.formatRpcError(response3.error);
            const errorResponse = Object.assign(Object.assign(Object.assign({
            }, baseResponse), response3), {
                error
            });
            return errorResponse;
        } else if (_utils.isJsonRpcResponseSuccess(response3)) {
            const successResponse = Object.assign(Object.assign({
            }, baseResponse), response3);
            return successResponse;
        }
        throw new Error(_errors.ERROR_INVALID_RESPONSE);
    }
    _handleSessionDisconnect(errorMsg1) {
        const message = errorMsg1 || "Session Disconnected";
        if (!this._connected) {
            if (this._qrcodeModal) this._qrcodeModal.close();
            _utils.removeLocal(_utils.mobileLinkChoiceKey);
        }
        if (this._connected) this._connected = false;
        if (this._handshakeId) this._handshakeId = 0;
        if (this._handshakeTopic) this._handshakeTopic = "";
        this._eventManager.trigger({
            event: "disconnect",
            params: [
                {
                    message
                }
            ]
        });
        this._removeStorageSession();
        this.transportClose();
    }
    _handleSessionResponse(errorMsg2, sessionParams) {
        if (sessionParams) {
            if (sessionParams.approved) {
                if (!this._connected) {
                    this._connected = true;
                    if (sessionParams.chainId) this.chainId = sessionParams.chainId;
                    if (sessionParams.accounts) this.accounts = sessionParams.accounts;
                    if (sessionParams.peerId && !this.peerId) this.peerId = sessionParams.peerId;
                    if (sessionParams.peerMeta && !this.peerMeta) this.peerMeta = sessionParams.peerMeta;
                    this._eventManager.trigger({
                        event: "connect",
                        params: [
                            {
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }, 
                        ]
                    });
                } else {
                    if (sessionParams.chainId) this.chainId = sessionParams.chainId;
                    if (sessionParams.accounts) this.accounts = sessionParams.accounts;
                    this._eventManager.trigger({
                        event: "session_update",
                        params: [
                            {
                                chainId: this.chainId,
                                accounts: this.accounts
                            }, 
                        ]
                    });
                }
                this._manageStorageSession();
            } else this._handleSessionDisconnect(errorMsg2);
        } else this._handleSessionDisconnect(errorMsg2);
    }
    async _handleIncomingMessages(socketMessage1) {
        const activeTopics = [
            this.clientId,
            this.handshakeTopic
        ];
        if (!activeTopics.includes(socketMessage1.topic)) return;
        let encryptionPayload;
        try {
            encryptionPayload = JSON.parse(socketMessage1.payload);
        } catch (error) {
            return;
        }
        const payload = await this._decrypt(encryptionPayload);
        if (payload) this._eventManager.trigger(payload);
    }
    _subscribeToSessionRequest() {
        this._transport.subscribe(this.handshakeTopic);
    }
    _subscribeToResponse(id, callback1) {
        this.on(`response:${id}`, callback1);
    }
    _subscribeToSessionResponse(id1, errorMsg3) {
        this._subscribeToResponse(id1, (error, payload)=>{
            if (error) {
                this._handleSessionResponse(error.message);
                return;
            }
            if (payload.result) this._handleSessionResponse(errorMsg3, payload.result);
            else if (payload.error && payload.error.message) this._handleSessionResponse(payload.error.message);
            else this._handleSessionResponse(errorMsg3);
        });
    }
    _subscribeToCallResponse(id2) {
        return new Promise((resolve, reject)=>{
            this._subscribeToResponse(id2, (error, payload)=>{
                if (error) {
                    reject(error);
                    return;
                }
                if (payload.result) resolve(payload.result);
                else if (payload.error && payload.error.message) reject(new Error(payload.error.message));
                else reject(new Error(_errors.ERROR_INVALID_RESPONSE));
            });
        });
    }
    _subscribeToInternalEvents() {
        this.on("display_uri", ()=>{
            if (this._qrcodeModal) this._qrcodeModal.open(this.uri, ()=>{
                this._eventManager.trigger({
                    event: "modal_closed",
                    params: []
                });
            }, this._qrcodeModalOptions);
        });
        this.on("connect", ()=>{
            if (this._qrcodeModal) this._qrcodeModal.close();
        });
        this.on("call_request_sent", (error, payload)=>{
            const { request  } = payload.params[0];
            if (_utils.isMobile() && this._signingMethods.includes(request.method)) {
                const mobileLinkUrl = _utils.getLocal(_utils.mobileLinkChoiceKey);
                if (mobileLinkUrl) window.location.href = mobileLinkUrl.href;
            }
        });
        this.on("wc_sessionRequest", (error, payload)=>{
            if (error) this._eventManager.trigger({
                event: "error",
                params: [
                    {
                        code: "SESSION_REQUEST_ERROR",
                        message: error.toString()
                    }, 
                ]
            });
            this.handshakeId = payload.id;
            this.peerId = payload.params[0].peerId;
            this.peerMeta = payload.params[0].peerMeta;
            const internalPayload = Object.assign(Object.assign({
            }, payload), {
                method: "session_request"
            });
            this._eventManager.trigger(internalPayload);
        });
        this.on("wc_sessionUpdate", (error, payload)=>{
            if (error) this._handleSessionResponse(error.message);
            this._handleSessionResponse("Session disconnected", payload.params[0]);
        });
    }
    _initTransport() {
        this._transport.on("message", (socketMessage)=>this._handleIncomingMessages(socketMessage)
        );
        this._transport.on("open", ()=>this._eventManager.trigger({
                event: "transport_open",
                params: []
            })
        );
        this._transport.on("close", ()=>this._eventManager.trigger({
                event: "transport_close",
                params: []
            })
        );
        this._transport.on("error", ()=>this._eventManager.trigger({
                event: "transport_error",
                params: [
                    "Websocket connection failed"
                ]
            })
        );
        this._transport.open();
    }
    _formatUri() {
        const protocol = this.protocol;
        const handshakeTopic = this.handshakeTopic;
        const version = this.version;
        const bridge = encodeURIComponent(this.bridge);
        const key = this.key;
        const uri = `${protocol}:${handshakeTopic}@${version}?bridge=${bridge}&key=${key}`;
        return uri;
    }
    _parseUri(uri) {
        const result = _utils.parseWalletConnectUri(uri);
        if (result.protocol === this.protocol) {
            if (!result.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
            const handshakeTopic = result.handshakeTopic;
            if (!result.bridge) throw Error("Invalid or missing bridge url parameter value");
            const bridge = decodeURIComponent(result.bridge);
            if (!result.key) throw Error("Invalid or missing key parameter value");
            const key = result.key;
            return {
                handshakeTopic,
                bridge,
                key
            };
        } else throw new Error(_errors.ERROR_INVALID_URI);
    }
    async _generateKey() {
        if (this._cryptoLib) {
            const result = await this._cryptoLib.generateKey();
            return result;
        }
        return null;
    }
    async _encrypt(data) {
        const key = this._key;
        if (this._cryptoLib && key) {
            const result = await this._cryptoLib.encrypt(data, key);
            return result;
        }
        return null;
    }
    async _decrypt(payload1) {
        const key = this._key;
        if (this._cryptoLib && key) {
            const result = await this._cryptoLib.decrypt(payload1, key);
            return result;
        }
        return null;
    }
    _getStorageSession() {
        let result = null;
        if (this._sessionStorage) result = this._sessionStorage.getSession();
        return result;
    }
    _setStorageSession() {
        if (this._sessionStorage) this._sessionStorage.setSession(this.session);
    }
    _removeStorageSession() {
        if (this._sessionStorage) this._sessionStorage.removeSession();
    }
    _manageStorageSession() {
        if (this._connected) this._setStorageSession();
        else this._removeStorageSession();
    }
    _registerPushServer(pushServerOpts) {
        if (!pushServerOpts.url || typeof pushServerOpts.url !== "string") throw Error("Invalid or missing pushServerOpts.url parameter value");
        if (!pushServerOpts.type || typeof pushServerOpts.type !== "string") throw Error("Invalid or missing pushServerOpts.type parameter value");
        if (!pushServerOpts.token || typeof pushServerOpts.token !== "string") throw Error("Invalid or missing pushServerOpts.token parameter value");
        const pushSubscription = {
            bridge: this.bridge,
            topic: this.clientId,
            type: pushServerOpts.type,
            token: pushServerOpts.token,
            peerName: "",
            language: pushServerOpts.language || ""
        };
        this.on("connect", async (error, payload)=>{
            if (error) throw error;
            if (pushServerOpts.peerMeta) {
                const peerName = payload.params[0].peerMeta.name;
                pushSubscription.peerName = peerName;
            }
            try {
                const response = await fetch(`${pushServerOpts.url}/new`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(pushSubscription)
                });
                const json = await response.json();
                if (!json.success) throw Error("Failed to register in Push Server");
            } catch (error1) {
                throw Error("Failed to register in Push Server");
            }
        });
    }
}
exports.default = Connector;

},{"@walletconnect/utils":"fMxrC","@walletconnect/socket-transport":"aznR2","./errors":"hluLe","./events":"9pPrk","./storage":"jZgdg","./url":"4RlPV","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"fMxrC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _browserUtils = require("@walletconnect/browser-utils");
parcelHelpers.exportAll(_browserUtils, exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _encoding = require("./encoding");
parcelHelpers.exportAll(_encoding, exports);
var _ethereum = require("./ethereum");
parcelHelpers.exportAll(_ethereum, exports);
var _misc = require("./misc");
parcelHelpers.exportAll(_misc, exports);
var _payload = require("./payload");
parcelHelpers.exportAll(_payload, exports);
var _session = require("./session");
parcelHelpers.exportAll(_session, exports);
var _url = require("./url");
parcelHelpers.exportAll(_url, exports);
var _validators = require("./validators");
parcelHelpers.exportAll(_validators, exports);

},{"@walletconnect/browser-utils":"6C6gV","./constants":"2Phe1","./encoding":"gk54y","./ethereum":"iHhN3","./misc":"aZ61Y","./payload":"he6PS","./session":"lW0p6","./url":"dTvt8","./validators":"5SccW","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"6C6gV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _browser = require("./browser");
parcelHelpers.exportAll(_browser, exports);
var _json = require("./json");
parcelHelpers.exportAll(_json, exports);
var _local = require("./local");
parcelHelpers.exportAll(_local, exports);
var _mobile = require("./mobile");
parcelHelpers.exportAll(_mobile, exports);
var _registry = require("./registry");
parcelHelpers.exportAll(_registry, exports);

},{"./browser":"672ka","./json":"eroZD","./local":"lpIyr","./mobile":"ldU4S","./registry":"kGt4A","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"672ka":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectEnv", ()=>detectEnv
);
parcelHelpers.export(exports, "detectOS", ()=>detectOS
);
parcelHelpers.export(exports, "isAndroid", ()=>isAndroid
);
parcelHelpers.export(exports, "isIOS", ()=>isIOS
);
parcelHelpers.export(exports, "isMobile", ()=>isMobile
);
parcelHelpers.export(exports, "isNode", ()=>isNode
);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser
);
parcelHelpers.export(exports, "getFromWindow", ()=>getFromWindow
);
parcelHelpers.export(exports, "getFromWindowOrThrow", ()=>getFromWindowOrThrow
);
parcelHelpers.export(exports, "getDocumentOrThrow", ()=>getDocumentOrThrow
);
parcelHelpers.export(exports, "getDocument", ()=>getDocument
);
parcelHelpers.export(exports, "getNavigatorOrThrow", ()=>getNavigatorOrThrow
);
parcelHelpers.export(exports, "getNavigator", ()=>getNavigator
);
parcelHelpers.export(exports, "getLocationOrThrow", ()=>getLocationOrThrow
);
parcelHelpers.export(exports, "getLocation", ()=>getLocation
);
parcelHelpers.export(exports, "getCryptoOrThrow", ()=>getCryptoOrThrow
);
parcelHelpers.export(exports, "getCrypto", ()=>getCrypto
);
parcelHelpers.export(exports, "getLocalStorageOrThrow", ()=>getLocalStorageOrThrow
);
parcelHelpers.export(exports, "getLocalStorage", ()=>getLocalStorage
);
parcelHelpers.export(exports, "getClientMeta", ()=>getClientMeta
);
var _windowMetadata = require("@walletconnect/window-metadata");
var _windowGetters = require("@walletconnect/window-getters");
var _detectBrowser = require("detect-browser");
function detectEnv(userAgent) {
    return _detectBrowser.detect(userAgent);
}
function detectOS() {
    const env = detectEnv();
    return env && env.os ? env.os : undefined;
}
function isAndroid() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("android") : false;
}
function isIOS() {
    const os = detectOS();
    return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}
function isMobile() {
    const os = detectOS();
    return os ? isAndroid() || isIOS() : false;
}
function isNode() {
    const env = detectEnv();
    const result = env && env.name ? env.name.toLowerCase() === "node" : false;
    return result;
}
function isBrowser() {
    const result = !isNode() && !!getNavigator();
    return result;
}
const getFromWindow = _windowGetters.getFromWindow;
const getFromWindowOrThrow = _windowGetters.getFromWindowOrThrow;
const getDocumentOrThrow = _windowGetters.getDocumentOrThrow;
const getDocument = _windowGetters.getDocument;
const getNavigatorOrThrow = _windowGetters.getNavigatorOrThrow;
const getNavigator = _windowGetters.getNavigator;
const getLocationOrThrow = _windowGetters.getLocationOrThrow;
const getLocation = _windowGetters.getLocation;
const getCryptoOrThrow = _windowGetters.getCryptoOrThrow;
const getCrypto = _windowGetters.getCrypto;
const getLocalStorageOrThrow = _windowGetters.getLocalStorageOrThrow;
const getLocalStorage = _windowGetters.getLocalStorage;
function getClientMeta() {
    return _windowMetadata.getWindowMetadata();
}

},{"@walletconnect/window-metadata":"g4v2d","@walletconnect/window-getters":"15ptb","detect-browser":"2Xqjd","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"g4v2d":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWindowMetadata = void 0;
const window_getters_1 = require("@walletconnect/window-getters");
function getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
    } catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons = [];
        for(let i = 0; i < links.length; i++){
            const link = links[i];
            const rel = link.getAttribute("rel");
            if (rel) {
                if (rel.toLowerCase().indexOf("icon") > -1) {
                    const href = link.getAttribute("href");
                    if (href) {
                        if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                            let absoluteHref = loc.protocol + "//" + loc.host;
                            if (href.indexOf("/") === 0) absoluteHref += href;
                            else {
                                const path = loc.pathname.split("/");
                                path.pop();
                                const finalPath = path.join("/");
                                absoluteHref += finalPath + "/" + href;
                            }
                            icons.push(absoluteHref);
                        } else if (href.indexOf("//") === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        } else icons.push(href);
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for(let i = 0; i < metaTags.length; i++){
            const tag = metaTags[i];
            const attributes = [
                "itemprop",
                "property",
                "name"
            ].map((target)=>tag.getAttribute(target)
            ).filter((attr)=>{
                if (attr) return args.includes(attr);
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute("content");
                if (content) return content;
            }
        }
        return "";
    }
    function getName() {
        let name = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name) name = doc.title;
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description;
    }
    const name1 = getName();
    const description1 = getDescription();
    const url = loc.origin;
    const icons1 = getIcons();
    const meta = {
        description: description1,
        url,
        icons: icons1,
        name: name1
    };
    return meta;
}
exports.getWindowMetadata = getWindowMetadata;

},{"@walletconnect/window-getters":"15ptb"}],"15ptb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
function getFromWindow(name) {
    let res = undefined;
    if (typeof window !== "undefined" && typeof window[name] !== "undefined") res = window[name];
    return res;
}
exports.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
    const res = getFromWindow(name);
    if (!res) throw new Error(`${name} is not defined in Window`);
    return res;
}
exports.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
    return getFromWindowOrThrow("document");
}
exports.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
    return getFromWindow("document");
}
exports.getDocument = getDocument;
function getNavigatorOrThrow() {
    return getFromWindowOrThrow("navigator");
}
exports.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
    return getFromWindow("navigator");
}
exports.getNavigator = getNavigator;
function getLocationOrThrow() {
    return getFromWindowOrThrow("location");
}
exports.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
    return getFromWindow("location");
}
exports.getLocation = getLocation;
function getCryptoOrThrow() {
    return getFromWindowOrThrow("crypto");
}
exports.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
    return getFromWindow("crypto");
}
exports.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
    return getFromWindowOrThrow("localStorage");
}
exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
    return getFromWindow("localStorage");
}
exports.getLocalStorage = getLocalStorage;

},{}],"2Xqjd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BrowserInfo", ()=>BrowserInfo1
);
parcelHelpers.export(exports, "NodeInfo", ()=>NodeInfo1
);
parcelHelpers.export(exports, "SearchBotDeviceInfo", ()=>SearchBotDeviceInfo1
);
parcelHelpers.export(exports, "BotInfo", ()=>BotInfo1
);
parcelHelpers.export(exports, "ReactNativeInfo", ()=>ReactNativeInfo1
);
parcelHelpers.export(exports, "detect", ()=>detect
);
parcelHelpers.export(exports, "browserName", ()=>browserName
);
parcelHelpers.export(exports, "parseUserAgent", ()=>parseUserAgent
);
parcelHelpers.export(exports, "detectOS", ()=>detectOS
);
parcelHelpers.export(exports, "getNodeVersion", ()=>getNodeVersion
);
var process = require("process");
var __spreadArrays = undefined && undefined.__spreadArrays || function() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
};
var BrowserInfo1 = function() {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = 'browser';
    }
    return BrowserInfo;
}();
var NodeInfo1 = function() {
    function NodeInfo(version) {
        this.version = version;
        this.type = 'node';
        this.name = 'node';
        this.os = process.platform;
    }
    return NodeInfo;
}();
var SearchBotDeviceInfo1 = function() {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = 'bot-device';
    }
    return SearchBotDeviceInfo;
}();
var BotInfo1 = function() {
    function BotInfo() {
        this.type = 'bot';
        this.bot = true; // NOTE: deprecated test name instead
        this.name = 'bot';
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}();
var ReactNativeInfo1 = function() {
    function ReactNativeInfo() {
        this.type = 'react-native';
        this.name = 'react-native';
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}();
// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    [
        'aol',
        /AOLShield\/([0-9\._]+)/
    ],
    [
        'edge',
        /Edge\/([0-9\._]+)/
    ],
    [
        'edge-ios',
        /EdgiOS\/([0-9\._]+)/
    ],
    [
        'yandexbrowser',
        /YaBrowser\/([0-9\._]+)/
    ],
    [
        'kakaotalk',
        /KAKAOTALK\s([0-9\.]+)/
    ],
    [
        'samsung',
        /SamsungBrowser\/([0-9\.]+)/
    ],
    [
        'silk',
        /\bSilk\/([0-9._-]+)\b/
    ],
    [
        'miui',
        /MiuiBrowser\/([0-9\.]+)$/
    ],
    [
        'beaker',
        /BeakerBrowser\/([0-9\.]+)/
    ],
    [
        'edge-chromium',
        /EdgA?\/([0-9\.]+)/
    ],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/, 
    ],
    [
        'chrome',
        /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    [
        'phantomjs',
        /PhantomJS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        'crios',
        /CriOS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        'firefox',
        /Firefox\/([0-9\.]+)(?:\s|$)/
    ],
    [
        'fxios',
        /FxiOS\/([0-9\.]+)/
    ],
    [
        'opera-mini',
        /Opera Mini.*Version\/([0-9\.]+)/
    ],
    [
        'opera',
        /Opera\/([0-9\.]+)(?:\s|$)/
    ],
    [
        'opera',
        /OPR\/([0-9\.]+)(:?\s|$)/
    ],
    [
        'ie',
        /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/
    ],
    [
        'ie',
        /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/
    ],
    [
        'ie',
        /MSIE\s(7\.0)/
    ],
    [
        'bb10',
        /BB10;\sTouch.*Version\/([0-9\.]+)/
    ],
    [
        'android',
        /Android\s([0-9\.]+)/
    ],
    [
        'ios',
        /Version\/([0-9\._]+).*Mobile.*Safari.*/
    ],
    [
        'safari',
        /Version\/([0-9\._]+).*Safari/
    ],
    [
        'facebook',
        /FBAV\/([0-9\.]+)/
    ],
    [
        'instagram',
        /Instagram\s([0-9\.]+)/
    ],
    [
        'ios-webview',
        /AppleWebKit\/([0-9\.]+).*Mobile/
    ],
    [
        'ios-webview',
        /AppleWebKit\/([0-9\.]+).*Gecko\)$/
    ],
    [
        'searchbot',
        SEARCHBOX_UA_REGEX
    ], 
];
var operatingSystemRules = [
    [
        'iOS',
        /iP(hone|od|ad)/
    ],
    [
        'Android OS',
        /Android/
    ],
    [
        'BlackBerry OS',
        /BlackBerry|BB10/
    ],
    [
        'Windows Mobile',
        /IEMobile/
    ],
    [
        'Amazon OS',
        /Kindle/
    ],
    [
        'Windows 3.11',
        /Win16/
    ],
    [
        'Windows 95',
        /(Windows 95)|(Win95)|(Windows_95)/
    ],
    [
        'Windows 98',
        /(Windows 98)|(Win98)/
    ],
    [
        'Windows 2000',
        /(Windows NT 5.0)|(Windows 2000)/
    ],
    [
        'Windows XP',
        /(Windows NT 5.1)|(Windows XP)/
    ],
    [
        'Windows Server 2003',
        /(Windows NT 5.2)/
    ],
    [
        'Windows Vista',
        /(Windows NT 6.0)/
    ],
    [
        'Windows 7',
        /(Windows NT 6.1)/
    ],
    [
        'Windows 8',
        /(Windows NT 6.2)/
    ],
    [
        'Windows 8.1',
        /(Windows NT 6.3)/
    ],
    [
        'Windows 10',
        /(Windows NT 10.0)/
    ],
    [
        'Windows ME',
        /Windows ME/
    ],
    [
        'Open BSD',
        /OpenBSD/
    ],
    [
        'Sun OS',
        /SunOS/
    ],
    [
        'Chrome OS',
        /CrOS/
    ],
    [
        'Linux',
        /(Linux)|(X11)/
    ],
    [
        'Mac OS',
        /(Mac_PowerPC)|(Macintosh)/
    ],
    [
        'QNX',
        /QNX/
    ],
    [
        'BeOS',
        /BeOS/
    ],
    [
        'OS/2',
        /OS\/2/
    ], 
];
function detect(userAgent) {
    if (!!userAgent) return parseUserAgent(userAgent);
    if (typeof document === 'undefined' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') return new ReactNativeInfo1();
    if (typeof navigator !== 'undefined') return parseUserAgent(navigator.userAgent);
    return getNodeVersion();
}
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return ua !== '' && userAgentRules.reduce(function(matched, _a) {
        var browser = _a[0], regex = _a[1];
        if (matched) return matched;
        var uaMatch = regex.exec(ua);
        return !!uaMatch && [
            browser,
            uaMatch
        ];
    }, false);
}
function browserName(ua) {
    var data = matchUserAgent(ua);
    return data ? data[0] : null;
}
function parseUserAgent(ua) {
    var matchedRule = matchUserAgent(ua);
    if (!matchedRule) return null;
    var name = matchedRule[0], match = matchedRule[1];
    if (name === 'searchbot') return new BotInfo1();
    var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
    } else versionParts = [];
    var version = versionParts.join('.');
    var os = detectOS(ua);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) return new SearchBotDeviceInfo1(name, version, os, searchBotMatch[1]);
    return new BrowserInfo1(name, version, os);
}
function detectOS(ua) {
    for(var ii = 0, count = operatingSystemRules.length; ii < count; ii++){
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) return os;
    }
    return null;
}
function getNodeVersion() {
    var isNode = typeof process !== 'undefined' && process.version;
    return isNode ? new NodeInfo1(process.version.slice(1)) : null;
}
function createVersionParts(count) {
    var output = [];
    for(var ii = 0; ii < count; ii++)output.push('0');
    return output;
}

},{"process":"1WSHx","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"iPXTn":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eroZD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "safeJsonParse", ()=>safeJsonParse
);
parcelHelpers.export(exports, "safeJsonStringify", ()=>safeJsonStringify
);
var _safeJson = require("@walletconnect/safe-json");
const safeJsonParse = _safeJson.safeJsonParse;
const safeJsonStringify = _safeJson.safeJsonStringify;

},{"@walletconnect/safe-json":"hVzgx","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"hVzgx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "safeJsonParse", ()=>safeJsonParse
);
parcelHelpers.export(exports, "safeJsonStringify", ()=>safeJsonStringify
);
function safeJsonParse(value) {
    if (typeof value !== "string") throw new Error(`Cannot safe json parse value of type ${typeof value}`);
    try {
        return JSON.parse(value);
    } catch (_a) {
        return value;
    }
}
function safeJsonStringify(value) {
    return typeof value === "string" ? value : JSON.stringify(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"lpIyr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setLocal", ()=>setLocal
);
parcelHelpers.export(exports, "getLocal", ()=>getLocal
);
parcelHelpers.export(exports, "removeLocal", ()=>removeLocal
);
var _json = require("./json");
var _browser = require("./browser");
function setLocal(key, data) {
    const raw = _json.safeJsonStringify(data);
    const local = _browser.getLocalStorage();
    if (local) local.setItem(key, raw);
}
function getLocal(key) {
    let data = null;
    let raw = null;
    const local = _browser.getLocalStorage();
    if (local) raw = local.getItem(key);
    data = raw ? _json.safeJsonParse(raw) : raw;
    return data;
}
function removeLocal(key) {
    const local = _browser.getLocalStorage();
    if (local) local.removeItem(key);
}

},{"./json":"eroZD","./browser":"672ka","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"ldU4S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mobileLinkChoiceKey", ()=>mobileLinkChoiceKey
);
parcelHelpers.export(exports, "formatIOSMobile", ()=>formatIOSMobile
);
parcelHelpers.export(exports, "saveMobileLinkInfo", ()=>saveMobileLinkInfo
);
parcelHelpers.export(exports, "getMobileRegistryEntry", ()=>getMobileRegistryEntry
);
parcelHelpers.export(exports, "getMobileLinkRegistry", ()=>getMobileLinkRegistry
);
var _local = require("./local");
const mobileLinkChoiceKey = "WALLETCONNECT_DEEPLINK_CHOICE";
function formatIOSMobile(uri, entry) {
    const encodedUri = encodeURIComponent(uri);
    return entry.universalLink ? `${entry.universalLink}/wc?uri=${encodedUri}` : entry.deepLink ? `${entry.deepLink}${entry.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}` : "";
}
function saveMobileLinkInfo(data) {
    const focusUri = data.href.split("?")[0];
    _local.setLocal(mobileLinkChoiceKey, Object.assign(Object.assign({
    }, data), {
        href: focusUri
    }));
}
function getMobileRegistryEntry(registry, name) {
    return registry.filter((entry)=>entry.name.toLowerCase().includes(name.toLowerCase())
    )[0];
}
function getMobileLinkRegistry(registry, whitelist) {
    let links = registry;
    if (whitelist) links = whitelist.map((name)=>getMobileRegistryEntry(registry, name)
    ).filter(Boolean);
    return links;
}

},{"./local":"lpIyr","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"kGt4A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWalletRegistryUrl", ()=>getWalletRegistryUrl
);
parcelHelpers.export(exports, "getDappRegistryUrl", ()=>getDappRegistryUrl
);
parcelHelpers.export(exports, "getAppLogoUrl", ()=>getAppLogoUrl
);
parcelHelpers.export(exports, "formatMobileRegistryEntry", ()=>formatMobileRegistryEntry
);
parcelHelpers.export(exports, "formatMobileRegistry", ()=>formatMobileRegistry
);
const API_URL = "https://registry.walletconnect.org";
function getWalletRegistryUrl() {
    return API_URL + "/data/wallets.json";
}
function getDappRegistryUrl() {
    return API_URL + "/data/dapps.json";
}
function getAppLogoUrl(id) {
    return API_URL + "/logo/sm/" + id + ".jpeg";
}
function formatMobileRegistryEntry(entry, platform = "mobile") {
    return {
        name: entry.name || "",
        shortName: entry.metadata.shortName || "",
        color: entry.metadata.colors.primary || "",
        logo: entry.id ? getAppLogoUrl(entry.id) : "",
        universalLink: entry[platform].universal || "",
        deepLink: entry[platform].native || ""
    };
}
function formatMobileRegistry(registry, platform = "mobile") {
    return Object.values(registry).filter((entry)=>!!entry[platform].universal || !!entry[platform].native
    ).map((entry)=>formatMobileRegistryEntry(entry, platform)
    );
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"2Phe1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reservedEvents", ()=>reservedEvents
);
parcelHelpers.export(exports, "signingMethods", ()=>signingMethods
);
parcelHelpers.export(exports, "stateMethods", ()=>stateMethods
);
parcelHelpers.export(exports, "infuraNetworks", ()=>infuraNetworks
);
const reservedEvents = [
    "session_request",
    "session_update",
    "exchange_key",
    "connect",
    "disconnect",
    "display_uri",
    "modal_closed",
    "transport_open",
    "transport_close",
    "transport_error", 
];
const signingMethods = [
    "eth_sendTransaction",
    "eth_signTransaction",
    "eth_sign",
    "eth_signTypedData",
    "eth_signTypedData_v1",
    "eth_signTypedData_v2",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "personal_sign", 
];
const stateMethods = [
    "eth_accounts",
    "eth_chainId",
    "net_version"
];
const infuraNetworks = {
    1: "mainnet",
    3: "ropsten",
    4: "rinkeby",
    5: "goerli",
    42: "kovan"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"gk54y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertArrayBufferToBuffer", ()=>convertArrayBufferToBuffer
);
parcelHelpers.export(exports, "convertArrayBufferToUtf8", ()=>convertArrayBufferToUtf8
);
parcelHelpers.export(exports, "convertArrayBufferToHex", ()=>convertArrayBufferToHex
);
parcelHelpers.export(exports, "convertArrayBufferToNumber", ()=>convertArrayBufferToNumber
);
parcelHelpers.export(exports, "concatArrayBuffers", ()=>concatArrayBuffers
);
parcelHelpers.export(exports, "convertBufferToArrayBuffer", ()=>convertBufferToArrayBuffer
);
parcelHelpers.export(exports, "convertBufferToUtf8", ()=>convertBufferToUtf8
);
parcelHelpers.export(exports, "convertBufferToHex", ()=>convertBufferToHex
);
parcelHelpers.export(exports, "convertBufferToNumber", ()=>convertBufferToNumber
);
parcelHelpers.export(exports, "concatBuffers", ()=>concatBuffers
);
parcelHelpers.export(exports, "convertUtf8ToArrayBuffer", ()=>convertUtf8ToArrayBuffer
);
parcelHelpers.export(exports, "convertUtf8ToBuffer", ()=>convertUtf8ToBuffer
);
parcelHelpers.export(exports, "convertUtf8ToHex", ()=>convertUtf8ToHex
);
parcelHelpers.export(exports, "convertUtf8ToNumber", ()=>convertUtf8ToNumber
);
parcelHelpers.export(exports, "convertHexToBuffer", ()=>convertHexToBuffer
);
parcelHelpers.export(exports, "convertHexToArrayBuffer", ()=>convertHexToArrayBuffer
);
parcelHelpers.export(exports, "convertHexToUtf8", ()=>convertHexToUtf8
);
parcelHelpers.export(exports, "convertHexToNumber", ()=>convertHexToNumber
);
parcelHelpers.export(exports, "convertNumberToBuffer", ()=>convertNumberToBuffer
);
parcelHelpers.export(exports, "convertNumberToArrayBuffer", ()=>convertNumberToArrayBuffer
);
parcelHelpers.export(exports, "convertNumberToUtf8", ()=>convertNumberToUtf8
);
parcelHelpers.export(exports, "convertNumberToHex", ()=>convertNumberToHex
);
var _bnJs = require("bn.js");
var _bnJsDefault = parcelHelpers.interopDefault(_bnJs);
var _encoding = require("@walletconnect/encoding");
function convertArrayBufferToBuffer(arrBuf) {
    return _encoding.arrayToBuffer(new Uint8Array(arrBuf));
}
function convertArrayBufferToUtf8(arrBuf) {
    return _encoding.arrayToUtf8(new Uint8Array(arrBuf));
}
function convertArrayBufferToHex(arrBuf, noPrefix) {
    return _encoding.arrayToHex(new Uint8Array(arrBuf), !noPrefix);
}
function convertArrayBufferToNumber(arrBuf) {
    return _encoding.arrayToNumber(new Uint8Array(arrBuf));
}
function concatArrayBuffers(...args) {
    return _encoding.hexToArray(args.map((b)=>_encoding.arrayToHex(new Uint8Array(b))
    ).join("")).buffer;
}
function convertBufferToArrayBuffer(buf) {
    return _encoding.bufferToArray(buf).buffer;
}
function convertBufferToUtf8(buf) {
    return _encoding.bufferToUtf8(buf);
}
function convertBufferToHex(buf, noPrefix) {
    return _encoding.bufferToHex(buf, !noPrefix);
}
function convertBufferToNumber(buf) {
    return _encoding.bufferToNumber(buf);
}
function concatBuffers(...args) {
    return _encoding.concatBuffers(...args);
}
function convertUtf8ToArrayBuffer(utf8) {
    return _encoding.utf8ToArray(utf8).buffer;
}
function convertUtf8ToBuffer(utf8) {
    return _encoding.utf8ToBuffer(utf8);
}
function convertUtf8ToHex(utf8, noPrefix) {
    return _encoding.utf8ToHex(utf8, !noPrefix);
}
function convertUtf8ToNumber(utf8) {
    return new _bnJsDefault.default(utf8, 10).toNumber();
}
function convertHexToBuffer(hex) {
    return _encoding.hexToBuffer(hex);
}
function convertHexToArrayBuffer(hex) {
    return _encoding.hexToArray(hex).buffer;
}
function convertHexToUtf8(hex) {
    return _encoding.hexToUtf8(hex);
}
function convertHexToNumber(hex) {
    return new _bnJsDefault.default(_encoding.removeHexPrefix(hex), "hex").toNumber();
}
function convertNumberToBuffer(num) {
    return _encoding.numberToBuffer(num);
}
function convertNumberToArrayBuffer(num) {
    return _encoding.numberToArray(num).buffer;
}
function convertNumberToUtf8(num) {
    return new _bnJsDefault.default(num).toString();
}
function convertNumberToHex(num, noPrefix) {
    const hex = _encoding.removeHexPrefix(_encoding.sanitizeHex(new _bnJsDefault.default(num).toString(16)));
    return noPrefix ? hex : _encoding.addHexPrefix(hex);
}

},{"bn.js":"lXq6B","@walletconnect/encoding":"grCai","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"lXq6B":[function(require,module,exports) {
(function(module, exports) {
    // Utils
    function assert(val, msg) {
        if (!val) throw new Error(msg || 'Assertion failed');
    }
    // Could use `inherits` module, but don't want to move from single file
    // architecture yet.
    function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
    // BN
    function BN(number, base, endian) {
        if (BN.isBN(number)) return number;
        this.negative = 0;
        this.words = null;
        this.length = 0;
        // Reduction context
        this.red = null;
        if (number !== null) {
            if (base === 'le' || base === 'be') {
                endian = base;
                base = 10;
            }
            this._init(number || 0, base || 10, endian || 'be');
        }
    }
    if (typeof module === 'object') module.exports = BN;
    else exports.BN = BN;
    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;
    try {
        Buffer = require('buffer').Buffer;
    } catch (e) {
    }
    BN.isBN = function isBN(num) {
        if (num instanceof BN) return true;
        return num !== null && typeof num === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };
    BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
    };
    BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
    };
    BN.prototype._init = function init(number, base, endian) {
        if (typeof number === 'number') return this._initNumber(number, base, endian);
        if (typeof number === 'object') return this._initArray(number, base, endian);
        if (base === 'hex') base = 16;
        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, '');
        var start = 0;
        if (number[0] === '-') start++;
        if (base === 16) this._parseHex(number, start);
        else this._parseBase(number, base, start);
        if (number[0] === '-') this.negative = 1;
        this.strip();
        if (endian !== 'le') return;
        this._initArray(this.toArray(), base, endian);
    };
    BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
            this.negative = 1;
            number = -number;
        }
        if (number < 67108864) {
            this.words = [
                number & 67108863
            ];
            this.length = 1;
        } else if (number < 4503599627370496) {
            this.words = [
                number & 67108863,
                number / 67108864 & 67108863
            ];
            this.length = 2;
        } else {
            assert(number < 9007199254740992); // 2 ^ 53 (unsafe)
            this.words = [
                number & 67108863,
                number / 67108864 & 67108863,
                1
            ];
            this.length = 3;
        }
        if (endian !== 'le') return;
        // Reverse the bytes
        this._initArray(this.toArray(), base, endian);
    };
    BN.prototype._initArray = function _initArray(number, base, endian) {
        // Perhaps a Uint8Array
        assert(typeof number.length === 'number');
        if (number.length <= 0) {
            this.words = [
                0
            ];
            this.length = 1;
            return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)this.words[i] = 0;
        var j, w;
        var off = 0;
        if (endian === 'be') for(i = number.length - 1, j = 0; i >= 0; i -= 3){
            w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        else if (endian === 'le') for(i = 0, j = 0; i < number.length; i += 3){
            w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        return this.strip();
    };
    function parseHex(str, start, end) {
        var r = 0;
        var len = Math.min(str.length, end);
        for(var i = start; i < len; i++){
            var c = str.charCodeAt(i) - 48;
            r <<= 4;
            // 'a' - 'f'
            if (c >= 49 && c <= 54) r |= c - 49 + 10;
            else if (c >= 17 && c <= 22) r |= c - 17 + 10;
            else r |= c & 15;
        }
        return r;
    }
    BN.prototype._parseHex = function _parseHex(number, start) {
        // Create possibly bigger array to ensure that it fits the number
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)this.words[i] = 0;
        var j, w;
        // Scan 24-bit chunks and add them to the number
        var off = 0;
        for(i = number.length - 6, j = 0; i >= start; i -= 6){
            w = parseHex(number, i, i + 6);
            this.words[j] |= w << off & 67108863;
            // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb
            this.words[j + 1] |= w >>> 26 - off & 4194303;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        if (i + 6 !== start) {
            w = parseHex(number, start, i + 6);
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] |= w >>> 26 - off & 4194303;
        }
        this.strip();
    };
    function parseBase(str, start, end, mul) {
        var r = 0;
        var len = Math.min(str.length, end);
        for(var i = start; i < len; i++){
            var c = str.charCodeAt(i) - 48;
            r *= mul;
            // 'a'
            if (c >= 49) r += c - 49 + 10;
            else if (c >= 17) r += c - 17 + 10;
            else r += c;
        }
        return r;
    }
    BN.prototype._parseBase = function _parseBase(number, base, start) {
        // Initialize as zero
        this.words = [
            0
        ];
        this.length = 1;
        // Find length of limb in base
        for(var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base)limbLen++;
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for(var i = start; i < end; i += limbLen){
            word = parseBase(number, i, i + limbLen, base);
            this.imuln(limbPow);
            if (this.words[0] + word < 67108864) this.words[0] += word;
            else this._iaddn(word);
        }
        if (mod !== 0) {
            var pow = 1;
            word = parseBase(number, i, number.length, base);
            for(i = 0; i < mod; i++)pow *= base;
            this.imuln(pow);
            if (this.words[0] + word < 67108864) this.words[0] += word;
            else this._iaddn(word);
        }
    };
    BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)dest.words[i] = this.words[i];
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
    };
    BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
    };
    BN.prototype._expand = function _expand(size) {
        while(this.length < size)this.words[this.length++] = 0;
        return this;
    };
    // Remove leading `0` from `this`
    BN.prototype.strip = function strip() {
        while(this.length > 1 && this.words[this.length - 1] === 0)this.length--;
        return this._normSign();
    };
    BN.prototype._normSign = function _normSign() {
        // -0 = 0
        if (this.length === 1 && this.words[0] === 0) this.negative = 0;
        return this;
    };
    BN.prototype.inspect = function inspect() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    };
    /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */ var zeros = [
        '',
        '0',
        '00',
        '000',
        '0000',
        '00000',
        '000000',
        '0000000',
        '00000000',
        '000000000',
        '0000000000',
        '00000000000',
        '000000000000',
        '0000000000000',
        '00000000000000',
        '000000000000000',
        '0000000000000000',
        '00000000000000000',
        '000000000000000000',
        '0000000000000000000',
        '00000000000000000000',
        '000000000000000000000',
        '0000000000000000000000',
        '00000000000000000000000',
        '000000000000000000000000',
        '0000000000000000000000000'
    ];
    var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ];
    var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        10000000,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64000000,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        24300000,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
    ];
    BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === 'hex') {
            out = '';
            var off = 0;
            var carry = 0;
            for(var i = 0; i < this.length; i++){
                var w = this.words[i];
                var word = ((w << off | carry) & 16777215).toString(16);
                carry = w >>> 24 - off & 16777215;
                if (carry !== 0 || i !== this.length - 1) out = zeros[6 - word.length] + word + out;
                else out = word + out;
                off += 2;
                if (off >= 26) {
                    off -= 26;
                    i--;
                }
            }
            if (carry !== 0) out = carry.toString(16) + out;
            while(out.length % padding !== 0)out = '0' + out;
            if (this.negative !== 0) out = '-' + out;
            return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
            // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
            var groupSize = groupSizes[base];
            // var groupBase = Math.pow(base, groupSize);
            var groupBase = groupBases[base];
            out = '';
            var c = this.clone();
            c.negative = 0;
            while(!c.isZero()){
                var r = c.modn(groupBase).toString(base);
                c = c.idivn(groupBase);
                if (!c.isZero()) out = zeros[groupSize - r.length] + r + out;
                else out = r + out;
            }
            if (this.isZero()) out = '0' + out;
            while(out.length % padding !== 0)out = '0' + out;
            if (this.negative !== 0) out = '-' + out;
            return out;
        }
        assert(false, 'Base should be between 2 and 36');
    };
    BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) ret += this.words[1] * 67108864;
        else if (this.length === 3 && this.words[2] === 1) // NOTE: at this stage it is known that the top bit is set
        ret += 4503599627370496 + this.words[1] * 67108864;
        else if (this.length > 2) assert(false, 'Number can only safely store up to 53 bits');
        return this.negative !== 0 ? -ret : ret;
    };
    BN.prototype.toJSON = function toJSON() {
        return this.toString(16);
    };
    BN.prototype.toBuffer = function toBuffer(endian, length) {
        assert(typeof Buffer !== 'undefined');
        return this.toArrayLike(Buffer, endian, length);
    };
    BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
    };
    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, 'byte array longer than desired length');
        assert(reqLength > 0, 'Requested array length <= 0');
        this.strip();
        var littleEndian = endian === 'le';
        var res = new ArrayType(reqLength);
        var b, i;
        var q = this.clone();
        if (!littleEndian) {
            // Assume big-endian
            for(i = 0; i < reqLength - byteLength; i++)res[i] = 0;
            for(i = 0; !q.isZero(); i++){
                b = q.andln(255);
                q.iushrn(8);
                res[reqLength - i - 1] = b;
            }
        } else {
            for(i = 0; !q.isZero(); i++){
                b = q.andln(255);
                q.iushrn(8);
                res[i] = b;
            }
            for(; i < reqLength; i++)res[i] = 0;
        }
        return res;
    };
    if (Math.clz32) BN.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
    };
    else BN.prototype._countBits = function _countBits(w) {
        var t = w;
        var r = 0;
        if (t >= 4096) {
            r += 13;
            t >>>= 13;
        }
        if (t >= 64) {
            r += 7;
            t >>>= 7;
        }
        if (t >= 8) {
            r += 4;
            t >>>= 4;
        }
        if (t >= 2) {
            r += 2;
            t >>>= 2;
        }
        return r + t;
    };
    BN.prototype._zeroBits = function _zeroBits(w) {
        // Short-cut
        if (w === 0) return 26;
        var t = w;
        var r = 0;
        if ((t & 8191) === 0) {
            r += 13;
            t >>>= 13;
        }
        if ((t & 127) === 0) {
            r += 7;
            t >>>= 7;
        }
        if ((t & 15) === 0) {
            r += 4;
            t >>>= 4;
        }
        if ((t & 3) === 0) {
            r += 2;
            t >>>= 2;
        }
        if ((t & 1) === 0) r++;
        return r;
    };
    // Return number of used bits in a BN
    BN.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];
        var hi = this._countBits(w);
        return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
        var w = new Array(num.bitLength());
        for(var bit = 0; bit < w.length; bit++){
            var off = bit / 26 | 0;
            var wbit = bit % 26;
            w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
        }
        return w;
    }
    // Number of trailing zero bits
    BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;
        for(var i = 0; i < this.length; i++){
            var b = this._zeroBits(this.words[i]);
            r += b;
            if (b !== 26) break;
        }
        return r;
    };
    BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
    };
    BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) return this.abs().inotn(width).iaddn(1);
        return this.clone();
    };
    BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) return this.notn(width).iaddn(1).ineg();
        return this.clone();
    };
    BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
    };
    // Return negative clone of `this`
    BN.prototype.neg = function neg() {
        return this.clone().ineg();
    };
    BN.prototype.ineg = function ineg() {
        if (!this.isZero()) this.negative ^= 1;
        return this;
    };
    // Or `num` with `this` in-place
    BN.prototype.iuor = function iuor(num) {
        while(this.length < num.length)this.words[this.length++] = 0;
        for(var i = 0; i < num.length; i++)this.words[i] = this.words[i] | num.words[i];
        return this.strip();
    };
    BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
    };
    // Or `num` with `this`
    BN.prototype.or = function or(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
    };
    BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
    };
    // And `num` with `this` in-place
    BN.prototype.iuand = function iuand(num) {
        // b = min-length(num, this)
        var b;
        if (this.length > num.length) b = num;
        else b = this;
        for(var i = 0; i < b.length; i++)this.words[i] = this.words[i] & num.words[i];
        this.length = b.length;
        return this.strip();
    };
    BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
    };
    // And `num` with `this`
    BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
    };
    BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
    };
    // Xor `num` with `this` in-place
    BN.prototype.iuxor = function iuxor(num) {
        // a.length > b.length
        var a;
        var b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        for(var i = 0; i < b.length; i++)this.words[i] = a.words[i] ^ b.words[i];
        if (this !== a) for(; i < a.length; i++)this.words[i] = a.words[i];
        this.length = a.length;
        return this.strip();
    };
    BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
    };
    // Xor `num` with `this`
    BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
    };
    BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
    };
    // Not ``this`` with ``width`` bitwidth
    BN.prototype.inotn = function inotn(width) {
        assert(typeof width === 'number' && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        // Extend the buffer with leading zeroes
        this._expand(bytesNeeded);
        if (bitsLeft > 0) bytesNeeded--;
        // Handle complete words
        for(var i = 0; i < bytesNeeded; i++)this.words[i] = ~this.words[i] & 67108863;
        // Handle the residue
        if (bitsLeft > 0) this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
        // And remove leading zeroes
        return this.strip();
    };
    BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
    };
    // Set `bit` of `this`
    BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === 'number' && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) this.words[off] = this.words[off] | 1 << wbit;
        else this.words[off] = this.words[off] & ~(1 << wbit);
        return this.strip();
    };
    // Add `num` to `this` in-place
    BN.prototype.iadd = function iadd(num) {
        var r;
        // negative + positive
        if (this.negative !== 0 && num.negative === 0) {
            this.negative = 0;
            r = this.isub(num);
            this.negative ^= 1;
            return this._normSign();
        // positive + negative
        } else if (this.negative === 0 && num.negative !== 0) {
            num.negative = 0;
            r = this.isub(num);
            num.negative = 1;
            return r._normSign();
        }
        // a.length > b.length
        var a, b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            this.words[i] = r & 67108863;
            carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
            this.words[this.length] = carry;
            this.length++;
        // Copy the rest of the words
        } else if (a !== this) for(; i < a.length; i++)this.words[i] = a.words[i];
        return this;
    };
    // Add `num` to `this`
    BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
            num.negative = 0;
            res = this.sub(num);
            num.negative ^= 1;
            return res;
        } else if (num.negative === 0 && this.negative !== 0) {
            this.negative = 0;
            res = num.sub(this);
            this.negative = 1;
            return res;
        }
        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
    };
    // Subtract `num` from `this` in-place
    BN.prototype.isub = function isub(num) {
        // this - (-num) = this + num
        if (num.negative !== 0) {
            num.negative = 0;
            var r = this.iadd(num);
            num.negative = 1;
            return r._normSign();
        // -this - num = -(this + num)
        } else if (this.negative !== 0) {
            this.negative = 0;
            this.iadd(num);
            this.negative = 1;
            return this._normSign();
        }
        // At this point both numbers are positive
        var cmp = this.cmp(num);
        // Optimization - zeroify
        if (cmp === 0) {
            this.negative = 0;
            this.length = 1;
            this.words[0] = 0;
            return this;
        }
        // a > b
        var a, b;
        if (cmp > 0) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 67108863;
        }
        // Copy rest of the words
        if (carry === 0 && i < a.length && a !== this) for(; i < a.length; i++)this.words[i] = a.words[i];
        this.length = Math.max(this.length, i);
        if (a !== this) this.negative = 1;
        return this.strip();
    };
    // Subtract `num` from `this`
    BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
    };
    function smallMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        var len = self.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        // Peel one iteration (compiler can't do it, because of code complexity)
        var a = self.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 67108863;
        var carry = r / 67108864 | 0;
        out.words[0] = lo;
        for(var k = 1; k < len; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = carry >>> 26;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j | 0;
                a = self.words[i] | 0;
                b = num.words[j] | 0;
                r = a * b + rword;
                ncarry += r / 67108864 | 0;
                rword = r & 67108863;
            }
            out.words[k] = rword | 0;
            carry = ncarry | 0;
        }
        if (carry !== 0) out.words[k] = carry | 0;
        else out.length--;
        return out.strip();
    }
    // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).
    var comb10MulTo = function comb10MulTo(self, num, out) {
        var a = self.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 8191;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 8191;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 8191;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 8191;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 8191;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 8191;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self.negative ^ num.negative;
        out.length = 19;
        /* k = 0 */ lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 67108863;
        /* k = 1 */ lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        /* k = 2 */ lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 67108863;
        /* k = 3 */ lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        /* k = 4 */ lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        /* k = 5 */ lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        /* k = 6 */ lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        /* k = 7 */ lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        /* k = 8 */ lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        /* k = 9 */ lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        /* k = 10 */ lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        /* k = 11 */ lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        /* k = 12 */ lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        /* k = 13 */ lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        /* k = 14 */ lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        /* k = 15 */ lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        /* k = 16 */ lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        /* k = 17 */ lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        /* k = 18 */ lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
            o[19] = c;
            out.length++;
        }
        return out;
    };
    // Polyfill comb
    if (!Math.imul) comb10MulTo = smallMulTo;
    function bigMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        out.length = self.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for(var k = 0; k < out.length - 1; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = hncarry;
            hncarry = 0;
            var rword = carry & 67108863;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j;
                var a = self.words[i] | 0;
                var b = num.words[j] | 0;
                var r = a * b;
                var lo = r & 67108863;
                ncarry = ncarry + (r / 67108864 | 0) | 0;
                lo = lo + rword | 0;
                rword = lo & 67108863;
                ncarry = ncarry + (lo >>> 26) | 0;
                hncarry += ncarry >>> 26;
                ncarry &= 67108863;
            }
            out.words[k] = rword;
            carry = ncarry;
            ncarry = hncarry;
        }
        if (carry !== 0) out.words[k] = carry;
        else out.length--;
        return out.strip();
    }
    function jumboMulTo(self, num, out) {
        var fftm = new FFTM();
        return fftm.mulp(self, num, out);
    }
    BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) res = comb10MulTo(this, num, out);
        else if (len < 63) res = smallMulTo(this, num, out);
        else if (len < 1024) res = bigMulTo(this, num, out);
        else res = jumboMulTo(this, num, out);
        return res;
    };
    // Cooley-Tukey algorithm for FFT
    // slightly revisited to rely on looping instead of recursion
    function FFTM(x, y) {
        this.x = x;
        this.y = y;
    }
    FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN.prototype._countBits(N) - 1;
        for(var i = 0; i < N; i++)t[i] = this.revBin(i, l, N);
        return t;
    };
    // Returns binary-reversed representation of `x`
    FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1) return x;
        var rb = 0;
        for(var i = 0; i < l; i++){
            rb |= (x & 1) << l - i - 1;
            x >>= 1;
        }
        return rb;
    };
    // Performs "tweedling" phase, therefore 'emulating'
    // behaviour of the recursive algorithm
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for(var i = 0; i < N; i++){
            rtws[i] = rws[rbt[i]];
            itws[i] = iws[rbt[i]];
        }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);
        for(var s = 1; s < N; s <<= 1){
            var l = s << 1;
            var rtwdf = Math.cos(2 * Math.PI / l);
            var itwdf = Math.sin(2 * Math.PI / l);
            for(var p = 0; p < N; p += l){
                var rtwdf_ = rtwdf;
                var itwdf_ = itwdf;
                for(var j = 0; j < s; j++){
                    var re = rtws[p + j];
                    var ie = itws[p + j];
                    var ro = rtws[p + j + s];
                    var io = itws[p + j + s];
                    var rx = rtwdf_ * ro - itwdf_ * io;
                    io = rtwdf_ * io + itwdf_ * ro;
                    ro = rx;
                    rtws[p + j] = re + ro;
                    itws[p + j] = ie + io;
                    rtws[p + j + s] = re - ro;
                    itws[p + j + s] = ie - io;
                    /* jshint maxdepth : false */ if (j !== l) {
                        rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                        itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                        rtwdf_ = rx;
                    }
                }
            }
        }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;
        for(N = N / 2 | 0; N; N = N >>> 1)i++;
        return 1 << i + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1) return;
        for(var i = 0; i < N / 2; i++){
            var t = rws[i];
            rws[i] = rws[N - i - 1];
            rws[N - i - 1] = t;
            t = iws[i];
            iws[i] = -iws[N - i - 1];
            iws[N - i - 1] = -t;
        }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;
        for(var i = 0; i < N / 2; i++){
            var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
            ws[i] = w & 67108863;
            if (w < 67108864) carry = 0;
            else carry = w / 67108864 | 0;
        }
        return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;
        for(var i = 0; i < len; i++){
            carry = carry + (ws[i] | 0);
            rws[2 * i] = carry & 8191;
            carry = carry >>> 13;
            rws[2 * i + 1] = carry & 8191;
            carry = carry >>> 13;
        }
        // Pad with zeroes
        for(i = 2 * len; i < N; ++i)rws[i] = 0;
        assert(carry === 0);
        assert((carry & -8192) === 0);
    };
    FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);
        for(var i = 0; i < N; i++)ph[i] = 0;
        return ph;
    };
    FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);
        var _ = this.stub(N);
        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);
        for(var i = 0; i < N; i++){
            var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
            iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
            rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out.strip();
    };
    // Multiply `this` by `num`
    BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
    };
    // Multiply employing FFT
    BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
    };
    // In-place Multiplication
    BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
    };
    BN.prototype.imuln = function imuln(num) {
        assert(typeof num === 'number');
        assert(num < 67108864);
        // Carry
        var carry = 0;
        for(var i = 0; i < this.length; i++){
            var w = (this.words[i] | 0) * num;
            var lo = (w & 67108863) + (carry & 67108863);
            carry >>= 26;
            carry += w / 67108864 | 0;
            // NOTE: lo is 27bit maximum
            carry += lo >>> 26;
            this.words[i] = lo & 67108863;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return this;
    };
    BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
    };
    // `this` * `this`
    BN.prototype.sqr = function sqr() {
        return this.mul(this);
    };
    // `this` * `this` in-place
    BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
    };
    // Math.pow(`this`, `num`)
    BN.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0) return new BN(1);
        // Skip leading zeroes
        var res = this;
        for(var i = 0; i < w.length; i++, res = res.sqr()){
            if (w[i] !== 0) break;
        }
        if (++i < w.length) for(var q = res.sqr(); i < w.length; i++, q = q.sqr()){
            if (w[i] === 0) continue;
            res = res.mul(q);
        }
        return res;
    };
    // Shift-left in-place
    BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 67108863 >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
            var carry = 0;
            for(i = 0; i < this.length; i++){
                var newCarry = this.words[i] & carryMask;
                var c = (this.words[i] | 0) - newCarry << r;
                this.words[i] = c | carry;
                carry = newCarry >>> 26 - r;
            }
            if (carry) {
                this.words[i] = carry;
                this.length++;
            }
        }
        if (s !== 0) {
            for(i = this.length - 1; i >= 0; i--)this.words[i + s] = this.words[i];
            for(i = 0; i < s; i++)this.words[i] = 0;
            this.length += s;
        }
        return this.strip();
    };
    BN.prototype.ishln = function ishln(bits) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushln(bits);
    };
    // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits
    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === 'number' && bits >= 0);
        var h;
        if (hint) h = (hint - hint % 26) / 26;
        else h = 0;
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 67108863 ^ 67108863 >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h);
        // Extended mode, copy masked part
        if (maskedWords) {
            for(var i = 0; i < s; i++)maskedWords.words[i] = this.words[i];
            maskedWords.length = s;
        }
        if (s === 0) ;
        else if (this.length > s) {
            this.length -= s;
            for(i = 0; i < this.length; i++)this.words[i] = this.words[i + s];
        } else {
            this.words[0] = 0;
            this.length = 1;
        }
        var carry = 0;
        for(i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--){
            var word = this.words[i] | 0;
            this.words[i] = carry << 26 - r | word >>> r;
            carry = word & mask;
        }
        // Push carried bits as a mask
        if (maskedWords && carry !== 0) maskedWords.words[maskedWords.length++] = carry;
        if (this.length === 0) {
            this.words[0] = 0;
            this.length = 1;
        }
        return this.strip();
    };
    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
    };
    // Shift-left
    BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
    };
    BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
    };
    // Shift-right
    BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
    };
    BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
    };
    // Test if n bit is set
    BN.prototype.testn = function testn(bit) {
        assert(typeof bit === 'number' && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) return false;
        // Check bit and return
        var w = this.words[s];
        return !!(w & q);
    };
    // Return only lowers bits of number (in-place)
    BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, 'imaskn works only with positive numbers');
        if (this.length <= s) return this;
        if (r !== 0) s++;
        this.length = Math.min(s, this.length);
        if (r !== 0) {
            var mask = 67108863 ^ 67108863 >>> r << r;
            this.words[this.length - 1] &= mask;
        }
        return this.strip();
    };
    // Return only lowers bits of number
    BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
    };
    // Add plain number `num` to `this`
    BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === 'number');
        assert(num < 67108864);
        if (num < 0) return this.isubn(-num);
        // Possible sign change
        if (this.negative !== 0) {
            if (this.length === 1 && (this.words[0] | 0) < num) {
                this.words[0] = num - (this.words[0] | 0);
                this.negative = 0;
                return this;
            }
            this.negative = 0;
            this.isubn(num);
            this.negative = 1;
            return this;
        }
        // Add without checks
        return this._iaddn(num);
    };
    BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        // Carry
        for(var i = 0; i < this.length && this.words[i] >= 67108864; i++){
            this.words[i] -= 67108864;
            if (i === this.length - 1) this.words[i + 1] = 1;
            else this.words[i + 1]++;
        }
        this.length = Math.max(this.length, i + 1);
        return this;
    };
    // Subtract plain number `num` from `this`
    BN.prototype.isubn = function isubn(num) {
        assert(typeof num === 'number');
        assert(num < 67108864);
        if (num < 0) return this.iaddn(-num);
        if (this.negative !== 0) {
            this.negative = 0;
            this.iaddn(num);
            this.negative = 1;
            return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
            this.words[0] = -this.words[0];
            this.negative = 1;
        } else // Carry
        for(var i = 0; i < this.length && this.words[i] < 0; i++){
            this.words[i] += 67108864;
            this.words[i + 1] -= 1;
        }
        return this.strip();
    };
    BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
    };
    BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
    };
    BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
    };
    BN.prototype.abs = function abs() {
        return this.clone().iabs();
    };
    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w;
        var carry = 0;
        for(i = 0; i < num.length; i++){
            w = (this.words[i + shift] | 0) + carry;
            var right = (num.words[i] | 0) * mul;
            w -= right & 67108863;
            carry = (w >> 26) - (right / 67108864 | 0);
            this.words[i + shift] = w & 67108863;
        }
        for(; i < this.length - shift; i++){
            w = (this.words[i + shift] | 0) + carry;
            carry = w >> 26;
            this.words[i + shift] = w & 67108863;
        }
        if (carry === 0) return this.strip();
        // Subtraction overflow
        assert(carry === -1);
        carry = 0;
        for(i = 0; i < this.length; i++){
            w = -(this.words[i] | 0) + carry;
            carry = w >> 26;
            this.words[i] = w & 67108863;
        }
        this.negative = 1;
        return this.strip();
    };
    BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num;
        // Normalize
        var bhi = b.words[b.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
            b = b.ushln(shift);
            a.iushln(shift);
            bhi = b.words[b.length - 1] | 0;
        }
        // Initialize quotient
        var m = a.length - b.length;
        var q;
        if (mode !== 'mod') {
            q = new BN(null);
            q.length = m + 1;
            q.words = new Array(q.length);
            for(var i = 0; i < q.length; i++)q.words[i] = 0;
        }
        var diff = a.clone()._ishlnsubmul(b, 1, m);
        if (diff.negative === 0) {
            a = diff;
            if (q) q.words[m] = 1;
        }
        for(var j = m - 1; j >= 0; j--){
            var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
            // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
            // (0x7ffffff)
            qj = Math.min(qj / bhi | 0, 67108863);
            a._ishlnsubmul(b, qj, j);
            while(a.negative !== 0){
                qj--;
                a.negative = 0;
                a._ishlnsubmul(b, 1, j);
                if (!a.isZero()) a.negative ^= 1;
            }
            if (q) q.words[j] = qj;
        }
        if (q) q.strip();
        a.strip();
        // Denormalize
        if (mode !== 'div' && shift !== 0) a.iushrn(shift);
        return {
            div: q || null,
            mod: a
        };
    };
    // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested
    BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());
        if (this.isZero()) return {
            div: new BN(0),
            mod: new BN(0)
        };
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
            res = this.neg().divmod(num, mode);
            if (mode !== 'mod') div = res.div.neg();
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) mod.iadd(num);
            }
            return {
                div: div,
                mod: mod
            };
        }
        if (this.negative === 0 && num.negative !== 0) {
            res = this.divmod(num.neg(), mode);
            if (mode !== 'mod') div = res.div.neg();
            return {
                div: div,
                mod: res.mod
            };
        }
        if ((this.negative & num.negative) !== 0) {
            res = this.neg().divmod(num.neg(), mode);
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) mod.isub(num);
            }
            return {
                div: res.div,
                mod: mod
            };
        }
        // Both numbers are positive at this point
        // Strip both numbers to approximate shift value
        if (num.length > this.length || this.cmp(num) < 0) return {
            div: new BN(0),
            mod: this
        };
        // Very short reduction
        if (num.length === 1) {
            if (mode === 'div') return {
                div: this.divn(num.words[0]),
                mod: null
            };
            if (mode === 'mod') return {
                div: null,
                mod: new BN(this.modn(num.words[0]))
            };
            return {
                div: this.divn(num.words[0]),
                mod: new BN(this.modn(num.words[0]))
            };
        }
        return this._wordDiv(num, mode);
    };
    // Find `this` / `num`
    BN.prototype.div = function div(num) {
        return this.divmod(num, 'div', false).div;
    };
    // Find `this` % `num`
    BN.prototype.mod = function mod(num) {
        return this.divmod(num, 'mod', false).mod;
    };
    BN.prototype.umod = function umod(num) {
        return this.divmod(num, 'mod', true).mod;
    };
    // Find Round(`this` / `num`)
    BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        // Fast case - exact division
        if (dm.mod.isZero()) return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half);
        // Round down
        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
        // Round up
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN.prototype.modn = function modn(num) {
        assert(num <= 67108863);
        var p = 67108864 % num;
        var acc = 0;
        for(var i = this.length - 1; i >= 0; i--)acc = (p * acc + (this.words[i] | 0)) % num;
        return acc;
    };
    // In-place division by number
    BN.prototype.idivn = function idivn(num) {
        assert(num <= 67108863);
        var carry = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var w = (this.words[i] | 0) + carry * 67108864;
            this.words[i] = w / num | 0;
            carry = w % num;
        }
        return this.strip();
    };
    BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
    };
    BN.prototype.egcd = function egcd(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var x = this;
        var y = p.clone();
        if (x.negative !== 0) x = x.umod(p);
        else x = x.clone();
        // A * x + B * y = x
        var A = new BN(1);
        var B = new BN(0);
        // C * x + D * y = y
        var C = new BN(0);
        var D = new BN(1);
        var g = 0;
        while(x.isEven() && y.isEven()){
            x.iushrn(1);
            y.iushrn(1);
            ++g;
        }
        var yp = y.clone();
        var xp = x.clone();
        while(!x.isZero()){
            for(var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                x.iushrn(i);
                while(i-- > 0){
                    if (A.isOdd() || B.isOdd()) {
                        A.iadd(yp);
                        B.isub(xp);
                    }
                    A.iushrn(1);
                    B.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                y.iushrn(j);
                while(j-- > 0){
                    if (C.isOdd() || D.isOdd()) {
                        C.iadd(yp);
                        D.isub(xp);
                    }
                    C.iushrn(1);
                    D.iushrn(1);
                }
            }
            if (x.cmp(y) >= 0) {
                x.isub(y);
                A.isub(C);
                B.isub(D);
            } else {
                y.isub(x);
                C.isub(A);
                D.isub(B);
            }
        }
        return {
            a: C,
            b: D,
            gcd: y.iushln(g)
        };
    };
    // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed
    BN.prototype._invmp = function _invmp(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var a = this;
        var b = p.clone();
        if (a.negative !== 0) a = a.umod(p);
        else a = a.clone();
        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b.clone();
        while(a.cmpn(1) > 0 && b.cmpn(1) > 0){
            for(var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                a.iushrn(i);
                while(i-- > 0){
                    if (x1.isOdd()) x1.iadd(delta);
                    x1.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                b.iushrn(j);
                while(j-- > 0){
                    if (x2.isOdd()) x2.iadd(delta);
                    x2.iushrn(1);
                }
            }
            if (a.cmp(b) >= 0) {
                a.isub(b);
                x1.isub(x2);
            } else {
                b.isub(a);
                x2.isub(x1);
            }
        }
        var res;
        if (a.cmpn(1) === 0) res = x1;
        else res = x2;
        if (res.cmpn(0) < 0) res.iadd(p);
        return res;
    };
    BN.prototype.gcd = function gcd(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0;
        // Remove common factor of two
        for(var shift = 0; a.isEven() && b.isEven(); shift++){
            a.iushrn(1);
            b.iushrn(1);
        }
        do {
            while(a.isEven())a.iushrn(1);
            while(b.isEven())b.iushrn(1);
            var r = a.cmp(b);
            if (r < 0) {
                // Swap `a` and `b` to make `a` always bigger than `b`
                var t = a;
                a = b;
                b = t;
            } else if (r === 0 || b.cmpn(1) === 0) break;
            a.isub(b);
        }while (true)
        return b.iushln(shift);
    };
    // Invert number in the field F(num)
    BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
    };
    BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
    };
    BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
    };
    // And first word and num
    BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
    };
    // Increment at the bit position in-line
    BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === 'number');
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) {
            this._expand(s + 1);
            this.words[s] |= q;
            return this;
        }
        // Add bit and propagate, if needed
        var carry = q;
        for(var i = s; carry !== 0 && i < this.length; i++){
            var w = this.words[i] | 0;
            w += carry;
            carry = w >>> 26;
            w &= 67108863;
            this.words[i] = w;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return this;
    };
    BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
    };
    BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this.strip();
        var res;
        if (this.length > 1) res = 1;
        else {
            if (negative) num = -num;
            assert(num <= 67108863, 'Number is too big');
            var w = this.words[0] | 0;
            res = w === num ? 0 : w < num ? -1 : 1;
        }
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`
    BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Unsigned comparison
    BN.prototype.ucmp = function ucmp(num) {
        // At this point both numbers have the same sign
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var a = this.words[i] | 0;
            var b = num.words[i] | 0;
            if (a === b) continue;
            if (a < b) res = -1;
            else if (a > b) res = 1;
            break;
        }
        return res;
    };
    BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
    };
    BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
    };
    BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
    };
    BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
    };
    BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
    };
    BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
    };
    BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
    };
    BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
    };
    BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
    };
    BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
    };
    //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //
    BN.red = function red(num) {
        return new Red(num);
    };
    BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        assert(this.negative === 0, 'red works only with positives');
        return ctx.convertTo(this)._forceRed(ctx);
    };
    BN.prototype.fromRed = function fromRed() {
        assert(this.red, 'fromRed works only with numbers in reduction context');
        return this.red.convertFrom(this);
    };
    BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
    };
    BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        return this._forceRed(ctx);
    };
    BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, 'redAdd works only with red numbers');
        return this.red.add(this, num);
    };
    BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, 'redIAdd works only with red numbers');
        return this.red.iadd(this, num);
    };
    BN.prototype.redSub = function redSub(num) {
        assert(this.red, 'redSub works only with red numbers');
        return this.red.sub(this, num);
    };
    BN.prototype.redISub = function redISub(num) {
        assert(this.red, 'redISub works only with red numbers');
        return this.red.isub(this, num);
    };
    BN.prototype.redShl = function redShl(num) {
        assert(this.red, 'redShl works only with red numbers');
        return this.red.shl(this, num);
    };
    BN.prototype.redMul = function redMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.mul(this, num);
    };
    BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.imul(this, num);
    };
    BN.prototype.redSqr = function redSqr() {
        assert(this.red, 'redSqr works only with red numbers');
        this.red._verify1(this);
        return this.red.sqr(this);
    };
    BN.prototype.redISqr = function redISqr() {
        assert(this.red, 'redISqr works only with red numbers');
        this.red._verify1(this);
        return this.red.isqr(this);
    };
    // Square root over p
    BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, 'redSqrt works only with red numbers');
        this.red._verify1(this);
        return this.red.sqrt(this);
    };
    BN.prototype.redInvm = function redInvm() {
        assert(this.red, 'redInvm works only with red numbers');
        this.red._verify1(this);
        return this.red.invm(this);
    };
    // Return negative clone of `this` % `red modulo`
    BN.prototype.redNeg = function redNeg() {
        assert(this.red, 'redNeg works only with red numbers');
        this.red._verify1(this);
        return this.red.neg(this);
    };
    BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, 'redPow(normalNum)');
        this.red._verify1(this);
        return this.red.pow(this, num);
    };
    // Prime numbers with efficient reduction
    var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    // Pseudo-Mersenne prime
    function MPrime(name, p) {
        // P = 2 ^ N - K
        this.name = name;
        this.p = new BN(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
        // Assumes that `num` is less than `P^2`
        // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
        var r = num;
        var rlen;
        do {
            this.split(r, this.tmp);
            r = this.imulK(r);
            r = r.iadd(this.tmp);
            rlen = r.bitLength();
        }while (rlen > this.n)
        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
            r.words[0] = 0;
            r.length = 1;
        } else if (cmp > 0) r.isub(this.p);
        else r.strip();
        return r;
    };
    MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
    };
    function K256() {
        MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    inherits(K256, MPrime);
    K256.prototype.split = function split(input, output) {
        // 256 = 9 * 26 + 22
        var mask = 4194303;
        var outLen = Math.min(input.length, 9);
        for(var i = 0; i < outLen; i++)output.words[i] = input.words[i];
        output.length = outLen;
        if (input.length <= 9) {
            input.words[0] = 0;
            input.length = 1;
            return;
        }
        // Shift by 9 limbs
        var prev = input.words[9];
        output.words[output.length++] = prev & mask;
        for(i = 10; i < input.length; i++){
            var next = input.words[i] | 0;
            input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
            prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) input.length -= 10;
        else input.length -= 9;
    };
    K256.prototype.imulK = function imulK(num) {
        // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
        var lo = 0;
        for(var i = 0; i < num.length; i++){
            var w = num.words[i] | 0;
            lo += w * 977;
            num.words[i] = lo & 67108863;
            lo = w * 64 + (lo / 67108864 | 0);
        }
        // Fast length reduction
        if (num.words[num.length - 1] === 0) {
            num.length--;
            if (num.words[num.length - 1] === 0) num.length--;
        }
        return num;
    };
    function P224() {
        MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    inherits(P224, MPrime);
    function P192() {
        MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    inherits(P192, MPrime);
    function P25519() {
        // 2 ^ 255 - 19
        MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    inherits(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
        // K = 0x13
        var carry = 0;
        for(var i = 0; i < num.length; i++){
            var hi = (num.words[i] | 0) * 19 + carry;
            var lo = hi & 67108863;
            hi >>>= 26;
            num.words[i] = lo;
            carry = hi;
        }
        if (carry !== 0) num.words[num.length++] = carry;
        return num;
    };
    // Exported mostly for testing purposes, use plain name instead
    BN._prime = function prime(name) {
        // Cached version of prime
        if (primes[name]) return primes[name];
        var prime;
        if (name === 'k256') prime = new K256();
        else if (name === 'p224') prime = new P224();
        else if (name === 'p192') prime = new P192();
        else if (name === 'p25519') prime = new P25519();
        else throw new Error('Unknown prime ' + name);
        primes[name] = prime;
        return prime;
    };
    //
    // Base reduction engine
    //
    function Red(m) {
        if (typeof m === 'string') {
            var prime = BN._prime(m);
            this.m = prime.p;
            this.prime = prime;
        } else {
            assert(m.gtn(1), 'modulus must be greater than 1');
            this.m = m;
            this.prime = null;
        }
    }
    Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, 'red works only with positives');
        assert(a.red, 'red works only with red numbers');
    };
    Red.prototype._verify2 = function _verify2(a, b) {
        assert((a.negative | b.negative) === 0, 'red works only with positives');
        assert(a.red && a.red === b.red, 'red works only with red numbers');
    };
    Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        return a.umod(this.m)._forceRed(this);
    };
    Red.prototype.neg = function neg(a) {
        if (a.isZero()) return a.clone();
        return this.m.sub(a)._forceRed(this);
    };
    Red.prototype.add = function add(a, b) {
        this._verify2(a, b);
        var res = a.add(b);
        if (res.cmp(this.m) >= 0) res.isub(this.m);
        return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a, b) {
        this._verify2(a, b);
        var res = a.iadd(b);
        if (res.cmp(this.m) >= 0) res.isub(this.m);
        return res;
    };
    Red.prototype.sub = function sub(a, b) {
        this._verify2(a, b);
        var res = a.sub(b);
        if (res.cmpn(0) < 0) res.iadd(this.m);
        return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a, b) {
        this._verify2(a, b);
        var res = a.isub(b);
        if (res.cmpn(0) < 0) res.iadd(this.m);
        return res;
    };
    Red.prototype.shl = function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
    };
    Red.prototype.imul = function imul(a, b) {
        this._verify2(a, b);
        return this.imod(a.imul(b));
    };
    Red.prototype.mul = function mul(a, b) {
        this._verify2(a, b);
        return this.imod(a.mul(b));
    };
    Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
    };
    Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
    };
    Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1);
        // Fast case
        if (mod3 === 3) {
            var pow = this.m.add(new BN(1)).iushrn(2);
            return this.pow(a, pow);
        }
        // Tonelli-Shanks algorithm (Totally unoptimized and slow)
        //
        // Find Q and S, that Q * 2 ^ S = (P - 1)
        var q = this.m.subn(1);
        var s = 0;
        while(!q.isZero() && q.andln(1) === 0){
            s++;
            q.iushrn(1);
        }
        assert(!q.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        // Find quadratic non-residue
        // NOTE: Max is such because of generalized Riemann hypothesis.
        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN(2 * z * z).toRed(this);
        while(this.pow(z, lpow).cmp(nOne) !== 0)z.redIAdd(nOne);
        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;
        while(t.cmp(one) !== 0){
            var tmp = t;
            for(var i = 0; tmp.cmp(one) !== 0; i++)tmp = tmp.redSqr();
            assert(i < m);
            var b = this.pow(c, new BN(1).iushln(m - i - 1));
            r = r.redMul(b);
            c = b.redSqr();
            t = t.redMul(c);
            m = i;
        }
        return r;
    };
    Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
            inv.negative = 0;
            return this.imod(inv).redNeg();
        } else return this.imod(inv);
    };
    Red.prototype.pow = function pow(a, num) {
        if (num.isZero()) return new BN(1).toRed(this);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;
        for(var i = 2; i < wnd.length; i++)wnd[i] = this.mul(wnd[i - 1], a);
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) start = 26;
        for(i = num.length - 1; i >= 0; i--){
            var word = num.words[i];
            for(var j = start - 1; j >= 0; j--){
                var bit = word >> j & 1;
                if (res !== wnd[0]) res = this.sqr(res);
                if (bit === 0 && current === 0) {
                    currentLen = 0;
                    continue;
                }
                current <<= 1;
                current |= bit;
                currentLen++;
                if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
                res = this.mul(res, wnd[current]);
                currentLen = 0;
                current = 0;
            }
            start = 26;
        }
        return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
    };
    //
    // Montgomery method engine
    //
    BN.mont = function mont(num) {
        return new Mont(num);
    };
    function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) this.shift += 26 - this.shift % 26;
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
    }
    inherits(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
    };
    Mont.prototype.imul = function imul(a, b) {
        if (a.isZero() || b.isZero()) {
            a.words[0] = 0;
            a.length = 1;
            return a;
        }
        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) res = u.isub(this.m);
        else if (u.cmpn(0) < 0) res = u.iadd(this.m);
        return res._forceRed(this);
    };
    Mont.prototype.mul = function mul(a, b) {
        if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) res = u.isub(this.m);
        else if (u.cmpn(0) < 0) res = u.iadd(this.m);
        return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a) {
        // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
    };
})(typeof module === 'undefined' || module, this);

},{"buffer":"iPcOw"}],"iPcOw":[function(require,module,exports) {
"use strict";

},{}],"grCai":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeHexLeadingZeros = exports.sanitizeHex = exports.addHexPrefix = exports.removeHexPrefix = exports.padRight = exports.padLeft = exports.sanitizeBytes = exports.swapHex = exports.swapBytes = exports.splitBytes = exports.calcByteLength = exports.trimRight = exports.trimLeft = exports.concatArrays = exports.concatBuffers = exports.getEncoding = exports.getType = exports.isArrayBuffer = exports.isTypedArray = exports.isBuffer = exports.isHexString = exports.isBinaryString = exports.binaryToNumber = exports.binaryToUtf8 = exports.binaryToHex = exports.binaryToArray = exports.binaryToBuffer = exports.numberToBinary = exports.numberToUtf8 = exports.numberToHex = exports.numberToArray = exports.numberToBuffer = exports.utf8ToBinary = exports.utf8ToNumber = exports.utf8ToHex = exports.utf8ToArray = exports.utf8ToBuffer = exports.hexToBinary = exports.hexToNumber = exports.hexToUtf8 = exports.hexToArray = exports.hexToBuffer = exports.arrayToBinary = exports.arrayToNumber = exports.arrayToUtf8 = exports.arrayToHex = exports.arrayToBuffer = exports.bufferToBinary = exports.bufferToNumber = exports.bufferToUtf8 = exports.bufferToHex = exports.bufferToArray = void 0;
const is_typedarray_1 = __importDefault(require("is-typedarray"));
const typedarray_to_buffer_1 = __importDefault(require("typedarray-to-buffer"));
const ENC_HEX = "hex";
const ENC_UTF8 = "utf8";
const ENC_BIN = "binary";
const TYPE_BUFFER = "buffer";
const TYPE_ARRAY = "array";
const TYPE_TYPED_ARRAY = "typed-array";
const TYPE_ARRAY_BUFFER = "array-buffer";
const STRING_ZERO = "0";
function bufferToArray(buf) {
    return new Uint8Array(buf);
}
exports.bufferToArray = bufferToArray;
function bufferToHex(buf, prefixed = false) {
    const hex = buf.toString(ENC_HEX);
    return prefixed ? addHexPrefix(hex) : hex;
}
exports.bufferToHex = bufferToHex;
function bufferToUtf8(buf) {
    return buf.toString(ENC_UTF8);
}
exports.bufferToUtf8 = bufferToUtf8;
function bufferToNumber(buf) {
    return buf.readUIntBE(0, buf.length);
}
exports.bufferToNumber = bufferToNumber;
function bufferToBinary(buf) {
    return arrayToBinary(bufferToArray(buf));
}
exports.bufferToBinary = bufferToBinary;
function arrayToBuffer(arr) {
    return typedarray_to_buffer_1.default(arr);
}
exports.arrayToBuffer = arrayToBuffer;
function arrayToHex(arr, prefixed = false) {
    return bufferToHex(arrayToBuffer(arr), prefixed);
}
exports.arrayToHex = arrayToHex;
function arrayToUtf8(arr) {
    return bufferToUtf8(arrayToBuffer(arr));
}
exports.arrayToUtf8 = arrayToUtf8;
function arrayToNumber(arr) {
    return bufferToNumber(arrayToBuffer(arr));
}
exports.arrayToNumber = arrayToNumber;
function arrayToBinary(arr) {
    return Array.from(arr).map(numberToBinary).join("");
}
exports.arrayToBinary = arrayToBinary;
function hexToBuffer(hex) {
    return Buffer.from(removeHexPrefix(hex), ENC_HEX);
}
exports.hexToBuffer = hexToBuffer;
function hexToArray(hex) {
    return bufferToArray(hexToBuffer(hex));
}
exports.hexToArray = hexToArray;
function hexToUtf8(hex) {
    return bufferToUtf8(hexToBuffer(hex));
}
exports.hexToUtf8 = hexToUtf8;
function hexToNumber(hex) {
    return arrayToNumber(hexToArray(hex));
}
exports.hexToNumber = hexToNumber;
function hexToBinary(hex) {
    return arrayToBinary(hexToArray(hex));
}
exports.hexToBinary = hexToBinary;
function utf8ToBuffer(utf8) {
    return Buffer.from(utf8, ENC_UTF8);
}
exports.utf8ToBuffer = utf8ToBuffer;
function utf8ToArray(utf8) {
    return bufferToArray(utf8ToBuffer(utf8));
}
exports.utf8ToArray = utf8ToArray;
function utf8ToHex(utf8, prefixed = false) {
    return bufferToHex(utf8ToBuffer(utf8), prefixed);
}
exports.utf8ToHex = utf8ToHex;
function utf8ToNumber(utf8) {
    const num = parseInt(utf8, 10);
    assert(isDefined(num), "Number can only safely store up to 53 bits");
    return num;
}
exports.utf8ToNumber = utf8ToNumber;
function utf8ToBinary(utf8) {
    return arrayToBinary(utf8ToArray(utf8));
}
exports.utf8ToBinary = utf8ToBinary;
function numberToBuffer(num) {
    return binaryToBuffer(numberToBinary(num));
}
exports.numberToBuffer = numberToBuffer;
function numberToArray(num) {
    return binaryToArray(numberToBinary(num));
}
exports.numberToArray = numberToArray;
function numberToHex(num, prefixed) {
    return binaryToHex(numberToBinary(num), prefixed);
}
exports.numberToHex = numberToHex;
function numberToUtf8(num) {
    return `${num}`;
}
exports.numberToUtf8 = numberToUtf8;
function numberToBinary(num) {
    const bin = (num >>> 0).toString(2);
    return sanitizeBytes(bin);
}
exports.numberToBinary = numberToBinary;
function binaryToBuffer(bin) {
    return arrayToBuffer(binaryToArray(bin));
}
exports.binaryToBuffer = binaryToBuffer;
function binaryToArray(bin) {
    return new Uint8Array(splitBytes(bin).map((x)=>parseInt(x, 2)
    ));
}
exports.binaryToArray = binaryToArray;
function binaryToHex(bin, prefixed) {
    return arrayToHex(binaryToArray(bin), prefixed);
}
exports.binaryToHex = binaryToHex;
function binaryToUtf8(bin) {
    return arrayToUtf8(binaryToArray(bin));
}
exports.binaryToUtf8 = binaryToUtf8;
function binaryToNumber(bin) {
    return arrayToNumber(binaryToArray(bin));
}
exports.binaryToNumber = binaryToNumber;
function isBinaryString(str) {
    if (typeof str !== "string" || !new RegExp(/^[01]+$/).test(str)) return false;
    if (str.length % 8 !== 0) return false;
    return true;
}
exports.isBinaryString = isBinaryString;
function isHexString(str, length) {
    if (typeof str !== "string" || !str.match(/^0x[0-9A-Fa-f]*$/)) return false;
    if (length && str.length !== 2 + 2 * length) return false;
    return true;
}
exports.isHexString = isHexString;
function isBuffer(val) {
    return Buffer.isBuffer(val);
}
exports.isBuffer = isBuffer;
function isTypedArray(val) {
    return is_typedarray_1.default.strict(val) && !isBuffer(val);
}
exports.isTypedArray = isTypedArray;
function isArrayBuffer(val) {
    return !isTypedArray(val) && !isBuffer(val) && typeof val.byteLength !== "undefined";
}
exports.isArrayBuffer = isArrayBuffer;
function getType(val) {
    if (isBuffer(val)) return TYPE_BUFFER;
    else if (isTypedArray(val)) return TYPE_TYPED_ARRAY;
    else if (isArrayBuffer(val)) return TYPE_ARRAY_BUFFER;
    else if (Array.isArray(val)) return TYPE_ARRAY;
    else return typeof val;
}
exports.getType = getType;
function getEncoding(str) {
    if (isBinaryString(str)) return ENC_BIN;
    if (isHexString(str)) return ENC_HEX;
    return ENC_UTF8;
}
exports.getEncoding = getEncoding;
function concatBuffers(...args) {
    const result = Buffer.concat(args);
    return result;
}
exports.concatBuffers = concatBuffers;
function concatArrays(...args) {
    let result = [];
    args.forEach((arg)=>result = result.concat(Array.from(arg))
    );
    return new Uint8Array([
        ...result
    ]);
}
exports.concatArrays = concatArrays;
function trimLeft(data, length) {
    const diff = data.length - length;
    if (diff > 0) data = data.slice(diff);
    return data;
}
exports.trimLeft = trimLeft;
function trimRight(data, length) {
    return data.slice(0, length);
}
exports.trimRight = trimRight;
function calcByteLength(length, byteSize = 8) {
    const remainder = length % byteSize;
    return remainder ? (length - remainder) / byteSize * byteSize + byteSize : length;
}
exports.calcByteLength = calcByteLength;
function splitBytes(str, byteSize = 8) {
    const bytes = sanitizeBytes(str).match(new RegExp(`.{${byteSize}}`, "gi"));
    return Array.from(bytes || []);
}
exports.splitBytes = splitBytes;
function swapBytes(str) {
    return splitBytes(str).map(reverseString).join("");
}
exports.swapBytes = swapBytes;
function swapHex(str) {
    return binaryToHex(swapBytes(hexToBinary(str)));
}
exports.swapHex = swapHex;
function sanitizeBytes(str, byteSize = 8, padding = STRING_ZERO) {
    return padLeft(str, calcByteLength(str.length, byteSize), padding);
}
exports.sanitizeBytes = sanitizeBytes;
function padLeft(str, length, padding = STRING_ZERO) {
    return padString(str, length, true, padding);
}
exports.padLeft = padLeft;
function padRight(str, length, padding = STRING_ZERO) {
    return padString(str, length, false, padding);
}
exports.padRight = padRight;
function removeHexPrefix(hex) {
    return hex.replace(/^0x/, "");
}
exports.removeHexPrefix = removeHexPrefix;
function addHexPrefix(hex) {
    return hex.startsWith("0x") ? hex : `0x${hex}`;
}
exports.addHexPrefix = addHexPrefix;
function sanitizeHex(hex) {
    hex = removeHexPrefix(hex);
    hex = sanitizeBytes(hex, 2);
    if (hex) hex = addHexPrefix(hex);
    return hex;
}
exports.sanitizeHex = sanitizeHex;
function removeHexLeadingZeros(hex) {
    const prefixed = hex.startsWith("0x");
    hex = removeHexPrefix(hex);
    hex = hex.startsWith(STRING_ZERO) ? hex.substring(1) : hex;
    return prefixed ? addHexPrefix(hex) : hex;
}
exports.removeHexLeadingZeros = removeHexLeadingZeros;
function isUndefined(value) {
    return typeof value === "undefined";
}
function isDefined(value) {
    return !isUndefined(value);
}
function assert(assertion, errorMessage) {
    if (!assertion) throw new Error(errorMessage);
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
function padString(str, length, left, padding = STRING_ZERO) {
    const diff = length - str.length;
    let result = str;
    if (diff > 0) {
        const pad = padding.repeat(diff);
        result = left ? pad + str : str + pad;
    }
    return result;
}

},{"buffer":"8iVrL","is-typedarray":"aWKu1","typedarray-to-buffer":"5rH1c"}],"aWKu1":[function(require,module,exports) {
module.exports = isTypedArray;
isTypedArray.strict = isStrictTypedArray;
isTypedArray.loose = isLooseTypedArray;
var toString = Object.prototype.toString;
var names = {
    '[object Int8Array]': true,
    '[object Int16Array]': true,
    '[object Int32Array]': true,
    '[object Uint8Array]': true,
    '[object Uint8ClampedArray]': true,
    '[object Uint16Array]': true,
    '[object Uint32Array]': true,
    '[object Float32Array]': true,
    '[object Float64Array]': true
};
function isTypedArray(arr) {
    return isStrictTypedArray(arr) || isLooseTypedArray(arr);
}
function isStrictTypedArray(arr) {
    return arr instanceof Int8Array || arr instanceof Int16Array || arr instanceof Int32Array || arr instanceof Uint8Array || arr instanceof Uint8ClampedArray || arr instanceof Uint16Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
}
function isLooseTypedArray(arr) {
    return names[toString.call(arr)];
}

},{}],"5rH1c":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
/**
 * Convert a typed array to a Buffer without a copy
 *
 * Author:   Feross Aboukhadijeh <https://feross.org>
 * License:  MIT
 *
 * `npm install typedarray-to-buffer`
 */ var isTypedArray = require('is-typedarray').strict;
module.exports = function typedarrayToBuffer(arr) {
    if (isTypedArray(arr)) {
        // To avoid a copy, use the typed array's underlying ArrayBuffer to back new Buffer
        var buf = Buffer.from(arr.buffer);
        if (arr.byteLength !== arr.buffer.byteLength) // Respect the "view", i.e. byteOffset and byteLength, without doing a copy
        buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
        return buf;
    } else // Pass through all other types to `Buffer.from`
    return Buffer.from(arr);
};

},{"buffer":"8iVrL","is-typedarray":"aWKu1"}],"iHhN3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toChecksumAddress", ()=>toChecksumAddress
);
parcelHelpers.export(exports, "isValidAddress", ()=>isValidAddress
);
parcelHelpers.export(exports, "parsePersonalSign", ()=>parsePersonalSign
);
parcelHelpers.export(exports, "parseTransactionData", ()=>parseTransactionData
);
var _jsSha3 = require("js-sha3");
var _encoding = require("@walletconnect/encoding");
var _encoding1 = require("./encoding");
var _misc = require("./misc");
var _validators = require("./validators");
function toChecksumAddress(address) {
    address = _encoding.removeHexPrefix(address.toLowerCase());
    const hash = _encoding.removeHexPrefix(_jsSha3.keccak_256(_encoding1.convertUtf8ToBuffer(address)));
    let checksum = "";
    for(let i = 0; i < address.length; i++)if (parseInt(hash[i], 16) > 7) checksum += address[i].toUpperCase();
    else checksum += address[i];
    return _encoding.addHexPrefix(checksum);
}
const isValidAddress = (address)=>{
    if (!address) return false;
    else if (address.toLowerCase().substring(0, 2) !== "0x") return false;
    else if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) return false;
    else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) return true;
    else return address === toChecksumAddress(address);
};
function parsePersonalSign(params) {
    if (!_validators.isEmptyArray(params) && !_validators.isHexString(params[0])) params[0] = _encoding1.convertUtf8ToHex(params[0]);
    return params;
}
function parseTransactionData(txData) {
    if (typeof txData.type !== "undefined" && txData.type !== "0") return txData;
    if (typeof txData.from === "undefined" || !isValidAddress(txData.from)) throw new Error(`Transaction object must include a valid 'from' value.`);
    function parseHexValues(value) {
        let result = value;
        if (typeof value === "number" || typeof value === "string" && !_validators.isEmptyString(value)) {
            if (!_validators.isHexString(value)) result = _encoding1.convertNumberToHex(value);
            else if (typeof value === "string") result = _misc.sanitizeHex(value);
        }
        if (typeof result === "string") result = _misc.removeHexLeadingZeros(result);
        return result;
    }
    const txDataRPC = {
        from: _misc.sanitizeHex(txData.from),
        to: typeof txData.to === "undefined" ? "" : _misc.sanitizeHex(txData.to),
        gasPrice: typeof txData.gasPrice === "undefined" ? "" : parseHexValues(txData.gasPrice),
        gas: typeof txData.gas === "undefined" ? typeof txData.gasLimit === "undefined" ? "" : parseHexValues(txData.gasLimit) : parseHexValues(txData.gas),
        value: typeof txData.value === "undefined" ? "" : parseHexValues(txData.value),
        nonce: typeof txData.nonce === "undefined" ? "" : parseHexValues(txData.nonce),
        data: typeof txData.data === "undefined" ? "" : _misc.sanitizeHex(txData.data) || "0x"
    };
    const prunable = [
        "gasPrice",
        "gas",
        "value",
        "nonce"
    ];
    Object.keys(txDataRPC).forEach((key)=>{
        if (!txDataRPC[key].trim().length && prunable.includes(key)) delete txDataRPC[key];
    });
    return txDataRPC;
}

},{"js-sha3":"1ggkx","@walletconnect/encoding":"grCai","./encoding":"gk54y","./misc":"aZ61Y","./validators":"5SccW","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"1ggkx":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */ /*jslint bitwise: true */ (function() {
    var INPUT_ERROR = 'input is invalid type';
    var FINALIZE_ERROR = 'finalize already called';
    var WINDOW = typeof window === 'object';
    var root = WINDOW ? window : {
    };
    if (root.JS_SHA3_NO_WINDOW) WINDOW = false;
    var WEB_WORKER = !WINDOW && typeof self === 'object';
    var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
    if (NODE_JS) root = global;
    else if (WEB_WORKER) root = self;
    var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && typeof module === 'object' && module.exports;
    var AMD = typeof define === 'function' && define.amd;
    var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
    var HEX_CHARS = '0123456789abcdef'.split('');
    var SHAKE_PADDING = [
        31,
        7936,
        2031616,
        520093696
    ];
    var CSHAKE_PADDING = [
        4,
        1024,
        262144,
        67108864
    ];
    var KECCAK_PADDING = [
        1,
        256,
        65536,
        16777216
    ];
    var PADDING = [
        6,
        1536,
        393216,
        100663296
    ];
    var SHIFT = [
        0,
        8,
        16,
        24
    ];
    var RC = [
        1,
        0,
        32898,
        0,
        32906,
        2147483648,
        2147516416,
        2147483648,
        32907,
        0,
        2147483649,
        0,
        2147516545,
        2147483648,
        32777,
        2147483648,
        138,
        0,
        136,
        0,
        2147516425,
        0,
        2147483658,
        0,
        2147516555,
        0,
        139,
        2147483648,
        32905,
        2147483648,
        32771,
        2147483648,
        32770,
        2147483648,
        128,
        2147483648,
        32778,
        0,
        2147483658,
        2147483648,
        2147516545,
        2147483648,
        32896,
        2147483648,
        2147483649,
        0,
        2147516424,
        2147483648
    ];
    var BITS = [
        224,
        256,
        384,
        512
    ];
    var SHAKE_BITS = [
        128,
        256
    ];
    var OUTPUT_TYPES = [
        'hex',
        'buffer',
        'arrayBuffer',
        'array',
        'digest'
    ];
    var CSHAKE_BYTEPAD = {
        '128': 168,
        '256': 136
    };
    if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
    if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) ArrayBuffer.isView = function(obj) {
        return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
    var createOutputMethod = function(bits, padding, outputType) {
        return function(message) {
            return new Keccak(bits, padding, bits).update(message)[outputType]();
        };
    };
    var createShakeOutputMethod = function(bits, padding, outputType) {
        return function(message, outputBits) {
            return new Keccak(bits, padding, outputBits).update(message)[outputType]();
        };
    };
    var createCshakeOutputMethod = function(bits, padding, outputType) {
        return function(message, outputBits, n, s) {
            return methods['cshake' + bits].update(message, outputBits, n, s)[outputType]();
        };
    };
    var createKmacOutputMethod = function(bits, padding, outputType) {
        return function(key, message, outputBits, s) {
            return methods['kmac' + bits].update(key, message, outputBits, s)[outputType]();
        };
    };
    var createOutputMethods = function(method, createMethod, bits, padding) {
        for(var i = 0; i < OUTPUT_TYPES.length; ++i){
            var type = OUTPUT_TYPES[i];
            method[type] = createMethod(bits, padding, type);
        }
        return method;
    };
    var createMethod1 = function(bits, padding) {
        var method = createOutputMethod(bits, padding, 'hex');
        method.create = function() {
            return new Keccak(bits, padding, bits);
        };
        method.update = function(message) {
            return method.create().update(message);
        };
        return createOutputMethods(method, createOutputMethod, bits, padding);
    };
    var createShakeMethod = function(bits, padding) {
        var method = createShakeOutputMethod(bits, padding, 'hex');
        method.create = function(outputBits) {
            return new Keccak(bits, padding, outputBits);
        };
        method.update = function(message, outputBits) {
            return method.create(outputBits).update(message);
        };
        return createOutputMethods(method, createShakeOutputMethod, bits, padding);
    };
    var createCshakeMethod = function(bits, padding) {
        var w = CSHAKE_BYTEPAD[bits];
        var method = createCshakeOutputMethod(bits, padding, 'hex');
        method.create = function(outputBits, n, s) {
            if (!n && !s) return methods['shake' + bits].create(outputBits);
            else return new Keccak(bits, padding, outputBits).bytepad([
                n,
                s
            ], w);
        };
        method.update = function(message, outputBits, n, s) {
            return method.create(outputBits, n, s).update(message);
        };
        return createOutputMethods(method, createCshakeOutputMethod, bits, padding);
    };
    var createKmacMethod = function(bits, padding) {
        var w = CSHAKE_BYTEPAD[bits];
        var method = createKmacOutputMethod(bits, padding, 'hex');
        method.create = function(key, outputBits, s) {
            return new Kmac(bits, padding, outputBits).bytepad([
                'KMAC',
                s
            ], w).bytepad([
                key
            ], w);
        };
        method.update = function(key, message, outputBits, s) {
            return method.create(key, outputBits, s).update(message);
        };
        return createOutputMethods(method, createKmacOutputMethod, bits, padding);
    };
    var algorithms = [
        {
            name: 'keccak',
            padding: KECCAK_PADDING,
            bits: BITS,
            createMethod: createMethod1
        },
        {
            name: 'sha3',
            padding: PADDING,
            bits: BITS,
            createMethod: createMethod1
        },
        {
            name: 'shake',
            padding: SHAKE_PADDING,
            bits: SHAKE_BITS,
            createMethod: createShakeMethod
        },
        {
            name: 'cshake',
            padding: CSHAKE_PADDING,
            bits: SHAKE_BITS,
            createMethod: createCshakeMethod
        },
        {
            name: 'kmac',
            padding: CSHAKE_PADDING,
            bits: SHAKE_BITS,
            createMethod: createKmacMethod
        }
    ];
    var methods = {
    }, methodNames = [];
    for(var i1 = 0; i1 < algorithms.length; ++i1){
        var algorithm = algorithms[i1];
        var bits1 = algorithm.bits;
        for(var j = 0; j < bits1.length; ++j){
            var methodName = algorithm.name + '_' + bits1[j];
            methodNames.push(methodName);
            methods[methodName] = algorithm.createMethod(bits1[j], algorithm.padding);
            if (algorithm.name !== 'sha3') {
                var newMethodName = algorithm.name + bits1[j];
                methodNames.push(newMethodName);
                methods[newMethodName] = methods[methodName];
            }
        }
    }
    function Keccak(bits, padding, outputBits) {
        this.blocks = [];
        this.s = [];
        this.padding = padding;
        this.outputBits = outputBits;
        this.reset = true;
        this.finalized = false;
        this.block = 0;
        this.start = 0;
        this.blockCount = 1600 - (bits << 1) >> 5;
        this.byteCount = this.blockCount << 2;
        this.outputBlocks = outputBits >> 5;
        this.extraBytes = (outputBits & 31) >> 3;
        for(var i = 0; i < 50; ++i)this.s[i] = 0;
    }
    Keccak.prototype.update = function(message) {
        if (this.finalized) throw new Error(FINALIZE_ERROR);
        var notString, type = typeof message;
        if (type !== 'string') {
            if (type === 'object') {
                if (message === null) throw new Error(INPUT_ERROR);
                else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) message = new Uint8Array(message);
                else if (!Array.isArray(message)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) throw new Error(INPUT_ERROR);
                }
            } else throw new Error(INPUT_ERROR);
            notString = true;
        }
        var blocks = this.blocks, byteCount = this.byteCount, length = message.length, blockCount = this.blockCount, index = 0, s = this.s, i, code;
        while(index < length){
            if (this.reset) {
                this.reset = false;
                blocks[0] = this.block;
                for(i = 1; i < blockCount + 1; ++i)blocks[i] = 0;
            }
            if (notString) for(i = this.start; index < length && i < byteCount; ++index)blocks[i >> 2] |= message[index] << SHIFT[(i++) & 3];
            else for(i = this.start; index < length && i < byteCount; ++index){
                code = message.charCodeAt(index);
                if (code < 128) blocks[i >> 2] |= code << SHIFT[(i++) & 3];
                else if (code < 2048) {
                    blocks[i >> 2] |= (192 | code >> 6) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code & 63) << SHIFT[(i++) & 3];
                } else if (code < 55296 || code >= 57344) {
                    blocks[i >> 2] |= (224 | code >> 12) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code & 63) << SHIFT[(i++) & 3];
                } else {
                    code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                    blocks[i >> 2] |= (240 | code >> 18) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (128 | code & 63) << SHIFT[(i++) & 3];
                }
            }
            this.lastByteIndex = i;
            if (i >= byteCount) {
                this.start = i - byteCount;
                this.block = blocks[blockCount];
                for(i = 0; i < blockCount; ++i)s[i] ^= blocks[i];
                f(s);
                this.reset = true;
            } else this.start = i;
        }
        return this;
    };
    Keccak.prototype.encode = function(x, right) {
        var o = x & 255, n = 1;
        var bytes = [
            o
        ];
        x = x >> 8;
        o = x & 255;
        while(o > 0){
            bytes.unshift(o);
            x = x >> 8;
            o = x & 255;
            ++n;
        }
        if (right) bytes.push(n);
        else bytes.unshift(n);
        this.update(bytes);
        return bytes.length;
    };
    Keccak.prototype.encodeString = function(str) {
        var notString, type = typeof str;
        if (type !== 'string') {
            if (type === 'object') {
                if (str === null) throw new Error(INPUT_ERROR);
                else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) str = new Uint8Array(str);
                else if (!Array.isArray(str)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) throw new Error(INPUT_ERROR);
                }
            } else throw new Error(INPUT_ERROR);
            notString = true;
        }
        var bytes = 0, length = str.length;
        if (notString) bytes = length;
        else for(var i = 0; i < str.length; ++i){
            var code = str.charCodeAt(i);
            if (code < 128) bytes += 1;
            else if (code < 2048) bytes += 2;
            else if (code < 55296 || code >= 57344) bytes += 3;
            else {
                code = 65536 + ((code & 1023) << 10 | str.charCodeAt(++i) & 1023);
                bytes += 4;
            }
        }
        bytes += this.encode(bytes * 8);
        this.update(str);
        return bytes;
    };
    Keccak.prototype.bytepad = function(strs, w) {
        var bytes = this.encode(w);
        for(var i = 0; i < strs.length; ++i)bytes += this.encodeString(strs[i]);
        var paddingBytes = w - bytes % w;
        var zeros = [];
        zeros.length = paddingBytes;
        this.update(zeros);
        return this;
    };
    Keccak.prototype.finalize = function() {
        if (this.finalized) return;
        this.finalized = true;
        var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
        blocks[i >> 2] |= this.padding[i & 3];
        if (this.lastByteIndex === this.byteCount) {
            blocks[0] = blocks[blockCount];
            for(i = 1; i < blockCount + 1; ++i)blocks[i] = 0;
        }
        blocks[blockCount - 1] |= 2147483648;
        for(i = 0; i < blockCount; ++i)s[i] ^= blocks[i];
        f(s);
    };
    Keccak.prototype.toString = Keccak.prototype.hex = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
        var hex = '', block;
        while(j < outputBlocks){
            for(i = 0; i < blockCount && j < outputBlocks; ++i, ++j){
                block = s[i];
                hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15] + HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15] + HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15] + HEX_CHARS[block >> 28 & 15] + HEX_CHARS[block >> 24 & 15];
            }
            if (j % blockCount === 0) {
                f(s);
                i = 0;
            }
        }
        if (extraBytes) {
            block = s[i];
            hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15];
            if (extraBytes > 1) hex += HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15];
            if (extraBytes > 2) hex += HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15];
        }
        return hex;
    };
    Keccak.prototype.arrayBuffer = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
        var bytes = this.outputBits >> 3;
        var buffer;
        if (extraBytes) buffer = new ArrayBuffer(outputBlocks + 1 << 2);
        else buffer = new ArrayBuffer(bytes);
        var array = new Uint32Array(buffer);
        while(j < outputBlocks){
            for(i = 0; i < blockCount && j < outputBlocks; ++i, ++j)array[j] = s[i];
            if (j % blockCount === 0) f(s);
        }
        if (extraBytes) {
            array[i] = s[i];
            buffer = buffer.slice(0, bytes);
        }
        return buffer;
    };
    Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;
    Keccak.prototype.digest = Keccak.prototype.array = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i = 0, j = 0;
        var array = [], offset, block;
        while(j < outputBlocks){
            for(i = 0; i < blockCount && j < outputBlocks; ++i, ++j){
                offset = j << 2;
                block = s[i];
                array[offset] = block & 255;
                array[offset + 1] = block >> 8 & 255;
                array[offset + 2] = block >> 16 & 255;
                array[offset + 3] = block >> 24 & 255;
            }
            if (j % blockCount === 0) f(s);
        }
        if (extraBytes) {
            offset = j << 2;
            block = s[i];
            array[offset] = block & 255;
            if (extraBytes > 1) array[offset + 1] = block >> 8 & 255;
            if (extraBytes > 2) array[offset + 2] = block >> 16 & 255;
        }
        return array;
    };
    function Kmac(bits, padding, outputBits) {
        Keccak.call(this, bits, padding, outputBits);
    }
    Kmac.prototype = new Keccak();
    Kmac.prototype.finalize = function() {
        this.encode(this.outputBits, true);
        return Keccak.prototype.finalize.call(this);
    };
    var f = function(s) {
        var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
        for(n = 0; n < 48; n += 2){
            c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
            c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
            c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
            c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
            c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
            c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
            c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
            c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
            c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
            c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
            h = c8 ^ (c2 << 1 | c3 >>> 31);
            l = c9 ^ (c3 << 1 | c2 >>> 31);
            s[0] ^= h;
            s[1] ^= l;
            s[10] ^= h;
            s[11] ^= l;
            s[20] ^= h;
            s[21] ^= l;
            s[30] ^= h;
            s[31] ^= l;
            s[40] ^= h;
            s[41] ^= l;
            h = c0 ^ (c4 << 1 | c5 >>> 31);
            l = c1 ^ (c5 << 1 | c4 >>> 31);
            s[2] ^= h;
            s[3] ^= l;
            s[12] ^= h;
            s[13] ^= l;
            s[22] ^= h;
            s[23] ^= l;
            s[32] ^= h;
            s[33] ^= l;
            s[42] ^= h;
            s[43] ^= l;
            h = c2 ^ (c6 << 1 | c7 >>> 31);
            l = c3 ^ (c7 << 1 | c6 >>> 31);
            s[4] ^= h;
            s[5] ^= l;
            s[14] ^= h;
            s[15] ^= l;
            s[24] ^= h;
            s[25] ^= l;
            s[34] ^= h;
            s[35] ^= l;
            s[44] ^= h;
            s[45] ^= l;
            h = c4 ^ (c8 << 1 | c9 >>> 31);
            l = c5 ^ (c9 << 1 | c8 >>> 31);
            s[6] ^= h;
            s[7] ^= l;
            s[16] ^= h;
            s[17] ^= l;
            s[26] ^= h;
            s[27] ^= l;
            s[36] ^= h;
            s[37] ^= l;
            s[46] ^= h;
            s[47] ^= l;
            h = c6 ^ (c0 << 1 | c1 >>> 31);
            l = c7 ^ (c1 << 1 | c0 >>> 31);
            s[8] ^= h;
            s[9] ^= l;
            s[18] ^= h;
            s[19] ^= l;
            s[28] ^= h;
            s[29] ^= l;
            s[38] ^= h;
            s[39] ^= l;
            s[48] ^= h;
            s[49] ^= l;
            b0 = s[0];
            b1 = s[1];
            b32 = s[11] << 4 | s[10] >>> 28;
            b33 = s[10] << 4 | s[11] >>> 28;
            b14 = s[20] << 3 | s[21] >>> 29;
            b15 = s[21] << 3 | s[20] >>> 29;
            b46 = s[31] << 9 | s[30] >>> 23;
            b47 = s[30] << 9 | s[31] >>> 23;
            b28 = s[40] << 18 | s[41] >>> 14;
            b29 = s[41] << 18 | s[40] >>> 14;
            b20 = s[2] << 1 | s[3] >>> 31;
            b21 = s[3] << 1 | s[2] >>> 31;
            b2 = s[13] << 12 | s[12] >>> 20;
            b3 = s[12] << 12 | s[13] >>> 20;
            b34 = s[22] << 10 | s[23] >>> 22;
            b35 = s[23] << 10 | s[22] >>> 22;
            b16 = s[33] << 13 | s[32] >>> 19;
            b17 = s[32] << 13 | s[33] >>> 19;
            b48 = s[42] << 2 | s[43] >>> 30;
            b49 = s[43] << 2 | s[42] >>> 30;
            b40 = s[5] << 30 | s[4] >>> 2;
            b41 = s[4] << 30 | s[5] >>> 2;
            b22 = s[14] << 6 | s[15] >>> 26;
            b23 = s[15] << 6 | s[14] >>> 26;
            b4 = s[25] << 11 | s[24] >>> 21;
            b5 = s[24] << 11 | s[25] >>> 21;
            b36 = s[34] << 15 | s[35] >>> 17;
            b37 = s[35] << 15 | s[34] >>> 17;
            b18 = s[45] << 29 | s[44] >>> 3;
            b19 = s[44] << 29 | s[45] >>> 3;
            b10 = s[6] << 28 | s[7] >>> 4;
            b11 = s[7] << 28 | s[6] >>> 4;
            b42 = s[17] << 23 | s[16] >>> 9;
            b43 = s[16] << 23 | s[17] >>> 9;
            b24 = s[26] << 25 | s[27] >>> 7;
            b25 = s[27] << 25 | s[26] >>> 7;
            b6 = s[36] << 21 | s[37] >>> 11;
            b7 = s[37] << 21 | s[36] >>> 11;
            b38 = s[47] << 24 | s[46] >>> 8;
            b39 = s[46] << 24 | s[47] >>> 8;
            b30 = s[8] << 27 | s[9] >>> 5;
            b31 = s[9] << 27 | s[8] >>> 5;
            b12 = s[18] << 20 | s[19] >>> 12;
            b13 = s[19] << 20 | s[18] >>> 12;
            b44 = s[29] << 7 | s[28] >>> 25;
            b45 = s[28] << 7 | s[29] >>> 25;
            b26 = s[38] << 8 | s[39] >>> 24;
            b27 = s[39] << 8 | s[38] >>> 24;
            b8 = s[48] << 14 | s[49] >>> 18;
            b9 = s[49] << 14 | s[48] >>> 18;
            s[0] = b0 ^ ~b2 & b4;
            s[1] = b1 ^ ~b3 & b5;
            s[10] = b10 ^ ~b12 & b14;
            s[11] = b11 ^ ~b13 & b15;
            s[20] = b20 ^ ~b22 & b24;
            s[21] = b21 ^ ~b23 & b25;
            s[30] = b30 ^ ~b32 & b34;
            s[31] = b31 ^ ~b33 & b35;
            s[40] = b40 ^ ~b42 & b44;
            s[41] = b41 ^ ~b43 & b45;
            s[2] = b2 ^ ~b4 & b6;
            s[3] = b3 ^ ~b5 & b7;
            s[12] = b12 ^ ~b14 & b16;
            s[13] = b13 ^ ~b15 & b17;
            s[22] = b22 ^ ~b24 & b26;
            s[23] = b23 ^ ~b25 & b27;
            s[32] = b32 ^ ~b34 & b36;
            s[33] = b33 ^ ~b35 & b37;
            s[42] = b42 ^ ~b44 & b46;
            s[43] = b43 ^ ~b45 & b47;
            s[4] = b4 ^ ~b6 & b8;
            s[5] = b5 ^ ~b7 & b9;
            s[14] = b14 ^ ~b16 & b18;
            s[15] = b15 ^ ~b17 & b19;
            s[24] = b24 ^ ~b26 & b28;
            s[25] = b25 ^ ~b27 & b29;
            s[34] = b34 ^ ~b36 & b38;
            s[35] = b35 ^ ~b37 & b39;
            s[44] = b44 ^ ~b46 & b48;
            s[45] = b45 ^ ~b47 & b49;
            s[6] = b6 ^ ~b8 & b0;
            s[7] = b7 ^ ~b9 & b1;
            s[16] = b16 ^ ~b18 & b10;
            s[17] = b17 ^ ~b19 & b11;
            s[26] = b26 ^ ~b28 & b20;
            s[27] = b27 ^ ~b29 & b21;
            s[36] = b36 ^ ~b38 & b30;
            s[37] = b37 ^ ~b39 & b31;
            s[46] = b46 ^ ~b48 & b40;
            s[47] = b47 ^ ~b49 & b41;
            s[8] = b8 ^ ~b0 & b2;
            s[9] = b9 ^ ~b1 & b3;
            s[18] = b18 ^ ~b10 & b12;
            s[19] = b19 ^ ~b11 & b13;
            s[28] = b28 ^ ~b20 & b22;
            s[29] = b29 ^ ~b21 & b23;
            s[38] = b38 ^ ~b30 & b32;
            s[39] = b39 ^ ~b31 & b33;
            s[48] = b48 ^ ~b40 & b42;
            s[49] = b49 ^ ~b41 & b43;
            s[0] ^= RC[n];
            s[1] ^= RC[n + 1];
        }
    };
    if (COMMON_JS) module.exports = methods;
    else {
        for(i1 = 0; i1 < methodNames.length; ++i1)root[methodNames[i1]] = methods[methodNames[i1]];
        if (AMD) define(function() {
            return methods;
        });
    }
})();

},{"process":"1WSHx"}],"aZ61Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sanitizeHex", ()=>sanitizeHex
);
parcelHelpers.export(exports, "addHexPrefix", ()=>addHexPrefix
);
parcelHelpers.export(exports, "removeHexPrefix", ()=>removeHexPrefix
);
parcelHelpers.export(exports, "removeHexLeadingZeros", ()=>removeHexLeadingZeros
);
parcelHelpers.export(exports, "payloadId", ()=>payloadId
);
parcelHelpers.export(exports, "uuid", ()=>uuid
);
parcelHelpers.export(exports, "logDeprecationWarning", ()=>logDeprecationWarning
);
parcelHelpers.export(exports, "getInfuraRpcUrl", ()=>getInfuraRpcUrl
);
parcelHelpers.export(exports, "getRpcUrl", ()=>getRpcUrl
);
var _encoding = require("@walletconnect/encoding");
var _jsonrpcUtils = require("@walletconnect/jsonrpc-utils");
var _constants = require("./constants");
function sanitizeHex(hex) {
    return _encoding.sanitizeHex(hex);
}
function addHexPrefix(hex) {
    return _encoding.addHexPrefix(hex);
}
function removeHexPrefix(hex) {
    return _encoding.removeHexPrefix(hex);
}
function removeHexLeadingZeros(hex) {
    return _encoding.removeHexLeadingZeros(_encoding.addHexPrefix(hex));
}
const payloadId = _jsonrpcUtils.payloadId;
function uuid() {
    const result = ((a, b)=>{
        for(b = a = ""; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-");
        return b;
    })();
    return result;
}
function logDeprecationWarning() {
    console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
}
function getInfuraRpcUrl(chainId, infuraId) {
    let rpcUrl;
    const network = _constants.infuraNetworks[chainId];
    if (network) rpcUrl = `https://${network}.infura.io/v3/${infuraId}`;
    return rpcUrl;
}
function getRpcUrl(chainId, rpc) {
    let rpcUrl;
    const infuraUrl = getInfuraRpcUrl(chainId, rpc.infuraId);
    if (rpc.custom && rpc.custom[chainId]) rpcUrl = rpc.custom[chainId];
    else if (infuraUrl) rpcUrl = infuraUrl;
    return rpcUrl;
}

},{"@walletconnect/encoding":"grCai","@walletconnect/jsonrpc-utils":"aWCl7","./constants":"2Phe1","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"aWCl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _error = require("./error");
parcelHelpers.exportAll(_error, exports);
var _env = require("./env");
parcelHelpers.exportAll(_env, exports);
var _format = require("./format");
parcelHelpers.exportAll(_format, exports);
var _routing = require("./routing");
parcelHelpers.exportAll(_routing, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _url = require("./url");
parcelHelpers.exportAll(_url, exports);
var _validators = require("./validators");
parcelHelpers.exportAll(_validators, exports);

},{"./constants":"aO3KX","./error":"dpnc7","./env":"3IOgd","./format":"94wUr","./routing":"6RgI5","./types":"5uVUC","./url":"6xWjd","./validators":"5EJI5","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"aO3KX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PARSE_ERROR", ()=>PARSE_ERROR
);
parcelHelpers.export(exports, "INVALID_REQUEST", ()=>INVALID_REQUEST
);
parcelHelpers.export(exports, "METHOD_NOT_FOUND", ()=>METHOD_NOT_FOUND
);
parcelHelpers.export(exports, "INVALID_PARAMS", ()=>INVALID_PARAMS
);
parcelHelpers.export(exports, "INTERNAL_ERROR", ()=>INTERNAL_ERROR
);
parcelHelpers.export(exports, "SERVER_ERROR", ()=>SERVER_ERROR
);
parcelHelpers.export(exports, "RESERVED_ERROR_CODES", ()=>RESERVED_ERROR_CODES
);
parcelHelpers.export(exports, "SERVER_ERROR_CODE_RANGE", ()=>SERVER_ERROR_CODE_RANGE
);
parcelHelpers.export(exports, "STANDARD_ERROR_MAP", ()=>STANDARD_ERROR_MAP
);
const PARSE_ERROR = "PARSE_ERROR";
const INVALID_REQUEST = "INVALID_REQUEST";
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
const INVALID_PARAMS = "INVALID_PARAMS";
const INTERNAL_ERROR = "INTERNAL_ERROR";
const SERVER_ERROR = "SERVER_ERROR";
const RESERVED_ERROR_CODES = [
    -32700,
    -32600,
    -32601,
    -32602,
    -32603
];
const SERVER_ERROR_CODE_RANGE = [
    -32000,
    -32099
];
const STANDARD_ERROR_MAP = {
    [PARSE_ERROR]: {
        code: -32700,
        message: "Parse error"
    },
    [INVALID_REQUEST]: {
        code: -32600,
        message: "Invalid Request"
    },
    [METHOD_NOT_FOUND]: {
        code: -32601,
        message: "Method not found"
    },
    [INVALID_PARAMS]: {
        code: -32602,
        message: "Invalid params"
    },
    [INTERNAL_ERROR]: {
        code: -32603,
        message: "Internal error"
    },
    [SERVER_ERROR]: {
        code: -32000,
        message: "Server error"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"dpnc7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServerErrorCode", ()=>isServerErrorCode
);
parcelHelpers.export(exports, "isReservedErrorCode", ()=>isReservedErrorCode
);
parcelHelpers.export(exports, "isValidErrorCode", ()=>isValidErrorCode
);
parcelHelpers.export(exports, "getError", ()=>getError
);
parcelHelpers.export(exports, "getErrorByCode", ()=>getErrorByCode
);
parcelHelpers.export(exports, "validateJsonRpcError", ()=>validateJsonRpcError
);
parcelHelpers.export(exports, "parseConnectionError", ()=>parseConnectionError
);
var _constants = require("./constants");
function isServerErrorCode(code) {
    return code <= _constants.SERVER_ERROR_CODE_RANGE[0] && code >= _constants.SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code) {
    return _constants.RESERVED_ERROR_CODES.includes(code);
}
function isValidErrorCode(code) {
    return typeof code === "number";
}
function getError(type) {
    if (!Object.keys(_constants.STANDARD_ERROR_MAP).includes(type)) return _constants.STANDARD_ERROR_MAP[_constants.INTERNAL_ERROR];
    return _constants.STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code) {
    const match = Object.values(_constants.STANDARD_ERROR_MAP).find((e)=>e.code === code
    );
    if (!match) return _constants.STANDARD_ERROR_MAP[_constants.INTERNAL_ERROR];
    return match;
}
function validateJsonRpcError(response) {
    if (typeof response.error.code === "undefined") return {
        valid: false,
        error: "Missing code for JSON-RPC error"
    };
    if (typeof response.error.message === "undefined") return {
        valid: false,
        error: "Missing message for JSON-RPC error"
    };
    if (!isValidErrorCode(response.error.code)) return {
        valid: false,
        error: `Invalid error code type for JSON-RPC: ${response.error.code}`
    };
    if (isReservedErrorCode(response.error.code)) {
        const error = getErrorByCode(response.error.code);
        if (error.message !== _constants.STANDARD_ERROR_MAP[_constants.INTERNAL_ERROR].message && response.error.message === error.message) return {
            valid: false,
            error: `Invalid error code message for JSON-RPC: ${response.error.code}`
        };
    }
    return {
        valid: true
    };
}
function parseConnectionError(e, url, type) {
    return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e;
}

},{"./constants":"aO3KX","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"3IOgd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNodeJs", ()=>isNodeJs
);
var _environment = require("@walletconnect/environment");
parcelHelpers.exportAll(_environment, exports);
const isNodeJs = _environment.isNode;

},{"@walletconnect/environment":"h6DZX","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"h6DZX":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./crypto"), exports);
__exportStar(require("./env"), exports);

},{"./crypto":"2LceE","./env":"j0oaH"}],"2LceE":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
function getBrowerCrypto() {
    return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {
    };
}
exports.getBrowerCrypto = getBrowerCrypto;
function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
}
exports.getSubtleCrypto = getSubtleCrypto;
function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
}
exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;

},{}],"j0oaH":[function(require,module,exports) {
var process = require("process");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
function isReactNative() {
    return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
}
exports.isReactNative = isReactNative;
function isNode() {
    return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
}
exports.isNode = isNode;
function isBrowser() {
    return !isReactNative() && !isNode();
}
exports.isBrowser = isBrowser;

},{"process":"1WSHx"}],"94wUr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "payloadId", ()=>payloadId
);
parcelHelpers.export(exports, "formatJsonRpcRequest", ()=>formatJsonRpcRequest
);
parcelHelpers.export(exports, "formatJsonRpcResult", ()=>formatJsonRpcResult
);
parcelHelpers.export(exports, "formatJsonRpcError", ()=>formatJsonRpcError
);
parcelHelpers.export(exports, "formatErrorMessage", ()=>formatErrorMessage
);
var _error = require("./error");
var _constants = require("./constants");
function payloadId() {
    const date = Date.now() * Math.pow(10, 3);
    const extra = Math.floor(Math.random() * Math.pow(10, 3));
    return date + extra;
}
function formatJsonRpcRequest(method, params, id) {
    return {
        id: id || payloadId(),
        jsonrpc: "2.0",
        method,
        params
    };
}
function formatJsonRpcResult(id, result) {
    return {
        id,
        jsonrpc: "2.0",
        result
    };
}
function formatJsonRpcError(id, error) {
    return {
        id,
        jsonrpc: "2.0",
        error: formatErrorMessage(error)
    };
}
function formatErrorMessage(error) {
    if (typeof error === "undefined") return _error.getError(_constants.INTERNAL_ERROR);
    if (typeof error === "string") error = Object.assign(Object.assign({
    }, _error.getError(_constants.SERVER_ERROR)), {
        message: error
    });
    if (_error.isReservedErrorCode(error.code)) error = _error.getErrorByCode(error.code);
    return error;
}

},{"./error":"dpnc7","./constants":"aO3KX","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"6RgI5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isValidRoute", ()=>isValidRoute
);
parcelHelpers.export(exports, "isValidDefaultRoute", ()=>isValidDefaultRoute
);
parcelHelpers.export(exports, "isValidWildcardRoute", ()=>isValidWildcardRoute
);
parcelHelpers.export(exports, "isValidLeadingWildcardRoute", ()=>isValidLeadingWildcardRoute
);
parcelHelpers.export(exports, "isValidTrailingWildcardRoute", ()=>isValidTrailingWildcardRoute
);
function isValidRoute(route) {
    if (route.includes("*")) return isValidWildcardRoute(route);
    if (/\W/g.test(route)) return false;
    return true;
}
function isValidDefaultRoute(route) {
    return route === "*";
}
function isValidWildcardRoute(route) {
    if (isValidDefaultRoute(route)) return true;
    if (!route.includes("*")) return false;
    if (route.split("*").length !== 2) return false;
    if (route.split("*").filter((x)=>x.trim() === ""
    ).length !== 1) return false;
    return true;
}
function isValidLeadingWildcardRoute(route) {
    return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
function isValidTrailingWildcardRoute(route) {
    return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"5uVUC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsonrpcTypes = require("@walletconnect/jsonrpc-types");
parcelHelpers.exportAll(_jsonrpcTypes, exports);

},{"@walletconnect/jsonrpc-types":"FPchv","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"FPchv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsonrpc = require("./jsonrpc");
parcelHelpers.exportAll(_jsonrpc, exports);
var _misc = require("./misc");
parcelHelpers.exportAll(_misc, exports);
var _provider = require("./provider");
parcelHelpers.exportAll(_provider, exports);
var _validator = require("./validator");
parcelHelpers.exportAll(_validator, exports);

},{"./jsonrpc":"eDwBP","./misc":"aMiTY","./provider":"k0U1a","./validator":"75Rv3","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"eDwBP":[function(require,module,exports) {

},{}],"aMiTY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IEvents", ()=>IEvents
);
class IEvents {
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"k0U1a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IJsonRpcConnection", ()=>IJsonRpcConnection
);
parcelHelpers.export(exports, "IBaseJsonRpcProvider", ()=>IBaseJsonRpcProvider
);
parcelHelpers.export(exports, "IJsonRpcProvider", ()=>IJsonRpcProvider
);
var _misc = require("./misc");
class IJsonRpcConnection extends _misc.IEvents {
    constructor(opts){
        super();
    }
}
class IBaseJsonRpcProvider extends _misc.IEvents {
    constructor(){
        super();
    }
}
class IJsonRpcProvider extends IBaseJsonRpcProvider {
    constructor(connection){
        super();
    }
}

},{"./misc":"aMiTY","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"75Rv3":[function(require,module,exports) {

},{}],"6xWjd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isHttpUrl", ()=>isHttpUrl
);
parcelHelpers.export(exports, "isWsUrl", ()=>isWsUrl
);
parcelHelpers.export(exports, "isLocalhostUrl", ()=>isLocalhostUrl
);
const HTTP_REGEX = "^https?:";
const WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
    const matches = url.match(new RegExp(/^\w+:/, "gi"));
    if (!matches || !matches.length) return;
    return matches[0];
}
function matchRegexProtocol(url, regex) {
    const protocol = getUrlProtocol(url);
    if (typeof protocol === "undefined") return false;
    return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
    return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
    return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"5EJI5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isJsonRpcPayload", ()=>isJsonRpcPayload
);
parcelHelpers.export(exports, "isJsonRpcRequest", ()=>isJsonRpcRequest
);
parcelHelpers.export(exports, "isJsonRpcResponse", ()=>isJsonRpcResponse
);
parcelHelpers.export(exports, "isJsonRpcResult", ()=>isJsonRpcResult
);
parcelHelpers.export(exports, "isJsonRpcError", ()=>isJsonRpcError
);
parcelHelpers.export(exports, "isJsonRpcValidationInvalid", ()=>isJsonRpcValidationInvalid
);
function isJsonRpcPayload(payload) {
    return "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
    return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
    return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
    return "result" in payload;
}
function isJsonRpcError(payload) {
    return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
    return "error" in validation && validation.valid === false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"5SccW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEmptyString", ()=>isEmptyString
);
parcelHelpers.export(exports, "isEmptyArray", ()=>isEmptyArray
);
parcelHelpers.export(exports, "isBuffer", ()=>isBuffer
);
parcelHelpers.export(exports, "isTypedArray", ()=>isTypedArray
);
parcelHelpers.export(exports, "isArrayBuffer", ()=>isArrayBuffer
);
parcelHelpers.export(exports, "getType", ()=>getType
);
parcelHelpers.export(exports, "getEncoding", ()=>getEncoding
);
parcelHelpers.export(exports, "isHexString", ()=>isHexString
);
parcelHelpers.export(exports, "isJsonRpcSubscription", ()=>isJsonRpcSubscription
);
parcelHelpers.export(exports, "isJsonRpcRequest", ()=>isJsonRpcRequest
);
parcelHelpers.export(exports, "isJsonRpcResponseSuccess", ()=>isJsonRpcResponseSuccess
);
parcelHelpers.export(exports, "isJsonRpcResponseError", ()=>isJsonRpcResponseError
);
parcelHelpers.export(exports, "isInternalEvent", ()=>isInternalEvent
);
parcelHelpers.export(exports, "isReservedEvent", ()=>isReservedEvent
);
parcelHelpers.export(exports, "isSilentPayload", ()=>isSilentPayload
);
var _encoding = require("@walletconnect/encoding");
var _constants = require("./constants");
function isEmptyString(value) {
    return value === "" || typeof value === "string" && value.trim() === "";
}
function isEmptyArray(array) {
    return !(array && array.length);
}
function isBuffer(val) {
    return _encoding.isBuffer(val);
}
function isTypedArray(val) {
    return _encoding.isTypedArray(val);
}
function isArrayBuffer(val) {
    return _encoding.isArrayBuffer(val);
}
function getType(val) {
    return _encoding.getType(val);
}
function getEncoding(val) {
    return _encoding.getEncoding(val);
}
function isHexString(value, length) {
    return _encoding.isHexString(value, length);
}
function isJsonRpcSubscription(object) {
    return typeof object.params === "object";
}
function isJsonRpcRequest(object) {
    return typeof object.method !== "undefined";
}
function isJsonRpcResponseSuccess(object) {
    return typeof object.result !== "undefined";
}
function isJsonRpcResponseError(object) {
    return typeof object.error !== "undefined";
}
function isInternalEvent(object) {
    return typeof object.event !== "undefined";
}
function isReservedEvent(event) {
    return _constants.reservedEvents.includes(event) || event.startsWith("wc_");
}
function isSilentPayload(request) {
    if (request.method.startsWith("wc_")) return true;
    if (_constants.signingMethods.includes(request.method)) return false;
    return true;
}

},{"@walletconnect/encoding":"grCai","./constants":"2Phe1","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"he6PS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "promisify", ()=>promisify
);
parcelHelpers.export(exports, "formatRpcError", ()=>formatRpcError
);
function promisify(originalFn, thisArg) {
    const promisifiedFunction = async (...callArgs)=>{
        return new Promise((resolve, reject)=>{
            const callback = (err, data)=>{
                if (err === null || typeof err === "undefined") reject(err);
                resolve(data);
            };
            originalFn.apply(thisArg, [
                ...callArgs,
                callback
            ]);
        });
    };
    return promisifiedFunction;
}
function formatRpcError(error) {
    const message = error.message || "Failed or Rejected Request";
    let code = -32000;
    if (error && !error.code) switch(message){
        case "Parse error":
            code = -32700;
            break;
        case "Invalid request":
            code = -32600;
            break;
        case "Method not found":
            code = -32601;
            break;
        case "Invalid params":
            code = -32602;
            break;
        case "Internal error":
            code = -32603;
            break;
        default:
            code = -32000;
            break;
    }
    const result = {
        code,
        message
    };
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"lW0p6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isWalletConnectSession", ()=>isWalletConnectSession
);
parcelHelpers.export(exports, "parseWalletConnectUri", ()=>parseWalletConnectUri
);
var _url = require("./url");
function isWalletConnectSession(object) {
    return typeof object.bridge !== "undefined";
}
function parseWalletConnectUri(str) {
    const pathStart = str.indexOf(":");
    const pathEnd = str.indexOf("?") !== -1 ? str.indexOf("?") : undefined;
    const protocol = str.substring(0, pathStart);
    const path1 = str.substring(pathStart + 1, pathEnd);
    function parseRequiredParams(path) {
        const separator = "@";
        const values = path.split(separator);
        const requiredParams = {
            handshakeTopic: values[0],
            version: parseInt(values[1], 10)
        };
        return requiredParams;
    }
    const requiredParams1 = parseRequiredParams(path1);
    const queryString1 = typeof pathEnd !== "undefined" ? str.substr(pathEnd) : "";
    function parseQueryParams(queryString) {
        const result = _url.parseQueryString(queryString);
        const parameters = {
            key: result.key || "",
            bridge: result.bridge || ""
        };
        return parameters;
    }
    const queryParams = parseQueryParams(queryString1);
    const result1 = Object.assign(Object.assign({
        protocol
    }, requiredParams1), queryParams);
    return result1;
}

},{"./url":"dTvt8","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"dTvt8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getQueryString", ()=>getQueryString
);
parcelHelpers.export(exports, "appendToQueryString", ()=>appendToQueryString
);
parcelHelpers.export(exports, "parseQueryString", ()=>parseQueryString
);
parcelHelpers.export(exports, "formatQueryString", ()=>formatQueryString
);
var _queryString = require("query-string");
function getQueryString(url) {
    const pathEnd = url.indexOf("?") !== -1 ? url.indexOf("?") : undefined;
    const queryString = typeof pathEnd !== "undefined" ? url.substr(pathEnd) : "";
    return queryString;
}
function appendToQueryString(queryString, newQueryParams) {
    let queryParams = parseQueryString(queryString);
    queryParams = Object.assign(Object.assign({
    }, queryParams), newQueryParams);
    queryString = formatQueryString(queryParams);
    return queryString;
}
function parseQueryString(queryString) {
    return _queryString.parse(queryString);
}
function formatQueryString(queryParams) {
    return _queryString.stringify(queryParams);
}

},{"query-string":"OeahE","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"OeahE":[function(require,module,exports) {
'use strict';
const strictUriEncode = require('strict-uri-encode');
const decodeComponent = require('decode-uri-component');
const splitOnFirst = require('split-on-first');
const isNullOrUndefined = (value)=>value === null || value === undefined
;
function encoderForArrayFormat(options) {
    switch(options.arrayFormat){
        case 'index':
            return (key)=>(result, value)=>{
                    const index = result.length;
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') return result;
                    if (value === null) return [
                        ...result,
                        [
                            encode(key, options),
                            '[',
                            index,
                            ']'
                        ].join('')
                    ];
                    return [
                        ...result,
                        [
                            encode(key, options),
                            '[',
                            encode(index, options),
                            ']=',
                            encode(value, options)
                        ].join('')
                    ];
                }
            ;
        case 'bracket':
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') return result;
                    if (value === null) return [
                        ...result,
                        [
                            encode(key, options),
                            '[]'
                        ].join('')
                    ];
                    return [
                        ...result,
                        [
                            encode(key, options),
                            '[]=',
                            encode(value, options)
                        ].join('')
                    ];
                }
            ;
        case 'comma':
        case 'separator':
            return (key)=>(result, value)=>{
                    if (value === null || value === undefined || value.length === 0) return result;
                    if (result.length === 0) return [
                        [
                            encode(key, options),
                            '=',
                            encode(value, options)
                        ].join('')
                    ];
                    return [
                        [
                            result,
                            encode(value, options)
                        ].join(options.arrayFormatSeparator)
                    ];
                }
            ;
        default:
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') return result;
                    if (value === null) return [
                        ...result,
                        encode(key, options)
                    ];
                    return [
                        ...result,
                        [
                            encode(key, options),
                            '=',
                            encode(value, options)
                        ].join('')
                    ];
                }
            ;
    }
}
function parserForArrayFormat(options) {
    let result;
    switch(options.arrayFormat){
        case 'index':
            return (key, value, accumulator)=>{
                result = /\[(\d*)\]$/.exec(key);
                key = key.replace(/\[\d*\]$/, '');
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) accumulator[key] = {
                };
                accumulator[key][result[1]] = value;
            };
        case 'bracket':
            return (key, value, accumulator)=>{
                result = /(\[\])$/.exec(key);
                key = key.replace(/\[\]$/, '');
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case 'comma':
        case 'separator':
            return (key, value, accumulator)=>{
                const isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
                const newValue = isArray ? value.split(options.arrayFormatSeparator).map((item)=>decode(item, options)
                ) : value === null ? value : decode(value, options);
                accumulator[key] = newValue;
            };
        default:
            return (key, value, accumulator)=>{
                if (accumulator[key] === undefined) {
                    accumulator[key] = value;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
    }
}
function validateArrayFormatSeparator(value) {
    if (typeof value !== 'string' || value.length !== 1) throw new TypeError('arrayFormatSeparator must be single character string');
}
function encode(value, options) {
    if (options.encode) return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
    return value;
}
function decode(value, options) {
    if (options.decode) return decodeComponent(value);
    return value;
}
function keysSorter(input) {
    if (Array.isArray(input)) return input.sort();
    if (typeof input === 'object') return keysSorter(Object.keys(input)).sort((a, b)=>Number(a) - Number(b)
    ).map((key)=>input[key]
    );
    return input;
}
function removeHash(input) {
    const hashStart = input.indexOf('#');
    if (hashStart !== -1) input = input.slice(0, hashStart);
    return input;
}
function getHash(url) {
    let hash = '';
    const hashStart = url.indexOf('#');
    if (hashStart !== -1) hash = url.slice(hashStart);
    return hash;
}
function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf('?');
    if (queryStart === -1) return '';
    return input.slice(queryStart + 1);
}
function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') value = Number(value);
    else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) value = value.toLowerCase() === 'true';
    return value;
}
function parse(input, options) {
    options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: false,
        parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    // Create an object with no prototype
    const ret = Object.create(null);
    if (typeof input !== 'string') return ret;
    input = input.trim().replace(/^[?#&]/, '');
    if (!input) return ret;
    for (const param of input.split('&')){
        let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');
        // Missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        value = value === undefined ? null : [
            'comma',
            'separator'
        ].includes(options.arrayFormat) ? value : decode(value, options);
        formatter(decode(key, options), value, ret);
    }
    for (const key of Object.keys(ret)){
        const value = ret[key];
        if (typeof value === 'object' && value !== null) for (const k of Object.keys(value))value[k] = parseValue(value[k], options);
        else ret[key] = parseValue(value, options);
    }
    if (options.sort === false) return ret;
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key)=>{
        const value = ret[key];
        if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) // Sort object keys, not values
        result[key] = keysSorter(value);
        else result[key] = value;
        return result;
    }, Object.create(null));
}
exports.extract = extract;
exports.parse = parse;
exports.stringify = (object, options)=>{
    if (!object) return '';
    options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: 'none',
        arrayFormatSeparator: ','
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key)=>options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === ''
    ;
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {
    };
    for (const key1 of Object.keys(object))if (!shouldFilter(key1)) objectCopy[key1] = object[key1];
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) keys.sort(options.sort);
    return keys.map((key)=>{
        const value = object[key];
        if (value === undefined) return '';
        if (value === null) return encode(key, options);
        if (Array.isArray(value)) return value.reduce(formatter(key), []).join('&');
        return encode(key, options) + '=' + encode(value, options);
    }).filter((x)=>x.length > 0
    ).join('&');
};
exports.parseUrl = (input, options)=>{
    options = Object.assign({
        decode: true
    }, options);
    const [url, hash] = splitOnFirst(input, '#');
    return Object.assign({
        url: url.split('?')[0] || '',
        query: parse(extract(input), options)
    }, options && options.parseFragmentIdentifier && hash ? {
        fragmentIdentifier: decode(hash, options)
    } : {
    });
};
exports.stringifyUrl = (input, options)=>{
    options = Object.assign({
        encode: true,
        strict: true
    }, options);
    const url = removeHash(input.url).split('?')[0] || '';
    const queryFromUrl = exports.extract(input.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, {
        sort: false
    });
    const query = Object.assign(parsedQueryFromUrl, input.query);
    let queryString = exports.stringify(query, options);
    if (queryString) queryString = `?${queryString}`;
    let hash = getHash(input.url);
    if (input.fragmentIdentifier) hash = `#${encode(input.fragmentIdentifier, options)}`;
    return `${url}${queryString}${hash}`;
};

},{"strict-uri-encode":"2Eugn","decode-uri-component":"iNCUR","split-on-first":"jlVIH"}],"2Eugn":[function(require,module,exports) {
'use strict';
module.exports = (str)=>encodeURIComponent(str).replace(/[!'()*]/g, (x)=>`%${x.charCodeAt(0).toString(16).toUpperCase()}`
    )
;

},{}],"iNCUR":[function(require,module,exports) {
'use strict';
var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');
function decodeComponents(components, split) {
    try {
        // Try to decode the entire string first
        return decodeURIComponent(components.join(''));
    } catch (err) {
    // Do nothing
    }
    if (components.length === 1) return components;
    split = split || 1;
    // Split the array in 2 parts
    var left = components.slice(0, split);
    var right = components.slice(split);
    return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
    try {
        return decodeURIComponent(input);
    } catch (err) {
        var tokens = input.match(singleMatcher);
        for(var i = 1; i < tokens.length; i++){
            input = decodeComponents(tokens, i).join('');
            tokens = input.match(singleMatcher);
        }
        return input;
    }
}
function customDecodeURIComponent(input) {
    // Keep track of all the replacements and prefill the map with the `BOM`
    var replaceMap = {
        '%FE%FF': '\uFFFD\uFFFD',
        '%FF%FE': '\uFFFD\uFFFD'
    };
    var match = multiMatcher.exec(input);
    while(match){
        try {
            // Decode as big chunks as possible
            replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch (err) {
            var result = decode(match[0]);
            if (result !== match[0]) replaceMap[match[0]] = result;
        }
        match = multiMatcher.exec(input);
    }
    // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
    replaceMap['%C2'] = '\uFFFD';
    var entries = Object.keys(replaceMap);
    for(var i = 0; i < entries.length; i++){
        // Replace all decoded components
        var key = entries[i];
        input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
    }
    return input;
}
module.exports = function(encodedURI) {
    if (typeof encodedURI !== 'string') throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
    try {
        encodedURI = encodedURI.replace(/\+/g, ' ');
        // Try the built in decoder first
        return decodeURIComponent(encodedURI);
    } catch (err) {
        // Fallback to a more advanced decoder
        return customDecodeURIComponent(encodedURI);
    }
};

},{}],"jlVIH":[function(require,module,exports) {
'use strict';
module.exports = (string, separator)=>{
    if (!(typeof string === 'string' && typeof separator === 'string')) throw new TypeError('Expected the arguments to be of type `string`');
    if (separator === '') return [
        string
    ];
    const separatorIndex = string.indexOf(separator);
    if (separatorIndex === -1) return [
        string
    ];
    return [
        string.slice(0, separatorIndex),
        string.slice(separatorIndex + separator.length)
    ];
};

},{}],"aznR2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("@walletconnect/utils");
var _network = require("./network");
var _networkDefault = parcelHelpers.interopDefault(_network);
var global = arguments[3];
const WS = typeof global.WebSocket !== "undefined" ? global.WebSocket : require("ws");
class SocketTransport {
    constructor(opts){
        this.opts = opts;
        this._queue = [];
        this._events = [];
        this._subscriptions = [];
        this._protocol = opts.protocol;
        this._version = opts.version;
        this._url = "";
        this._netMonitor = null;
        this._socket = null;
        this._nextSocket = null;
        this._subscriptions = opts.subscriptions || [];
        this._netMonitor = opts.netMonitor || new _networkDefault.default();
        if (!opts.url || typeof opts.url !== "string") throw new Error("Missing or invalid WebSocket url");
        this._url = opts.url;
        this._netMonitor.on("online", ()=>this._socketCreate()
        );
    }
    set readyState(value) {
    }
    get readyState() {
        return this._socket ? this._socket.readyState : -1;
    }
    set connecting(value1) {
    }
    get connecting() {
        return this.readyState === 0;
    }
    set connected(value2) {
    }
    get connected() {
        return this.readyState === 1;
    }
    set closing(value3) {
    }
    get closing() {
        return this.readyState === 2;
    }
    set closed(value4) {
    }
    get closed() {
        return this.readyState === 3;
    }
    open() {
        this._socketCreate();
    }
    close() {
        this._socketClose();
    }
    send(message, topic2, silent) {
        if (!topic2 || typeof topic2 !== "string") throw new Error("Missing or invalid topic field");
        this._socketSend({
            topic: topic2,
            type: "pub",
            payload: message,
            silent: !!silent
        });
    }
    subscribe(topic1) {
        this._socketSend({
            topic: topic1,
            type: "sub",
            payload: "",
            silent: true
        });
    }
    on(event1, callback) {
        this._events.push({
            event: event1,
            callback
        });
    }
    _socketCreate() {
        if (this._nextSocket) return;
        const url = getWebSocketUrl(this._url, this._protocol, this._version);
        this._nextSocket = new WS(url);
        if (!this._nextSocket) throw new Error("Failed to create socket");
        this._nextSocket.onmessage = (event)=>this._socketReceive(event)
        ;
        this._nextSocket.onopen = ()=>this._socketOpen()
        ;
        this._nextSocket.onerror = (event)=>this._socketError(event)
        ;
        this._nextSocket.onclose = ()=>{
            setTimeout(()=>{
                this._nextSocket = null;
                this._socketCreate();
            }, 1000);
        };
    }
    _socketOpen() {
        this._socketClose();
        this._socket = this._nextSocket;
        this._nextSocket = null;
        this._queueSubscriptions();
        this._pushQueue();
    }
    _socketClose() {
        if (this._socket) {
            this._socket.onclose = ()=>{
            };
            this._socket.close();
        }
    }
    _socketSend(socketMessage2) {
        const message = JSON.stringify(socketMessage2);
        if (this._socket && this._socket.readyState === 1) this._socket.send(message);
        else {
            this._setToQueue(socketMessage2);
            this._socketCreate();
        }
    }
    async _socketReceive(event2) {
        let socketMessage;
        try {
            socketMessage = JSON.parse(event2.data);
        } catch (error) {
            return;
        }
        this._socketSend({
            topic: socketMessage.topic,
            type: "ack",
            payload: "",
            silent: true
        });
        if (this._socket && this._socket.readyState === 1) {
            const events = this._events.filter((event)=>event.event === "message"
            );
            if (events && events.length) events.forEach((event)=>event.callback(socketMessage)
            );
        }
    }
    _socketError(e) {
        const events = this._events.filter((event)=>event.event === "error"
        );
        if (events && events.length) events.forEach((event)=>event.callback(e)
        );
    }
    _queueSubscriptions() {
        const subscriptions = this._subscriptions;
        subscriptions.forEach((topic)=>this._queue.push({
                topic: topic,
                type: "sub",
                payload: "",
                silent: true
            })
        );
        this._subscriptions = this.opts.subscriptions || [];
    }
    _setToQueue(socketMessage1) {
        this._queue.push(socketMessage1);
    }
    _pushQueue() {
        const queue = this._queue;
        queue.forEach((socketMessage)=>this._socketSend(socketMessage)
        );
        this._queue = [];
    }
}
function getWebSocketUrl(_url, protocol, version) {
    var _a, _b;
    const url = _url.startsWith("https") ? _url.replace("https", "wss") : _url.startsWith("http") ? _url.replace("http", "ws") : _url;
    const splitUrl = url.split("?");
    const params = _utils.isBrowser() ? {
        protocol,
        version,
        env: "browser",
        host: ((_a = _utils.getLocation()) === null || _a === void 0 ? void 0 : _a.host) || ""
    } : {
        protocol,
        version,
        env: ((_b = _utils.detectEnv()) === null || _b === void 0 ? void 0 : _b.name) || ""
    };
    const queryString = _utils.appendToQueryString(_utils.getQueryString(splitUrl[1] || ""), params);
    return splitUrl[0] + "?" + queryString;
}
exports.default = SocketTransport;

},{"@walletconnect/utils":"fMxrC","./network":"dXRJw","ws":"k69Sg","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"dXRJw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NetworkMonitor {
    constructor(){
        this._eventEmitters = [];
        if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
            window.addEventListener("online", ()=>this.trigger("online")
            );
            window.addEventListener("offline", ()=>this.trigger("offline")
            );
        }
    }
    on(event, callback) {
        this._eventEmitters.push({
            event,
            callback
        });
    }
    trigger(event1) {
        let eventEmitters = [];
        if (event1) eventEmitters = this._eventEmitters.filter((eventEmitter)=>eventEmitter.event === event1
        );
        eventEmitters.forEach((eventEmitter)=>{
            eventEmitter.callback();
        });
    }
}
exports.default = NetworkMonitor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"k69Sg":[function(require,module,exports) {
'use strict';
module.exports = function() {
    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
};

},{}],"hluLe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ERROR_SESSION_CONNECTED", ()=>ERROR_SESSION_CONNECTED
);
parcelHelpers.export(exports, "ERROR_SESSION_DISCONNECTED", ()=>ERROR_SESSION_DISCONNECTED
);
parcelHelpers.export(exports, "ERROR_SESSION_REJECTED", ()=>ERROR_SESSION_REJECTED
);
parcelHelpers.export(exports, "ERROR_MISSING_JSON_RPC", ()=>ERROR_MISSING_JSON_RPC
);
parcelHelpers.export(exports, "ERROR_MISSING_RESULT", ()=>ERROR_MISSING_RESULT
);
parcelHelpers.export(exports, "ERROR_MISSING_ERROR", ()=>ERROR_MISSING_ERROR
);
parcelHelpers.export(exports, "ERROR_MISSING_METHOD", ()=>ERROR_MISSING_METHOD
);
parcelHelpers.export(exports, "ERROR_MISSING_ID", ()=>ERROR_MISSING_ID
);
parcelHelpers.export(exports, "ERROR_MISSING_REQUIRED", ()=>ERROR_MISSING_REQUIRED
);
parcelHelpers.export(exports, "ERROR_INVALID_RESPONSE", ()=>ERROR_INVALID_RESPONSE
);
parcelHelpers.export(exports, "ERROR_INVALID_URI", ()=>ERROR_INVALID_URI
);
parcelHelpers.export(exports, "ERROR_QRCODE_MODAL_NOT_PROVIDED", ()=>ERROR_QRCODE_MODAL_NOT_PROVIDED
);
parcelHelpers.export(exports, "ERROR_QRCODE_MODAL_USER_CLOSED", ()=>ERROR_QRCODE_MODAL_USER_CLOSED
);
const ERROR_SESSION_CONNECTED = "Session currently connected";
const ERROR_SESSION_DISCONNECTED = "Session currently disconnected";
const ERROR_SESSION_REJECTED = "Session Rejected";
const ERROR_MISSING_JSON_RPC = "Missing JSON RPC response";
const ERROR_MISSING_RESULT = `JSON-RPC success response must include "result" field`;
const ERROR_MISSING_ERROR = `JSON-RPC error response must include "error" field`;
const ERROR_MISSING_METHOD = `JSON RPC request must have valid "method" value`;
const ERROR_MISSING_ID = `JSON RPC request must have valid "id" value`;
const ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session";
const ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid";
const ERROR_INVALID_URI = "URI format is invalid";
const ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided";
const ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"9pPrk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("@walletconnect/utils");
class EventManager {
    constructor(){
        this._eventEmitters = [];
    }
    subscribe(eventEmitter1) {
        this._eventEmitters.push(eventEmitter1);
    }
    unsubscribe(event) {
        this._eventEmitters = this._eventEmitters.filter((x)=>x.event !== event
        );
    }
    trigger(payload) {
        let eventEmitters = [];
        let event;
        if (_utils.isJsonRpcRequest(payload)) event = payload.method;
        else if (_utils.isJsonRpcResponseSuccess(payload) || _utils.isJsonRpcResponseError(payload)) event = `response:${payload.id}`;
        else if (_utils.isInternalEvent(payload)) event = payload.event;
        else event = "";
        if (event) eventEmitters = this._eventEmitters.filter((eventEmitter)=>eventEmitter.event === event
        );
        if ((!eventEmitters || !eventEmitters.length) && !_utils.isReservedEvent(event) && !_utils.isInternalEvent(event)) eventEmitters = this._eventEmitters.filter((eventEmitter)=>eventEmitter.event === "call_request"
        );
        eventEmitters.forEach((eventEmitter)=>{
            if (_utils.isJsonRpcResponseError(payload)) {
                const error = new Error(payload.error.message);
                eventEmitter.callback(error, null);
            } else eventEmitter.callback(null, payload);
        });
    }
}
exports.default = EventManager;

},{"@walletconnect/utils":"fMxrC","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"jZgdg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("@walletconnect/utils");
class SessionStorage {
    constructor(storageId = "walletconnect"){
        this.storageId = storageId;
    }
    getSession() {
        let session = null;
        const json = _utils.getLocal(this.storageId);
        if (json && _utils.isWalletConnectSession(json)) session = json;
        return session;
    }
    setSession(session) {
        _utils.setLocal(this.storageId, session);
        return session;
    }
    removeSession() {
        _utils.removeLocal(this.storageId);
    }
}
exports.default = SessionStorage;

},{"@walletconnect/utils":"fMxrC","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"4RlPV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extractHostname", ()=>extractHostname
);
parcelHelpers.export(exports, "extractRootDomain", ()=>extractRootDomain
);
parcelHelpers.export(exports, "randomBridgeIndex", ()=>randomBridgeIndex
);
parcelHelpers.export(exports, "selectRandomBridgeUrl", ()=>selectRandomBridgeUrl
);
parcelHelpers.export(exports, "shouldSelectRandomly", ()=>shouldSelectRandomly
);
parcelHelpers.export(exports, "getBridgeUrl", ()=>getBridgeUrl
);
const domain = "walletconnect.org";
const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
const bridges = alphanumerical.split("").map((char)=>`https://${char}.bridge.walletconnect.org`
);
function extractHostname(url) {
    let hostname = url.indexOf("//") > -1 ? url.split("/")[2] : url.split("/")[0];
    hostname = hostname.split(":")[0];
    hostname = hostname.split("?")[0];
    return hostname;
}
function extractRootDomain(url) {
    return extractHostname(url).split(".").slice(-2).join(".");
}
function randomBridgeIndex() {
    return Math.floor(Math.random() * bridges.length);
}
function selectRandomBridgeUrl() {
    return bridges[randomBridgeIndex()];
}
function shouldSelectRandomly(url) {
    return extractRootDomain(url) === domain;
}
function getBridgeUrl(url) {
    if (shouldSelectRandomly(url)) return selectRandomBridgeUrl();
    return url;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"2TzeP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateKey", ()=>generateKey
);
parcelHelpers.export(exports, "verifyHmac", ()=>verifyHmac
);
parcelHelpers.export(exports, "encrypt", ()=>encrypt
);
parcelHelpers.export(exports, "decrypt", ()=>decrypt
);
var _crypto = require("@walletconnect/crypto");
var _encoding = require("@walletconnect/encoding");
var _utils = require("@walletconnect/utils");
async function generateKey(length) {
    const _length = (length || 256) / 8;
    const bytes = _crypto.randomBytes(_length);
    const result = _utils.convertBufferToArrayBuffer(_encoding.arrayToBuffer(bytes));
    return result;
}
async function verifyHmac(payload, key) {
    const cipherText = _encoding.hexToArray(payload.data);
    const iv = _encoding.hexToArray(payload.iv);
    const hmac = _encoding.hexToArray(payload.hmac);
    const hmacHex = _encoding.arrayToHex(hmac, false);
    const unsigned = _encoding.concatArrays(cipherText, iv);
    const chmac = await _crypto.hmacSha256Sign(key, unsigned);
    const chmacHex = _encoding.arrayToHex(chmac, false);
    if (_encoding.removeHexPrefix(hmacHex) === _encoding.removeHexPrefix(chmacHex)) return true;
    return false;
}
async function encrypt(data, key, providedIv) {
    const _key = _encoding.bufferToArray(_utils.convertArrayBufferToBuffer(key));
    const ivArrayBuffer = providedIv || await generateKey(128);
    const iv = _encoding.bufferToArray(_utils.convertArrayBufferToBuffer(ivArrayBuffer));
    const ivHex = _encoding.arrayToHex(iv, false);
    const contentString = JSON.stringify(data);
    const content = _encoding.utf8ToArray(contentString);
    const cipherText = await _crypto.aesCbcEncrypt(iv, _key, content);
    const cipherTextHex = _encoding.arrayToHex(cipherText, false);
    const unsigned = _encoding.concatArrays(cipherText, iv);
    const hmac = await _crypto.hmacSha256Sign(_key, unsigned);
    const hmacHex = _encoding.arrayToHex(hmac, false);
    return {
        data: cipherTextHex,
        hmac: hmacHex,
        iv: ivHex
    };
}
async function decrypt(payload, key) {
    const _key = _encoding.bufferToArray(_utils.convertArrayBufferToBuffer(key));
    if (!_key) throw new Error("Missing key: required for decryption");
    const verified = await verifyHmac(payload, _key);
    if (!verified) return null;
    const cipherText = _encoding.hexToArray(payload.data);
    const iv = _encoding.hexToArray(payload.iv);
    const buffer = await _crypto.aesCbcDecrypt(iv, _key, cipherText);
    const utf8 = _encoding.arrayToUtf8(buffer);
    let data;
    try {
        data = JSON.parse(utf8);
    } catch (error) {
        return null;
    }
    return data;
}

},{"@walletconnect/crypto":"8f7xc","@walletconnect/encoding":"grCai","@walletconnect/utils":"fMxrC","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"8f7xc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _randombytes = require("@walletconnect/randombytes");
parcelHelpers.exportAll(_randombytes, exports);
var _aes = require("./aes");
parcelHelpers.exportAll(_aes, exports);
var _hmac = require("./hmac");
parcelHelpers.exportAll(_hmac, exports);
var _sha2 = require("./sha2");
parcelHelpers.exportAll(_sha2, exports);
var _helpers = require("../helpers");
parcelHelpers.exportAll(_helpers, exports);
var _constants = require("../constants");
parcelHelpers.exportAll(_constants, exports);

},{"@walletconnect/randombytes":"glmrC","./aes":"6hHbs","./hmac":"gbxlU","./sha2":"bWHRU","../helpers":"h6xyn","../constants":"4Ksb9","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"glmrC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomBytes", ()=>randomBytes
);
var _environment = require("@walletconnect/environment");
function randomBytes(length) {
    const browserCrypto = _environment.getBrowerCrypto();
    return browserCrypto.getRandomValues(new Uint8Array(length));
}

},{"@walletconnect/environment":"h6DZX","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"6hHbs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aesCbcEncrypt", ()=>aesCbcEncrypt
);
parcelHelpers.export(exports, "aesCbcDecrypt", ()=>aesCbcDecrypt
);
var _browser = require("../lib/browser");
function aesCbcEncrypt(iv, key, data) {
    return _browser.browserAesEncrypt(iv, key, data);
}
function aesCbcDecrypt(iv, key, data) {
    return _browser.browserAesDecrypt(iv, key, data);
}

},{"../lib/browser":"kn4nx","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"kn4nx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAlgo", ()=>getAlgo
);
parcelHelpers.export(exports, "getOps", ()=>getOps
);
parcelHelpers.export(exports, "browserExportKey", ()=>browserExportKey
);
parcelHelpers.export(exports, "browserImportKey", ()=>browserImportKey
);
parcelHelpers.export(exports, "browserAesEncrypt", ()=>browserAesEncrypt
);
parcelHelpers.export(exports, "browserAesDecrypt", ()=>browserAesDecrypt
);
parcelHelpers.export(exports, "browserHmacSha256Sign", ()=>browserHmacSha256Sign
);
parcelHelpers.export(exports, "browserHmacSha512Sign", ()=>browserHmacSha512Sign
);
parcelHelpers.export(exports, "browserSha256", ()=>browserSha256
);
parcelHelpers.export(exports, "browserSha512", ()=>browserSha512
);
var _environment = require("@walletconnect/environment");
var _constants = require("../constants");
function getAlgo(type) {
    return type === _constants.AES_BROWSER_ALGO ? {
        length: _constants.AES_LENGTH,
        name: _constants.AES_BROWSER_ALGO
    } : {
        hash: {
            name: _constants.HMAC_BROWSER_ALGO
        },
        name: _constants.HMAC_BROWSER
    };
}
function getOps(type) {
    return type === _constants.AES_BROWSER_ALGO ? [
        _constants.ENCRYPT_OP,
        _constants.DECRYPT_OP
    ] : [
        _constants.SIGN_OP,
        _constants.VERIFY_OP
    ];
}
async function browserExportKey(cryptoKey, type = _constants.AES_BROWSER_ALGO) {
    const subtle = _environment.getSubtleCrypto();
    return new Uint8Array(await subtle.exportKey("raw", cryptoKey));
}
async function browserImportKey(buffer, type = _constants.AES_BROWSER_ALGO) {
    return _environment.getSubtleCrypto().importKey("raw", buffer, getAlgo(type), true, getOps(type));
}
async function browserAesEncrypt(iv, key, data) {
    const subtle = _environment.getSubtleCrypto();
    const cryptoKey = await browserImportKey(key, _constants.AES_BROWSER_ALGO);
    const result = await subtle.encrypt({
        iv,
        name: _constants.AES_BROWSER_ALGO
    }, cryptoKey, data);
    return new Uint8Array(result);
}
async function browserAesDecrypt(iv, key, data) {
    const subtle = _environment.getSubtleCrypto();
    const cryptoKey = await browserImportKey(key, _constants.AES_BROWSER_ALGO);
    const result = await subtle.decrypt({
        iv,
        name: _constants.AES_BROWSER_ALGO
    }, cryptoKey, data);
    return new Uint8Array(result);
}
async function browserHmacSha256Sign(key, data) {
    const subtle = _environment.getSubtleCrypto();
    const cryptoKey = await browserImportKey(key, _constants.HMAC_BROWSER);
    const signature = await subtle.sign({
        length: _constants.HMAC_LENGTH,
        name: _constants.HMAC_BROWSER
    }, cryptoKey, data);
    return new Uint8Array(signature);
}
async function browserHmacSha512Sign(key, data) {
    const subtle = _environment.getSubtleCrypto();
    const cryptoKey = await browserImportKey(key, _constants.HMAC_BROWSER);
    const signature = await subtle.sign({
        length: _constants.LENGTH_512,
        name: _constants.HMAC_BROWSER
    }, cryptoKey, data);
    return new Uint8Array(signature);
}
async function browserSha256(data) {
    const subtle = _environment.getSubtleCrypto();
    const result = await subtle.digest({
        name: _constants.SHA256_BROWSER_ALGO
    }, data);
    return new Uint8Array(result);
}
async function browserSha512(data) {
    const subtle = _environment.getSubtleCrypto();
    const result = await subtle.digest({
        name: _constants.SHA512_BROWSER_ALGO
    }, data);
    return new Uint8Array(result);
}

},{"@walletconnect/environment":"h6DZX","../constants":"4Ksb9","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"4Ksb9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _default = require("./default");
parcelHelpers.exportAll(_default, exports);
var _encoding = require("./encoding");
parcelHelpers.exportAll(_encoding, exports);
var _error = require("./error");
parcelHelpers.exportAll(_error, exports);
var _length = require("./length");
parcelHelpers.exportAll(_length, exports);
var _operations = require("./operations");
parcelHelpers.exportAll(_operations, exports);

},{"./default":"lRMZJ","./encoding":"kaGZw","./error":"44ATF","./length":"1jahY","./operations":"3UKqz","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"lRMZJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AES_LENGTH", ()=>AES_LENGTH
);
parcelHelpers.export(exports, "HMAC_LENGTH", ()=>HMAC_LENGTH
);
parcelHelpers.export(exports, "AES_BROWSER_ALGO", ()=>AES_BROWSER_ALGO
);
parcelHelpers.export(exports, "HMAC_BROWSER_ALGO", ()=>HMAC_BROWSER_ALGO
);
parcelHelpers.export(exports, "HMAC_BROWSER", ()=>HMAC_BROWSER
);
parcelHelpers.export(exports, "SHA256_BROWSER_ALGO", ()=>SHA256_BROWSER_ALGO
);
parcelHelpers.export(exports, "SHA512_BROWSER_ALGO", ()=>SHA512_BROWSER_ALGO
);
parcelHelpers.export(exports, "AES_NODE_ALGO", ()=>AES_NODE_ALGO
);
parcelHelpers.export(exports, "HMAC_NODE_ALGO", ()=>HMAC_NODE_ALGO
);
parcelHelpers.export(exports, "SHA256_NODE_ALGO", ()=>SHA256_NODE_ALGO
);
parcelHelpers.export(exports, "SHA512_NODE_ALGO", ()=>SHA512_NODE_ALGO
);
parcelHelpers.export(exports, "RIPEMD160_NODE_ALGO", ()=>RIPEMD160_NODE_ALGO
);
parcelHelpers.export(exports, "PREFIX_LENGTH", ()=>PREFIX_LENGTH
);
parcelHelpers.export(exports, "KEY_LENGTH", ()=>KEY_LENGTH
);
parcelHelpers.export(exports, "IV_LENGTH", ()=>IV_LENGTH
);
parcelHelpers.export(exports, "MAC_LENGTH", ()=>MAC_LENGTH
);
var _length = require("./length");
const AES_LENGTH = _length.LENGTH_256;
const HMAC_LENGTH = _length.LENGTH_256;
const AES_BROWSER_ALGO = "AES-CBC";
const HMAC_BROWSER_ALGO = `SHA-${AES_LENGTH}`;
const HMAC_BROWSER = "HMAC";
const SHA256_BROWSER_ALGO = "SHA-256";
const SHA512_BROWSER_ALGO = "SHA-512";
const AES_NODE_ALGO = `aes-${AES_LENGTH}-cbc`;
const HMAC_NODE_ALGO = `sha${HMAC_LENGTH}`;
const SHA256_NODE_ALGO = "sha256";
const SHA512_NODE_ALGO = "sha512";
const RIPEMD160_NODE_ALGO = "ripemd160";
const PREFIX_LENGTH = _length.LENGTH_1;
const KEY_LENGTH = _length.LENGTH_32;
const IV_LENGTH = _length.LENGTH_16;
const MAC_LENGTH = _length.LENGTH_32;

},{"./length":"1jahY","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"1jahY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LENGTH_0", ()=>LENGTH_0
);
parcelHelpers.export(exports, "LENGTH_1", ()=>LENGTH_1
);
parcelHelpers.export(exports, "LENGTH_16", ()=>LENGTH_16
);
parcelHelpers.export(exports, "LENGTH_32", ()=>LENGTH_32
);
parcelHelpers.export(exports, "LENGTH_64", ()=>LENGTH_64
);
parcelHelpers.export(exports, "LENGTH_128", ()=>LENGTH_128
);
parcelHelpers.export(exports, "LENGTH_256", ()=>LENGTH_256
);
parcelHelpers.export(exports, "LENGTH_512", ()=>LENGTH_512
);
parcelHelpers.export(exports, "LENGTH_1024", ()=>LENGTH_1024
);
const LENGTH_0 = 0;
const LENGTH_1 = 1;
const LENGTH_16 = 16;
const LENGTH_32 = 32;
const LENGTH_64 = 64;
const LENGTH_128 = 128;
const LENGTH_256 = 256;
const LENGTH_512 = 512;
const LENGTH_1024 = 1024;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"kaGZw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HEX_ENC", ()=>HEX_ENC
);
parcelHelpers.export(exports, "UTF8_ENC", ()=>UTF8_ENC
);
const HEX_ENC = "hex";
const UTF8_ENC = "utf8";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"44ATF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ERROR_BAD_MAC", ()=>ERROR_BAD_MAC
);
const ERROR_BAD_MAC = "Bad MAC";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"3UKqz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ENCRYPT_OP", ()=>ENCRYPT_OP
);
parcelHelpers.export(exports, "DECRYPT_OP", ()=>DECRYPT_OP
);
parcelHelpers.export(exports, "SIGN_OP", ()=>SIGN_OP
);
parcelHelpers.export(exports, "VERIFY_OP", ()=>VERIFY_OP
);
const ENCRYPT_OP = "encrypt";
const DECRYPT_OP = "decrypt";
const SIGN_OP = "sign";
const VERIFY_OP = "verify";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"gbxlU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hmacSha256Sign", ()=>hmacSha256Sign
);
parcelHelpers.export(exports, "hmacSha256Verify", ()=>hmacSha256Verify
);
parcelHelpers.export(exports, "hmacSha512Sign", ()=>hmacSha512Sign
);
parcelHelpers.export(exports, "hmacSha512Verify", ()=>hmacSha512Verify
);
var _browser = require("../lib/browser");
var _helpers = require("../helpers");
async function hmacSha256Sign(key, msg) {
    const result = await _browser.browserHmacSha256Sign(key, msg);
    return result;
}
async function hmacSha256Verify(key, msg, sig) {
    const expectedSig = await _browser.browserHmacSha256Sign(key, msg);
    const result = _helpers.isConstantTime(expectedSig, sig);
    return result;
}
async function hmacSha512Sign(key, msg) {
    const result = await _browser.browserHmacSha512Sign(key, msg);
    return result;
}
async function hmacSha512Verify(key, msg, sig) {
    const expectedSig = await _browser.browserHmacSha512Sign(key, msg);
    const result = _helpers.isConstantTime(expectedSig, sig);
    return result;
}

},{"../lib/browser":"kn4nx","../helpers":"h6xyn","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"h6xyn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _env = require("./env");
parcelHelpers.exportAll(_env, exports);
var _pkcs7 = require("./pkcs7");
parcelHelpers.exportAll(_pkcs7, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _validators = require("./validators");
parcelHelpers.exportAll(_validators, exports);

},{"./env":"6TW1Y","./pkcs7":"iLj4c","./types":"9BrIK","./validators":"gEFbn","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"6TW1Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _environment = require("@walletconnect/environment");
parcelHelpers.exportAll(_environment, exports);

},{"@walletconnect/environment":"h6DZX","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"iLj4c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pkcs7", ()=>pkcs7
);
const PADDING = [
    [
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16,
        16
    ],
    [
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15,
        15
    ],
    [
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14
    ],
    [
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13,
        13
    ],
    [
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12,
        12
    ],
    [
        11,
        11,
        11,
        11,
        11,
        11,
        11,
        11,
        11,
        11,
        11
    ],
    [
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10
    ],
    [
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9
    ],
    [
        8,
        8,
        8,
        8,
        8,
        8,
        8,
        8
    ],
    [
        7,
        7,
        7,
        7,
        7,
        7,
        7
    ],
    [
        6,
        6,
        6,
        6,
        6,
        6
    ],
    [
        5,
        5,
        5,
        5,
        5
    ],
    [
        4,
        4,
        4,
        4
    ],
    [
        3,
        3,
        3
    ],
    [
        2,
        2
    ],
    [
        1
    ], 
];
const pkcs7 = {
    pad (plaintext) {
        const padding = PADDING[plaintext.byteLength % 16 || 0];
        const result = new Uint8Array(plaintext.byteLength + padding.length);
        result.set(plaintext);
        result.set(padding, plaintext.byteLength);
        return result;
    },
    unpad (padded) {
        return padded.subarray(0, padded.byteLength - padded[padded.byteLength - 1]);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"9BrIK":[function(require,module,exports) {

},{}],"gEFbn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assert", ()=>assert
);
parcelHelpers.export(exports, "isConstantTime", ()=>isConstantTime
);
function assert(condition, message) {
    if (!condition) throw new Error(message || "Assertion failed");
}
function isConstantTime(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let res = 0;
    for(let i = 0; i < arr1.length; i++)res |= arr1[i] ^ arr2[i];
    return res === 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"bWHRU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sha256", ()=>sha256
);
parcelHelpers.export(exports, "sha512", ()=>sha512
);
parcelHelpers.export(exports, "ripemd160", ()=>ripemd160
);
var _browser = require("../lib/browser");
async function sha256(msg) {
    const result = await _browser.browserSha256(msg);
    return result;
}
async function sha512(msg) {
    const result = await _browser.browserSha512(msg);
    return result;
}
async function ripemd160(msg) {
    throw new Error("Not supported for Browser async methods, use sync instead!");
}

},{"../lib/browser":"kn4nx","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"j4jRI":[function(require,module,exports) {
var process = require("process");
function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var browserUtils = require('@walletconnect/browser-utils');
var QRCode = _interopDefault(require('qrcode'));
var copy = _interopDefault(require('copy-to-clipboard'));
var React = require('preact/compat');
function open(uri) {
    QRCode.toString(uri, {
        type: "terminal"
    }).then(console.log);
}
var WALLETCONNECT_STYLE_SHEET = ":root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 30px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, \"SF Pro Rounded\", \"SF Pro Text\", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell,\n    \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url(\"images/wc-logo.svg\") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n";
var WALLETCONNECT_LOGO_SVG_URL = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
var WALLETCONNECT_HEADER_TEXT = "WalletConnect";
var ANIMATION_DURATION = 300;
var DEFAULT_BUTTON_COLOR = "rgb(64, 153, 255)";
var WALLETCONNECT_WRAPPER_ID = "walletconnect-wrapper";
var WALLETCONNECT_STYLE_ID = "walletconnect-style-sheet";
var WALLETCONNECT_MODAL_ID = "walletconnect-qrcode-modal";
var WALLETCONNECT_CLOSE_BUTTON_ID = "walletconnect-qrcode-close";
var WALLETCONNECT_CTA_TEXT_ID = "walletconnect-qrcode-text";
var WALLETCONNECT_CONNECT_BUTTON_ID = "walletconnect-connect-button";
function Header(props) {
    return React.createElement("div", {
        className: "walletconnect-modal__header"
    }, React.createElement("img", {
        src: WALLETCONNECT_LOGO_SVG_URL,
        className: "walletconnect-modal__headerLogo"
    }), React.createElement("p", null, WALLETCONNECT_HEADER_TEXT), React.createElement("div", {
        className: "walletconnect-modal__close__wrapper",
        onClick: props.onClose
    }, React.createElement("div", {
        id: WALLETCONNECT_CLOSE_BUTTON_ID,
        className: "walletconnect-modal__close__icon"
    }, React.createElement("div", {
        className: "walletconnect-modal__close__line1"
    }), React.createElement("div", {
        className: "walletconnect-modal__close__line2"
    }))));
}
var officialAlgorandWallet = {
    id: "23138217b046ae8d9d07e62b3337fb288c4445f92f64be067809cd0a8f9454b9",
    name: "Algorand Wallet",
    homepage: "https://algorandwallet.com/",
    chains: [
        "algorand"
    ],
    app: {
        browser: "",
        ios: "https://apps.apple.com/us/app/algorand-wallet/id1459898525",
        android: "https://play.google.com/store/apps/details?id=com.algorand.android",
        mac: "",
        windows: "",
        linux: ""
    },
    mobile: {
        native: "algorand-wc:",
        universal: ""
    },
    desktop: {
        native: "",
        universal: ""
    },
    metadata: {
        shortName: "Algorand Wallet",
        colors: {
            primary: "rgb(26, 174, 152)",
            secondary: ""
        }
    }
};
var registry1 = {
};
registry1[officialAlgorandWallet.id] = officialAlgorandWallet;
function getAppLogoUrl(id) {
    if (id === officialAlgorandWallet.id) return "https://algorand-app.s3.amazonaws.com/app-icons/Algorand-WalletConnect-128.png";
    return "";
}
function formatMobileRegistryEntry(entry, platform) {
    if (platform === void 0) platform = "mobile";
    return {
        name: entry.name || "",
        shortName: entry.metadata.shortName || "",
        color: entry.metadata.colors.primary || "",
        logo: entry.id ? getAppLogoUrl(entry.id) : "",
        universalLink: entry[platform].universal || "",
        deepLink: entry[platform].native || ""
    };
}
function formatMobileRegistry(registry, platform) {
    if (platform === void 0) platform = "mobile";
    return Object.values(registry).filter(function(entry) {
        return !!entry[platform].universal || !!entry[platform].native;
    }).map(function(entry) {
        return formatMobileRegistryEntry(entry, platform);
    });
}
function ConnectButton(props) {
    return React.createElement("a", {
        className: "walletconnect-connect__button",
        href: props.href,
        id: WALLETCONNECT_CONNECT_BUTTON_ID + "-" + props.name,
        onClick: props.onClick,
        rel: "noopener noreferrer",
        style: {
            backgroundColor: props.color
        },
        target: "_blank"
    }, props.name);
}
var CARET_SVG_URL = "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";
function WalletButton(props) {
    var color = props.color;
    var href = props.href;
    var name = props.name;
    var logo = props.logo;
    var onClick = props.onClick;
    return React.createElement("a", {
        className: "walletconnect-modal__base__row",
        href: href,
        onClick: onClick,
        rel: "noopener noreferrer",
        target: "_blank"
    }, React.createElement("h3", {
        className: "walletconnect-modal__base__row__h3"
    }, name), React.createElement("div", {
        className: "walletconnect-modal__base__row__right"
    }, React.createElement("div", {
        className: "walletconnect-modal__base__row__right__app-icon",
        style: {
            background: "url('" + logo + "') " + color,
            backgroundSize: "100%"
        }
    }), React.createElement("img", {
        src: CARET_SVG_URL,
        className: "walletconnect-modal__base__row__right__caret"
    })));
}
function WalletIcon(props) {
    var color = props.color;
    var href = props.href;
    var name = props.name;
    var logo = props.logo;
    var onClick = props.onClick;
    var fontSize = window.innerWidth < 768 ? (name.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
    return React.createElement("a", {
        className: "walletconnect-connect__button__icon_anchor",
        href: href,
        onClick: onClick,
        rel: "noopener noreferrer",
        target: "_blank"
    }, React.createElement("div", {
        className: "walletconnect-connect__button__icon",
        style: {
            background: "url('" + logo + "') " + color,
            backgroundSize: "100%"
        }
    }), React.createElement("div", {
        style: {
            fontSize: fontSize
        },
        className: "walletconnect-connect__button__text"
    }, name));
}
var GRID_MIN_COUNT = 5;
var LINKS_PER_PAGE = 12;
function LinkDisplay(props) {
    var android = browserUtils.isAndroid();
    var whitelist = props.qrcodeModalOptions && props.qrcodeModalOptions.mobileLinks ? props.qrcodeModalOptions.mobileLinks : undefined;
    var ref = React.useState(1);
    var page = ref[0];
    var setPage = ref[1];
    var ref$1 = React.useState(false);
    var error = ref$1[0];
    var setError = ref$1[1];
    var ref$2 = React.useState([]);
    var links = ref$2[0];
    var setLinks = ref$2[1];
    React.useEffect(function() {
        var initMobileLinks = function() {
            try {
                if (android) return Promise.resolve();
                try {
                    var platform = props.mobile ? "mobile" : "desktop";
                    var _links = browserUtils.getMobileLinkRegistry(formatMobileRegistry(registry1, platform), whitelist);
                    setLinks(_links);
                } catch (e) {
                    console.error(e);
                    setError(true);
                }
                return Promise.resolve();
            } catch (e) {
                return Promise.reject(e);
            }
        };
        initMobileLinks();
    }, []);
    var grid = links.length > GRID_MIN_COUNT;
    var pages = Math.ceil(links.length / LINKS_PER_PAGE);
    var range = [
        (page - 1) * LINKS_PER_PAGE + 1,
        page * LINKS_PER_PAGE
    ];
    var pageLinks = links.length ? links.filter(function(_, index) {
        return index + 1 >= range[0] && index + 1 <= range[1];
    }) : [];
    return React.createElement("div", null, React.createElement("p", {
        id: WALLETCONNECT_CTA_TEXT_ID,
        className: "walletconnect-qrcode__text"
    }, android ? props.text.connect_mobile_wallet : props.text.choose_preferred_wallet), React.createElement("div", {
        className: "walletconnect-connect__buttons__wrapper" + (android ? "__android" : grid ? "__wrap" : "")
    }, !android ? pageLinks.length ? pageLinks.map(function(entry) {
        var color = entry.color;
        var name = entry.name;
        var shortName = entry.shortName;
        var logo = entry.logo;
        var href = browserUtils.formatIOSMobile(props.uri, entry);
        var handleClickIOS = React.useCallback(function() {
            browserUtils.saveMobileLinkInfo({
                name: name,
                href: href
            });
        }, [
            pageLinks
        ]);
        return !grid ? React.createElement(WalletButton, {
            color: color,
            href: href,
            name: name,
            logo: logo,
            onClick: handleClickIOS
        }) : React.createElement(WalletIcon, {
            color: color,
            href: href,
            name: shortName,
            logo: logo,
            onClick: handleClickIOS
        });
    }) : React.createElement(React.Fragment, null, React.createElement("p", null, error ? "Something went wrong" : "No wallets available")) : React.createElement(ConnectButton, {
        name: props.text.connect,
        color: DEFAULT_BUTTON_COLOR,
        href: props.uri,
        onClick: React.useCallback(function() {
            browserUtils.saveMobileLinkInfo({
                name: "Unknown",
                href: props.uri
            });
        }, [])
    })), !!(!android && pages > 1) && React.createElement("div", {
        className: "walletconnect-modal__footer"
    }, Array(pages).fill(0).map(function(_, index) {
        var pageNumber = index + 1;
        var selected = page === pageNumber;
        return React.createElement("a", {
            style: {
                margin: "auto 10px",
                fontWeight: selected ? "bold" : "normal"
            },
            onClick: function() {
                return setPage(pageNumber);
            }
        }, pageNumber);
    })));
}
function Notification(props) {
    var show = !!props.message.trim();
    return React.createElement("div", {
        className: "walletconnect-qrcode__notification" + (show ? " notification__show" : "")
    }, props.message);
}
var formatQRCodeImage = function(data) {
    try {
        var result = "";
        return Promise.resolve(QRCode.toString(data, {
            margin: 0,
            type: "svg"
        })).then(function(dataString) {
            if (typeof dataString === "string") result = dataString.replace("<svg", "<svg class=\"walletconnect-qrcode__image\"");
            return result;
        });
    } catch (e) {
        return Promise.reject(e);
    }
};
function QRCodeDisplay(props) {
    var ref = React.useState("");
    var notification = ref[0];
    var setNotification = ref[1];
    var ref$1 = React.useState("");
    var svg = ref$1[0];
    var setSvg = ref$1[1];
    React.useEffect(function() {
        try {
            return Promise.resolve(formatQRCodeImage(props.uri)).then(function(_formatQRCodeImage) {
                setSvg(_formatQRCodeImage);
            });
        } catch (e) {
            Promise.reject(e);
        }
    }, []);
    var copyToClipboard = function() {
        var success = copy(props.uri);
        if (success) {
            setNotification(props.text.copied_to_clipboard);
            setInterval(function() {
                return setNotification("");
            }, 1200);
        } else {
            setNotification("Error");
            setInterval(function() {
                return setNotification("");
            }, 1200);
        }
    };
    return React.createElement("div", null, React.createElement("p", {
        id: WALLETCONNECT_CTA_TEXT_ID,
        className: "walletconnect-qrcode__text"
    }, props.text.scan_qrcode_with_wallet), React.createElement("div", {
        dangerouslySetInnerHTML: {
            __html: svg
        }
    }), React.createElement("div", {
        className: "walletconnect-modal__footer"
    }, React.createElement("a", {
        onClick: copyToClipboard
    }, props.text.copy_to_clipboard)), React.createElement(Notification, {
        message: notification
    }));
}
function Modal(props) {
    var mobile = browserUtils.isMobile();
    var ref = React.useState(!mobile);
    var displayQRCode = ref[0];
    var setDisplayQRCode = ref[1];
    var displayProps = {
        mobile: mobile,
        text: props.text,
        uri: props.uri,
        qrcodeModalOptions: props.qrcodeModalOptions
    };
    var rightSelected = mobile ? displayQRCode : !displayQRCode;
    return React.createElement("div", {
        id: WALLETCONNECT_MODAL_ID,
        className: "walletconnect-qrcode__base animated fadeIn"
    }, React.createElement("div", {
        className: "walletconnect-modal__base"
    }, React.createElement(Header, {
        onClose: props.onClose
    }), React.createElement("div", {
        className: "walletconnect-modal__mobile__toggle" + (rightSelected ? " right__selected" : "")
    }, React.createElement("div", {
        className: "walletconnect-modal__mobile__toggle_selector"
    }), mobile ? React.createElement(React.Fragment, null, React.createElement("a", {
        onClick: function() {
            return setDisplayQRCode(false);
        }
    }, props.text.mobile), React.createElement("a", {
        onClick: function() {
            return setDisplayQRCode(true);
        }
    }, props.text.qrcode)) : React.createElement(React.Fragment, null, React.createElement("a", {
        onClick: function() {
            return setDisplayQRCode(true);
        }
    }, props.text.qrcode), React.createElement("a", {
        onClick: function() {
            return setDisplayQRCode(false);
        }
    }, props.text.desktop))), React.createElement("div", null, displayQRCode ? React.createElement(QRCodeDisplay, Object.assign({
    }, displayProps)) : React.createElement(LinkDisplay, Object.assign({
    }, displayProps)))));
}
var de = {
    choose_preferred_wallet: "Wähle bevorzugte Wallet",
    connect_mobile_wallet: "Verbinde mit Mobile Wallet",
    scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
    connect: "Verbinden",
    qrcode: "QR-Code",
    mobile: "Mobile",
    desktop: "Desktop",
    copy_to_clipboard: "In die Zwischenablage kopieren",
    copied_to_clipboard: "In die Zwischenablage kopiert!"
};
var en = {
    choose_preferred_wallet: "Choose your preferred wallet",
    connect_mobile_wallet: "Connect to Mobile Wallet",
    scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
    connect: "Connect",
    qrcode: "QR Code",
    mobile: "Mobile",
    desktop: "Desktop",
    copy_to_clipboard: "Copy to clipboard",
    copied_to_clipboard: "Copied to clipboard!"
};
var es = {
    choose_preferred_wallet: "Elige tu billetera preferida",
    connect_mobile_wallet: "Conectar a billetera móvil",
    scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
    connect: "Conectar",
    qrcode: "Código QR",
    mobile: "Móvil",
    desktop: "Desktop",
    copy_to_clipboard: "Copiar",
    copied_to_clipboard: "Copiado!"
};
var fr = {
    choose_preferred_wallet: "Choisissez votre portefeuille préféré",
    connect_mobile_wallet: "Se connecter au portefeuille mobile",
    scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
    connect: "Se connecter",
    qrcode: "QR Code",
    mobile: "Mobile",
    desktop: "Desktop",
    copy_to_clipboard: "Copier",
    copied_to_clipboard: "Copié!"
};
var ko = {
    choose_preferred_wallet: "원하는 지갑을 선택하세요",
    connect_mobile_wallet: "모바일 지갑과 연결",
    scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
    connect: "연결",
    qrcode: "QR 코드",
    mobile: "모바일",
    desktop: "데스크탑",
    copy_to_clipboard: "클립보드에 복사",
    copied_to_clipboard: "클립보드에 복사되었습니다!"
};
var pt = {
    choose_preferred_wallet: "Escolha sua carteira preferida",
    connect_mobile_wallet: "Conectar-se à carteira móvel",
    scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
    connect: "Conectar",
    qrcode: "Código QR",
    mobile: "Móvel",
    desktop: "Desktop",
    copy_to_clipboard: "Copiar",
    copied_to_clipboard: "Copiado!"
};
var zh = {
    choose_preferred_wallet: "选择你的钱包",
    connect_mobile_wallet: "连接至移动端钱包",
    scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
    connect: "连接",
    qrcode: "二维码",
    mobile: "移动",
    desktop: "桌面",
    copy_to_clipboard: "复制到剪贴板",
    copied_to_clipboard: "复制到剪贴板成功！"
};
var fa = {
    choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
    connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
    scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
    connect: "اتصال",
    qrcode: "کد QR",
    mobile: "سیار",
    desktop: "دسکتاپ",
    copy_to_clipboard: "کپی به کلیپ بورد",
    copied_to_clipboard: "در کلیپ بورد کپی شد!"
};
var languages = {
    de: de,
    en: en,
    es: es,
    fr: fr,
    ko: ko,
    pt: pt,
    zh: zh,
    fa: fa
};
function injectStyleSheet() {
    var doc = browserUtils.getDocumentOrThrow();
    var prev = doc.getElementById(WALLETCONNECT_STYLE_ID);
    if (prev) doc.head.removeChild(prev);
    var style = doc.createElement("style");
    style.setAttribute("id", WALLETCONNECT_STYLE_ID);
    style.innerText = WALLETCONNECT_STYLE_SHEET;
    doc.head.appendChild(style);
}
function renderWrapper() {
    var doc = browserUtils.getDocumentOrThrow();
    var wrapper = doc.createElement("div");
    wrapper.setAttribute("id", WALLETCONNECT_WRAPPER_ID);
    doc.body.appendChild(wrapper);
    return wrapper;
}
function triggerCloseAnimation() {
    var doc = browserUtils.getDocumentOrThrow();
    var modal = doc.getElementById(WALLETCONNECT_MODAL_ID);
    if (modal) {
        modal.className = modal.className.replace("fadeIn", "fadeOut");
        setTimeout(function() {
            var wrapper = doc.getElementById(WALLETCONNECT_WRAPPER_ID);
            if (wrapper) doc.body.removeChild(wrapper);
        }, ANIMATION_DURATION);
    }
}
function getWrappedCallback(cb) {
    return function() {
        triggerCloseAnimation();
        if (cb) cb();
    };
}
function getText() {
    var lang = browserUtils.getNavigatorOrThrow().language.split("-")[0] || "en";
    return languages[lang] || languages["en"];
}
function open$1(uri, cb, qrcodeModalOptions) {
    injectStyleSheet();
    var wrapper = renderWrapper();
    React.render(React.createElement(Modal, {
        text: getText(),
        uri: uri,
        onClose: getWrappedCallback(cb),
        qrcodeModalOptions: qrcodeModalOptions
    }), wrapper);
}
function close$1() {
    triggerCloseAnimation();
}
var isNode = function() {
    return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
};
function open$2(uri, cb, qrcodeModalOptions) {
    console.log(uri);
    if (isNode()) open(uri);
    else open$1(uri, cb, qrcodeModalOptions);
}
function close$2() {
    if (isNode()) ;
    else close$1();
}
var index1 = {
    open: open$2,
    close: close$2
};
module.exports = index1;

},{"process":"1WSHx","@walletconnect/browser-utils":"6C6gV","qrcode":"3oop4","copy-to-clipboard":"6ec77","preact/compat":"iHK1n"}],"3oop4":[function(require,module,exports) {
var canPromise = require('./can-promise');
var QRCode = require('./core/qrcode');
var CanvasRenderer = require('./renderer/canvas');
var SvgRenderer = require('./renderer/svg-tag.js');
function renderCanvas(renderFunc, canvas, text, opts, cb) {
    var args = [].slice.call(arguments, 1);
    var argsNum = args.length;
    var isLastArgCb = typeof args[argsNum - 1] === 'function';
    if (!isLastArgCb && !canPromise()) throw new Error('Callback required as last argument');
    if (isLastArgCb) {
        if (argsNum < 2) throw new Error('Too few arguments provided');
        if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === 'undefined') {
                cb = opts;
                opts = undefined;
            } else {
                cb = opts;
                opts = text;
                text = canvas;
                canvas = undefined;
            }
        }
    } else {
        if (argsNum < 1) throw new Error('Too few arguments provided');
        if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
        }
        return new Promise(function(resolve, reject) {
            try {
                var data = QRCode.create(text, opts);
                resolve(renderFunc(data, canvas, opts));
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        var data1 = QRCode.create(text, opts);
        cb(null, renderFunc(data1, canvas, opts));
    } catch (e) {
        cb(e);
    }
}
exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
// only svg for now.
exports.toString = renderCanvas.bind(null, function(data, _, opts) {
    return SvgRenderer.render(data, opts);
});

},{"./can-promise":"iagK4","./core/qrcode":"9tO2W","./renderer/canvas":"2VHfR","./renderer/svg-tag.js":"8noPI"}],"iagK4":[function(require,module,exports) {
// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
module.exports = function() {
    return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};

},{}],"9tO2W":[function(require,module,exports) {
var BufferUtil = require('../utils/buffer');
var Utils = require('./utils');
var ECLevel = require('./error-correction-level');
var BitBuffer = require('./bit-buffer');
var BitMatrix = require('./bit-matrix');
var AlignmentPattern = require('./alignment-pattern');
var FinderPattern = require('./finder-pattern');
var MaskPattern = require('./mask-pattern');
var ECCode = require('./error-correction-code');
var ReedSolomonEncoder = require('./reed-solomon-encoder');
var Version = require('./version');
var FormatInfo = require('./format-info');
var Mode = require('./mode');
var Segments = require('./segments');
var isArray = require('isarray');
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/ /**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupFinderPattern(matrix, version) {
    var size = matrix.size;
    var pos = FinderPattern.getPositions(version);
    for(var i = 0; i < pos.length; i++){
        var row = pos[i][0];
        var col = pos[i][1];
        for(var r = -1; r <= 7; r++){
            if (row + r <= -1 || size <= row + r) continue;
            for(var c = -1; c <= 7; c++){
                if (col + c <= -1 || size <= col + c) continue;
                if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) matrix.set(row + r, col + c, true, true);
                else matrix.set(row + r, col + c, false, true);
            }
        }
    }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */ function setupTimingPattern(matrix) {
    var size = matrix.size;
    for(var r = 8; r < size - 8; r++){
        var value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
    }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupAlignmentPattern(matrix, version) {
    var pos = AlignmentPattern.getPositions(version);
    for(var i = 0; i < pos.length; i++){
        var row = pos[i][0];
        var col = pos[i][1];
        for(var r = -2; r <= 2; r++){
            for(var c = -2; c <= 2; c++)if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) matrix.set(row + r, col + c, true, true);
            else matrix.set(row + r, col + c, false, true);
        }
    }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupVersionInfo(matrix, version) {
    var size = matrix.size;
    var bits = Version.getEncodedBits(version);
    var row, col, mod;
    for(var i = 0; i < 18; i++){
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
    }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */ function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
    var size = matrix.size;
    var bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
    var i, mod;
    for(i = 0; i < 15; i++){
        mod = (bits >> i & 1) === 1;
        // vertical
        if (i < 6) matrix.set(i, 8, mod, true);
        else if (i < 8) matrix.set(i + 1, 8, mod, true);
        else matrix.set(size - 15 + i, 8, mod, true);
        // horizontal
        if (i < 8) matrix.set(8, size - i - 1, mod, true);
        else if (i < 9) matrix.set(8, 15 - i - 1 + 1, mod, true);
        else matrix.set(8, 15 - i - 1, mod, true);
    }
    // fixed module
    matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */ function setupData(matrix, data) {
    var size = matrix.size;
    var inc = -1;
    var row = size - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    for(var col = size - 1; col > 0; col -= 2){
        if (col === 6) col--;
        while(true){
            for(var c = 0; c < 2; c++)if (!matrix.isReserved(row, col - c)) {
                var dark = false;
                if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                matrix.set(row, col - c, dark);
                bitIndex--;
                if (bitIndex === -1) {
                    byteIndex++;
                    bitIndex = 7;
                }
            }
            row += inc;
            if (row < 0 || size <= row) {
                row -= inc;
                inc = -inc;
                break;
            }
        }
    }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */ function createData(version, errorCorrectionLevel, segments) {
    // Prepare data buffer
    var buffer = new BitBuffer();
    segments.forEach(function(data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);
        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        // add binary data sequence to buffer
        data.write(buffer);
    });
    // Calculate required number of bits
    var totalCodewords = Utils.getSymbolTotalCodewords(version);
    var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    // Add a terminator.
    // If the bit string is shorter than the total number of required bits,
    // a terminator of up to four 0s must be added to the right side of the string.
    // If the bit string is more than four bits shorter than the required number of bits,
    // add four 0s to the end.
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) buffer.put(0, 4);
    // If the bit string is fewer than four bits shorter, add only the number of 0s that
    // are needed to reach the required number of bits.
    // After adding the terminator, if the number of bits in the string is not a multiple of 8,
    // pad the string on the right with 0s to make the string's length a multiple of 8.
    while(buffer.getLengthInBits() % 8 !== 0)buffer.putBit(0);
    // Add pad bytes if the string is still shorter than the total number of required bits.
    // Extend the buffer to fill the data capacity of the symbol corresponding to
    // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
    // and 00010001 (0x11) alternately.
    var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for(var i = 0; i < remainingByte; i++)buffer.put(i % 2 ? 17 : 236, 8);
    return createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */ function createCodewords(bitBuffer, version, errorCorrectionLevel) {
    // Total codewords for this QR code version (Data + Error correction)
    var totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    var dataTotalCodewords = totalCodewords - ecTotalCodewords;
    // Total number of blocks
    var ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
    // Calculate how many blocks each group should contain
    var blocksInGroup2 = totalCodewords % ecTotalBlocks;
    var blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    // Number of EC codewords is the same for both groups
    var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
    var rs = new ReedSolomonEncoder(ecCount);
    var offset = 0;
    var dcData = new Array(ecTotalBlocks);
    var ecData = new Array(ecTotalBlocks);
    var maxDataSize = 0;
    var buffer = BufferUtil.from(bitBuffer.buffer);
    // Divide the buffer into the required number of blocks
    for(var b = 0; b < ecTotalBlocks; b++){
        var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);
        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
    }
    // Create final data
    // Interleave the data and error correction codewords from each block
    var data = BufferUtil.alloc(totalCodewords);
    var index = 0;
    var i, r;
    // Add data codewords
    for(i = 0; i < maxDataSize; i++){
        for(r = 0; r < ecTotalBlocks; r++)if (i < dcData[r].length) data[index++] = dcData[r][i];
    }
    // Apped EC codewords
    for(i = 0; i < ecCount; i++)for(r = 0; r < ecTotalBlocks; r++)data[index++] = ecData[r][i];
    return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */ function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
    var segments;
    if (isArray(data)) segments = Segments.fromArray(data);
    else if (typeof data === 'string') {
        var estimatedVersion = version;
        if (!estimatedVersion) {
            var rawSegments = Segments.rawSplit(data);
            // Estimate best version that can contain raw splitted segments
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments = Segments.fromString(data, estimatedVersion || 40);
    } else throw new Error('Invalid data');
    // Get the min version that can contain data
    var bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
    // If no version is found, data cannot be stored
    if (!bestVersion) throw new Error('The amount of data is too big to be stored in a QR Code');
    // If not specified, use min version as default
    if (!version) version = bestVersion;
    else if (version < bestVersion) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + '.\n');
    var dataBits = createData(version, errorCorrectionLevel, segments);
    // Allocate matrix buffer
    var moduleCount = Utils.getSymbolSize(version);
    var modules = new BitMatrix(moduleCount);
    // Add function modules
    setupFinderPattern(modules, version);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version);
    // Add temporary dummy bits for format info just to set them as reserved.
    // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
    // since the masking operation must be performed only on the encoding region.
    // These blocks will be replaced with correct values later in code.
    setupFormatInfo(modules, errorCorrectionLevel, 0);
    if (version >= 7) setupVersionInfo(modules, version);
    // Add data codewords
    setupData(modules, dataBits);
    if (isNaN(maskPattern)) // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
    // Apply mask pattern
    MaskPattern.applyMask(maskPattern, modules);
    // Replace format info bits with correct values
    setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
    return {
        modules: modules,
        version: version,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern,
        segments: segments
    };
}
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */ exports.create = function create(data, options) {
    if (typeof data === 'undefined' || data === '') throw new Error('No input text');
    var errorCorrectionLevel = ECLevel.M;
    var version;
    var mask;
    if (typeof options !== 'undefined') {
        // Use higher error correction level as default
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) Utils.setToSJISFunction(options.toSJISFunc);
    }
    return createSymbol(data, version, errorCorrectionLevel, mask);
};

},{"../utils/buffer":"6dOfr","./utils":"lmGe2","./error-correction-level":"88PX9","./bit-buffer":"f3zLR","./bit-matrix":"mrf6T","./alignment-pattern":"i8zTz","./finder-pattern":"iXM3S","./mask-pattern":"3GjwB","./error-correction-code":"a031V","./reed-solomon-encoder":"6w3fK","./version":"jKMLj","./format-info":"lDKJ9","./mode":"1H9ZH","./segments":"bLMoL","isarray":"3nzcH"}],"6dOfr":[function(require,module,exports) {
/**
 * Implementation of a subset of node.js Buffer methods for the browser.
 * Based on https://github.com/feross/buffer
 */ /* eslint-disable no-proto */ 'use strict';
var isArray = require('isarray');
function typedArraySupport() {
    // Can typed array instances be augmented?
    try {
        var arr = new Uint8Array(1);
        arr.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
                return 42;
            }
        };
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function Buffer(arg, offset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) return new Buffer(arg, offset, length);
    if (typeof arg === 'number') return allocUnsafe(this, arg);
    return from(this, arg, offset, length);
}
if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) Object.defineProperty(Buffer, Symbol.species, {
        value: null,
        configurable: true,
        enumerable: false,
        writable: false
    });
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function isnan(val) {
    return val !== val // eslint-disable-line no-self-compare
    ;
}
function createBuffer(that, length) {
    var buf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        buf = new Uint8Array(length);
        buf.__proto__ = Buffer.prototype;
    } else {
        // Fallback: Return an object instance of the Buffer class
        buf = that;
        if (buf === null) buf = new Buffer(length);
        buf.length = length;
    }
    return buf;
}
function allocUnsafe(that, size) {
    var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) for(var i = 0; i < size; ++i)buf[i] = 0;
    return buf;
}
function fromString(that, string) {
    var length = byteLength(string) | 0;
    var buf = createBuffer(that, length);
    var actual = buf.write(string);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(that, length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayBuffer(that, array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('\'offset\' is out of bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('\'length\' is out of bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    if (Buffer.TYPED_ARRAY_SUPPORT) // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer.prototype;
    else // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf);
    return buf;
}
function fromObject(that, obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(that, len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj) {
        if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
            if (typeof obj.length !== 'number' || isnan(obj.length)) return createBuffer(that, 0);
            return fromArrayLike(that, obj);
        }
        if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(that, obj.data);
    }
    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function byteLength(string) {
    if (Buffer.isBuffer(string)) return string.length;
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') string = '' + string;
    var len = string.length;
    if (len === 0) return 0;
    return utf8ToBytes(string).length;
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function from(that, value, offset, length) {
    if (typeof value === 'number') throw new TypeError('"value" argument must not be a number');
    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) return fromArrayBuffer(that, value, offset, length);
    if (typeof value === 'string') return fromString(that, value, offset);
    return fromObject(that, value);
}
Buffer.prototype.write = function write(string, offset, length) {
    // Buffer#write(string)
    if (offset === undefined) {
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length])
    } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) length = length | 0;
        else length = undefined;
    }
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    return utf8Write(this, string, offset, length);
};
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        // Return an augmented `Uint8Array` instance
        newBuf.__proto__ = Buffer.prototype;
    } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for(var i = 0; i < sliceLen; ++i)newBuf[i] = this[i + start];
    }
    return newBuf;
};
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    var i;
    if (this === target && start < targetStart && targetStart < end) // descending copy from end
    for(i = len - 1; i >= 0; --i)target[i + targetStart] = this[i + start];
    else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) // ascending copy from start
    for(i = 0; i < len; ++i)target[i + targetStart] = this[i + start];
    else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
    return len;
};
Buffer.prototype.fill = function fill(val, start, end) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') end = this.length;
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (code < 256) val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : new Buffer(val);
        var len = bytes.length;
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
Buffer.concat = function concat(list, length) {
    if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return createBuffer(null, 0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = allocUnsafe(null, length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
Buffer.byteLength = byteLength;
Buffer.prototype._isBuffer = true;
Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
};
module.exports.alloc = function(size) {
    var buffer = new Buffer(size);
    buffer.fill(0);
    return buffer;
};
module.exports.from = function(data) {
    return new Buffer(data);
};

},{"isarray":"3nzcH"}],"3nzcH":[function(require,module,exports) {
var toString = {
}.toString;
module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == '[object Array]';
};

},{}],"lmGe2":[function(require,module,exports) {
var toSJISFunction;
var CODEWORDS_COUNT = [
    0,
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
];
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */ exports.getSymbolSize = function getSymbolSize(version) {
    if (!version) throw new Error('"version" cannot be null or undefined');
    if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
    return version * 4 + 17;
};
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */ exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
    return CODEWORDS_COUNT[version];
};
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */ exports.getBCHDigit = function(data) {
    var digit = 0;
    while(data !== 0){
        digit++;
        data >>>= 1;
    }
    return digit;
};
exports.setToSJISFunction = function setToSJISFunction(f) {
    if (typeof f !== 'function') throw new Error('"toSJISFunc" is not a valid function.');
    toSJISFunction = f;
};
exports.isKanjiModeEnabled = function() {
    return typeof toSJISFunction !== 'undefined';
};
exports.toSJIS = function toSJIS(kanji) {
    return toSJISFunction(kanji);
};

},{}],"88PX9":[function(require,module,exports) {
exports.L = {
    bit: 1
};
exports.M = {
    bit: 0
};
exports.Q = {
    bit: 3
};
exports.H = {
    bit: 2
};
function fromString(string) {
    if (typeof string !== 'string') throw new Error('Param is not a string');
    var lcStr = string.toLowerCase();
    switch(lcStr){
        case 'l':
        case 'low':
            return exports.L;
        case 'm':
        case 'medium':
            return exports.M;
        case 'q':
        case 'quartile':
            return exports.Q;
        case 'h':
        case 'high':
            return exports.H;
        default:
            throw new Error('Unknown EC Level: ' + string);
    }
}
exports.isValid = function isValid(level) {
    return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
};
exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) return value;
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

},{}],"f3zLR":[function(require,module,exports) {
function BitBuffer() {
    this.buffer = [];
    this.length = 0;
}
BitBuffer.prototype = {
    get: function(index) {
        var bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
    },
    put: function(num, length) {
        for(var i = 0; i < length; i++)this.putBit((num >>> length - i - 1 & 1) === 1);
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(bit) {
        var bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) this.buffer.push(0);
        if (bit) this.buffer[bufIndex] |= 128 >>> this.length % 8;
        this.length++;
    }
};
module.exports = BitBuffer;

},{}],"mrf6T":[function(require,module,exports) {
var BufferUtil = require('../utils/buffer');
/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */ function BitMatrix(size) {
    if (!size || size < 1) throw new Error('BitMatrix size must be defined and greater than 0');
    this.size = size;
    this.data = BufferUtil.alloc(size * size);
    this.reservedBit = BufferUtil.alloc(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */ BitMatrix.prototype.set = function(row, col, value, reserved) {
    var index = row * this.size + col;
    this.data[index] = value;
    if (reserved) this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */ BitMatrix.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */ BitMatrix.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */ BitMatrix.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
};
module.exports = BitMatrix;

},{"../utils/buffer":"6dOfr"}],"i8zTz":[function(require,module,exports) {
/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */ var getSymbolSize = require('./utils').getSymbolSize;
/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */ exports.getRowColCoords = function getRowColCoords(version) {
    if (version === 1) return [];
    var posCount = Math.floor(version / 7) + 2;
    var size = getSymbolSize(version);
    var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    var positions = [
        size - 7
    ] // Last coord is always (size - 7)
    ;
    for(var i = 1; i < posCount - 1; i++)positions[i] = positions[i - 1] - intervals;
    positions.push(6) // First coord is always 6
    ;
    return positions.reverse();
};
/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    var coords = [];
    var pos = exports.getRowColCoords(version);
    var posLength = pos.length;
    for(var i = 0; i < posLength; i++)for(var j = 0; j < posLength; j++){
        // Skip if position is occupied by finder patterns
        if (i === 0 && j === 0 || i === 0 && j === posLength - 1 || i === posLength - 1 && j === 0) continue;
        coords.push([
            pos[i],
            pos[j]
        ]);
    }
    return coords;
};

},{"./utils":"lmGe2"}],"iXM3S":[function(require,module,exports) {
var getSymbolSize = require('./utils').getSymbolSize;
var FINDER_PATTERN_SIZE = 7;
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    var size = getSymbolSize(version);
    return [
        // top-left
        [
            0,
            0
        ],
        // top-right
        [
            size - FINDER_PATTERN_SIZE,
            0
        ],
        // bottom-left
        [
            0,
            size - FINDER_PATTERN_SIZE
        ]
    ];
};

},{"./utils":"lmGe2"}],"3GjwB":[function(require,module,exports) {
/**
 * Data mask pattern reference
 * @type {Object}
 */ exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */ var PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
};
/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */ exports.isValid = function isValid(mask) {
    return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
};
/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */ exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : undefined;
};
/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/ exports.getPenaltyN1 = function getPenaltyN1(data) {
    var size = data.size;
    var points = 0;
    var sameCountCol = 0;
    var sameCountRow = 0;
    var lastCol = null;
    var lastRow = null;
    for(var row = 0; row < size; row++){
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for(var col = 0; col < size; col++){
            var module = data.get(row, col);
            if (module === lastCol) sameCountCol++;
            else {
                if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
                lastCol = module;
                sameCountCol = 1;
            }
            module = data.get(col, row);
            if (module === lastRow) sameCountRow++;
            else {
                if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
                lastRow = module;
                sameCountRow = 1;
            }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
};
/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */ exports.getPenaltyN2 = function getPenaltyN2(data) {
    var size = data.size;
    var points = 0;
    for(var row = 0; row < size - 1; row++)for(var col = 0; col < size - 1; col++){
        var last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
        if (last === 4 || last === 0) points++;
    }
    return points * PenaltyScores.N2;
};
/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */ exports.getPenaltyN3 = function getPenaltyN3(data) {
    var size = data.size;
    var points = 0;
    var bitsCol = 0;
    var bitsRow = 0;
    for(var row = 0; row < size; row++){
        bitsCol = bitsRow = 0;
        for(var col = 0; col < size; col++){
            bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
            if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
            bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
            if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
    }
    return points * PenaltyScores.N3;
};
/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */ exports.getPenaltyN4 = function getPenaltyN4(data) {
    var darkCount = 0;
    var modulesCount = data.data.length;
    for(var i = 0; i < modulesCount; i++)darkCount += data.data[i];
    var k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
};
/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */ function getMaskAt(maskPattern, i, j) {
    switch(maskPattern){
        case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
            return i % 2 === 0;
        case exports.Patterns.PATTERN010:
            return j % 3 === 0;
        case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
            throw new Error('bad maskPattern:' + maskPattern);
    }
}
/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */ exports.applyMask = function applyMask(pattern, data) {
    var size = data.size;
    for(var col = 0; col < size; col++)for(var row = 0; row < size; row++){
        if (data.isReserved(row, col)) continue;
        data.xor(row, col, getMaskAt(pattern, row, col));
    }
};
/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */ exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    var numPatterns = Object.keys(exports.Patterns).length;
    var bestPattern = 0;
    var lowerPenalty = Infinity;
    for(var p = 0; p < numPatterns; p++){
        setupFormatFunc(p);
        exports.applyMask(p, data);
        // Calculate penalty
        var penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        // Undo previously applied mask
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
        }
    }
    return bestPattern;
};

},{}],"a031V":[function(require,module,exports) {
var ECLevel = require('./error-correction-level');
var EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
];
var EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
];
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */ exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */ exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};

},{"./error-correction-level":"88PX9"}],"6w3fK":[function(require,module,exports) {
var BufferUtil = require('../utils/buffer');
var Polynomial = require('./polynomial');
var Buffer = require('buffer').Buffer;
function ReedSolomonEncoder(degree) {
    this.genPoly = undefined;
    this.degree = degree;
    if (this.degree) this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */ ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    // create an irreducible generator polynomial
    this.degree = degree;
    this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */ ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) throw new Error('Encoder not initialized');
    // Calculate EC for this data block
    // extends data size to data+genPoly size
    var pad = BufferUtil.alloc(this.degree);
    var paddedData = Buffer.concat([
        data,
        pad
    ], data.length + this.degree);
    // The error correction codewords are the remainder after dividing the data codewords
    // by a generator polynomial
    var remainder = Polynomial.mod(paddedData, this.genPoly);
    // return EC data blocks (last n byte, where n is the degree of genPoly)
    // If coefficients number in remainder are less than genPoly degree,
    // pad with 0s to the left to reach the needed number of coefficients
    var start = this.degree - remainder.length;
    if (start > 0) {
        var buff = BufferUtil.alloc(this.degree);
        remainder.copy(buff, start);
        return buff;
    }
    return remainder;
};
module.exports = ReedSolomonEncoder;

},{"../utils/buffer":"6dOfr","./polynomial":"BdQKt","buffer":"8iVrL"}],"BdQKt":[function(require,module,exports) {
var BufferUtil = require('../utils/buffer');
var GF = require('./galois-field');
/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */ exports.mul = function mul(p1, p2) {
    var coeff = BufferUtil.alloc(p1.length + p2.length - 1);
    for(var i = 0; i < p1.length; i++)for(var j = 0; j < p2.length; j++)coeff[i + j] ^= GF.mul(p1[i], p2[j]);
    return coeff;
};
/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */ exports.mod = function mod(divident, divisor) {
    var result = BufferUtil.from(divident);
    while(result.length - divisor.length >= 0){
        var coeff = result[0];
        for(var i = 0; i < divisor.length; i++)result[i] ^= GF.mul(divisor[i], coeff);
        // remove all zeros from buffer head
        var offset = 0;
        while(offset < result.length && result[offset] === 0)offset++;
        result = result.slice(offset);
    }
    return result;
};
/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */ exports.generateECPolynomial = function generateECPolynomial(degree) {
    var poly = BufferUtil.from([
        1
    ]);
    for(var i = 0; i < degree; i++)poly = exports.mul(poly, [
        1,
        GF.exp(i)
    ]);
    return poly;
};

},{"../utils/buffer":"6dOfr","./galois-field":"fUWs2"}],"fUWs2":[function(require,module,exports) {
var BufferUtil = require('../utils/buffer');
var EXP_TABLE = BufferUtil.alloc(512);
var LOG_TABLE = BufferUtil.alloc(256);
(function initTables() {
    var x = 1;
    for(var i = 0; i < 255; i++){
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1 // multiply by 2
        ;
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 256) x ^= 285;
    }
    // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
    // stay inside the bounds (because we will mainly use this table for the multiplication of
    // two GF numbers, no more).
    // @see {@link mul}
    for(i = 255; i < 512; i++)EXP_TABLE[i] = EXP_TABLE[i - 255];
})();
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.log = function log(n) {
    if (n < 1) throw new Error('log(' + n + ')');
    return LOG_TABLE[n];
};
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.exp = function exp(n) {
    return EXP_TABLE[n];
};
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */ exports.mul = function mul(x, y) {
    if (x === 0 || y === 0) return 0;
    // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
    // @see {@link initTables}
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};

},{"../utils/buffer":"6dOfr"}],"jKMLj":[function(require,module,exports) {
var Utils = require('./utils');
var ECCode = require('./error-correction-code');
var ECLevel = require('./error-correction-level');
var Mode = require('./mode');
var VersionCheck = require('./version-check');
var isArray = require('isarray');
// Generator polynomial used to encode version information
var G18 = 7973;
var G18_BCH = Utils.getBCHDigit(G18);
function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for(var currentVersion = 1; currentVersion <= 40; currentVersion++){
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) return currentVersion;
    }
    return undefined;
}
function getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return Mode.getCharCountIndicator(mode, version) + 4;
}
function getTotalBitsFromDataArray(segments, version) {
    var totalBits = 0;
    segments.forEach(function(data) {
        var reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
}
function getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for(var currentVersion = 1; currentVersion <= 40; currentVersion++){
        var length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) return currentVersion;
    }
    return undefined;
}
/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */ exports.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) return parseInt(value, 10);
    return defaultValue;
};
/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */ exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!VersionCheck.isValid(version)) throw new Error('Invalid QR Code version');
    // Use Byte mode as default
    if (typeof mode === 'undefined') mode = Mode.BYTE;
    // Total codewords for this QR code version (Data + Error correction)
    var totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    var ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === Mode.MIXED) return dataTotalCodewordsBits;
    var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
    // Return max number of storable codewords
    switch(mode){
        case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
            return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
            return Math.floor(usableBits / 8);
    }
};
/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */ exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
    var seg;
    var ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
    if (isArray(data)) {
        if (data.length > 1) return getBestVersionForMixedData(data, ecl);
        if (data.length === 0) return 1;
        seg = data[0];
    } else seg = data;
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};
/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */ exports.getEncodedBits = function getEncodedBits(version) {
    if (!VersionCheck.isValid(version) || version < 7) throw new Error('Invalid QR Code version');
    var d = version << 12;
    while(Utils.getBCHDigit(d) - G18_BCH >= 0)d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
    return version << 12 | d;
};

},{"./utils":"lmGe2","./error-correction-code":"a031V","./error-correction-level":"88PX9","./mode":"1H9ZH","./version-check":"ieJdy","isarray":"3nzcH"}],"1H9ZH":[function(require,module,exports) {
var VersionCheck = require('./version-check');
var Regex = require('./regex');
/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */ exports.NUMERIC = {
    id: 'Numeric',
    bit: 1,
    ccBits: [
        10,
        12,
        14
    ]
};
/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */ exports.ALPHANUMERIC = {
    id: 'Alphanumeric',
    bit: 2,
    ccBits: [
        9,
        11,
        13
    ]
};
/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */ exports.BYTE = {
    id: 'Byte',
    bit: 4,
    ccBits: [
        8,
        16,
        16
    ]
};
/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */ exports.KANJI = {
    id: 'Kanji',
    bit: 8,
    ccBits: [
        8,
        10,
        12
    ]
};
/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */ exports.MIXED = {
    bit: -1
};
/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */ exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);
    if (!VersionCheck.isValid(version)) throw new Error('Invalid version: ' + version);
    if (version >= 1 && version < 10) return mode.ccBits[0];
    else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
};
/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */ exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr)) return exports.KANJI;
    else return exports.BYTE;
};
/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */ exports.toString = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error('Invalid mode');
};
/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */ exports.isValid = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
};
/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */ function fromString(string) {
    if (typeof string !== 'string') throw new Error('Param is not a string');
    var lcStr = string.toLowerCase();
    switch(lcStr){
        case 'numeric':
            return exports.NUMERIC;
        case 'alphanumeric':
            return exports.ALPHANUMERIC;
        case 'kanji':
            return exports.KANJI;
        case 'byte':
            return exports.BYTE;
        default:
            throw new Error('Unknown mode: ' + string);
    }
}
/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */ exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) return value;
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

},{"./version-check":"ieJdy","./regex":"6EWTo"}],"ieJdy":[function(require,module,exports) {
/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */ exports.isValid = function isValid(version) {
    return !isNaN(version) && version >= 1 && version <= 40;
};

},{}],"6EWTo":[function(require,module,exports) {
var numeric = '[0-9]+';
var alphanumeric = '[A-Z $%*+\\-./:]+';
var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
kanji = kanji.replace(/u/g, '\\u');
var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
exports.KANJI = new RegExp(kanji, 'g');
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
exports.BYTE = new RegExp(byte, 'g');
exports.NUMERIC = new RegExp(numeric, 'g');
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
var TEST_KANJI = new RegExp('^' + kanji + '$');
var TEST_NUMERIC = new RegExp('^' + numeric + '$');
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
exports.testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
};
exports.testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
};
exports.testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
};

},{}],"lDKJ9":[function(require,module,exports) {
var Utils = require('./utils');
var G15 = 1335;
var G15_MASK = 21522;
var G15_BCH = Utils.getBCHDigit(G15);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */ exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
    var data = errorCorrectionLevel.bit << 3 | mask;
    var d = data << 10;
    while(Utils.getBCHDigit(d) - G15_BCH >= 0)d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
    // xor final data with mask pattern in order to ensure that
    // no combination of Error Correction Level and data mask pattern
    // will result in an all-zero data string
    return (data << 10 | d) ^ G15_MASK;
};

},{"./utils":"lmGe2"}],"bLMoL":[function(require,module,exports) {
var Mode = require('./mode');
var NumericData = require('./numeric-data');
var AlphanumericData = require('./alphanumeric-data');
var ByteData = require('./byte-data');
var KanjiData = require('./kanji-data');
var Regex = require('./regex');
var Utils = require('./utils');
var dijkstra = require('dijkstrajs');
/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */ function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
}
/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */ function getSegments(regex, mode, str) {
    var segments = [];
    var result;
    while((result = regex.exec(str)) !== null)segments.push({
        data: result[0],
        index: result.index,
        mode: mode,
        length: result[0].length
    });
    return segments;
}
/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */ function getSegmentsFromString(dataStr) {
    var numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
    var alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
    var byteSegs;
    var kanjiSegs;
    if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
    } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
    }
    var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
    }).map(function(obj) {
        return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
        };
    });
}
/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */ function getSegmentBitsLength(length, mode) {
    switch(mode){
        case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
            return KanjiData.getBitsLength(length);
        case Mode.BYTE:
            return ByteData.getBitsLength(length);
    }
}
/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
        var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
        }
        acc.push(curr);
        return acc;
    }, []);
}
/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function buildNodes(segs) {
    var nodes = [];
    for(var i = 0; i < segs.length; i++){
        var seg = segs[i];
        switch(seg.mode){
            case Mode.NUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.ALPHANUMERIC,
                        length: seg.length
                    },
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.ALPHANUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.KANJI:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
                break;
            case Mode.BYTE:
                nodes.push([
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
        }
    }
    return nodes;
}
/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */ function buildGraph(nodes, version) {
    var table = {
    };
    var graph = {
        'start': {
        }
    };
    var prevNodeIds = [
        'start'
    ];
    for(var i = 0; i < nodes.length; i++){
        var nodeGroup = nodes[i];
        var currentNodeIds = [];
        for(var j = 0; j < nodeGroup.length; j++){
            var node = nodeGroup[j];
            var key = '' + i + j;
            currentNodeIds.push(key);
            table[key] = {
                node: node,
                lastCount: 0
            };
            graph[key] = {
            };
            for(var n = 0; n < prevNodeIds.length; n++){
                var prevNodeId = prevNodeIds[n];
                if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                    graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                    table[prevNodeId].lastCount += node.length;
                } else {
                    if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                    graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
                    ;
                }
            }
        }
        prevNodeIds = currentNodeIds;
    }
    for(n = 0; n < prevNodeIds.length; n++)graph[prevNodeIds[n]]['end'] = 0;
    return {
        map: graph,
        table: table
    };
}
/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */ function buildSingleSegment(data, modesHint) {
    var mode;
    var bestMode = Mode.getBestModeForData(data);
    mode = Mode.from(modesHint, bestMode);
    // Make sure data can be encoded
    if (mode !== Mode.BYTE && mode.bit < bestMode.bit) throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
    // Use Mode.BYTE if Kanji support is disabled
    if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) mode = Mode.BYTE;
    switch(mode){
        case Mode.NUMERIC:
            return new NumericData(data);
        case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
        case Mode.KANJI:
            return new KanjiData(data);
        case Mode.BYTE:
            return new ByteData(data);
    }
}
/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */ exports.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
        if (typeof seg === 'string') acc.push(buildSingleSegment(seg, null));
        else if (seg.data) acc.push(buildSingleSegment(seg.data, seg.mode));
        return acc;
    }, []);
};
/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */ exports.fromString = function fromString(data, version) {
    var segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
    var nodes = buildNodes(segs);
    var graph = buildGraph(nodes, version);
    var path = dijkstra.find_path(graph.map, 'start', 'end');
    var optimizedSegs = [];
    for(var i = 1; i < path.length - 1; i++)optimizedSegs.push(graph.table[path[i]].node);
    return exports.fromArray(mergeSegments(optimizedSegs));
};
/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */ exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
};

},{"./mode":"1H9ZH","./numeric-data":"bT0DR","./alphanumeric-data":"lv0Ks","./byte-data":"hiAxJ","./kanji-data":"c7G8B","./regex":"6EWTo","./utils":"lmGe2","dijkstrajs":"hyLUt"}],"bT0DR":[function(require,module,exports) {
var Mode = require('./mode');
function NumericData(data) {
    this.mode = Mode.NUMERIC;
    this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
    var i, group, value;
    // The input data string is divided into groups of three digits,
    // and each group is converted to its 10-bit binary equivalent.
    for(i = 0; i + 3 <= this.data.length; i += 3){
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
    }
    // If the number of input digits is not an exact multiple of three,
    // the final one or two digits are converted to 4 or 7 bits respectively.
    var remainingNum = this.data.length - i;
    if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
    }
};
module.exports = NumericData;

},{"./mode":"1H9ZH"}],"lv0Ks":[function(require,module,exports) {
var Mode = require('./mode');
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */ var ALPHA_NUM_CHARS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ' ',
    '$',
    '%',
    '*',
    '+',
    '-',
    '.',
    '/',
    ':'
];
function AlphanumericData(data) {
    this.mode = Mode.ALPHANUMERIC;
    this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
    var i;
    // Input data characters are divided into groups of two characters
    // and encoded as 11-bit binary codes.
    for(i = 0; i + 2 <= this.data.length; i += 2){
        // The character value of the first character is multiplied by 45
        var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        // The character value of the second digit is added to the product
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
    }
    // If the number of input data characters is not a multiple of two,
    // the character value of the final character is encoded as a 6-bit binary number.
    if (this.data.length % 2) bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
};
module.exports = AlphanumericData;

},{"./mode":"1H9ZH"}],"hiAxJ":[function(require,module,exports) {
var BufferUtil = require('../utils/buffer');
var Mode = require('./mode');
function ByteData(data) {
    this.mode = Mode.BYTE;
    this.data = BufferUtil.from(data);
}
ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
};
ByteData.prototype.getLength = function getLength() {
    return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer) {
    for(var i = 0, l = this.data.length; i < l; i++)bitBuffer.put(this.data[i], 8);
};
module.exports = ByteData;

},{"../utils/buffer":"6dOfr","./mode":"1H9ZH"}],"c7G8B":[function(require,module,exports) {
var Mode = require('./mode');
var Utils = require('./utils');
function KanjiData(data) {
    this.mode = Mode.KANJI;
    this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer) {
    var i;
    // In the Shift JIS system, Kanji characters are represented by a two byte combination.
    // These byte values are shifted from the JIS X 0208 values.
    // JIS X 0208 gives details of the shift coded representation.
    for(i = 0; i < this.data.length; i++){
        var value = Utils.toSJIS(this.data[i]);
        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 33088 && value <= 40956) // Subtract 0x8140 from Shift JIS value
        value -= 33088;
        else if (value >= 57408 && value <= 60351) // Subtract 0xC140 from Shift JIS value
        value -= 49472;
        else throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = (value >>> 8 & 255) * 192 + (value & 255);
        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
    }
};
module.exports = KanjiData;

},{"./mode":"1H9ZH","./utils":"lmGe2"}],"hyLUt":[function(require,module,exports) {
'use strict';
/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/ var dijkstra = {
    single_source_shortest_paths: function(graph, s, d) {
        // Predecessor map for each node that has been encountered.
        // node ID => predecessor node ID
        var predecessors = {
        };
        // Costs of shortest paths from s to all nodes encountered.
        // node ID => cost
        var costs = {
        };
        costs[s] = 0;
        // Costs of shortest paths from s to all nodes encountered; differs from
        // `costs` in that it provides easy access to the node that currently has
        // the known shortest path from s.
        // XXX: Do we actually need both `costs` and `open`?
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while(!open.empty()){
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            // Get nodes adjacent to u...
            adjacent_nodes = graph[u] || {
            };
            // ...and explore the edges that connect u to those nodes, updating
            // the cost of the shortest paths to any or all of those nodes as
            // necessary. v is the node across the current edge from u.
            for(v in adjacent_nodes)if (adjacent_nodes.hasOwnProperty(v)) {
                // Get the cost of the edge running from u to v.
                cost_of_e = adjacent_nodes[v];
                // Cost of s to u plus the cost of u to v across e--this is *a*
                // cost from s to v that may or may not be less than the current
                // known cost to v.
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                // If we haven't visited v yet OR if the current known cost from s to
                // v is greater than the new cost we just found (cost of s to u plus
                // cost of u to v across e), update v's cost in the cost list and
                // update v's predecessor in the predecessor list (it's now u).
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === 'undefined';
                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                    costs[v] = cost_of_s_to_u_plus_cost_of_e;
                    open.push(v, cost_of_s_to_u_plus_cost_of_e);
                    predecessors[v] = u;
                }
            }
        }
        if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
            var msg = [
                'Could not find a path from ',
                s,
                ' to ',
                d,
                '.'
            ].join('');
            throw new Error(msg);
        }
        return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while(u){
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
    },
    find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },
    /**
   * A very naive priority queue implementation.
   */ PriorityQueue: {
        make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {
            }, key;
            opts = opts || {
            };
            for(key in T)if (T.hasOwnProperty(key)) t[key] = T[key];
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
        },
        default_sorter: function(a, b) {
            return a.cost - b.cost;
        },
        /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */ push: function(value, cost) {
            var item = {
                value: value,
                cost: cost
            };
            this.queue.push(item);
            this.queue.sort(this.sorter);
        },
        /**
     * Return the highest priority element in the queue.
     */ pop: function() {
            return this.queue.shift();
        },
        empty: function() {
            return this.queue.length === 0;
        }
    }
};
// node.js module exports
if (typeof module !== 'undefined') module.exports = dijkstra;

},{}],"2VHfR":[function(require,module,exports) {
var Utils = require('./utils');
function clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {
    };
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + 'px';
    canvas.style.width = size + 'px';
}
function getCanvasElement() {
    try {
        return document.createElement('canvas');
    } catch (e) {
        throw new Error('You need to specify a canvas element');
    }
}
exports.render = function render(qrData, canvas, options) {
    var opts = options;
    var canvasEl = canvas;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!canvas) canvasEl = getCanvasElement();
    opts = Utils.getOptions(opts);
    var size = Utils.getImageWidth(qrData.modules.size, opts);
    var ctx = canvasEl.getContext('2d');
    var image = ctx.createImageData(size, size);
    Utils.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
};
exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
    var opts = options;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!opts) opts = {
    };
    var canvasEl = exports.render(qrData, canvas, opts);
    var type = opts.type || 'image/png';
    var rendererOpts = opts.rendererOpts || {
    };
    return canvasEl.toDataURL(type, rendererOpts.quality);
};

},{"./utils":"jOO7G"}],"jOO7G":[function(require,module,exports) {
function hex2rgba(hex) {
    if (typeof hex === 'number') hex = hex.toString();
    if (typeof hex !== 'string') throw new Error('Color should be defined as hex string');
    var hexCode = hex.slice().replace('#', '').split('');
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) throw new Error('Invalid hex color: ' + hex);
    // Convert from short to long form (fff -> ffffff)
    if (hexCode.length === 3 || hexCode.length === 4) hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
        return [
            c,
            c
        ];
    }));
    // Add default alpha value
    if (hexCode.length === 6) hexCode.push('F', 'F');
    var hexValue = parseInt(hexCode.join(''), 16);
    return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: '#' + hexCode.slice(0, 6).join('')
    };
}
exports.getOptions = function getOptions(options) {
    if (!options) options = {
    };
    if (!options.color) options.color = {
    };
    var margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
    var width = options.width && options.width >= 21 ? options.width : undefined;
    var scale = options.scale || 4;
    return {
        width: width,
        scale: width ? 4 : scale,
        margin: margin,
        color: {
            dark: hex2rgba(options.color.dark || '#000000ff'),
            light: hex2rgba(options.color.light || '#ffffffff')
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {
        }
    };
};
exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
exports.getImageWidth = function getImageWidth(qrSize, opts) {
    var scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
};
exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    var size = qr.modules.size;
    var data = qr.modules.data;
    var scale = exports.getScale(size, opts);
    var symbolSize = Math.floor((size + opts.margin * 2) * scale);
    var scaledMargin = opts.margin * scale;
    var palette = [
        opts.color.light,
        opts.color.dark
    ];
    for(var i = 0; i < symbolSize; i++)for(var j = 0; j < symbolSize; j++){
        var posDst = (i * symbolSize + j) * 4;
        var pxColor = opts.color.light;
        if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            var iSrc = Math.floor((i - scaledMargin) / scale);
            var jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
        }
        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
    }
};

},{}],"8noPI":[function(require,module,exports) {
var Utils = require('./utils');
function getColorAttrib(color, attrib) {
    var alpha = color.a / 255;
    var str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
    var str = cmd + x;
    if (typeof y !== 'undefined') str += ' ' + y;
    return str;
}
function qrToPath(data, size, margin) {
    var path = '';
    var moveBy = 0;
    var newRow = false;
    var lineLength = 0;
    for(var i = 0; i < data.length; i++){
        var col = Math.floor(i % size);
        var row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
                moveBy = 0;
                newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
                path += svgCmd('h', lineLength);
                lineLength = 0;
            }
        } else moveBy++;
    }
    return path;
}
exports.render = function render(qrData, options, cb) {
    var opts = Utils.getOptions(options);
    var size = qrData.modules.size;
    var data = qrData.modules.data;
    var qrcodesize = size + opts.margin * 2;
    var bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
    var path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    var viewBox = "viewBox=\"0 0 " + qrcodesize + ' ' + qrcodesize + '"';
    var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
    var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
    if (typeof cb === 'function') cb(null, svgTag);
    return svgTag;
};

},{"./utils":"jOO7G"}],"6ec77":[function(require,module,exports) {
"use strict";
var deselectCurrent = require("toggle-selection");
var clipboardToIE11Formatting = {
    "text/plain": "Text",
    "text/html": "Url",
    "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format1(message) {
    var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
    var debug, message, reselectPrevious, range, selection, mark, success = false;
    if (!options) options = {
    };
    debug = options.debug || false;
    try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        // reset user styles for span element
        mark.style.all = "unset";
        // prevents scrolling to the end of the page
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        // used to preserve spaces and line breaks
        mark.style.whiteSpace = "pre";
        // do not inherit user-select (it may be `none`)
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
            e.stopPropagation();
            if (options.format) {
                e.preventDefault();
                if (typeof e.clipboardData === "undefined") {
                    debug && console.warn("unable to use e.clipboardData");
                    debug && console.warn("trying IE specific stuff");
                    window.clipboardData.clearData();
                    var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
                    window.clipboardData.setData(format, text);
                } else {
                    e.clipboardData.clearData();
                    e.clipboardData.setData(options.format, text);
                }
            }
            if (options.onCopy) {
                e.preventDefault();
                options.onCopy(e.clipboardData);
            }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) throw new Error("copy command was unsuccessful");
        success = true;
    } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
            window.clipboardData.setData(options.format || "text", text);
            options.onCopy && options.onCopy(window.clipboardData);
            success = true;
        } catch (err) {
            debug && console.error("unable to copy using clipboardData: ", err);
            debug && console.error("falling back to prompt");
            message = format1("message" in options ? options.message : defaultMessage);
            window.prompt(message, text);
        }
    } finally{
        if (selection) {
            if (typeof selection.removeRange == "function") selection.removeRange(range);
            else selection.removeAllRanges();
        }
        if (mark) document.body.removeChild(mark);
        reselectPrevious();
    }
    return success;
}
module.exports = copy;

},{"toggle-selection":"ckRMX"}],"ckRMX":[function(require,module,exports) {
module.exports = function() {
    var selection = document.getSelection();
    if (!selection.rangeCount) return function() {
    };
    var active = document.activeElement;
    var ranges = [];
    for(var i = 0; i < selection.rangeCount; i++)ranges.push(selection.getRangeAt(i));
    switch(active.tagName.toUpperCase()){
        case 'INPUT':
        case 'TEXTAREA':
            active.blur();
            break;
        default:
            active = null;
            break;
    }
    selection.removeAllRanges();
    return function() {
        selection.type === 'Caret' && selection.removeAllRanges();
        if (!selection.rangeCount) ranges.forEach(function(range) {
            selection.addRange(range);
        });
        active && active.focus();
    };
};

},{}],"iHK1n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>_preact.createElement
);
parcelHelpers.export(exports, "createContext", ()=>_preact.createContext
);
parcelHelpers.export(exports, "createRef", ()=>_preact.createRef
);
parcelHelpers.export(exports, "Fragment", ()=>_preact.Fragment
);
parcelHelpers.export(exports, "Component", ()=>_preact.Component
);
parcelHelpers.export(exports, "version", ()=>B
);
parcelHelpers.export(exports, "Children", ()=>R
);
parcelHelpers.export(exports, "render", ()=>T
);
parcelHelpers.export(exports, "hydrate", ()=>V
);
parcelHelpers.export(exports, "unmountComponentAtNode", ()=>Q
);
parcelHelpers.export(exports, "createPortal", ()=>z
);
parcelHelpers.export(exports, "createFactory", ()=>G
);
parcelHelpers.export(exports, "cloneElement", ()=>K
);
parcelHelpers.export(exports, "isValidElement", ()=>J
);
parcelHelpers.export(exports, "findDOMNode", ()=>X
);
parcelHelpers.export(exports, "PureComponent", ()=>C
);
parcelHelpers.export(exports, "memo", ()=>_
);
parcelHelpers.export(exports, "forwardRef", ()=>S
);
parcelHelpers.export(exports, "unstable_batchedUpdates", ()=>Y
);
parcelHelpers.export(exports, "Suspense", ()=>U
);
parcelHelpers.export(exports, "SuspenseList", ()=>O
);
parcelHelpers.export(exports, "lazy", ()=>L
);
var _hooks = require("preact/hooks");
var _preact = require("preact");
parcelHelpers.exportAll(_hooks, exports);
function E(n, t) {
    for(var e in t)n[e] = t[e];
    return n;
}
function w(n, t) {
    for(var e in n)if ("__source" !== e && !(e in t)) return !0;
    for(var r in t)if ("__source" !== r && n[r] !== t[r]) return !0;
    return !1;
}
var C = function(n1) {
    var t1, e1;
    function r(t) {
        var e;
        return (e = n1.call(this, t) || this).isPureReactComponent = !0, e;
    }
    return e1 = n1, (t1 = r).prototype = Object.create(e1.prototype), t1.prototype.constructor = t1, t1.__proto__ = e1, r.prototype.shouldComponentUpdate = function(n, t) {
        return w(this.props, n) || w(this.state, t);
    }, r;
}(_preact.Component);
function _(n2, t2) {
    function e2(n) {
        var e = this.props.ref, r = e == n.ref;
        return !r && e && (e.call ? e(null) : e.current = null), t2 ? !t2(this.props, n) || !r : w(this.props, n);
    }
    function r1(t) {
        return this.shouldComponentUpdate = e2, _preact.createElement(n2, E({
        }, t));
    }
    return r1.prototype.isReactComponent = !0, r1.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r1.t = !0, r1;
}
var A = _preact.options.__b;
function S(n) {
    function t3(t) {
        var e = E({
        }, t);
        return delete e.ref, n(e, t.ref);
    }
    return t3.prototype.isReactComponent = t3.t = !0, t3.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t3;
}
_preact.options.__b = function(n) {
    n.type && n.type.t && n.ref && (n.props.ref = n.ref, n.ref = null), A && A(n);
};
var k = function(n3, t) {
    return n3 ? _preact.toChildArray(n3).reduce(function(n, e, r) {
        return n.concat(t(e, r));
    }, []) : null;
}, R = {
    map: k,
    forEach: k,
    count: function(n) {
        return n ? _preact.toChildArray(n).length : 0;
    },
    only: function(n) {
        if (1 !== (n = _preact.toChildArray(n)).length) throw new Error("Children.only() expects only one child.");
        return n[0];
    },
    toArray: _preact.toChildArray
}, F = _preact.options.__e;
function N(n) {
    return n && ((n = E({
    }, n)).__c = null, n.__k = n.__k && n.__k.map(N)), n;
}
function U() {
    this.__u = 0, this.o = null, this.__b = null;
}
function M(n) {
    var t = n.__.__c;
    return t && t.u && t.u(n);
}
function L(n4) {
    var t, e, r;
    function o1(o) {
        if (t || (t = n4()).then(function(n) {
            e = n.default || n;
        }, function(n) {
            r = n;
        }), r) throw r;
        if (!e) throw t;
        return _preact.createElement(e, o);
    }
    return o1.displayName = "Lazy", o1.t = !0, o1;
}
function O() {
    this.i = null, this.l = null;
}
_preact.options.__e = function(n, t, e) {
    if (n.then) {
        for(var r, o = t; o = o.__;)if ((r = o.__c) && r.__c) return r.__c(n, t.__c);
    }
    F(n, t, e);
}, (U.prototype = new _preact.Component).__c = function(n5, t) {
    var e = this;
    null == e.o && (e.o = []), e.o.push(t);
    var r = M(e.__v), o = !1, u = function() {
        o || (o = !0, r ? r(i) : i());
    };
    t.__c = t.componentWillUnmount, t.componentWillUnmount = function() {
        u(), t.__c && t.__c();
    };
    var i = function() {
        var n;
        if (!--e.__u) for(e.__v.__k[0] = e.state.u, e.setState({
            u: e.__b = null
        }); n = e.o.pop();)n.forceUpdate();
    };
    e.__u++ || e.setState({
        u: e.__b = e.__v.__k[0]
    }), n5.then(u, u);
}, U.prototype.render = function(n, t) {
    return this.__b && (this.__v.__k[0] = N(this.__b), this.__b = null), [
        _preact.createElement(_preact.Component, null, t.u ? null : n.children),
        t.u && n.fallback
    ];
};
var P = function(n, t, e) {
    if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for(e = n.i; e;){
        for(; e.length > 3;)e.pop()();
        if (e[1] < e[0]) break;
        n.i = e = e[2];
    }
};
(O.prototype = new _preact.Component).u = function(n) {
    var t = this, e = M(t.__v), r = t.l.get(n);
    return r[0]++, function(o) {
        var u = function() {
            t.props.revealOrder ? (r.push(o), P(t, n, r)) : o();
        };
        e ? e(u) : u();
    };
}, O.prototype.render = function(n) {
    this.i = null, this.l = new Map;
    var t = _preact.toChildArray(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for(var e = t.length; e--;)this.l.set(t[e], this.i = [
        1,
        0,
        this.i
    ]);
    return n.children;
}, O.prototype.componentDidUpdate = O.prototype.componentDidMount = function() {
    var n = this;
    n.l.forEach(function(t, e) {
        P(n, e, t);
    });
};
var W = function() {
    function n6() {
    }
    var t = n6.prototype;
    return t.getChildContext = function() {
        return this.props.context;
    }, t.render = function(n) {
        return n.children;
    }, n6;
}();
function j(n) {
    var t = this, e = n.container, r = _preact.createElement(W, {
        context: t.context
    }, n.vnode);
    return t.s && t.s !== e && (t.v.parentNode && t.s.removeChild(t.v), _preact._unmount(t.h), t.p = !1), n.vnode ? t.p ? (e.__k = t.__k, _preact.render(r, e), t.__k = e.__k) : (t.v = document.createTextNode(""), _preact.hydrate("", e), e.appendChild(t.v), t.p = !0, t.s = e, _preact.render(r, e, t.v), t.__k = t.v.__k) : t.p && (t.v.parentNode && t.s.removeChild(t.v), _preact._unmount(t.h)), t.h = r, t.componentWillUnmount = function() {
        t.v.parentNode && t.s.removeChild(t.v), _preact._unmount(t.h);
    }, null;
}
function z(n, t) {
    return _preact.createElement(j, {
        vnode: n,
        container: t
    });
}
var D = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
_preact.Component.prototype.isReactComponent = {
};
var H = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
function T(n, t, e) {
    if (null == t.__k) for(; t.firstChild;)t.removeChild(t.firstChild);
    return _preact.render(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function V(n, t, e) {
    return _preact.hydrate(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
var Z = _preact.options.event;
function I(n7, t) {
    n7["UNSAFE_" + t] && !n7[t] && Object.defineProperty(n7, t, {
        configurable: !1,
        get: function() {
            return this["UNSAFE_" + t];
        },
        set: function(n) {
            this["UNSAFE_" + t] = n;
        }
    });
}
_preact.options.event = function(n) {
    Z && (n = Z(n)), n.persist = function() {
    };
    var t = !1, e = !1, r = n.stopPropagation;
    n.stopPropagation = function() {
        r.call(n), t = !0;
    };
    var o = n.preventDefault;
    return n.preventDefault = function() {
        o.call(n), e = !0;
    }, n.isPropagationStopped = function() {
        return t;
    }, n.isDefaultPrevented = function() {
        return e;
    }, n.nativeEvent = n;
};
var $ = {
    configurable: !0,
    get: function() {
        return this.class;
    }
}, q = _preact.options.vnode;
_preact.options.vnode = function(n8) {
    n8.$$typeof = H;
    var t = n8.type, e3 = n8.props;
    if (t) {
        if (e3.class != e3.className && ($.enumerable = "className" in e3, null != e3.className && (e3.class = e3.className), Object.defineProperty(e3, "className", $)), "function" != typeof t) {
            var r, o, u;
            for(u in e3.defaultValue && void 0 !== e3.value && (e3.value || 0 === e3.value || (e3.value = e3.defaultValue), delete e3.defaultValue), Array.isArray(e3.value) && e3.multiple && "select" === t && (_preact.toChildArray(e3.children).forEach(function(n) {
                -1 != e3.value.indexOf(n.props.value) && (n.props.selected = !0);
            }), delete e3.value), e3)if (r = D.test(u)) break;
            if (r) for(u in o = n8.props = {
            }, e3)o[D.test(u) ? u.replace(/[A-Z0-9]/, "-$&").toLowerCase() : u] = e3[u];
        }
        !function(t) {
            var e = n8.type, r = n8.props;
            if (r && "string" == typeof e) {
                var o = {
                };
                for(var u in r)/^on(Ani|Tra|Tou)/.test(u) && (r[u.toLowerCase()] = r[u], delete r[u]), o[u.toLowerCase()] = u;
                if (o.ondoubleclick && (r.ondblclick = r[o.ondoubleclick], delete r[o.ondoubleclick]), o.onbeforeinput && (r.onbeforeinput = r[o.onbeforeinput], delete r[o.onbeforeinput]), o.onchange && ("textarea" === e || "input" === e.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
                    var i = o.oninput || "oninput";
                    r[i] || (r[i] = r[o.onchange], delete r[o.onchange]);
                }
            }
        }(), "function" == typeof t && !t.m && t.prototype && (I(t.prototype, "componentWillMount"), I(t.prototype, "componentWillReceiveProps"), I(t.prototype, "componentWillUpdate"), t.m = !0);
    }
    q && q(n8);
};
var B = "16.8.0";
function G(n) {
    return _preact.createElement.bind(null, n);
}
function J(n) {
    return !!n && n.$$typeof === H;
}
function K(n) {
    return J(n) ? _preact.cloneElement.apply(null, arguments) : n;
}
function Q(n) {
    return !!n.__k && (_preact.render(null, n), !0);
}
function X(n) {
    return n && (n.base || 1 === n.nodeType && n) || null;
}
var Y = function(n, t) {
    return n(t);
};
exports.default = {
    useState: _hooks.useState,
    useReducer: _hooks.useReducer,
    useEffect: _hooks.useEffect,
    useLayoutEffect: _hooks.useLayoutEffect,
    useRef: _hooks.useRef,
    useImperativeHandle: _hooks.useImperativeHandle,
    useMemo: _hooks.useMemo,
    useCallback: _hooks.useCallback,
    useContext: _hooks.useContext,
    useDebugValue: _hooks.useDebugValue,
    version: "16.8.0",
    Children: R,
    render: T,
    hydrate: T,
    unmountComponentAtNode: Q,
    createPortal: z,
    createElement: _preact.createElement,
    createContext: _preact.createContext,
    createFactory: G,
    cloneElement: K,
    createRef: _preact.createRef,
    Fragment: _preact.Fragment,
    isValidElement: J,
    findDOMNode: X,
    Component: _preact.Component,
    PureComponent: C,
    memo: _,
    forwardRef: S,
    unstable_batchedUpdates: Y,
    Suspense: U,
    SuspenseList: O,
    lazy: L
};

},{"preact/hooks":"9nn6o","preact":"8Vmkr","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"9nn6o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useState", ()=>m
);
parcelHelpers.export(exports, "useReducer", ()=>p
);
parcelHelpers.export(exports, "useEffect", ()=>l
);
parcelHelpers.export(exports, "useLayoutEffect", ()=>y
);
parcelHelpers.export(exports, "useRef", ()=>d
);
parcelHelpers.export(exports, "useImperativeHandle", ()=>s
);
parcelHelpers.export(exports, "useMemo", ()=>h
);
parcelHelpers.export(exports, "useCallback", ()=>T
);
parcelHelpers.export(exports, "useContext", ()=>w
);
parcelHelpers.export(exports, "useDebugValue", ()=>A
);
parcelHelpers.export(exports, "useErrorBoundary", ()=>F
);
var _preact = require("preact");
var t1, u1, r1, i1 = 0, o1 = [], c = _preact.options.__r, f = _preact.options.diffed, e = _preact.options.__c, a = _preact.options.unmount;
function v(t, r) {
    _preact.options.__h && _preact.options.__h(u1, t, i1 || r), i1 = 0;
    var o = u1.__H || (u1.__H = {
        __: [],
        __h: []
    });
    return t >= o.__.length && o.__.push({
    }), o.__[t];
}
function m(n) {
    return i1 = 1, p(E, n);
}
function p(n, r, i) {
    var o = v(t1++, 2);
    return o.__c || (o.__c = u1, o.__ = [
        i ? i(r) : E(void 0, r),
        function(t) {
            var u = n(o.__[0], t);
            o.__[0] !== u && (o.__[0] = u, o.__c.setState({
            }));
        }
    ]), o.__;
}
function l(r, i) {
    var o = v(t1++, 3);
    !_preact.options.__s && x(o.__H, i) && (o.__ = r, o.__H = i, u1.__H.__h.push(o));
}
function y(r, i) {
    var o = v(t1++, 4);
    !_preact.options.__s && x(o.__H, i) && (o.__ = r, o.__H = i, u1.__h.push(o));
}
function d(n) {
    return i1 = 5, h(function() {
        return {
            current: n
        };
    }, []);
}
function s(n, t, u) {
    i1 = 6, y(function() {
        "function" == typeof n ? n(t()) : n && (n.current = t());
    }, null == u ? u : u.concat(n));
}
function h(n, u) {
    var r = v(t1++, 7);
    return x(r.__H, u) ? (r.__H = u, r.__h = n, r.__ = n()) : r.__;
}
function T(n, t) {
    return i1 = 8, h(function() {
        return n;
    }, t);
}
function w(n) {
    var r = u1.context[n.__c], i = v(t1++, 9);
    return i.__c = n, r ? (null == i.__ && (i.__ = !0, r.sub(u1)), r.props.value) : n.__;
}
function A(t, u) {
    _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}
function F(n1) {
    var r = v(t1++, 10), i = m();
    return r.__ = n1, u1.componentDidCatch || (u1.componentDidCatch = function(n) {
        r.__ && r.__(n), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function _() {
    o1.some(function(t) {
        if (t.__P) try {
            t.__H.__h.forEach(g), t.__H.__h.forEach(q), t.__H.__h = [];
        } catch (u) {
            return t.__H.__h = [], _preact.options.__e(u, t.__v), !0;
        }
    }), o1 = [];
}
function g(n) {
    n.t && n.t();
}
function q(n) {
    var t = n.__();
    "function" == typeof t && (n.t = t);
}
function x(n, t2) {
    return !n || t2.some(function(t, u) {
        return t !== n[u];
    });
}
function E(n, t) {
    return "function" == typeof t ? t(n) : t;
}
_preact.options.__r = function(n) {
    c && c(n), t1 = 0, (u1 = n.__c).__H && (u1.__H.__h.forEach(g), u1.__H.__h.forEach(q), u1.__H.__h = []);
}, _preact.options.diffed = function(t3) {
    f && f(t3);
    var u2 = t3.__c;
    if (u2) {
        var i = u2.__H;
        i && i.__h.length && (1 !== o1.push(u2) && r1 === _preact.options.requestAnimationFrame || ((r1 = _preact.options.requestAnimationFrame) || function(n) {
            var t, u = function() {
                clearTimeout(r), cancelAnimationFrame(t), setTimeout(n);
            }, r = setTimeout(u, 100);
            "undefined" != typeof window && (t = requestAnimationFrame(u));
        })(_));
    }
}, _preact.options.__c = function(t4, u) {
    u.some(function(t) {
        try {
            t.__h.forEach(g), t.__h = t.__h.filter(function(n) {
                return !n.__ || q(n);
            });
        } catch (r) {
            u.some(function(n) {
                n.__h && (n.__h = []);
            }), u = [], _preact.options.__e(r, t.__v);
        }
    }), e && e(t4, u);
}, _preact.options.unmount = function(t) {
    a && a(t);
    var u = t.__c;
    if (u) {
        var r = u.__H;
        if (r) try {
            r.__.forEach(function(n) {
                return n.t && n.t();
            });
        } catch (t) {
            _preact.options.__e(t, u.__v);
        }
    }
};

},{"preact":"8Vmkr","@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"8Vmkr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>H
);
parcelHelpers.export(exports, "hydrate", ()=>I
);
parcelHelpers.export(exports, "createElement", ()=>h1
);
parcelHelpers.export(exports, "h", ()=>h1
);
parcelHelpers.export(exports, "Fragment", ()=>d1
);
parcelHelpers.export(exports, "createRef", ()=>y1
);
parcelHelpers.export(exports, "isValidElement", ()=>l1
);
parcelHelpers.export(exports, "Component", ()=>m1
);
parcelHelpers.export(exports, "cloneElement", ()=>L
);
parcelHelpers.export(exports, "createContext", ()=>M
);
parcelHelpers.export(exports, "toChildArray", ()=>x1
);
parcelHelpers.export(exports, "_unmount", ()=>D
);
parcelHelpers.export(exports, "options", ()=>n1
);
var n1, l1, u1, i1, t1, r1, o1, f1, e1 = {
}, c1 = [], s1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function a1(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function v1(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
}
function h1(n, l, u) {
    var i, t = arguments, r = {
    };
    for(i in l)"key" !== i && "ref" !== i && (r[i] = l[i]);
    if (arguments.length > 3) for(u = [
        u
    ], i = 3; i < arguments.length; i++)u.push(t[i]);
    if (null != u && (r.children = u), "function" == typeof n && null != n.defaultProps) for(i in n.defaultProps)void 0 === r[i] && (r[i] = n.defaultProps[i]);
    return p1(n, r, l && l.key, l && l.ref, null);
}
function p1(l, u, i, t, r) {
    var o = {
        type: l,
        props: u,
        key: i,
        ref: t,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: r
    };
    return null == r && (o.__v = o), n1.vnode && n1.vnode(o), o;
}
function y1() {
    return {
    };
}
function d1(n) {
    return n.children;
}
function m1(n, l) {
    this.props = n, this.context = l;
}
function w1(n, l) {
    if (null == l) return n.__ ? w1(n.__, n.__.__k.indexOf(n) + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? w1(n) : null;
}
function k1(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return k1(n);
    }
}
function g1(l) {
    (!l.__d && (l.__d = !0) && u1.push(l) && !i1++ || r1 !== n1.debounceRendering) && ((r1 = n1.debounceRendering) || t1)(_1);
}
function _1() {
    for(var n2; i1 = u1.length;)n2 = u1.sort(function(n, l) {
        return n.__v.__b - l.__v.__b;
    }), u1 = [], n2.some(function(n) {
        var l, u, i, t, r, o, f;
        n.__d && (o = (r = (l = n).__v).__e, (f = l.__P) && (u = [], (i = a1({
        }, r)).__v = i, t = A(f, r, i, l.__n, void 0 !== f.ownerSVGElement, null, u, null == o ? w1(r) : o), T(u, r), t != o && k1(r)));
    });
}
function b(n, l, u2, i, t, r, o, f, s) {
    var a, h, p, y, d, m, k, g = u2 && u2.__k || c1, _ = g.length;
    if (f == e1 && (f = null != r ? r[0] : _ ? w1(u2, 0) : null), a = 0, l.__k = x1(l.__k, function(u) {
        if (null != u) {
            if (u.__ = l, u.__b = l.__b + 1, null === (p = g[a]) || p && u.key == p.key && u.type === p.type) g[a] = void 0;
            else for(h = 0; h < _; h++){
                if ((p = g[h]) && u.key == p.key && u.type === p.type) {
                    g[h] = void 0;
                    break;
                }
                p = null;
            }
            if (y = A(n, u, p = p || e1, i, t, r, o, f, s), (h = u.ref) && p.ref != h && (k || (k = []), p.ref && k.push(p.ref, null, u), k.push(h, u.__c || y, u)), null != y) {
                var c;
                if (null == m && (m = y), void 0 !== u.__d) c = u.__d, u.__d = void 0;
                else if (r == p || y != f || null == y.parentNode) {
                    n: if (null == f || f.parentNode !== n) n.appendChild(y), c = null;
                    else {
                        for(d = f, h = 0; (d = d.nextSibling) && h < _; h += 2)if (d == y) break n;
                        n.insertBefore(y, f), c = f;
                    }
                    "option" == l.type && (n.value = "");
                }
                f = void 0 !== c ? c : y.nextSibling, "function" == typeof l.type && (l.__d = f);
            } else f && p.__e == f && f.parentNode != n && (f = w1(p));
        }
        return a++, u;
    }), l.__e = m, null != r && "function" != typeof l.type) for(a = r.length; a--;)null != r[a] && v1(r[a]);
    for(a = _; a--;)null != g[a] && D(g[a], g[a]);
    if (k) for(a = 0; a < k.length; a++)j(k[a], k[++a], k[++a]);
}
function x1(n, l, u) {
    if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));
    else if (Array.isArray(n)) for(var i = 0; i < n.length; i++)x1(n[i], l, u);
    else u.push(l ? l("string" == typeof n || "number" == typeof n ? p1(null, n, null, null, n) : null != n.__e || null != n.__c ? p1(n.type, n.props, n.key, null, n.__v) : n) : n);
    return u;
}
function P1(n, l, u, i, t) {
    var r;
    for(r in u)"children" === r || "key" === r || r in l || N(n, r, null, u[r], i);
    for(r in l)t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || N(n, r, l[r], u[r], i);
}
function C(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === s1.test(l) ? u + "px" : null == u ? "" : u;
}
function N(n, l, u, i, t) {
    var r, o, f, e, c;
    if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "style" === l) {
        if (r = n.style, "string" == typeof u) r.cssText = u;
        else {
            if ("string" == typeof i && (r.cssText = "", i = null), i) for(e in i)u && e in u || C(r, e, "");
            if (u) for(c in u)i && u[c] === i[c] || C(r, c, u[c]);
        }
    } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), f = l.toLowerCase(), l = (f in n ? f : l).slice(2), u ? (i || n.addEventListener(l, z, o), (n.l || (n.l = {
    }))[l] = u) : n.removeEventListener(l, z, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}
function z(l) {
    this.l[l.type](n1.event ? n1.event(l) : l);
}
function A(l, u, i, t, r, o, f, e, c) {
    var s, v, h, p, y, w, k, g, _, x, P = u.type;
    if (void 0 !== u.constructor) return null;
    (s = n1.__b) && s(u);
    try {
        n: if ("function" == typeof P) {
            if (g = u.props, _ = (s = P.contextType) && t[s.__c], x = s ? _ ? _.props.value : s.__ : t, i.__c ? k = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new m1(g, x), v.constructor = P, v.render = E), _ && _.sub(v), v.props = g, v.state || (v.state = {
            }), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = a1({
            }, v.__s)), a1(v.__s, P.getDerivedStateFromProps(g, v.__s))), p = v.props, y = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);
            else {
                if (null == P.getDerivedStateFromProps && g !== p && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v && !v.__) {
                    for(v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), s = 0; s < u.__k.length; s++)u.__k[s] && (u.__k[s].__ = u);
                    break n;
                }
                null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function() {
                    v.componentDidUpdate(p, y, w);
                });
            }
            v.context = x, v.props = g, v.state = v.__s, (s = n1.__r) && s(u), v.__d = !1, v.__v = u, v.__P = l, s = v.render(v.props, v.state, v.context), u.__k = null != s && s.type == d1 && null == s.key ? s.props.children : Array.isArray(s) ? s : [
                s
            ], null != v.getChildContext && (t = a1(a1({
            }, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(p, y)), b(l, u, i, t, r, o, f, e, c), v.base = u.__e, v.__h.length && f.push(v), k && (v.__E = v.__ = null), v.__e = !1;
        } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = $(i.__e, u, i, t, r, o, f, c);
        (s = n1.diffed) && s(u);
    } catch (l2) {
        u.__v = null, n1.__e(l2, u, i);
    }
    return u.__e;
}
function T(l3, u3) {
    n1.__c && n1.__c(u3, l3), l3.some(function(u) {
        try {
            l3 = u.__h, u.__h = [], l3.some(function(n) {
                n.call(u);
            });
        } catch (l) {
            n1.__e(l, u.__v);
        }
    });
}
function $(n, l, u, i, t, r, o, f) {
    var s, a, v, h, p, y = u.props, d = l.props;
    if (t = "svg" === l.type || t, null != r) {
        for(s = 0; s < r.length; s++)if (null != (a = r[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
            n = a, r[s] = null;
            break;
        }
    }
    if (null == n) {
        if (null === l.type) return document.createTextNode(d);
        n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
            is: d.is
        }), r = null, f = !1;
    }
    if (null === l.type) y !== d && n.data != d && (n.data = d);
    else {
        if (null != r && (r = c1.slice.call(n.childNodes)), v = (y = u.props || e1).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !f) {
            if (y === e1) for(y = {
            }, p = 0; p < n.attributes.length; p++)y[n.attributes[p].name] = n.attributes[p].value;
            (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
        }
        P1(n, d, y, t, f), h ? l.__k = [] : (l.__k = l.props.children, b(n, l, u, i, "foreignObject" !== l.type && t, r, o, e1, f)), f || ("value" in d && void 0 !== (s = d.value) && s !== n.value && N(n, "value", s, y.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && N(n, "checked", s, y.checked, !1));
    }
    return n;
}
function j(l, u, i) {
    try {
        "function" == typeof l ? l(u) : l.current = u;
    } catch (l4) {
        n1.__e(l4, i);
    }
}
function D(l, u, i) {
    var t, r, o;
    if (n1.unmount && n1.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || j(t, null, u)), i || "function" == typeof l.type || (i = null != (r = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
        if (t.componentWillUnmount) try {
            t.componentWillUnmount();
        } catch (l) {
            n1.__e(l, u);
        }
        t.base = t.__P = null;
    }
    if (t = l.__k) for(o = 0; o < t.length; o++)t[o] && D(t[o], u, i);
    null != r && v1(r);
}
function E(n, l, u) {
    return this.constructor(n, u);
}
function H(l, u, i) {
    var t, r, f;
    n1.__ && n1.__(l, u), r = (t = i === o1) ? null : i && i.__k || u.__k, l = h1(d1, null, [
        l
    ]), f = [], A(u, (t ? u : i || u).__k = l, r || e1, e1, void 0 !== u.ownerSVGElement, i && !t ? [
        i
    ] : r ? null : c1.slice.call(u.childNodes), f, i || e1, t), T(f, l);
}
function I(n, l) {
    H(n, l, o1);
}
function L(n, l) {
    var u, i;
    for(i in l = a1(a1({
    }, n.props), l), arguments.length > 2 && (l.children = c1.slice.call(arguments, 2)), u = {
    }, l)"key" !== i && "ref" !== i && (u[i] = l[i]);
    return p1(n.type, u, l.key || n.key, l.ref || n.ref, null);
}
function M(n3) {
    var l5 = {
    }, u = {
        __c: "__cC" + f1++,
        __: n3,
        Consumer: function(n, l) {
            return n.children(l);
        },
        Provider: function(n4) {
            var i, t = this;
            return this.getChildContext || (i = [], this.getChildContext = function() {
                return l5[u.__c] = t, l5;
            }, this.shouldComponentUpdate = function(n) {
                t.props.value !== n.value && i.some(function(l) {
                    l.context = n.value, g1(l);
                });
            }, this.sub = function(n) {
                i.push(n);
                var l = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    i.splice(i.indexOf(n), 1), l && l.call(n);
                };
            }), n4.children;
        }
    };
    return u.Consumer.contextType = u, u.Provider.__ = u, u;
}
n1 = {
    __e: function(n, l) {
        for(var u, i; l = l.__;)if ((u = l.__c) && !u.__) try {
            if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return g1(u.__E = u);
        } catch (l6) {
            n = l6;
        }
        throw n;
    }
}, l1 = function(n) {
    return null != n && void 0 === n.constructor;
}, m1.prototype.setState = function(n, l) {
    var u;
    u = this.__s !== this.state ? this.__s : this.__s = a1({
    }, this.state), "function" == typeof n && (n = n(u, this.props)), n && a1(u, n), null != n && this.__v && (l && this.__h.push(l), g1(this));
}, m1.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), g1(this));
}, m1.prototype.render = d1, u1 = [], i1 = 0, t1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o1 = e1, f1 = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"c7Wrj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./constants"), exports);
tslib_1.__exportStar(require("./error"), exports);
tslib_1.__exportStar(require("./env"), exports);
tslib_1.__exportStar(require("./format"), exports);
tslib_1.__exportStar(require("./routing"), exports);
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./validators"), exports);

},{"tslib":"jVISA","./constants":"jtXdw","./error":"cbQ8H","./env":"5n7dM","./format":"liJoc","./routing":"647Lg","./types":"9k3Os","./validators":"j5NSH"}],"jVISA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread
);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var i, p;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
    return i = {
    }, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iPXTn"}],"jtXdw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.STANDARD_ERROR_MAP = exports.SERVER_ERROR_CODE_RANGE = exports.RESERVED_ERROR_CODES = exports.SERVER_ERROR = exports.INTERNAL_ERROR = exports.INVALID_PARAMS = exports.METHOD_NOT_FOUND = exports.INVALID_REQUEST = exports.PARSE_ERROR = void 0;
exports.PARSE_ERROR = "PARSE_ERROR";
exports.INVALID_REQUEST = "INVALID_REQUEST";
exports.METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
exports.INVALID_PARAMS = "INVALID_PARAMS";
exports.INTERNAL_ERROR = "INTERNAL_ERROR";
exports.SERVER_ERROR = "SERVER_ERROR";
exports.RESERVED_ERROR_CODES = [
    -32700,
    -32600,
    -32601,
    -32602,
    -32603
];
exports.SERVER_ERROR_CODE_RANGE = [
    -32000,
    -32099
];
exports.STANDARD_ERROR_MAP = {
    [exports.PARSE_ERROR]: {
        code: -32700,
        message: "Parse error"
    },
    [exports.INVALID_REQUEST]: {
        code: -32600,
        message: "Invalid Request"
    },
    [exports.METHOD_NOT_FOUND]: {
        code: -32601,
        message: "Method not found"
    },
    [exports.INVALID_PARAMS]: {
        code: -32602,
        message: "Invalid params"
    },
    [exports.INTERNAL_ERROR]: {
        code: -32603,
        message: "Internal error"
    },
    [exports.SERVER_ERROR]: {
        code: -32000,
        message: "Server error"
    }
};

},{}],"cbQ8H":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateJsonRpcError = exports.getErrorByCode = exports.getError = exports.isValidErrorCode = exports.isReservedErrorCode = exports.isServerErrorCode = void 0;
const constants_1 = require("./constants");
function isServerErrorCode(code) {
    return code <= constants_1.SERVER_ERROR_CODE_RANGE[0] && code >= constants_1.SERVER_ERROR_CODE_RANGE[1];
}
exports.isServerErrorCode = isServerErrorCode;
function isReservedErrorCode(code) {
    return constants_1.RESERVED_ERROR_CODES.includes(code);
}
exports.isReservedErrorCode = isReservedErrorCode;
function isValidErrorCode(code) {
    return typeof code === "number";
}
exports.isValidErrorCode = isValidErrorCode;
function getError(type) {
    if (!Object.keys(constants_1.STANDARD_ERROR_MAP).includes(type)) return constants_1.STANDARD_ERROR_MAP[constants_1.INTERNAL_ERROR];
    return constants_1.STANDARD_ERROR_MAP[type];
}
exports.getError = getError;
function getErrorByCode(code) {
    const match = Object.values(constants_1.STANDARD_ERROR_MAP).find((e)=>e.code === code
    );
    if (!match) return constants_1.STANDARD_ERROR_MAP[constants_1.INTERNAL_ERROR];
    return match;
}
exports.getErrorByCode = getErrorByCode;
function validateJsonRpcError(response) {
    if (typeof response.error.code === "undefined") return {
        valid: false,
        error: "Missing code for JSON-RPC error"
    };
    if (typeof response.error.message === "undefined") return {
        valid: false,
        error: "Missing message for JSON-RPC error"
    };
    if (!isValidErrorCode(response.error.code)) return {
        valid: false,
        error: `Invalid error code type for JSON-RPC: ${response.error.code}`
    };
    if (isReservedErrorCode(response.error.code)) {
        const error = getErrorByCode(response.error.code);
        if (error.message !== constants_1.STANDARD_ERROR_MAP[constants_1.INTERNAL_ERROR].message && response.error.message === error.message) return {
            valid: false,
            error: `Invalid error code message for JSON-RPC: ${response.error.code}`
        };
    }
    return {
        valid: true
    };
}
exports.validateJsonRpcError = validateJsonRpcError;

},{"./constants":"jtXdw"}],"5n7dM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNodeJs = void 0;
const tslib_1 = require("tslib");
const environment_1 = require("@pedrouid/environment");
exports.isNodeJs = environment_1.isNode;
tslib_1.__exportStar(require("@pedrouid/environment"), exports);

},{"tslib":"jVISA","@pedrouid/environment":"jnKEj"}],"jnKEj":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./crypto"), exports);
__exportStar(require("./env"), exports);

},{"./crypto":"g6TqG","./env":"dUMAl"}],"g6TqG":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
function getBrowerCrypto() {
    return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {
    };
}
exports.getBrowerCrypto = getBrowerCrypto;
function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
}
exports.getSubtleCrypto = getSubtleCrypto;
function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
}
exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;

},{}],"dUMAl":[function(require,module,exports) {
var process = require("process");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
function isReactNative() {
    return typeof document === 'undefined' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
}
exports.isReactNative = isReactNative;
function isNode() {
    return typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.node !== 'undefined';
}
exports.isNode = isNode;
function isBrowser() {
    return !isReactNative() && !isNode();
}
exports.isBrowser = isBrowser;

},{"process":"1WSHx"}],"liJoc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatErrorMessage = exports.formatJsonRpcError = exports.formatJsonRpcResult = exports.formatJsonRpcRequest = exports.payloadId = void 0;
const error_1 = require("./error");
const constants_1 = require("./constants");
function payloadId() {
    const date = Date.now() * Math.pow(10, 3);
    const extra = Math.floor(Math.random() * Math.pow(10, 3));
    return date + extra;
}
exports.payloadId = payloadId;
function formatJsonRpcRequest(method, params, id) {
    return {
        id: id || payloadId(),
        jsonrpc: "2.0",
        method,
        params
    };
}
exports.formatJsonRpcRequest = formatJsonRpcRequest;
function formatJsonRpcResult(id, result) {
    return {
        id,
        jsonrpc: "2.0",
        result
    };
}
exports.formatJsonRpcResult = formatJsonRpcResult;
function formatJsonRpcError(id, error) {
    return {
        id,
        jsonrpc: "2.0",
        error: formatErrorMessage(error)
    };
}
exports.formatJsonRpcError = formatJsonRpcError;
function formatErrorMessage(error) {
    if (typeof error === "undefined") return error_1.getError(constants_1.INTERNAL_ERROR);
    if (typeof error === "string") error = Object.assign(Object.assign({
    }, error_1.getError(constants_1.SERVER_ERROR)), {
        message: error
    });
    if (error_1.isReservedErrorCode(error.code)) error = error_1.getErrorByCode(error.code);
    if (!error_1.isServerErrorCode(error.code)) throw new Error("Error code is not in server code range");
    return error;
}
exports.formatErrorMessage = formatErrorMessage;

},{"./error":"cbQ8H","./constants":"jtXdw"}],"647Lg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidTrailingWildcardRoute = exports.isValidLeadingWildcardRoute = exports.isValidWildcardRoute = exports.isValidDefaultRoute = exports.isValidRoute = void 0;
function isValidRoute(route) {
    if (route.includes("*")) return isValidWildcardRoute(route);
    if (/\W/g.test(route)) return false;
    return true;
}
exports.isValidRoute = isValidRoute;
function isValidDefaultRoute(route) {
    return route === "*";
}
exports.isValidDefaultRoute = isValidDefaultRoute;
function isValidWildcardRoute(route) {
    if (isValidDefaultRoute(route)) return true;
    if (!route.includes("*")) return false;
    if (route.split("*").length !== 2) return false;
    if (route.split("*").filter((x)=>x.trim() === ""
    ).length !== 1) return false;
    return true;
}
exports.isValidWildcardRoute = isValidWildcardRoute;
function isValidLeadingWildcardRoute(route) {
    return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
exports.isValidLeadingWildcardRoute = isValidLeadingWildcardRoute;
function isValidTrailingWildcardRoute(route) {
    return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}
exports.isValidTrailingWildcardRoute = isValidTrailingWildcardRoute;

},{}],"9k3Os":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("@json-rpc-tools/types"), exports);

},{"tslib":"jVISA","@json-rpc-tools/types":"kAXDe"}],"kAXDe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./blockchain"), exports);
tslib_1.__exportStar(require("./jsonrpc"), exports);
tslib_1.__exportStar(require("./misc"), exports);
tslib_1.__exportStar(require("./multi"), exports);
tslib_1.__exportStar(require("./provider"), exports);
tslib_1.__exportStar(require("./router"), exports);
tslib_1.__exportStar(require("./schema"), exports);
tslib_1.__exportStar(require("./validator"), exports);

},{"tslib":"jVISA","./blockchain":"6XIGM","./jsonrpc":"5RG55","./misc":"gmMxM","./multi":"7qbV9","./provider":"6EFgm","./router":"hWIKX","./schema":"gqNkU","./validator":"aA9iD"}],"6XIGM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IBlockchainProvider = exports.IBlockchainAuthenticator = exports.IPendingRequests = void 0;
const misc_1 = require("./misc");
const provider_1 = require("./provider");
class IPendingRequests {
    constructor(storage){
        this.storage = storage;
    }
}
exports.IPendingRequests = IPendingRequests;
class IBlockchainAuthenticator extends misc_1.IEvents {
    constructor(config){
        super();
        this.config = config;
    }
}
exports.IBlockchainAuthenticator = IBlockchainAuthenticator;
class IBlockchainProvider extends provider_1.IJsonRpcProvider {
    constructor(connection, config1){
        super(connection);
    }
}
exports.IBlockchainProvider = IBlockchainProvider;

},{"./misc":"gmMxM","./provider":"6EFgm"}],"gmMxM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IEvents = void 0;
class IEvents {
}
exports.IEvents = IEvents;

},{}],"6EFgm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IJsonRpcProvider = exports.IBaseJsonRpcProvider = exports.IJsonRpcConnection = void 0;
const misc_1 = require("./misc");
class IJsonRpcConnection extends misc_1.IEvents {
    constructor(opts){
        super();
    }
}
exports.IJsonRpcConnection = IJsonRpcConnection;
class IBaseJsonRpcProvider extends misc_1.IEvents {
    constructor(){
        super();
    }
}
exports.IBaseJsonRpcProvider = IBaseJsonRpcProvider;
class IJsonRpcProvider extends IBaseJsonRpcProvider {
    constructor(connection){
        super();
    }
}
exports.IJsonRpcProvider = IJsonRpcProvider;

},{"./misc":"gmMxM"}],"5RG55":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"7qbV9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IMultiServiceProvider = void 0;
const provider_1 = require("./provider");
class IMultiServiceProvider extends provider_1.IBaseJsonRpcProvider {
    constructor(config){
        super();
        this.config = config;
    }
}
exports.IMultiServiceProvider = IMultiServiceProvider;

},{"./provider":"6EFgm"}],"hWIKX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IJsonRpcRouter = void 0;
class IJsonRpcRouter {
    constructor(routes){
        this.routes = routes;
    }
}
exports.IJsonRpcRouter = IJsonRpcRouter;

},{}],"gqNkU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"aA9iD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IJsonRpcValidator = void 0;
class IJsonRpcValidator {
    constructor(schemas){
        this.schemas = schemas;
    }
}
exports.IJsonRpcValidator = IJsonRpcValidator;

},{}],"j5NSH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isJsonRpcValidationInvalid = exports.isJsonRpcError = exports.isJsonRpcResult = exports.isJsonRpcResponse = exports.isJsonRpcRequest = exports.isJsonRpcPayload = void 0;
function isJsonRpcPayload(payload) {
    return "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
exports.isJsonRpcPayload = isJsonRpcPayload;
function isJsonRpcRequest(payload) {
    return isJsonRpcPayload(payload) && "method" in payload;
}
exports.isJsonRpcRequest = isJsonRpcRequest;
function isJsonRpcResponse(payload) {
    return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
exports.isJsonRpcResponse = isJsonRpcResponse;
function isJsonRpcResult(payload) {
    return "result" in payload;
}
exports.isJsonRpcResult = isJsonRpcResult;
function isJsonRpcError(payload) {
    return "error" in payload;
}
exports.isJsonRpcError = isJsonRpcError;
function isJsonRpcValidationInvalid(validation) {
    return "error" in validation && validation.valid === false;
}
exports.isJsonRpcValidationInvalid = isJsonRpcValidationInvalid;

},{}],"jMzdH":[function(require,module,exports) {
var process = require("process");
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.MessagePack = e() : t.MessagePack = e();
}(this, function() {
    return (function(t1) {
        var e1 = {
        };
        function r(n) {
            if (e1[n]) return e1[n].exports;
            var i = e1[n] = {
                i: n,
                l: !1,
                exports: {
                }
            };
            return t1[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
        }
        return r.m = t1, r.c = e1, r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            });
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, r.t = function(t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for(var i in t)r.d(n, i, (function(e) {
                return t[e];
            }).bind(null, i));
            return n;
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return r.d(e, "a", e), e;
        }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, r.p = "", r(r.s = 0);
    })([
        function(t2, e2, r1) {
            "use strict";
            r1.r(e2), r1.d(e2, "encode", function() {
                return T;
            }), r1.d(e2, "decode", function() {
                return V;
            }), r1.d(e2, "decodeAsync", function() {
                return Y;
            }), r1.d(e2, "decodeArrayStream", function() {
                return Z;
            }), r1.d(e2, "decodeStream", function() {
                return $;
            }), r1.d(e2, "Decoder", function() {
                return O;
            }), r1.d(e2, "Encoder", function() {
                return I;
            }), r1.d(e2, "ExtensionCodec", function() {
                return S;
            }), r1.d(e2, "ExtData", function() {
                return p1;
            }), r1.d(e2, "EXT_TIMESTAMP", function() {
                return w;
            }), r1.d(e2, "encodeDateToTimeSpec", function() {
                return g;
            }), r1.d(e2, "encodeTimeSpecToTimestamp", function() {
                return v;
            }), r1.d(e2, "decodeTimestampToTimeSpec", function() {
                return U;
            }), r1.d(e2, "encodeTimestampExtension", function() {
                return b;
            }), r1.d(e2, "decodeTimestampExtension", function() {
                return m;
            });
            var n1 = function(t, e) {
                var r = "function" == typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var n, i, o = r.call(t), s = [];
                try {
                    for(; (void 0 === e || e-- > 0) && !(n = o.next()).done;)s.push(n.value);
                } catch (t3) {
                    i = {
                        error: t3
                    };
                } finally{
                    try {
                        n && !n.done && (r = o.return) && r.call(o);
                    } finally{
                        if (i) throw i.error;
                    }
                }
                return s;
            }, i1 = function() {
                for(var t = [], e = 0; e < arguments.length; e++)t = t.concat(n1(arguments[e]));
                return t;
            }, o1 = "undefined" != typeof process && "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder;
            function s1(t) {
                for(var e = t.length, r = 0, n = 0; n < e;){
                    var i = t.charCodeAt(n++);
                    if (0 != (4294967168 & i)) {
                        if (0 == (4294965248 & i)) r += 2;
                        else {
                            if (i >= 55296 && i <= 56319 && n < e) {
                                var o = t.charCodeAt(n);
                                56320 == (64512 & o) && (++n, i = ((1023 & i) << 10) + (1023 & o) + 65536);
                            }
                            r += 0 == (4294901760 & i) ? 3 : 4;
                        }
                    } else r++;
                }
                return r;
            }
            var a1 = o1 ? new TextEncoder : void 0, h1 = "undefined" != typeof process ? 200 : 0;
            var u1 = (null == a1 ? void 0 : a1.encodeInto) ? function(t, e, r) {
                a1.encodeInto(t, e.subarray(r));
            } : function(t, e, r) {
                e.set(a1.encode(t), r);
            };
            function c1(t, e, r) {
                for(var n = e, o = n + r, s = [], a = ""; n < o;){
                    var h = t[n++];
                    if (0 == (128 & h)) s.push(h);
                    else if (192 == (224 & h)) {
                        var u = 63 & t[n++];
                        s.push((31 & h) << 6 | u);
                    } else if (224 == (240 & h)) {
                        u = 63 & t[n++];
                        var c = 63 & t[n++];
                        s.push((31 & h) << 12 | u << 6 | c);
                    } else if (240 == (248 & h)) {
                        var f = (7 & h) << 18 | (u = 63 & t[n++]) << 12 | (c = 63 & t[n++]) << 6 | 63 & t[n++];
                        f > 65535 && (f -= 65536, s.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), s.push(f);
                    } else s.push(h);
                    s.length >= 4096 && (a += String.fromCharCode.apply(String, i1(s)), s.length = 0);
                }
                return s.length > 0 && (a += String.fromCharCode.apply(String, i1(s))), a;
            }
            var f1 = o1 ? new TextDecoder : null, l1 = "undefined" != typeof process ? 200 : 0;
            var p1 = function(t, e) {
                this.type = t, this.data = e;
            };
            function d(t, e, r) {
                var n = Math.floor(r / 4294967296), i = r;
                t.setUint32(e, n), t.setUint32(e + 4, i);
            }
            function y(t, e) {
                var r = t.getInt32(e), n = t.getUint32(e + 4), i = r < Math.floor(Number.MIN_SAFE_INTEGER / 4294967296) || r === Math.floor(Number.MIN_SAFE_INTEGER / 4294967296) && 0 === n, o = r > Math.floor(Number.MAX_SAFE_INTEGER / 4294967296);
                return i || o ? BigInt(r) * BigInt(4294967296) + BigInt(n) : 4294967296 * r + n;
            }
            var w = -1;
            function v(t) {
                var e = t.sec, r = t.nsec;
                if (e >= 0 && r >= 0 && e <= 17179869183) {
                    if (0 === r && e <= 4294967295) {
                        var n = new Uint8Array(4);
                        return (s = new DataView(n.buffer)).setUint32(0, e), n;
                    }
                    var i = e / 4294967296, o = 4294967295 & e;
                    n = new Uint8Array(8);
                    return (s = new DataView(n.buffer)).setUint32(0, r << 2 | 3 & i), s.setUint32(4, o), n;
                }
                var s;
                n = new Uint8Array(12);
                return (s = new DataView(n.buffer)).setUint32(0, r), d(s, 4, e), n;
            }
            function g(t) {
                var e = t.getTime(), r = Math.floor(e / 1000), n = 1000000 * (e - 1000 * r), i = Math.floor(n / 1000000000);
                return {
                    sec: r + i,
                    nsec: n - 1000000000 * i
                };
            }
            function b(t) {
                return t instanceof Date ? v(g(t)) : null;
            }
            function U(t) {
                var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                switch(t.byteLength){
                    case 4:
                        return {
                            sec: e.getUint32(0),
                            nsec: 0
                        };
                    case 8:
                        var r = e.getUint32(0);
                        return {
                            sec: 4294967296 * (3 & r) + e.getUint32(4),
                            nsec: r >>> 2
                        };
                    case 12:
                        return {
                            sec: y(e, 4),
                            nsec: e.getUint32(0)
                        };
                    default:
                        throw new Error("Unrecognized data size for timestamp: " + t.length);
                }
            }
            function m(t) {
                var e = U(t);
                return new Date(1000 * e.sec + e.nsec / 1000000);
            }
            var x = {
                type: w,
                encode: b,
                decode: m
            }, S = function() {
                function t4() {
                    this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(x);
                }
                return t4.prototype.register = function(t) {
                    var e = t.type, r = t.encode, n = t.decode;
                    if (e >= 0) this.encoders[e] = r, this.decoders[e] = n;
                    else {
                        var i = 1 + e;
                        this.builtInEncoders[i] = r, this.builtInDecoders[i] = n;
                    }
                }, t4.prototype.tryToEncode = function(t, e) {
                    for(var r = 0; r < this.builtInEncoders.length; r++){
                        if (null != (n = this.builtInEncoders[r])) {
                            if (null != (i = n(t, e))) return new p1(-1 - r, i);
                        }
                    }
                    for(r = 0; r < this.encoders.length; r++){
                        var n, i;
                        if (null != (n = this.encoders[r])) {
                            if (null != (i = n(t, e))) return new p1(r, i);
                        }
                    }
                    return t instanceof p1 ? t : null;
                }, t4.prototype.decode = function(t, e, r) {
                    var n = e < 0 ? this.builtInDecoders[-1 - e] : this.decoders[e];
                    return n ? n(t, e, r) : new p1(e, t);
                }, t4.defaultCodec = new t4, t4;
            }();
            function B(t) {
                return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t instanceof ArrayBuffer ? new Uint8Array(t) : Uint8Array.from(t);
            }
            var E = function(t) {
                var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], n = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        };
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, I = function() {
                function t5(t, e, r, n, i, o, s, a) {
                    void 0 === t && (t = S.defaultCodec), void 0 === e && (e = void 0), void 0 === r && (r = 100), void 0 === n && (n = 2048), void 0 === i && (i = !1), void 0 === o && (o = !1), void 0 === s && (s = !1), void 0 === a && (a = !1), this.extensionCodec = t, this.context = e, this.maxDepth = r, this.initialBufferSize = n, this.sortKeys = i, this.forceFloat32 = o, this.ignoreUndefined = s, this.forceIntegerToFloat = a, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
                }
                return t5.prototype.getUint8Array = function() {
                    return this.bytes.subarray(0, this.pos);
                }, t5.prototype.reinitializeState = function() {
                    this.pos = 0;
                }, t5.prototype.encode = function(t) {
                    return this.reinitializeState(), this.doEncode(t, 1), this.getUint8Array();
                }, t5.prototype.doEncode = function(t, e) {
                    if (e > this.maxDepth) throw new Error("Too deep objects in depth " + e);
                    null == t ? this.encodeNil() : "boolean" == typeof t ? this.encodeBoolean(t) : "number" == typeof t ? this.encodeNumber(t) : "string" == typeof t ? this.encodeString(t) : "bigint" == typeof t ? this.encodebigint(t) : this.encodeObject(t, e);
                }, t5.prototype.ensureBufferSizeToWrite = function(t) {
                    var e = this.pos + t;
                    this.view.byteLength < e && this.resizeBuffer(2 * e);
                }, t5.prototype.resizeBuffer = function(t) {
                    var e = new ArrayBuffer(t), r = new Uint8Array(e), n = new DataView(e);
                    r.set(this.bytes), this.view = n, this.bytes = r;
                }, t5.prototype.encodeNil = function() {
                    this.writeU8(192);
                }, t5.prototype.encodeBoolean = function(t) {
                    !1 === t ? this.writeU8(194) : this.writeU8(195);
                }, t5.prototype.encodeNumber = function(t) {
                    Number.isSafeInteger(t) && !this.forceIntegerToFloat ? t >= 0 ? t < 128 ? this.writeU8(t) : t < 256 ? (this.writeU8(204), this.writeU8(t)) : t < 65536 ? (this.writeU8(205), this.writeU16(t)) : t < 4294967296 ? (this.writeU8(206), this.writeU32(t)) : (this.writeU8(207), this.writeU64(t)) : t >= -32 ? this.writeU8(224 | t + 32) : t >= -128 ? (this.writeU8(208), this.writeI8(t)) : t >= -32768 ? (this.writeU8(209), this.writeI16(t)) : t >= -2147483648 ? (this.writeU8(210), this.writeI32(t)) : (this.writeU8(211), this.writeI64(t)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(t)) : (this.writeU8(203), this.writeF64(t));
                }, t5.prototype.encodebigint = function(t) {
                    t >= BigInt(0) ? t < BigInt(128) ? this.writeU8(Number(t)) : t < BigInt(256) ? (this.writeU8(204), this.writeU8(Number(t))) : t < BigInt(65536) ? (this.writeU8(205), this.writeU16(Number(t))) : t < BigInt(4294967296) ? (this.writeU8(206), this.writeU32(Number(t))) : (this.writeU8(207), this.writeBig64(t)) : t >= BigInt(-32) ? this.writeU8(224 | Number(t) + 32) : t >= BigInt(-128) ? (this.writeU8(208), this.writeI8(Number(t))) : t >= BigInt(-32768) ? (this.writeU8(209), this.writeI16(Number(t))) : t >= BigInt(-2147483648) ? (this.writeU8(210), this.writeI32(Number(t))) : (this.writeU8(211), this.writeBig64(t));
                }, t5.prototype.writeStringHeader = function(t) {
                    if (t < 32) this.writeU8(160 + t);
                    else if (t < 256) this.writeU8(217), this.writeU8(t);
                    else if (t < 65536) this.writeU8(218), this.writeU16(t);
                    else {
                        if (!(t < 4294967296)) throw new Error("Too long string: " + t + " bytes in UTF-8");
                        this.writeU8(219), this.writeU32(t);
                    }
                }, t5.prototype.encodeString = function(t6) {
                    var e3 = t6.length;
                    if (o1 && e3 > h1) {
                        var r = s1(t6);
                        this.ensureBufferSizeToWrite(5 + r), this.writeStringHeader(r), u1(t6, this.bytes, this.pos), this.pos += r;
                    } else {
                        r = s1(t6);
                        this.ensureBufferSizeToWrite(5 + r), this.writeStringHeader(r), (function(t, e, r) {
                            for(var n = t.length, i = r, o = 0; o < n;){
                                var s = t.charCodeAt(o++);
                                if (0 != (4294967168 & s)) {
                                    if (0 == (4294965248 & s)) e[i++] = s >> 6 & 31 | 192;
                                    else {
                                        if (s >= 55296 && s <= 56319 && o < n) {
                                            var a = t.charCodeAt(o);
                                            56320 == (64512 & a) && (++o, s = ((1023 & s) << 10) + (1023 & a) + 65536);
                                        }
                                        0 == (4294901760 & s) ? (e[i++] = s >> 12 & 15 | 224, e[i++] = s >> 6 & 63 | 128) : (e[i++] = s >> 18 & 7 | 240, e[i++] = s >> 12 & 63 | 128, e[i++] = s >> 6 & 63 | 128);
                                    }
                                    e[i++] = 63 & s | 128;
                                } else e[i++] = s;
                            }
                        })(t6, this.bytes, this.pos), this.pos += r;
                    }
                }, t5.prototype.encodeObject = function(t, e) {
                    var r = this.extensionCodec.tryToEncode(t, this.context);
                    if (null != r) this.encodeExtension(r);
                    else if (Array.isArray(t)) this.encodeArray(t, e);
                    else if (ArrayBuffer.isView(t)) this.encodeBinary(t);
                    else {
                        if ("object" != typeof t) throw new Error("Unrecognized object: " + Object.prototype.toString.apply(t));
                        this.encodeMap(t, e);
                    }
                }, t5.prototype.encodeBinary = function(t) {
                    var e = t.byteLength;
                    if (e < 256) this.writeU8(196), this.writeU8(e);
                    else if (e < 65536) this.writeU8(197), this.writeU16(e);
                    else {
                        if (!(e < 4294967296)) throw new Error("Too large binary: " + e);
                        this.writeU8(198), this.writeU32(e);
                    }
                    var r = B(t);
                    this.writeU8a(r);
                }, t5.prototype.encodeArray = function(t, e) {
                    var r, n, i = t.length;
                    if (i < 16) this.writeU8(144 + i);
                    else if (i < 65536) this.writeU8(220), this.writeU16(i);
                    else {
                        if (!(i < 4294967296)) throw new Error("Too large array: " + i);
                        this.writeU8(221), this.writeU32(i);
                    }
                    try {
                        for(var o = E(t), s = o.next(); !s.done; s = o.next()){
                            var a = s.value;
                            this.doEncode(a, e + 1);
                        }
                    } catch (t7) {
                        r = {
                            error: t7
                        };
                    } finally{
                        try {
                            s && !s.done && (n = o.return) && n.call(o);
                        } finally{
                            if (r) throw r.error;
                        }
                    }
                }, t5.prototype.countWithoutUndefined = function(t, e) {
                    var r, n, i = 0;
                    try {
                        for(var o = E(e), s = o.next(); !s.done; s = o.next())void 0 !== t[s.value] && i++;
                    } catch (t8) {
                        r = {
                            error: t8
                        };
                    } finally{
                        try {
                            s && !s.done && (n = o.return) && n.call(o);
                        } finally{
                            if (r) throw r.error;
                        }
                    }
                    return i;
                }, t5.prototype.encodeMap = function(t, e) {
                    var r, n, i = Object.keys(t);
                    this.sortKeys && i.sort();
                    var o = this.ignoreUndefined ? this.countWithoutUndefined(t, i) : i.length;
                    if (o < 16) this.writeU8(128 + o);
                    else if (o < 65536) this.writeU8(222), this.writeU16(o);
                    else {
                        if (!(o < 4294967296)) throw new Error("Too large map object: " + o);
                        this.writeU8(223), this.writeU32(o);
                    }
                    try {
                        for(var s = E(i), a = s.next(); !a.done; a = s.next()){
                            var h = a.value, u = t[h];
                            this.ignoreUndefined && void 0 === u || (this.encodeString(h), this.doEncode(u, e + 1));
                        }
                    } catch (t9) {
                        r = {
                            error: t9
                        };
                    } finally{
                        try {
                            a && !a.done && (n = s.return) && n.call(s);
                        } finally{
                            if (r) throw r.error;
                        }
                    }
                }, t5.prototype.encodeExtension = function(t) {
                    var e = t.data.length;
                    if (1 === e) this.writeU8(212);
                    else if (2 === e) this.writeU8(213);
                    else if (4 === e) this.writeU8(214);
                    else if (8 === e) this.writeU8(215);
                    else if (16 === e) this.writeU8(216);
                    else if (e < 256) this.writeU8(199), this.writeU8(e);
                    else if (e < 65536) this.writeU8(200), this.writeU16(e);
                    else {
                        if (!(e < 4294967296)) throw new Error("Too large extension object: " + e);
                        this.writeU8(201), this.writeU32(e);
                    }
                    this.writeI8(t.type), this.writeU8a(t.data);
                }, t5.prototype.writeU8 = function(t) {
                    this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, t), this.pos++;
                }, t5.prototype.writeU8a = function(t) {
                    var e = t.length;
                    this.ensureBufferSizeToWrite(e), this.bytes.set(t, this.pos), this.pos += e;
                }, t5.prototype.writeI8 = function(t) {
                    this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, t), this.pos++;
                }, t5.prototype.writeU16 = function(t) {
                    this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, t), this.pos += 2;
                }, t5.prototype.writeI16 = function(t) {
                    this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, t), this.pos += 2;
                }, t5.prototype.writeU32 = function(t) {
                    this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, t), this.pos += 4;
                }, t5.prototype.writeI32 = function(t) {
                    this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, t), this.pos += 4;
                }, t5.prototype.writeF32 = function(t) {
                    this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, t), this.pos += 4;
                }, t5.prototype.writeF64 = function(t) {
                    this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, t), this.pos += 8;
                }, t5.prototype.writeU64 = function(t10) {
                    this.ensureBufferSizeToWrite(8), (function(t, e, r) {
                        var n = r / 4294967296, i = r;
                        t.setUint32(e, n), t.setUint32(e + 4, i);
                    })(this.view, this.pos, t10), this.pos += 8;
                }, t5.prototype.writeI64 = function(t) {
                    this.ensureBufferSizeToWrite(8), d(this.view, this.pos, t), this.pos += 8;
                }, t5.prototype.writeBig64 = function(t11) {
                    this.ensureBufferSizeToWrite(8), (function(t, e, r) {
                        var n = Number(r / BigInt(4294967296)), i = Number(r % BigInt(4294967296));
                        n < 0 && 0 !== i && (n -= 1), t.setUint32(e, n), t.setUint32(e + 4, i);
                    })(this.view, this.pos, t11), this.pos += 8;
                }, t5;
            }(), A = {
            };
            function T(t, e) {
                return void 0 === e && (e = A), new I(e.extensionCodec, e.context, e.maxDepth, e.initialBufferSize, e.sortKeys, e.forceFloat32, e.ignoreUndefined, e.forceIntegerToFloat).encode(t);
            }
            function L(t) {
                return (t < 0 ? "-" : "") + "0x" + Math.abs(t).toString(16).padStart(2, "0");
            }
            var M = function() {
                function t12(t, e) {
                    void 0 === t && (t = 16), void 0 === e && (e = 16), this.maxKeyLength = t, this.maxLengthPerKey = e, this.hit = 0, this.miss = 0, this.caches = [];
                    for(var r = 0; r < this.maxKeyLength; r++)this.caches.push([]);
                }
                return t12.prototype.canBeCached = function(t) {
                    return t > 0 && t <= this.maxKeyLength;
                }, t12.prototype.get = function(t, e, r) {
                    var n = this.caches[r - 1], i = n.length;
                    t: for(var o = 0; o < i; o++){
                        for(var s = n[o], a = s.bytes, h = 0; h < r; h++)if (a[h] !== t[e + h]) continue t;
                        return s.value;
                    }
                    return null;
                }, t12.prototype.store = function(t, e) {
                    var r = this.caches[t.length - 1], n = {
                        bytes: t,
                        value: e
                    };
                    r.length >= this.maxLengthPerKey ? r[Math.random() * r.length | 0] = n : r.push(n);
                }, t12.prototype.decode = function(t, e, r) {
                    var n = this.get(t, e, r);
                    if (null != n) return this.hit++, n;
                    this.miss++;
                    var i = c1(t, e, r), o = Uint8Array.prototype.slice.call(t, e, e + r);
                    return this.store(o, i), i;
                }, t12;
            }(), k = function(t13, e4, r, n) {
                return new (r || (r = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            h(n.next(t));
                        } catch (t14) {
                            o(t14);
                        }
                    }
                    function a(t) {
                        try {
                            h(n.throw(t));
                        } catch (t15) {
                            o(t15);
                        }
                    }
                    function h(t16) {
                        var e;
                        t16.done ? i(t16.value) : (e = t16.value, e instanceof r ? e : new r(function(t) {
                            t(e);
                        })).then(s, a);
                    }
                    h((n = n.apply(t13, e4 || [])).next());
                });
            }, z = function(t17, e) {
                var r, n, i, o2, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: []
                };
                function a2(o3) {
                    return function(a) {
                        return (function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for(; s;)try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                switch(n = 0, i && (o = [
                                    2 & o[0],
                                    i.value
                                ]), o[0]){
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = o[1], o = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break;
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break;
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break;
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                o = e.call(t17, s);
                            } catch (t) {
                                o = [
                                    6,
                                    t
                                ], n = 0;
                            } finally{
                                r = i = 0;
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            };
                        })([
                            o3,
                            a
                        ]);
                    };
                }
                return o2 = {
                    next: a2(0),
                    throw: a2(1),
                    return: a2(2)
                }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
                    return this;
                }), o2;
            }, D = function(t18) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e5, r2 = t18[Symbol.asyncIterator];
                function n2(r3) {
                    e5[r3] = t18[r3] && function(e6) {
                        return new Promise(function(n3, i) {
                            (function(t, e7, r, n) {
                                Promise.resolve(n).then(function(e) {
                                    t({
                                        value: e,
                                        done: r
                                    });
                                }, e7);
                            })(n3, i, (e6 = t18[r3](e6)).done, e6.value);
                        });
                    };
                }
                return r2 ? r2.call(t18) : (t18 = "function" == typeof __values ? __values(t18) : t18[Symbol.iterator](), e5 = {
                }, n2("next"), n2("throw"), n2("return"), e5[Symbol.asyncIterator] = function() {
                    return this;
                }, e5);
            }, N = function(t) {
                return this instanceof N ? (this.v = t, this) : new N(t);
            }, C = function(t19, e8, r4) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n4, i = r4.apply(t19, e8 || []), o = [];
                function s(t) {
                    i[t] && (n4[t] = function(e) {
                        return new Promise(function(r, n) {
                            o.push([
                                t,
                                e,
                                r,
                                n
                            ]) > 1 || a(t, e);
                        });
                    });
                }
                function a(t, e) {
                    try {
                        (r = i[t](e)).value instanceof N ? Promise.resolve(r.value.v).then(h, u) : c(o[0][2], r);
                    } catch (t20) {
                        c(o[0][3], t20);
                    }
                    var r;
                }
                function h(t) {
                    a("next", t);
                }
                function u(t) {
                    a("throw", t);
                }
                function c(t, e) {
                    t(e), o.shift(), o.length && a(o[0][0], o[0][1]);
                }
                return n4 = {
                }, s("next"), s("throw"), s("return"), n4[Symbol.asyncIterator] = function() {
                    return this;
                }, n4;
            }, P = new DataView(new ArrayBuffer(0)), F = new Uint8Array(P.buffer), j = function() {
                try {
                    P.getInt8(0);
                } catch (t) {
                    return t.constructor;
                }
                throw new Error("never reached");
            }(), _ = new j("Insufficient data"), W = new M, O = function() {
                function t21(t, e, r, n, i, o, s, a) {
                    void 0 === t && (t = S.defaultCodec), void 0 === e && (e = void 0), void 0 === r && (r = 4294967295), void 0 === n && (n = 4294967295), void 0 === i && (i = 4294967295), void 0 === o && (o = 4294967295), void 0 === s && (s = 4294967295), void 0 === a && (a = W), this.extensionCodec = t, this.context = e, this.maxStrLength = r, this.maxBinLength = n, this.maxArrayLength = i, this.maxMapLength = o, this.maxExtLength = s, this.keyDecoder = a, this.totalPos = 0, this.pos = 0, this.view = P, this.bytes = F, this.headByte = -1, this.stack = [];
                }
                return t21.prototype.reinitializeState = function() {
                    this.totalPos = 0, this.headByte = -1;
                }, t21.prototype.setBuffer = function(t22) {
                    this.bytes = B(t22), this.view = (function(t) {
                        if (t instanceof ArrayBuffer) return new DataView(t);
                        var e = B(t);
                        return new DataView(e.buffer, e.byteOffset, e.byteLength);
                    })(this.bytes), this.pos = 0;
                }, t21.prototype.appendBuffer = function(t) {
                    if (-1 !== this.headByte || this.hasRemaining()) {
                        var e = this.bytes.subarray(this.pos), r = B(t), n = new Uint8Array(e.length + r.length);
                        n.set(e), n.set(r, e.length), this.setBuffer(n);
                    } else this.setBuffer(t);
                }, t21.prototype.hasRemaining = function(t) {
                    return void 0 === t && (t = 1), this.view.byteLength - this.pos >= t;
                }, t21.prototype.createNoExtraBytesError = function(t) {
                    var e = this.view, r = this.pos;
                    return new RangeError("Extra " + (e.byteLength - r) + " of " + e.byteLength + " byte(s) found at buffer[" + t + "]");
                }, t21.prototype.decode = function(t) {
                    return this.reinitializeState(), this.setBuffer(t), this.doDecodeSingleSync();
                }, t21.prototype.doDecodeSingleSync = function() {
                    var t = this.doDecodeSync();
                    if (this.hasRemaining()) throw this.createNoExtraBytesError(this.pos);
                    return t;
                }, t21.prototype.decodeAsync = function(t23) {
                    var e, r, n, i;
                    return k(this, void 0, void 0, function() {
                        var o, s, a, h, u, c, f, l;
                        return z(this, function(p) {
                            switch(p.label){
                                case 0:
                                    o = !1, p.label = 1;
                                case 1:
                                    p.trys.push([
                                        1,
                                        6,
                                        7,
                                        12
                                    ]), e = D(t23), p.label = 2;
                                case 2:
                                    return [
                                        4,
                                        e.next()
                                    ];
                                case 3:
                                    if ((r = p.sent()).done) return [
                                        3,
                                        5
                                    ];
                                    if (a = r.value, o) throw this.createNoExtraBytesError(this.totalPos);
                                    this.appendBuffer(a);
                                    try {
                                        s = this.doDecodeSync(), o = !0;
                                    } catch (t) {
                                        if (!(t instanceof j)) throw t;
                                    }
                                    this.totalPos += this.pos, p.label = 4;
                                case 4:
                                    return [
                                        3,
                                        2
                                    ];
                                case 5:
                                    return [
                                        3,
                                        12
                                    ];
                                case 6:
                                    return h = p.sent(), n = {
                                        error: h
                                    }, [
                                        3,
                                        12
                                    ];
                                case 7:
                                    return p.trys.push([
                                        7,
                                        ,
                                        10,
                                        11
                                    ]), r && !r.done && (i = e.return) ? [
                                        4,
                                        i.call(e)
                                    ] : [
                                        3,
                                        9
                                    ];
                                case 8:
                                    p.sent(), p.label = 9;
                                case 9:
                                    return [
                                        3,
                                        11
                                    ];
                                case 10:
                                    if (n) throw n.error;
                                    return [
                                        7
                                    ];
                                case 11:
                                    return [
                                        7
                                    ];
                                case 12:
                                    if (o) {
                                        if (this.hasRemaining()) throw this.createNoExtraBytesError(this.totalPos);
                                        return [
                                            2,
                                            s
                                        ];
                                    }
                                    throw c = (u = this).headByte, f = u.pos, l = u.totalPos, new RangeError("Insufficient data in parcing " + L(c) + " at " + l + " (" + f + " in the current buffer)");
                            }
                        });
                    });
                }, t21.prototype.decodeArrayStream = function(t) {
                    return this.decodeMultiAsync(t, !0);
                }, t21.prototype.decodeStream = function(t) {
                    return this.decodeMultiAsync(t, !1);
                }, t21.prototype.decodeMultiAsync = function(t, e) {
                    return C(this, arguments, function() {
                        var r, n, i, o, s, a, h, u, c;
                        return z(this, function(f) {
                            switch(f.label){
                                case 0:
                                    r = e, n = -1, f.label = 1;
                                case 1:
                                    f.trys.push([
                                        1,
                                        13,
                                        14,
                                        19
                                    ]), i = D(t), f.label = 2;
                                case 2:
                                    return [
                                        4,
                                        N(i.next())
                                    ];
                                case 3:
                                    if ((o = f.sent()).done) return [
                                        3,
                                        12
                                    ];
                                    if (s = o.value, e && 0 === n) throw this.createNoExtraBytesError(this.totalPos);
                                    this.appendBuffer(s), r && (n = this.readArraySize(), r = !1, this.complete()), f.label = 4;
                                case 4:
                                    f.trys.push([
                                        4,
                                        9,
                                        ,
                                        10
                                    ]), f.label = 5;
                                case 5:
                                    return [
                                        4,
                                        N(this.doDecodeSync())
                                    ];
                                case 6:
                                    return [
                                        4,
                                        f.sent()
                                    ];
                                case 7:
                                    return f.sent(), 0 == --n ? [
                                        3,
                                        8
                                    ] : [
                                        3,
                                        5
                                    ];
                                case 8:
                                    return [
                                        3,
                                        10
                                    ];
                                case 9:
                                    if (!((a = f.sent()) instanceof j)) throw a;
                                    return [
                                        3,
                                        10
                                    ];
                                case 10:
                                    this.totalPos += this.pos, f.label = 11;
                                case 11:
                                    return [
                                        3,
                                        2
                                    ];
                                case 12:
                                    return [
                                        3,
                                        19
                                    ];
                                case 13:
                                    return h = f.sent(), u = {
                                        error: h
                                    }, [
                                        3,
                                        19
                                    ];
                                case 14:
                                    return f.trys.push([
                                        14,
                                        ,
                                        17,
                                        18
                                    ]), o && !o.done && (c = i.return) ? [
                                        4,
                                        N(c.call(i))
                                    ] : [
                                        3,
                                        16
                                    ];
                                case 15:
                                    f.sent(), f.label = 16;
                                case 16:
                                    return [
                                        3,
                                        18
                                    ];
                                case 17:
                                    if (u) throw u.error;
                                    return [
                                        7
                                    ];
                                case 18:
                                    return [
                                        7
                                    ];
                                case 19:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }, t21.prototype.doDecodeSync = function() {
                    t: for(;;){
                        var t = this.readHeadByte(), e = void 0;
                        if (t >= 224) e = t - 256;
                        else if (t < 192) {
                            if (t < 128) e = t;
                            else if (t < 144) {
                                if (0 !== (n = t - 128)) {
                                    this.pushMapState(n), this.complete();
                                    continue t;
                                }
                                e = {
                                };
                            } else if (t < 160) {
                                if (0 !== (n = t - 144)) {
                                    this.pushArrayState(n), this.complete();
                                    continue t;
                                }
                                e = [];
                            } else {
                                var r = t - 160;
                                e = this.decodeUtf8String(r, 0);
                            }
                        } else if (192 === t) e = null;
                        else if (194 === t) e = !1;
                        else if (195 === t) e = !0;
                        else if (202 === t) e = this.readF32();
                        else if (203 === t) e = this.readF64();
                        else if (204 === t) e = this.readU8();
                        else if (205 === t) e = this.readU16();
                        else if (206 === t) e = this.readU32();
                        else if (207 === t) e = this.readU64();
                        else if (208 === t) e = this.readI8();
                        else if (209 === t) e = this.readI16();
                        else if (210 === t) e = this.readI32();
                        else if (211 === t) e = this.readI64();
                        else if (217 === t) {
                            r = this.lookU8();
                            e = this.decodeUtf8String(r, 1);
                        } else if (218 === t) {
                            r = this.lookU16();
                            e = this.decodeUtf8String(r, 2);
                        } else if (219 === t) {
                            r = this.lookU32();
                            e = this.decodeUtf8String(r, 4);
                        } else if (220 === t) {
                            if (0 !== (n = this.readU16())) {
                                this.pushArrayState(n), this.complete();
                                continue t;
                            }
                            e = [];
                        } else if (221 === t) {
                            if (0 !== (n = this.readU32())) {
                                this.pushArrayState(n), this.complete();
                                continue t;
                            }
                            e = [];
                        } else if (222 === t) {
                            if (0 !== (n = this.readU16())) {
                                this.pushMapState(n), this.complete();
                                continue t;
                            }
                            e = {
                            };
                        } else if (223 === t) {
                            if (0 !== (n = this.readU32())) {
                                this.pushMapState(n), this.complete();
                                continue t;
                            }
                            e = {
                            };
                        } else if (196 === t) {
                            var n = this.lookU8();
                            e = this.decodeBinary(n, 1);
                        } else if (197 === t) {
                            n = this.lookU16();
                            e = this.decodeBinary(n, 2);
                        } else if (198 === t) {
                            n = this.lookU32();
                            e = this.decodeBinary(n, 4);
                        } else if (212 === t) e = this.decodeExtension(1, 0);
                        else if (213 === t) e = this.decodeExtension(2, 0);
                        else if (214 === t) e = this.decodeExtension(4, 0);
                        else if (215 === t) e = this.decodeExtension(8, 0);
                        else if (216 === t) e = this.decodeExtension(16, 0);
                        else if (199 === t) {
                            n = this.lookU8();
                            e = this.decodeExtension(n, 1);
                        } else if (200 === t) {
                            n = this.lookU16();
                            e = this.decodeExtension(n, 2);
                        } else {
                            if (201 !== t) throw new Error("Unrecognized type byte: " + L(t));
                            n = this.lookU32();
                            e = this.decodeExtension(n, 4);
                        }
                        this.complete();
                        for(var i = this.stack; i.length > 0;){
                            var o = i[i.length - 1];
                            if (0 === o.type) {
                                if (o.array[o.position] = e, o.position++, o.position !== o.size) continue t;
                                i.pop(), e = o.array;
                            } else {
                                if (1 === o.type) {
                                    if (s = void 0, "string" !== (s = typeof e) && "number" !== s) throw new Error("The type of key must be string or number but " + typeof e);
                                    o.key = e, o.type = 2;
                                    continue t;
                                }
                                if (o.map[o.key] = e, o.readCount++, o.readCount !== o.size) {
                                    o.key = null, o.type = 1;
                                    continue t;
                                }
                                i.pop(), e = o.map;
                            }
                        }
                        return e;
                    }
                    var s;
                }, t21.prototype.readHeadByte = function() {
                    return -1 === this.headByte && (this.headByte = this.readU8()), this.headByte;
                }, t21.prototype.complete = function() {
                    this.headByte = -1;
                }, t21.prototype.readArraySize = function() {
                    var t = this.readHeadByte();
                    switch(t){
                        case 220:
                            return this.readU16();
                        case 221:
                            return this.readU32();
                        default:
                            if (t < 160) return t - 144;
                            throw new Error("Unrecognized array type byte: " + L(t));
                    }
                }, t21.prototype.pushMapState = function(t) {
                    if (t > this.maxMapLength) throw new Error("Max length exceeded: map length (" + t + ") > maxMapLengthLength (" + this.maxMapLength + ")");
                    this.stack.push({
                        type: 1,
                        size: t,
                        key: null,
                        readCount: 0,
                        map: {
                        }
                    });
                }, t21.prototype.pushArrayState = function(t) {
                    if (t > this.maxArrayLength) throw new Error("Max length exceeded: array length (" + t + ") > maxArrayLength (" + this.maxArrayLength + ")");
                    this.stack.push({
                        type: 0,
                        size: t,
                        array: new Array(t),
                        position: 0
                    });
                }, t21.prototype.decodeUtf8String = function(t24, e9) {
                    var r5;
                    if (t24 > this.maxStrLength) throw new Error("Max length exceeded: UTF-8 byte length (" + t24 + ") > maxStrLength (" + this.maxStrLength + ")");
                    if (this.bytes.byteLength < this.pos + e9 + t24) throw _;
                    var n5, i = this.pos + e9;
                    return n5 = this.stateIsMapKey() && (null === (r5 = this.keyDecoder) || void 0 === r5 ? void 0 : r5.canBeCached(t24)) ? this.keyDecoder.decode(this.bytes, i, t24) : o1 && t24 > l1 ? (function(t, e, r) {
                        var n = t.subarray(e, e + r);
                        return f1.decode(n);
                    })(this.bytes, i, t24) : c1(this.bytes, i, t24), this.pos += e9 + t24, n5;
                }, t21.prototype.stateIsMapKey = function() {
                    return this.stack.length > 0 && 1 === this.stack[this.stack.length - 1].type;
                }, t21.prototype.decodeBinary = function(t, e) {
                    if (t > this.maxBinLength) throw new Error("Max length exceeded: bin length (" + t + ") > maxBinLength (" + this.maxBinLength + ")");
                    if (!this.hasRemaining(t + e)) throw _;
                    var r = this.pos + e, n = this.bytes.subarray(r, r + t);
                    return this.pos += e + t, n;
                }, t21.prototype.decodeExtension = function(t, e) {
                    if (t > this.maxExtLength) throw new Error("Max length exceeded: ext length (" + t + ") > maxExtLength (" + this.maxExtLength + ")");
                    var r = this.view.getInt8(this.pos + e), n = this.decodeBinary(t, e + 1);
                    return this.extensionCodec.decode(n, r, this.context);
                }, t21.prototype.lookU8 = function() {
                    return this.view.getUint8(this.pos);
                }, t21.prototype.lookU16 = function() {
                    return this.view.getUint16(this.pos);
                }, t21.prototype.lookU32 = function() {
                    return this.view.getUint32(this.pos);
                }, t21.prototype.readU8 = function() {
                    var t = this.view.getUint8(this.pos);
                    return this.pos++, t;
                }, t21.prototype.readI8 = function() {
                    var t = this.view.getInt8(this.pos);
                    return this.pos++, t;
                }, t21.prototype.readU16 = function() {
                    var t = this.view.getUint16(this.pos);
                    return this.pos += 2, t;
                }, t21.prototype.readI16 = function() {
                    var t = this.view.getInt16(this.pos);
                    return this.pos += 2, t;
                }, t21.prototype.readU32 = function() {
                    var t = this.view.getUint32(this.pos);
                    return this.pos += 4, t;
                }, t21.prototype.readI32 = function() {
                    var t = this.view.getInt32(this.pos);
                    return this.pos += 4, t;
                }, t21.prototype.readU64 = function() {
                    var t, e, r, n, i = (t = this.view, e = this.pos, r = t.getUint32(e), n = t.getUint32(e + 4), r > Math.floor(Number.MAX_SAFE_INTEGER / 4294967296) ? BigInt(r) * BigInt(4294967296) + BigInt(n) : 4294967296 * r + n);
                    return this.pos += 8, i;
                }, t21.prototype.readI64 = function() {
                    var t = y(this.view, this.pos);
                    return this.pos += 8, t;
                }, t21.prototype.readF32 = function() {
                    var t = this.view.getFloat32(this.pos);
                    return this.pos += 4, t;
                }, t21.prototype.readF64 = function() {
                    var t = this.view.getFloat64(this.pos);
                    return this.pos += 8, t;
                }, t21;
            }(), R = {
            };
            function V(t, e) {
                return void 0 === e && (e = R), new O(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decode(t);
            }
            var K = function(t25, e) {
                var r, n, i, o4, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: []
                };
                function a3(o5) {
                    return function(a) {
                        return (function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for(; s;)try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                switch(n = 0, i && (o = [
                                    2 & o[0],
                                    i.value
                                ]), o[0]){
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = o[1], o = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break;
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break;
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break;
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                o = e.call(t25, s);
                            } catch (t) {
                                o = [
                                    6,
                                    t
                                ], n = 0;
                            } finally{
                                r = i = 0;
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            };
                        })([
                            o5,
                            a
                        ]);
                    };
                }
                return o4 = {
                    next: a3(0),
                    throw: a3(1),
                    return: a3(2)
                }, "function" == typeof Symbol && (o4[Symbol.iterator] = function() {
                    return this;
                }), o4;
            }, G = function(t) {
                return this instanceof G ? (this.v = t, this) : new G(t);
            }, H = function(t26, e10, r6) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n6, i = r6.apply(t26, e10 || []), o = [];
                function s(t) {
                    i[t] && (n6[t] = function(e) {
                        return new Promise(function(r, n) {
                            o.push([
                                t,
                                e,
                                r,
                                n
                            ]) > 1 || a(t, e);
                        });
                    });
                }
                function a(t, e) {
                    try {
                        (r = i[t](e)).value instanceof G ? Promise.resolve(r.value.v).then(h, u) : c(o[0][2], r);
                    } catch (t27) {
                        c(o[0][3], t27);
                    }
                    var r;
                }
                function h(t) {
                    a("next", t);
                }
                function u(t) {
                    a("throw", t);
                }
                function c(t, e) {
                    t(e), o.shift(), o.length && a(o[0][0], o[0][1]);
                }
                return n6 = {
                }, s("next"), s("throw"), s("return"), n6[Symbol.asyncIterator] = function() {
                    return this;
                }, n6;
            };
            function X(t) {
                if (null == t) throw new Error("Assertion Failure: value must not be null nor undefined");
            }
            function q(t28) {
                return null != t28[Symbol.asyncIterator] ? t28 : (function(t) {
                    return H(this, arguments, function() {
                        var e, r, n, i;
                        return K(this, function(o) {
                            switch(o.label){
                                case 0:
                                    e = t.getReader(), o.label = 1;
                                case 1:
                                    o.trys.push([
                                        1,
                                        ,
                                        9,
                                        10
                                    ]), o.label = 2;
                                case 2:
                                    return [
                                        4,
                                        G(e.read())
                                    ];
                                case 3:
                                    return r = o.sent(), n = r.done, i = r.value, n ? [
                                        4,
                                        G(void 0)
                                    ] : [
                                        3,
                                        5
                                    ];
                                case 4:
                                    return [
                                        2,
                                        o.sent()
                                    ];
                                case 5:
                                    return X(i), [
                                        4,
                                        G(i)
                                    ];
                                case 6:
                                    return [
                                        4,
                                        o.sent()
                                    ];
                                case 7:
                                    return o.sent(), [
                                        3,
                                        2
                                    ];
                                case 8:
                                    return [
                                        3,
                                        10
                                    ];
                                case 9:
                                    return e.releaseLock(), [
                                        7
                                    ];
                                case 10:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                })(t28);
            }
            var J = function(t29, e11, r, n) {
                return new (r || (r = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            h(n.next(t));
                        } catch (t30) {
                            o(t30);
                        }
                    }
                    function a(t) {
                        try {
                            h(n.throw(t));
                        } catch (t31) {
                            o(t31);
                        }
                    }
                    function h(t32) {
                        var e;
                        t32.done ? i(t32.value) : (e = t32.value, e instanceof r ? e : new r(function(t) {
                            t(e);
                        })).then(s, a);
                    }
                    h((n = n.apply(t29, e11 || [])).next());
                });
            }, Q = function(t33, e) {
                var r, n, i, o6, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: []
                };
                function a4(o7) {
                    return function(a) {
                        return (function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for(; s;)try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                switch(n = 0, i && (o = [
                                    2 & o[0],
                                    i.value
                                ]), o[0]){
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = o[1], o = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break;
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break;
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break;
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                o = e.call(t33, s);
                            } catch (t) {
                                o = [
                                    6,
                                    t
                                ], n = 0;
                            } finally{
                                r = i = 0;
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            };
                        })([
                            o7,
                            a
                        ]);
                    };
                }
                return o6 = {
                    next: a4(0),
                    throw: a4(1),
                    return: a4(2)
                }, "function" == typeof Symbol && (o6[Symbol.iterator] = function() {
                    return this;
                }), o6;
            };
            function Y(t, e) {
                return void 0 === e && (e = R), J(this, void 0, void 0, function() {
                    var r;
                    return Q(this, function(n) {
                        return r = q(t), [
                            2,
                            new O(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeAsync(r)
                        ];
                    });
                });
            }
            function Z(t, e) {
                void 0 === e && (e = R);
                var r = q(t);
                return new O(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeArrayStream(r);
            }
            function $(t, e) {
                void 0 === e && (e = R);
                var r = q(t);
                return new O(e.extensionCodec, e.context, e.maxStrLength, e.maxBinLength, e.maxArrayLength, e.maxMapLength, e.maxExtLength).decodeStream(r);
            }
        }
    ]);
});

},{"process":"1WSHx"}],"3lKGd":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
/*
 * [hi-base32]{@link https://github.com/emn178/hi-base32}
 *
 * @version 0.5.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */ /*jslint bitwise: true */ (function() {
    var root = typeof window === 'object' ? window : {
    };
    var NODE_JS = !root.HI_BASE32_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
    if (NODE_JS) root = global;
    var COMMON_JS = !root.HI_BASE32_NO_COMMON_JS && typeof module === 'object' && module.exports;
    var AMD = typeof define === 'function' && define.amd;
    var BASE32_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.split('');
    var BASE32_DECODE_CHAR = {
        'A': 0,
        'B': 1,
        'C': 2,
        'D': 3,
        'E': 4,
        'F': 5,
        'G': 6,
        'H': 7,
        'I': 8,
        'J': 9,
        'K': 10,
        'L': 11,
        'M': 12,
        'N': 13,
        'O': 14,
        'P': 15,
        'Q': 16,
        'R': 17,
        'S': 18,
        'T': 19,
        'U': 20,
        'V': 21,
        'W': 22,
        'X': 23,
        'Y': 24,
        'Z': 25,
        '2': 26,
        '3': 27,
        '4': 28,
        '5': 29,
        '6': 30,
        '7': 31
    };
    var blocks = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    var throwInvalidUtf8 = function(position, partial) {
        if (partial.length > 10) partial = '...' + partial.substr(-10);
        var err = new Error("Decoded data is not valid UTF-8. Maybe try base32.decode.asBytes()? Partial data after reading " + position + ' bytes: ' + partial + ' <-');
        err.position = position;
        throw err;
    };
    var toUtf8String = function(bytes) {
        var str = '', length = bytes.length, i = 0, followingChars = 0, b, c;
        while(i < length){
            b = bytes[i++];
            if (b <= 127) {
                str += String.fromCharCode(b);
                continue;
            } else if (b > 191 && b <= 223) {
                c = b & 31;
                followingChars = 1;
            } else if (b <= 239) {
                c = b & 15;
                followingChars = 2;
            } else if (b <= 247) {
                c = b & 7;
                followingChars = 3;
            } else throwInvalidUtf8(i, str);
            for(var j = 0; j < followingChars; ++j){
                b = bytes[i++];
                if (b < 128 || b > 191) throwInvalidUtf8(i, str);
                c <<= 6;
                c += b & 63;
            }
            if (c >= 55296 && c <= 57343) throwInvalidUtf8(i, str);
            if (c > 1114111) throwInvalidUtf8(i, str);
            if (c <= 65535) str += String.fromCharCode(c);
            else {
                c -= 65536;
                str += String.fromCharCode((c >> 10) + 55296);
                str += String.fromCharCode((c & 1023) + 56320);
            }
        }
        return str;
    };
    var decodeAsBytes = function(base32Str) {
        if (base32Str === '') return [];
        else if (!/^[A-Z2-7=]+$/.test(base32Str)) throw new Error('Invalid base32 characters');
        base32Str = base32Str.replace(/=/g, '');
        var v1, v2, v3, v4, v5, v6, v7, v8, bytes = [], index = 0, length = base32Str.length;
        // 4 char to 3 bytes
        for(var i = 0, count = length >> 3 << 3; i < count;){
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
            bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
            bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
            bytes[index++] = (v7 << 5 | v8) & 255;
        }
        // remain bytes
        var remain = length - count;
        if (remain === 2) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
        } else if (remain === 4) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
        } else if (remain === 5) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
            bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
        } else if (remain === 7) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
            bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
            bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
        }
        return bytes;
    };
    var encodeAscii = function(str) {
        var v1, v2, v3, v4, v5, base32Str = '', length = str.length;
        for(var i = 0, count = parseInt(length / 5) * 5; i < count;){
            v1 = str.charCodeAt(i++);
            v2 = str.charCodeAt(i++);
            v3 = str.charCodeAt(i++);
            v4 = str.charCodeAt(i++);
            v5 = str.charCodeAt(i++);
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
        }
        // remain char
        var remain = length - count;
        if (remain === 1) {
            v1 = str.charCodeAt(i);
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + '======';
        } else if (remain === 2) {
            v1 = str.charCodeAt(i++);
            v2 = str.charCodeAt(i);
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + '====';
        } else if (remain === 3) {
            v1 = str.charCodeAt(i++);
            v2 = str.charCodeAt(i++);
            v3 = str.charCodeAt(i);
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + '===';
        } else if (remain === 4) {
            v1 = str.charCodeAt(i++);
            v2 = str.charCodeAt(i++);
            v3 = str.charCodeAt(i++);
            v4 = str.charCodeAt(i);
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + '=';
        }
        return base32Str;
    };
    var encodeUtf8 = function(str) {
        var v1, v2, v3, v4, v5, code, end = false, base32Str = '', index = 0, i, start = 0, bytes = 0, length = str.length;
        if (str === '') return base32Str;
        do {
            blocks[0] = blocks[5];
            blocks[1] = blocks[6];
            blocks[2] = blocks[7];
            for(i = start; index < length && i < 5; ++index){
                code = str.charCodeAt(index);
                if (code < 128) blocks[i++] = code;
                else if (code < 2048) {
                    blocks[i++] = 192 | code >> 6;
                    blocks[i++] = 128 | code & 63;
                } else if (code < 55296 || code >= 57344) {
                    blocks[i++] = 224 | code >> 12;
                    blocks[i++] = 128 | code >> 6 & 63;
                    blocks[i++] = 128 | code & 63;
                } else {
                    code = 65536 + ((code & 1023) << 10 | str.charCodeAt(++index) & 1023);
                    blocks[i++] = 240 | code >> 18;
                    blocks[i++] = 128 | code >> 12 & 63;
                    blocks[i++] = 128 | code >> 6 & 63;
                    blocks[i++] = 128 | code & 63;
                }
            }
            bytes += i - start;
            start = i - 5;
            if (index === length) ++index;
            if (index > length && i < 6) end = true;
            v1 = blocks[0];
            if (i > 4) {
                v2 = blocks[1];
                v3 = blocks[2];
                v4 = blocks[3];
                v5 = blocks[4];
                base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
            } else if (i === 1) base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + '======';
            else if (i === 2) {
                v2 = blocks[1];
                base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + '====';
            } else if (i === 3) {
                v2 = blocks[1];
                v3 = blocks[2];
                base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + '===';
            } else {
                v2 = blocks[1];
                v3 = blocks[2];
                v4 = blocks[3];
                base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + '=';
            }
        }while (!end)
        return base32Str;
    };
    var encodeBytes = function(bytes) {
        var v1, v2, v3, v4, v5, base32Str = '', length = bytes.length;
        for(var i = 0, count = parseInt(length / 5) * 5; i < count;){
            v1 = bytes[i++];
            v2 = bytes[i++];
            v3 = bytes[i++];
            v4 = bytes[i++];
            v5 = bytes[i++];
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
        }
        // remain char
        var remain = length - count;
        if (remain === 1) {
            v1 = bytes[i];
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + '======';
        } else if (remain === 2) {
            v1 = bytes[i++];
            v2 = bytes[i];
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + '====';
        } else if (remain === 3) {
            v1 = bytes[i++];
            v2 = bytes[i++];
            v3 = bytes[i];
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + '===';
        } else if (remain === 4) {
            v1 = bytes[i++];
            v2 = bytes[i++];
            v3 = bytes[i++];
            v4 = bytes[i];
            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + '=';
        }
        return base32Str;
    };
    var encode = function(input, asciiOnly) {
        var notString = typeof input !== 'string';
        if (notString && input.constructor === ArrayBuffer) input = new Uint8Array(input);
        if (notString) return encodeBytes(input);
        else if (asciiOnly) return encodeAscii(input);
        else return encodeUtf8(input);
    };
    var decode = function(base32Str, asciiOnly) {
        if (!asciiOnly) return toUtf8String(decodeAsBytes(base32Str));
        if (base32Str === '') return '';
        else if (!/^[A-Z2-7=]+$/.test(base32Str)) throw new Error('Invalid base32 characters');
        var v1, v2, v3, v4, v5, v6, v7, v8, str = '', length = base32Str.indexOf('=');
        if (length === -1) length = base32Str.length;
        // 8 char to 5 bytes
        for(var i = 0, count = length >> 3 << 3; i < count;){
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) + String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255) + String.fromCharCode((v7 << 5 | v8) & 255);
        }
        // remain bytes
        var remain = length - count;
        if (remain === 2) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255);
        } else if (remain === 4) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255);
        } else if (remain === 5) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255);
        } else if (remain === 7) {
            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) + String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255);
        }
        return str;
    };
    var exports = {
        encode: encode,
        decode: decode
    };
    decode.asBytes = decodeAsBytes;
    if (COMMON_JS) module.exports = exports;
    else {
        root.base32 = exports;
        if (AMD) define(function() {
            return exports;
        });
    }
})();

},{"process":"1WSHx"}],"hmEJq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CachedKeyDecoder = void 0;
const utf8_1 = require("./utils/utf8");
const DEFAULT_MAX_KEY_LENGTH = 16;
const DEFAULT_MAX_LENGTH_PER_KEY = 16;
class CachedKeyDecoder {
    constructor(maxKeyLength = DEFAULT_MAX_KEY_LENGTH, maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY){
        this.maxKeyLength = maxKeyLength;
        this.maxLengthPerKey = maxLengthPerKey;
        this.hit = 0;
        this.miss = 0;
        // avoid `new Array(N)` to create a non-sparse array for performance.
        this.caches = [];
        for(let i = 0; i < this.maxKeyLength; i++)this.caches.push([]);
    }
    canBeCached(byteLength) {
        return byteLength > 0 && byteLength <= this.maxKeyLength;
    }
    get(bytes, inputOffset, byteLength1) {
        const records = this.caches[byteLength1 - 1];
        const recordsLength = records.length;
        FIND_CHUNK: for(let i = 0; i < recordsLength; i++){
            const record = records[i];
            const recordBytes = record.bytes;
            for(let j = 0; j < byteLength1; j++){
                if (recordBytes[j] !== bytes[inputOffset + j]) continue FIND_CHUNK;
            }
            return record.value;
        }
        return null;
    }
    store(bytes1, value) {
        const records = this.caches[bytes1.length - 1];
        const record = {
            bytes: bytes1,
            value
        };
        if (records.length >= this.maxLengthPerKey) // `records` are full!
        // Set `record` to a randomized position.
        records[Math.random() * records.length | 0] = record;
        else records.push(record);
    }
    decode(bytes2, inputOffset1, byteLength2) {
        const cachedValue = this.get(bytes2, inputOffset1, byteLength2);
        if (cachedValue != null) {
            this.hit++;
            return cachedValue;
        }
        this.miss++;
        const value = utf8_1.utf8DecodeJs(bytes2, inputOffset1, byteLength2);
        // Ensure to copy a slice of bytes because the byte may be NodeJS Buffer and Buffer#slice() returns a reference to its internal ArrayBuffer.
        const slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes2, inputOffset1, inputOffset1 + byteLength2);
        this.store(slicedCopyOfBytes, value);
        return value;
    }
}
exports.CachedKeyDecoder = CachedKeyDecoder;

},{"./utils/utf8":"2GKEM"}],"2GKEM":[function(require,module,exports) {
var process = require("process");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.utf8DecodeTD = exports.TEXT_DECODER_THRESHOLD = exports.utf8DecodeJs = exports.utf8EncodeTE = exports.TEXT_ENCODER_THRESHOLD = exports.utf8EncodeJs = exports.utf8Count = exports.TEXT_ENCODING_AVAILABLE = void 0;
exports.TEXT_ENCODING_AVAILABLE = typeof process !== "undefined" && true && typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined";
function utf8Count(str) {
    const strLength = str.length;
    let byteLength = 0;
    let pos = 0;
    while(pos < strLength){
        let value = str.charCodeAt(pos++);
        if ((value & 4294967168) === 0) {
            // 1-byte
            byteLength++;
            continue;
        } else if ((value & 4294965248) === 0) // 2-bytes
        byteLength += 2;
        else {
            // handle surrogate pair
            if (value >= 55296 && value <= 56319) // high surrogate
            {
                if (pos < strLength) {
                    const extra = str.charCodeAt(pos);
                    if ((extra & 64512) === 56320) {
                        ++pos;
                        value = ((value & 1023) << 10) + (extra & 1023) + 65536;
                    }
                }
            }
            if ((value & 4294901760) === 0) // 3-byte
            byteLength += 3;
            else // 4-byte
            byteLength += 4;
        }
    }
    return byteLength;
}
exports.utf8Count = utf8Count;
function utf8EncodeJs(str, output, outputOffset) {
    const strLength = str.length;
    let offset = outputOffset;
    let pos = 0;
    while(pos < strLength){
        let value = str.charCodeAt(pos++);
        if ((value & 4294967168) === 0) {
            // 1-byte
            output[offset++] = value;
            continue;
        } else if ((value & 4294965248) === 0) // 2-bytes
        output[offset++] = value >> 6 & 31 | 192;
        else {
            // handle surrogate pair
            if (value >= 55296 && value <= 56319) // high surrogate
            {
                if (pos < strLength) {
                    const extra = str.charCodeAt(pos);
                    if ((extra & 64512) === 56320) {
                        ++pos;
                        value = ((value & 1023) << 10) + (extra & 1023) + 65536;
                    }
                }
            }
            if ((value & 4294901760) === 0) {
                // 3-byte
                output[offset++] = value >> 12 & 15 | 224;
                output[offset++] = value >> 6 & 63 | 128;
            } else {
                // 4-byte
                output[offset++] = value >> 18 & 7 | 240;
                output[offset++] = value >> 12 & 63 | 128;
                output[offset++] = value >> 6 & 63 | 128;
            }
        }
        output[offset++] = value & 63 | 128;
    }
}
exports.utf8EncodeJs = utf8EncodeJs;
const sharedTextEncoder = exports.TEXT_ENCODING_AVAILABLE ? new TextEncoder() : undefined;
exports.TEXT_ENCODER_THRESHOLD = typeof process !== "undefined" && true ? 200 : 0;
function utf8EncodeTEencode(str, output, outputOffset) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    output.set(sharedTextEncoder.encode(str), outputOffset);
}
function utf8EncodeTEencodeInto(str, output, outputOffset) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
}
exports.utf8EncodeTE = (sharedTextEncoder === null || sharedTextEncoder === void 0 ? void 0 : sharedTextEncoder.encodeInto) ? utf8EncodeTEencodeInto : utf8EncodeTEencode;
const CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
    let offset = inputOffset;
    const end = offset + byteLength;
    const units = [];
    let result = "";
    while(offset < end){
        const byte1 = bytes[offset++];
        if ((byte1 & 128) === 0) // 1 byte
        units.push(byte1);
        else if ((byte1 & 224) === 192) {
            // 2 bytes
            const byte2 = bytes[offset++] & 63;
            units.push((byte1 & 31) << 6 | byte2);
        } else if ((byte1 & 240) === 224) {
            // 3 bytes
            const byte2 = bytes[offset++] & 63;
            const byte3 = bytes[offset++] & 63;
            units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
        } else if ((byte1 & 248) === 240) {
            // 4 bytes
            const byte2 = bytes[offset++] & 63;
            const byte3 = bytes[offset++] & 63;
            const byte4 = bytes[offset++] & 63;
            let unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
            if (unit > 65535) {
                unit -= 65536;
                units.push(unit >>> 10 & 1023 | 55296);
                unit = 56320 | unit & 1023;
            }
            units.push(unit);
        } else units.push(byte1);
        if (units.length >= CHUNK_SIZE) {
            result += String.fromCharCode(...units);
            units.length = 0;
        }
    }
    if (units.length > 0) result += String.fromCharCode(...units);
    return result;
}
exports.utf8DecodeJs = utf8DecodeJs;
const sharedTextDecoder = exports.TEXT_ENCODING_AVAILABLE ? new TextDecoder() : null;
exports.TEXT_DECODER_THRESHOLD = typeof process !== "undefined" && true ? 200 : 0;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
    const stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return sharedTextDecoder.decode(stringBytes);
}
exports.utf8DecodeTD = utf8DecodeTD;

},{"process":"1WSHx"}]},["7rHbE","htEpl"], "htEpl", "parcelRequire94c2")

//# sourceMappingURL=index.a0da34c2.js.map
