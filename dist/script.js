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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"dpgAG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _lenis = require("@studio-freight/lenis");
var _lenisDefault = parcelHelpers.interopDefault(_lenis);
alert("hey");
const lenis = new (0, _lenisDefault.default)();
lenis.on("scroll", (e)=>{
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

},{"@studio-freight/lenis":"ggVJc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggVJc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>h);
function t(t, e) {
    for(var i = 0; i < e.length; i++){
        var o = e[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, "symbol" == typeof (n = function(t, e) {
            if ("object" != typeof t || null === t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
                var o = i.call(t, "string");
                if ("object" != typeof o) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        }(o.key)) ? n : String(n), o);
    }
    var n;
}
function e(e, i, o) {
    return i && t(e.prototype, i), o && t(e, o), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function i() {
    return i = Object.assign ? Object.assign.bind() : function(t) {
        for(var e = 1; e < arguments.length; e++){
            var i = arguments[e];
            for(var o in i)Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
        }
        return t;
    }, i.apply(this, arguments);
}
function o(t, e, i) {
    return Math.max(t, Math.min(e, i));
}
var n = /*#__PURE__*/ function() {
    function t() {}
    var e = t.prototype;
    return e.advance = function(t) {
        var e;
        if (this.isRunning) {
            var i, n = !1;
            if (this.lerp) this.value = (1 - (i = this.lerp)) * this.value + i * this.to, Math.round(this.value) === this.to && (this.value = this.to, n = !0);
            else {
                this.currentTime += t;
                var s = o(0, this.currentTime / this.duration, 1), r = (n = s >= 1) ? 1 : this.easing(s);
                this.value = this.from + (this.to - this.from) * r;
            }
            null == (e = this.onUpdate) || e.call(this, this.value, {
                completed: n
            }), n && this.stop();
        }
    }, e.stop = function() {
        this.isRunning = !1;
    }, e.fromTo = function(t, e, i) {
        var o = i.lerp, n = void 0 === o ? .1 : o, s = i.duration, r = void 0 === s ? 1 : s, l = i.easing, h = void 0 === l ? function(t) {
            return t;
        } : l, a = i.onUpdate;
        this.from = this.value = t, this.to = e, this.lerp = n, this.duration = r, this.easing = h, this.currentTime = 0, this.isRunning = !0, this.onUpdate = a;
    }, t;
}();
function s(t, e) {
    var i;
    return function() {
        var o = arguments, n = this;
        clearTimeout(i), i = setTimeout(function() {
            t.apply(n, o);
        }, e);
    };
}
var r = /*#__PURE__*/ function() {
    function t(t, e) {
        var i = this;
        this.onWindowResize = function() {
            i.width = window.innerWidth, i.height = window.innerHeight;
        }, this.onWrapperResize = function() {
            i.width = i.wrapper.clientWidth, i.height = i.wrapper.clientHeight;
        }, this.onContentResize = function() {
            var t = i.wrapper === window ? document.documentElement : i.wrapper;
            i.scrollHeight = t.scrollHeight, i.scrollWidth = t.scrollWidth;
        }, this.wrapper = t, this.content = e, this.wrapper === window ? (window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize()) : (this.wrapperResizeObserver = new ResizeObserver(s(this.onWrapperResize, 100)), this.wrapperResizeObserver.observe(this.wrapper), this.onWrapperResize()), this.contentResizeObserver = new ResizeObserver(s(this.onContentResize, 100)), this.contentResizeObserver.observe(this.content), this.onContentResize();
    }
    return t.prototype.destroy = function() {
        var t, e;
        window.removeEventListener("resize", this.onWindowResize, !1), null == (t = this.wrapperResizeObserver) || t.disconnect(), null == (e = this.contentResizeObserver) || e.disconnect();
    }, e(t, [
        {
            key: "limit",
            get: function() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                };
            }
        }
    ]), t;
}(), l = /*#__PURE__*/ function() {
    function t(t, e) {
        var i = this, n = e.wheelMultiplier, s = void 0 === n ? 1 : n, r = e.touchMultiplier, l = void 0 === r ? 2 : r, h = e.normalizeWheel, a = void 0 !== h && h;
        this.onTouchStart = function(t) {
            var e = t.targetTouches ? t.targetTouches[0] : t, o = e.clientY;
            i.touchStart.x = e.clientX, i.touchStart.y = o, i.lastDelta = {
                x: 0,
                y: 0
            };
        }, this.onTouchMove = function(t) {
            var e = t.targetTouches ? t.targetTouches[0] : t, o = e.clientX, n = e.clientY, s = -(o - i.touchStart.x) * i.touchMultiplier, r = -(n - i.touchStart.y) * i.touchMultiplier;
            i.touchStart.x = o, i.touchStart.y = n, i.lastDelta = {
                x: s,
                y: r
            }, i.emitter.emit("scroll", {
                type: "touch",
                deltaX: s,
                deltaY: r,
                event: t
            });
        }, this.onTouchEnd = function(t) {
            i.emitter.emit("scroll", {
                type: "touch",
                inertia: !0,
                deltaX: i.lastDelta.x,
                deltaY: i.lastDelta.y,
                event: t
            });
        }, this.onWheel = function(t) {
            var e = t.deltaX, n = t.deltaY;
            i.normalizeWheel && (e = o(-100, e, 100), n = o(-100, n, 100)), i.emitter.emit("scroll", {
                type: "wheel",
                deltaX: e *= i.wheelMultiplier,
                deltaY: n *= i.wheelMultiplier,
                event: t
            });
        }, this.element = t, this.wheelMultiplier = s, this.touchMultiplier = l, this.normalizeWheel = a, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = {
            events: {},
            emit: function(t) {
                for(var e = this.events[t] || [], i = 0, o = e.length; i < o; i++)e[i].apply(e, [].slice.call(arguments, 1));
            },
            on: function(t, e) {
                var i, o = this;
                return (null == (i = this.events[t]) ? void 0 : i.push(e)) || (this.events[t] = [
                    e
                ]), function() {
                    var i;
                    o.events[t] = null == (i = o.events[t]) ? void 0 : i.filter(function(t) {
                        return e !== t;
                    });
                };
            }
        }, this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        });
    }
    var e = t.prototype;
    return e.on = function(t, e) {
        return this.emitter.on(t, e);
    }, e.destroy = function() {
        this.emitter.events = {}, this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        });
    }, t;
}(), h = /*#__PURE__*/ function() {
    function t(t) {
        var e = this, o = void 0 === t ? {} : t, s = o.direction, h = o.gestureDirection, a = o.mouseMultiplier, c = o.smooth, u = o.wrapper, p = void 0 === u ? window : u, d = o.content, v = void 0 === d ? document.documentElement : d, m = o.wheelEventsTarget, f = void 0 === m ? p : m, g = o.smoothWheel, w = void 0 === g ? null == c || c : g, S = o.smoothTouch, y = void 0 !== S && S, T = o.syncTouch, z = void 0 !== T && T, b = o.syncTouchLerp, M = void 0 === b ? .1 : b, E = o.touchInertiaMultiplier, L = void 0 === E ? 35 : E, W = o.duration, R = o.easing, O = void 0 === R ? function(t) {
            return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        } : R, _ = o.lerp, k = void 0 === _ ? W ? null : .1 : _, x = o.infinite, H = void 0 !== x && x, D = o.orientation, j = void 0 === D ? null != s ? s : "vertical" : D, X = o.gestureOrientation, Y = void 0 === X ? null != h ? h : "vertical" : X, C = o.touchMultiplier, P = void 0 === C ? 1 : C, U = o.wheelMultiplier, A = void 0 === U ? null != a ? a : 1 : U, I = o.normalizeWheel, V = void 0 !== I && I;
        this.onVirtualScroll = function(t) {
            var o = t.type, n = t.inertia, s = t.deltaX, r = t.deltaY, l = t.event;
            if (!l.ctrlKey) {
                var h = "touch" === o, a = "wheel" === o;
                if (!("vertical" === e.options.gestureOrientation && 0 === r || "horizontal" === e.options.gestureOrientation && 0 === s || h && "vertical" === e.options.gestureOrientation && 0 === e.scroll && !e.options.infinite && r <= 0 || l.composedPath().find(function(t) {
                    return null == t || null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent");
                }))) {
                    if (e.isStopped || e.isLocked) l.preventDefault();
                    else {
                        if (e.isSmooth = (e.options.smoothTouch || e.options.syncTouch) && h || e.options.smoothWheel && a, !e.isSmooth) return e.isScrolling = !1, void e.animate.stop();
                        l.preventDefault();
                        var c = r;
                        "both" === e.options.gestureOrientation ? c = Math.abs(r) > Math.abs(s) ? r : s : "horizontal" === e.options.gestureOrientation && (c = s);
                        var u = h && e.options.syncTouch, p = h && n && Math.abs(c) > 1;
                        p && (c = e.velocity * e.options.touchInertiaMultiplier), e.scrollTo(e.targetScroll + c, i({
                            programmatic: !1
                        }, u && {
                            lerp: p ? e.syncTouchLerp : .4
                        }));
                    }
                }
            }
        }, this.onScroll = function() {
            if (!e.isScrolling) {
                var t = e.animatedScroll;
                e.animatedScroll = e.targetScroll = e.actualScroll, e.velocity = 0, e.direction = Math.sign(e.animatedScroll - t), e.emit();
            }
        }, s && console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"), h && console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"), a && console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"), c && console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"), window.lenisVersion = "1.0.10", p !== document.documentElement && p !== document.body || (p = window), this.options = {
            wrapper: p,
            content: v,
            wheelEventsTarget: f,
            smoothWheel: w,
            smoothTouch: y,
            syncTouch: z,
            syncTouchLerp: M,
            touchInertiaMultiplier: L,
            duration: W,
            easing: O,
            lerp: k,
            infinite: H,
            gestureOrientation: Y,
            orientation: j,
            touchMultiplier: P,
            wheelMultiplier: A,
            normalizeWheel: V
        }, this.dimensions = new r(p, v), this.rootElement.classList.add("lenis"), this.velocity = 0, this.isStopped = !1, this.isSmooth = w || y, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.animate = new n, this.emitter = {
            events: {},
            emit: function(t) {
                for(var e = this.events[t] || [], i = 0, o = e.length; i < o; i++)e[i].apply(e, [].slice.call(arguments, 1));
            },
            on: function(t, e) {
                var i, o = this;
                return (null == (i = this.events[t]) ? void 0 : i.push(e)) || (this.events[t] = [
                    e
                ]), function() {
                    var i;
                    o.events[t] = null == (i = o.events[t]) ? void 0 : i.filter(function(t) {
                        return e !== t;
                    });
                };
            }
        }, this.options.wrapper.addEventListener("scroll", this.onScroll, {
            passive: !1
        }), this.virtualScroll = new l(f, {
            touchMultiplier: P,
            wheelMultiplier: A,
            normalizeWheel: V
        }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    var s = t.prototype;
    return s.destroy = function() {
        this.emitter.events = {}, this.options.wrapper.removeEventListener("scroll", this.onScroll, {
            passive: !1
        }), this.virtualScroll.destroy();
    }, s.on = function(t, e) {
        return this.emitter.on(t, e);
    }, s.off = function(t, e) {
        var i;
        this.emitter.events[t] = null == (i = this.emitter.events[t]) ? void 0 : i.filter(function(t) {
            return e !== t;
        });
    }, s.setScroll = function(t) {
        this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t;
    }, s.emit = function() {
        this.emitter.emit("scroll", this);
    }, s.reset = function() {
        this.isLocked = !1, this.isScrolling = !1, this.velocity = 0, this.animate.stop();
    }, s.start = function() {
        this.isStopped = !1, this.reset();
    }, s.stop = function() {
        this.isStopped = !0, this.animate.stop(), this.reset();
    }, s.raf = function(t) {
        var e = t - (this.time || t);
        this.time = t, this.animate.advance(.001 * e);
    }, s.scrollTo = function(t, e) {
        var i = this, n = void 0 === e ? {} : e, s = n.offset, r = void 0 === s ? 0 : s, l = n.immediate, h = void 0 !== l && l, a = n.lock, c = void 0 !== a && a, u = n.duration, p = void 0 === u ? this.options.duration : u, d = n.easing, v = void 0 === d ? this.options.easing : d, m = n.lerp, f = void 0 === m ? !p && this.options.lerp : m, g = n.onComplete, w = void 0 === g ? null : g, S = n.force, y = n.programmatic, T = void 0 === y || y;
        if (!this.isStopped || void 0 !== S && S) {
            if ([
                "top",
                "left",
                "start"
            ].includes(t)) t = 0;
            else if ([
                "bottom",
                "right",
                "end"
            ].includes(t)) t = this.limit;
            else {
                var z, b;
                if ("string" == typeof t ? b = document.querySelector(t) : null != (z = t) && z.nodeType && (b = t), b) {
                    if (this.options.wrapper !== window) {
                        var M = this.options.wrapper.getBoundingClientRect();
                        r -= this.isHorizontal ? M.left : M.top;
                    }
                    var E = b.getBoundingClientRect();
                    t = (this.isHorizontal ? E.left : E.top) + this.animatedScroll;
                }
            }
            if ("number" == typeof t) {
                if (t += r, this.options.infinite ? T && (this.targetScroll = this.animatedScroll = this.scroll) : t = o(0, t, this.limit), h) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), this.emit(), void (null == w || w());
                if (!T) {
                    if (t === this.targetScroll) return;
                    this.targetScroll = t;
                }
                this.animate.fromTo(this.animatedScroll, t, {
                    duration: p,
                    easing: v,
                    lerp: f,
                    onUpdate: function(t, e) {
                        var o = e.completed;
                        c && (i.isLocked = !0), i.isScrolling = !0, i.velocity = t - i.animatedScroll, i.direction = Math.sign(i.velocity), i.animatedScroll = t, i.setScroll(i.scroll), T && (i.targetScroll = t), o && (c && (i.isLocked = !1), requestAnimationFrame(function() {
                            i.isScrolling = !1;
                        }), i.velocity = 0, null == w || w()), i.emit();
                    }
                });
            }
        }
    }, e(t, [
        {
            key: "rootElement",
            get: function() {
                return this.options.wrapper === window ? this.options.content : this.options.wrapper;
            }
        },
        {
            key: "limit",
            get: function() {
                return this.isHorizontal ? this.dimensions.limit.x : this.dimensions.limit.y;
            }
        },
        {
            key: "isHorizontal",
            get: function() {
                return "horizontal" === this.options.orientation;
            }
        },
        {
            key: "actualScroll",
            get: function() {
                return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
            }
        },
        {
            key: "scroll",
            get: function() {
                var t, e;
                return this.options.infinite ? (e = this.animatedScroll % (t = this.limit), (t > 0 && e < 0 || t < 0 && e > 0) && (e += t), e) : this.animatedScroll;
            }
        },
        {
            key: "progress",
            get: function() {
                return 0 === this.limit ? 1 : this.scroll / this.limit;
            }
        },
        {
            key: "isSmooth",
            get: function() {
                return this.__isSmooth;
            },
            set: function(t) {
                this.__isSmooth !== t && (this.rootElement.classList.toggle("lenis-smooth", t), this.__isSmooth = t);
            }
        },
        {
            key: "isScrolling",
            get: function() {
                return this.__isScrolling;
            },
            set: function(t) {
                this.__isScrolling !== t && (this.rootElement.classList.toggle("lenis-scrolling", t), this.__isScrolling = t);
            }
        },
        {
            key: "isStopped",
            get: function() {
                return this.__isStopped;
            },
            set: function(t) {
                this.__isStopped !== t && (this.rootElement.classList.toggle("lenis-stopped", t), this.__isStopped = t);
            }
        }
    ]), t;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}]},["dpgAG","6rimH"], "6rimH", "parcelRequireef8a")

//# sourceMappingURL=script.js.map
