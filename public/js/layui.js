!function (a) {
    "use strict";

    function i() {
        this.v = "2.6.6"
    }

    function p(e, t) {
        t = t || "log", a.console && console[t] && console[t]("layui error hint: " + e)
    }

    var e, h = document, y = {modules: {}, status: {}, timeout: 10, event: {}}, t = window.LAYUI_GLOBAL || {},
        m = (e = h.currentScript ? h.currentScript.src : function () {
            for (var e, t = h.scripts, n = t.length - 1, i = n; 0 < i; i--) if ("interactive" === t[i].readyState) {
                e = t[i].src;
                break
            }
            return e || t[n].src
        }(), y.dir = t.dir || e.substring(0, e.lastIndexOf("/") + 1)),
        g = "undefined" != typeof opera && "[object Opera]" === opera.toString(), v = y.builtin = {
            lay: "lay",
            layer: "layer",
            laydate: "laydate",
            laypage: "laypage",
            laytpl: "laytpl",
            layedit: "layedit",
            form: "form",
            upload: "upload",
            dropdown: "dropdown",
            transfer: "transfer",
            tree: "tree",
            table: "table",
            element: "element",
            rate: "rate",
            colorpicker: "colorpicker",
            slider: "slider",
            carousel: "carousel",
            flow: "flow",
            util: "util",
            code: "code",
            jquery: "jquery",
            all: "all",
            "layui.all": "layui.all"
        };
    i.prototype.cache = y, i.prototype.define = function (e, i) {
        return "function" == typeof e && (i = e, e = []), this.use(e, function () {
            function n(e, t) {
                layui[e] = t, y.status[e] = !0
            }

            return "function" == typeof i && i(function (e, t) {
                n(e, t), y.callback[e] = function () {
                    i(n)
                }
            }), this
        }, null, "define"), this
    }, i.prototype.use = function (n, e, t, i) {
        function a(e, t) {
            var n = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
            "load" !== e.type && !n.test((e.currentTarget || e.srcElement).readyState) || (y.modules[c] = t, s.removeChild(d), function e() {
                return ++u > 1e3 * y.timeout / 4 ? p(c + " is not a valid module", "error") : void (y.status[c] ? o() : setTimeout(e, 4))
            }())
        }

        function o() {
            t.push(layui[c]), 1 < n.length ? r.use(n.slice(1), e, t, i) : "function" == typeof e && (layui.jquery && "function" == typeof layui.jquery && "define" !== i ? layui.jquery(function () {
                e.apply(layui, t)
            }) : e.apply(layui, t))
        }

        var r = this, l = y.dir = y.dir || m, s = h.getElementsByTagName("head")[0];
        n = "string" == typeof n ? [n] : "function" == typeof n ? (e = n, ["all"]) : n, window.jQuery && jQuery.fn.on && (r.each(n, function (e, t) {
            "jquery" === t && n.splice(e, 1)
        }), layui.jquery = layui.$ = jQuery);
        var c = n[0], u = 0;
        if (t = t || [], y.host = y.host || (l.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0], 0 === n.length || layui["layui.all"] && v[c]) return o(), r;
        var d,
            f = (f = (v[c] ? l + "modules/" : !/^\{\/\}/.test(r.modules[c]) && y.base || "") + (r.modules[c] || c) + ".js").replace(/^\{\/\}/, "");
        return !y.modules[c] && layui[c] && (y.modules[c] = f), y.modules[c] ? function e() {
            return ++u > 1e3 * y.timeout / 4 ? p(c + " is not a valid module", "error") : void ("string" == typeof y.modules[c] && y.status[c] ? o() : setTimeout(e, 4))
        }() : ((d = h.createElement("script")).async = !0, d.charset = "utf-8", d.src = f + ((l = !0 === y.version ? y.v || (new Date).getTime() : y.version || "") ? "?v=" + l : ""), s.appendChild(d), !d.attachEvent || d.attachEvent.toString && d.attachEvent.toString().indexOf("[native code") < 0 || g ? d.addEventListener("load", function (e) {
            a(e, f)
        }, !1) : d.attachEvent("onreadystatechange", function (e) {
            a(e, f)
        }), y.modules[c] = f), r
    }, i.prototype.getStyle = function (e, t) {
        e = e.currentStyle || a.getComputedStyle(e, null);
        return e[e.getPropertyValue ? "getPropertyValue" : "getAttribute"](t)
    }, i.prototype.link = function (i, a, e) {
        var o = this, t = h.getElementsByTagName("head")[0], n = h.createElement("link"),
            e = ((e = "string" == typeof a ? a : e) || i).replace(/\.|\//g, ""), r = n.id = "layuicss-" + e,
            l = "creating", s = 0;
        return n.rel = "stylesheet", n.href = i + (y.debug ? "?v=" + (new Date).getTime() : ""), n.media = "all", h.getElementById(r) || t.appendChild(n), "function" != typeof a || function e(t) {
            var n = h.getElementById(r);
            return ++s > 1e3 * y.timeout / 100 ? p(i + " timeout") : void (1989 === parseInt(o.getStyle(n, "width")) ? (t === l && n.removeAttribute("lay-status"), n.getAttribute("lay-status") === l ? setTimeout(e, 100) : a()) : (n.setAttribute("lay-status", l), setTimeout(function () {
                e(l)
            }, 100)))
        }(), o
    }, i.prototype.addcss = function (e, t, n) {
        return layui.link(y.dir + "css/" + e, t, n)
    }, y.callback = {}, i.prototype.factory = function (e) {
        if (layui[e]) return "function" == typeof y.callback[e] ? y.callback[e] : null
    }, i.prototype.img = function (e, t, n) {
        var i = new Image;
        return i.src = e, i.complete ? t(i) : (i.onload = function () {
            i.onload = null, "function" == typeof t && t(i)
        }, void (i.onerror = function (e) {
            i.onerror = null, "function" == typeof n && n(e)
        }))
    }, i.prototype.config = function (e) {
        for (var t in e = e || {}) y[t] = e[t];
        return this
    }, i.prototype.modules = function () {
        var e, t = {};
        for (e in v) t[e] = v[e];
        return t
    }(), i.prototype.extend = function (e) {
        for (var t in e = e || {}) this[t] || this.modules[t] ? p(t + " Module already exists", "error") : this.modules[t] = e[t];
        return this
    }, i.prototype.router = function (e) {
        var n = {path: [], search: {}, hash: ((e = e || location.hash).match(/[^#](#.*$)/) || [])[1] || ""};
        return /^#\//.test(e) && (e = e.replace(/^#\//, ""), n.href = "/" + e, e = e.replace(/([^#])(#.*$)/, "$1").split("/") || [], this.each(e, function (e, t) {
            /^\w+=/.test(t) ? (t = t.split("="), n.search[t[0]] = t[1]) : n.path.push(t)
        })), n
    }, i.prototype.url = function (e) {
        var a, t, n = this;
        return {
            pathname: (e ? ((e.match(/\.[^.]+?\/.+/) || [])[0] || "").replace(/^[^\/]+/, "").replace(/\?.+/, "") : location.pathname).replace(/^\//, "").split("/"),
            search: (a = {}, t = (e ? ((e.match(/\?.+/) || [])[0] || "").replace(/\#.+/, "") : location.search).replace(/^\?+/, "").split("&"), n.each(t, function (e, t) {
                var n = t.indexOf("="), i = n < 0 ? t.substr(0, t.length) : 0 !== n && t.substr(0, n);
                i && (a[i] = 0 < n ? t.substr(n + 1) : null)
            }), a),
            hash: n.router(e ? (e.match(/#.+/) || [])[0] || "/" : location.hash)
        }
    }, i.prototype.data = function (e, t, n) {
        if (e = e || "layui", n = n || localStorage, a.JSON && a.JSON.parse) {
            if (null === t) return delete n[e];
            t = "object" == typeof t ? t : {key: t};
            try {
                var i = JSON.parse(n[e])
            } catch (e) {
                i = {}
            }
            return "value" in t && (i[t.key] = t.value), t.remove && delete i[t.key], n[e] = JSON.stringify(i), t.key ? i[t.key] : i
        }
    }, i.prototype.sessionData = function (e, t) {
        return this.data(e, t, sessionStorage)
    }, i.prototype.device = function (e) {
        function t(e) {
            var t = new RegExp(e + "/([^\\s\\_\\-]+)");
            return (e = (n.match(t) || [])[1]) || !1
        }

        var n = navigator.userAgent.toLowerCase(), i = {
            os: /windows/.test(n) ? "windows" : /linux/.test(n) ? "linux" : /iphone|ipod|ipad|ios/.test(n) ? "ios" : /mac/.test(n) ? "mac" : void 0,
            ie: !!(a.ActiveXObject || "ActiveXObject" in a) && ((n.match(/msie\s(\d+)/) || [])[1] || "11"),
            weixin: t("micromessenger")
        };
        return e && !i[e] && (i[e] = t(e)), i.android = /android/.test(n), i.ios = "ios" === i.os, i.mobile = !(!i.android && !i.ios), i
    }, i.prototype.hint = function () {
        return {error: p}
    }, i.prototype.each = function (e, n) {
        function t(e, t) {
            return n.call(t[e], e, t[e])
        }

        if ("function" != typeof n) return this;
        if ((e = e || []).constructor === Object) {
            for (var i in e) if (t(i, e)) break
        } else for (i = 0; i < e.length && !t(i, e); i++) ;
        return this
    }, i.prototype.sort = function (e, i, t) {
        e = JSON.parse(JSON.stringify(e || []));
        return i && (e.sort(function (e, t) {
            var n = /^-?\d+$/, e = e[i], t = t[i];
            return n.test(e) && (e = parseFloat(e)), n.test(t) && (t = parseFloat(t)), e && !t ? 1 : !e && t ? -1 : t < e ? 1 : e < t ? -1 : 0
        }), t && e.reverse()), e
    }, i.prototype.stope = function (t) {
        t = t || a.event;
        try {
            t.stopPropagation()
        } catch (e) {
            t.cancelBubble = !0
        }
    }, i.prototype.onevent = function (e, t, n) {
        return "string" != typeof e || "function" != typeof n ? this : i.event(e, t, null, n)
    }, i.prototype.event = i.event = function (e, t, n, i) {
        function a(e, t) {
            !1 === (t && t.call(o, n)) && null === r && (r = !1)
        }

        var o = this, r = null, l = (t || "").match(/\((.*)\)$/) || [], t = (e + "." + t).replace(l[0], ""),
            s = l[1] || "";
        return "LAYUI-EVENT-REMOVE" === n ? (delete (o.cache.event[t] || {})[s], o) : i ? (y.event[t] = y.event[t] || {}, y.event[t][s] = [i], this) : (layui.each(y.event[t], function (e, t) {
            return "{*}" === s ? void layui.each(t, a) : ("" === e && layui.each(t, a), void (s && e === s && layui.each(t, a)))
        }), r)
    }, i.prototype.on = function (e, t, n) {
        return this.onevent.call(this, t, e, n)
    }, i.prototype.off = function (e, t) {
        return this.event.call(this, t, e, "LAYUI-EVENT-REMOVE")
    }, a.layui = new i
}(window), layui.define(function (e) {
    var t = layui.cache;
    layui.config({dir: t.dir.replace(/lay\/dest\/$/, "")}), e("layui.all", layui.v)
}), function () {
    "use strict";

    function u(e) {
        return new a(e)
    }

    function a(e) {
        for (var t = 0, n = "object" == typeof e ? [e] : (this.selector = e, d.querySelectorAll(e || null)); t < n.length; t++) this.push(n[t])
    }

    var e, d = window.document;
    (a.prototype = []).constructor = a, u.extend = function () {
        function i(e, t) {
            for (var n in e = e || (t.constructor === Array ? [] : {}), t) e[n] = t[n] && t[n].constructor === Object ? i(e[n], t[n]) : t[n];
            return e
        }

        var e = 1, t = arguments;
        for (t[0] = "object" == typeof t[0] ? t[0] : {}; e < t.length; e++) "object" == typeof t[e] && i(t[0], t[e]);
        return t[0]
    }, u.v = "1.0.0", u.ie = (e = navigator.userAgent.toLowerCase(), !!(window.ActiveXObject || "ActiveXObject" in window) && ((e.match(/msie\s(\d+)/) || [])[1] || "11")), u.getPath = function () {
        var e = d.currentScript ? d.currentScript.src : function () {
            for (var e, t = d.scripts, n = t.length - 1, i = n; 0 < i; i--) if ("interactive" === t[i].readyState) {
                e = t[i].src;
                break
            }
            return e || t[n].src
        }();
        return e.substring(0, e.lastIndexOf("/") + 1)
    }, u.stope = function (e) {
        (e = e || window.event).stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }, u.each = function (e, t) {
        if ("function" != typeof t) return this;
        if ((e = e || []).constructor === Object) {
            for (var n in e) if (t.call(e[n], n, e[n])) break
        } else for (n = 0; n < e.length && !t.call(e[n], n, e[n]); n++) ;
        return this
    }, u.digit = function (e, t, n) {
        var i = "";
        t = t || 2;
        for (var a = (e = String(e)).length; a < t; a++) i += "0";
        return e < Math.pow(10, t) ? i + (0 | e) : e
    }, u.elem = function (e, t) {
        var n = d.createElement(e);
        return u.each(t || {}, function (e, t) {
            n.setAttribute(e, t)
        }), n
    }, u.getStyle = function (e, t) {
        e = e.currentStyle || window.getComputedStyle(e, null);
        return e[e.getPropertyValue ? "getPropertyValue" : "getAttribute"](t)
    }, u.link = function (e, i, t) {
        var n = d.getElementsByTagName("head")[0], a = d.createElement("link"),
            o = ((t = "string" == typeof i ? i : t) || e).replace(/\.|\//g, ""), r = "layuicss-" + o, l = "creating",
            s = 0;
        a.rel = "stylesheet", a.href = e, a.id = r, d.getElementById(r) || n.appendChild(a), "function" == typeof i && function e(t) {
            var n = d.getElementById(r);
            return 100 < ++s ? window.console && console.error(o + ".css: Invalid") : void (1989 === parseInt(u.getStyle(n, "width")) ? (t === l && n.removeAttribute("lay-status"), n.getAttribute("lay-status") === l ? setTimeout(e, 100) : i()) : (n.setAttribute("lay-status", l), setTimeout(function () {
                e(l)
            }, 100)))
        }()
    }, u.hasScrollbar = function () {
        return d.body.scrollHeight > (window.innerHeight || d.documentElement.clientHeight)
    }, u.position = function (e, t, n) {
        var i, a, o, r, l, s, c;
        t && (n = n || {}, e !== d && e !== u("body")[0] || (n.clickType = "right"), i = "right" === n.clickType ? {
            left: (c = n.e || window.event || {}).clientX,
            top: c.clientY,
            right: c.clientX,
            bottom: c.clientY
        } : e.getBoundingClientRect(), a = t.offsetWidth, l = t.offsetHeight, s = function (e) {
            return d.body[e = e ? "scrollLeft" : "scrollTop"] | d.documentElement[e]
        }, o = i.left, r = i.bottom, o + a + 5 > (c = function (e) {
            return d.documentElement[e ? "clientWidth" : "clientHeight"]
        })("width") && (o = c("width") - a - 5), r + l + 5 > c() && (i.top > l + 5 ? r = i.top - l - 10 : "right" !== n.clickType || (r = c() - l - 10) < 0 && (r = 0)), (l = n.position) && (t.style.position = l), t.style.left = o + ("fixed" === l ? 0 : s(1)) + "px", t.style.top = r + ("fixed" === l ? 0 : s()) + "px", u.hasScrollbar() || (s = t.getBoundingClientRect(), !n.SYSTEM_RELOAD && s.bottom + 5 > c() && (n.SYSTEM_RELOAD = !0, setTimeout(function () {
            u.position(e, t, n)
        }, 50))))
    }, u.options = function (e, t) {
        e = u(e), t = t || "lay-options";
        try {
            return new Function("return " + (e.attr(t) || "{}"))()
        } catch (e) {
            return hint.error("parseerror：" + e, "error"), {}
        }
    }, u.isTopElem = function (n) {
        var e = [d, u("body")[0]], i = !1;
        return u.each(e, function (e, t) {
            if (t === n) return i = !0
        }), i
    }, a.addStr = function (n, e) {
        return n = n.replace(/\s+/, " "), e = e.replace(/\s+/, " ").split(" "), u.each(e, function (e, t) {
            new RegExp("\\b" + t + "\\b").test(n) || (n = n + " " + t)
        }), n.replace(/^\s|\s$/, "")
    }, a.removeStr = function (n, e) {
        return n = n.replace(/\s+/, " "), e = e.replace(/\s+/, " ").split(" "), u.each(e, function (e, t) {
            t = new RegExp("\\b" + t + "\\b");
            t.test(n) && (n = n.replace(t, ""))
        }), n.replace(/\s+/, " ").replace(/^\s|\s$/, "")
    }, a.prototype.find = function (i) {
        var a = this, o = 0, r = [], l = "object" == typeof i;
        return this.each(function (e, t) {
            for (var n = l ? t.contains(i) : t.querySelectorAll(i || null); o < n.length; o++) r.push(n[o]);
            a.shift()
        }), l || (a.selector = (a.selector ? a.selector + " " : "") + i), u.each(r, function (e, t) {
            a.push(t)
        }), a
    }, a.prototype.each = function (e) {
        return u.each.call(this, this, e)
    }, a.prototype.addClass = function (n, i) {
        return this.each(function (e, t) {
            t.className = a[i ? "removeStr" : "addStr"](t.className, n)
        })
    }, a.prototype.removeClass = function (e) {
        return this.addClass(e, !0)
    }, a.prototype.hasClass = function (n) {
        var i = !1;
        return this.each(function (e, t) {
            new RegExp("\\b" + n + "\\b").test(t.className) && (i = !0)
        }), i
    }, a.prototype.css = function (t, i) {
        function a(e) {
            return isNaN(e) ? e : e + "px"
        }

        var e = this;
        return "string" == typeof t && void 0 === i ? function () {
            if (0 < e.length) return e[0].style[t]
        }() : e.each(function (e, n) {
            "object" == typeof t ? u.each(t, function (e, t) {
                n.style[e] = a(t)
            }) : n.style[t] = a(i)
        })
    }, a.prototype.width = function (n) {
        var i = this;
        return void 0 === n ? function () {
            if (0 < i.length) return i[0].offsetWidth
        }() : i.each(function (e, t) {
            i.css("width", n)
        })
    }, a.prototype.height = function (n) {
        var i = this;
        return void 0 === n ? function () {
            if (0 < i.length) return i[0].offsetHeight
        }() : i.each(function (e, t) {
            i.css("height", n)
        })
    }, a.prototype.attr = function (n, i) {
        var e = this;
        return void 0 === i ? function () {
            if (0 < e.length) return e[0].getAttribute(n)
        }() : e.each(function (e, t) {
            t.setAttribute(n, i)
        })
    }, a.prototype.removeAttr = function (n) {
        return this.each(function (e, t) {
            t.removeAttribute(n)
        })
    }, a.prototype.html = function (n) {
        var e = this;
        return void 0 === n ? function () {
            if (0 < e.length) return e[0].innerHTML
        }() : this.each(function (e, t) {
            t.innerHTML = n
        })
    }, a.prototype.val = function (n) {
        var e = this;
        return void 0 === n ? function () {
            if (0 < e.length) return e[0].value
        }() : this.each(function (e, t) {
            t.value = n
        })
    }, a.prototype.append = function (n) {
        return this.each(function (e, t) {
            "object" == typeof n ? t.appendChild(n) : t.innerHTML = t.innerHTML + n
        })
    }, a.prototype.remove = function (n) {
        return this.each(function (e, t) {
            n ? t.removeChild(n) : t.parentNode.removeChild(t)
        })
    }, a.prototype.on = function (n, i) {
        return this.each(function (e, t) {
            t.attachEvent ? t.attachEvent("on" + n, function (e) {
                e.target = e.srcElement, i.call(t, e)
            }) : t.addEventListener(n, i, !1)
        })
    }, a.prototype.off = function (n, i) {
        return this.each(function (e, t) {
            t.detachEvent ? t.detachEvent("on" + n, i) : t.removeEventListener(n, i, !1)
        })
    }, window.lay = u, window.layui && layui.define && layui.define(function (e) {
        e("lay", u)
    })
}(), layui.define(function (e) {
    "use strict";

    function t(e) {
        this.tpl = e
    }

    var o = {open: "{{", close: "}}"}, r = function (e, t, n) {
        return c((t || "") + o.open + ["#([\\s\\S])+?", "([^{#}])*?"][e || 0] + o.close + (n || ""))
    }, l = function (e) {
        return String(e || "").replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
    }, s = function (e, t) {
        var n = "Laytpl Error: ";
        return "object" == typeof console && console.error(n + e + "\n" + (t || "")), n + e
    }, c = function (e) {
        return new RegExp(e, "g")
    };
    t.pt = t.prototype, window.errors = 0, t.pt.parse = function (e, t) {
        var n = e, i = c("^" + o.open + "#", ""), a = c(o.close + "$", "");
        e = '"use strict";var view = "' + (e = e.replace(/\s+|\r|\t|\n/g, " ").replace(c(o.open + "#"), o.open + "# ").replace(c(o.close + "}"), "} " + o.close).replace(/\\/g, "\\\\").replace(c(o.open + "!(.+?)!" + o.close), function (e) {
            return e.replace(c("^" + o.open + "!"), "").replace(c("!" + o.close), "").replace(c(o.open + "|" + o.close), function (e) {
                return e.replace(/(.)/g, "\\$1")
            })
        }).replace(/(?="|')/g, "\\").replace(r(), function (e) {
            return '";' + (e = e.replace(i, "").replace(a, "")).replace(/\\(.)/g, "$1") + ';view+="'
        }).replace(r(1), function (e) {
            var t = '"+(';
            return e.replace(/\s/g, "") === o.open + o.close ? "" : (e = e.replace(c(o.open + "|" + o.close), ""), /^=/.test(e) && (e = e.replace(/^=/, ""), t = '"+_escape_('), t + e.replace(/\\(.)/g, "$1") + ')+"')
        })) + '";return view;';
        try {
            return this.cache = e = new Function("d, _escape_", e), e(t, l)
        } catch (e) {
            return delete this.cache, s(e, n)
        }
    }, t.pt.render = function (e, t) {
        return e ? (e = this.cache ? this.cache(e, l) : this.parse(this.tpl, e), t ? void t(e) : e) : s("no data")
    };

    function n(e) {
        return "string" != typeof e ? s("Template not found") : new t(e)
    }

    n.config = function (e) {
        for (var t in e = e || {}) o[t] = e[t]
    }, n.v = "1.2.0", e("laytpl", n)
}), layui.define(function (e) {
    "use strict";

    function t(e) {
        this.config = e || {}, this.config.index = ++d.index, this.render(!0)
    }

    var o = document, r = "getElementById", u = "getElementsByTagName", s = "layui-disabled";
    t.prototype.type = function () {
        var e = this.config;
        if ("object" == typeof e.elem) return void 0 === e.elem.length ? 2 : 3
    }, t.prototype.view = function () {
        var a = this.config, o = a.groups = "groups" in a ? 0 | a.groups : 5;
        a.layout = "object" == typeof a.layout ? a.layout : ["prev", "page", "next"], a.count = 0 | a.count, a.curr = 0 | a.curr || 1, a.limits = "object" == typeof a.limits ? a.limits : [10, 20, 30, 40, 50], a.limit = 0 | a.limit || 10, a.pages = Math.ceil(a.count / a.limit) || 1, a.curr > a.pages && (a.curr = a.pages), o < 0 ? o = 1 : o > a.pages && (o = a.pages), a.prev = "prev" in a ? a.prev : "&#x4E0A;&#x4E00;&#x9875;", a.next = "next" in a ? a.next : "&#x4E0B;&#x4E00;&#x9875;";
        var n, i, r = a.pages > o ? Math.ceil((a.curr + (1 < o ? 1 : 0)) / (0 < o ? o : 1)) : 1, l = {
            prev: a.prev ? '<a href="javascript:;" class="layui-laypage-prev' + (1 == a.curr ? " " + s : "") + '" data-page="' + (a.curr - 1) + '">' + a.prev + "</a>" : "",
            page: function () {
                var e = [];
                if (a.count < 1) return "";
                1 < r && !1 !== a.first && 0 !== o && e.push('<a href="javascript:;" class="layui-laypage-first" data-page="1"  title="&#x9996;&#x9875;">' + (a.first || 1) + "</a>");
                var t = Math.floor((o - 1) / 2), n = 1 < r ? a.curr - t : 1,
                    i = 1 < r ? (t = a.curr + (o - t - 1)) > a.pages ? a.pages : t : o;
                for (i - n < o - 1 && (n = i - o + 1), !1 !== a.first && 2 < n && e.push('<span class="layui-laypage-spr">&#x2026;</span>'); n <= i; n++) n === a.curr ? e.push('<span class="layui-laypage-curr"><em class="layui-laypage-em" ' + (/^#/.test(a.theme) ? 'style="background-color:' + a.theme + ';"' : "") + "></em><em>" + n + "</em></span>") : e.push('<a href="javascript:;" data-page="' + n + '">' + n + "</a>");
                return a.pages > o && a.pages > i && !1 !== a.last && (i + 1 < a.pages && e.push('<span class="layui-laypage-spr">&#x2026;</span>'), 0 !== o && e.push('<a href="javascript:;" class="layui-laypage-last" title="&#x5C3E;&#x9875;"  data-page="' + a.pages + '">' + (a.last || a.pages) + "</a>")), e.join("")
            }(),
            next: a.next ? '<a href="javascript:;" class="layui-laypage-next' + (a.curr == a.pages ? " " + s : "") + '" data-page="' + (a.curr + 1) + '">' + a.next + "</a>" : "",
            count: '<span class="layui-laypage-count">' + gettext("page_total") + " " + a.count + " " + gettext("page_records") + "</span>",
            limit: (n = ['<span class="layui-laypage-limits"><select lay-ignore>'], layui.each(a.limits, function (e, t) {
                n.push('<option value="' + t + '"' + (t === a.limit ? "selected" : "") + ">" + t + " " + gettext("records_per_page") + "</option>")
            }), n.join("") + "</select></span>"),
            refresh: ['<a href="javascript:;" data-page="' + a.curr + '" class="layui-laypage-refresh">', '<i class="layui-icon layui-icon-refresh"></i>', "</a>"].join(""),
            skip: ['<span class="layui-laypage-skip">' + gettext("jump_to"), '<input type="text" min="1" value="' + a.curr + '" class="layui-input">', gettext("page") + '<button type="button" class="layui-laypage-btn">' + gettext("btn_confirm") + "</button>", "</span>"].join("")
        };
        return ['<div class="layui-box layui-laypage layui-laypage-' + (a.theme ? /^#/.test(a.theme) ? "molv" : a.theme : "default") + '" id="layui-laypage-' + a.index + '">', (i = [], layui.each(a.layout, function (e, t) {
            l[t] && i.push(l[t])
        }), i.join("")), "</div>"].join("")
    }, t.prototype.jump = function (e, t) {
        if (e) {
            var n = this, i = n.config, a = e.children, o = e[u]("button")[0], r = e[u]("input")[0],
                e = e[u]("select")[0], l = function () {
                    var e = 0 | r.value.replace(/\s|\D/g, "");
                    e && (i.curr = e, n.render())
                };
            if (t) return l();
            for (var s = 0, c = a.length; s < c; s++) "a" === a[s].nodeName.toLowerCase() && d.on(a[s], "click", function () {
                var e = 0 | this.getAttribute("data-page");
                e < 1 || e > i.pages || (i.curr = e, n.render())
            });
            e && d.on(e, "change", function () {
                var e = this.value;
                i.curr * e > i.count && (i.curr = Math.ceil(i.count / e)), i.limit = e, n.render()
            }), o && d.on(o, "click", function () {
                l()
            })
        }
    }, t.prototype.skip = function (n) {
        var i, e;
        n && (i = this, (e = n[u]("input")[0]) && d.on(e, "keyup", function (e) {
            var t = this.value, e = e.keyCode;
            /^(37|38|39|40)$/.test(e) || (/\D/.test(t) && (this.value = t.replace(/\D/, "")), 13 === e && i.jump(n, !0))
        }))
    }, t.prototype.render = function (e) {
        var t = this, n = t.config, i = t.type(), a = t.view();
        2 === i ? n.elem && (n.elem.innerHTML = a) : 3 === i ? n.elem.html(a) : o[r](n.elem) && (o[r](n.elem).innerHTML = a), n.jump && n.jump(n, e);
        a = o[r]("layui-laypage-" + n.index);
        t.jump(a), n.hash && !e && (location.hash = "!" + n.hash + "=" + n.curr), t.skip(a)
    };
    var d = {
        render: function (e) {
            return new t(e).index
        }, index: layui.laypage ? layui.laypage.index + 1e4 : 0, on: function (t, e, n) {
            return t.attachEvent ? t.attachEvent("on" + e, function (e) {
                e.target = e.srcElement, n.call(t, e)
            }) : t.addEventListener(e, n, !1), this
        }
    };
    e("laypage", d)
}), function (a) {
    "use strict";

    function o() {
        var t = this, e = t.config.id;
        return {
            hint: function (e) {
                t.hint.call(t, e)
            }, config: (o.that[e] = t).config
        }
    }

    function r(e) {
        var t = this;
        t.index = ++h.index, t.config = lay.extend({}, t.config, h.config, e), (e = t.config).id = "id" in e ? e.id : t.index, h.ready(function () {
            t.init()
        })
    }

    var i = a.layui && layui.define, l = {
            getPath: a.lay && lay.getPath ? lay.getPath() : "", link: function (e, t, n) {
                h.path && a.lay && lay.link && lay.link(h.path + e, t, n)
            }
        }, e = a.LAYUI_GLOBAL || {}, h = {
            v: "5.3.0",
            config: {},
            index: a.laydate && a.laydate.v ? 1e5 : 0,
            path: e.laydate_dir || l.getPath,
            set: function (e) {
                return this.config = lay.extend({}, this.config, e), this
            },
            ready: function (e) {
                var t = "laydate", n = (i ? "modules/laydate/" : "theme/") + "default/laydate.css?v=" + h.v;
                return i ? layui.addcss(n, e, t) : l.link(n, e, t), this
            }
        }, n = "laydate", b = "layui-this", k = "laydate-disabled", y = [100, 2e5], p = "layui-laydate-static",
        w = "layui-laydate-list", s = "layui-laydate-hint", C = ".laydate-btns-confirm", T = "laydate-time-text",
        E = "laydate-btns-time", m = "layui-laydate-preview", c = "yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s";
    o.formatArr = function (e) {
        return (e || "").match(new RegExp(c + "|.", "g")) || []
    }, r.isLeapYear = function (e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }, r.prototype.config = {
        type: "date",
        range: !1,
        format: "yyyy-MM-dd",
        value: null,
        isInitValue: !0,
        min: "1900-1-1",
        max: "2099-12-31",
        trigger: "click",
        show: !1,
        showBottom: !0,
        isPreview: !0,
        btns: ["clear", "now", "confirm"],
        lang: "cn",
        theme: "default",
        position: null,
        calendar: !1,
        mark: {},
        zIndex: null,
        done: null,
        change: null
    }, r.prototype.lang = function () {
        var e = this.config, t = {
            cn: {
                weeks: [gettext("layui_laydate_sunday"), gettext("layui_laydate_monday"), gettext("layui_laydate_tuesday"), gettext("layui_laydate_wednesday"), gettext("layui_laydate_thursday"), gettext("layui_laydate_friday"), gettext("layui_laydate_saturday")],
                time: [gettext("layui_laydate_hour"), gettext("layui_laydate_minute"), gettext("layui_laydate_second")],
                timeTips: gettext("layui_laydate_selectTime"),
                startTime: gettext("layui_laydate_startTime"),
                endTime: gettext("layui_laydate_endTime"),
                dateTips: gettext("layui_laydate_returnBack"),
                month: [gettext("layui_laydate_jan"), gettext("layui_laydate_feb"), gettext("layui_laydate_mar"), gettext("layui_laydate_apr"), gettext("layui_laydate_may"), gettext("layui_laydate_jun"), gettext("layui_laydate_jul"), gettext("layui_laydate_aug"), gettext("layui_laydate_sep"), gettext("layui_laydate_oct"), gettext("layui_laydate_nov"), gettext("layui_laydate_dec")],
                tools: {
                    confirm: gettext("layui_laydate_confirm"),
                    clear: gettext("layui_laydate_clear"),
                    now: gettext("layui_laydate_now")
                },
                timeout: "结束时间不能早于开始时间<br>请重新选择",
                invalidDate: "不在有效日期或时间范围内",
                formatError: ["日期格式不合法<br>必须遵循下述格式：<br>", "<br>已为你重置"],
                preview: "当前选中的结果"
            },
            en: {
                weeks: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                time: ["Hours", "Minutes", "Seconds"],
                timeTips: "Select Time",
                startTime: "Start Time",
                endTime: "End Time",
                dateTips: "Select Date",
                month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                tools: {confirm: "Confirm", clear: "Clear", now: "Now"},
                timeout: "End time cannot be less than start Time<br>Please re-select",
                invalidDate: "Invalid date",
                formatError: ["The date format error<br>Must be followed：<br>", "<br>It has been reset"],
                preview: "The selected result"
            }
        };
        return t[e.lang] || t.cn
    }, r.prototype.init = function () {
        var n = this, r = n.config, e = "static" === r.position,
            t = {year: "yyyy", month: "yyyy-MM", date: "yyyy-MM-dd", time: "HH:mm:ss", datetime: "yyyy-MM-dd HH:mm:ss"};
        r.elem = lay(r.elem), r.eventElem = lay(r.eventElem), r.elem[0] && (n.rangeStr = r.range ? "string" == typeof r.range ? r.range : "-" : "", r.range && r.range.constructor === Array && (n.rangeElem = [lay(r.range[0]), lay(r.range[1])]), t[r.type] || (a.console && console.error && console.error("laydate type error:'" + r.type + "' is not supported"), r.type = "date"), r.format === t.date && (r.format = t[r.type] || t.date), n.format = o.formatArr(r.format), n.EXP_IF = "", n.EXP_SPLIT = "", lay.each(n.format, function (e, t) {
            t = new RegExp(c).test(t) ? "\\d{" + (new RegExp(c).test(n.format[0 === e ? e + 1 : e - 1] || "") ? /^yyyy|y$/.test(t) ? 4 : t.length : /^yyyy$/.test(t) ? "1,4" : /^y$/.test(t) ? "1,308" : "1,2") + "}" : "\\" + t;
            n.EXP_IF = n.EXP_IF + t, n.EXP_SPLIT = n.EXP_SPLIT + "(" + t + ")"
        }), n.EXP_IF_ONE = new RegExp("^" + n.EXP_IF + "$"), n.EXP_IF = new RegExp("^" + (r.range ? n.EXP_IF + "\\s\\" + n.rangeStr + "\\s" + n.EXP_IF : n.EXP_IF) + "$"), n.EXP_SPLIT = new RegExp("^" + n.EXP_SPLIT + "$", ""), n.isInput(r.elem[0]) || "focus" === r.trigger && (r.trigger = "click"), r.elem.attr("lay-key") || (r.elem.attr("lay-key", n.index), r.eventElem.attr("lay-key", n.index)), r.mark = lay.extend({}, r.calendar && "cn" === r.lang ? {
            "0-1-1": "元旦",
            "0-2-14": "情人",
            "0-3-8": "妇女",
            "0-3-12": "植树",
            "0-4-1": "愚人",
            "0-5-1": "劳动",
            "0-5-4": "青年",
            "0-6-1": "儿童",
            "0-9-10": "教师",
            "0-9-18": "国耻",
            "0-10-1": "国庆",
            "0-12-25": "圣诞"
        } : {}, r.mark), lay.each(["min", "max"], function (e, t) {
            var n, i, a = [], o = [];
            "number" == typeof r[t] ? (n = r[t], i = (new Date).getTime(), a = [(i = new Date(n ? n < 864e5 ? i + 864e5 * n : n : i)).getFullYear(), i.getMonth() + 1, i.getDate()], n < 864e5 || (o = [i.getHours(), i.getMinutes(), i.getSeconds()])) : (a = (r[t].match(/\d+-\d+-\d+/) || [""])[0].split("-"), o = (r[t].match(/\d+:\d+:\d+/) || [""])[0].split(":")), r[t] = {
                year: 0 | a[0] || (new Date).getFullYear(),
                month: a[1] ? (0 | a[1]) - 1 : (new Date).getMonth(),
                date: 0 | a[2] || (new Date).getDate(),
                hours: 0 | o[0],
                minutes: 0 | o[1],
                seconds: 0 | o[2]
            }
        }), n.elemID = "layui-laydate" + r.elem.attr("lay-key"), (r.show || e) && n.render(), e || n.events(), r.value && r.isInitValue && (r.value.constructor === Date ? n.setValue(n.parse(0, n.systemDate(r.value))) : n.setValue(r.value)))
    }, r.prototype.render = function () {
        var e, i, t = this, l = t.config, s = t.lang(), a = "static" === l.position, n = t.elem = lay.elem("div", {
                id: t.elemID,
                class: ["layui-laydate", l.range ? " layui-laydate-range" : "", a ? " " + p : "", l.theme && "default" !== l.theme && !/^#/.test(l.theme) ? " laydate-theme-" + l.theme : ""].join("")
            }), c = t.elemMain = [], u = t.elemHeader = [], d = t.elemCont = [], f = t.table = [],
            o = t.footer = lay.elem("div", {class: "layui-laydate-footer"});
        l.zIndex && (n.style.zIndex = l.zIndex), lay.each(new Array(2), function (e) {
            if (!l.range && 0 < e) return !0;
            var t, n, i, a = lay.elem("div", {class: "layui-laydate-header"}),
                t = [((i = lay.elem("i", {class: "layui-icon laydate-icon laydate-prev-y"})).innerHTML = "&#xe65a;", i), ((n = lay.elem("i", {class: "layui-icon laydate-icon laydate-prev-m"})).innerHTML = "&#xe603;", n), (t = lay.elem("div", {class: "laydate-set-ym"}), i = lay.elem("span"), n = lay.elem("span"), t.appendChild(i), t.appendChild(n), t), ((i = lay.elem("i", {class: "layui-icon laydate-icon laydate-next-m"})).innerHTML = "&#xe602;", i), ((n = lay.elem("i", {class: "layui-icon laydate-icon laydate-next-y"})).innerHTML = "&#xe65b;", n)],
                i = lay.elem("div", {class: "layui-laydate-content"}), o = lay.elem("table"), n = lay.elem("thead"),
                r = lay.elem("tr");
            lay.each(t, function (e, t) {
                a.appendChild(t)
            }), n.appendChild(r), lay.each(new Array(6), function (n) {
                var i = o.insertRow(0);
                lay.each(new Array(7), function (e) {
                    var t;
                    0 === n && ((t = lay.elem("th")).innerHTML = s.weeks[e], r.appendChild(t)), i.insertCell(e)
                })
            }), o.insertBefore(n, o.children[0]), i.appendChild(o), c[e] = lay.elem("div", {class: "layui-laydate-main laydate-main-list-" + e}), c[e].appendChild(a), c[e].appendChild(i), u.push(t), d.push(i), f.push(o)
        }), lay(o).html((e = [], i = [], "datetime" === l.type && e.push('<span lay-type="datetime" class="' + E + '">' + s.timeTips + "</span>"), !l.range && "datetime" === l.type || e.push('<span class="' + m + '" title="' + s.preview + '"></span>'), lay.each(l.btns, function (e, t) {
            var n = s.tools[t] || "btn";
            l.range && "now" === t || (a && "clear" === t && (n = "cn" === l.lang ? "重置" : "Reset"), i.push('<span lay-type="' + t + '" class="laydate-btns-' + t + '">' + n + "</span>"))
        }), e.push('<div class="laydate-footer-btns">' + i.join("") + "</div>"), e.join(""))), lay.each(c, function (e, t) {
            n.appendChild(t)
        }), l.showBottom && n.appendChild(o), /^#/.test(l.theme) && (e = lay.elem("style"), o = ["#{{id}} .layui-laydate-header{background-color:{{theme}};}", "#{{id}} .layui-this{background-color:{{theme}} !important;}"].join("").replace(/{{id}}/g, t.elemID).replace(/{{theme}}/g, l.theme), "styleSheet" in e ? (e.setAttribute("type", "text/css"), e.styleSheet.cssText = o) : e.innerHTML = o, lay(n).addClass("laydate-theme-molv"), n.appendChild(e)), h.thisId = l.id, t.remove(r.thisElemDate), a ? l.elem.append(n) : (document.body.appendChild(n), t.position()), t.checkDate().calendar(null, 0, "init"), t.changeEvent(), r.thisElemDate = t.elemID, "function" == typeof l.ready && l.ready(lay.extend({}, l.dateTime, {month: l.dateTime.month + 1})), t.preview()
    }, r.prototype.remove = function (e) {
        var t = this, n = (t.config, lay("#" + (e || t.elemID)));
        return n[0] && (n.hasClass(p) || t.checkDate(function () {
            n.remove()
        })), t
    }, r.prototype.position = function () {
        var e = this.config;
        return lay.position(this.bindElem || e.elem[0], this.elem, {position: e.position}), this
    }, r.prototype.hint = function (e) {
        var t = this, n = (t.config, lay.elem("div", {class: s}));
        t.elem && (n.innerHTML = e || "", lay(t.elem).find("." + s).remove(), t.elem.appendChild(n), clearTimeout(t.hinTimer), t.hinTimer = setTimeout(function () {
            lay(t.elem).find("." + s).remove()
        }, 3e3))
    }, r.prototype.getAsYM = function (e, t, n) {
        return n ? t-- : t++, t < 0 && (t = 11, e--), 11 < t && (t = 0, e++), [e, t]
    }, r.prototype.systemDate = function (e) {
        var t = e || new Date;
        return {
            year: t.getFullYear(),
            month: t.getMonth(),
            date: t.getDate(),
            hours: e ? e.getHours() : 0,
            minutes: e ? e.getMinutes() : 0,
            seconds: e ? e.getSeconds() : 0
        }
    }, r.prototype.checkDate = function (e) {
        function n(i, a, o) {
            var r = ["startTime", "endTime"];
            a = (a.match(s.EXP_SPLIT) || []).slice(1), o = o || 0, c.range && (s[r[o]] = s[r[o]] || {}), lay.each(s.format, function (e, t) {
                var n = parseFloat(a[e]);
                a[e].length < t.length && (l = !0), /yyyy|y/.test(t) ? (n < y[0] && (n = y[0], l = !0), i.year = n) : /MM|M/.test(t) ? (n < 1 && (n = 1, l = !0), i.month = n - 1) : /dd|d/.test(t) ? (n < 1 && (n = 1, l = !0), i.date = n) : /HH|H/.test(t) ? (n < 1 && (l = !(n = 0)), i.hours = n, c.range && (s[r[o]].hours = n)) : /mm|m/.test(t) ? (n < 1 && (l = !(n = 0)), i.minutes = n, c.range && (s[r[o]].minutes = n)) : /ss|s/.test(t) && (n < 1 && (l = !(n = 0)), i.seconds = n, c.range && (s[r[o]].seconds = n))
            }), u(i)
        }

        var t, l, s = this, c = (new Date, s.config), i = s.lang(), a = c.dateTime = c.dateTime || s.systemDate(),
            o = s.bindElem || c.elem[0], r = (s.isInput(o), function () {
                if (s.rangeElem) {
                    var e = [s.rangeElem[0].val(), s.rangeElem[1].val()];
                    if (e[0] && e[1]) return e.join(" " + s.rangeStr + " ")
                }
                return s.isInput(o) ? o.value : "static" === c.position ? "" : lay(o).attr("lay-date")
            }()), u = function (e) {
                e.year > y[1] && (e.year = y[1], l = !0), 11 < e.month && (e.month = 11, l = !0), 23 < e.hours && (e.hours = 0, l = !0), 59 < e.minutes && (e.minutes = 0, e.hours++, l = !0), 59 < e.seconds && (e.seconds = 0, e.minutes++, l = !0), t = h.getEndDate(e.month + 1, e.year), e.date > t && (e.date = t, l = !0)
            };
        if ("limit" === e) return u(a), s;
        "string" == typeof (r = r || c.value) && (r = r.replace(/\s+/g, " ").replace(/^\s|\s$/g, ""));

        function d() {
            var e, t, n;
            c.range && (s.endDate = s.endDate || lay.extend({}, c.dateTime, (e = {}, t = c.dateTime, n = s.getAsYM(t.year, t.month), "year" === c.type ? e.year = t.year + 1 : "time" !== c.type && (e.year = n[0], e.month = n[1]), "datetime" !== c.type && "time" !== c.type || (e.hours = 23, e.minutes = e.seconds = 59), e)))
        }

        var f;
        d(), "string" == typeof r && r ? s.EXP_IF.test(r) ? c.range ? (r = r.split(" " + s.rangeStr + " "), lay.each([c.dateTime, s.endDate], function (e, t) {
            n(t, r[e], e)
        })) : n(a, r) : (s.hint(i.formatError[0] + (c.range ? c.format + " " + s.rangeStr + " " + c.format : c.format) + i.formatError[1]), l = !0) : r && r.constructor === Date ? c.dateTime = s.systemDate(r) : (c.dateTime = s.systemDate(), delete s.startTime, delete s.endDate, d(), delete s.endTime), s.rangeElem && (p = [s.rangeElem[0].val(), s.rangeElem[1].val()], f = [c.dateTime, s.endDate], lay.each(p, function (e, t) {
            s.EXP_IF_ONE.test(t) && n(f[e], t, e)
        })), u(a), c.range && u(s.endDate), l && r && s.setValue(!c.range || s.endDate ? s.parse() : "");
        var p = function (e) {
            return s.newDate(e).getTime()
        };
        return (p(a) > p(c.max) || p(a) < p(c.min)) && (a = c.dateTime = lay.extend({}, c.min)), c.range && (p(s.endDate) < p(c.min) || p(s.endDate) > p(c.max)) && (s.endDate = lay.extend({}, c.max)), e && e(), s
    }, r.prototype.mark = function (e, n) {
        var i, t = this.config;
        return lay.each(t.mark, function (e, t) {
            e = e.split("-");
            e[0] != n[0] && 0 != e[0] || e[1] != n[1] && 0 != e[1] || e[2] != n[2] || (i = t || n[2])
        }), i && e.html('<span class="laydate-day-mark">' + i + "</span>"), this
    }, r.prototype.limit = function (e, t, n, a) {
        var o = this, i = o.config, r = {}, n = i[41 < n ? "endDate" : "dateTime"], t = lay.extend({}, n, t || {});
        return lay.each({now: t, min: i.min, max: i.max}, function (e, n) {
            var i;
            r[e] = o.newDate(lay.extend({
                year: n.year,
                month: n.month,
                date: n.date
            }, (i = {}, lay.each(a, function (e, t) {
                i[t] = n[t]
            }), i))).getTime()
        }), i = r.now < r.min || r.now > r.max, e && e[i ? "addClass" : "removeClass"](k), i
    }, r.prototype.thisDateTime = function (e) {
        var t = this.config;
        return e ? this.endDate : t.dateTime
    }, r.prototype.calendar = function (e, t, n) {
        var a, o, r, l = this, i = l.config, t = t ? 1 : 0, s = e || l.thisDateTime(t), c = new Date, u = l.lang(),
            d = "date" !== i.type && "datetime" !== i.type, f = lay(l.table[t]).find("td"),
            t = lay(l.elemHeader[t][2]).find("span");
        return s.year < y[0] && (s.year = y[0], l.hint(u.invalidDate)), s.year > y[1] && (s.year = y[1], l.hint(u.invalidDate)), l.firstDate || (l.firstDate = lay.extend({}, s)), c.setFullYear(s.year, s.month, 1), a = c.getDay(), o = h.getEndDate(s.month || 12, s.year), r = h.getEndDate(s.month + 1, s.year), lay.each(f, function (e, t) {
            var n = [s.year, s.month], i = 0;
            (t = lay(t)).removeAttr("class"), e < a ? (i = o - a + e, t.addClass("laydate-day-prev"), n = l.getAsYM(s.year, s.month, "sub")) : a <= e && e < r + a ? (i = e - a) + 1 === s.date && t.addClass(b) : (i = e - r - a, t.addClass("laydate-day-next"), n = l.getAsYM(s.year, s.month)), n[1]++, n[2] = i + 1, t.attr("lay-ymd", n.join("-")).html(n[2]), l.mark(t, n).limit(t, {
                year: n[0],
                month: n[1] - 1,
                date: n[2]
            }, e)
        }), lay(t[0]).attr("lay-ym", s.year + "-" + (s.month + 1)), lay(t[1]).attr("lay-ym", s.year + "-" + (s.month + 1)), "cn" === i.lang ? (lay(t[0]).attr("lay-type", "year").html(s.year), lay(t[1]).attr("lay-type", "month").html(u.month[s.month])) : (lay(t[0]).attr("lay-type", "month").html(u.month[s.month]), lay(t[1]).attr("lay-type", "year").html(s.year)), d && (i.range ? e && (l.listYM = [[i.dateTime.year, i.dateTime.month + 1], [l.endDate.year, l.endDate.month + 1]], l.list(i.type, 0).list(i.type, 1), "time" === i.type ? l.setBtnStatus("时间", lay.extend({}, l.systemDate(), l.startTime), lay.extend({}, l.systemDate(), l.endTime)) : l.setBtnStatus(!0)) : (l.listYM = [[s.year, s.month + 1]], l.list(i.type, 0))), i.range && "init" === n && !e && l.calendar(l.endDate, 1), i.range || l.limit(lay(l.footer).find(C), null, 0, ["hours", "minutes", "seconds"]), l.setBtnStatus(), l
    }, r.prototype.list = function (t, i) {
        var a, e, o, r, l = this, s = l.config, c = s.dateTime, u = l.lang(),
            n = s.range && "date" !== s.type && "datetime" !== s.type, d = lay.elem("ul", {
                class: w + " " + {
                    year: "laydate-year-list",
                    month: "laydate-month-list",
                    time: "laydate-time-list"
                }[t]
            }), f = l.elemHeader[i], p = lay(f[2]).find("span"), h = l.elemCont[i || 0], y = lay(h).find("." + w)[0],
            m = "cn" === s.lang, g = l.listYM[i] || {}, v = ["hours", "minutes", "seconds"],
            x = ["startTime", "endTime"][i];
        return g[0] < 1 && (g[0] = 1), "year" === t ? (e = a = g[0] - 7, a < 1 && (e = a = 1), lay.each(new Array(15), function (e) {
            var t = lay.elem("li", {"lay-ym": a}), n = {year: a};
            a == g[0] && lay(t).addClass(b), t.innerHTML = a + "", d.appendChild(t), a < l.firstDate.year ? (n.month = s.min.month, n.date = s.min.date) : a >= l.firstDate.year && (n.month = s.max.month, n.date = s.max.date), l.limit(lay(t), n, i), a++
        }), lay(p[m ? 0 : 1]).attr("lay-ym", a - 8 + "-" + g[1]).html(e + " - " + (a - 1) + "")) : "month" === t ? (lay.each(new Array(12), function (e) {
            var t = lay.elem("li", {"lay-ym": e}), n = {year: g[0], month: e};
            e + 1 == g[1] && lay(t).addClass(b), t.innerHTML = u.month[e] + (m ? "" : ""), d.appendChild(t), g[0] < l.firstDate.year ? n.date = s.min.date : g[0] >= l.firstDate.year && (n.date = s.max.date), l.limit(lay(t), n, i)
        }), lay(p[m ? 0 : 1]).attr("lay-ym", g[0] + "-" + g[1]).html(g[0] + "")) : "time" === t && (o = function () {
            lay(d).find("ol").each(function (n, e) {
                lay(e).find("li").each(function (e, t) {
                    l.limit(lay(t), [{hours: e}, {hours: l[x].hours, minutes: e}, {
                        hours: l[x].hours,
                        minutes: l[x].minutes,
                        seconds: e
                    }][n], i, [["hours"], ["hours", "minutes"], ["hours", "minutes", "seconds"]][n])
                })
            }), s.range || l.limit(lay(l.footer).find(C), l[x], 0, ["hours", "minutes", "seconds"])
        }, s.range ? l[x] || (l[x] = "startTime" === x ? c : l.endDate) : l[x] = c, lay.each([24, 60, 60], function (t, e) {
            var n = lay.elem("li"), i = ["<p>" + u.time[t] + "</p><ol>"];
            lay.each(new Array(e), function (e) {
                i.push("<li" + (l[x][v[t]] === e ? ' class="' + b + '"' : "") + ">" + lay.digit(e, 2) + "</li>")
            }), n.innerHTML = i.join("") + "</ol>", d.appendChild(n)
        }), o()), y && h.removeChild(y), h.appendChild(d), "year" === t || "month" === t ? (lay(l.elemMain[i]).addClass("laydate-ym-show"), lay(d).find("li").on("click", function () {
            var e = 0 | lay(this).attr("lay-ym");
            lay(this).hasClass(k) || (0 === i ? (c[t] = e, l.limit(lay(l.footer).find(C), null, 0)) : l.endDate[t] = e, "year" === s.type || "month" === s.type ? (lay(d).find("." + b).removeClass(b), lay(this).addClass(b), "month" === s.type && "year" === t && (l.listYM[i][0] = e, n && (i ? c.year = e : l.endDate.year = e), l.list("month", i))) : (l.checkDate("limit").calendar(null, i), l.closeList()), l.setBtnStatus(), s.range || ("month" === s.type && "month" === t || "year" === s.type && "year" === t) && l.setValue(l.parse()).remove().done(), l.done(null, "change"), lay(l.footer).find("." + E).removeClass(k))
        })) : (y = lay.elem("span", {class: T}), r = function () {
            lay(d).find("ol").each(function (e) {
                var n = this, t = lay(n).find("li");
                n.scrollTop = 30 * (l[x][v[e]] - 2), n.scrollTop <= 0 && t.each(function (e, t) {
                    if (!lay(this).hasClass(k)) return n.scrollTop = 30 * (e - 2), !0
                })
            })
        }, h = lay(f[2]).find("." + T), r(), y.innerHTML = s.range ? [u.startTime, u.endTime][i] : u.timeTips, lay(l.elemMain[i]).addClass("laydate-time-show"), h[0] && h.remove(), f[2].appendChild(y), lay(d).find("ol").each(function (t) {
            var n = this;
            lay(n).find("li").on("click", function () {
                var e = 0 | this.innerHTML;
                lay(this).hasClass(k) || (s.range ? l[x][v[t]] = e : c[v[t]] = e, lay(n).find("." + b).removeClass(b), lay(this).addClass(b), o(), r(), !l.endDate && "time" !== s.type || l.done(null, "change"), l.setBtnStatus())
            })
        })), l
    }, r.prototype.listYM = [], r.prototype.closeList = function () {
        var n = this;
        n.config, lay.each(n.elemCont, function (e, t) {
            lay(this).find("." + w).remove(), lay(n.elemMain[e]).removeClass("laydate-ym-show laydate-time-show")
        }), lay(n.elem).find("." + T).remove()
    }, r.prototype.setBtnStatus = function (e, t, n) {
        var i = this, a = i.config, o = i.lang(), r = lay(i.footer).find(C);
        a.range && "time" !== a.type && (t = t || a.dateTime, n = n || i.endDate, a = i.newDate(t).getTime() > i.newDate(n).getTime(), i.limit(null, t) || i.limit(null, n) ? r.addClass(k) : r[a ? "addClass" : "removeClass"](k), e && a && i.hint("string" == typeof e ? o.timeout.replace(/\u65e5\u671f/g, e) : o.timeout))
    }, r.prototype.parse = function (e, t) {
        var n = this, i = n.config,
            t = t || ("end" == e ? lay.extend({}, n.endDate, n.endTime) : i.range ? lay.extend({}, i.dateTime, n.startTime) : i.dateTime),
            t = h.parse(t, n.format, 1);
        return i.range && void 0 === e ? t + " " + n.rangeStr + " " + n.parse("end") : t
    }, r.prototype.newDate = function (e) {
        return e = e || {}, new Date(e.year || 1, e.month || 0, e.date || 1, e.hours || 0, e.minutes || 0, e.seconds || 0)
    }, r.prototype.setValue = function (e) {
        var t = this, n = t.config, i = t.bindElem || n.elem[0];
        if ("static" !== n.position) return e = e || "", t.isInput(i) ? lay(i).val(e) : t.rangeElem ? (t.rangeElem[0].val(e ? t.parse("start") : ""), t.rangeElem[1].val(e ? t.parse("end") : "")) : (0 === lay(i).find("*").length && lay(i).html(e), lay(i).attr("lay-date", e)), this
    }, r.prototype.preview = function () {
        var e, t = this, n = t.config;
        n.isPreview && (e = lay(t.elem).find("." + m), t = !n.range || t.endDate ? t.parse() : "", e.html(t).css({
            color: "#5FB878",
            "font-size": "14px;"
        }), setTimeout(function () {
            e.css({color: "#666", "font-size": "12px;"})
        }, 300))
    }, r.prototype.done = function (e, t) {
        var n = this, i = n.config, a = lay.extend({}, lay.extend(i.dateTime, n.startTime)),
            o = lay.extend({}, lay.extend(n.endDate, n.endTime));
        return lay.each([a, o], function (e, t) {
            "month" in t && lay.extend(t, {month: t.month + 1})
        }), n.preview(), e = e || [n.parse(), a, o], "function" == typeof i[t || "done"] && i[t || "done"].apply(i, e), n
    }, r.prototype.choose = function (e, t) {
        var n = this, i = n.config, a = n.thisDateTime(t), o = {
            year: 0 | (o = (lay(n.elem).find("td"), e.attr("lay-ymd").split("-")))[0],
            month: (0 | o[1]) - 1,
            date: 0 | o[2]
        };
        e.hasClass(k) || (lay.extend(a, o), i.range ? (lay.each(["startTime", "endTime"], function (e, t) {
            n[t] = n[t] || {hours: 0, minutes: 0, seconds: 0}
        }), n.calendar(null, t).done(null, "change")) : "static" === i.position ? n.calendar().done().done(null, "change") : "date" === i.type ? n.setValue(n.parse()).remove().done() : "datetime" === i.type && n.calendar().done(null, "change"))
    }, r.prototype.tool = function (e, t) {
        var n = this, i = n.config, a = n.lang(), o = i.dateTime, r = "static" === i.position, l = {
            datetime: function () {
                lay(e).hasClass(k) || (n.list("time", 0), i.range && n.list("time", 1), lay(e).attr("lay-type", "date").html(n.lang().dateTips))
            }, date: function () {
                n.closeList(), lay(e).attr("lay-type", "datetime").html(n.lang().timeTips)
            }, clear: function () {
                r && (lay.extend(o, n.firstDate), n.calendar()), i.range && (delete i.dateTime, delete n.endDate, delete n.startTime, delete n.endTime), n.setValue("").remove(), n.done(["", {}, {}])
            }, now: function () {
                var e = new Date;
                lay.extend(o, n.systemDate(), {
                    hours: e.getHours(),
                    minutes: e.getMinutes(),
                    seconds: e.getSeconds()
                }), n.setValue(n.parse()).remove(), r && n.calendar(), n.done()
            }, confirm: function () {
                if (i.range) {
                    if (lay(e).hasClass(k)) return n.hint("time" === i.type ? a.timeout.replace(/\u65e5\u671f/g, "时间") : a.timeout)
                } else if (lay(e).hasClass(k)) return n.hint(a.invalidDate);
                n.done(), n.setValue(n.parse()).remove()
            }
        };
        l[t] && l[t]()
    }, r.prototype.change = function (i) {
        function e(e) {
            var t = lay(s).find(".laydate-year-list")[0], n = lay(s).find(".laydate-month-list")[0];
            return t && (c[0] = e ? c[0] - 15 : c[0] + 15, a.list("year", i)), n && (e ? c[0]-- : c[0]++, a.list("month", i)), (t || n) && (lay.extend(r, {year: c[0]}), l && (r.year = c[0]), o.range || a.done(null, "change"), o.range || a.limit(lay(a.footer).find(C), {year: c[0]})), a.setBtnStatus(), t || n
        }

        var a = this, o = a.config, r = a.thisDateTime(i), l = o.range && ("year" === o.type || "month" === o.type),
            s = a.elemCont[i || 0], c = a.listYM[i];
        return {
            prevYear: function () {
                e("sub") || (r.year--, a.checkDate("limit").calendar(null, i), a.done(null, "change"))
            }, prevMonth: function () {
                var e = a.getAsYM(r.year, r.month, "sub");
                lay.extend(r, {year: e[0], month: e[1]}), a.checkDate("limit").calendar(null, i), a.done(null, "change")
            }, nextMonth: function () {
                var e = a.getAsYM(r.year, r.month);
                lay.extend(r, {year: e[0], month: e[1]}), a.checkDate("limit").calendar(null, i), a.done(null, "change")
            }, nextYear: function () {
                e() || (r.year++, a.checkDate("limit").calendar(null, i), a.done(null, "change"))
            }
        }
    }, r.prototype.changeEvent = function () {
        var a = this;
        a.config, lay(a.elem).on("click", function (e) {
            lay.stope(e)
        }).on("mousedown", function (e) {
            lay.stope(e)
        }), lay.each(a.elemHeader, function (i, e) {
            lay(e[0]).on("click", function (e) {
                a.change(i).prevYear()
            }), lay(e[1]).on("click", function (e) {
                a.change(i).prevMonth()
            }), lay(e[2]).find("span").on("click", function (e) {
                var t = lay(this), n = t.attr("lay-ym"), t = t.attr("lay-type");
                n && (n = n.split("-"), a.listYM[i] = [0 | n[0], 0 | n[1]], a.list(t, i), lay(a.footer).find("." + E).addClass(k))
            }), lay(e[3]).on("click", function (e) {
                a.change(i).nextMonth()
            }), lay(e[4]).on("click", function (e) {
                a.change(i).nextYear()
            })
        }), lay.each(a.table, function (e, t) {
            lay(t).find("td").on("click", function () {
                a.choose(lay(this), e)
            })
        }), lay(a.footer).find("span").on("click", function () {
            var e = lay(this).attr("lay-type");
            a.tool(this, e)
        })
    }, r.prototype.isInput = function (e) {
        return /input|textarea/.test(e.tagName.toLocaleLowerCase())
    }, r.prototype.events = function () {
        function e(e, t) {
            e.on(i.trigger, function () {
                t && (n.bindElem = this), n.render()
            })
        }

        var n = this, i = n.config;
        i.elem[0] && !i.elem[0].eventHandler && (e(i.elem, "bind"), e(i.eventElem), i.elem[0].eventHandler = !0)
    }, o.that = {}, o.getThis = function (e) {
        var t = o.that[e];
        return t || hint.error(e ? n + " instance with ID '" + e + "' not found" : "ID argument required"), t
    }, l.run = function (i) {
        i(document).on("mousedown", function (e) {
            var t, n;
            !h.thisId || (t = o.getThis(h.thisId)) && (n = t.config, e.target !== n.elem[0] && e.target !== n.eventElem[0] && e.target !== i(n.closeStop)[0] && t.remove())
        }).on("keydown", function (e) {
            var t;
            !h.thisId || (t = o.getThis(h.thisId)) && 13 === e.keyCode && i("#" + t.elemID)[0] && t.elemID === r.thisElemDate && (e.preventDefault(), i(t.footer).find(C)[0].click())
        }), i(a).on("resize", function () {
            if (h.thisId) {
                var e = o.getThis(h.thisId);
                if (e) return !(!e.elem || !i(".layui-laydate")[0]) && void e.position()
            }
        })
    }, h.render = function (e) {
        e = new r(e);
        return o.call(e)
    }, h.parse = function (n, i, a) {
        return n = n || {}, i = ((i = "string" == typeof i ? o.formatArr(i) : i) || []).concat(), lay.each(i, function (e, t) {
            /yyyy|y/.test(t) ? i[e] = lay.digit(n.year, t.length) : /MM|M/.test(t) ? i[e] = lay.digit(n.month + (a || 0), t.length) : /dd|d/.test(t) ? i[e] = lay.digit(n.date, t.length) : /HH|H/.test(t) ? i[e] = lay.digit(n.hours, t.length) : /mm|m/.test(t) ? i[e] = lay.digit(n.minutes, t.length) : /ss|s/.test(t) && (i[e] = lay.digit(n.seconds, t.length))
        }), i.join("")
    }, h.getEndDate = function (e, t) {
        var n = new Date;
        return n.setFullYear(t || n.getFullYear(), e || n.getMonth() + 1, 1), new Date(n.getTime() - 864e5).getDate()
    }, i ? (h.ready(), layui.define("lay", function (e) {
        h.path = layui.cache.dir, l.run(lay), e(n, h)
    })) : "function" == typeof define && define.amd ? define(function () {
        return l.run(lay), h
    }) : (h.ready(), l.run(a.lay), a.laydate = h)
}(window), function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (k, e) {
    function l(e) {
        var t = !!e && "length" in e && e.length, n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function t(e, n, i) {
        if (oe.isFunction(n)) return oe.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return oe.grep(e, function (e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (he.test(n)) return oe.filter(n, e, i);
            n = oe.filter(n, e)
        }
        return oe.grep(e, function (e) {
            return -1 < oe.inArray(e, n) !== i
        })
    }

    function n(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function i() {
        G.addEventListener ? (G.removeEventListener("DOMContentLoaded", a), k.removeEventListener("load", a)) : (G.detachEvent("onreadystatechange", a), k.detachEvent("onload", a))
    }

    function a() {
        !G.addEventListener && "load" !== k.event.type && "complete" !== G.readyState || (i(), oe.ready())
    }

    function s(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Ee, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Te.test(n) ? oe.parseJSON(n) : n)
                } catch (e) {
                }
                oe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function c(e) {
        for (var t in e) if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return;
        return 1
    }

    function o(e, t, n, i) {
        if (we(e)) {
            var a, o = oe.expando, r = e.nodeType, l = r ? oe.cache : e, s = r ? e[o] : e[o] && o;
            if (s && l[s] && (i || l[s].data) || void 0 !== n || "string" != typeof t) return l[s = s || (r ? e[o] = K.pop() || oe.guid++ : o)] || (l[s] = r ? {} : {toJSON: oe.noop}), "object" != typeof t && "function" != typeof t || (i ? l[s] = oe.extend(l[s], t) : l[s].data = oe.extend(l[s].data, t)), s = l[s], i || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[oe.camelCase(t)] = n), "string" == typeof t ? null == (a = s[t]) && (a = s[oe.camelCase(t)]) : a = s, a
        }
    }

    function r(e, t, n) {
        if (we(e)) {
            var i, a, o = e.nodeType, r = o ? oe.cache : e, l = o ? e[oe.expando] : oe.expando;
            if (r[l]) {
                if (t && (i = n ? r[l] : r[l].data)) {
                    a = (t = oe.isArray(t) ? t.concat(oe.map(t, oe.camelCase)) : t in i ? [t] : (t = oe.camelCase(t)) in i ? [t] : t.split(" ")).length;
                    for (; a--;) delete i[t[a]];
                    if (n ? !c(i) : !oe.isEmptyObject(i)) return
                }
                (n || (delete r[l].data, c(r[l]))) && (o ? oe.cleanData([e], !0) : ae.deleteExpando || r != r.window ? delete r[l] : r[l] = void 0)
            }
        }
    }

    function u(e, t, n, i) {
        var a, o = 1, r = 20, l = i ? function () {
                return i.cur()
            } : function () {
                return oe.css(e, t, "")
            }, s = l(), c = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
            u = (oe.cssNumber[t] || "px" !== c && +s) && De.exec(oe.css(e, t));
        if (u && u[3] !== c) for (c = c || u[3], n = n || [], u = +s || 1; oe.style(e, t, (u /= o = o || ".5") + c), o !== (o = l() / s) && 1 !== o && --r;) ;
        return n && (u = +u || +s || 0, a = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = a)), a
    }

    function m(e) {
        var t = Ie.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, i, a = 0,
            o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o) for (o = [], n = e.childNodes || e; null != (i = n[a]); a++) !t || oe.nodeName(i, t) ? o.push(i) : oe.merge(o, g(i, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], o) : o
    }

    function v(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
    }

    function x(e) {
        je.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t, n, i, a) {
        for (var o, r, l, s, c, u, d, f = e.length, p = m(t), h = [], y = 0; y < f; y++) if ((r = e[y]) || 0 === r) if ("object" === oe.type(r)) oe.merge(h, r.nodeType ? [r] : r); else if (qe.test(r)) {
            for (s = s || p.appendChild(t.createElement("div")), c = (_e.exec(r) || ["", ""])[1].toLowerCase(), d = Fe[c] || Fe._default, s.innerHTML = d[1] + oe.htmlPrefilter(r) + d[2], o = d[0]; o--;) s = s.lastChild;
            if (!ae.leadingWhitespace && Me.test(r) && h.push(t.createTextNode(Me.exec(r)[0])), !ae.tbody) for (o = (r = "table" !== c || Pe.test(r) ? "<table>" !== d[1] || Pe.test(r) ? 0 : s : s.firstChild) && r.childNodes.length; o--;) oe.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
            for (oe.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
            s = p.lastChild
        } else h.push(t.createTextNode(r));
        for (s && p.removeChild(s), ae.appendChecked || oe.grep(g(h, "input"), x), y = 0; r = h[y++];) if (i && -1 < oe.inArray(r, i)) a && a.push(r); else if (l = oe.contains(r.ownerDocument, r), s = g(p.appendChild(r), "script"), l && v(s), n) for (o = 0; r = s[o++];) He.test(r.type || "") && n.push(r);
        return s = null, p
    }

    function d() {
        return !0
    }

    function f() {
        return !1
    }

    function p() {
        try {
            return G.activeElement
        } catch (e) {
        }
    }

    function h(e, t, n, i, a, o) {
        var r, l;
        if ("object" == typeof t) {
            for (l in "string" != typeof n && (i = i || n, n = void 0), t) h(e, l, n, i, t[l], o);
            return e
        }
        if (null == i && null == a ? (a = n, i = n = void 0) : null == a && ("string" == typeof n ? (a = i, i = void 0) : (a = i, i = n, n = void 0)), !1 === a) a = f; else if (!a) return e;
        return 1 === o && (r = a, (a = function (e) {
            return oe().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = oe.guid++)), e.each(function () {
            oe.event.add(this, t, a, i, n)
        })
    }

    function b(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function w(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
    }

    function C(e) {
        var t = Ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function T(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var n, i, a, o = oe._data(e), e = oe._data(t, o), r = o.events;
            if (r) for (n in delete e.handle, e.events = {}, r) for (i = 0, a = r[n].length; i < a; i++) oe.event.add(t, n, r[n][i]);
            e.data && (e.data = oe.extend({}, e.data))
        }
    }

    function E(n, i, a, o) {
        i = Q.apply([], i);
        var e, t, r, l, s, c, u = 0, d = n.length, f = d - 1, p = i[0], h = oe.isFunction(p);
        if (h || 1 < d && "string" == typeof p && !ae.checkClone && Ue.test(p)) return n.each(function (e) {
            var t = n.eq(e);
            h && (i[0] = p.call(this, e, t.html())), E(t, i, a, o)
        });
        if (d && (e = (c = y(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === c.childNodes.length && (c = e), e || o)) {
            for (r = (l = oe.map(g(c, "script"), w)).length; u < d; u++) t = c, u !== f && (t = oe.clone(t, !0, !0), r && oe.merge(l, g(t, "script"))), a.call(n[u], t, u);
            if (r) for (s = l[l.length - 1].ownerDocument, oe.map(l, C), u = 0; u < r; u++) t = l[u], He.test(t.type || "") && !oe._data(t, "globalEval") && oe.contains(s, t) && (t.src ? oe._evalUrl && oe._evalUrl(t.src) : oe.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ge, "")));
            c = e = null
        }
        return n
    }

    function S(e, t, n) {
        for (var i, a = t ? oe.filter(t, e) : e, o = 0; null != (i = a[o]); o++) n || 1 !== i.nodeType || oe.cleanData(g(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && v(g(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function A(e, t) {
        e = oe(t.createElement(e)).appendTo(t.body), t = oe.css(e[0], "display");
        return e.detach(), t
    }

    function L(e) {
        var t = G, n = st[e];
        return n || ("none" !== (n = A(e, t)) && n || ((t = ((Ze = (Ze || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ze[0].contentDocument).document).write(), t.close(), n = A(e, t), Ze.detach()), st[e] = n), n
    }

    function D(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function N(e) {
        if (e in Ct) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = wt.length; n--;) if ((e = wt[n] + t) in Ct) return e
    }

    function j(e, t) {
        for (var n, i, a, o = [], r = 0, l = e.length; r < l; r++) (i = e[r]).style && (o[r] = oe._data(i, "olddisplay"), n = i.style.display, t ? (o[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && Se(i) && (o[r] = oe._data(i, "olddisplay", L(i.nodeName)))) : (a = Se(i), (n && "none" !== n || !a) && oe._data(i, "olddisplay", a ? n : oe.css(i, "display"))));
        for (r = 0; r < l; r++) (i = e[r]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[r] || "" : "none"));
        return e
    }

    function _(e, t, n) {
        var i = xt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function H(e, t, n, i, a) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; o < 4; o += 2) "margin" === n && (r += oe.css(e, n + Ne[o], !0, a)), i ? ("content" === n && (r -= oe.css(e, "padding" + Ne[o], !0, a)), "margin" !== n && (r -= oe.css(e, "border" + Ne[o] + "Width", !0, a))) : (r += oe.css(e, "padding" + Ne[o], !0, a), "padding" !== n && (r += oe.css(e, "border" + Ne[o] + "Width", !0, a)));
        return r
    }

    function M(e, t, n) {
        var i = !0, a = "width" === t ? e.offsetWidth : e.offsetHeight, o = pt(e),
            r = ae.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o);
        if (a <= 0 || null == a) {
            if (((a = ht(e, t, o)) < 0 || null == a) && (a = e.style[t]), ut.test(a)) return a;
            i = r && (ae.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
        }
        return a + H(e, t, n || (r ? "border" : "content"), i, o) + "px"
    }

    function I(e, t, n, i, a) {
        return new I.prototype.init(e, t, n, i, a)
    }

    function F() {
        return k.setTimeout(function () {
            Tt = void 0
        }), Tt = oe.now()
    }

    function q(e, t) {
        var n, i = {height: e}, a = 0;
        for (t = t ? 1 : 0; a < 4; a += 2 - t) i["margin" + (n = Ne[a])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function P(e, t, n) {
        for (var i, a = (B.tweeners[t] || []).concat(B.tweeners["*"]), o = 0, r = a.length; o < r; o++) if (i = a[o].call(n, t, e)) return i
    }

    function B(a, e, t) {
        var n, o, i = 0, r = B.prefilters.length, l = oe.Deferred().always(function () {
            delete s.elem
        }), s = function () {
            if (o) return !1;
            for (var e = Tt || F(), e = Math.max(0, c.startTime + c.duration - e), t = 1 - (e / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++) c.tweens[n].run(t);
            return l.notifyWith(a, [c, t, e]), t < 1 && i ? e : (l.resolveWith(a, [c]), !1)
        }, c = l.promise({
            elem: a,
            props: oe.extend({}, e),
            opts: oe.extend(!0, {specialEasing: {}, easing: oe.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Tt || F(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                e = oe.Tween(a, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(e), e
            },
            stop: function (e) {
                var t = 0, n = e ? c.tweens.length : 0;
                if (o) return this;
                for (o = !0; t < n; t++) c.tweens[t].run(1);
                return e ? (l.notifyWith(a, [c, 1, 0]), l.resolveWith(a, [c, e])) : l.rejectWith(a, [c, e]), this
            }
        }), u = c.props;
        for (function (e, t) {
            var n, i, a, o, r;
            for (n in e) if (i = oe.camelCase(n), a = t[i], o = e[n], oe.isArray(o) && (a = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), r = oe.cssHooks[i], r && "expand" in r) for (n in o = r.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = a); else t[i] = a
        }(u, c.opts.specialEasing); i < r; i++) if (n = B.prefilters[i].call(c, a, u, c.opts)) return oe.isFunction(n.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(n.stop, n)), n;
        return oe.map(u, P, c), oe.isFunction(c.opts.start) && c.opts.start.call(a, c), oe.fx.timer(oe.extend(s, {
            elem: a,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function O(e) {
        return oe.attr(e, "class") || ""
    }

    function R(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0, a = e.toLowerCase().match(ke) || [];
            if (oe.isFunction(t)) for (; n = a[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function z(t, i, a, o) {
        function r(e) {
            var n;
            return l[e] = !0, oe.each(t[e] || [], function (e, t) {
                t = t(i, a, o);
                return "string" != typeof t || s || l[t] ? s ? !(n = t) : void 0 : (i.dataTypes.unshift(t), r(t), !1)
            }), n
        }

        var l = {}, s = t === Qt;
        return r(i.dataTypes[0]) || !l["*"] && r("*")
    }

    function W(e, t) {
        var n, i, a = oe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((a[i] ? e : n = n || {})[i] = t[i]);
        return n && oe.extend(!0, e, n), e
    }

    function $(e) {
        if (!oe.contains(e.ownerDocument || G, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === ((t = e).style && t.style.display || oe.css(t, "display")) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        var t;
        return !1
    }

    function Y() {
        try {
            return new k.XMLHttpRequest
        } catch (e) {
        }
    }

    function X() {
        try {
            return new k.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function V(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    function U(e, t) {
        return t.toUpperCase()
    }

    var K = [], G = k.document, J = K.slice, Q = K.concat, Z = K.push, ee = K.indexOf, te = {}, ne = te.toString,
        ie = te.hasOwnProperty, ae = {}, oe = function (e, t) {
            return new oe.fn.init(e, t)
        }, re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, le = /^-ms-/, se = /-([\da-z])/gi;
    oe.fn = oe.prototype = {
        jquery: "1.12.4", constructor: oe, selector: "", length: 0, toArray: function () {
            return J.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : J.call(this)
        }, pushStack: function (e) {
            e = oe.merge(this.constructor(), e);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (e) {
            return oe.each(this, e)
        }, map: function (n) {
            return this.pushStack(oe.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(J.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: Z, sort: K.sort, splice: K.splice
    }, oe.extend = oe.fn.extend = function () {
        var e, t, n, i, a, o = arguments[0] || {}, r = 1, l = arguments.length, s = !1;
        for ("boolean" == typeof o && (s = o, o = arguments[r] || {}, r++), "object" == typeof o || oe.isFunction(o) || (o = {}), r === l && (o = this, r--); r < l; r++) if (null != (i = arguments[r])) for (n in i) a = o[n], t = i[n], o !== t && (s && t && (oe.isPlainObject(t) || (e = oe.isArray(t))) ? (a = e ? (e = !1, a && oe.isArray(a) ? a : []) : a && oe.isPlainObject(a) ? a : {}, o[n] = oe.extend(s, a, t)) : void 0 !== t && (o[n] = t));
        return o
    }, oe.extend({
        expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === oe.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === oe.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !oe.isArray(e) && 0 <= t - parseFloat(t) + 1
        }, isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0
        }, isPlainObject: function (e) {
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!ae.ownFirst) for (var t in e) return ie.call(e, t);
            for (t in e) ;
            return void 0 === t || ie.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? te[ne.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            e && oe.trim(e) && (k.execScript || function (e) {
                k.eval.call(k, e)
            })(e)
        }, camelCase: function (e) {
            return e.replace(le, "ms-").replace(se, U)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var n, i = 0;
            if (l(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(re, "")
        }, makeArray: function (e, t) {
            t = t || [];
            return null != e && (l(Object(e)) ? oe.merge(t, "string" == typeof e ? [e] : e) : Z.call(t, e)), t
        }, inArray: function (e, t, n) {
            var i;
            if (t) {
                if (ee) return ee.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++) if (n in t && t[n] === e) return n
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, a = e.length; i < n;) e[a++] = t[i++];
            if (n != n) for (; void 0 !== t[i];) e[a++] = t[i++];
            return e.length = a, e
        }, grep: function (e, t, n) {
            for (var i = [], a = 0, o = e.length, r = !n; a < o; a++) !t(e[a], a) != r && i.push(e[a]);
            return i
        }, map: function (e, t, n) {
            var i, a, o = 0, r = [];
            if (l(e)) for (i = e.length; o < i; o++) null != (a = t(e[o], o, n)) && r.push(a); else for (o in e) a = t(e[o], o, n), null != a && r.push(a);
            return Q.apply([], r)
        }, guid: 1, proxy: function (e, t) {
            var n, i;
            if ("string" == typeof t && (i = e[t], t = e, e = i), oe.isFunction(e)) return n = J.call(arguments, 2), (i = function () {
                return e.apply(t || this, n.concat(J.call(arguments)))
            }).guid = e.guid = e.guid || oe.guid++, i
        }, now: function () {
            return +new Date
        }, support: ae
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = K[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        te["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function (n) {
        function b(e, t, n, i) {
            var a, o, r, l, s, c, u, d, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : P) !== N && D(t), t = t || N, _)) {
                if (11 !== p && (c = he.exec(e))) if (a = c[1]) {
                    if (9 === p) {
                        if (!(r = t.getElementById(a))) return n;
                        if (r.id === a) return n.push(r), n
                    } else if (f && (r = f.getElementById(a)) && F(t, r) && r.id === a) return n.push(r), n
                } else {
                    if (c[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = c[3]) && m.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                }
                if (m.qsa && !W[e + " "] && (!H || !H.test(e))) {
                    if (1 !== p) f = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((l = t.getAttribute("id")) ? l = l.replace(me, "\\$&") : t.setAttribute("id", l = q), o = (u = C(e)).length, s = ce.test(l) ? "#" + l : "[id='" + l + "']"; o--;) u[o] = s + " " + y(u[o]);
                        d = u.join(","), f = ye.test(e) && h(t.parentNode) || t
                    }
                    if (d) try {
                        return K.apply(n, f.querySelectorAll(d)), n
                    } catch (e) {
                    } finally {
                        l === q && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(ae, "$1"), t, n, i)
        }

        function e() {
            function n(e, t) {
                return i.push(e + " ") > w.cacheLength && delete n[i.shift()], n[e + " "] = t
            }

            var i = [];
            return n
        }

        function s(e) {
            return e[q] = !0, e
        }

        function t(e) {
            var t = N.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t)
            }
        }

        function i(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
        }

        function c(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(r) {
            return s(function (o) {
                return o = +o, s(function (e, t) {
                    for (var n, i = r([], e.length, o), a = i.length; a--;) e[n = i[a]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function h(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function o() {
        }

        function y(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function f(r, e, t) {
            var l = e.dir, s = t && "parentNode" === l, c = O++;
            return e.first ? function (e, t, n) {
                for (; e = e[l];) if (1 === e.nodeType || s) return r(e, t, n)
            } : function (e, t, n) {
                var i, a, o = [B, c];
                if (n) {
                    for (; e = e[l];) if ((1 === e.nodeType || s) && r(e, t, n)) return !0
                } else for (; e = e[l];) if (1 === e.nodeType || s) {
                    if ((a = (i = (a = e[q] || (e[q] = {}))[e.uniqueID] || (a[e.uniqueID] = {}))[l]) && a[0] === B && a[1] === c) return o[2] = a[2];
                    if ((i[l] = o)[2] = r(e, t, n)) return !0
                }
            }
        }

        function p(a) {
            return 1 < a.length ? function (e, t, n) {
                for (var i = a.length; i--;) if (!a[i](e, t, n)) return !1;
                return !0
            } : a[0]
        }

        function k(e, t, n, i, a) {
            for (var o, r = [], l = 0, s = e.length, c = null != t; l < s; l++) (o = e[l]) && (n && !n(o, i, a) || (r.push(o), c && t.push(l)));
            return r
        }

        function v(p, h, y, m, g, e) {
            return m && !m[q] && (m = v(m)), g && !g[q] && (g = v(g, e)), s(function (e, t, n, i) {
                var a, o, r, l = [], s = [], c = t.length, u = e || function (e, t, n) {
                        for (var i = 0, a = t.length; i < a; i++) b(e, t[i], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), d = !p || !e && h ? u : k(u, l, p, n, i),
                    f = y ? g || (e ? p : c || m) ? [] : t : d;
                if (y && y(d, f, n, i), m) for (a = k(f, s), m(a, [], n, i), o = a.length; o--;) (r = a[o]) && (f[s[o]] = !(d[s[o]] = r));
                if (e) {
                    if (g || p) {
                        if (g) {
                            for (a = [], o = f.length; o--;) (r = f[o]) && a.push(d[o] = r);
                            g(null, f = [], a, i)
                        }
                        for (o = f.length; o--;) (r = f[o]) && -1 < (a = g ? J(e, r) : l[o]) && (e[a] = !(t[a] = r))
                    }
                } else f = k(f === t ? f.splice(c, f.length) : f), g ? g(null, t, f, i) : K.apply(t, f)
            })
        }

        function r(m, g) {
            function e(e, t, n, i, a) {
                var o, r, l, s = 0, c = "0", u = e && [], d = [], f = S, p = e || x && w.find.TAG("*", a),
                    h = B += null == f ? 1 : Math.random() || .1, y = p.length;
                for (a && (S = t === N || t || a); c !== y && null != (o = p[c]); c++) {
                    if (x && o) {
                        for (r = 0, t || o.ownerDocument === N || (D(o), n = !_); l = m[r++];) if (l(o, t || N, n)) {
                            i.push(o);
                            break
                        }
                        a && (B = h)
                    }
                    v && ((o = !l && o) && s--, e && u.push(o))
                }
                if (s += c, v && c !== s) {
                    for (r = 0; l = g[r++];) l(u, d, t, n);
                    if (e) {
                        if (0 < s) for (; c--;) u[c] || d[c] || (d[c] = V.call(i));
                        d = k(d)
                    }
                    K.apply(i, d), a && !e && 0 < d.length && 1 < s + g.length && b.uniqueSort(i)
                }
                return a && (B = h, S = f), u
            }

            var v = 0 < g.length, x = 0 < m.length;
            return v ? s(e) : e
        }

        function d(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function l() {
            D()
        }

        var u, m, w, g, x, C, T, E, S, A, L, D, N, j, _, H, M, I, F, q = "sizzle" + +new Date, P = n.document, B = 0,
            O = 0, R = e(), z = e(), W = e(), $ = function (e, t) {
                return e === t && (L = !0), 0
            }, Y = {}.hasOwnProperty, X = [], V = X.pop, U = X.push, K = X.push, G = X.slice, J = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            Z = "[\\x20\\t\\r\\n\\f]", ee = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            te = "\\[" + Z + "*(" + ee + ")(?:" + Z + "*([*^$|!~]?=)" + Z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ee + "))|)" + Z + "*\\]",
            ne = ":(" + ee + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + te + ")*)|.*)\\)|)",
            ie = new RegExp(Z + "+", "g"), ae = new RegExp("^" + Z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Z + "+$", "g"),
            oe = new RegExp("^" + Z + "*," + Z + "*"), re = new RegExp("^" + Z + "*([>+~]|" + Z + ")" + Z + "*"),
            le = new RegExp("=" + Z + "*([^\\]'\"]*?)" + Z + "*\\]", "g"), se = new RegExp(ne),
            ce = new RegExp("^" + ee + "$"), ue = {
                ID: new RegExp("^#(" + ee + ")"),
                CLASS: new RegExp("^\\.(" + ee + ")"),
                TAG: new RegExp("^(" + ee + "|[*])"),
                ATTR: new RegExp("^" + te),
                PSEUDO: new RegExp("^" + ne),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Z + "*(even|odd|(([+-]|)(\\d*)n|)" + Z + "*(?:([+-]|)" + Z + "*(\\d+)|))" + Z + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Q + ")$", "i"),
                needsContext: new RegExp("^" + Z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Z + "*((?:-\\d)?\\d*)" + Z + "*\\)|)(?=[^-]|$)", "i")
            }, de = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, pe = /^[^{]+\{\s*\[native \w/,
            he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, me = /'|\\/g,
            ge = new RegExp("\\\\([\\da-f]{1,6}" + Z + "?|(" + Z + ")|.)", "ig");
        try {
            K.apply(X = G.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: X.length ? function (e, t) {
                    U.apply(e, G.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }
        for (u in m = b.support = {}, x = b.isXML = function (e) {
            e = e && (e.ownerDocument || e).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, D = b.setDocument = function (e) {
            var e = e ? e.ownerDocument || e : P;
            return e !== N && 9 === e.nodeType && e.documentElement && (j = (N = e).documentElement, _ = !x(N), (e = N.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", l, !1) : e.attachEvent && e.attachEvent("onunload", l)), m.attributes = t(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), m.getElementsByTagName = t(function (e) {
                return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
            }), m.getElementsByClassName = pe.test(N.getElementsByClassName), m.getById = t(function (e) {
                return j.appendChild(e).id = q, !N.getElementsByName || !N.getElementsByName(q).length
            }), m.getById ? (w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && _) {
                    e = t.getElementById(e);
                    return e ? [e] : []
                }
            }, w.filter.ID = function (e) {
                var t = e.replace(ge, d);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function (e) {
                var t = e.replace(ge, d);
                return function (e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }), w.find.TAG = m.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : m.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], a = 0, o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (; n = o[a++];) 1 === n.nodeType && i.push(n);
                return i
            }, w.find.CLASS = m.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && _) return t.getElementsByClassName(e)
            }, M = [], H = [], (m.qsa = pe.test(N.querySelectorAll)) && (t(function (e) {
                j.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + Z + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + Z + "*(?:value|" + Q + ")"), e.querySelectorAll("[id~=" + q + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || H.push(".#.+[+~]")
            }), t(function (e) {
                var t = N.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + Z + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
            })), (m.matchesSelector = pe.test(I = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && t(function (e) {
                m.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), M.push("!=", ne)
            }), H = H.length && new RegExp(H.join("|")), M = M.length && new RegExp(M.join("|")), e = pe.test(j.compareDocumentPosition), F = e || pe.test(j.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, $ = e ? function (e, t) {
                if (e === t) return L = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !m.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === P && F(P, e) ? -1 : t === N || t.ownerDocument === P && F(P, t) ? 1 : A ? J(A, e) - J(A, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return L = !0, 0;
                var n, i = 0, a = e.parentNode, o = t.parentNode, r = [e], l = [t];
                if (!a || !o) return e === N ? -1 : t === N ? 1 : a ? -1 : o ? 1 : A ? J(A, e) - J(A, t) : 0;
                if (a === o) return c(e, t);
                for (n = e; n = n.parentNode;) r.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; r[i] === l[i];) i++;
                return i ? c(r[i], l[i]) : r[i] === P ? -1 : l[i] === P ? 1 : 0
            }), N
        }, b.matches = function (e, t) {
            return b(e, null, null, t)
        }, b.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== N && D(e), t = t.replace(le, "='$1']"), m.matchesSelector && _ && !W[t + " "] && (!M || !M.test(t)) && (!H || !H.test(t))) try {
                var n = I.call(e, t);
                if (n || m.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return 0 < b(t, N, null, [e]).length
        }, b.contains = function (e, t) {
            return (e.ownerDocument || e) !== N && D(e), F(e, t)
        }, b.attr = function (e, t) {
            (e.ownerDocument || e) !== N && D(e);
            var n = w.attrHandle[t.toLowerCase()],
                n = n && Y.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== n ? n : m.attributes || !_ ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, b.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, b.uniqueSort = function (e) {
            var t, n = [], i = 0, a = 0;
            if (L = !m.detectDuplicates, A = !m.sortStable && e.slice(0), e.sort($), L) {
                for (; t = e[a++];) t === e[a] && (i = n.push(a));
                for (; i--;) e.splice(n[i], 1)
            }
            return A = null, e
        }, g = b.getText = function (e) {
            var t, n = "", i = 0, a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += g(e)
                } else if (3 === a || 4 === a) return e.nodeValue
            } else for (; t = e[i++];) n += g(t);
            return n
        }, (w = b.selectors = {
            cacheLength: 50,
            createPseudo: s,
            match: ue,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ge, d), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || b.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && b.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && se.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ge, d).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + Z + ")" + e + "(" + Z + "|$)")) && R(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (t, n, i) {
                    return function (e) {
                        e = b.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(ie, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (h, e, t, y, m) {
                    var g = "nth" !== h.slice(0, 3), v = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === y && 0 === m ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var i, a, o, r, l, s, c = g != v ? "nextSibling" : "previousSibling", u = e.parentNode,
                            d = x && e.nodeName.toLowerCase(), f = !n && !x, p = !1;
                        if (u) {
                            if (g) {
                                for (; c;) {
                                    for (r = e; r = r[c];) if (x ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
                                    s = c = "only" === h && !s && "nextSibling"
                                }
                                return !0
                            }
                            if (s = [v ? u.firstChild : u.lastChild], v && f) {
                                for (p = (l = (i = (a = (o = (r = u)[q] || (r[q] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[h] || [])[0] === B && i[1]) && i[2], r = l && u.childNodes[l]; r = ++l && r && r[c] || (p = l = 0) || s.pop();) if (1 === r.nodeType && ++p && r === e) {
                                    a[h] = [B, l, p];
                                    break
                                }
                            } else if (!1 === (p = f ? l = (i = (a = (o = (r = e)[q] || (r[q] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[h] || [])[0] === B && i[1] : p)) for (; (r = ++l && r && r[c] || (p = l = 0) || s.pop()) && ((x ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++p || (f && ((a = (o = r[q] || (r[q] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[h] = [B, p]), r !== e));) ;
                            return (p -= m) === y || p % y == 0 && 0 <= p / y
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || b.error("unsupported pseudo: " + e);
                    return r[q] ? r(o) : 1 < r.length ? (t = [e, e, "", o], w.setFilters.hasOwnProperty(e.toLowerCase()) ? s(function (e, t) {
                        for (var n, i = r(e, o), a = i.length; a--;) e[n = J(e, i[a])] = !(t[n] = i[a])
                    }) : function (e) {
                        return r(e, 0, t)
                    }) : r
                }
            },
            pseudos: {
                not: s(function (e) {
                    var i = [], a = [], l = T(e.replace(ae, "$1"));
                    return l[q] ? s(function (e, t, n, i) {
                        for (var a, o = l(e, null, i, []), r = e.length; r--;) (a = o[r]) && (e[r] = !(t[r] = a))
                    }) : function (e, t, n) {
                        return i[0] = e, l(i, null, n, a), i[0] = null, !a.pop()
                    }
                }), has: s(function (t) {
                    return function (e) {
                        return 0 < b(t, e).length
                    }
                }), contains: s(function (t) {
                    return t = t.replace(ge, d), function (e) {
                        return -1 < (e.textContent || e.innerText || g(e)).indexOf(t)
                    }
                }), lang: s(function (n) {
                    return ce.test(n || "") || b.error("unsupported lang: " + n), n = n.replace(ge, d).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = _ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === j
                }, focus: function (e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !w.pseudos.empty(e)
                }, header: function (e) {
                    return fe.test(e.nodeName)
                }, input: function (e) {
                    return de.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: a(function () {
                    return [0]
                }), last: a(function (e, t) {
                    return [t - 1]
                }), eq: a(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: a(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: a(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: a(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                    return e
                }), gt: a(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = function (t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(u);
        for (u in {submit: !0, reset: !0}) w.pseudos[u] = function (n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(u);
        return o.prototype = w.filters = w.pseudos, w.setFilters = new o, C = b.tokenize = function (e, t) {
            var n, i, a, o, r, l, s, c = z[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (r = e, l = [], s = w.preFilter; r;) {
                for (o in n && !(i = oe.exec(r)) || (i && (r = r.slice(i[0].length) || r), l.push(a = [])), n = !1, (i = re.exec(r)) && (n = i.shift(), a.push({
                    value: n,
                    type: i[0].replace(ae, " ")
                }), r = r.slice(n.length)), w.filter) !(i = ue[o].exec(r)) || s[o] && !(i = s[o](i)) || (n = i.shift(), a.push({
                    value: n,
                    type: o,
                    matches: i
                }), r = r.slice(n.length));
                if (!n) break
            }
            return t ? r.length : r ? b.error(e) : z(e, l).slice(0)
        }, T = b.compile = function (e, t) {
            var n, i = [], a = [], o = W[e + " "];
            if (!o) {
                for (n = (t = t || C(e)).length; n--;) ((o = function e(t) {
                    for (var i, n, a, o = t.length, r = w.relative[t[0].type], l = r || w.relative[" "], s = r ? 1 : 0, c = f(function (e) {
                        return e === i
                    }, l, !0), u = f(function (e) {
                        return -1 < J(i, e)
                    }, l, !0), d = [function (e, t, n) {
                        return n = !r && (n || t !== S) || ((i = t).nodeType ? c : u)(e, t, n), i = null, n
                    }]; s < o; s++) if (n = w.relative[t[s].type]) d = [f(p(d), n)]; else {
                        if ((n = w.filter[t[s].type].apply(null, t[s].matches))[q]) {
                            for (a = ++s; a < o && !w.relative[t[a].type]; a++) ;
                            return v(1 < s && p(d), 1 < s && y(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(ae, "$1"), n, s < a && e(t.slice(s, a)), a < o && e(t = t.slice(a)), a < o && y(t))
                        }
                        d.push(n)
                    }
                    return p(d)
                }(t[n]))[q] ? i : a).push(o);
                (o = W(e, r(a, i))).selector = e
            }
            return o
        }, E = b.select = function (e, t, n, i) {
            var a, o, r, l, s, c = "function" == typeof e && e, u = !i && C(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (r = o[0]).type && m.getById && 9 === t.nodeType && _ && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(r.matches[0].replace(ge, d), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (a = ue.needsContext.test(e) ? 0 : o.length; a-- && (r = o[a], !w.relative[l = r.type]);) if ((s = w.find[l]) && (i = s(r.matches[0].replace(ge, d), ye.test(o[0].type) && h(t.parentNode) || t))) {
                    if (o.splice(a, 1), !(e = i.length && y(o))) return K.apply(n, i), n;
                    break
                }
            }
            return (c || T(e, u))(i, t, !_, n, !t || ye.test(e) && h(t.parentNode) || t), n
        }, m.sortStable = q.split("").sort($).join("") === q, m.detectDuplicates = !!L, D(), m.sortDetached = t(function (e) {
            return 1 & e.compareDocumentPosition(N.createElement("div"))
        }), t(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), m.attributes && t(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), t(function (e) {
            return null == e.getAttribute("disabled")
        }) || i(Q, function (e, t, n) {
            if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }), b
    }(k);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;

    function ue(e, t, n) {
        for (var i = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (a && oe(e).is(n)) break;
            i.push(e)
        }
        return i
    }

    function de(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }

    var fe = oe.expr.match.needsContext, pe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, he = /^.[^:#\[\.,]*$/;
    oe.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function (e) {
            var t, n = [], i = this, a = i.length;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
                for (t = 0; t < a; t++) if (oe.contains(i[t], this)) return !0
            }));
            for (t = 0; t < a; t++) oe.find(e, i[t], n);
            return (n = this.pushStack(1 < a ? oe.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(t(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(t(this, e || [], !0))
        }, is: function (e) {
            return !!t(this, "string" == typeof e && fe.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var ye = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (oe.fn.init = function (e, t, n) {
        if (!e) return this;
        if (n = n || me, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this));
        if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : ye.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
            if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), pe.test(i[1]) && oe.isPlainObject(t)) for (var i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        if ((n = G.getElementById(i[2])) && n.parentNode) {
            if (n.id !== i[2]) return me.find(e);
            this.length = 1, this[0] = n
        }
        return this.context = G, this.selector = e, this
    }).prototype = oe.fn;
    var me = oe(G), ge = /^(?:parents|prev(?:Until|All))/, ve = {children: !0, contents: !0, next: !0, prev: !0};
    oe.fn.extend({
        has: function (e) {
            var t, n = oe(e, this), i = n.length;
            return this.filter(function () {
                for (t = 0; t < i; t++) if (oe.contains(this, n[t])) return !0
            })
        }, closest: function (e, t) {
            for (var n, i = 0, a = this.length, o = [], r = fe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i < a; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? oe.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function (e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (e) {
            return ue(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return ue(e, "parentNode", n)
        }, next: function (e) {
            return n(e, "nextSibling")
        }, prev: function (e) {
            return n(e, "previousSibling")
        }, nextAll: function (e) {
            return ue(e, "nextSibling")
        }, prevAll: function (e) {
            return ue(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return ue(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return ue(e, "previousSibling", n)
        }, siblings: function (e) {
            return de((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return de(e.firstChild)
        }, contents: function (e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function (i, a) {
        oe.fn[i] = function (e, t) {
            var n = oe.map(this, a, e);
            return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = oe.filter(t, n)), 1 < this.length && (ve[i] || (n = oe.uniqueSort(n)), ge.test(i) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var xe, be, ke = /\S+/g;
    for (be in oe.Callbacks = function (i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, oe.each(e.match(ke) || [], function (e, t) {
            n[t] = !0
        }), n) : oe.extend({}, i);

        function a() {
            for (l = i.once, r = o = !0; c.length; u = -1) for (t = c.shift(); ++u < s.length;) !1 === s[u].apply(t[0], t[1]) && i.stopOnFalse && (u = s.length, t = !1);
            i.memory || (t = !1), o = !1, l && (s = t ? [] : "")
        }

        var o, t, r, l, s = [], c = [], u = -1, d = {
            add: function () {
                return s && (t && !o && (u = s.length - 1, c.push(t)), function n(e) {
                    oe.each(e, function (e, t) {
                        oe.isFunction(t) ? i.unique && d.has(t) || s.push(t) : t && t.length && "string" !== oe.type(t) && n(t)
                    })
                }(arguments), t && !o && a()), this
            }, remove: function () {
                return oe.each(arguments, function (e, t) {
                    for (var n; -1 < (n = oe.inArray(t, s, n));) s.splice(n, 1), n <= u && u--
                }), this
            }, has: function (e) {
                return e ? -1 < oe.inArray(e, s) : 0 < s.length
            }, empty: function () {
                return s = s && [], this
            }, disable: function () {
                return l = c = [], s = t = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return l = !0, t || d.disable(), this
            }, locked: function () {
                return !!l
            }, fireWith: function (e, t) {
                return l || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), o || a()), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return d
    }, oe.extend({
        Deferred: function (e) {
            var o = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]],
                a = "pending", r = {
                    state: function () {
                        return a
                    }, always: function () {
                        return l.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return oe.Deferred(function (i) {
                            oe.each(o, function (e, t) {
                                var n = oe.isFunction(a[e]) && a[e];
                                l[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === r ? i.promise() : this, n ? [e] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? oe.extend(e, r) : r
                    }
                }, l = {};
            return r.pipe = r.then, oe.each(o, function (e, t) {
                var n = t[2], i = t[3];
                r[t[1]] = n.add, i && n.add(function () {
                    a = i
                }, o[1 ^ e][2].disable, o[2][2].lock), l[t[0]] = function () {
                    return l[t[0] + "With"](this === l ? r : this, arguments), this
                }, l[t[0] + "With"] = n.fireWith
            }), r.promise(l), e && e.call(l, l), l
        }, when: function (e) {
            function t(t, n, i) {
                return function (e) {
                    n[t] = this, i[t] = 1 < arguments.length ? J.call(arguments) : e, i === a ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                }
            }

            var a, n, i, o = 0, r = J.call(arguments), l = r.length,
                s = 1 !== l || e && oe.isFunction(e.promise) ? l : 0, c = 1 === s ? e : oe.Deferred();
            if (1 < l) for (a = new Array(l), n = new Array(l), i = new Array(l); o < l; o++) r[o] && oe.isFunction(r[o].promise) ? r[o].promise().progress(t(o, n, a)).done(t(o, i, r)).fail(c.reject) : --s;
            return s || c.resolveWith(i, r), c.promise()
        }
    }), oe.fn.ready = function (e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? oe.readyWait++ : oe.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --oe.readyWait : oe.isReady) || ((oe.isReady = !0) !== e && 0 < --oe.readyWait || (xe.resolveWith(G, [oe]), oe.fn.triggerHandler && (oe(G).triggerHandler("ready"), oe(G).off("ready"))))
        }
    }), oe.ready.promise = function (e) {
        if (!xe) if (xe = oe.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll) k.setTimeout(oe.ready); else if (G.addEventListener) G.addEventListener("DOMContentLoaded", a), k.addEventListener("load", a); else {
            G.attachEvent("onreadystatechange", a), k.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == k.frameElement && G.documentElement
            } catch (e) {
            }
            n && n.doScroll && !function t() {
                if (!oe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return k.setTimeout(t, 50)
                    }
                    i(), oe.ready()
                }
            }()
        }
        return xe.promise(e)
    }, oe.ready.promise(), oe(ae)) break;
    ae.ownFirst = "0" === be, ae.inlineBlockNeedsLayout = !1, oe(function () {
        var e, t, n = G.getElementsByTagName("body")[0];
        n && n.style && (e = G.createElement("div"), (t = G.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(t).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ae.inlineBlockNeedsLayout = e = 3 === e.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(t))
    }), function () {
        var e = G.createElement("div");
        ae.deleteExpando = !0;
        try {
            delete e.test
        } catch (e) {
            ae.deleteExpando = !1
        }
    }();

    function we(e) {
        var t = oe.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }

    var Ce, Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ee = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return !!(e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando]) && !c(e)
        },
        data: function (e, t, n) {
            return o(e, t, n)
        },
        removeData: function (e, t) {
            return r(e, t)
        },
        _data: function (e, t, n) {
            return o(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return r(e, t, !0)
        }
    }), oe.fn.extend({
        data: function (e, t) {
            var n, i, a, o = this[0], r = o && o.attributes;
            if (void 0 !== e) return "object" == typeof e ? this.each(function () {
                oe.data(this, e)
            }) : 1 < arguments.length ? this.each(function () {
                oe.data(this, e, t)
            }) : o ? s(o, e, oe.data(o, e)) : void 0;
            if (this.length && (a = oe.data(o), 1 === o.nodeType && !oe._data(o, "parsedAttrs"))) {
                for (n = r.length; n--;) r[n] && (0 === (i = r[n].name).indexOf("data-") && s(o, i = oe.camelCase(i.slice(5)), a[i]));
                oe._data(o, "parsedAttrs", !0)
            }
            return a
        }, removeData: function (e) {
            return this.each(function () {
                oe.removeData(this, e)
            })
        }
    }), oe.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return i = oe._data(e, t = (t || "fx") + "queue"), n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = oe.queue(e, t), i = n.length, a = n.shift(), o = oe._queueHooks(e, t);
            "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete o.stop, a.call(e, function () {
                oe.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return oe._data(e, n) || oe._data(e, n, {
                empty: oe.Callbacks("once memory").add(function () {
                    oe._removeData(e, t + "queue"), oe._removeData(e, n)
                })
            })
        }
    }), oe.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? oe.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = oe.queue(this, t, n);
                oe._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && oe.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                oe.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            function n() {
                --a || o.resolveWith(r, [r])
            }

            var i, a = 1, o = oe.Deferred(), r = this, l = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; l--;) (i = oe._data(r[l], e + "queueHooks")) && i.empty && (a++, i.empty.add(n));
            return n(), o.promise(t)
        }
    }), ae.shrinkWrapBlocks = function () {
        return null != Ce ? Ce : (Ce = !1, (t = G.getElementsByTagName("body")[0]) && t.style ? (e = G.createElement("div"), (n = G.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(G.createElement("div")).style.width = "5px", Ce = 3 !== e.offsetWidth), t.removeChild(n), Ce) : void 0);
        var e, t, n
    };

    function Se(e, t) {
        return "none" === oe.css(e = t || e, "display") || !oe.contains(e.ownerDocument, e)
    }

    function Ae(e, t, n, i, a, o, r) {
        var l = 0, s = e.length, c = null == n;
        if ("object" === oe.type(n)) for (l in a = !0, n) Ae(e, t, l, n[l], !0, o, r); else if (void 0 !== i && (a = !0, oe.isFunction(i) || (r = !0), t = c ? r ? (t.call(e, i), null) : (c = t, function (e, t, n) {
            return c.call(oe(e), n)
        }) : t)) for (; l < s; l++) t(e[l], n, r ? i : i.call(e[l], l, t(e[l], n)));
        return a ? e : c ? t.call(e) : s ? t(e[0], n) : o
    }

    var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, De = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
        Ne = ["Top", "Right", "Bottom", "Left"], je = /^(?:checkbox|radio)$/i, _e = /<([\w:-]+)/,
        He = /^$|\/(?:java|ecma)script/i, Me = /^\s+/,
        Ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    Lt = G.createElement("div"), St = G.createDocumentFragment(), At = G.createElement("input"), Lt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ae.leadingWhitespace = 3 === Lt.firstChild.nodeType, ae.tbody = !Lt.getElementsByTagName("tbody").length, ae.htmlSerialize = !!Lt.getElementsByTagName("link").length, ae.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, At.type = "checkbox", At.checked = !0, St.appendChild(At), ae.appendChecked = At.checked, Lt.innerHTML = "<textarea>x</textarea>", ae.noCloneChecked = !!Lt.cloneNode(!0).lastChild.defaultValue, St.appendChild(Lt), (At = G.createElement("input")).setAttribute("type", "radio"), At.setAttribute("checked", "checked"), At.setAttribute("name", "t"), Lt.appendChild(At), ae.checkClone = Lt.cloneNode(!0).cloneNode(!0).lastChild.checked, ae.noCloneEvent = !!Lt.addEventListener, Lt[oe.expando] = 1, ae.attributes = !Lt.getAttribute(oe.expando);
    var Fe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ae.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td;
    var qe = /<|&#?\w+;/, Pe = /<tbody/i;
    !function () {
        var e, t, n = G.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) t = "on" + e, (ae[e] = t in k) || (n.setAttribute(t, "t"), ae[e] = !1 === n.attributes[t].expando)
    }();
    var Be = /^(?:input|select|textarea)$/i, Oe = /^key/, Re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ze = /^(?:focusinfocus|focusoutblur)$/, We = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function (e, t, n, i, a) {
            var o, r, l, s, c, u, d, f, p, h = oe._data(e);
            if (h) for (n.handler && (n = (l = n).handler, a = l.selector), n.guid || (n.guid = oe.guid++), (o = h.events) || (o = h.events = {}), (c = h.handle) || ((c = h.handle = function (e) {
                return void 0 === oe || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
            }).elem = e), r = (t = (t || "").match(ke) || [""]).length; r--;) d = p = (u = We.exec(t[r]) || [])[1], f = (u[2] || "").split(".").sort(), d && (s = oe.event.special[d] || {}, d = (a ? s.delegateType : s.bindType) || d, s = oe.event.special[d] || {}, u = oe.extend({
                type: d,
                origType: p,
                data: i,
                handler: n,
                guid: n.guid,
                selector: a,
                needsContext: a && oe.expr.match.needsContext.test(a),
                namespace: f.join(".")
            }, l), (p = o[d]) || ((p = o[d] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(e, i, f, c) || (e.addEventListener ? e.addEventListener(d, c, !1) : e.attachEvent && e.attachEvent("on" + d, c))), s.add && (s.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), a ? p.splice(p.delegateCount++, 0, u) : p.push(u), oe.event.global[d] = !0)
        },
        remove: function (e, t, n, i, a) {
            var o, r, l, s, c, u, d, f, p, h, y, m = oe.hasData(e) && oe._data(e);
            if (m && (u = m.events)) {
                for (c = (t = (t || "").match(ke) || [""]).length; c--;) if (p = y = (l = We.exec(t[c]) || [])[1], h = (l[2] || "").split(".").sort(), p) {
                    for (d = oe.event.special[p] || {}, f = u[p = (i ? d.delegateType : d.bindType) || p] || [], l = l[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) r = f[o], !a && y !== r.origType || n && n.guid !== r.guid || l && !l.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (f.splice(o, 1), r.selector && f.delegateCount--, d.remove && d.remove.call(e, r));
                    s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || oe.removeEvent(e, p, m.handle), delete u[p])
                } else for (p in u) oe.event.remove(e, p + t[c], n, i, !0);
                oe.isEmptyObject(u) && (delete m.handle, oe._removeData(e, "events"))
            }
        },
        trigger: function (e, t, n, i) {
            var a, o, r, l, s, c, u = [n || G], d = ie.call(e, "type") ? e.type : e,
                f = ie.call(e, "namespace") ? e.namespace.split(".") : [], p = s = n = n || G;
            if (3 !== n.nodeType && 8 !== n.nodeType && !ze.test(d + oe.event.triggered) && (-1 < d.indexOf(".") && (d = (f = d.split(".")).shift(), f.sort()), o = d.indexOf(":") < 0 && "on" + d, (e = e[oe.expando] ? e : new oe.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : oe.makeArray(t, [e]), l = oe.event.special[d] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !oe.isWindow(n)) {
                    for (r = l.delegateType || d, ze.test(r + d) || (p = p.parentNode); p; p = p.parentNode) u.push(p), s = p;
                    s === (n.ownerDocument || G) && u.push(s.defaultView || s.parentWindow || k)
                }
                for (c = 0; (p = u[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? r : l.bindType || d, (a = (oe._data(p, "events") || {})[e.type] && oe._data(p, "handle")) && a.apply(p, t), (a = o && p[o]) && a.apply && we(p) && (e.result = a.apply(p, t), !1 === e.result && e.preventDefault());
                if (e.type = d, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(u.pop(), t)) && we(n) && o && n[d] && !oe.isWindow(n)) {
                    (s = n[o]) && (n[o] = null), oe.event.triggered = d;
                    try {
                        n[d]()
                    } catch (e) {
                    }
                    oe.event.triggered = void 0, s && (n[o] = s)
                }
                return e.result
            }
        },
        dispatch: function (e) {
            e = oe.event.fix(e);
            var t, n, i, a, o, r = J.call(arguments), l = (oe._data(this, "events") || {})[e.type] || [],
                s = oe.event.special[e.type] || {};
            if ((r[0] = e).delegateTarget = this, !s.preDispatch || !1 !== s.preDispatch.call(this, e)) {
                for (o = oe.event.handlers.call(this, e, l), t = 0; (i = o[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, void 0 !== (a = ((oe.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, r)) && !1 === (e.result = a) && (e.preventDefault(), e.stopPropagation()));
                return s.postDispatch && s.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, a, o, r = [], l = t.delegateCount, s = e.target;
            if (l && s.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; s != this; s = s.parentNode || this) if (1 === s.nodeType && (!0 !== s.disabled || "click" !== e.type)) {
                for (i = [], n = 0; n < l; n++) void 0 === i[a = (o = t[n]).selector + " "] && (i[a] = o.needsContext ? -1 < oe(a, this).index(s) : oe.find(a, this, null, [s]).length), i[a] && i.push(o);
                i.length && r.push({elem: s, handlers: i})
            }
            return l < t.length && r.push({elem: this, handlers: t.slice(l)}), r
        },
        fix: function (e) {
            if (e[oe.expando]) return e;
            var t, n, i, a = e.type, o = e, r = this.fixHooks[a];
            for (r || (this.fixHooks[a] = r = Re.test(a) ? this.mouseHooks : Oe.test(a) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new oe.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
            return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, a = t.button, o = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || G).documentElement, n = n.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === p() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (oe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                }, _default: function (e) {
                    return oe.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            e = oe.extend(new oe.Event, n, {type: e, isSimulated: !0});
            oe.event.trigger(e, null, t), e.isDefaultPrevented() && n.preventDefault()
        }
    }, oe.removeEvent = G.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        t = "on" + t;
        e.detachEvent && (void 0 === e[t] && (e[t] = null), e.detachEvent(t, n))
    }, oe.Event = function (e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? d : f) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void (this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = d, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = d, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, a) {
        oe.event.special[e] = {
            delegateType: a, bindType: a, handle: function (e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || oe.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = a), t
            }
        }
    }), ae.submit || (oe.event.special.submit = {
        setup: function () {
            return !oe.nodeName(this, "form") && void oe.event.add(this, "click._submit keypress._submit", function (e) {
                e = e.target, e = oe.nodeName(e, "input") || oe.nodeName(e, "button") ? oe.prop(e, "form") : void 0;
                e && !oe._data(e, "submit") && (oe.event.add(e, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), oe._data(e, "submit", !0))
            })
        }, postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e))
        }, teardown: function () {
            return !oe.nodeName(this, "form") && void oe.event.remove(this, "._submit")
        }
    }), ae.change || (oe.event.special.change = {
        setup: function () {
            return Be.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (oe.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), oe.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), oe.event.simulate("change", this, e)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function (e) {
                e = e.target;
                Be.test(e.nodeName) && !oe._data(e, "change") && (oe.event.add(e, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e)
                }), oe._data(e, "change", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return oe.event.remove(this, "._change"), !Be.test(this.nodeName)
        }
    }), ae.focusin || oe.each({focus: "focusin", blur: "focusout"}, function (n, i) {
        function a(e) {
            oe.event.simulate(i, e.target, oe.event.fix(e))
        }

        oe.event.special[i] = {
            setup: function () {
                var e = this.ownerDocument || this, t = oe._data(e, i);
                t || e.addEventListener(n, a, !0), oe._data(e, i, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, t = oe._data(e, i) - 1;
                t ? oe._data(e, i, t) : (e.removeEventListener(n, a, !0), oe._removeData(e, i))
            }
        }
    }), oe.fn.extend({
        on: function (e, t, n, i) {
            return h(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return h(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, a;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = f), this.each(function () {
                oe.event.remove(this, e, n, t)
            });
            for (a in e) this.off(a, t, e[a]);
            return this
        }, trigger: function (e, t) {
            return this.each(function () {
                oe.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return oe.event.trigger(e, t, n, !0)
        }
    });
    var $e = / jQuery\d+="(?:null|\d+)"/g, Ye = new RegExp("<(?:" + Ie + ")[\\s/>]", "i"),
        Xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ve = /<script|<style|<link/i,
        Ue = /checked\s*(?:[^=]|=\s*.checked.)/i, Ke = /^true\/(.*)/, Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Je = m(G).appendChild(G.createElement("div"));
    oe.extend({
        htmlPrefilter: function (e) {
            return e.replace(Xe, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, a, o, r, l, s = oe.contains(e.ownerDocument, e);
            if (ae.html5Clone || oe.isXMLDoc(e) || !Ye.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML, Je.removeChild(o = Je.firstChild)), !(ae.noCloneEvent && ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e))) for (i = g(o), l = g(e), r = 0; null != (a = l[r]); ++r) i[r] && function (e, t) {
                var n, i, a;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !ae.noCloneEvent && t[oe.expando]) {
                        for (i in (a = oe._data(t)).events) oe.removeEvent(t, i, a.handle);
                        t.removeAttribute(oe.expando)
                    }
                    "script" === n && t.text !== e.text ? (w(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ae.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
            }(a, i[r]);
            if (t) if (n) for (l = l || g(e), i = i || g(o), r = 0; null != (a = l[r]); r++) T(a, i[r]); else T(e, o);
            return 0 < (i = g(o, "script")).length && v(i, !s && g(e, "script")), i = l = a = null, o
        }, cleanData: function (e, t) {
            for (var n, i, a, o, r = 0, l = oe.expando, s = oe.cache, c = ae.attributes, u = oe.event.special; null != (n = e[r]); r++) if ((t || we(n)) && (o = (a = n[l]) && s[a])) {
                if (o.events) for (i in o.events) u[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, o.handle);
                s[a] && (delete s[a], c || void 0 === n.removeAttribute ? n[l] = void 0 : n.removeAttribute(l), K.push(a))
            }
        }
    }), oe.fn.extend({
        domManip: E, detach: function (e) {
            return S(this, e, !0)
        }, remove: function (e) {
            return S(this, e)
        }, text: function (e) {
            return Ae(this, function (e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return E(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || b(this, e).appendChild(e)
            })
        }, prepend: function () {
            return E(this, arguments, function (e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = b(this, e)).insertBefore(e, t.firstChild)
            })
        }, before: function () {
            return E(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return E(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return oe.clone(this, e, t)
            })
        }, html: function (e) {
            return Ae(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace($e, "") : void 0;
                if ("string" == typeof e && !Ve.test(e) && (ae.htmlSerialize || !Ye.test(e)) && (ae.leadingWhitespace || !Me.test(e)) && !Fe[(_e.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (oe.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return E(this, arguments, function (e) {
                var t = this.parentNode;
                oe.inArray(this, n) < 0 && (oe.cleanData(g(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, r) {
        oe.fn[e] = function (e) {
            for (var t, n = 0, i = [], a = oe(e), o = a.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), oe(a[n])[r](t), Z.apply(i, t.get());
            return this.pushStack(i)
        }
    });

    function Qe(e, t, n, i) {
        var a, o = {};
        for (a in t) o[a] = e.style[a], e.style[a] = t[a];
        for (a in i = n.apply(e, i || []), t) e.style[a] = o[a];
        return i
    }

    var Ze, et, tt, nt, it, at, ot, rt, lt, st = {HTML: "block", BODY: "block"}, ct = /^margin/,
        ut = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"), dt = G.documentElement;

    function ft() {
        var e, t = G.documentElement;
        t.appendChild(rt), lt.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", et = nt = ot = !1, tt = at = !0, k.getComputedStyle && (e = k.getComputedStyle(lt), et = "1%" !== (e || {}).top, ot = "2px" === (e || {}).marginLeft, nt = "4px" === (e || {width: "4px"}).width, lt.style.marginRight = "50%", tt = "4px" === (e || {marginRight: "4px"}).marginRight, (e = lt.appendChild(G.createElement("div"))).style.cssText = lt.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", lt.style.width = "1px", at = !parseFloat((k.getComputedStyle(e) || {}).marginRight), lt.removeChild(e)), lt.style.display = "none", (it = 0 === lt.getClientRects().length) && (lt.style.display = "", lt.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", lt.childNodes[0].style.borderCollapse = "separate", (e = lt.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (it = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", it = 0 === e[0].offsetHeight)), t.removeChild(rt)
    }

    rt = G.createElement("div"), (lt = G.createElement("div")).style && (lt.style.cssText = "float:left;opacity:.5", ae.opacity = "0.5" === lt.style.opacity, ae.cssFloat = !!lt.style.cssFloat, lt.style.backgroundClip = "content-box", lt.cloneNode(!0).style.backgroundClip = "", ae.clearCloneStyle = "content-box" === lt.style.backgroundClip, (rt = G.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", lt.innerHTML = "", rt.appendChild(lt), ae.boxSizing = "" === lt.style.boxSizing || "" === lt.style.MozBoxSizing || "" === lt.style.WebkitBoxSizing, oe.extend(ae, {
        reliableHiddenOffsets: function () {
            return null == et && ft(), it
        }, boxSizingReliable: function () {
            return null == et && ft(), nt
        }, pixelMarginRight: function () {
            return null == et && ft(), tt
        }, pixelPosition: function () {
            return null == et && ft(), et
        }, reliableMarginRight: function () {
            return null == et && ft(), at
        }, reliableMarginLeft: function () {
            return null == et && ft(), ot
        }
    }));
    var pt, ht, yt = /^(top|right|bottom|left)$/;
    k.getComputedStyle ? (pt = function (e) {
        var t = e.ownerDocument.defaultView;
        return (t = !t || !t.opener ? k : t).getComputedStyle(e)
    }, ht = function (e, t, n) {
        var i, a, o = e.style;
        return "" !== (a = (n = n || pt(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), n && !ae.pixelMarginRight() && ut.test(a) && ct.test(t) && (i = o.width, e = o.minWidth, t = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = n.width, o.width = i, o.minWidth = e, o.maxWidth = t), void 0 === a ? a : a + ""
    }) : dt.currentStyle && (pt = function (e) {
        return e.currentStyle
    }, ht = function (e, t, n) {
        var i, a, o, r = e.style;
        return null == (o = (n = n || pt(e)) ? n[t] : void 0) && r && r[t] && (o = r[t]), ut.test(o) && !yt.test(t) && (i = r.left, (n = (a = e.runtimeStyle) && a.left) && (a.left = e.currentStyle.left), r.left = "fontSize" === t ? "1em" : o, o = r.pixelLeft + "px", r.left = i, n && (a.left = n)), void 0 === o ? o : o + "" || "auto"
    });
    var mt = /alpha\([^)]*\)/i, gt = /opacity\s*=\s*([^)]*)/i, vt = /^(none|table(?!-c[ea]).+)/,
        xt = new RegExp("^(" + Le + ")(.*)$", "i"), bt = {position: "absolute", visibility: "hidden", display: "block"},
        kt = {letterSpacing: "0", fontWeight: "400"}, wt = ["Webkit", "O", "Moz", "ms"],
        Ct = G.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        e = ht(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: ae.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, o, r, l = oe.camelCase(t), s = e.style;
                if (t = oe.cssProps[l] || (oe.cssProps[l] = N(l) || l), r = oe.cssHooks[t] || oe.cssHooks[l], void 0 === n) return r && "get" in r && void 0 !== (a = r.get(e, !1, i)) ? a : s[t];
                if ("string" === (o = typeof n) && (a = De.exec(n)) && a[1] && (n = u(e, t, a), o = "number"), null != n && n == n && ("number" === o && (n += a && a[3] || (oe.cssNumber[l] ? "" : "px")), ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (s[t] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(e, n, i))))) try {
                    s[t] = n
                } catch (e) {
                }
            }
        },
        css: function (e, t, n, i) {
            var a, o = oe.camelCase(t);
            return t = oe.cssProps[o] || (oe.cssProps[o] = N(o) || o), "normal" === (a = void 0 === (a = (o = oe.cssHooks[t] || oe.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : a) ? ht(e, t, i) : a) && t in kt && (a = kt[t]), "" === n || n ? (t = parseFloat(a), !0 === n || isFinite(t) ? t || 0 : a) : a
        }
    }), oe.each(["height", "width"], function (e, a) {
        oe.cssHooks[a] = {
            get: function (e, t, n) {
                if (t) return vt.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Qe(e, bt, function () {
                    return M(e, a, n)
                }) : M(e, a, n)
            }, set: function (e, t, n) {
                var i = n && pt(e);
                return _(0, t, n ? H(e, a, n, ae.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ae.opacity || (oe.cssHooks.opacity = {
        get: function (e, t) {
            return gt.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, i = e.currentStyle, a = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                e = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === oe.trim(e.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = mt.test(e) ? e.replace(mt, a) : e + " " + a)
        }
    }), oe.cssHooks.marginRight = D(ae.reliableMarginRight, function (e, t) {
        if (t) return Qe(e, {display: "inline-block"}, ht, [e, "marginRight"])
    }), oe.cssHooks.marginLeft = D(ae.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(ht(e, "marginLeft")) || (oe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Qe(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), oe.each({margin: "", padding: "", border: "Width"}, function (a, o) {
        oe.cssHooks[a + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[a + Ne[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, ct.test(a) || (oe.cssHooks[a + o].set = _)
    }), oe.fn.extend({
        css: function (e, t) {
            return Ae(this, function (e, t, n) {
                var i, a, o = {}, r = 0;
                if (oe.isArray(t)) {
                    for (i = pt(e), a = t.length; r < a; r++) o[t[r]] = oe.css(e, t[r], !1, i);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, 1 < arguments.length)
        }, show: function () {
            return j(this, !0)
        }, hide: function () {
            return j(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Se(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), ((oe.Tween = I).prototype = {
        constructor: I, init: function (e, t, n, i, a, o) {
            this.elem = e, this.prop = n, this.easing = a || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = I.propHooks[this.prop];
            return (e && e.get ? e : I.propHooks._default).get(this)
        }, run: function (e) {
            var t, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : I.propHooks._default).set(this), this
        }
    }).init.prototype = I.prototype, (I.propHooks = {
        _default: {
            get: function (e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = oe.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            }, set: function (e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = I.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, oe.fx = I.prototype.init, oe.fx.step = {};
    var Tt, Et, St, At, Lt, Dt = /^(?:toggle|show|hide)$/, Nt = /queueHooks$/;
    oe.Animation = oe.extend(B, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return u(n.elem, e, De.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            for (var n, i = 0, a = (e = oe.isFunction(e) ? (t = e, ["*"]) : e.match(ke)).length; i < a; i++) n = e[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
        }, prefilters: [function (t, e, n) {
            var i, a, o, r, l, s, c, u = this, d = {}, f = t.style, p = t.nodeType && Se(t), h = oe._data(t, "fxshow");
            for (i in n.queue || (null == (l = oe._queueHooks(t, "fx")).unqueued && (l.unqueued = 0, s = l.empty.fire, l.empty.fire = function () {
                l.unqueued || s()
            }), l.unqueued++, u.always(function () {
                u.always(function () {
                    l.unqueued--, oe.queue(t, "fx").length || l.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (c = oe.css(t, "display")) ? oe._data(t, "olddisplay") || L(t.nodeName) : c) && "none" === oe.css(t, "float") && (ae.inlineBlockNeedsLayout && "inline" !== L(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ae.shrinkWrapBlocks() || u.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            })), e) if (a = e[i], Dt.exec(a)) {
                if (delete e[i], o = o || "toggle" === a, a === (p ? "hide" : "show")) {
                    if ("show" !== a || !h || void 0 === h[i]) continue;
                    p = !0
                }
                d[i] = h && h[i] || oe.style(t, i)
            } else c = void 0;
            if (oe.isEmptyObject(d)) "inline" === ("none" === c ? L(t.nodeName) : c) && (f.display = c); else for (i in h ? "hidden" in h && (p = h.hidden) : h = oe._data(t, "fxshow", {}), o && (h.hidden = !p), p ? oe(t).show() : u.done(function () {
                oe(t).hide()
            }), u.done(function () {
                for (var e in oe._removeData(t, "fxshow"), d) oe.style(t, e, d[e])
            }), d) r = P(p ? h[i] : 0, i, u), i in h || (h[i] = r.start, p && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
        }], prefilter: function (e, t) {
            t ? B.prefilters.unshift(e) : B.prefilters.push(e)
        }
    }), oe.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
        }, i
    }, oe.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Se).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (t, e, n, i) {
            var a = oe.isEmptyObject(t), o = oe.speed(e, n, i), i = function () {
                var e = B(this, oe.extend({}, t), o);
                (a || oe._data(this, "finish")) && e.stop(!0)
            };
            return i.finish = i, a || !1 === o.queue ? this.each(i) : this.queue(o.queue, i)
        }, stop: function (a, e, o) {
            function r(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }

            return "string" != typeof a && (o = e, e = a, a = void 0), e && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                var e = !0, t = null != a && a + "queueHooks", n = oe.timers, i = oe._data(this);
                if (t) i[t] && i[t].stop && r(i[t]); else for (t in i) i[t] && i[t].stop && Nt.test(t) && r(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != a && n[t].queue !== a || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || oe.dequeue(this, a)
            })
        }, finish: function (r) {
            return !1 !== r && (r = r || "fx"), this.each(function () {
                var e, t = oe._data(this), n = t[r + "queue"], i = t[r + "queueHooks"], a = oe.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, oe.queue(this, r, []), i && i.stop && i.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === r && (a[e].anim.stop(!0), a.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), oe.each(["toggle", "show", "hide"], function (e, i) {
        var a = oe.fn[i];
        oe.fn[i] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(q(i, !0), e, t, n)
        }
    }), oe.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, i) {
        oe.fn[e] = function (e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), oe.timers = [], oe.fx.tick = function () {
        var e, t = oe.timers, n = 0;
        for (Tt = oe.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || oe.fx.stop(), Tt = void 0
    }, oe.fx.timer = function (e) {
        oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function () {
        Et = Et || k.setInterval(oe.fx.tick, oe.fx.interval)
    }, oe.fx.stop = function () {
        k.clearInterval(Et), Et = null
    }, oe.fx.speeds = {slow: 600, fast: 200, _default: 400}, oe.fn.delay = function (i, e) {
        return i = oe.fx && oe.fx.speeds[i] || i, this.queue(e = e || "fx", function (e, t) {
            var n = k.setTimeout(e, i);
            t.stop = function () {
                k.clearTimeout(n)
            }
        })
    }, ce = G.createElement("input"), St = G.createElement("div"), At = G.createElement("select"), Lt = At.appendChild(G.createElement("option")), (St = G.createElement("div")).setAttribute("className", "t"), St.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Le = St.getElementsByTagName("a")[0], ce.setAttribute("type", "checkbox"), St.appendChild(ce), (Le = St.getElementsByTagName("a")[0]).style.cssText = "top:1px", ae.getSetAttribute = "t" !== St.className, ae.style = /top/.test(Le.getAttribute("style")), ae.hrefNormalized = "/a" === Le.getAttribute("href"), ae.checkOn = !!ce.value, ae.optSelected = Lt.selected, ae.enctype = !!G.createElement("form").enctype, At.disabled = !0, ae.optDisabled = !Lt.disabled, (ce = G.createElement("input")).setAttribute("value", ""), ae.input = "" === ce.getAttribute("value"), ce.value = "t", ce.setAttribute("type", "radio"), ae.radioValue = "t" === ce.value;
    var jt = /\r/g, _t = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function (t) {
            var n, e, i, a = this[0];
            return arguments.length ? (i = oe.isFunction(t), this.each(function (e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, oe(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : oe.isArray(e) && (e = oe.map(e, function (e) {
                    return null == e ? "" : e + ""
                })), (n = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : a ? (n = oe.valHooks[a.type] || oe.valHooks[a.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(a, "value")) ? e : "string" == typeof (e = a.value) ? e.replace(jt, "") : null == e ? "" : e : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e)).replace(_t, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n = e.options, i = e.selectedIndex, a = "select-one" === e.type || i < 0, o = a ? null : [], r = a ? i + 1 : n.length, l = i < 0 ? r : a ? i : 0; l < r; l++) if (((t = n[l]).selected || l === i) && (ae.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !oe.nodeName(t.parentNode, "optgroup"))) {
                        if (t = oe(t).val(), a) return t;
                        o.push(t)
                    }
                    return o
                }, set: function (e, t) {
                    for (var n, i, a = e.options, o = oe.makeArray(t), r = a.length; r--;) if (i = a[r], -1 < oe.inArray(oe.valHooks.option.get(i), o)) try {
                        i.selected = n = !0
                    } catch (e) {
                        i.scrollHeight
                    } else i.selected = !1;
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (e, t) {
                if (oe.isArray(t)) return e.checked = -1 < oe.inArray(oe(e).val(), t)
            }
        }, ae.checkOn || (oe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ht, Mt, It = oe.expr.attrHandle, Ft = /^(?:checked|selected)$/i, qt = ae.getSetAttribute, Pt = ae.input;
    oe.fn.extend({
        attr: function (e, t) {
            return Ae(this, oe.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function (e, t, n) {
            var i, a, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), a = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? Mt : Ht)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (i = a.get(e, t)) ? i : null == (i = oe.find.attr(e, t)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ae.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i, a = 0, o = t && t.match(ke);
            if (o && 1 === e.nodeType) for (; n = o[a++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? Pt && qt || !Ft.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""), e.removeAttribute(qt ? n : i)
        }
    }), Mt = {
        set: function (e, t, n) {
            return !1 === t ? oe.removeAttr(e, n) : Pt && qt || !Ft.test(n) ? e.setAttribute(!qt && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var o = It[t] || oe.find.attr;
        Pt && qt || !Ft.test(t) ? It[t] = function (e, t, n) {
            var i, a;
            return n || (a = It[t], It[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, It[t] = a), i
        } : It[t] = function (e, t, n) {
            if (!n) return e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Pt && qt || (oe.attrHooks.value = {
        set: function (e, t, n) {
            return oe.nodeName(e, "input") ? void (e.defaultValue = t) : Ht && Ht.set(e, t, n)
        }
    }), qt || (Ht = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, It.id = It.name = It.coords = function (e, t, n) {
        if (!n) return (t = e.getAttributeNode(t)) && "" !== t.value ? t.value : null
    }, oe.valHooks.button = {
        get: function (e, t) {
            t = e.getAttributeNode(t);
            if (t && t.specified) return t.value
        }, set: Ht.set
    }, oe.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Ht.set(e, "" !== t && t, n)
        }
    }, oe.each(["width", "height"], function (e, n) {
        oe.attrHooks[n] = {
            set: function (e, t) {
                if ("" === t) return e.setAttribute(n, "auto"), t
            }
        }
    })), ae.style || (oe.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Bt = /^(?:input|select|textarea|button|object)$/i, Ot = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (e, t) {
            return Ae(this, oe.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return e = oe.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {
                }
            })
        }
    }), oe.extend({
        prop: function (e, t, n) {
            var i, a, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, a = oe.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Bt.test(e.nodeName) || Ot.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), ae.hrefNormalized || oe.each(["href", "src"], function (e, t) {
        oe.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ae.optSelected || (oe.propHooks.selected = {
        get: function (e) {
            e = e.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }, set: function (e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    }), ae.enctype || (oe.propFix.enctype = "encoding");
    var Rt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (t) {
            var e, n, i, a, o, r, l = 0;
            if (oe.isFunction(t)) return this.each(function (e) {
                oe(this).addClass(t.call(this, e, O(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(ke) || []; n = this[l++];) if (r = O(n), i = 1 === n.nodeType && (" " + r + " ").replace(Rt, " ")) {
                for (o = 0; a = e[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                r !== (r = oe.trim(i)) && oe.attr(n, "class", r)
            }
            return this
        }, removeClass: function (t) {
            var e, n, i, a, o, r, l = 0;
            if (oe.isFunction(t)) return this.each(function (e) {
                oe(this).removeClass(t.call(this, e, O(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(ke) || []; n = this[l++];) if (r = O(n), i = 1 === n.nodeType && (" " + r + " ").replace(Rt, " ")) {
                for (o = 0; a = e[o++];) for (; -1 < i.indexOf(" " + a + " ");) i = i.replace(" " + a + " ", " ");
                r !== (r = oe.trim(i)) && oe.attr(n, "class", r)
            }
            return this
        }, toggleClass: function (a, t) {
            var o = typeof a;
            return "boolean" == typeof t && "string" == o ? t ? this.addClass(a) : this.removeClass(a) : oe.isFunction(a) ? this.each(function (e) {
                oe(this).toggleClass(a.call(this, e, O(this), t), t)
            }) : this.each(function () {
                var e, t, n, i;
                if ("string" == o) for (t = 0, n = oe(this), i = a.match(ke) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== a && "boolean" != o || ((e = O(this)) && oe._data(this, "__className__", e), oe.attr(this, "class", !e && !1 !== a && oe._data(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++];) if (1 === t.nodeType && -1 < (" " + O(t) + " ").replace(Rt, " ").indexOf(i)) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
        oe.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), oe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var ce = k.location, zt = oe.now(), Wt = /\?/,
        $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function (e) {
        if (k.JSON && k.JSON.parse) return k.JSON.parse(e + "");
        var a, o = null, t = oe.trim(e + "");
        return t && !oe.trim(t.replace($t, function (e, t, n, i) {
            return 0 === (o = a && t ? 0 : o) ? e : (a = n || t, o += !i - !n, "")
        })) ? Function("return " + t)() : oe.error("Invalid JSON: " + e)
    }, oe.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            k.DOMParser ? t = (new k.DOMParser).parseFromString(e, "text/xml") : ((t = new k.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (e) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e), t
    };
    var Yt = /#.*$/, Xt = /([?&])_=[^&]*/, Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ut = /^(?:GET|HEAD)$/, Kt = /^\/\//,
        Gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Jt = {}, Qt = {}, Zt = "*/".concat("*"),
        en = ce.href, tn = Gt.exec(en.toLowerCase()) || [];
    oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: en,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": oe.parseJSON, "text xml": oe.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? W(W(e, oe.ajaxSettings), t) : W(oe.ajaxSettings, e)
        },
        ajaxPrefilter: R(Jt),
        ajaxTransport: R(Qt),
        ajax: function (e, t) {
            function n(e, t, n, i) {
                var a, o, r, l = t;
                2 !== x && (x = 2, u && k.clearTimeout(u), f = void 0, c = i || "", b.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (r = function (e, t, n) {
                    for (var i, a, o, r, l = e.contents, s = e.dataTypes; "*" === s[0];) s.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (a) for (r in l) if (l[r] && l[r].test(a)) {
                        s.unshift(r);
                        break
                    }
                    if (s[0] in n) o = s[0]; else {
                        for (r in n) {
                            if (!s[0] || e.converters[r + " " + s[0]]) {
                                o = r;
                                break
                            }
                            i = i || r
                        }
                        o = o || i
                    }
                    if (o) return o !== s[0] && s.unshift(o), n[o]
                }(p, b, n)), r = function (e, t, n, i) {
                    var a, o, r, l, s, c = {}, u = e.dataTypes.slice();
                    if (u[1]) for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                    for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !s && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = u.shift()) if ("*" === o) o = s; else if ("*" !== s && s !== o) {
                        if (!(r = c[s + " " + o] || c["* " + o])) for (a in c) if (l = a.split(" "), l[1] === o && (r = c[s + " " + l[0]] || c["* " + l[0]])) {
                            !0 === r ? r = c[a] : !0 !== c[a] && (o = l[0], u.unshift(l[1]));
                            break
                        }
                        if (!0 !== r) if (r && e.throws) t = r(t); else try {
                            t = r(t)
                        } catch (e) {
                            return {state: "parsererror", error: r ? e : "No conversion from " + s + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(p, r, b, i), i ? (p.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (oe.lastModified[s] = n), (n = b.getResponseHeader("etag")) && (oe.etag[s] = n)), 204 === e || "HEAD" === p.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = r.state, a = r.data, i = !(o = r.error))) : (o = l, !e && l || (l = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || l) + "", i ? m.resolveWith(h, [a, l, b]) : m.rejectWith(h, [b, l, o]), b.statusCode(v), v = void 0, d && y.trigger(i ? "ajaxSuccess" : "ajaxError", [b, p, i ? a : o]), g.fireWith(h, [b, l]), d && (y.trigger("ajaxComplete", [b, p]), --oe.active || oe.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0);
            var i, s, c, u, d, f, a, p = oe.ajaxSetup({}, t = t || {}), h = p.context || p,
                y = p.context && (h.nodeType || h.jquery) ? oe(h) : oe.event, m = oe.Deferred(),
                g = oe.Callbacks("once memory"), v = p.statusCode || {}, o = {}, r = {}, x = 0, l = "canceled", b = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!a) for (a = {}; t = Vt.exec(c);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === x ? c : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = r[n] = r[n] || e, o[e] = t), this
                    }, overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    }, statusCode: function (e) {
                        if (e) if (x < 2) for (var t in e) v[t] = [v[t], e[t]]; else b.always(e[b.status]);
                        return this
                    }, abort: function (e) {
                        e = e || l;
                        return f && f.abort(e), n(0, e), this
                    }
                };
            if (m.promise(b).complete = g.add, b.success = b.done, b.error = b.fail, p.url = ((e || p.url || en) + "").replace(Yt, "").replace(Kt, tn[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(ke) || [""], null == p.crossDomain && (e = Gt.exec(p.url.toLowerCase()), p.crossDomain = !(!e || e[1] === tn[1] && e[2] === tn[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), z(Jt, p, t, b), 2 === x) return b;
            for (i in (d = oe.event && p.global) && 0 == oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ut.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (Wt.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Xt.test(s) ? s.replace(Xt, "$1_=" + zt++) : s + (Wt.test(s) ? "&" : "?") + "_=" + zt++)), p.ifModified && (oe.lastModified[s] && b.setRequestHeader("If-Modified-Since", oe.lastModified[s]), oe.etag[s] && b.setRequestHeader("If-None-Match", oe.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && b.setRequestHeader("Content-Type", p.contentType), b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : p.accepts["*"]), p.headers) b.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, b, p) || 2 === x)) return b.abort();
            for (i in l = "abort", {success: 1, error: 1, complete: 1}) b[i](p[i]);
            if (f = z(Qt, p, t, b)) {
                if (b.readyState = 1, d && y.trigger("ajaxSend", [b, p]), 2 === x) return b;
                p.async && 0 < p.timeout && (u = k.setTimeout(function () {
                    b.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, f.send(o, n)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return b
        },
        getJSON: function (e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function (e, a) {
        oe[a] = function (e, t, n, i) {
            return oe.isFunction(t) && (i = i || n, n = t, t = void 0), oe.ajax(oe.extend({
                url: e,
                type: a,
                dataType: i,
                data: t,
                success: n
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function (e) {
        return oe.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, oe.fn.extend({
        wrapAll: function (t) {
            return oe.isFunction(t) ? this.each(function (e) {
                oe(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = oe(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                return e
            }).append(this)), this);
            var e
        }, wrapInner: function (n) {
            return oe.isFunction(n) ? this.each(function (e) {
                oe(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = oe(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = oe.isFunction(t);
            return this.each(function (e) {
                oe(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function (e) {
        return ae.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : $(e)
    }, oe.expr.filters.visible = function (e) {
        return !oe.expr.filters.hidden(e)
    };
    var nn = /%20/g, an = /\[\]$/, on = /\r?\n/g, rn = /^(?:submit|button|image|reset|file)$/i,
        ln = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (e, t) {
        function n(e, t) {
            t = oe.isFunction(t) ? t() : null == t ? "" : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }

        var i, a = [];
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
            n(this.name, this.value)
        }); else for (i in e) !function n(i, e, a, o) {
            if (oe.isArray(e)) oe.each(e, function (e, t) {
                a || an.test(i) ? o(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, a, o)
            }); else if (a || "object" !== oe.type(e)) o(i, e); else for (var t in e) n(i + "[" + t + "]", e[t], a, o)
        }(i, e[i], t, n);
        return a.join("&").replace(nn, "+")
    }, oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && ln.test(this.nodeName) && !rn.test(e) && (this.checked || !je.test(e))
            }).map(function (e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                    return {name: t.name, value: e.replace(on, "\r\n")}
                }) : {name: t.name, value: n.replace(on, "\r\n")}
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== k.ActiveXObject ? function () {
        return this.isLocal ? X() : 8 < G.documentMode ? Y() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || X()
    } : Y;
    var sn = 0, cn = {}, ce = oe.ajaxSettings.xhr();
    k.attachEvent && k.attachEvent("onunload", function () {
        for (var e in cn) cn[e](void 0, !0)
    }), ae.cors = !!ce && "withCredentials" in ce, (ce = ae.ajax = !!ce) && oe.ajaxTransport(function (s) {
        var c;
        if (!s.crossDomain || ae.cors) return {
            send: function (e, o) {
                var t, r = s.xhr(), l = ++sn;
                if (r.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields) for (t in s.xhrFields) r[t] = s.xhrFields[t];
                for (t in s.mimeType && r.overrideMimeType && r.overrideMimeType(s.mimeType), s.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && r.setRequestHeader(t, e[t] + "");
                r.send(s.hasContent && s.data || null), c = function (e, t) {
                    var n, i, a;
                    if (c && (t || 4 === r.readyState)) if (delete cn[l], c = void 0, r.onreadystatechange = oe.noop, t) 4 !== r.readyState && r.abort(); else {
                        a = {}, n = r.status, "string" == typeof r.responseText && (a.text = r.responseText);
                        try {
                            i = r.statusText
                        } catch (e) {
                            i = ""
                        }
                        n || !s.isLocal || s.crossDomain ? 1223 === n && (n = 204) : n = a.text ? 200 : 404
                    }
                    a && o(n, i, a, r.getAllResponseHeaders())
                }, s.async ? 4 === r.readyState ? k.setTimeout(c) : r.onreadystatechange = cn[l] = c : c()
            }, abort: function () {
                c && c(void 0, !0)
            }
        }
    }), oe.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), oe.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var i, a = G.head || oe("head")[0] || G.documentElement;
            return {
                send: function (e, n) {
                    (i = G.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function (e, t) {
                        !t && i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                    }, a.insertBefore(i, a.firstChild)
                }, abort: function () {
                    i && i.onload(void 0, !0)
                }
            }
        }
    });
    var un = [], dn = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = un.pop() || oe.expando + "_" + zt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i, a, o,
            r = !1 !== e.jsonp && (dn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(dn, "$1" + i) : !1 !== e.jsonp && (e.url += (Wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return o || oe.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", a = k[i], k[i] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === a ? oe(k).removeProp(i) : k[i] = a, e[i] && (e.jsonpCallback = t.jsonpCallback, un.push(i)), o && oe.isFunction(a) && a(o[0]), o = a = void 0
        }), "script"
    }), oe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var i = pe.exec(e), n = !n && [];
        return i ? [t.createElement(i[1])] : (i = y([e], t, n), n && n.length && oe(n).remove(), oe.merge([], i.childNodes))
    };
    var fn = oe.fn.load;
    return oe.fn.load = function (e, t, n) {
        if ("string" != typeof e && fn) return fn.apply(this, arguments);
        var i, a, o, r = this, l = e.indexOf(" ");
        return -1 < l && (i = oe.trim(e.slice(l, e.length)), e = e.slice(0, l)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), 0 < r.length && oe.ajax({
            url: e,
            type: a || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, r.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            r.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        oe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function (t) {
        return oe.grep(oe.timers, function (e) {
            return t === e.elem
        }).length
    }, oe.offset = {
        setOffset: function (e, t, n) {
            var i, a, o, r, l = oe.css(e, "position"), s = oe(e), c = {};
            "static" === l && (e.style.position = "relative"), o = s.offset(), i = oe.css(e, "top"), r = oe.css(e, "left"), r = ("absolute" === l || "fixed" === l) && -1 < oe.inArray("auto", [i, r]) ? (a = (l = s.position()).top, l.left) : (a = parseFloat(i) || 0, parseFloat(r) || 0), null != (t = oe.isFunction(t) ? t.call(e, n, oe.extend({}, o)) : t).top && (c.top = t.top - o.top + a), null != t.left && (c.left = t.left - o.left + r), "using" in t ? t.using.call(e, c) : s.css(c)
        }
    }, oe.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                oe.offset.setOffset(this, t, e)
            });
            var e, n = {top: 0, left: 0}, i = this[0], a = i && i.ownerDocument;
            return a ? (e = a.documentElement, oe.contains(e, i) ? (void 0 !== i.getBoundingClientRect && (n = i.getBoundingClientRect()), a = V(a), {
                top: n.top + (a.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (a.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, i = this[0];
                return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), (n = !oe.nodeName(e[0], "html") ? e.offset() : n).top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - oe.css(i, "marginTop", !0),
                    left: t.left - n.left - oe.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || dt
            })
        }
    }), oe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, a) {
        var o = /Y/.test(a);
        oe.fn[t] = function (e) {
            return Ae(this, function (e, t, n) {
                var i = V(e);
                return void 0 === n ? i ? a in i ? i[a] : i.document.documentElement[t] : e[t] : void (i ? i.scrollTo(o ? oe(i).scrollLeft() : n, o ? n : oe(i).scrollTop()) : e[t] = n)
            }, t, e, arguments.length, null)
        }
    }), oe.each(["top", "left"], function (e, n) {
        oe.cssHooks[n] = D(ae.pixelPosition, function (e, t) {
            if (t) return t = ht(e, n), ut.test(t) ? oe(e).position()[n] + "px" : t
        })
    }), oe.each({Height: "height", Width: "width"}, function (o, r) {
        oe.each({padding: "inner" + o, content: r, "": "outer" + o}, function (i, e) {
            oe.fn[e] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    a = i || (!0 === e || !0 === t ? "margin" : "border");
                return Ae(this, function (e, t, n) {
                    var i;
                    return oe.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? oe.css(e, t, a) : oe.style(e, t, n, a)
                }, r, n ? e : void 0, n, null)
            }
        })
    }), oe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), oe.fn.size = function () {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, layui.define(function (e) {
        e("jquery", layui.$ = oe)
    }), oe
}), function (y) {
    "use strict";

    function t(e) {
        function t() {
            n.creat()
        }

        var n = this;
        n.index = ++g.index, n.config.maxWidth = m(c).width() - 30, n.config = m.extend({}, n.config, u.config, e), document.body ? t() : setTimeout(function () {
            t()
        }, 30)
    }

    var m, c, e, n = y.layui && layui.define, u = {
        getPath: (e = document.currentScript ? document.currentScript.src : function () {
            for (var e, t = document.scripts, n = t.length - 1, i = n; 0 < i; i--) if ("interactive" === t[i].readyState) {
                e = t[i].src;
                break
            }
            return e || t[n].src
        }(), (y.LAYUI_GLOBAL || {}).layer_dir || e.substring(0, e.lastIndexOf("/") + 1)),
        config: {},
        end: {},
        minIndex: 0,
        minLeft: [],
        btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
        type: ["dialog", "page", "iframe", "loading", "tips"],
        getStyle: function (e, t) {
            e = e.currentStyle || y.getComputedStyle(e, null);
            return e[e.getPropertyValue ? "getPropertyValue" : "getAttribute"](t)
        },
        link: function (e, i, t) {
            var n, a, o, r, l, s;
            g.path && (n = document.getElementsByTagName("head")[0], a = document.createElement("link"), o = ((t = "string" == typeof i ? i : t) || e).replace(/\.|\//g, ""), r = "layuicss-" + o, l = "creating", s = 0, a.rel = "stylesheet", a.href = g.path + e, a.id = r, document.getElementById(r) || n.appendChild(a), "function" == typeof i && function e(t) {
                var n = document.getElementById(r);
                return 100 < ++s ? y.console && console.error(o + ".css: Invalid") : void (1989 === parseInt(u.getStyle(n, "width")) ? (t === l && n.removeAttribute("lay-status"), n.getAttribute("lay-status") === l ? setTimeout(e, 100) : i()) : (n.setAttribute("lay-status", l), setTimeout(function () {
                    e(l)
                }, 100)))
            }())
        }
    }, g = {
        v: "3.5.0",
        ie: (e = navigator.userAgent.toLowerCase(), !!(y.ActiveXObject || "ActiveXObject" in y) && ((e.match(/msie\s(\d+)/) || [])[1] || "11")),
        index: y.layer && y.layer.v ? 1e5 : 0,
        path: u.getPath,
        config: function (e, t) {
            return g.cache = u.config = m.extend({}, u.config, e = e || {}), g.path = u.config.path || g.path, "string" == typeof e.extend && (e.extend = [e.extend]), u.config.path && g.ready(), e.extend && (n ? layui.addcss("modules/layer/" + e.extend) : u.link("theme/" + e.extend)), this
        },
        ready: function (e) {
            var t = (n ? "modules/layer/" : "theme/") + "default/layer.css?v=" + g.v;
            return n ? layui.addcss(t, e, "layer") : u.link(t, e, "layer"), this
        },
        alert: function (e, t, n) {
            var i = "function" == typeof t;
            return g.open(m.extend({content: e, yes: n = i ? t : n}, i ? {} : t))
        },
        confirm: function (e, t, n, i) {
            var a = "function" == typeof t;
            return a && (i = n, n = t), g.open(m.extend({content: e, btn: u.btn, yes: n, btn2: i}, a ? {} : t))
        },
        msg: function (e, t, n) {
            var i = "function" == typeof t, a = u.config.skin, o = (a ? a + " " + a + "-msg" : "") || "layui-layer-msg",
                a = d.anim.length - 1;
            return i && (n = t), g.open(m.extend({
                content: e,
                time: 3e3,
                shade: !1,
                skin: o,
                title: !1,
                closeBtn: !1,
                btn: !1,
                resize: !1,
                end: n
            }, i && !u.config.skin ? {
                skin: o + " layui-layer-hui",
                anim: a
            } : (-1 !== (t = t || {}).icon && (void 0 !== t.icon || u.config.skin) || (t.skin = o + " " + (t.skin || "layui-layer-hui")), t)))
        },
        load: function (e, t) {
            return g.open(m.extend({type: 3, icon: e || 0, resize: !1, shade: .01}, t))
        },
        tips: function (e, t, n) {
            return g.open(m.extend({
                type: 4,
                content: [e, t],
                closeBtn: !1,
                time: 3e3,
                shade: !1,
                resize: !1,
                fixed: !1,
                maxWidth: 260
            }, n))
        }
    };
    t.pt = t.prototype;
    var d = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
    d.anim = ["layer-anim-00", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"], d.SHADE = "layui-layer-shade", d.MOVE = "layui-layer-move", t.pt.config = {
        type: 0,
        shade: .3,
        fixed: !0,
        move: d[1],
        title: "&#x4FE1;&#x606F;",
        offset: "auto",
        area: "auto",
        closeBtn: 1,
        time: 0,
        zIndex: 19891014,
        maxWidth: 360,
        anim: 0,
        isOutAnim: !0,
        minStack: !0,
        icon: -1,
        moveType: 1,
        resize: !0,
        scrollbar: !0,
        tips: 2
    }, t.pt.vessel = function (e, t) {
        var n = this.index, i = this.config, a = i.zIndex + n, o = "object" == typeof i.title,
            r = i.maxmin && (1 === i.type || 2 === i.type),
            o = i.title ? '<div class="layui-layer-title" style="' + (o ? i.title[1] : "") + '">' + (o ? i.title[0] : i.title) + "</div>" : "";
        return i.zIndex = a, t([i.shade ? '<div class="' + d.SHADE + '" id="' + d.SHADE + n + '" times="' + n + '" style="z-index:' + (a - 1) + '; "></div>' : "", '<div class="' + d[0] + " layui-layer-" + u.type[i.type] + (0 != i.type && 2 != i.type || i.shade ? "" : " layui-layer-border") + " " + (i.skin || "") + '" id="' + d[0] + n + '" type="' + u.type[i.type] + '" times="' + n + '" showtime="' + i.time + '" conType="' + (e ? "object" : "string") + '" style="z-index: ' + a + "; width:" + i.area[0] + ";height:" + i.area[1] + ";position:" + (i.fixed ? "fixed;" : "absolute;") + '">' + (e && 2 != i.type ? "" : o) + '<div id="' + (i.id || "") + '" class="layui-layer-content' + (0 == i.type && -1 !== i.icon ? " layui-layer-padding" : "") + (3 == i.type ? " layui-layer-loading" + i.icon : "") + '">' + (0 == i.type && -1 !== i.icon ? '<i class="layui-layer-ico layui-layer-ico' + i.icon + '"></i>' : "") + ((1 != i.type || !e) && i.content || "") + '</div><span class="layui-layer-setwin">' + (r = r ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : "", i.closeBtn && (r += '<a class="layui-layer-ico ' + d[7] + " " + d[7] + (i.title ? i.closeBtn : 4 == i.type ? "1" : "2") + '" href="javascript:;"></a>'), r) + "</span>" + (i.btn ? function () {
            var e = "";
            "string" == typeof i.btn && (i.btn = [i.btn]);
            for (var t = 0, n = i.btn.length; t < n; t++) e += '<a class="' + d[6] + t + '">' + i.btn[t] + "</a>";
            return '<div class="' + d[6] + " layui-layer-btn-" + (i.btnAlign || "") + '">' + e + "</div>"
        }() : "") + (i.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"], o, m('<div class="' + d.MOVE + '" id="' + d.MOVE + '"></div>')), this
    }, t.pt.creat = function () {
        var e, i = this, a = i.config, o = i.index, r = "object" == typeof (s = a.content), l = m("body");
        if (!a.id || !m("#" + a.id)[0]) {
            switch ("string" == typeof a.area && (a.area = "auto" === a.area ? ["", ""] : [a.area, ""]), a.shift && (a.anim = a.shift), 6 == g.ie && (a.fixed = !1), a.type) {
                case 0:
                    a.btn = "btn" in a ? a.btn : u.btn[0], g.closeAll("dialog");
                    break;
                case 2:
                    var s = a.content = r ? a.content : [a.content || "", "auto"];
                    a.content = '<iframe scrolling="' + (a.content[1] || "auto") + '" allowtransparency="true" id="' + d[4] + o + '" name="' + d[4] + o + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + a.content[0] + '"></iframe>';
                    break;
                case 3:
                    delete a.title, delete a.closeBtn, -1 === a.icon && a.icon, g.closeAll("loading");
                    break;
                case 4:
                    r || (a.content = [a.content, "body"]), a.follow = a.content[1], a.content = a.content[0] + '<i class="layui-layer-TipsG"></i>', delete a.title, a.tips = "object" == typeof a.tips ? a.tips : [a.tips, !0], a.tipsMore || g.closeAll("tips")
            }
            i.vessel(r, function (e, t, n) {
                l.append(e[0]), r ? 2 == a.type || 4 == a.type ? m("body").append(e[1]) : s.parents("." + d[0])[0] || (s.data("display", s.css("display")).show().addClass("layui-layer-wrap").wrap(e[1]), m("#" + d[0] + o).find("." + d[5]).before(t)) : l.append(e[1]), m("#" + d.MOVE)[0] || l.append(u.moveElem = n), i.layero = m("#" + d[0] + o), i.shadeo = m("#" + d.SHADE + o), a.scrollbar || d.html.css("overflow", "hidden").attr("layer-full", o)
            }).auto(o), i.shadeo.css({
                "background-color": a.shade[1] || "#000",
                opacity: a.shade[0] || a.shade
            }), 2 == a.type && 6 == g.ie && i.layero.find("iframe").attr("src", s[0]), 4 == a.type ? i.tips() : (i.offset(), parseInt(u.getStyle(document.getElementById(d.MOVE), "z-index")) || (i.layero.css("visibility", "hidden"), g.ready(function () {
                i.offset(), i.layero.css("visibility", "visible")
            }))), a.fixed && c.on("resize", function () {
                i.offset(), (/^\d+%$/.test(a.area[0]) || /^\d+%$/.test(a.area[1])) && i.auto(o), 4 == a.type && i.tips()
            }), a.time <= 0 || setTimeout(function () {
                g.close(i.index)
            }, a.time), i.move().callback(), d.anim[a.anim] && (e = "layer-anim " + d.anim[a.anim], i.layero.addClass(e).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                m(this).removeClass(e)
            })), a.isOutAnim && i.layero.data("isOutAnim", !0)
        }
    }, t.pt.auto = function (e) {
        var t = this.config, n = m("#" + d[0] + e);
        "" === t.area[0] && 0 < t.maxWidth && (g.ie && g.ie < 8 && t.btn && n.width(n.innerWidth()), n.outerWidth() > t.maxWidth && n.width(t.maxWidth));
        var i = [n.innerWidth(), n.innerHeight()], a = n.find(d[1]).outerHeight() || 0,
            o = n.find("." + d[6]).outerHeight() || 0, e = function (e) {
                (e = n.find(e)).height(i[1] - a - o - 2 * (0 | parseFloat(e.css("padding-top"))))
            };
        return 2 === t.type ? e("iframe") : "" === t.area[1] ? 0 < t.maxHeight && n.outerHeight() > t.maxHeight ? (i[1] = t.maxHeight, e("." + d[5])) : t.fixed && i[1] >= c.height() && (i[1] = c.height(), e("." + d[5])) : e("." + d[5]), this
    }, t.pt.offset = function () {
        var e = this, t = e.config, n = e.layero, i = [n.outerWidth(), n.outerHeight()],
            a = "object" == typeof t.offset;
        e.offsetTop = (c.height() - i[1]) / 2, e.offsetLeft = (c.width() - i[0]) / 2, a ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && ("t" === t.offset ? e.offsetTop = 0 : "r" === t.offset ? e.offsetLeft = c.width() - i[0] : "b" === t.offset ? e.offsetTop = c.height() - i[1] : "l" === t.offset ? e.offsetLeft = 0 : "lt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = 0) : "lb" === t.offset ? (e.offsetTop = c.height() - i[1], e.offsetLeft = 0) : "rt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = c.width() - i[0]) : "rb" === t.offset ? (e.offsetTop = c.height() - i[1], e.offsetLeft = c.width() - i[0]) : e.offsetTop = t.offset), t.fixed || (e.offsetTop = /%$/.test(e.offsetTop) ? c.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? c.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop += c.scrollTop(), e.offsetLeft += c.scrollLeft()), n.attr("minLeft") && (e.offsetTop = c.height() - (n.find(d[1]).outerHeight() || 0), e.offsetLeft = n.css("left")), n.css({
            top: e.offsetTop,
            left: e.offsetLeft
        })
    }, t.pt.tips = function () {
        var e = this.config, t = this.layero, n = [t.outerWidth(), t.outerHeight()], i = m(e.follow), a = {
            width: (i = !i[0] ? m("body") : i).outerWidth(),
            height: i.outerHeight(),
            top: i.offset().top,
            left: i.offset().left
        }, o = t.find(".layui-layer-TipsG"), i = e.tips[0];
        e.tips[1] || o.remove(), a.autoLeft = function () {
            0 < a.left + n[0] - c.width() ? (a.tipLeft = a.left + a.width - n[0], o.css({
                right: 12,
                left: "auto"
            })) : a.tipLeft = a.left
        }, a.where = [function () {
            a.autoLeft(), a.tipTop = a.top - n[1] - 10, o.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", e.tips[1])
        }, function () {
            a.tipLeft = a.left + a.width + 10, a.tipTop = a.top, o.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", e.tips[1])
        }, function () {
            a.autoLeft(), a.tipTop = a.top + a.height + 10, o.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", e.tips[1])
        }, function () {
            a.tipLeft = a.left - n[0] - 10, a.tipTop = a.top, o.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", e.tips[1])
        }], a.where[i - 1](), 1 === i ? a.top - (c.scrollTop() + n[1] + 16) < 0 && a.where[2]() : 2 === i ? 0 < c.width() - (a.left + a.width + n[0] + 16) || a.where[3]() : 3 === i ? 0 < a.top - c.scrollTop() + a.height + n[1] + 16 - c.height() && a.where[0]() : 4 === i && 0 < n[0] + 16 - a.left && a.where[1](), t.find("." + d[5]).css({
            "background-color": e.tips[1],
            "padding-right": e.closeBtn ? "30px" : ""
        }), t.css({left: a.tipLeft - (e.fixed ? c.scrollLeft() : 0), top: a.tipTop - (e.fixed ? c.scrollTop() : 0)})
    }, t.pt.move = function () {
        var o = this, r = o.config, e = m(document), l = o.layero, t = l.find(r.move),
            n = l.find(".layui-layer-resize"), s = {};
        return r.move && t.css("cursor", "move"), t.on("mousedown", function (e) {
            e.preventDefault(), r.move && (s.moveStart = !0, s.offset = [e.clientX - parseFloat(l.css("left")), e.clientY - parseFloat(l.css("top"))], u.moveElem.css("cursor", "move").show())
        }), n.on("mousedown", function (e) {
            e.preventDefault(), s.resizeStart = !0, s.offset = [e.clientX, e.clientY], s.area = [l.outerWidth(), l.outerHeight()], u.moveElem.css("cursor", "se-resize").show()
        }), e.on("mousemove", function (e) {
            var t, n, i, a;
            s.moveStart && (i = e.clientX - s.offset[0], a = e.clientY - s.offset[1], n = "fixed" === l.css("position"), e.preventDefault(), s.stX = n ? 0 : c.scrollLeft(), s.stY = n ? 0 : c.scrollTop(), r.moveOut || (t = c.width() - l.outerWidth() + s.stX, n = c.height() - l.outerHeight() + s.stY, t < (i = i < s.stX ? s.stX : i) && (i = t), n < (a = a < s.stY ? s.stY : a) && (a = n)), l.css({
                left: i,
                top: a
            })), r.resize && s.resizeStart && (i = e.clientX - s.offset[0], a = e.clientY - s.offset[1], e.preventDefault(), g.style(o.index, {
                width: s.area[0] + i,
                height: s.area[1] + a
            }), s.isResize = !0, r.resizing && r.resizing(l))
        }).on("mouseup", function (e) {
            s.moveStart && (delete s.moveStart, u.moveElem.hide(), r.moveEnd && r.moveEnd(l)), s.resizeStart && (delete s.resizeStart, u.moveElem.hide())
        }), o
    }, t.pt.callback = function () {
        var t = this, n = t.layero, i = t.config;
        t.openLayer(), i.success && (2 == i.type ? n.find("iframe").on("load", function () {
            i.success(n, t.index)
        }) : i.success(n, t.index)), 6 == g.ie && t.IE6(n), n.find("." + d[6]).children("a").on("click", function () {
            var e = m(this).index();
            0 === e ? i.yes ? i.yes(t.index, n) : i.btn1 ? i.btn1(t.index, n) : g.close(t.index) : !1 === (i["btn" + (e + 1)] && i["btn" + (e + 1)](t.index, n)) || g.close(t.index)
        }), n.find("." + d[7]).on("click", function () {
            !1 === (i.cancel && i.cancel(t.index, n)) || g.close(t.index)
        }), i.shadeClose && t.shadeo.on("click", function () {
            g.close(t.index)
        }), n.find(".layui-layer-min").on("click", function () {
            !1 === (i.min && i.min(n, t.index)) || g.min(t.index, i)
        }), n.find(".layui-layer-max").on("click", function () {
            m(this).hasClass("layui-layer-maxmin") ? (g.restore(t.index), i.restore && i.restore(n, t.index)) : (g.full(t.index, i), setTimeout(function () {
                i.full && i.full(n, t.index)
            }, 100))
        }), i.end && (u.end[t.index] = i.end)
    }, u.reselect = function () {
        m.each(m("select"), function (e, t) {
            var n = m(this);
            n.parents("." + d[0])[0] || 1 == n.attr("layer") && m("." + d[0]).length < 1 && n.removeAttr("layer").show()
        })
    }, t.pt.IE6 = function (e) {
        m("select").each(function (e, t) {
            var n = m(this);
            n.parents("." + d[0])[0] || "none" === n.css("display") || n.attr({layer: "1"}).hide()
        })
    }, t.pt.openLayer = function () {
        g.zIndex = this.config.zIndex, g.setTop = function (e) {
            return g.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", function () {
                g.zIndex++, e.css("z-index", g.zIndex + 1)
            }), g.zIndex
        }
    }, u.record = function (e) {
        var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
        e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({area: t})
    }, u.rescollbar = function (e) {
        d.html.attr("layer-full") == e && (d.html[0].style.removeProperty ? d.html[0].style.removeProperty("overflow") : d.html[0].style.removeAttribute("overflow"), d.html.removeAttr("layer-full"))
    }, (y.layer = g).getChildFrame = function (e, t) {
        return t = t || m("." + d[4]).attr("times"), m("#" + d[0] + t).find("iframe").contents().find(e)
    }, g.getFrameIndex = function (e) {
        return m("#" + e).parents("." + d[4]).attr("times")
    }, g.iframeAuto = function (e) {
        var t, n, i;
        e && (t = g.getChildFrame("html", e).outerHeight(), i = (n = m("#" + d[0] + e)).find(d[1]).outerHeight() || 0, e = n.find("." + d[6]).outerHeight() || 0, n.css({height: t + i + e}), n.find("iframe").css({height: t}))
    }, g.iframeSrc = function (e, t) {
        m("#" + d[0] + e).find("iframe").attr("src", t)
    }, g.style = function (e, t, n) {
        var i = m("#" + d[0] + e), a = i.find(".layui-layer-content"), o = i.attr("type"),
            r = i.find(d[1]).outerHeight() || 0, e = i.find("." + d[6]).outerHeight() || 0;
        i.attr("minLeft"), o !== u.type[3] && o !== u.type[4] && (n || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) - r - e <= 64 && (t.height = 64 + r + e)), i.css(t), e = i.find("." + d[6]).outerHeight(), o === u.type[2] ? i.find("iframe").css({height: parseFloat(t.height) - r - e}) : a.css({height: parseFloat(t.height) - r - e - parseFloat(a.css("padding-top")) - parseFloat(a.css("padding-bottom"))}))
    }, g.min = function (e, t) {
        t = t || {};
        var n = m("#" + d[0] + e), i = m("#" + d.SHADE + e), a = n.find(d[1]).outerHeight() || 0,
            o = n.attr("minLeft") || 181 * u.minIndex + "px", r = n.css("position"),
            l = {width: 180, height: a, position: "fixed", overflow: "hidden"};
        u.record(n), u.minLeft[0] && (o = u.minLeft[0], u.minLeft.shift()), t.minStack && (l.left = o, l.top = c.height() - a, n.attr("minLeft") || u.minIndex++, n.attr("minLeft", o)), n.attr("position", r), g.style(e, l, !0), n.find(".layui-layer-min").hide(), "page" === n.attr("type") && n.find(d[4]).hide(), u.rescollbar(e), i.hide()
    }, g.restore = function (e) {
        var t = m("#" + d[0] + e), n = m("#" + d.SHADE + e), i = t.attr("area").split(",");
        t.attr("type"), g.style(e, {
            width: parseFloat(i[0]),
            height: parseFloat(i[1]),
            top: parseFloat(i[2]),
            left: parseFloat(i[3]),
            position: t.attr("position"),
            overflow: "visible"
        }, !0), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min").show(), "page" === t.attr("type") && t.find(d[4]).show(), u.rescollbar(e), n.show()
    }, g.full = function (t) {
        var n = m("#" + d[0] + t);
        u.record(n), d.html.attr("layer-full") || d.html.css("overflow", "hidden").attr("layer-full", t), clearTimeout(void 0), setTimeout(function () {
            var e = "fixed" === n.css("position");
            g.style(t, {
                top: e ? 0 : c.scrollTop(),
                left: e ? 0 : c.scrollLeft(),
                width: c.width(),
                height: c.height()
            }, !0), n.find(".layui-layer-min").hide()
        }, 100)
    }, g.title = function (e, t) {
        m("#" + d[0] + (t || g.index)).find(d[1]).html(e)
    }, g.close = function (i, a) {
        var o, e, r = m("#" + d[0] + i), l = r.attr("type");
        r[0] && (o = "layui-layer-wrap", e = function () {
            if (l === u.type[1] && "object" === r.attr("conType")) {
                r.children(":not(." + d[5] + ")").remove();
                for (var e = r.find("." + o), t = 0; t < 2; t++) e.unwrap();
                e.css("display", e.data("display")).removeClass(o)
            } else {
                if (l === u.type[2]) try {
                    var n = m("#" + d[4] + i)[0];
                    n.contentWindow.document.write(""), n.contentWindow.close(), r.find("." + d[5])[0].removeChild(n)
                } catch (e) {
                }
                r[0].innerHTML = "", r.remove()
            }
            "function" == typeof u.end[i] && u.end[i](), delete u.end[i], "function" == typeof a && a()
        }, r.data("isOutAnim") && r.addClass("layer-anim layer-anim-close"), m("#layui-layer-moves, #" + d.SHADE + i).remove(), 6 == g.ie && u.reselect(), u.rescollbar(i), r.attr("minLeft") && (u.minIndex--, u.minLeft.push(r.attr("minLeft"))), g.ie && g.ie < 10 || !r.data("isOutAnim") ? e() : setTimeout(function () {
            e()
        }, 200))
    }, g.closeAll = function (i, a) {
        "function" == typeof i && (a = i, i = null);
        var o = m("." + d[0]);
        m.each(o, function (e) {
            var t = m(this), n = i ? t.attr("type") === i : 1;
            n && g.close(t.attr("times"), e === o.length - 1 ? a : null)
        }), 0 === o.length && "function" == typeof a && a()
    };

    function v(e) {
        return i.skin ? " " + i.skin + " " + i.skin + "-" + e : ""
    }

    var i = g.cache || {};
    g.prompt = function (n, i) {
        var e, t = "";
        "function" == typeof (n = n || {}) && (i = n), n.area && (t = 'style="width: ' + (e = n.area)[0] + "; height: " + e[1] + ';"', delete n.area);
        var a,
            t = 2 == n.formType ? '<textarea class="layui-layer-input"' + t + "></textarea>" : '<input type="' + (1 == n.formType ? "password" : "text") + '" class="layui-layer-input">',
            o = n.success;
        return delete n.success, g.open(m.extend({
            type: 1,
            btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
            content: t,
            skin: "layui-layer-prompt" + v("prompt"),
            maxWidth: c.width(),
            success: function (e) {
                (a = e.find(".layui-layer-input")).val(n.value || "").focus(), "function" == typeof o && o(e)
            },
            resize: !1,
            yes: function (e) {
                var t = a.val();
                "" === t ? a.focus() : t.length > (n.maxlength || 500) ? g.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (n.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", a, {tips: 1}) : i && i(t, e, a)
            }
        }, n))
    }, g.tab = function (i) {
        var a = (i = i || {}).tab || {}, o = "layui-this", r = i.success;
        return delete i.success, g.open(m.extend({
            type: 1,
            skin: "layui-layer-tab" + v("tab"),
            resize: !1,
            title: function () {
                var e = a.length, t = 1, n = "";
                if (0 < e) for (n = '<span class="' + o + '">' + a[0].title + "</span>"; t < e; t++) n += "<span>" + a[t].title + "</span>";
                return n
            }(),
            content: '<ul class="layui-layer-tabmain">' + function () {
                var e = a.length, t = 1, n = "";
                if (0 < e) for (n = '<li class="layui-layer-tabli ' + o + '">' + (a[0].content || "no content") + "</li>"; t < e; t++) n += '<li class="layui-layer-tabli">' + (a[t].content || "no  content") + "</li>";
                return n
            }() + "</ul>",
            success: function (e) {
                var t = e.find(".layui-layer-title").children(), n = e.find(".layui-layer-tabmain").children();
                t.on("mousedown", function (e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
                    var t = m(this), e = t.index();
                    t.addClass(o).siblings().removeClass(o), n.eq(e).show().siblings().hide(), "function" == typeof i.change && i.change(e)
                }), "function" == typeof r && r(e)
            }
        }, i))
    }, g.photos = function (n, e, i) {
        var t, a, o, r, l = {};
        if ((n = n || {}).photos) {
            var s = n.photos.constructor === Object, c = s ? n.photos : {}, u = c.data || [], d = c.start || 0;
            l.imgIndex = 1 + (0 | d), n.img = n.img || "img";
            var f = n.success;
            if (delete n.success, s) {
                if (0 === u.length) return g.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")
            } else {
                var p = m(n.photos), h = function () {
                    u = [], p.find(n.img).each(function (e) {
                        var t = m(this);
                        t.attr("layer-index", e), u.push({
                            alt: t.attr("alt"),
                            pid: t.attr("layer-pid"),
                            src: t.attr("layer-src") || t.attr("src"),
                            thumb: t.attr("src")
                        })
                    })
                };
                if (h(), 0 === u.length) return;
                if (e || p.on("click", n.img, function () {
                    h();
                    var e = m(this).attr("layer-index");
                    g.photos(m.extend(n, {photos: {start: e, data: u, tab: n.tab}, full: n.full}), !0)
                }), !e) return
            }
            l.imgprev = function (e) {
                l.imgIndex--, l.imgIndex < 1 && (l.imgIndex = u.length), l.tabimg(e)
            }, l.imgnext = function (e, t) {
                l.imgIndex++, l.imgIndex > u.length && (l.imgIndex = 1, t) || l.tabimg(e)
            }, l.keyup = function (e) {
                var t;
                l.end || (t = e.keyCode, e.preventDefault(), 37 === t ? l.imgprev(!0) : 39 === t ? l.imgnext(!0) : 27 === t && g.close(l.index))
            }, l.tabimg = function (e) {
                if (!(u.length <= 1)) return c.start = l.imgIndex - 1, g.close(l.index), g.photos(n, !0, e)
            }, l.event = function () {
                l.bigimg.find(".layui-layer-imgprev").on("click", function (e) {
                    e.preventDefault(), l.imgprev(!0)
                }), l.bigimg.find(".layui-layer-imgnext").on("click", function (e) {
                    e.preventDefault(), l.imgnext(!0)
                }), m(document).on("keyup", l.keyup)
            }, l.loadi = g.load(1, {shade: !("shade" in n) && .9, scrollbar: !1}), t = u[d].src, a = function (e) {
                var t;
                g.close(l.loadi), i && (n.anim = -1), l.index = g.open(m.extend({
                    type: 1,
                    id: "layui-layer-photos",
                    area: (t = [e.width, e.height], e = [m(y).width() - 100, m(y).height() - 100], !n.full && (t[0] > e[0] || t[1] > e[1]) && ((e = [t[0] / e[0], t[1] / e[1]])[1] < e[0] ? (t[0] = t[0] / e[0], t[1] = t[1] / e[0]) : e[0] < e[1] && (t[0] = t[0] / e[1], t[1] = t[1] / e[1])), [t[0] + "px", t[1] + "px"]),
                    title: !1,
                    shade: .9,
                    shadeClose: !0,
                    closeBtn: !1,
                    move: ".layui-layer-phimg img",
                    moveType: 1,
                    scrollbar: !1,
                    moveOut: !0,
                    anim: 5,
                    isOutAnim: !1,
                    skin: "layui-layer-photos" + v("photos"),
                    content: '<div class="layui-layer-phimg"><img src="' + u[d].src + '" alt="' + (u[d].alt || "") + '" layer-pid="' + u[d].pid + '">' + (1 < u.length ? '<div class="layui-layer-imgsee"><span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span><div class="layui-layer-imgbar" style="display:' + (i ? "block" : "") + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (u[d].alt || "") + "</a><em>" + l.imgIndex + " / " + u.length + "</em></span></div></div>" : "") + "</div>",
                    success: function (e, t) {
                        l.bigimg = e.find(".layui-layer-phimg"), l.imgsee = e.find(".layui-layer-imgbar"), l.event(e), n.tab && n.tab(u[d], e), "function" == typeof f && f(e)
                    },
                    end: function () {
                        l.end = !0, m(document).off("keyup", l.keyup)
                    }
                }, n))
            }, o = function () {
                g.close(l.loadi), g.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
                    time: 3e4,
                    btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
                    yes: function () {
                        1 < u.length && l.imgnext(!0, !0)
                    }
                })
            }, (r = new Image).src = t, r.complete ? a(r) : (r.onload = function () {
                r.onload = null, a(r)
            }, r.onerror = function (e) {
                r.onerror = null, o(e)
            })
        }
    }, u.run = function (e) {
        c = (m = e)(y), d.html = m("html"), g.open = function (e) {
            return new t(e).index
        }
    }, y.layui && layui.define ? (g.ready(), layui.define("jquery", function (e) {
        g.path = layui.cache.dir, u.run(layui.$), e("layer", y.layer = g)
    })) : "function" == typeof define && define.amd ? define(["jquery"], function () {
        return u.run(y.jQuery), g
    }) : (g.ready(), u.run(y.jQuery))
}(window), layui.define("jquery", function (e) {
    "use strict";
    var u = layui.$, o = layui.hint(), a = {
        fixbar: function (t) {
            var e, n, i = "layui-fixbar", a = "layui-fixbar-top", o = u(document), r = u("body");
            (t = u.extend({showHeight: 200}, t)).bar1 = !0 === t.bar1 ? "&#xe606;" : t.bar1, t.bar2 = !0 === t.bar2 ? "&#xe607;" : t.bar2, t.bgcolor = t.bgcolor ? "background-color:" + t.bgcolor : "";

            function l() {
                o.scrollTop() >= t.showHeight ? e || (c.show(), e = 1) : e && (c.hide(), e = 0)
            }

            var s = [t.bar1, t.bar2, "&#xe604;"],
                s = u(['<ul class="' + i + '">', t.bar1 ? '<li class="layui-icon" lay-type="bar1" style="' + t.bgcolor + '">' + s[0] + "</li>" : "", t.bar2 ? '<li class="layui-icon" lay-type="bar2" style="' + t.bgcolor + '">' + s[1] + "</li>" : "", '<li class="layui-icon ' + a + '" lay-type="top" style="' + t.bgcolor + '">' + s[2] + "</li>", "</ul>"].join("")),
                c = s.find("." + a);
            u("." + i)[0] || ("object" == typeof t.css && s.css(t.css), r.append(s), l(), s.find("li").on("click", function () {
                var e = u(this).attr("lay-type");
                "top" === e && u("html,body").animate({scrollTop: 0}, 200), t.click && t.click.call(this, e)
            }), o.on("scroll", function () {
                clearTimeout(n), n = setTimeout(function () {
                    l()
                }, 100)
            }))
        }, countdown: function (e, t, n) {
            var i = this, a = "function" == typeof t, o = new Date(e).getTime(),
                r = new Date(!t || a ? (new Date).getTime() : t).getTime(), l = o - r,
                o = [Math.floor(l / 864e5), Math.floor(l / 36e5) % 24, Math.floor(l / 6e4) % 60, Math.floor(l / 1e3) % 60];
            a && (n = t);
            a = setTimeout(function () {
                i.countdown(e, r + 1e3, n)
            }, 1e3);
            return n && n(0 < l ? o : [0, 0, 0, 0], t, a), l <= 0 && clearTimeout(a), a
        }, timeAgo: function (e, t) {
            var n = this, i = [[], []], a = (new Date).getTime() - new Date(e).getTime();
            return 26784e5 < a ? (a = new Date(e), i[0][0] = n.digit(a.getFullYear(), 4), i[0][1] = n.digit(a.getMonth() + 1), i[0][2] = n.digit(a.getDate()), t || (i[1][0] = n.digit(a.getHours()), i[1][1] = n.digit(a.getMinutes()), i[1][2] = n.digit(a.getSeconds())), i[0].join("-") + " " + i[1].join(":")) : 864e5 <= a ? (a / 1e3 / 60 / 60 / 24 | 0) + "天前" : 36e5 <= a ? (a / 1e3 / 60 / 60 | 0) + "小时前" : 18e4 <= a ? (a / 1e3 / 60 | 0) + "分钟前" : a < 0 ? "未来" : "刚刚"
        }, digit: function (e, t) {
            var n = "";
            t = t || 2;
            for (var i = (e = String(e)).length; i < t; i++) n += "0";
            return e < Math.pow(10, t) ? n + (0 | e) : e
        }, toDateString: function (e, t) {
            if (null === e || "" === e) return "";
            var n = this, i = new Date(function () {
                    if (e) return !isNaN(e) && "string" == typeof e ? parseInt(e) : e
                }() || new Date), a = [n.digit(i.getFullYear(), 4), n.digit(i.getMonth() + 1), n.digit(i.getDate())],
                n = [n.digit(i.getHours()), n.digit(i.getMinutes()), n.digit(i.getSeconds())];
            return i.getDate() ? (t = t || "yyyy-MM-dd HH:mm:ss").replace(/yyyy/g, a[0]).replace(/MM/g, a[1]).replace(/dd/g, a[2]).replace(/HH/g, n[0]).replace(/mm/g, n[1]).replace(/ss/g, n[2]) : (o.error('Invalid Msec for "util.toDateString(Msec)"'), "")
        }, escape: function (e) {
            return String(e || "").replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
        }, unescape: function (e) {
            return String(e || "").replace(/\&amp;/g, "&").replace(/\&lt;/g, "<").replace(/\&gt;/g, ">").replace(/\&#39;/, "'").replace(/\&quot;/, '"')
        }, toVisibleArea: function (e) {
            var t, n, i, a, o, r, l, s;
            (e = u.extend({
                margin: 160,
                duration: 200,
                type: "y"
            }, e)).scrollElem[0] && e.thisElem[0] && (t = e.scrollElem, n = e.thisElem, a = (s = "y" === e.type) ? "top" : "left", o = t[i = s ? "scrollTop" : "scrollLeft"](), r = t[s ? "height" : "width"](), l = t.offset()[a], s = {}, ((l = n.offset()[a] - l) > r - e.margin || l < e.margin) && (s[i] = l - r / 2 + o, t.animate(s, e.duration)))
        }, event: function (n, i, e) {
            var t = u("body");
            return e = e || "click", i = a.event[n] = u.extend(!0, a.event[n], i) || {}, a.event.UTIL_EVENT_CALLBACK = a.event.UTIL_EVENT_CALLBACK || {}, t.off(e, "*[" + n + "]", a.event.UTIL_EVENT_CALLBACK[n]), a.event.UTIL_EVENT_CALLBACK[n] = function () {
                var e = u(this), t = e.attr(n);
                "function" == typeof i[t] && i[t].call(this, e)
            }, t.on(e, "*[" + n + "]", a.event.UTIL_EVENT_CALLBACK[n]), i
        }
    };
    e("util", a)
}), layui.define("jquery", function (e) {
    "use strict";

    function t() {
        this.config = {}
    }

    var u = layui.$, d = (layui.hint(), layui.device()), l = "element", s = "layui-this", f = "layui-show";
    t.prototype.set = function (e) {
        return u.extend(!0, this.config, e), this
    }, t.prototype.on = function (e, t) {
        return layui.onevent.call(this, l, e, t)
    }, t.prototype.tabAdd = function (e, t) {
        var n, i = u(".layui-tab[lay-filter=" + e + "]"), a = i.children(".layui-tab-title"),
            o = a.children(".layui-tab-bar"), e = i.children(".layui-tab-content"),
            i = "<li" + (n = [], layui.each(t, function (e, t) {
                /^(title|content)$/.test(e) || n.push("lay-" + e + '="' + t + '"')
            }), 0 < n.length && n.unshift(""), n.join(" ")) + ">" + (t.title || "unnaming") + "</li>";
        return o[0] ? o.before(i) : a.append(i), e.append('<div class="layui-tab-item">' + (t.content || "") + "</div>"), x.hideTabMore(!0), x.tabAuto(), this
    }, t.prototype.tabDelete = function (e, t) {
        t = u(".layui-tab[lay-filter=" + e + "]").children(".layui-tab-title").find('>li[lay-id="' + t + '"]');
        return x.tabDelete(null, t), this
    }, t.prototype.tabChange = function (e, t) {
        t = u(".layui-tab[lay-filter=" + e + "]").children(".layui-tab-title").find('>li[lay-id="' + t + '"]');
        return x.tabClick.call(t[0], null, null, t), this
    }, t.prototype.tab = function (n) {
        n = n || {}, i.on("click", n.headerElem, function (e) {
            var t = u(this).index();
            x.tabClick.call(this, e, t, null, n)
        })
    }, t.prototype.progress = function (e, t) {
        var n = "layui-progress", e = u("." + n + "[lay-filter=" + e + "]").find("." + n + "-bar"),
            n = e.find("." + n + "-text");
        return e.css("width", t).attr("lay-percent", t), n.text(t), this
    };
    var p = ".layui-nav", h = "layui-nav-item", a = "layui-nav-bar", y = "layui-nav-tree", m = "layui-nav-child",
        g = "layui-nav-more", v = "layui-anim layui-anim-upbit", x = {
            tabClick: function (e, t, n, i) {
                i = i || {};
                var a = n || u(this), t = t || a.parent().children("li").index(a),
                    o = i.headerElem ? a.parent() : a.parents(".layui-tab").eq(0),
                    r = i.bodyElem ? u(i.bodyElem) : o.children(".layui-tab-content").children(".layui-tab-item"),
                    n = a.find("a"), i = o.attr("lay-filter");
                "javascript:;" !== n.attr("href") && "_blank" === n.attr("target") || (a.addClass(s).siblings().removeClass(s), r.eq(t).addClass(f).siblings().removeClass(f)), layui.event.call(this, l, "tab(" + i + ")", {
                    elem: o,
                    index: t
                })
            }, tabDelete: function (e, t) {
                var n = t || u(this).parent(), i = n.index(), a = n.parents(".layui-tab").eq(0),
                    o = a.children(".layui-tab-content").children(".layui-tab-item"), t = a.attr("lay-filter");
                n.hasClass(s) && (n.next()[0] ? x.tabClick.call(n.next()[0], null, i + 1) : n.prev()[0] && x.tabClick.call(n.prev()[0], null, i - 1)), n.remove(), o.eq(i).remove(), setTimeout(function () {
                    x.tabAuto()
                }, 50), layui.event.call(this, l, "tabDelete(" + t + ")", {elem: a, index: i})
            }, tabAuto: function () {
                var i = "layui-tab-bar", a = "layui-tab-close", o = this;
                u(".layui-tab").each(function () {
                    var e = u(this), t = e.children(".layui-tab-title"),
                        n = (e.children(".layui-tab-content").children(".layui-tab-item"), 'lay-stope="tabmore"'),
                        n = u('<span class="layui-unselect layui-tab-bar" ' + n + "><i " + n + ' class="layui-icon">&#xe61a;</i></span>');
                    o === window && 8 != d.ie && x.hideTabMore(!0), e.attr("lay-allowClose") && t.find("li").each(function () {
                        var e, t = u(this);
                        t.find("." + a)[0] || ((e = u('<i class="layui-icon layui-icon-close layui-unselect ' + a + '"></i>')).on("click", x.tabDelete), t.append(e))
                    }), "string" != typeof e.attr("lay-unauto") && (t.prop("scrollWidth") > t.outerWidth() + 1 ? t.find("." + i)[0] || (t.append(n), e.attr("overflow", ""), n.on("click", function (e) {
                        t[this.title ? "removeClass" : "addClass"]("layui-tab-more"), this.title = this.title ? "" : "收缩"
                    })) : (t.find("." + i).remove(), e.removeAttr("overflow")))
                })
            }, hideTabMore: function (e) {
                var t = u(".layui-tab-title");
                !0 !== e && "tabmore" === u(e.target).attr("lay-stope") || (t.removeClass("layui-tab-more"), t.find(".layui-tab-bar").attr("title", ""))
            }, clickThis: function () {
                var e = u(this), t = e.parents(p), n = t.attr("lay-filter"), i = e.parent(), a = e.siblings("." + m),
                    o = "string" == typeof i.attr("lay-unselect");
                "javascript:;" !== e.attr("href") && "_blank" === e.attr("target") || o || a[0] || (t.find("." + s).removeClass(s), i.addClass(s)), t.hasClass(y) && (a.removeClass(v), a[0] && (i["none" === a.css("display") ? "addClass" : "removeClass"](h + "ed"), "all" === t.attr("lay-shrink") && i.siblings().removeClass(h + "ed"))), layui.event.call(this, l, "nav(" + n + ")", e)
            }, collapse: function () {
                var e = u(this), t = e.find(".layui-colla-icon"), n = e.siblings(".layui-colla-content"),
                    i = e.parents(".layui-collapse").eq(0), a = i.attr("lay-filter"), o = "none" === n.css("display");
                "string" == typeof i.attr("lay-accordion") && ((i = i.children(".layui-colla-item").children("." + f)).siblings(".layui-colla-title").children(".layui-colla-icon").html("&#xe602;"), i.removeClass(f)), n[o ? "addClass" : "removeClass"](f), t.html(o ? "&#xe61a;" : "&#xe602;"), layui.event.call(this, l, "collapse(" + a + ")", {
                    title: e,
                    content: n,
                    show: o
                })
            }
        };
    t.prototype.init = function (e, t) {
        var n = t ? '[lay-filter="' + t + '"]' : "", t = {
            tab: function () {
                x.tabAuto.call({})
            }, nav: function () {
                var r = {}, l = {}, s = {}, c = "layui-nav-title";
                u(p + n).each(function (e) {
                    var t = u(this), n = u('<span class="' + a + '"></span>'), i = t.find("." + h);
                    t.find("." + a)[0] || (t.append(n), (t.hasClass(y) ? i.find("dd,>." + c) : i).on("mouseenter", function () {
                        !function (e, t, n) {
                            var i, a = u(this), o = a.find("." + m);
                            t.hasClass(y) ? (i = a.children("." + c), e.css({
                                top: a.offset().top - t.offset().top,
                                height: (i[0] ? i : a).outerHeight(),
                                opacity: 1
                            })) : (o.addClass(v), o.hasClass("layui-nav-child-c") && o.css({left: -(o.outerWidth() - a.width()) / 2}), o[0] ? e.css({
                                left: e.position().left + e.width() / 2,
                                width: 0,
                                opacity: 0
                            }) : e.css({
                                left: a.position().left + parseFloat(a.css("marginLeft")),
                                top: a.position().top + a.height() - e.height()
                            }), r[n] = setTimeout(function () {
                                e.css({width: o[0] ? 0 : a.width(), opacity: o[0] ? 0 : 1})
                            }, d.ie && d.ie < 10 ? 0 : 200), clearTimeout(s[n]), "block" === o.css("display") && clearTimeout(l[n]), l[n] = setTimeout(function () {
                                o.addClass(f), a.find("." + g).addClass(g + "d")
                            }, 300))
                        }.call(this, n, t, e)
                    }).on("mouseleave", function () {
                        t.hasClass(y) ? n.css({
                            height: 0,
                            opacity: 0
                        }) : (clearTimeout(l[e]), l[e] = setTimeout(function () {
                            t.find("." + m).removeClass(f), t.find("." + g).removeClass(g + "d")
                        }, 300))
                    }), t.on("mouseleave", function () {
                        clearTimeout(r[e]), s[e] = setTimeout(function () {
                            t.hasClass(y) || n.css({width: 0, left: n.position().left + n.width() / 2, opacity: 0})
                        }, 200)
                    })), i.find("a").each(function () {
                        var e = u(this);
                        (e.parent(), e.siblings("." + m))[0] && !e.children("." + g)[0] && e.append('<i class="layui-icon layui-icon-down ' + g + '"></i>'), e.off("click", x.clickThis).on("click", x.clickThis)
                    })
                })
            }, breadcrumb: function () {
                u(".layui-breadcrumb" + n).each(function () {
                    var e = u(this), t = "lay-separator", n = e.attr(t) || "/", i = e.find("a");
                    i.next("span[" + t + "]")[0] || (i.each(function (e) {
                        e !== i.length - 1 && u(this).after("<span " + t + ">" + n + "</span>")
                    }), e.css("visibility", "visible"))
                })
            }, progress: function () {
                var i = "layui-progress";
                u("." + i + n).each(function () {
                    var e = u(this), t = e.find(".layui-progress-bar"), n = t.attr("lay-percent");
                    t.css("width", /^.+\/.+$/.test(n) ? 100 * new Function("return " + n)() + "%" : n), e.attr("lay-showPercent") && setTimeout(function () {
                        t.html('<span class="' + i + '-text">' + n + "</span>")
                    }, 350)
                })
            }, collapse: function () {
                u(".layui-collapse" + n).each(function () {
                    u(this).find(".layui-colla-item").each(function () {
                        var e = u(this), t = e.find(".layui-colla-title"),
                            e = "none" === e.find(".layui-colla-content").css("display");
                        t.find(".layui-colla-icon").remove(), t.append('<i class="layui-icon layui-colla-icon">' + (e ? "&#xe602;" : "&#xe61a;") + "</i>"), t.off("click", x.collapse).on("click", x.collapse)
                    })
                })
            }
        };
        return t[e] ? t[e]() : layui.each(t, function (e, t) {
            t()
        })
    }, t.prototype.render = t.prototype.init;
    var n = new t, i = u(document);
    u(function () {
        n.render()
    });
    i.on("click", ".layui-tab-title li", x.tabClick), i.on("click", x.hideTabMore), u(window).on("resize", x.tabAuto), e(l, n)
}), layui.define("layer", function (e) {
    "use strict";

    function g(e) {
        this.config = v.extend({}, this.config, i.config, e), this.render()
    }

    var v = layui.$, t = layui.layer, n = layui.hint(), x = layui.device(), i = {
            config: {}, set: function (e) {
                return this.config = v.extend({}, this.config, e), this
            }, on: function (e, t) {
                return layui.onevent.call(this, a, e, t)
            }
        }, a = "upload", o = "layui-upload-file", r = "layui-upload-form", b = "layui-upload-iframe",
        k = "layui-upload-choose";
    g.prototype.config = {
        accept: "images",
        exts: "",
        auto: !0,
        bindAction: "",
        url: "",
        field: "file",
        acceptMime: "",
        method: "post",
        data: {},
        drag: !0,
        size: 0,
        number: 0,
        multiple: !1
    }, g.prototype.render = function (e) {
        (e = this.config).elem = v(e.elem), e.bindAction = v(e.bindAction), this.file(), this.events()
    }, g.prototype.file = function () {
        var e = this, t = e.config,
            n = e.elemFile = v(['<input class="' + o + '" type="file" accept="' + t.acceptMime + '" name="' + t.field + '"', t.multiple ? " multiple" : "", ">"].join("")),
            i = t.elem.next();
        (i.hasClass(o) || i.hasClass(r)) && i.remove(), x.ie && x.ie < 10 && t.elem.wrap('<div class="layui-upload-wrap"></div>'), e.isFile() ? (e.elemFile = t.elem, t.field = t.elem[0].name) : t.elem.after(n), x.ie && x.ie < 10 && e.initIE()
    }, g.prototype.initIE = function () {
        var n, e = this.config,
            t = v('<iframe id="' + b + '" class="' + b + '" name="' + b + '" frameborder="0"></iframe>'),
            i = v(['<form target="' + b + '" class="' + r + '" method="post" key="set-mine" enctype="multipart/form-data" action="' + e.url + '">', "</form>"].join(""));
        v("#" + b)[0] || v("body").append(t), e.elem.next().hasClass(r) || (this.elemFile.wrap(i), e.elem.next("." + r).append((n = [], layui.each(e.data, function (e, t) {
            t = "function" == typeof t ? t() : t, n.push('<input type="hidden" name="' + e + '" value="' + t + '">')
        }), n.join(""))))
    }, g.prototype.msg = function (e) {
        return t.msg(e, {icon: 2, shift: 6})
    }, g.prototype.isFile = function () {
        var e = this.config.elem[0];
        if (e) return "input" === e.tagName.toLocaleLowerCase() && "file" === e.type
    }, g.prototype.preview = function (i) {
        window.FileReader && layui.each(this.chooseFiles, function (e, t) {
            var n = new FileReader;
            n.readAsDataURL(t), n.onload = function () {
                i && i(e, t, this.result)
            }
        })
    }, g.prototype.upload = function (n, e) {
        var i, a, o, t, r, l = this, s = l.config, c = l.elemFile[0], u = function () {
            function t() {
                s.multiple && a + o === l.fileLength && "function" == typeof s.allDone && s.allDone({
                    total: l.fileLength,
                    successful: a,
                    aborted: o
                })
            }

            var a = 0, o = 0, e = n || l.files || l.chooseFiles || c.files;
            layui.each(e, function (n, e) {
                var i = new FormData;
                i.append(s.field, e), layui.each(s.data, function (e, t) {
                    t = "function" == typeof t ? t() : t, i.append(e, t)
                });
                e = {
                    url: s.url,
                    type: "post",
                    data: i,
                    contentType: !1,
                    processData: !1,
                    dataType: "json",
                    headers: s.headers || {},
                    success: function (e) {
                        a++, f(n, e), t()
                    },
                    error: function () {
                        o++, l.msg("请求上传接口出现异常"), p(n), t()
                    }
                };
                "function" == typeof s.progress && (e.xhr = function () {
                    var e = v.ajaxSettings.xhr();
                    return e.upload.addEventListener("progress", function (e) {
                        var t;
                        e.lengthComputable && (t = Math.floor(e.loaded / e.total * 100), s.progress(t, (s.item || s.elem)[0], e, n))
                    }), e
                }), v.ajax(e)
            })
        }, d = function () {
            var n = v("#" + b);
            l.elemFile.parent().submit(), clearInterval(g.timer), g.timer = setInterval(function () {
                var e, t = n.contents().find("body");
                try {
                    e = t.text()
                } catch (e) {
                    l.msg("获取上传后的响应信息出现异常"), clearInterval(g.timer), p()
                }
                e && (clearInterval(g.timer), t.html(""), f(0, e))
            }, 30)
        }, f = function (e, t) {
            if (l.elemFile.next("." + k).remove(), c.value = "", "object" != typeof t) try {
                t = JSON.parse(t)
            } catch (e) {
                return t = {}, l.msg("请对上传接口返回有效JSON")
            }
            "function" == typeof s.done && s.done(t, e || 0, function (e) {
                l.upload(e)
            })
        }, p = function (e) {
            s.auto && (c.value = ""), "function" == typeof s.error && s.error(e || 0, function (e) {
                l.upload(e)
            })
        }, h = s.exts, y = (a = [], layui.each(n || l.chooseFiles, function (e, t) {
            a.push(t.name)
        }), a), m = {
            preview: function (e) {
                l.preview(e)
            }, upload: function (e, t) {
                var n = {};
                n[e] = t, l.upload(n)
            }, pushFile: function () {
                return l.files = l.files || {}, layui.each(l.chooseFiles, function (e, t) {
                    l.files[e] = t
                }), l.files
            }, resetFile: function (e, t, n) {
                n = new File([t], n);
                l.files = l.files || {}, l.files[e] = n
            }
        };
        if (0 !== (y = 0 === y.length ? c.value.match(/[^\/\\]+\..+/g) || [] || "" : y).length) {
            switch (s.accept) {
                case"file":
                    if (h && !RegExp("\\w\\.(" + h + ")$", "i").test(escape(y))) return l.msg(gettext("files_contain_unsupported_format")), c.value = "";
                    break;
                case"video":
                    if (!RegExp("\\w\\.(" + (h || "avi|mp4|wma|rmvb|rm|flash|3gp|flv") + ")$", "i").test(escape(y))) return l.msg(gettext("videos_contain_unsupported_format")), c.value = "";
                    break;
                case"audio":
                    if (!RegExp("\\w\\.(" + (h || "mp3|wav|mid") + ")$", "i").test(escape(y))) return l.msg(gettext("audios_contain_unsupported_format")), c.value = "";
                    break;
                default:
                    if (layui.each(y, function (e, t) {
                        RegExp("\\w\\.(" + (h || "jpg|png|gif|bmp|jpeg$") + ")", "i").test(escape(t)) || (i = !0)
                    }), i) return l.msg(gettext("pictures_contain_unsupported_format")), c.value = ""
            }
            if (l.fileLength = (t = 0, r = n || l.files || l.chooseFiles || c.files, layui.each(r, function () {
                t++
            }), t), s.number && l.fileLength > s.number) return l.msg("同时最多只能上传的数量为：" + s.number);
            if (0 < s.size && !(x.ie && x.ie < 10)) if (layui.each(l.chooseFiles, function (e, t) {
                t.size > 1024 * s.size && (t = 1 <= (t = s.size / 1024) ? t.toFixed(2) + "MB" : s.size + "KB", c.value = "", o = t)
            }), o) return l.msg("文件不能超过" + o);
            !function () {
                if ("choose" !== e && !s.auto || (s.choose && s.choose(m), "choose" !== e)) s.before && s.before(m), x.ie ? (9 < x.ie ? u : d)() : u()
            }()
        }
    }, g.prototype.reload = function (e) {
        delete (e = e || {}).elem, delete e.bindAction;
        (e = this.config = v.extend({}, this.config, i.config, e)).elem.next().attr({
            name: e.name,
            accept: e.acceptMime,
            multiple: e.multiple
        })
    }, g.prototype.events = function () {
        function i(e) {
            o.chooseFiles = {}, layui.each(e, function (e, t) {
                var n = (new Date).getTime();
                o.chooseFiles[n + "-" + e] = t
            })
        }

        function a(e, t) {
            var n = o.elemFile,
                e = (r.item || r.elem, 1 < e.length ? e.length + "个文件" : (e[0] || {}).name || n[0].value.match(/[^\/\\]+\..+/g) || [] || "");
            n.next().hasClass(k) && n.next().remove(), o.upload(null, "choose"), o.isFile() || r.choose || n.after('<span class="layui-inline ' + k + '">' + e + "</span>")
        }

        var o = this, r = o.config;
        r.elem.off("upload.start").on("upload.start", function () {
            var e = v(this), t = e.attr("lay-data");
            if (t) try {
                t = new Function("return " + t)(), o.config = v.extend({}, r, t)
            } catch (e) {
                n.error("Upload element property lay-data configuration item has a syntax error: " + t)
            }
            o.config.item = e, o.elemFile[0].click()
        }), x.ie && x.ie < 10 || r.elem.off("upload.over").on("upload.over", function () {
            v(this).attr("lay-over", "")
        }).off("upload.leave").on("upload.leave", function () {
            v(this).removeAttr("lay-over")
        }).off("upload.drop").on("upload.drop", function (e, t) {
            var n = v(this), t = t.originalEvent.dataTransfer.files || [];
            n.removeAttr("lay-over"), i(t), r.auto ? o.upload(t) : a(t)
        }), o.elemFile.off("upload.change").on("upload.change", function () {
            var e = this.files || [];
            i(e), r.auto ? o.upload() : a(e)
        }), r.bindAction.off("upload.action").on("upload.action", function () {
            o.upload()
        }), r.elem.data("haveEvents") || (o.elemFile.on("change", function () {
            v(this).trigger("upload.change")
        }), r.elem.on("click", function () {
            o.isFile() || v(this).trigger("upload.start")
        }), r.drag && r.elem.on("dragover", function (e) {
            e.preventDefault(), v(this).trigger("upload.over")
        }).on("dragleave", function (e) {
            v(this).trigger("upload.leave")
        }).on("drop", function (e) {
            e.preventDefault(), v(this).trigger("upload.drop", e)
        }), r.bindAction.on("click", function () {
            v(this).trigger("upload.action")
        }), r.elem.data("haveEvents", !0))
    }, i.render = function (e) {
        e = new g(e);
        return function () {
            var t = this;
            return {
                upload: function (e) {
                    t.upload.call(t, e)
                }, reload: function (e) {
                    t.reload.call(t, e)
                }, config: t.config
            }
        }.call(e)
    }, e(a, i)
}), layui.define(["jquery", "laytpl", "lay"], function (e) {
    "use strict";

    function o() {
        var t = this, e = t.config, n = e.id;
        return o.that[n] = t, {
            config: e, reload: function (e) {
                t.reload.call(t, e)
            }
        }
    }

    function t(e) {
        this.index = ++p.index, this.config = u.extend({}, this.config, p.config, e), this.init()
    }

    var u = layui.$, d = layui.laytpl, n = layui.hint(), r = layui.device().mobile ? "click" : "mousedown",
        l = "dropdown", f = "layui_" + l + "_index", p = {
            config: {}, index: layui[l] ? layui[l].index + 1e4 : 0, set: function (e) {
                return this.config = u.extend({}, this.config, e), this
            }, on: function (e, t) {
                return layui.onevent.call(this, l, e, t)
            }
        }, i = "layui-menu-item-up", a = "layui-menu-item-down", h = "layui-menu-body-title", s = "layui-menu-item-group",
        y = "layui-menu-item-parent", c = "layui-menu-item-checked", m = "layui-menu-item-checked2",
        g = "layui-menu-body-panel", v = "layui-menu-body-panel-left", x = "." + s + ">." + h;
    t.prototype.config = {
        trigger: "click",
        content: "",
        className: "",
        style: "",
        show: !1,
        isAllowSpread: !0,
        isSpreadItem: !0,
        data: [],
        delay: 300
    }, t.prototype.reload = function (e) {
        this.config = u.extend({}, this.config, e), this.init(!0)
    }, t.prototype.init = function (e) {
        var t = this, n = t.config, i = n.elem = u(n.elem);
        if (1 < i.length) return layui.each(i, function () {
            p.render(u.extend({}, n, {elem: this}))
        }), t;
        if (!e && i[0] && i.data(f)) {
            i = o.getThis(i.data(f));
            return i ? i.reload(n) : void 0
        }
        n.id = "id" in n ? n.id : t.index, n.show && t.render(e), t.events()
    }, t.prototype.render = function (e) {
        var t, i = this, s = i.config, n = u("body"), c = function (l, e) {
                return layui.each(e, function (e, t) {
                    var n, i = t.child && 0 < t.child.length, a = ("isSpreadItem" in t ? t : s).isSpreadItem,
                        o = t.templet ? d(t.templet).render(t) : s.templet ? d(s.templet).render(t) : t.title,
                        r = (i && (t.type = t.type || "parent"), t.type ? {
                            group: "group",
                            parent: "parent",
                            "-": "-"
                        }[t.type] || "parent" : "");
                    ("-" === r || t.title || t.id || i) && ((a = u(["<li" + (n = {
                        group: "layui-menu-item-group" + (s.isAllowSpread ? a ? " layui-menu-item-down" : " layui-menu-item-up" : ""),
                        parent: y,
                        "-": "layui-menu-item-divider"
                    }, i || r ? ' class="' + n[r] + '"' : "") + ">", (o = "href" in t ? '<a href="' + t.href + '" target="' + (t.target || "_self") + '">' + o + "</a>" : o, i ? '<div class="' + h + '">' + o + ("parent" === r ? '<i class="layui-icon layui-icon-right"></i>' : "group" === r && s.isAllowSpread ? '<i class="layui-icon layui-icon-' + (a ? "up" : "down") + '"></i>' : "") + "</div>" : '<div class="' + h + '">' + o + "</div>"), "</li>"].join(""))).data("item", t), i && (o = u('<div class="layui-panel layui-menu-body-panel"></div>'), i = u("<ul></ul>"), "parent" === r ? (o.append(c(i, t.child)), a.append(o)) : a.append(c(i, t.child))), l.append(a))
                }), l
            },
            a = ['<div class="layui-dropdown layui-border-box layui-panel layui-anim layui-anim-downbit">', "</div>"].join("");
        !(e = "contextmenu" === s.trigger || lay.isTopElem(s.elem[0]) ? !0 : e) && s.elem.data(f + "_opened") || (i.elemView = u(a), i.elemView.append(s.content || (t = u('<ul class="layui-menu layui-dropdown-menu"></ul>'), 0 < s.data.length ? c(t, s.data) : t.html('<li class="layui-menu-item-none">no menu</li>'), t)), s.className && i.elemView.addClass(s.className), s.style && i.elemView.attr("style", s.style), p.thisId = s.id, i.remove(), n.append(i.elemView), s.elem.data(f + "_opened", !0), i.position(), (o.prevElem = i.elemView).data("prevElem", s.elem), i.elemView.find(".layui-menu").on(r, function (e) {
            lay.stope(e)
        }), i.elemView.find(".layui-menu li").on("click", function (e) {
            var t = u(this), n = t.data("item") || {};
            n.child && 0 < n.child.length || "-" === n.type || (i.remove(), "function" == typeof s.click && s.click(n, t))
        }), i.elemView.find(x).on("click", function (e) {
            var t = u(this).parent();
            "group" === (t.data("item") || {}).type && s.isAllowSpread && o.spread(t)
        }), "mouseenter" === s.trigger && i.elemView.on("mouseenter", function () {
            clearTimeout(o.timer)
        }).on("mouseleave", function () {
            i.delayRemove()
        }))
    }, t.prototype.position = function (e) {
        var t = this.config;
        lay.position(t.elem[0], this.elemView[0], {
            position: t.position,
            e: this.e,
            clickType: "contextmenu" === t.trigger ? "right" : null
        })
    }, t.prototype.remove = function () {
        var e = (this.config, o.prevElem);
        e && (e.data("prevElem") && e.data("prevElem").data(f + "_opened", !1), e.remove())
    }, t.prototype.delayRemove = function () {
        var e = this, t = e.config;
        clearTimeout(o.timer), o.timer = setTimeout(function () {
            e.remove()
        }, t.delay)
    }, t.prototype.events = function () {
        var t = this, n = t.config;
        "hover" === n.trigger && (n.trigger = "mouseenter"), t.prevElem && t.prevElem.off(n.trigger, t.prevElemCallback), t.prevElem = n.elem, t.prevElemCallback = function (e) {
            clearTimeout(o.timer), t.e = e, t.render(), e.preventDefault(), "function" == typeof n.ready && n.ready(t.elemView, n.elem, t.e.target)
        }, n.elem.on(n.trigger, t.prevElemCallback), "mouseenter" === n.trigger && n.elem.on("mouseleave", function () {
            t.delayRemove()
        })
    }, o.that = {}, o.getThis = function (e) {
        var t = o.that[e];
        return t || n.error(e ? l + " instance with ID '" + e + "' not found" : "ID argument required"), t
    }, o.spread = function (e) {
        var t = e.children("." + h).find(".layui-icon");
        e.hasClass(i) ? (e.removeClass(i).addClass(a), t.removeClass("layui-icon-down").addClass("layui-icon-up")) : (e.removeClass(a).addClass(i), t.removeClass("layui-icon-up").addClass("layui-icon-down"))
    }, function () {
        var i = u(window), e = u(document);
        i.on("resize", function () {
            if (p.thisId) {
                var e = o.getThis(p.thisId);
                if (e) {
                    if (!e.elemView[0] || !u(".layui-dropdown")[0]) return !1;
                    "contextmenu" === e.config.trigger ? e.remove() : e.position()
                }
            }
        }), e.on(r, function (e) {
            var t, n;
            !p.thisId || (t = o.getThis(p.thisId)) && (n = t.config, !lay.isTopElem(n.elem[0]) && "contextmenu" !== n.trigger && (e.target === n.elem[0] || n.elem.find(e.target)[0] || e.target === t.elemView[0] || t.elemView && t.elemView.find(e.target)[0]) || t.remove())
        });
        var t = ".layui-menu:not(.layui-dropdown-menu) li";
        e.on("click", t, function (e) {
            var t = u(this), n = t.parents(".layui-menu").eq(0), i = t.hasClass(s) || t.hasClass(y),
                a = n.attr("lay-filter") || n.attr("id"), o = lay.options(this);
            t.hasClass("layui-menu-item-divider") || i || (n.find("." + c).removeClass(c), n.find("." + m).removeClass(m), t.addClass(c), t.parents("." + y).addClass(m), layui.event.call(this, l, "click(" + a + ")", o))
        }), e.on("click", t + x, function (e) {
            var t = u(this).parents("." + s + ":eq(0)"), n = lay.options(t[0]);
            "isAllowSpread" in n && !n.isAllowSpread || o.spread(t)
        });
        t = ".layui-menu ." + y;
        e.on("mouseenter", t, function (e) {
            var t, n = u(this).find("." + g);
            n[0] && ((t = n[0].getBoundingClientRect()).right > i.width() && (n.addClass(v), (t = n[0].getBoundingClientRect()).left < 0 && n.removeClass(v)), t.bottom > i.height() && n.eq(0).css("margin-top", -(t.bottom - i.height())))
        }).on("mouseleave", t, function (e) {
            var t = u(this).children("." + g);
            t.removeClass(v), t.css("margin-top", 0)
        })
    }(), p.reload = function (e, t) {
        e = o.getThis(e);
        return e ? (e.reload(t), o.call(e)) : this
    }, p.render = function (e) {
        e = new t(e);
        return o.call(e)
    }, e(l, p)
}), layui.define("jquery", function (e) {
    "use strict";

    function t(e) {
        this.index = ++n.index, this.config = m.extend({}, this.config, n.config, e), this.render()
    }

    var m = layui.jquery, n = {
            config: {}, index: layui.slider ? layui.slider.index + 1e4 : 0, set: function (e) {
                return this.config = m.extend({}, this.config, e), this
            }, on: function (e, t) {
                return layui.onevent.call(this, i, e, t)
            }
        }, i = "slider", u = "layui-disabled", g = "layui-slider-bar", v = "layui-slider-wrap", x = "layui-slider-wrap-btn",
        b = "layui-slider-tips", k = "layui-slider-input-txt", w = "layui-slider-hover";
    t.prototype.config = {
        type: "default",
        min: 0,
        max: 100,
        value: 0,
        step: 1,
        showstep: !1,
        tips: !0,
        input: !1,
        range: !1,
        height: 200,
        disabled: !1,
        theme: "#009688"
    }, t.prototype.render = function () {
        var e, n = this, i = n.config;
        i.step < 1 && (i.step = 1), i.max < i.min && (i.max = i.min + i.step), i.range ? (i.value = "object" == typeof i.value ? i.value : [i.min, i.value], a = Math.min(i.value[0], i.value[1]), t = Math.max(i.value[0], i.value[1]), i.value[0] = a > i.min ? a : i.min, i.value[1] = t > i.min ? t : i.min, i.value[0] = i.value[0] > i.max ? i.max : i.value[0], i.value[1] = i.value[1] > i.max ? i.max : i.value[1], e = Math.floor((i.value[0] - i.min) / (i.max - i.min) * 100), a = (o = Math.floor((i.value[1] - i.min) / (i.max - i.min) * 100)) - e + "%", e += "%", o += "%") : ("object" == typeof i.value && (i.value = Math.min.apply(null, i.value)), i.value < i.min && (i.value = i.min), i.value > i.max && (i.value = i.max), a = Math.floor((i.value - i.min) / (i.max - i.min) * 100) + "%");
        var t = i.disabled ? "#c2c2c2" : i.theme,
            a = '<div class="layui-slider ' + ("vertical" === i.type ? "layui-slider-vertical" : "") + '">' + (i.tips ? '<div class="layui-slider-tips"></div>' : "") + '<div class="layui-slider-bar" style="background:' + t + "; " + ("vertical" === i.type ? "height" : "width") + ":" + a + ";" + ("vertical" === i.type ? "bottom" : "left") + ":" + (e || 0) + ';"></div><div class="layui-slider-wrap" style="' + ("vertical" === i.type ? "bottom" : "left") + ":" + (e || a) + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + t + ';"></div></div>' + (i.range ? '<div class="layui-slider-wrap" style="' + ("vertical" === i.type ? "bottom" : "left") + ":" + o + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + t + ';"></div></div>' : "") + "</div>",
            o = m(i.elem), t = o.next(".layui-slider");
        if (t[0] && t.remove(), n.elemTemp = m(a), i.range ? (n.elemTemp.find("." + v).eq(0).data("value", i.value[0]), n.elemTemp.find("." + v).eq(1).data("value", i.value[1])) : n.elemTemp.find("." + v).data("value", i.value), o.html(n.elemTemp), "vertical" === i.type && n.elemTemp.height(i.height + "px"), i.showstep) {
            for (var r = (i.max - i.min) / i.step, l = "", s = 1; s < 1 + r; s++) {
                var c = 100 * s / r;
                c < 100 && (l += '<div class="layui-slider-step" style="' + ("vertical" === i.type ? "bottom" : "left") + ":" + c + '%"></div>')
            }
            n.elemTemp.append(l)
        }
        i.input && !i.range && (a = m('<div class="layui-slider-input layui-input"><div class="layui-slider-input-txt"><input type="text" class="layui-input"></div><div class="layui-slider-input-btn"><i class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div></div>'), o.css("position", "relative"), o.append(a), o.find("." + k).children("input").val(i.value), "vertical" === i.type ? a.css({
            left: 0,
            top: -48
        }) : n.elemTemp.css("margin-right", a.outerWidth() + 15)), i.disabled ? (n.elemTemp.addClass(u), n.elemTemp.find("." + x).addClass(u)) : n.slide(), n.elemTemp.find("." + x).on("mouseover", function () {
            var e = "vertical" === i.type ? i.height : n.elemTemp[0].offsetWidth, t = n.elemTemp.find("." + v),
                t = ("vertical" === i.type ? e - m(this).parent()[0].offsetTop - t.height() : m(this).parent()[0].offsetLeft) / e * 100,
                e = m(this).parent().data("value"), e = i.setTips ? i.setTips(e) : e;
            n.elemTemp.find("." + b).html(e), "vertical" === i.type ? n.elemTemp.find("." + b).css({
                bottom: t + "%",
                "margin-bottom": "20px",
                display: "inline-block"
            }) : n.elemTemp.find("." + b).css({left: t + "%", display: "inline-block"})
        }).on("mouseout", function () {
            n.elemTemp.find("." + b).css("display", "none")
        })
    }, t.prototype.slide = function (e, t, n) {
        var l = this.config, s = this.elemTemp, c = function () {
                return "vertical" === l.type ? l.height : s[0].offsetWidth
            }, u = s.find("." + v), r = s.next(".layui-slider-input"), d = r.children("." + k).children("input").val(),
            f = 100 / ((l.max - l.min) / Math.ceil(l.step)), p = function (e, t) {
                e = 100 < (e = 100 < Math.ceil(e) * f ? Math.ceil(e) * f : Math.round(e) * f) ? 100 : e, u.eq(t).css("vertical" === l.type ? "bottom" : "left", e + "%");
                var n = h(u[0].offsetLeft), i = l.range ? h(u[1].offsetLeft) : 0;
                "vertical" === l.type ? (s.find("." + b).css({
                    bottom: e + "%",
                    "margin-bottom": "20px"
                }), n = h(c() - u[0].offsetTop - u.height()), i = l.range ? h(c() - u[1].offsetTop - u.height()) : 0) : s.find("." + b).css("left", e + "%");
                var n = 100 < n ? 100 : n, i = 100 < i ? 100 : i, a = Math.min(n, i), i = Math.abs(n - i);
                "vertical" === l.type ? s.find("." + g).css({
                    height: i + "%",
                    bottom: a + "%"
                }) : s.find("." + g).css({width: i + "%", left: a + "%"});
                var o, e = l.min + Math.round((l.max - l.min) * e / 100);
                d = e, r.children("." + k).children("input").val(d), u.eq(t).data("value", e), s.find("." + b).html(l.setTips ? l.setTips(e) : e), l.range && (o = [u.eq(0).data("value"), u.eq(1).data("value")])[0] > o[1] && o.reverse(), l.change && l.change(l.range ? o : e)
            }, h = function (e) {
                var t = e / c() * 100 / f, n = Math.round(t) * f;
                return n = e == c() ? Math.ceil(t) * f : n
            }, y = m(['<div class="layui-auxiliar-moving" id="LAY-slider-moving"></div'].join(""));
        if ("set" === e) return p(t, n);
        s.find("." + x).each(function (o) {
            var r = m(this);
            r.on("mousedown", function (e) {
                e = e || window.event;
                var n = r.parent()[0].offsetLeft, i = e.clientX;
                "vertical" === l.type && (n = c() - r.parent()[0].offsetTop - u.height(), i = e.clientY);
                var t;

                function a() {
                    t && t(), y.remove()
                }

                e = function (e) {
                    e = e || window.event;
                    var t = n + ("vertical" === l.type ? i - e.clientY : e.clientX - i),
                        t = (t = (t = t < 0 ? 0 : t) > c() ? c() : t) / c() * 100 / f;
                    p(t, o), r.addClass(w), s.find("." + b).show(), e.preventDefault()
                }, t = function () {
                    r.removeClass(w), s.find("." + b).hide()
                }, m("#LAY-slider-moving")[0] || m("body").append(y), y.on("mousemove", e), y.on("mouseup", a).on("mouseleave", a)
            })
        }), s.on("click", function (e) {
            var t, n = m("." + x);
            !n.is(event.target) && 0 === n.has(event.target).length && n.length && (n = (t = (t = (t = "vertical" === l.type ? c() - e.clientY + m(this).offset().top : e.clientX - m(this).offset().left) < 0 ? 0 : t) > c() ? c() : t) / c() * 100 / f, t = l.range ? "vertical" === l.type ? Math.abs(t - parseInt(m(u[0]).css("bottom"))) > Math.abs(t - parseInt(m(u[1]).css("bottom"))) ? 1 : 0 : Math.abs(t - u[0].offsetLeft) > Math.abs(t - u[1].offsetLeft) ? 1 : 0 : 0, p(n, t), e.preventDefault())
        }), r.children(".layui-slider-input-btn").children("i").each(function (t) {
            m(this).on("click", function () {
                d = r.children("." + k).children("input").val();
                var e = ((d = 1 == t ? d - l.step < l.min ? l.min : Number(d) - l.step : Number(d) + l.step > l.max ? l.max : Number(d) + l.step) - l.min) / (l.max - l.min) * 100 / f;
                p(e, 0)
            })
        });

        function i() {
            var e = this.value;
            e = (e = (e = isNaN(e) ? 0 : e) < l.min ? l.min : e) > l.max ? l.max : e, e = ((this.value = e) - l.min) / (l.max - l.min) * 100 / f, p(e, 0)
        }

        r.children("." + k).children("input").on("keydown", function (e) {
            13 === e.keyCode && (e.preventDefault(), i.call(this))
        }).on("change", i)
    }, t.prototype.events = function () {
        this.config
    }, n.render = function (e) {
        e = new t(e);
        return function () {
            var n = this, i = n.config;
            return {
                setValue: function (e, t) {
                    return i.value = e, n.slide("set", e, t || 0)
                }, config: i
            }
        }.call(e)
    }, e(i, n)
}), layui.define("jquery", function (e) {
    "use strict";

    function x(e) {
        var t = {h: 0, s: 0, b: 0}, n = Math.min(e.r, e.g, e.b), i = Math.max(e.r, e.g, e.b), a = i - n;
        return t.b = i, t.s = 0 != i ? 255 * a / i : 0, 0 != t.s ? e.r == i ? t.h = (e.g - e.b) / a : e.g == i ? t.h = 2 + (e.b - e.r) / a : t.h = 4 + (e.r - e.g) / a : t.h = -1, i == n && (t.h = 0), t.h *= 60, t.h < 0 && (t.h += 360), t.s *= 100 / 255, t.b *= 100 / 255, t
    }

    function b(e) {
        var t = {}, n = e.h, i = 255 * e.s / 100, a = 255 * e.b / 100;
        return 0 == i ? t.r = t.g = t.b = a : (a = n % 60 * ((e = a) - (i = (255 - i) * a / 255)) / 60, (n = 360 == n ? 0 : n) < 60 ? (t.r = e, t.b = i, t.g = i + a) : n < 120 ? (t.g = e, t.b = i, t.r = e - a) : n < 180 ? (t.g = e, t.r = i, t.b = i + a) : n < 240 ? (t.b = e, t.r = i, t.g = e - a) : n < 300 ? (t.b = e, t.g = i, t.r = i + a) : n < 360 ? (t.r = e, t.g = i, t.b = e - a) : (t.r = 0, t.g = 0, t.b = 0)), {
            r: Math.round(t.r),
            g: Math.round(t.g),
            b: Math.round(t.b)
        }
    }

    function d(e) {
        var n = [(e = b(e)).r.toString(16), e.g.toString(16), e.b.toString(16)];
        return w.each(n, function (e, t) {
            1 == t.length && (n[e] = "0" + t)
        }), n.join("")
    }

    function k(e) {
        return {r: (e = e.match(/[0-9]{1,3}/g) || [])[0], g: e[1], b: e[2]}
    }

    function a(e) {
        this.index = ++t.index, this.config = w.extend({}, this.config, t.config, e), this.render()
    }

    var w = layui.jquery, t = {
            config: {}, index: layui.colorpicker ? layui.colorpicker.index + 1e4 : 0, set: function (e) {
                return this.config = w.extend({}, this.config, e), this
            }, on: function (e, t) {
                return layui.onevent.call(this, "colorpicker", e, t)
            }
        }, i = "layui-colorpicker", o = ".layui-colorpicker-main", C = "layui-icon-down", T = "layui-icon-close",
        E = "layui-colorpicker-trigger-span", S = "layui-colorpicker-trigger-i", A = "layui-colorpicker-side-slider",
        L = "layui-colorpicker-basis", D = "layui-colorpicker-alpha-bgcolor", N = "layui-colorpicker-alpha-slider",
        flag = false,
        j = "layui-colorpicker-basis-cursor", _ = "layui-colorpicker-main-input", H = w(window), r = w(document);
    a.prototype.config = {
        color: "",
        size: null,
        alpha: !1,
        format: "hex",
        predefine: !1,
        colors: ["#009688", "#5FB878", "#1E9FFF", "#FF5722", "#FFB800", "#01AAED", "#999", "#c00", "#ff8c00", "#ffd700", "#90ee90", "#00ced1", "#1e90ff", "#c71585", "rgb(0, 186, 189)", "rgb(255, 120, 0)", "rgb(250, 212, 0)", "#393D49", "rgba(0,0,0,.5)", "rgba(255, 69, 0, 0.68)", "rgba(144, 240, 144, 0.5)", "rgba(31, 147, 255, 0.73)"]
    }, a.prototype.render = function () {
        var e, t = this.config,
            n = w(['<div class="layui-unselect layui-colorpicker">', "<span " + ("rgb" == t.format && t.alpha ? 'class="layui-colorpicker-trigger-bgcolor"' : "") + ">", '<span class="layui-colorpicker-trigger-span" ', 'lay-type="' + ("rgb" == t.format ? t.alpha ? "rgba" : "torgb" : "") + '" ', 'style="' + (e = "", t.color ? (e = t.color, 3 < (t.color.match(/[0-9]{1,3}/g) || []).length && (t.alpha && "rgb" == t.format || (e = "#" + d(x(k(t.color))))), "background: " + e) : e) + '">', '<i class="layui-icon layui-colorpicker-trigger-i ' + (t.color ? C : T) + '"></i>', "</span>", "</span>", "</div>"].join("")),
            e = w(t.elem);
        t.size && n.addClass("layui-colorpicker-" + t.size), e.addClass("layui-inline").html(this.elemColorBox = n), this.color = this.elemColorBox.find("." + E)[0].style.background, this.events()
    }, a.prototype.renderPicker = function () {
        var e = this, t = e.config, n = e.elemColorBox[0],
            i = e.elemPicker = w(['<div id="layui-colorpicker' + e.index + '" data-index="' + e.index + '" class="layui-anim layui-anim-upbit layui-colorpicker-main">', '<div class="layui-colorpicker-main-wrapper">', '<div class="layui-colorpicker-basis">', '<div class="layui-colorpicker-basis-white"></div>', '<div class="layui-colorpicker-basis-black"></div>', '<div class="layui-colorpicker-basis-cursor"></div>', "</div>", '<div class="layui-colorpicker-side">', '<div class="layui-colorpicker-side-slider"></div>', "</div>", "</div>", '<div class="layui-colorpicker-main-alpha ' + (t.alpha ? "layui-show" : "") + '">', '<div class="layui-colorpicker-alpha-bgcolor">', '<div class="layui-colorpicker-alpha-slider"></div>', "</div>", "</div>", function () {
                if (t.predefine) {
                    var n = ['<div class="layui-colorpicker-main-pre">'];
                    return layui.each(t.colors, function (e, t) {
                        n.push(['<div class="layui-colorpicker-pre' + (3 < (t.match(/[0-9]{1,3}/g) || []).length ? " layui-colorpicker-pre-isalpha" : "") + '">', '<div style="background:' + t + '"></div>', "</div>"].join(""))
                    }), n.push("</div>"), n.join("")
                }
                return ""
            }(), '<div class="layui-colorpicker-main-input">', '<div class="layui-inline">', '<input type="text" class="layui-input">', "</div>", '<div class="layui-btn-container">', '<button class="layui-btn layui-btn-primary layui-btn-sm" colorpicker-events="clear">' + gettext("btn.cancel") + "</button>", '<button class="layui-btn layui-btn-sm" colorpicker-events="confirm">' + gettext("btn.confirm") + "</button>", "</div", "</div>", "</div>"].join(""));
        e.elemColorBox.find("." + E)[0], w(o)[0] && w(o).data("index") == e.index ? e.removePicker(a.thisElemInd) : (e.removePicker(a.thisElemInd), w("body").append(i)), a.thisElemInd = e.index, a.thisColor = n.style.background, e.position(), e.pickerEvents()
    }, a.prototype.removePicker = function (e) {
        return this.config, w("#layui-colorpicker" + (e || this.index)).remove(), this
    }, a.prototype.position = function () {
        function e(e) {
            return e = e ? "scrollLeft" : "scrollTop", document.body[e] | document.documentElement[e]
        }

        function t(e) {
            return document.documentElement[e ? "clientWidth" : "clientHeight"]
        }

        var n = this.config, i = this.bindElem || this.elemColorBox[0], a = this.elemPicker[0],
            o = i.getBoundingClientRect(), r = a.offsetWidth, l = a.offsetHeight, s = o.left, c = o.bottom;
        c += 5, (s -= (r - i.offsetWidth) / 2) + r + 5 > t("width") ? s = t("width") - r - 5 : s < 5 && (s = 5), c + l + 5 > t() && (c = o.top > l ? o.top - l : t() - l, c -= 10), n.position && (a.style.position = n.position), a.style.left = s + ("fixed" === n.position ? 0 : e(1)) + "px", a.style.top = c + ("fixed" === n.position ? 0 : e()) + "px"
    }, a.prototype.val = function () {
        var e, t = this, n = (t.config, t.elemColorBox.find("." + E)), i = t.elemPicker.find("." + _),
            a = n[0].style.backgroundColor;
        a ? (e = x(k(a)), n = n.attr("lay-type"), t.select(e.h, e.s, e.b), "torgb" === n && i.find("input").val(a), "rgba" === n && (n = k(a), 3 == (a.match(/[0-9]{1,3}/g) || []).length ? (i.find("input").val("rgba(" + n.r + ", " + n.g + ", " + n.b + ", 1)"), t.elemPicker.find("." + N).css("left", 280)) : (i.find("input").val(a), a = 280 * a.slice(a.lastIndexOf(",") + 1, a.length - 1), t.elemPicker.find("." + N).css("left", a)), t.elemPicker.find("." + D)[0].style.background = "linear-gradient(to right, rgba(" + n.r + ", " + n.g + ", " + n.b + ", 0), rgb(" + n.r + ", " + n.g + ", " + n.b + "))")) : (t.select(0, 100, 100), i.find("input").val(""), t.elemPicker.find("." + D)[0].style.background = "", t.elemPicker.find("." + N).css("left", 280))
    }, a.prototype.side = function () {
        function c(e, t, n, i) {
            a.select(e, t, n), n = b({
                h: e,
                s: t,
                b: n
            }), g.addClass(C).removeClass(T), r[0].style.background = "rgb(" + n.r + ", " + n.g + ", " + n.b + ")", "torgb" === l && a.elemPicker.find("." + _).find("input").val("rgb(" + n.r + ", " + n.g + ", " + n.b + ")"), "rgba" === l && (f.css("left", 280 * i), a.elemPicker.find("." + _).find("input").val("rgba(" + n.r + ", " + n.g + ", " + n.b + ", " + i + ")"), r[0].style.background = "rgba(" + n.r + ", " + n.g + ", " + n.b + ", " + i + ")", d[0].style.background = "linear-gradient(to right, rgba(" + n.r + ", " + n.g + ", " + n.b + ", 0), rgb(" + n.r + ", " + n.g + ", " + n.b + "))"), o.change && o.change(a.elemPicker.find("." + _).find("input").val())
        }

        function t(e) {
            w("#LAY-colorpicker-moving")[0] || w("body").append(v), v.on("mousemove", e), v.on("mouseup", function () {
                v.remove()
            }).on("mouseleave", function () {
                v.remove()
            })
        }

        var a = this, o = a.config, r = a.elemColorBox.find("." + E), l = r.attr("lay-type"),
            s = a.elemPicker.find(".layui-colorpicker-side"), e = a.elemPicker.find("." + A),
            u = a.elemPicker.find("." + L), i = a.elemPicker.find("." + j), d = a.elemPicker.find("." + D),
            f = a.elemPicker.find("." + N), p = e[0].offsetTop / 180 * 360, h = 100 - (i[0].offsetTop + 3) / 180 * 100,
            y = (i[0].offsetLeft + 3) / 260 * 100, m = Math.round(f[0].offsetLeft / 280 * 100) / 100,
            g = a.elemColorBox.find("." + S), n = a.elemPicker.find(".layui-colorpicker-pre").children("div"),
            v = w(['<div class="layui-auxiliar-moving" id="LAY-colorpicker-moving"></div'].join(""));
        e.on("mousedown", function (e) {
            var i = this.offsetTop, a = e.clientY;
            t(function (e) {
                var t = i + (e.clientY - a), n = s[0].offsetHeight,
                    t = (t = n < (t = t < 0 ? 0 : t) ? n : t) / 180 * 360;
                c(p = t, y, h, m), e.preventDefault()
            }), e.preventDefault()
        }), s.on("click", function (e) {
            var t = e.clientY - w(this).offset().top,
                t = (t = (t = t < 0 ? 0 : t) > this.offsetHeight ? this.offsetHeight : t) / 180 * 360;
            c(p = t, y, h, m), e.preventDefault()
        }), i.on("mousedown", function (e) {
            var o = this.offsetTop, r = this.offsetLeft, l = e.clientY, s = e.clientX;
            layui.stope(e), t(function (e) {
                var t = o + (e.clientY - l), n = r + (e.clientX - s), i = u[0].offsetHeight - 3,
                    a = u[0].offsetWidth - 3, n = ((n = a < (n = n < -3 ? -3 : n) ? a : n) + 3) / 260 * 100,
                    t = 100 - ((t = i < (t = t < -3 ? -3 : t) ? i : t) + 3) / 180 * 100;
                c(p, y = n, h = t, m), e.preventDefault()
            }), e.preventDefault()
        }), u.on("mousedown", function (e) {
            flag = true;
            var t = e.clientY - w(this).offset().top - 3 + H.scrollTop(),
                n = e.clientX - w(this).offset().left - 3 + H.scrollLeft();
            (t = t < -3 ? -3 : t) > this.offsetHeight - 3 && (t = this.offsetHeight - 3);
            n = ((n = (n = n < -3 ? -3 : n) > this.offsetWidth - 3 ? this.offsetWidth - 3 : n) + 3) / 260 * 100, t = 100 - (t + 3) / 180 * 100;
            c(p, y = n, h = t, m), e.preventDefault(), i.trigger(e, "mousedown")
        }), f.on("mousedown", function (e) {
            var i = this.offsetLeft, a = e.clientX;
            t(function (e) {
                var t = i + (e.clientX - a), n = d[0].offsetWidth;
                n < (t = t < 0 ? 0 : t) && (t = n);
                t = Math.round(t / 280 * 100) / 100;
                c(p, y, h, m = t), e.preventDefault()
            }), e.preventDefault()
        }), d.on("click", function (e) {
            var t = e.clientX - w(this).offset().left;
            (t = t < 0 ? 0 : t) > this.offsetWidth && (t = this.offsetWidth);
            t = Math.round(t / 280 * 100) / 100;
            c(p, y, h, m = t), e.preventDefault()
        }), n.each(function () {
            w(this).on("click", function () {
                w(this).parent(".layui-colorpicker-pre").addClass("selected").siblings().removeClass("selected");
                var e = this.style.backgroundColor, t = x(k(e)), n = e.slice(e.lastIndexOf(",") + 1, e.length - 1);
                p = t.h, y = t.s, h = t.b, 3 == (e.match(/[0-9]{1,3}/g) || []).length && (n = 1), m = n, c(t.h, t.s, t.b, n)
            })
        })
    }, a.prototype.select = function (e, t, n, i) {
        var a = (this.config, d({h: e, s: 100, b: 100})), o = d({h: e, s: t, b: n}), e = e / 360 * 180,
            n = 180 - n / 100 * 180 - 3, t = t / 100 * 260 - 3;
        this.elemPicker.find("." + A).css("top", e), this.elemPicker.find("." + L)[0].style.background = "#" + a, this.elemPicker.find("." + j).css({
            top: n,
            left: t
        }), "change" !== i && this.elemPicker.find("." + _).find("input").val("#" + o)
    }, a.prototype.pickerEvents = function () {
        var l = this, s = l.config, c = l.elemColorBox.find("." + E), u = l.elemPicker.find("." + _ + " input"), n = {
            clear: function (e) {
                c[0].style.background = "", l.elemColorBox.find("." + S).removeClass(C).addClass(T), l.color = "", s.done && s.done(""), l.removePicker()
            }, confirm: function (e, t) {
                var n, i, a = u.val(), o = a, r = {};
                return -1 < a.indexOf(",") ? (r = x(k(a)), l.select(r.h, r.s, r.b), c[0].style.background = o = "#" + d(r), 3 < (a.match(/[0-9]{1,3}/g) || []).length && "rgba" === c.attr("lay-type") && (i = 280 * a.slice(a.lastIndexOf(",") + 1, a.length - 1), l.elemPicker.find("." + N).css("left", i), o = c[0].style.background = a)) : (3 == (n = -1 < (n = a).indexOf("#") ? n.substring(1) : n).length && (n = (i = n.split(""))[0] + i[0] + i[1] + i[1] + i[2] + i[2]), n = parseInt(n, 16), r = x({
                    r: n >> 16,
                    g: (65280 & n) >> 8,
                    b: 255 & n
                }), c[0].style.background = o = "#" + d(r), l.elemColorBox.find("." + S).removeClass(T).addClass(C)), "change" === t ? (l.select(r.h, r.s, r.b, t), void (s.change && s.change(o))) : (l.color = a, s.done && s.done(a), void l.removePicker())
            }
        };
        l.elemPicker.on("click", "*[colorpicker-events]", function () {
            var e = w(this), t = e.attr("colorpicker-events");
            n[t] && n[t].call(this, e)
        }), u.on("keyup", function (e) {
            var t = w(this);
            n.confirm.call(this, t, 13 === e.keyCode ? null : "change")
        })
    }, a.prototype.events = function () {
        var t = this, e = t.config, n = t.elemColorBox.find("." + E);
        t.elemColorBox.on("click", function () {
            t.renderPicker(), w(o)[0] && (t.val(), t.side())
        }), e.elem[0] && !t.elemColorBox[0].eventHandler && (r.on("click", function (e) {
            w(e.target).hasClass(i) || flag || w(e.target).parents("." + i)[0] || w(e.target).hasClass(o.replace(/\./g, "")) || w(e.target).parents(o)[0] || !t.elemPicker || (t.color ? (e = x(k(t.color)), t.select(e.h, e.s, e.b)) : t.elemColorBox.find("." + S).removeClass(C).addClass(T), n[0].style.background = t.color || "", t.removePicker())
        }), H.on("resize", function () {
            return !(!t.elemPicker || !w(o)[0]) && void t.position()
        }), t.elemColorBox[0].eventHandler = !0)
    }, t.render = function (e) {
        e = new a(e);
        return function () {
            return {config: this.config}
        }.call(e)
    }, e("colorpicker", t)
}), layui.define("layer", function (e) {
    "use strict";
    var b = layui.$, d = layui.layer, i = layui.hint(), f = layui.device(), k = "form", p = ".layui-form",
        w = "layui-this", C = "layui-hide", T = "layui-disabled", t = function () {
            this.config = {
                verify: {
                    required: [/[\S]+/, gettext("layui_form_isRequired")],
                    phone: [/^1\d{10}$/, gettext("layui_form_incorrectPhone")],
                    email: [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, gettext("layui_form_incorrectEmail")],
                    url: [/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/, gettext("layui_form_incorrectURL")],
                    number: function (e) {
                        if (!e || isNaN(e)) return gettext("layui_form_numberIsRequired")
                    },
                    date: [/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/, gettext("layui_form_incorrectDate")],
                    identity: [/(^\d{15}$)|(^\d{17}(x|X|\d)$)/, "请输入正确的身份证号"]
                }
            }
        };
    t.prototype.set = function (e) {
        return b.extend(!0, this.config, e), this
    }, t.prototype.verify = function (e) {
        return b.extend(!0, this.config.verify, e), this
    }, t.prototype.on = function (e, t) {
        return layui.onevent.call(this, k, e, t)
    }, t.prototype.val = function (e, n) {
        return b(p + '[lay-filter="' + e + '"]').each(function (e, t) {
            var i = b(this);
            layui.each(n, function (e, t) {
                var n = i.find('[name="' + e + '"]');
                n[0] && ("checkbox" === (e = n[0].type) ? n[0].checked = t : "radio" === e ? n.each(function () {
                    this.value == t && (this.checked = !0)
                }) : n.val(t))
            })
        }), a.render(null, e), this.getValue(e)
    }, t.prototype.getValue = function (e, t) {
        t = t || b(p + '[lay-filter="' + e + '"]').eq(0);
        var i = {}, a = {}, t = t.find("input,select,textarea");
        return layui.each(t, function (e, t) {
            var n;
            b(this), t.name = (t.name || "").replace(/^\s*|\s*&/, ""), t.name && (/^.*\[\]$/.test(t.name) && (n = t.name.match(/^(.*)\[\]$/g)[0], i[n] = 0 | i[n], n = t.name.replace(/^(.*)\[\]$/, "$1[" + i[n]++ + "]")), /^checkbox|radio$/.test(t.type) && !t.checked || (a[n || t.name] = t.value))
        }), a
    }, t.prototype.render = function (e, t) {
        var n = b(p + (t ? '[lay-filter="' + t + '"]' : "")), t = {
            select: function () {
                function h(e, t) {
                    b(e.target).parent().hasClass(g) && !t || (b("." + m).removeClass(m + "ed " + m + "up"), y && x && y.val(x)), y = null
                }

                var y, c = gettext("layui_form_pleaseSelect"), m = "layui-form-select", g = "layui-select-title",
                    v = "layui-select-none", x = "", e = n.find("select");
                e.each(function (e, t) {
                    var n = b(this), i = n.next("." + m), a = this.disabled, o = t.value,
                        r = b(t.options[t.selectedIndex]), l = t.options[0];
                    if ("string" == typeof n.attr("lay-ignore")) return n.show();
                    var s, t = "string" == typeof n.attr("lay-search"), l = l && !l.value && l.innerHTML || c,
                        r = b(['<div class="' + (t ? "" : "layui-unselect ") + m, (a ? " layui-select-disabled" : "") + '">', '<div class="' + g + '">', '<input type="text" placeholder="' + l + '" value="' + (o ? r.html() : "") + '"' + (!a && t ? "" : " readonly") + ' class="layui-input' + (t ? "" : " layui-unselect") + (a ? " " + T : "") + '">', '<i class="layui-edge"></i></div>', '<dl class="layui-anim layui-anim-upbit' + (n.find("optgroup")[0] ? " layui-select-group" : "") + '">', (r = n.find("*"), s = [], layui.each(r, function (e, t) {
                            0 !== e || t.value ? "optgroup" === t.tagName.toLowerCase() ? s.push("<dt>" + t.label + "</dt>") : s.push('<dd lay-value="' + t.value + '" class="' + (o === t.value ? w : "") + (t.disabled ? " " + T : "") + '">' + t.innerHTML + "</dd>") : s.push('<dd lay-value="" class="layui-select-tips">' + (t.innerHTML || c) + "</dd>")
                        }), 0 === s.length && s.push('<dd lay-value="" class="' + T + '">' + gettext("layui_form_noOption") + "</dd>"), s.join("") + "</dl>"), "</div>"].join(""));
                    i[0] && i.remove(), n.after(r), function (i, e, t) {
                        var l, n, a, s, o, r = b(this), c = i.find("." + g), u = c.find("input"), d = i.find("dl"),
                            f = d.children("dd"), p = this.selectedIndex;
                        e || (n = function () {
                            var e = i.offset().top + i.outerHeight() + 5 - E.scrollTop(), t = d.outerHeight();
                            p = r[0].selectedIndex, i.addClass(m + "ed"), f.removeClass(C), l = null, f.eq(p).addClass(w).siblings().removeClass(w), e + t > E.height() && t <= e && i.addClass(m + "up"), s()
                        }, a = function (e) {
                            i.removeClass(m + "ed " + m + "up"), u.blur(), l = null, e || o(u.val(), function (e) {
                                var t = r[0].selectedIndex;
                                e && (x = b(r[0].options[t]).html(), 0 === t && x === u.attr("placeholder") && (x = ""), u.val(x || ""))
                            })
                        }, s = function () {
                            var e, t, n = d.children("dd." + w);
                            n[0] && (e = n.position().top, t = d.height(), n = n.height(), t < e && d.scrollTop(e + d.scrollTop() - t + n - 5), e < 0 && d.scrollTop(e + d.scrollTop() - 5))
                        }, c.on("click", function (e) {
                            i.hasClass(m + "ed") ? a() : (h(e, !0), n()), d.find("." + v).remove()
                        }), c.find(".layui-edge").on("click", function () {
                            u.focus()
                        }), u.on("keyup", function (e) {
                            9 === e.keyCode && n()
                        }).on("keydown", function (o) {
                            var e = o.keyCode;
                            9 === e && a();
                            var r = function (i, a) {
                                o.preventDefault();
                                var e = function () {
                                    var e = d.children("dd." + w);
                                    if (d.children("dd." + C)[0] && "next" === i) {
                                        var t = d.children("dd:not(." + C + ",." + T + ")"), n = t.eq(0).index();
                                        if (0 <= n && n < e.index() && !t.hasClass(w)) return t.eq(0).prev()[0] ? t.eq(0).prev() : d.children(":last")
                                    }
                                    return a && a[0] ? a : l && l[0] ? l : e
                                }(), t = e[i](), n = e[i]("dd:not(." + C + ")");
                                return t[0] ? (l = e[i](), n[0] && !n.hasClass(T) || !l[0] ? (n.addClass(w).siblings().removeClass(w), void s()) : r(i, l)) : l = null
                            };
                            38 === e && r("prev"), 40 === e && r("next"), 13 === e && (o.preventDefault(), d.children("dd." + w).trigger("click"))
                        }), o = function (i, e, a) {
                            var o = 0;
                            layui.each(f, function () {
                                var e = b(this), t = e.text(), n = -1 === t.indexOf(i);
                                ("" === i || "blur" === a ? i !== t : n) && o++, "keyup" === a && e[n ? "addClass" : "removeClass"](C)
                            });
                            var t = o === f.length;
                            return e(t), t
                        }, t && u.on("keyup", function (e) {
                            var t = this.value, e = e.keyCode;
                            return 9 !== e && 13 !== e && 37 !== e && 38 !== e && 39 !== e && 40 !== e && (o(t, function (e) {
                                e ? d.find("." + v)[0] || d.append('<p class="' + v + '">' + gettext("layui_form_noOption") + "</p>") : d.find("." + v).remove()
                            }, "keyup"), "" === t && d.find("." + v).remove(), void s())
                        }).on("blur", function (e) {
                            var t = r[0].selectedIndex;
                            y = u, x = b(r[0].options[t]).html(), 0 === t && x === u.attr("placeholder") && (x = ""), setTimeout(function () {
                                o(u.val(), function (e) {
                                    x || u.val("")
                                }, "blur")
                            }, 200)
                        }), f.on("click", function () {
                            var e = b(this), t = e.attr("lay-value"), n = r.attr("lay-filter");
                            return !e.hasClass(T) && (e.hasClass("layui-select-tips") ? u.val("") : (u.val(e.text()), e.addClass(w)), e.siblings().removeClass(w), r.val(t).removeClass("layui-form-danger"), layui.event.call(this, k, "select(" + n + ")", {
                                elem: r[0],
                                value: t,
                                othis: i
                            }), a(!0), !1)
                        }), i.find("dl>dt").on("click", function (e) {
                            return !1
                        }), b(document).off("click", h).on("click", h))
                    }.call(this, r, a, t)
                })
            }, checkbox: function () {
                var s = {
                    checkbox: ["layui-form-checkbox", "layui-form-checked", "checkbox"],
                    _switch: ["layui-form-switch", "layui-form-onswitch", "switch"]
                }, e = n.find("input[type=checkbox]");
                e.each(function (e, t) {
                    var n = b(this), i = n.attr("lay-skin"), a = (n.attr("lay-text") || "").split("|"),
                        o = this.disabled, r = s[i = "switch" === i ? "_" + i : i] || s.checkbox;
                    if ("string" == typeof n.attr("lay-ignore")) return n.show();
                    var l = n.next("." + r[0]),
                        a = b(['<div class="layui-unselect ' + r[0], t.checked ? " " + r[1] : "", o ? " layui-checkbox-disbaled " + T : "", '"', i ? ' lay-skin="' + i + '"' : "", ">", (a = {
                            checkbox: [t.title.replace(/\s/g, "") ? "<span>" + t.title + "</span>" : "", '<i class="layui-icon layui-icon-ok"></i>'].join(""),
                            _switch: "<em>" + ((t.checked ? a[0] : a[1]) || "") + "</em><i></i>"
                        })[i] || a.checkbox, "</div>"].join(""));
                    l[0] && l.remove(), n.after(a), function (n, i) {
                        var a = b(this);
                        n.on("click", function () {
                            var e = a.attr("lay-filter"), t = (a.attr("lay-text") || "").split("|");
                            a[0].disabled || (a[0].checked ? (a[0].checked = !1, n.removeClass(i[1]).find("em").text(t[1])) : (a[0].checked = !0, n.addClass(i[1]).find("em").text(t[0])), layui.event.call(a[0], k, i[2] + "(" + e + ")", {
                                elem: a[0],
                                value: a[0].value,
                                othis: n
                            }))
                        })
                    }.call(this, a, r)
                })
            }, radio: function () {
                var r = "layui-form-radio", l = ["&#xe643;", "&#xe63f;"], e = n.find("input[type=radio]");
                e.each(function (e, t) {
                    var n = b(this), i = n.next("." + r), a = this.disabled;
                    if ("string" == typeof n.attr("lay-ignore")) return n.show();
                    i[0] && i.remove();
                    t = b(['<div class="layui-unselect ' + r, t.checked ? " " + r + "ed" : "", (a ? " layui-radio-disbaled " + T : "") + '">', '<i class="layui-anim layui-icon">' + l[t.checked ? 0 : 1] + "</i>", "<div>" + (t = t.title || "", t = "string" == typeof n.next().attr("lay-radio") ? n.next().html() : t) + "</div>", "</div>"].join(""));
                    n.after(t), function (i) {
                        var a = b(this), o = "layui-anim-scaleSpring";
                        i.on("click", function () {
                            var e = a[0].name, t = a.parents(p), n = a.attr("lay-filter"),
                                e = t.find("input[name=" + e.replace(/(\.|#|\[|\])/g, "\\$1") + "]");
                            a[0].disabled || (layui.each(e, function () {
                                var e = b(this).next("." + r);
                                this.checked = !1, e.removeClass(r + "ed"), e.find(".layui-icon").removeClass(o).html(l[1])
                            }), a[0].checked = !0, i.addClass(r + "ed"), i.find(".layui-icon").addClass(o).html(l[0]), layui.event.call(a[0], k, "radio(" + n + ")", {
                                elem: a[0],
                                value: a[0].value,
                                othis: i
                            }))
                        })
                    }.call(this, t)
                })
            }
        };
        return e ? t[e] ? t[e]() : i.error("不支持的" + e + "表单渲染") : layui.each(t, function (e, t) {
            t()
        }), this
    };

    function n() {
        var s = null, c = a.config.verify, u = "layui-form-danger", e = (i = b(this)).parents(p),
            t = e.find("*[lay-verify]"), n = i.parents("form")[0], i = i.attr("lay-filter");
        return layui.each(t, function (e, a) {
            var o = b(this), t = o.attr("lay-verify").split("|"), r = o.attr("lay-verType"), l = o.val();
            if (o.removeClass(u), layui.each(t, function (e, t) {
                var n = "", i = "function" == typeof c[t];
                if (c[t]) {
                    i = i ? n = c[t](l, a) : !c[t][0].test(l), n = n || c[t][1];
                    if ("required" === t && (n = o.attr("lay-reqText") || n), i) return "tips" === r ? d.tips(n, "string" == typeof o.attr("lay-ignore") || "select" !== a.tagName.toLowerCase() && !/^checkbox|radio$/.test(a.type) ? o : o.next(), {tips: 1}) : "alert" === r ? d.alert(n, {
                        title: "提示",
                        shadeClose: !0
                    }) : /\bstring|number\b/.test(typeof n) && d.msg(n, {
                        icon: 5,
                        shift: 6
                    }), f.android || f.ios || setTimeout(function () {
                        a.focus()
                    }, 7), o.addClass(u), s = !0
                }
            }), s) return s
        }), !s && (e = a.getValue(null, e), layui.event.call(this, k, "submit(" + i + ")", {
            elem: this,
            form: n,
            field: e
        }))
    }

    var a = new t, t = b(document), E = b(window);
    b(function () {
        a.render()
    }), t.on("reset", p, function () {
        var e = b(this).attr("lay-filter");
        setTimeout(function () {
            a.render(null, e)
        }, 50)
    }), t.on("submit", p, n).on("click", "*[lay-submit]", n), e(k, a)
}), layui.define("form", function (e) {
    "use strict";

    function i() {
        var t = this, e = t.config, n = e.id || t.index;
        return i.that[n] = t, {
            config: i.config[n] = e, reload: function (e) {
                t.reload.call(t, e)
            }, getChecked: function () {
                return t.getChecked.call(t)
            }, setChecked: function (e) {
                return t.setChecked.call(t, e)
            }
        }
    }

    function t(e) {
        this.index = ++o.index, this.config = f.extend({}, this.config, o.config, e), this.render()
    }

    var f = layui.$, n = layui.form, p = layui.layer, a = "tree", o = {
            config: {}, index: layui.tree ? layui.tree.index + 1e4 : 0, set: function (e) {
                return this.config = f.extend({}, this.config, e), this
            }, on: function (e, t) {
                return layui.onevent.call(this, a, e, t)
            }
        }, h = "layui-hide", s = "layui-disabled", y = "layui-tree-set", m = "layui-tree-iconClick",
        g = "layui-icon-addition", v = "layui-icon-subtraction", x = "layui-tree-entry", b = "layui-tree-main",
        k = "layui-tree-txt", w = "layui-tree-pack", C = "layui-tree-spread", T = "layui-tree-setLineShort",
        E = "layui-tree-showLine", S = "layui-tree-lineExtend";
    t.prototype.config = {
        data: [],
        showCheckbox: !1,
        showLine: !0,
        accordion: !1,
        onlyIconControl: !1,
        isJump: !1,
        edit: !1,
        text: {defaultNodeName: "未命名", none: "无数据"}
    }, t.prototype.reload = function (e) {
        var n = this;
        layui.each(e, function (e, t) {
            t.constructor === Array && delete n.config[e]
        }), n.config = f.extend(!0, {}, n.config, e), n.render()
    }, t.prototype.render = function () {
        var e = this, t = e.config;
        e.checkids = [];
        var n = f('<div class="layui-tree' + (t.showCheckbox ? " layui-form" : "") + (t.showLine ? " layui-tree-line" : "") + '" lay-filter="LAY-tree-' + e.index + '"></div>');
        e.tree(n);
        var i = t.elem = f(t.elem);
        if (i[0]) {
            if (e.key = t.id || e.index, e.elem = n, e.elemNone = f('<div class="layui-tree-emptyText">' + t.text.none + "</div>"), i.html(e.elem), 0 == e.elem.find(".layui-tree-set").length) return e.elem.append(e.elemNone);
            t.showCheckbox && e.renderForm("checkbox"), e.elem.find(".layui-tree-set").each(function () {
                var e = f(this);
                e.parent(".layui-tree-pack")[0] || e.addClass("layui-tree-setHide"), !e.next()[0] && e.parents(".layui-tree-pack").eq(1).hasClass("layui-tree-lineExtend") && e.addClass(T), e.next()[0] || e.parents(".layui-tree-set").eq(0).next()[0] || e.addClass(T)
            }), e.events()
        }
    }, t.prototype.renderForm = function (e) {
        n.render(e, "LAY-tree-" + this.index)
    }, t.prototype.tree = function (o, e) {
        var r = this, l = r.config, e = e || l.data;
        layui.each(e, function (e, t) {
            var n = t.children && 0 < t.children.length,
                i = f('<div class="layui-tree-pack" ' + (t.spread ? 'style="display: block;"' : "") + "></div>"),
                a = f(['<div data-id="' + t.id + '" class="layui-tree-set' + (t.spread ? " layui-tree-spread" : "") + (t.checked ? " layui-tree-checkedFirst" : "") + '">', '<div class="layui-tree-entry">', '<div class="layui-tree-main">', l.showLine ? n ? '<span class="layui-tree-iconClick layui-tree-icon"><i class="layui-icon ' + (t.spread ? "layui-icon-subtraction" : "layui-icon-addition") + '"></i></span>' : '<span class="layui-tree-iconClick"><i class="layui-icon layui-icon-file"></i></span>' : '<span class="layui-tree-iconClick"><i class="layui-tree-iconArrow ' + (n ? "" : h) + '"></i></span>', l.showCheckbox ? '<input type="checkbox" name="' + (t.field || "layuiTreeCheck_" + t.id) + '" same="layuiTreeCheck" lay-skin="primary" ' + (t.disabled ? "disabled" : "") + ' value="' + t.id + '">' : "", l.isJump && t.href ? '<a href="' + t.href + '" target="_blank" class="' + k + '">' + (t.title || t.label || l.text.defaultNodeName) + "</a>" : '<span class="' + k + (t.disabled ? " " + s : "") + '">' + (t.title || t.label || l.text.defaultNodeName) + "</span>", "</div>", function () {
                    if (!l.edit) return "";
                    var n = {
                        add: '<i class="layui-icon layui-icon-add-1"  data-type="add"></i>',
                        update: '<i class="layui-icon layui-icon-edit" data-type="update"></i>',
                        del: '<i class="layui-icon layui-icon-delete" data-type="del"></i>'
                    }, i = ['<div class="layui-btn-group layui-tree-btnGroup">'];
                    return !0 === l.edit && (l.edit = ["update", "del"]), "object" == typeof l.edit ? (layui.each(l.edit, function (e, t) {
                        i.push(n[t] || "")
                    }), i.join("") + "</div>") : void 0
                }(), "</div></div>"].join(""));
            n && (a.append(i), r.tree(i, t.children)), o.append(a), a.prev("." + y)[0] && a.prev().children(".layui-tree-pack").addClass("layui-tree-showLine"), n || a.parent(".layui-tree-pack").addClass("layui-tree-lineExtend"), r.spread(a, t), l.showCheckbox && (t.checked && r.checkids.push(t.id), r.checkClick(a, t)), l.edit && r.operate(a, t)
        })
    }, t.prototype.spread = function (i, e) {
        var a = this.config, t = i.children("." + x), n = t.children("." + b), o = t.find("." + m), t = t.find("." + k),
            r = a.onlyIconControl ? o : n, l = "";
        r.on("click", function (e) {
            var t = i.children("." + w),
                n = (r.children(".layui-icon")[0] ? r : r.find(".layui-tree-icon")).children(".layui-icon");
            t[0] ? i.hasClass(C) ? (i.removeClass(C), t.slideUp(200), n.removeClass(v).addClass(g)) : (i.addClass(C), t.slideDown(200), n.addClass(v).removeClass(g), a.accordion && ((n = i.siblings("." + y)).removeClass(C), n.children("." + w).slideUp(200), n.find(".layui-tree-icon").children(".layui-icon").removeClass(v).addClass(g))) : l = "normal"
        }), t.on("click", function () {
            f(this).hasClass(s) || (l = i.hasClass(C) ? a.onlyIconControl ? "open" : "close" : a.onlyIconControl ? "close" : "open", a.click && a.click({
                elem: i,
                state: l,
                data: e
            }))
        })
    }, t.prototype.setCheckbox = function (e, t, n) {
        var a, o = (this.config, n.prop("checked"));
        n.prop("disabled") || ("object" != typeof t.children && !e.find("." + w)[0] || e.find("." + w).find('input[same="layuiTreeCheck"]').each(function () {
            this.disabled || (this.checked = o)
        }), (a = function (e) {
            var t, n, i;
            e.parents("." + y)[0] && (i = (n = e.parent("." + w)).parent(), e = n.prev().find('input[same="layuiTreeCheck"]'), o ? e.prop("checked", o) : (n.find('input[same="layuiTreeCheck"]').each(function () {
                this.checked && (t = !0)
            }), t || e.prop("checked", !1)), a(i))
        })(e), this.renderForm("checkbox"))
    }, t.prototype.checkClick = function (n, i) {
        var a = this, o = a.config;
        n.children("." + x).children("." + b).on("click", 'input[same="layuiTreeCheck"]+', function (e) {
            layui.stope(e);
            var t = f(this).prev(), e = t.prop("checked");
            t.prop("disabled") || (a.setCheckbox(n, i, t), o.oncheck && o.oncheck({elem: n, checked: e, data: i}))
        })
    }, t.prototype.operate = function (s, o) {
        var c = this, u = c.config, e = s.children("." + x), d = e.children("." + b);
        e.children(".layui-tree-btnGroup").on("click", ".layui-icon", function (e) {
            layui.stope(e);
            var t, n, i, a = f(this).data("type"), r = s.children("." + w), l = {data: o, type: a, elem: s};
            "add" == a ? (r[0] || (u.showLine ? (d.find("." + m).addClass("layui-tree-icon"), d.find("." + m).children(".layui-icon").addClass(g).removeClass("layui-icon-file")) : d.find(".layui-tree-iconArrow").removeClass(h), s.append('<div class="layui-tree-pack"></div>')), t = u.operate && u.operate(l), (e = {}).title = u.text.defaultNodeName, e.id = t, c.tree(s.children("." + w), [e]), u.showLine && (r[0] ? (r.hasClass(S) || r.addClass(S), s.find("." + w).each(function () {
                f(this).children("." + y).last().addClass(T)
            }), (r.children("." + y).last().prev().hasClass(T) ? r.children("." + y).last().prev() : r.children("." + y).last()).removeClass(T), !s.parent("." + w)[0] && s.next()[0] && r.children("." + y).last().removeClass(T)) : (t = s.siblings("." + y), n = 1, e = s.parent("." + w), layui.each(t, function (e, t) {
                f(t).children("." + w)[0] || (n = 0)
            }), 1 == n ? (t.children("." + w).addClass(E), t.children("." + w).children("." + y).removeClass(T), s.children("." + w).addClass(E), e.removeClass(S), e.children("." + y).last().children("." + w).children("." + y).last().addClass(T)) : s.children("." + w).children("." + y).addClass(T))), u.showCheckbox && (d.find('input[same="layuiTreeCheck"]')[0].checked && (s.children("." + w).children("." + y).last().find('input[same="layuiTreeCheck"]')[0].checked = !0), c.renderForm("checkbox"))) : "update" == a ? (a = d.children("." + k).html(), d.children("." + k).html(""), d.append('<input type="text" class="layui-tree-editInput">'), d.children(".layui-tree-editInput").val(a).focus(), i = function (e) {
                var t = (t = e.val().trim()) || u.text.defaultNodeName;
                e.remove(), d.children("." + k).html(t), l.data.title = t, u.operate && u.operate(l)
            }, d.children(".layui-tree-editInput").blur(function () {
                i(f(this))
            }), d.children(".layui-tree-editInput").on("keydown", function (e) {
                13 === e.keyCode && (e.preventDefault(), i(f(this)))
            })) : p.confirm('确认删除该节点 "<span style="color: #999;">' + (o.title || "") + '</span>" 吗？', function (e) {
                return u.operate && u.operate(l), l.status = "remove", p.close(e), s.prev("." + y)[0] || s.next("." + y)[0] || s.parent("." + w)[0] ? (s.siblings("." + y).children("." + x)[0] ? (u.showCheckbox && (o = function (e) {
                    var t, n, i, a;
                    e.parents("." + y)[0] && (t = e.siblings("." + y).children("." + x), e = (n = e.parent("." + w).prev()).find('input[same="layuiTreeCheck"]')[0], i = 1, (a = 0) == e.checked && (t.each(function (e, t) {
                        t = f(t).find('input[same="layuiTreeCheck"]')[0];
                        0 != t.checked || t.disabled || (i = 0), t.disabled || (a = 1)
                    }), 1 == i && 1 == a && (e.checked = !0, c.renderForm("checkbox"), o(n.parent("." + y)))))
                })(s), u.showLine && (t = s.siblings("." + y), n = 1, i = s.parent("." + w), layui.each(t, function (e, t) {
                    f(t).children("." + w)[0] || (n = 0)
                }), 1 == n ? (r[0] || (i.removeClass(S), t.children("." + w).addClass(E), t.children("." + w).children("." + y).removeClass(T)), (s.next()[0] ? i.children("." + y).last() : s.prev()).children("." + w).children("." + y).last().addClass(T), s.next()[0] || s.parents("." + y)[1] || s.parents("." + y).eq(0).next()[0] || s.prev("." + y).addClass(T)) : !s.next()[0] && s.hasClass(T) && s.prev().addClass(T))) : (t = s.parent("." + w).prev(), u.showLine ? (t.find("." + m).removeClass("layui-tree-icon"), t.find("." + m).children(".layui-icon").removeClass(v).addClass("layui-icon-file"), (i = t.parents("." + w).eq(0)).addClass(S), i.children("." + y).each(function () {
                    f(this).children("." + w).children("." + y).last().addClass(T)
                })) : t.find(".layui-tree-iconArrow").addClass(h), s.parents("." + y).eq(0).removeClass(C), s.parent("." + w).remove()), void s.remove()) : (s.remove(), void c.elem.append(c.elemNone));
                var o, n, t, i
            })
        })
    }, t.prototype.events = function () {
        var t = this, a = t.config;
        t.elem.find(".layui-tree-checkedFirst"), t.setChecked(t.checkids), t.elem.find(".layui-tree-search").on("keyup", function () {
            var e = f(this), n = e.val(), e = e.nextAll(), i = [];
            e.find("." + k).each(function () {
                var t, e = f(this).parents("." + x);
                -1 != f(this).html().indexOf(n) && (i.push(f(this).parent()), (t = function (e) {
                    e.addClass("layui-tree-searchShow"), e.parent("." + w)[0] && t(e.parent("." + w).parent("." + y))
                })(e.parent("." + y)))
            }), e.find("." + x).each(function () {
                var e = f(this).parent("." + y);
                e.hasClass("layui-tree-searchShow") || e.addClass(h)
            }), 0 == e.find(".layui-tree-searchShow").length && t.elem.append(t.elemNone), a.onsearch && a.onsearch({elem: i})
        }), t.elem.find(".layui-tree-search").on("keydown", function () {
            f(this).nextAll().find("." + x).each(function () {
                f(this).parent("." + y).removeClass("layui-tree-searchShow " + h)
            }), f(".layui-tree-emptyText")[0] && f(".layui-tree-emptyText").remove()
        })
    }, t.prototype.getChecked = function () {
        var e = this.config, t = [], n = [];
        this.elem.find(".layui-form-checked").each(function () {
            t.push(f(this).prev()[0].value)
        });
        var a = function (e, i) {
            layui.each(e, function (e, n) {
                layui.each(t, function (e, t) {
                    if (n.id == t) {
                        t = f.extend({}, n);
                        return delete t.children, i.push(t), n.children && (t.children = [], a(n.children, t.children)), !0
                    }
                })
            })
        };
        return a(f.extend({}, e.data), n), n
    }, t.prototype.setChecked = function (o) {
        this.config, this.elem.find("." + y).each(function (e, t) {
            var n = f(this).data("id"), i = f(t).children("." + x).find('input[same="layuiTreeCheck"]'), a = i.next();
            if ("number" == typeof o) {
                if (n == o) return i[0].checked || a.click(), !1
            } else "object" == typeof o && layui.each(o, function (e, t) {
                if (t == n && !i[0].checked) return a.click(), !0
            })
        })
    }, i.that = {}, i.config = {}, o.reload = function (e, t) {
        e = i.that[e];
        return e.reload(t), i.call(e)
    }, o.getChecked = function (e) {
        return i.that[e].getChecked()
    }, o.setChecked = function (e, t) {
        return i.that[e].setChecked(t)
    }, o.render = function (e) {
        e = new t(e);
        return i.call(e)
    }, e(a, o)
}), layui.define(["laytpl", "form"], function (e) {
    "use strict";

    function i() {
        var t = this, e = t.config, n = e.id || t.index;
        return i.that[n] = t, {
            config: i.config[n] = e, reload: function (e) {
                t.reload.call(t, e)
            }, getData: function () {
                return t.getData.call(t)
            }
        }
    }

    function t(e) {
        return ['<div class="layui-transfer-box" data-index="' + (e = e || {}).index + '">', '<div class="layui-transfer-header">', '<input type="checkbox" name="' + e.checkAllName + '" lay-filter="layTransferCheckbox" lay-type="all" lay-skin="primary" title="{{ d.data.title[' + e.index + "] || 'list" + (e.index + 1) + "' }}\">", "</div>", "{{# if(d.data.showSearch){ }}", '<div class="layui-transfer-search">', '<i class="layui-icon layui-icon-search"></i>', '<input type="input" class="layui-input" placeholder="关键词搜索">', "</div>", "{{# } }}", '<ul class="layui-transfer-data"></ul>', "</div>"].join("")
    }

    function n(e) {
        this.index = ++l.index, this.config = c.extend({}, this.config, l.config, e), this.render()
    }

    var c = layui.$, a = layui.laytpl, o = layui.form, r = "transfer", l = {
            config: {}, index: layui[r] ? layui[r].index + 1e4 : 0, set: function (e) {
                return this.config = c.extend({}, this.config, e), this
            }, on: function (e, t) {
                return layui.onevent.call(this, r, e, t)
            }
        }, u = "layui-hide", d = "layui-btn-disabled", s = "layui-none", f = "layui-transfer-box",
        p = "layui-transfer-header", h = "layui-transfer-search", y = "layui-transfer-data",
        m = ['<div class="layui-transfer layui-form layui-border-box" lay-filter="LAY-transfer-{{ d.index }}">', t({
            index: 0,
            checkAllName: "layTransferLeftCheckAll"
        }), '<div class="layui-transfer-active">', '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="0">', '<i class="layui-icon layui-icon-next"></i>', "</button>", '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="1">', '<i class="layui-icon layui-icon-prev"></i>', "</button>", "</div>", t({
            index: 1,
            checkAllName: "layTransferRightCheckAll"
        }), "</div>"].join("");
    n.prototype.config = {
        title: ["列表一", "列表二"],
        width: 200,
        height: 360,
        data: [],
        value: [],
        showSearch: !1,
        id: "",
        text: {none: "无数据", searchNone: "无匹配数据"}
    }, n.prototype.reload = function (e) {
        this.config = c.extend({}, this.config, e), this.render()
    }, n.prototype.render = function () {
        var e = this, t = e.config, n = e.elem = c(a(m).render({data: t, index: e.index})), i = t.elem = c(t.elem);
        i[0] && (t.data = t.data || [], t.value = t.value || [], e.key = t.id || e.index, i.html(e.elem), e.layBox = e.elem.find("." + f), e.layHeader = e.elem.find("." + p), e.laySearch = e.elem.find("." + h), e.layData = n.find("." + y), e.layBtn = n.find(".layui-transfer-active .layui-btn"), e.layBox.css({
            width: t.width,
            height: t.height
        }), e.layData.css({height: t.height - e.layHeader.outerHeight() - e.laySearch.outerHeight() - 2}), e.renderData(), e.events())
    }, n.prototype.renderData = function () {
        var i = (this.config, [{checkName: "layTransferLeftCheck", views: []}, {
            checkName: "layTransferRightCheck",
            views: []
        }]);
        this.parseData(function (e) {
            var t = e.selected ? 1 : 0,
                n = ["<li>", '<input type="checkbox" name="' + i[t].checkName + '" lay-skin="primary" lay-filter="layTransferCheckbox" title="' + e.title + '"' + (e.disabled ? " disabled" : "") + (e.checked ? " checked" : "") + ' value="' + e.value + '">', "</li>"].join("");
            i[t].views.push(n), delete e.selected
        }), this.layData.eq(0).html(i[0].views.join("")), this.layData.eq(1).html(i[1].views.join("")), this.renderCheckBtn()
    }, n.prototype.renderForm = function (e) {
        o.render(e, "LAY-transfer-" + this.index)
    }, n.prototype.renderCheckBtn = function (r) {
        var l = this, s = l.config;
        r = r || {}, l.layBox.each(function (e) {
            var t = c(this), n = t.find("." + y), i = t.find("." + p).find('input[type="checkbox"]'),
                t = n.find('input[type="checkbox"]'), a = 0, o = !1;
            t.each(function () {
                var e = c(this).data("hide");
                (this.checked || this.disabled || e) && a++, this.checked && !e && (o = !0)
            }), i.prop("checked", o && a === t.length), l.layBtn.eq(e)[o ? "removeClass" : "addClass"](d), r.stopNone || (e = n.children("li:not(." + u + ")").length, l.noneView(n, e ? "" : s.text.none))
        }), l.renderForm("checkbox")
    }, n.prototype.noneView = function (e, t) {
        var n = c('<p class="layui-none">' + (t || "") + "</p>");
        e.find("." + s)[0] && e.find("." + s).remove(), t.replace(/\s/g, "") && e.append(n)
    }, n.prototype.setValue = function () {
        var e = this.config, t = [];
        return this.layBox.eq(1).find("." + y + ' input[type="checkbox"]').each(function () {
            c(this).data("hide") || t.push(this.value)
        }), e.value = t, this
    }, n.prototype.parseData = function (t) {
        var i = this.config, a = [];
        return layui.each(i.data, function (e, n) {
            n = ("function" == typeof i.parseData ? i.parseData(n) : n) || n, a.push(n = c.extend({}, n)), layui.each(i.value, function (e, t) {
                t == n.value && (n.selected = !0)
            }), t && t(n)
        }), i.data = a, this
    }, n.prototype.getData = function (e) {
        var t = this.config, i = [];
        return this.setValue(), layui.each(e || t.value, function (e, n) {
            layui.each(t.data, function (e, t) {
                delete t.selected, n == t.value && i.push(t)
            })
        }), i
    }, n.prototype.events = function () {
        var o = this, n = o.config;
        o.elem.on("click", 'input[lay-filter="layTransferCheckbox"]+', function () {
            var e = c(this).prev(), t = e[0].checked, n = e.parents("." + f).eq(0).find("." + y);
            e[0].disabled || ("all" === e.attr("lay-type") && n.find('input[type="checkbox"]').each(function () {
                this.disabled || (this.checked = t)
            }), o.renderCheckBtn({stopNone: !0}))
        }), o.layBtn.on("click", function () {
            var e = c(this), t = e.data("index"), i = o.layBox.eq(t), a = [];
            e.hasClass(d) || (o.layBox.eq(t).each(function (e) {
                c(this).find("." + y).children("li").each(function () {
                    var e = c(this), t = e.find('input[type="checkbox"]'), n = t.data("hide");
                    t[0].checked && !n && (t[0].checked = !1, i.siblings("." + f).find("." + y).append(e.clone()), e.remove(), a.push(t[0].value)), o.setValue()
                })
            }), o.renderCheckBtn(), "" === (e = i.siblings("." + f).find("." + h + " input")).val() || e.trigger("keyup"), n.onchange && n.onchange(o.getData(a), t))
        }), o.laySearch.find("input").on("keyup", function () {
            var i = this.value, e = c(this).parents("." + h).eq(0).siblings("." + y), t = e.children("li");
            t.each(function () {
                var e = c(this), t = e.find('input[type="checkbox"]'), n = -1 !== t[0].title.indexOf(i);
                e[n ? "removeClass" : "addClass"](u), t.data("hide", !n)
            }), o.renderCheckBtn();
            t = t.length === e.children("li." + u).length;
            o.noneView(e, t ? n.text.searchNone : "")
        })
    }, i.that = {}, i.config = {}, l.reload = function (e, t) {
        e = i.that[e];
        return e.reload(t), i.call(e)
    }, l.getData = function (e) {
        return i.that[e].getData()
    }, l.render = function (e) {
        e = new n(e);
        return i.call(e)
    }, e(r, l)
}), layui.define(["laytpl", "laypage", "layer", "form", "util"], function (e) {
    "use strict";

    function u() {
        var n = this, e = n.config, t = e.id || e.index;
        return t && (u.that[t] = n, u.config[t] = e), {
            config: e, reload: function (e, t) {
                n.reload.call(n, e, t)
            }, setColsWidth: function () {
                n.setColsWidth.call(n)
            }, resize: function () {
                n.resize.call(n)
            }
        }
    }

    function i(e) {
        var t = u.config[e];
        return t || p.error(e ? "The table instance with ID '" + e + "' not found" : "ID argument required"), t || null
    }

    function m(e, t, n, i) {
        return t = e.templet ? "function" == typeof e.templet ? e.templet(n) : v(g(e.templet).html() || String(t)).render(n) : t, i ? g("<div>" + t + "</div>").text() : t
    }

    function t(e) {
        return ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<thead>", "{{# layui.each(d.data.cols, function(i1, item1){ }}", "<tr>", "{{# layui.each(item1, function(i2, item2){ }}", '{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}', '{{# if(item2.fixed === "right"){ right = true; } }}', (e = e || {}).fixed && "right" !== e.fixed ? '{{# if(item2.fixed && item2.fixed !== "right"){ }}' : "right" === e.fixed ? '{{# if(item2.fixed === "right"){ }}' : "", "{{# var isSort = !(item2.colGroup) && item2.sort; }}", '<th data-field="{{ item2.field||i2 }}" data-key="{{d.index}}-{{i1}}-{{i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{ item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{item2.minWidth}}"{{# } }} {{#if(item2.colspan){}} colspan="{{item2.colspan}}"{{#} if(item2.rowspan){}} rowspan="{{item2.rowspan}}"{{#}}} {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}">', '<div class="layui-table-cell laytable-cell-', "{{# if(item2.colGroup){ }}", "group", "{{# } else { }}", "{{d.index}}-{{i1}}-{{i2}}", '{{# if(item2.type !== "normal"){ }}', " laytable-cell-{{ item2.type }}", "{{# } }}", "{{# } }}", '" {{#if(item2.align){}}align="{{item2.align}}"{{#}}}>', '{{# if(item2.type === "checkbox"){ }}', '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>', "{{# } else { }}", '<span>{{item2.title||""}}</span>', "{{# if(isSort){ }}", '<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="' + gettext("sort_by_asc") + '"></i><i class="layui-edge layui-table-sort-desc" title="' + gettext("sort_by_desc") + '"></i></span>', "{{# } }}", "{{# } }}", "</div>", "</th>", e.fixed ? "{{# }; }}" : "", "{{# }); }}", "</tr>", "{{# }); }}", "</thead>", "</table>"].join("")
    }

    function n(e) {
        this.index = ++b.index, this.config = g.extend({}, this.config, b.config, e), this.render()
    }

    var g = layui.$, v = layui.laytpl, r = layui.laypage, x = layui.layer, f = layui.form,
        p = (layui.util, layui.hint()), h = layui.device(), b = {
            config: {checkName: "LAY_CHECKED", indexName: "LAY_TABLE_INDEX"},
            cache: {},
            index: layui.table ? layui.table.index + 1e4 : 0,
            set: function (e) {
                return this.config = g.extend({}, this.config, e), this
            },
            on: function (e, t) {
                return layui.onevent.call(this, y, e, t)
            }
        }, y = "table", k = "layui-hide", l = "layui-none", o = "layui-table-view", s = ".layui-table-header",
        w = ".layui-table-body", C = ".layui-table-sort", T = "layui-table-edit", E = "layui-table-hover",
        a = ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', "<tbody></tbody>", "</table>"].join(""),
        c = ['<div class="layui-form layui-border-box {{d.VIEW_CLASS}}{{# if(d.data.className){ }} {{ d.data.className }}{{# } }}" lay-filter="LAY-table-{{d.index}}" lay-id="{{ d.data.id }}" style="{{# if(d.data.width){ }}width:{{d.data.width}}px;{{# } }} {{# if(d.data.height){ }}height:{{d.data.height}}px;{{# } }}">', "{{# if(d.data.toolbar){ }}", '<div class="layui-table-tool">', '<div class="layui-table-tool-temp"></div>', '<div class="layui-table-tool-self"></div>', "</div>", "{{# } }}", '<div class="layui-table-box">', "{{# if(d.data.loading){ }}", '<div class="layui-table-init" style="background-color: #fff;">', '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>', "</div>", "{{# } }}", "{{# var left, right; }}", '<div class="layui-table-header">', t(), "</div>", '<div class="layui-table-body layui-table-main">', a, "</div>", "{{# if(left){ }}", '<div class="layui-table-fixed layui-table-fixed-l">', '<div class="layui-table-header">', t({fixed: !0}), "</div>", '<div class="layui-table-body">', a, "</div>", "</div>", "{{# }; }}", "{{# if(right){ }}", '<div class="layui-table-fixed layui-table-fixed-r">', '<div class="layui-table-header">', t({fixed: "right"}), '<div class="layui-table-mend"></div>', "</div>", '<div class="layui-table-body">', a, "</div>", "</div>", "{{# }; }}", "</div>", "{{# if(d.data.totalRow){ }}", '<div class="layui-table-total">', '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ', '{{# if(d.data.skin){ }}lay-skin="{{d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>', '<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>', "</table>", "</div>", "{{# } }}", "{{# if(d.data.page){ }}", '<div class="layui-table-page">', '<div id="layui-table-page{{d.index}}"></div>', "</div>", "{{# } }}", "<style>", "{{# layui.each(d.data.cols, function(i1, item1){", "layui.each(item1, function(i2, item2){ }}", ".laytable-cell-{{d.index}}-{{i1}}-{{i2}}{ ", "{{# if(item2.width){ }}", "width: {{item2.width}}px;", "{{# } }}", " }", "{{# });", "}); }}", "</style>", "</div>"].join(""),
        S = g(window), A = g(document);
    n.prototype.config = {
        limit: 10,
        loading: !0,
        cellMinWidth: 60,
        defaultToolbar: ["filter", "exports", "print"],
        autoSort: !0,
        text: {none: "无数据"}
    }, n.prototype.render = function () {
        var e = this, t = e.config;
        if (t.elem = g(t.elem), t.where = t.where || {}, t.id = t.id || t.elem.attr("id") || e.index, t.request = g.extend({
            pageName: "page",
            limitName: "limit"
        }, t.request), t.response = g.extend({
            statusName: "code",
            statusCode: 0,
            msgName: "msg",
            dataName: "data",
            totalRowName: "totalRow",
            countName: "count"
        }, t.response), "object" == typeof t.page && (t.limit = t.page.limit || t.limit, t.limits = t.page.limits || t.limits, e.page = t.page.curr = t.page.curr || 1, delete t.page.elem, delete t.page.jump), !t.elem[0]) return e;
        t.height && /^full-\d+$/.test(t.height) && (e.fullHeightGap = t.height.split("-")[1], t.height = S.height() - e.fullHeightGap), e.setInit();
        var n = t.elem, i = n.next("." + o), a = e.elem = g(v(c).render({VIEW_CLASS: o, data: t, index: e.index}));
        t.index = e.index, e.key = t.id || t.index, i[0] && i.remove(), n.after(a), e.layTool = a.find(".layui-table-tool"), e.layBox = a.find(".layui-table-box"), e.layHeader = a.find(s), e.layMain = a.find(".layui-table-main"), e.layBody = a.find(w), e.layFixed = a.find(".layui-table-fixed"), e.layFixLeft = a.find(".layui-table-fixed-l"), e.layFixRight = a.find(".layui-table-fixed-r"), e.layTotal = a.find(".layui-table-total"), e.layPage = a.find(".layui-table-page"), e.renderToolbar(), e.fullSize(), 1 < t.cols.length && (t = e.layFixed.find(s).find("th")).height(e.layHeader.height() - 1 - parseFloat(t.css("padding-top")) - parseFloat(t.css("padding-bottom"))), e.pullData(e.page), e.events()
    }, n.prototype.initOpts = function (e) {
        var t = (this.config, {checkbox: 48, radio: 48, space: 15, numbers: 40});
        e.checkbox && (e.type = "checkbox"), e.space && (e.type = "space"), e.type || (e.type = "normal"), "normal" !== e.type && (e.unresize = !0, e.width = e.width || t[e.type])
    }, n.prototype.setInit = function (e) {
        var t = this, r = t.config;
        return r.clientWidth = r.width || i(), "width" === e ? r.clientWidth : void layui.each(r.cols, function (o, e) {
            layui.each(e, function (n, i) {
                var a;
                i ? (i.key = o + "-" + n, i.hide = i.hide || !1, (i.colGroup || 1 < i.colspan) && (a = 0, layui.each(r.cols[o + 1], function (e, t) {
                    t.HAS_PARENT || 1 < a && a == i.colspan || (t.HAS_PARENT = !0, t.parentKey = o + "-" + n, a += parseInt(1 < t.colspan ? t.colspan : 1))
                }), i.colGroup = !0), t.initOpts(i)) : e.splice(n, 1)
            })
        });

        function i(e) {
            var t, n = (e = e || r.elem.parent()).width();
            try {
                t = "none" === e.css("display")
            } catch (e) {
            }
            return !e[0] || n && !t ? n : i(e.parent())
        }
    }, n.prototype.renderToolbar = function () {
        var e = this.config,
            t = ['<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>', '<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>', '<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'].join(""),
            n = this.layTool.find(".layui-table-tool-temp");
        "default" === e.toolbar ? n.html(t) : "string" != typeof e.toolbar || (t = g(e.toolbar).html() || "") && n.html(v(t).render(e));
        var i = {
            filter: {title: "筛选列", layEvent: "LAYTABLE_COLS", icon: "layui-icon-cols"},
            exports: {title: "导出", layEvent: "LAYTABLE_EXPORT", icon: "layui-icon-export"},
            print: {title: "打印", layEvent: "LAYTABLE_PRINT", icon: "layui-icon-print"}
        }, a = [];
        "object" == typeof e.defaultToolbar && layui.each(e.defaultToolbar, function (e, t) {
            t = "string" == typeof t ? i[t] : t;
            t && a.push('<div class="layui-inline" title="' + t.title + '" lay-event="' + t.layEvent + '"><i class="layui-icon ' + t.icon + '"></i></div>')
        }), this.layTool.find(".layui-table-tool-self").html(a.join(""))
    }, n.prototype.setParentCol = function (e, t) {
        var n = this.config, i = this.layHeader.find('th[data-key="' + n.index + "-" + t + '"]'),
            a = parseInt(i.attr("colspan")) || 0;
        i[0] && (t = t.split("-"), t = n.cols[t[0]][t[1]], e ? a-- : a++, i.attr("colspan", a), i[a < 1 ? "addClass" : "removeClass"](k), t.colspan = a, t.hide = a < 1, (i = i.data("parentkey")) && this.setParentCol(e, i))
    }, n.prototype.setColsPatch = function () {
        var n = this, e = n.config;
        layui.each(e.cols, function (e, t) {
            layui.each(t, function (e, t) {
                t.hide && n.setParentCol(t.hide, t.parentKey)
            })
        })
    }, n.prototype.setColsWidth = function () {
        var i = this, r = i.config, n = 0, l = 0, s = 0, c = 0, u = i.setInit("width");
        i.eachCols(function (e, t) {
            t.hide || n++
        });
        var u = u - ("line" === r.skin || "nob" === r.skin ? 2 : n + 1) - i.getScrollWidth(i.layMain[0]) - 1,
            e = function (o) {
                layui.each(r.cols, function (e, a) {
                    layui.each(a, function (e, t) {
                        var n = 0, i = t.minWidth || r.cellMinWidth;
                        return t ? void (t.colGroup || t.hide || (o ? s && s < i && (l--, n = i) : (n = t.width || 0, /\d+%$/.test(n) ? (n = Math.floor(parseFloat(n) / 100 * u)) < i && (n = i) : n || (t.width = n = 0, l++)), t.hide && (n = 0), c += n)) : void a.splice(e, 1)
                    })
                }), c < u && l && (s = (u - c) / l)
            };
        e(), e(!0), i.autoColNums = l, i.eachCols(function (e, t) {
            var n = t.minWidth || r.cellMinWidth;
            t.colGroup || t.hide || (0 === t.width ? i.getCssRule(r.index + "-" + t.key, function (e) {
                e.style.width = Math.floor(n <= s ? s : n) + "px"
            }) : /\d+%$/.test(t.width) && i.getCssRule(r.index + "-" + t.key, function (e) {
                e.style.width = Math.floor(parseFloat(t.width) / 100 * u) + "px"
            }))
        });
        var t, a, o = i.layMain.width() - i.getScrollWidth(i.layMain[0]) - i.layMain.children("table").outerWidth();
        i.autoColNums && -n <= o && o <= n && (e = (a = (t = function (e) {
            return !(e = e || i.layHeader.eq(0).find("thead th:last-child")).data("field") && e.prev()[0] ? t(e.prev()) : e
        })()).data("key"), i.getCssRule(e, function (e) {
            var t = e.style.width || a.outerWidth();
            e.style.width = parseFloat(t) + o + "px", 0 < i.layMain.height() - i.layMain.prop("clientHeight") && (e.style.width = parseFloat(e.style.width) - 1 + "px")
        })), i.loading(!0)
    }, n.prototype.resize = function () {
        this.fullSize(), this.setColsWidth(), this.scrollPatch()
    }, n.prototype.reload = function (e, t) {
        e = e || {}, delete this.haveInit, e.data && e.data.constructor === Array && delete this.config.data, this.config = g.extend(t, {}, this.config, e), this.render()
    }, n.prototype.errorView = function (e) {
        var t = this.layMain.find("." + l), e = g('<div class="' + l + '">' + (e || "Error") + "</div>");
        t[0] && (this.layNone.remove(), t.remove()), this.layFixed.addClass(k), this.layMain.find("tbody").html(""), this.layMain.append(this.layNone = e), b.cache[this.key] = []
    }, n.prototype.page = 1, n.prototype.pullData = function (t) {
        function n() {
            "object" == typeof o.initSort && a.sort(o.initSort.field, o.initSort.type)
        }

        var e, i, a = this, o = a.config, r = o.request, l = o.response;
        a.startTime = (new Date).getTime(), o.url ? ((i = {})[r.pageName] = t, i[r.limitName] = o.limit, e = g.extend(i, o.where), o.contentType && 0 == o.contentType.indexOf("application/json") && (e = JSON.stringify(e)), a.loading(), g.ajax({
            type: o.method || "get",
            url: o.url,
            contentType: o.contentType,
            data: e,
            dataType: "json",
            headers: o.headers || {},
            success: function (e) {
                (e = "function" == typeof o.parseData ? o.parseData(e) || e : e)[l.statusName] != l.statusCode ? (a.renderForm(), a.errorView(e[l.msgName] || '返回的数据不符合规范，正确的成功状态码应为："' + l.statusName + '": ' + l.statusCode)) : (a.renderData(e, t, e[l.countName]), n(), o.time = (new Date).getTime() - a.startTime + " ms"), a.setColsWidth(), "function" == typeof o.done && o.done(e, t, e[l.countName])
            },
            error: function (e, t) {
                a.errorView(gettext("layui_table_api_request_error: ") + t), a.renderForm(), a.setColsWidth(), "function" == typeof o.error && o.error(e, t)
            }
        })) : o.data && o.data.constructor === Array && (i = t * o.limit - o.limit, (e = {})[l.dataName] = o.data.concat().splice(i, o.limit), e[l.countName] = o.data.length, "object" == typeof o.totalRow && (e[l.totalRowName] = g.extend({}, o.totalRow)), a.renderData(e, t, e[l.countName]), n(), a.setColsWidth(), "function" == typeof o.done && o.done(e, t, e[l.countName]))
    }, n.prototype.eachCols = function (e) {
        return b.eachCols(null, e, this.config.cols), this
    }, n.prototype.renderData = function (e, t, n, i) {
        var d = this, f = d.config, a = e[f.response.dataName] || [], o = e[f.response.totalRowName], p = [], h = [],
            y = [], e = function () {
                var u;
                return !i && d.sortKey ? d.sort(d.sortKey.field, d.sortKey.sort, !0) : (layui.each(a, function (a, o) {
                    var r = [], l = [], s = [], c = a + f.limit * (t - 1) + 1;
                    0 !== o.length && (i || (o[b.config.indexName] = a), d.eachCols(function (e, n) {
                        var t = n.field || e, e = f.index + "-" + n.key, i = o[t];
                        null != i || (i = ""), n.colGroup || (e = ['<td data-field="' + t + '" data-key="' + e + '" ' + (t = [], n.edit && t.push('data-edit="' + n.edit + '"'), n.align && t.push('align="' + n.align + '"'), n.templet && t.push('data-content="' + i + '"'), n.toolbar && t.push('data-off="true"'), n.event && t.push('lay-event="' + n.event + '"'), n.style && t.push('style="' + n.style + '"'), n.minWidth && t.push('data-minwidth="' + n.minWidth + '"'), t.join(" ")) + ' class="' + (t = [], n.hide && t.push(k), n.field || t.push("layui-table-col-special"), t.join(" ")) + '">', '<div class="layui-table-cell laytable-cell-' + ("normal" === n.type ? e : e + " laytable-cell-" + n.type) + '">' + function () {
                            var e = g.extend(!0, {LAY_INDEX: c}, o), t = b.config.checkName;
                            switch (n.type) {
                                case"checkbox":
                                    return '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" ' + (n[t] ? (o[t] = n[t], n[t] ? "checked" : "") : e[t] ? "checked" : "") + ">";
                                case"radio":
                                    return e[t] && (u = a), '<input type="radio" name="layTableRadio_' + f.index + '" ' + (e[t] ? "checked" : "") + ' lay-type="layTableRadio">';
                                case"numbers":
                                    return c
                            }
                            return n.toolbar ? v(g(n.toolbar).html() || "").render(e) : m(n, i, e)
                        }(), "</div></td>"].join(""), r.push(e), n.fixed && "right" !== n.fixed && l.push(e), "right" === n.fixed && s.push(e))
                    }), p.push('<tr data-index="' + a + '">' + r.join("") + "</tr>"), h.push('<tr data-index="' + a + '">' + l.join("") + "</tr>"), y.push('<tr data-index="' + a + '">' + s.join("") + "</tr>"))
                }), d.layBody.scrollTop(0), d.layMain.find("." + l).remove(), d.layMain.find("tbody").html(p.join("")), d.layFixLeft.find("tbody").html(h.join("")), d.layFixRight.find("tbody").html(y.join("")), d.renderForm(), "number" == typeof u && d.setThisRowChecked(u), d.syncCheckAll(), d.haveInit ? d.scrollPatch() : setTimeout(function () {
                    d.scrollPatch()
                }, 50), d.haveInit = !0, x.close(d.tipsIndex), f.HAS_SET_COLS_PATCH || d.setColsPatch(), void (f.HAS_SET_COLS_PATCH = !0))
            };
        return b.cache[d.key] = a, d.layPage[0 == n || 0 === a.length && 1 == t ? "addClass" : "removeClass"](k), 0 === a.length ? (d.renderForm(), d.errorView(f.text.none)) : (d.layFixed.removeClass(k), i ? e() : (e(), d.renderTotal(a, o), void (f.page && (f.page = g.extend({
            elem: "layui-table-page" + f.index,
            count: n,
            limit: f.limit,
            limits: f.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
            groups: 3,
            layout: ["prev", "page", "next", "skip", "count", "limit"],
            prev: '<i class="layui-icon">&#xe603;</i>',
            next: '<i class="layui-icon">&#xe602;</i>',
            jump: function (e, t) {
                t || (d.page = e.curr, f.limit = e.limit, d.pullData(e.curr))
            }
        }, f.page), f.page.count = n, r.render(f.page)))))
    }, n.prototype.renderTotal = function (e, o) {
        var r, l = this, s = l.config, c = {};
        s.totalRow && (layui.each(e, function (e, i) {
            0 !== i.length && l.eachCols(function (e, t) {
                var n = t.field || e, e = i[n];
                t.totalRow && (c[n] = (c[n] || 0) + (parseFloat(e) || 0))
            })
        }), l.dataTotal = {}, r = [], l.eachCols(function (e, t) {
            var n, i, a = t.field || e,
                e = (n = t.totalRowText || "", i = parseFloat(c[a]).toFixed(2), (e = {})[a] = i, n = t.totalRow && m(t, i, e) || n, o && o[t.field] || n),
                n = ['<td data-field="' + a + '" data-key="' + s.index + "-" + t.key + '" ' + (n = [], t.align && n.push('align="' + t.align + '"'), t.style && n.push('style="' + t.style + '"'), t.minWidth && n.push('data-minwidth="' + t.minWidth + '"'), n.join(" ")) + ' class="' + (n = [], t.hide && n.push(k), t.field || n.push("layui-table-col-special"), n.join(" ")) + '">', '<div class="layui-table-cell laytable-cell-' + (n = s.index + "-" + t.key, "normal" === t.type ? n : n + " laytable-cell-" + t.type) + '">' + ("string" == typeof (n = t.totalRow || s.totalRow) ? v(n).render(g.extend({TOTAL_NUMS: e}, t)) : e), "</div></td>"].join("");
            t.field && (l.dataTotal[a] = e), r.push(n)
        }), l.layTotal.find("tbody").html("<tr>" + r.join("") + "</tr>"))
    }, n.prototype.getColElem = function (e, t) {
        var n = this.config;
        return e.eq(0).find(".laytable-cell-" + n.index + "-" + t + ":eq(0)")
    }, n.prototype.renderForm = function (e) {
        f.render(e, "LAY-table-" + this.index)
    }, n.prototype.setThisRowChecked = function (e) {
        var t = (this.config, "layui-table-click");
        this.layBody.find('tr[data-index="' + e + '"]').addClass(t).siblings("tr").removeClass(t)
    }, n.prototype.sort = function (a, e, t, n) {
        var i, o = this, r = {}, l = o.config, s = l.elem.attr("lay-filter"), c = b.cache[o.key];
        "string" == typeof a && (u = a, o.layHeader.find("th").each(function (e, t) {
            var n = g(this), i = n.data("field");
            if (i === a) return a = n, u = i, !1
        }));
        try {
            var u = u || a.data("field"), d = a.data("key");
            if (o.sortKey && !t && u === o.sortKey.field && e === o.sortKey.sort) return;
            var f = o.layHeader.find("th .laytable-cell-" + d).find(C);
            o.layHeader.find("th").find(C).removeAttr("lay-sort"), f.attr("lay-sort", e || null), o.layFixed.find("th")
        } catch (e) {
            p.error("Table modules: sort field '" + u + "' not matched")
        }
        o.sortKey = {
            field: u,
            sort: e
        }, l.autoSort && ("asc" === e ? i = layui.sort(c, u) : "desc" === e ? i = layui.sort(c, u, !0) : (i = layui.sort(c, b.config.indexName), delete o.sortKey)), r[l.response.dataName] = i || c, o.renderData(r, o.page, o.count, !0), n && layui.event.call(a, y, "sort(" + s + ")", {
            field: u,
            type: e
        })
    }, n.prototype.loading = function (e) {
        this.config.loading && (e ? (this.layInit && this.layInit.remove(), delete this.layInit, this.layBox.find(".layui-table-init").remove()) : (this.layInit = g(['<div class="layui-table-init">', '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>', "</div>"].join("")), this.layBox.append(this.layInit)))
    }, n.prototype.setCheckData = function (e, t) {
        var n = this.config, i = b.cache[this.key];
        i[e] && i[e].constructor !== Array && (i[e][n.checkName] = t)
    }, n.prototype.syncCheckAll = function () {
        function e(n) {
            return t.eachCols(function (e, t) {
                "checkbox" === t.type && (t[i.checkName] = n)
            }), n
        }

        var t = this, i = t.config, n = t.layHeader.find('input[name="layTableCheckbox"]');
        n[0] && (b.checkStatus(t.key).isAll ? (n[0].checked || (n.prop("checked", !0), t.renderForm("checkbox")), e(!0)) : (n[0].checked && (n.prop("checked", !1), t.renderForm("checkbox")), e(!1)))
    }, n.prototype.getCssRule = function (n, i) {
        var e = this.elem.find("style")[0], e = e.sheet || e.styleSheet || {}, e = e.cssRules || e.rules;
        layui.each(e, function (e, t) {
            if (t.selectorText === ".laytable-cell-" + n) return i(t), !0
        })
    }, n.prototype.fullSize = function () {
        var e = this.config, t = e.height;
        this.fullHeightGap && (t = S.height() - this.fullHeightGap, this.elem.css("height", t = t < 135 ? 135 : t)), t && (t = parseFloat(t) - (this.layHeader.outerHeight() || 38), e.toolbar && (t -= this.layTool.outerHeight() || 50), e.totalRow && (t -= this.layTotal.outerHeight() || 40), e.page && (t -= this.layPage.outerHeight() || 41), this.layMain.css("height", t - 2))
    }, n.prototype.getScrollWidth = function (e) {
        var t = 0;
        return e ? t = e.offsetWidth - e.clientWidth : ((e = document.createElement("div")).style.width = "100px", e.style.height = "100px", e.style.overflowY = "scroll", document.body.appendChild(e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e)), t
    }, n.prototype.scrollPatch = function () {
        var e = this, t = e.layMain.children("table"), n = e.layMain.width() - e.layMain.prop("clientWidth"),
            i = e.layMain.height() - e.layMain.prop("clientHeight"),
            a = (e.getScrollWidth(e.layMain[0]), t.outerWidth() - e.layMain.width()), o = function (e) {
                var t;
                n && i ? (e = e.eq(0)).find(".layui-table-patch")[0] || ((t = g('<th class="layui-table-patch"><div class="layui-table-cell"></div></th>')).find("div").css({width: n}), e.find("tr").append(t)) : e.find(".layui-table-patch").remove()
            };
        o(e.layHeader), o(e.layTotal);
        o = e.layMain.height() - i;
        e.layFixed.find(w).css("height", t.height() >= o ? o : "auto"), e.layFixRight[0 < a ? "removeClass" : "addClass"](k), e.layFixRight.css("right", n - 1)
    }, n.prototype.events = function () {
        var a, s = this, c = s.config, i = g("body"), o = {}, e = s.layHeader.find("th"), r = ".layui-table-cell",
            u = c.elem.attr("lay-filter");
        s.layTool.on("click", "*[lay-event]", function (e) {
            function t(e) {
                var t = g(e.list), n = g('<ul class="layui-table-tool-panel"></ul>');
                n.html(t), c.height && n.css("max-height", c.height - (s.layTool.outerHeight() || 50)), i.find(".layui-table-tool-panel")[0] || i.append(n), s.renderForm(), n.on("click", function (e) {
                    layui.stope(e)
                }), e.done && e.done(n, t)
            }

            var n, i = g(this), a = i.attr("lay-event");
            switch (layui.stope(e), A.trigger("table.tool.panel.remove"), x.close(s.tipsIndex), a) {
                case"LAYTABLE_COLS":
                    t({
                        list: (n = [], s.eachCols(function (e, t) {
                            t.field && "normal" == t.type && n.push('<li><input type="checkbox" name="' + t.field + '" data-key="' + t.key + '" data-parentkey="' + (t.parentKey || "") + '" lay-skin="primary" ' + (t.hide ? "" : "checked") + ' title="' + (t.title || t.field) + '" lay-filter="LAY_TABLE_TOOL_COLS"></li>')
                        }), n.join("")), done: function () {
                            f.on("checkbox(LAY_TABLE_TOOL_COLS)", function (e) {
                                var e = g(e.elem), i = this.checked, a = e.data("key"), o = e.data("parentkey");
                                layui.each(c.cols, function (n, e) {
                                    layui.each(e, function (e, t) {
                                        n + "-" + e === a && (e = t.hide, t.hide = !i, s.elem.find('*[data-key="' + c.index + "-" + a + '"]')[i ? "removeClass" : "addClass"](k), e != t.hide && s.setParentCol(!i, o), s.resize())
                                    })
                                })
                            })
                        }
                    });
                    break;
                case"LAYTABLE_EXPORT":
                    h.ie ? x.tips("导出功能不支持 IE，请用 Chrome 等高级浏览器导出", this, {tips: 3}) : t({
                        list: ['<li data-type="csv">导出到 Csv 文件</li>', '<li data-type="xls">导出到 Excel 文件</li>'].join(""),
                        done: function (e, t) {
                            t.on("click", function () {
                                var e = g(this).data("type");
                                b.exportFile.call(s, c.id, null, e)
                            })
                        }
                    });
                    break;
                case"LAYTABLE_PRINT":
                    var o = window.open("打印窗口", "_blank"),
                        r = ["<style>", "body{font-size: 12px; color: #666;}", "table{width: 100%; border-collapse: collapse; border-spacing: 0;}", "th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #666;}", "a{color: #666; text-decoration:none;}", "*.layui-hide{display: none}", "</style>"].join(""),
                        l = g(s.layHeader.html());
                    l.append(s.layMain.find("table").html()), l.append(s.layTotal.find("table").html()), l.find("th.layui-table-patch").remove(), l.find(".layui-table-col-special").remove(), o.document.write(r + l.prop("outerHTML")), o.document.close(), o.print(), o.close()
            }
            layui.event.call(this, y, "toolbar(" + u + ")", g.extend({event: a, config: c}, {}))
        }), e.on("mousemove", function (e) {
            var t = g(this), n = t.offset().left, n = e.clientX - n;
            t.data("unresize") || o.resizeStart || (o.allowResize = t.width() - n <= 10, i.css("cursor", o.allowResize ? "col-resize" : ""))
        }).on("mouseleave", function () {
            g(this), o.resizeStart || i.css("cursor", "")
        }).on("mousedown", function (e) {
            var t, n = g(this);
            o.allowResize && (t = n.data("key"), e.preventDefault(), o.resizeStart = !0, o.offset = [e.clientX, e.clientY], s.getCssRule(t, function (e) {
                var t = e.style.width || n.outerWidth();
                o.rule = e, o.ruleWidth = parseFloat(t), o.minWidth = n.data("minwidth") || c.cellMinWidth
            }))
        }), A.on("mousemove", function (e) {
            o.resizeStart && (e.preventDefault(), o.rule && ((e = o.ruleWidth + e.clientX - o.offset[0]) < o.minWidth && (e = o.minWidth), o.rule.style.width = e + "px", x.close(s.tipsIndex)), a = 1)
        }).on("mouseup", function (e) {
            o.resizeStart && (o = {}, i.css("cursor", ""), s.scrollPatch()), 2 === a && (a = null)
        }), e.on("click", function (e) {
            var t = g(this), n = t.find(C), i = n.attr("lay-sort");
            return n[0] && 1 !== a ? void s.sort(t, "asc" === i ? "desc" : "desc" === i ? null : "asc", null, !0) : a = 2
        }).find(C + " .layui-edge ").on("click", function (e) {
            var t = g(this), n = t.index(), t = t.parents("th").eq(0).data("field");
            layui.stope(e), 0 === n ? s.sort(t, "asc", null, !0) : s.sort(t, "desc", null, !0)
        });
        var l = function (e) {
            var t = g(this).parents("tr").eq(0).data("index"), a = s.layBody.find('tr[data-index="' + t + '"]'),
                o = (o = b.cache[s.key] || [])[t] || {};
            return g.extend({
                tr: a, data: b.clearCacheKey(o), del: function () {
                    b.cache[s.key][t] = [], a.remove(), s.scrollPatch()
                }, update: function (e) {
                    e = e || {}, layui.each(e, function (n, e) {
                        var i, t;
                        n in o && (t = a.children('td[data-field="' + n + '"]'), o[n] = e, s.eachCols(function (e, t) {
                            t.field == n && t.templet && (i = t.templet)
                        }), t.children(r).html(m({templet: i}, e, o)), t.data("content", e))
                    })
                }
            }, e)
        };
        s.elem.on("click", 'input[name="layTableCheckbox"]+', function () {
            var e = g(this).prev(), t = s.layBody.find('input[name="layTableCheckbox"]'),
                n = e.parents("tr").eq(0).data("index"), i = e[0].checked,
                a = "layTableAllChoose" === e.attr("lay-filter");
            a ? (t.each(function (e, t) {
                t.checked = i, s.setCheckData(e, i)
            }), s.syncCheckAll(), s.renderForm("checkbox")) : (s.setCheckData(n, i), s.syncCheckAll()), layui.event.call(e[0], y, "checkbox(" + u + ")", l.call(e[0], {
                checked: i,
                type: a ? "all" : "one"
            }))
        }), s.elem.on("click", 'input[lay-type="layTableRadio"]+', function () {
            var e = g(this).prev(), t = e[0].checked, n = b.cache[s.key], i = e.parents("tr").eq(0).data("index");
            layui.each(n, function (e, t) {
                i === e ? t[c.checkName] = !0 : delete t[c.checkName]
            }), s.setThisRowChecked(i), layui.event.call(this, y, "radio(" + u + ")", l.call(this, {checked: t}))
        }), s.layBody.on("mouseenter", "tr", function () {
            var e = g(this), t = e.index();
            e.data("off") || s.layBody.find("tr:eq(" + t + ")").addClass(E)
        }).on("mouseleave", "tr", function () {
            var e = g(this), t = e.index();
            e.data("off") || s.layBody.find("tr:eq(" + t + ")").removeClass(E)
        }).on("click", "tr", function () {
            t.call(this, "row")
        }).on("dblclick", "tr", function () {
            t.call(this, "rowDouble")
        });
        var t = function (e) {
            var t = g(this);
            t.data("off") || layui.event.call(this, y, e + "(" + u + ")", l.call(t.children("td")[0]))
        };
        s.layBody.on("change", "." + T, function () {
            var e = g(this), t = this.value, n = e.parent().data("field"), e = e.parents("tr").eq(0).data("index");
            b.cache[s.key][e][n] = t, layui.event.call(this, y, "edit(" + u + ")", l.call(this, {value: t, field: n}))
        }).on("blur", "." + T, function () {
            var n, e = g(this), i = e.parent().data("field"), t = e.parents("tr").eq(0).data("index"),
                a = b.cache[s.key][t];
            s.eachCols(function (e, t) {
                t.field == i && t.templet && (n = t.templet)
            }), e.siblings(r).html((t = this.value, m({templet: n}, t, a))), e.parent().data("content", this.value), e.remove()
        }), s.layBody.on("click", "td", function (e) {
            var t = g(this), n = (t.data("field"), t.data("edit")), i = t.children(r);
            !t.data("off") && n && ((n = g('<input class="layui-input ' + T + '">'))[0].value = t.data("content") || i.text(), t.find("." + T)[0] || t.append(n), n.focus(), layui.stope(e))
        }).on("mouseenter", "td", function () {
            n.call(this)
        }).on("mouseleave", "td", function () {
            n.call(this, "hide")
        });
        var d = "layui-table-grid-down", n = function (e) {
            var t = g(this), n = t.children(r);
            t.data("off") || (e ? t.find(".layui-table-grid-down").remove() : n.prop("scrollWidth") > n.outerWidth() && (n.find("." + d)[0] || t.append('<div class="' + d + '"><i class="layui-icon layui-icon-down"></i></div>')))
        };
        s.layBody.on("click", "." + d, function (e) {
            var t = g(this).parent().children(r);
            s.tipsIndex = x.tips(['<div class="layui-table-tips-main" style="margin-top: -' + (t.height() + 16) + "px;" + ("sm" === c.size ? "padding: 4px 15px; font-size: 12px;" : "lg" === c.size ? "padding: 14px 15px;" : "") + '">', t.html(), "</div>", '<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'].join(""), t[0], {
                tips: [3, ""],
                time: -1,
                anim: -1,
                maxWidth: h.ios || h.android ? 300 : s.elem.width() / 2,
                isOutAnim: !1,
                skin: "layui-table-tips",
                success: function (e, t) {
                    e.find(".layui-table-tips-c").on("click", function () {
                        x.close(t)
                    })
                }
            }), layui.stope(e)
        }), s.layBody.on("click", "*[lay-event]", function () {
            var e = g(this), t = e.parents("tr").eq(0).data("index");
            layui.event.call(this, y, "tool(" + u + ")", l.call(this, {event: e.attr("lay-event")})), s.setThisRowChecked(t)
        }), s.layMain.on("scroll", function () {
            var e = g(this), t = e.scrollLeft(), e = e.scrollTop();
            s.layHeader.scrollLeft(t), s.layTotal.scrollLeft(t), s.layFixed.find(w).scrollTop(e), x.close(s.tipsIndex)
        }), S.on("resize", function () {
            s.resize()
        })
    }, A.on("click", function () {
        A.trigger("table.remove.tool.panel")
    }), A.on("table.remove.tool.panel", function () {
        g(".layui-table-tool-panel").remove()
    }), b.init = function (n, i) {
        i = i || {};
        var e = g(n ? 'table[lay-filter="' + n + '"]' : ".layui-table[lay-data]"),
            a = "Table element property lay-data configuration item has a syntax error: ";
        return e.each(function () {
            var e = g(this), t = e.attr("lay-data");
            try {
                t = new Function("return " + t)()
            } catch (e) {
                p.error(a + t, "error")
            }
            var o = [], r = g.extend({
                elem: this,
                cols: [],
                data: [],
                skin: e.attr("lay-skin"),
                size: e.attr("lay-size"),
                even: "string" == typeof e.attr("lay-even")
            }, b.config, i, t);
            n && e.hide(), e.find("thead>tr").each(function (i) {
                r.cols[i] = [], g(this).children().each(function (e) {
                    var t = g(this), n = t.attr("lay-data");
                    try {
                        n = new Function("return " + n)()
                    } catch (e) {
                        return p.error(a + n)
                    }
                    n = g.extend({
                        title: t.text(),
                        colspan: t.attr("colspan") || 0,
                        rowspan: t.attr("rowspan") || 0
                    }, n);
                    n.colspan < 2 && o.push(n), r.cols[i].push(n)
                })
            }), e.find("tbody>tr").each(function (e) {
                var n = g(this), a = {};
                n.children("td").each(function (e, t) {
                    var n = g(this), i = n.data("field");
                    if (i) return a[i] = n.html()
                }), layui.each(o, function (e, t) {
                    e = n.children("td").eq(e);
                    a[t.field] = e.html()
                }), r.data[e] = a
            }), b.render(r)
        }), this
    }, u.that = {}, u.config = {}, b.eachCols = function (e, n, a) {
        var e = u.config[e] || {}, o = [], r = 0;
        a = g.extend(!0, [], a || e.cols), layui.each(a, function (t, e) {
            layui.each(e, function (e, n) {
                var i;
                n.colGroup && (i = 0, r++, n.CHILD_COLS = [], layui.each(a[t + 1], function (e, t) {
                    t.PARENT_COL_INDEX || 1 < i && i == n.colspan || (t.PARENT_COL_INDEX = r, n.CHILD_COLS.push(t), i += parseInt(1 < t.colspan ? t.colspan : 1))
                })), n.PARENT_COL_INDEX || o.push(n)
            })
        });

        function i(e) {
            layui.each(e || o, function (e, t) {
                return t.CHILD_COLS ? i(t.CHILD_COLS) : void ("function" == typeof n && n(e, t))
            })
        }

        i()
    }, b.checkStatus = function (e) {
        var n = 0, i = 0, a = [], e = b.cache[e] || [];
        return layui.each(e, function (e, t) {
            return t.constructor === Array ? void i++ : void (t[b.config.checkName] && (n++, a.push(b.clearCacheKey(t))))
        }), {data: a, isAll: !!e.length && n === e.length - i}
    }, b.getData = function (e) {
        var n = [], e = b.cache[e] || [];
        return layui.each(e, function (e, t) {
            t.constructor !== Array && n.push(b.clearCacheKey(t))
        }), n
    }, b.exportFile = function (e, t, n) {
        var i = this;
        t = t || b.clearCacheKey(b.cache[e]);
        var r, l, a, o = u.config[e] || {}, s = {csv: "text/csv", xls: "application/vnd.ms-excel"}[n = n || "csv"],
            c = document.createElement("a");
        return h.ie ? p.error("IE_NOT_SUPPORT_EXPORTS") : (c.href = "data:" + s + ";charset=utf-8,\ufeff" + encodeURIComponent((r = [], l = [], a = [], layui.each(t, function (i, a) {
            var o = [];
            "object" == typeof e ? (layui.each(e, function (e, t) {
                0 == i && r.push(t || "")
            }), layui.each(b.clearCacheKey(a), function (e, t) {
                o.push('"' + (t || "") + '"')
            })) : b.eachCols(e, function (e, t) {
                var n;
                t.field && "normal" == t.type && !t.hide && (null != (n = a[t.field]) || (n = ""), 0 == i && r.push(t.title || ""), o.push('"' + m(t, n, a, "text") + '"'))
            }), l.push(o.join(","))
        }), layui.each(i.dataTotal, function (e, t) {
            a.push(t)
        }), r.join(",") + "\r\n" + l.join("\r\n") + "\r\n" + a.join(","))), c.download = (o.title || "table_" + (o.index || "")) + "." + n, document.body.appendChild(c), c.click(), void document.body.removeChild(c))
    }, b.resize = function (e) {
        e ? i(e) && u.that[e].resize() : layui.each(u.that, function () {
            this.resize()
        })
    }, b.reload = function (e, t, n) {
        if (i(e)) {
            e = u.that[e];
            return e.reload(t, n), u.call(e)
        }
    }, b.render = function (e) {
        e = new n(e);
        return u.call(e)
    }, b.clearCacheKey = function (e) {
        return delete (e = g.extend({}, e))[b.config.checkName], delete e[b.config.indexName], e
    }, b.Class = n, b.thisTable = u, g(function () {
        b.init()
    }), e(y, b)
}), layui.define("jquery", function (e) {
    "use strict";

    function t(e) {
        this.config = a.extend({}, this.config, n.config, e), this.render()
    }

    var a = layui.$, n = (layui.hint(), layui.device(), {
            config: {}, set: function (e) {
                return this.config = a.extend({}, this.config, e), this
            }, on: function (e, t) {
                return layui.onevent.call(this, l, e, t)
            }
        }), l = "carousel", s = "layui-this", c = "layui-carousel-left", u = "layui-carousel-right",
        d = "layui-carousel-prev", f = "layui-carousel-next", i = "layui-carousel-arrow", o = "layui-carousel-ind";
    t.prototype.config = {
        width: "600px",
        height: "280px",
        full: !1,
        arrow: "hover",
        indicator: "inside",
        autoplay: !0,
        interval: 3e3,
        anim: "",
        trigger: "click",
        index: 0
    }, t.prototype.render = function () {
        var e = this, t = e.config;
        t.elem = a(t.elem), t.elem[0] && (e.elemItem = t.elem.find(">*[carousel-item]>*"), t.index < 0 && (t.index = 0), t.index >= e.elemItem.length && (t.index = e.elemItem.length - 1), t.interval < 800 && (t.interval = 800), t.full ? t.elem.css({
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: 9999
        }) : t.elem.css({
            width: t.width,
            height: t.height
        }), t.elem.attr("lay-anim", t.anim), e.elemItem.eq(t.index).addClass(s), e.elemItem.length <= 1 || (e.indicator(), e.arrow(), e.autoplay(), e.events()))
    }, t.prototype.reload = function (e) {
        clearInterval(this.timer), this.config = a.extend({}, this.config, e), this.render()
    }, t.prototype.prevIndex = function () {
        var e = this.config.index - 1;
        return e = e < 0 ? this.elemItem.length - 1 : e
    }, t.prototype.nextIndex = function () {
        var e = this.config.index + 1;
        return e = e >= this.elemItem.length ? 0 : e
    }, t.prototype.addIndex = function (e) {
        var t = this.config;
        t.index = t.index + (e = e || 1), t.index >= this.elemItem.length && (t.index = 0)
    }, t.prototype.subIndex = function (e) {
        var t = this.config;
        t.index = t.index - (e = e || 1), t.index < 0 && (t.index = this.elemItem.length - 1)
    }, t.prototype.autoplay = function () {
        var e = this, t = e.config;
        t.autoplay && (clearInterval(e.timer), e.timer = setInterval(function () {
            e.slide()
        }, t.interval))
    }, t.prototype.arrow = function () {
        var t = this, e = t.config,
            n = a(['<button class="layui-icon ' + i + '" lay-type="sub">' + ("updown" === e.anim ? "&#xe619;" : "&#xe603;") + "</button>", '<button class="layui-icon ' + i + '" lay-type="add">' + ("updown" === e.anim ? "&#xe61a;" : "&#xe602;") + "</button>"].join(""));
        e.elem.attr("lay-arrow", e.arrow), e.elem.find("." + i)[0] && e.elem.find("." + i).remove(), e.elem.append(n), n.on("click", function () {
            var e = a(this).attr("lay-type");
            t.slide(e)
        })
    }, t.prototype.indicator = function () {
        var t, n = this, i = n.config,
            e = n.elemInd = a(['<div class="' + o + '"><ul>', (t = [], layui.each(n.elemItem, function (e) {
                t.push("<li" + (i.index === e ? ' class="layui-this"' : "") + "></li>")
            }), t.join("")), "</ul></div>"].join(""));
        i.elem.attr("lay-indicator", i.indicator), i.elem.find("." + o)[0] && i.elem.find("." + o).remove(), i.elem.append(e), "updown" === i.anim && e.css("margin-top", -e.height() / 2), e.find("li").on("hover" === i.trigger ? "mouseover" : i.trigger, function () {
            var e = a(this).index();
            e > i.index ? n.slide("add", e - i.index) : e < i.index && n.slide("sub", i.index - e)
        })
    }, t.prototype.slide = function (e, t) {
        var n = this, i = n.elemItem, a = n.config, o = a.index, r = a.elem.attr("lay-filter");
        n.haveSlide || ("sub" === e ? (n.subIndex(t), i.eq(a.index).addClass(d), setTimeout(function () {
            i.eq(o).addClass(u), i.eq(a.index).addClass(u)
        }, 50)) : (n.addIndex(t), i.eq(a.index).addClass(f), setTimeout(function () {
            i.eq(o).addClass(c), i.eq(a.index).addClass(c)
        }, 50)), setTimeout(function () {
            i.removeClass(s + " " + d + " " + f + " " + c + " " + u), i.eq(a.index).addClass(s), n.haveSlide = !1
        }, 300), n.elemInd.find("li").eq(a.index).addClass(s).siblings().removeClass(s), n.haveSlide = !0, layui.event.call(this, l, "change(" + r + ")", {
            index: a.index,
            prevIndex: o,
            item: i.eq(a.index)
        }))
    }, t.prototype.events = function () {
        var e = this, t = e.config;
        t.elem.data("haveEvents") || (t.elem.on("mouseenter", function () {
            clearInterval(e.timer)
        }).on("mouseleave", function () {
            e.autoplay()
        }), t.elem.data("haveEvents", !0))
    }, n.render = function (e) {
        return new t(e)
    }, e(l, n)
}), layui.define("jquery", function (e) {
    "use strict";

    function t(e) {
        this.index = ++n.index, this.config = l.extend({}, this.config, n.config, e), this.render()
    }

    var l = layui.jquery, n = {
            config: {}, index: layui.rate ? layui.rate.index + 1e4 : 0, set: function (e) {
                return this.config = l.extend({}, this.config, e), this
            }, on: function (e, t) {
                return layui.onevent.call(this, i, e, t)
            }
        }, i = "rate", s = "layui-icon-rate", c = "layui-icon-rate-solid", r = "layui-icon-rate-half",
        u = "layui-icon-rate-solid layui-icon-rate-half", d = "layui-icon-rate layui-icon-rate-half";
    t.prototype.config = {
        length: 5,
        text: !1,
        readonly: !1,
        half: !1,
        value: 0,
        theme: ""
    }, t.prototype.render = function () {
        var e = this.config, t = e.theme ? 'style="color: ' + e.theme + ';"' : "";
        e.elem = l(e.elem), e.value > e.length && (e.value = e.length), parseInt(e.value) !== e.value && (e.half || (e.value = Math.ceil(e.value) - e.value < .5 ? Math.ceil(e.value) : Math.floor(e.value)));
        for (var n = '<ul class="layui-rate" ' + (e.readonly ? "readonly" : "") + ">", i = 1; i <= e.length; i++) {
            var a = '<li class="layui-inline"><i class="layui-icon ' + (i > Math.floor(e.value) ? s : c) + '" ' + t + "></i></li>";
            e.half && parseInt(e.value) !== e.value && i == Math.ceil(e.value) ? n = n + '<li><i class="layui-icon layui-icon-rate-half" ' + t + "></i></li>" : n += a
        }
        n += "</ul>" + (e.text ? '<span class="layui-inline">' + e.value + "星" : "") + "</span>";
        var o = e.elem, r = o.next(".layui-rate");
        r[0] && r.remove(), this.elemTemp = l(n), e.span = this.elemTemp.next("span"), e.setText && e.setText(e.value), o.html(this.elemTemp), o.addClass("layui-inline"), e.readonly || this.action()
    }, t.prototype.setvalue = function (e) {
        this.config.value = e, this.render()
    }, t.prototype.action = function () {
        var i = this.config, a = this.elemTemp, o = a.find("i").width();
        a.children("li").each(function (e) {
            var t = e + 1, n = l(this);
            n.on("click", function (e) {
                i.value = t, !i.half || e.pageX - l(this).offset().left <= o / 2 && (i.value = i.value - .5), i.text && a.next("span").text(i.value + "星"), i.choose && i.choose(i.value), i.setText && i.setText(i.value)
            }), n.on("mousemove", function (e) {
                a.find("i").each(function () {
                    l(this).addClass(s).removeClass(u)
                }), a.find("i:lt(" + t + ")").each(function () {
                    l(this).addClass(c).removeClass(d)
                }), !i.half || e.pageX - l(this).offset().left <= o / 2 && n.children("i").addClass(r).removeClass(c)
            }), n.on("mouseleave", function () {
                a.find("i").each(function () {
                    l(this).addClass(s).removeClass(u)
                }), a.find("i:lt(" + Math.floor(i.value) + ")").each(function () {
                    l(this).addClass(c).removeClass(d)
                }), i.half && parseInt(i.value) !== i.value && a.children("li:eq(" + Math.floor(i.value) + ")").children("i").addClass(r).removeClass("layui-icon-rate-solid layui-icon-rate")
            })
        })
    }, t.prototype.events = function () {
        this.config
    }, n.render = function (e) {
        e = new t(e);
        return function () {
            var t = this;
            return {
                setvalue: function (e) {
                    t.setvalue.call(t, e)
                }, config: t.config
            }
        }.call(e)
    }, e(i, n)
}), layui.define("jquery", function (e) {
    "use strict";

    function t(e) {
    }

    var m = layui.$;
    t.prototype.load = function (e) {
        var i, a, o, t = 0, r = m((e = e || {}).elem);
        if (r[0]) {
            var n = m(e.scrollElem || document), l = e.mb || 50, s = !("isAuto" in e) || e.isAuto, c = e.end || "没有更多了",
                u = e.scrollElem && e.scrollElem !== document, d = "<cite>加载更多</cite>",
                f = m('<div class="layui-flow-more"><a href="javascript:;">' + d + "</a></div>");
            r.find(".layui-flow-more")[0] || r.append(f);
            var p, h = function (e, t) {
                e = m(e), f.before(e), (t = 0 == t || null) ? f.html(c) : f.find("a").html(d), a = t, i = null, p && p()
            }, y = function () {
                i = !0, f.find("a").html('<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>'), "function" == typeof e.done && e.done(++t, h)
            };
            return y(), f.find("a").on("click", function () {
                m(this), a || i || y()
            }), e.isLazyimg && (p = this.lazyimg({
                elem: e.elem + " img",
                scrollElem: e.scrollElem
            })), s && n.on("scroll", function () {
                var t = m(this), n = t.scrollTop();
                o && clearTimeout(o), !a && r.width() && (o = setTimeout(function () {
                    var e = (u ? t : m(window)).height();
                    (u ? t.prop("scrollHeight") : document.documentElement.scrollHeight) - n - e <= l && (i || y())
                }, 100))
            }), this
        }
    }, t.prototype.lazyimg = function (e) {
        var t, n, s = this, c = 0, u = m((e = e || {}).scrollElem || document), d = e.elem || "img",
            f = e.scrollElem && e.scrollElem !== document, p = function (t, e) {
                var n, i = u.scrollTop(), a = i + e, e = f ? t.offset().top - u.offset().top + i : t.offset().top;
                i <= e && e <= a && t.attr("lay-src") && (n = t.attr("lay-src"), layui.img(n, function () {
                    var e = s.lazyimg.elem.eq(c);
                    t.attr("src", n).removeAttr("lay-src"), e[0] && o(e), c++
                }, function () {
                    s.lazyimg.elem.eq(c), t.removeAttr("lay-src")
                }))
            }, o = function (e, t) {
                var n = (f ? t || u : m(window)).height(), i = u.scrollTop(), a = i + n;
                if (s.lazyimg.elem = m(d), e) p(e, n); else for (var o = 0; o < s.lazyimg.elem.length; o++) {
                    var r = s.lazyimg.elem.eq(o), l = f ? r.offset().top - u.offset().top + i : r.offset().top;
                    if (p(r, n), c = o, a < l) break
                }
            };
        return o(), t || (u.on("scroll", function () {
            var e = m(this);
            n && clearTimeout(n), n = setTimeout(function () {
                o(null, e)
            }, 50)
        }), t = !0), o
    }, e("flow", new t)
}), layui.define(["layer", "form"], function (e) {
    "use strict";

    function t() {
        this.index = 0, this.config = {
            tool: ["strong", "italic", "underline", "del", "|", "left", "center", "right", "|", "link", "unlink", "face", "image"],
            hideTool: [],
            height: 280
        }
    }

    var u = layui.$, d = layui.layer, a = layui.form, c = (layui.hint(), layui.device()), f = "layui-disabled";
    t.prototype.set = function (e) {
        return u.extend(!0, this.config, e), this
    }, t.prototype.on = function (e, t) {
        return layui.onevent("layedit", e, t)
    }, t.prototype.build = function (e, t) {
        t = t || {};
        var n, i, a = this.config, o = "layui-layedit", r = u("string" == typeof e ? "#" + e : e),
            l = "LAY_layedit_" + ++this.index, s = r.next("." + o), a = u.extend({}, a, t),
            t = (n = [], i = {}, layui.each(a.hideTool, function (e, t) {
                i[t] = !0
            }), layui.each(a.tool, function (e, t) {
                C[t] && !i[t] && n.push(C[t])
            }), n.join("")),
            e = u(['<div class="' + o + '">', '<div class="layui-unselect layui-layedit-tool">' + t + "</div>", '<div class="layui-layedit-iframe">', '<iframe id="' + l + '" name="' + l + '" textarea="' + e + '" frameborder="0"></iframe>', "</div>", "</div>"].join(""));
        return c.ie && c.ie < 8 ? r.removeClass("layui-hide").addClass("layui-show") : (s[0] && s.remove(), y.call(this, e, r[0], a), r.addClass("layui-hide").after(e), this.index)
    }, t.prototype.getContent = function (e) {
        e = o(e);
        if (e[0]) return n(e[0].document.body.innerHTML)
    }, t.prototype.getText = function (e) {
        e = o(e);
        if (e[0]) return u(e[0].document.body).text()
    }, t.prototype.setContent = function (e, t, n) {
        var i = o(e);
        i[0] && (n ? u(i[0].document.body).append(t) : u(i[0].document.body).html(t), layedit.sync(e))
    }, t.prototype.sync = function (e) {
        e = o(e);
        e[0] && u("#" + e[1].attr("textarea")).val(n(e[0].document.body.innerHTML))
    }, t.prototype.getSelection = function (e) {
        e = o(e);
        if (e[0]) {
            e = g(e[0].document);
            return document.selection ? e.text : e.toString()
        }
    };

    function p(e, t, n) {
        var i, a, o = this.document, r = document.createElement(e);
        for (i in t) r.setAttribute(i, t[i]);
        r.removeAttribute("text"), o.selection ? (a = n.text || t.text, "a" === e && !a || (a && (r.innerHTML = a), n.pasteHTML(u(r).prop("outerHTML")), n.select())) : (a = n.toString() || t.text, "a" === e && !a || (a && (r.innerHTML = a), n.deleteContents(), n.insertNode(r)))
    }

    function h(t, e) {
        function n(e) {
            return t.find(".layedit-tool-" + e)
        }

        var i = this.document, a = "layedit-tool-active", i = v(g(i));
        e && e[e.hasClass(a) ? "removeClass" : "addClass"](a), t.find(">i").removeClass(a), n("unlink").addClass(f), u(i).parents().each(function () {
            var e = this.tagName.toLowerCase(), t = this.style.textAlign;
            "b" !== e && "strong" !== e || n("b").addClass(a), "i" !== e && "em" !== e || n("i").addClass(a), "u" === e && n("u").addClass(a), "strike" === e && n("d").addClass(a), "p" === e && n("center" === t ? "center" : "right" === t ? "right" : "left").addClass(a), "a" === e && (n("link").addClass(a), n("unlink").removeClass(f))
        })
    }

    var y = function (a, o, r) {
        var l = this, s = a.find("iframe");
        s.css({height: r.height}).on("load", function () {
            var e = s.contents(), t = s.prop("contentWindow"), n = e.find("head"),
                i = u(["<style>", "*{margin: 0; padding: 0;}", "body{padding: 10px; line-height: 20px; overflow-x: hidden; word-wrap: break-word; font: 14px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Tahoma,Arial,sans-serif; -webkit-box-sizing: border-box !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important;}", "a{color:#01AAED; text-decoration:none;}a:hover{color:#c00}", "p{margin-bottom: 10px;}", "img{display: inline-block; border: none; vertical-align: middle;}", "pre{margin: 10px 0; padding: 10px; line-height: 20px; border: 1px solid #ddd; border-left-width: 6px; background-color: #F2F2F2; color: #333; font-family: Courier New; font-size: 12px;}", "</style>"].join("")),
                e = e.find("body");
            n.append(i), e.attr("contenteditable", "true").css({"min-height": r.height}).html(o.value || ""), m.apply(l, [t, s, o, r]), x.call(l, t, a, r)
        })
    }, o = function (e) {
        e = u("#LAY_layedit_" + e);
        return [e.prop("contentWindow"), e]
    }, n = function (e) {
        return e = 8 == c.ie ? e.replace(/<.+>/g, function (e) {
            return e.toLowerCase()
        }) : e
    }, m = function (t, e, n, i) {
        var a = t.document, o = u(a.body);
        o.on("keydown", function (e) {
            if (13 === e.keyCode) {
                var t = g(a);
                if ("pre" === v(t).parentNode.tagName.toLowerCase()) return e.shiftKey ? void 0 : (d.msg("请暂时用shift+enter"), !1);
                a.execCommand("formatBlock", !1, "<p>")
            }
        }), u(n).parents("form").on("submit", function () {
            var e = o.html();
            8 == c.ie && (e = e.replace(/<.+>/g, function (e) {
                return e.toLowerCase()
            })), n.value = e
        }), o.on("paste", function (e) {
            a.execCommand("formatBlock", !1, "<p>"), setTimeout(function () {
                r.call(t, o), n.value = o.html()
            }, 100)
        })
    }, r = function (e) {
        this.document, e.find("*[style]").each(function () {
            var e = this.style.textAlign;
            this.removeAttribute("style"), u(this).css({"text-align": e || ""})
        }), e.find("table").addClass("layui-table"), e.find("script,link").remove()
    }, g = function (e) {
        return e.selection ? e.selection.createRange() : e.getSelection().getRangeAt(0)
    }, v = function (e) {
        return e.endContainer || e.parentElement().childNodes[0]
    }, x = function (a, e, o) {
        function t() {
            var e, t = u(this), n = t.attr("layedit-event"), i = t.attr("lay-command");
            t.hasClass(f) || (l.focus(), (e = g(r)).commonAncestorContainer, i ? (r.execCommand(i), /justifyLeft|justifyCenter|justifyRight/.test(i) && r.execCommand("formatBlock", !1, "<p>"), setTimeout(function () {
                l.focus()
            }, 10)) : s[n] && s[n].call(this, e), h.call(a, c, t))
        }

        var r = a.document, l = u(r.body), s = {
            link: function (n) {
                var e = v(n), i = u(e).parent();
                b.call(l, {href: i.attr("href"), target: i.attr("target")}, function (e) {
                    var t = i[0];
                    "A" === t.tagName ? t.href = e.url : p.call(a, "a", {target: e.target, href: e.url, text: e.url}, n)
                })
            }, unlink: function (e) {
                r.execCommand("unlink")
            }, face: function (t) {
                k.call(this, function (e) {
                    p.call(a, "img", {src: e.src, alt: e.alt}, t)
                })
            }, image: function (n) {
                var i = this;
                layui.use("upload", function (e) {
                    var t = o.uploadImage || {};
                    e.render({
                        url: t.url, method: t.type, elem: u(i).find("input")[0], done: function (e) {
                            0 == e.code ? (e.data = e.data || {}, p.call(a, "img", {
                                src: e.data.src,
                                alt: e.data.title
                            }, n)) : d.msg(e.msg || "上传失败")
                        }
                    })
                })
            }, code: function (t) {
                w.call(l, function (e) {
                    p.call(a, "pre", {text: e.code, "lay-lang": e.lang}, t)
                })
            }, help: function () {
                d.open({
                    type: 2,
                    title: "帮助",
                    area: ["600px", "380px"],
                    shadeClose: !0,
                    shade: .1,
                    skin: "layui-layer-msg",
                    content: ["", "no"]
                })
            }
        }, c = e.find(".layui-layedit-tool"), n = /image/;
        c.find(">i").on("mousedown", function () {
            var e = u(this).attr("layedit-event");
            n.test(e) || t.call(this)
        }).on("click", function () {
            var e = u(this).attr("layedit-event");
            n.test(e) && t.call(this)
        }), l.on("click", function () {
            h.call(a, c), d.close(k.index)
        })
    }, b = function (e, n) {
        var i = this, e = d.open({
            type: 1,
            id: "LAY_layedit_link",
            area: "350px",
            shade: .05,
            shadeClose: !0,
            moveType: 1,
            title: "超链接",
            skin: "layui-layer-msg",
            content: ['<ul class="layui-form" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">URL</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input name="url" lay-verify="url" value="' + (e.href || "") + '" autofocus="true" autocomplete="off" class="layui-input">', "</div>", "</li>", '<li class="layui-form-item">', '<label class="layui-form-label" style="width: 60px;">打开方式</label>', '<div class="layui-input-block" style="margin-left: 90px">', '<input type="radio" name="target" value="_self" class="layui-input" title="当前窗口"' + ("_self" !== e.target && e.target ? "" : "checked") + ">", '<input type="radio" name="target" value="_blank" class="layui-input" title="新窗口" ' + ("_blank" === e.target ? "checked" : "") + ">", "</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-link-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', "</li>", "</ul>"].join(""),
            success: function (e, t) {
                a.render("radio"), e.find(".layui-btn-primary").on("click", function () {
                    d.close(t), i.focus()
                }), a.on("submit(layedit-link-yes)", function (e) {
                    d.close(b.index), n && n(e.field)
                })
            }
        });
        b.index = e
    }, k = function (n) {
        var i, a,
            o = (i = {}, layui.each(["[微笑]", "[嘻嘻]", "[哈哈]", "[可爱]", "[可怜]", "[挖鼻]", "[吃惊]", "[害羞]", "[挤眼]", "[闭嘴]", "[鄙视]", "[爱你]", "[泪]", "[偷笑]", "[亲亲]", "[生病]", "[太开心]", "[白眼]", "[右哼哼]", "[左哼哼]", "[嘘]", "[衰]", "[委屈]", "[吐]", "[哈欠]", "[抱抱]", "[怒]", "[疑问]", "[馋嘴]", "[拜拜]", "[思考]", "[汗]", "[困]", "[睡]", "[钱]", "[失望]", "[酷]", "[色]", "[哼]", "[鼓掌]", "[晕]", "[悲伤]", "[抓狂]", "[黑线]", "[阴险]", "[怒骂]", "[互粉]", "[心]", "[伤心]", "[猪头]", "[熊猫]", "[兔子]", "[ok]", "[耶]", "[good]", "[NO]", "[赞]", "[来]", "[弱]", "[草泥马]", "[神马]", "[囧]", "[浮云]", "[给力]", "[围观]", "[威武]", "[奥特曼]", "[礼物]", "[钟]", "[话筒]", "[蜡烛]", "[蛋糕]"], function (e, t) {
                i[t] = layui.cache.dir + "images/face/" + e + ".gif"
            }), i);
        return k.hide = k.hide || function (e) {
            "face" !== u(e.target).attr("layedit-event") && d.close(k.index)
        }, k.index = d.tips((a = [], layui.each(o, function (e, t) {
            a.push('<li title="' + e + '"><img src="' + t + '" alt="' + e + '"></li>')
        }), '<ul class="layui-clear">' + a.join("") + "</ul>"), this, {
            tips: 1,
            time: 0,
            skin: "layui-box layui-util-face",
            maxWidth: 500,
            success: function (e, t) {
                e.css({marginTop: -4, marginLeft: -10}).find(".layui-clear>li").on("click", function () {
                    n && n({src: o[this.title], alt: this.title}), d.close(t)
                }), u(document).off("click", k.hide).on("click", k.hide)
            }
        })
    }, w = function (n) {
        var i = this, e = d.open({
            type: 1,
            id: "LAY_layedit_code",
            area: "550px",
            shade: .05,
            shadeClose: !0,
            moveType: 1,
            title: "插入代码",
            skin: "layui-layer-msg",
            content: ['<ul class="layui-form layui-form-pane" style="margin: 15px;">', '<li class="layui-form-item">', '<label class="layui-form-label">请选择语言</label>', '<div class="layui-input-block">', '<select name="lang">', '<option value="JavaScript">JavaScript</option>', '<option value="HTML">HTML</option>', '<option value="CSS">CSS</option>', '<option value="Java">Java</option>', '<option value="PHP">PHP</option>', '<option value="C#">C#</option>', '<option value="Python">Python</option>', '<option value="Ruby">Ruby</option>', '<option value="Go">Go</option>', "</select>", "</div>", "</li>", '<li class="layui-form-item layui-form-text">', '<label class="layui-form-label">代码</label>', '<div class="layui-input-block">', '<textarea name="code" lay-verify="required" autofocus="true" class="layui-textarea" style="height: 200px;"></textarea>', "</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">', '<button type="button" lay-submit lay-filter="layedit-code-yes" class="layui-btn"> 确定 </button>', '<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> 取消 </button>', "</li>", "</ul>"].join(""),
            success: function (e, t) {
                a.render("select"), e.find(".layui-btn-primary").on("click", function () {
                    d.close(t), i.focus()
                }), a.on("submit(layedit-code-yes)", function (e) {
                    d.close(w.index), n && n(e.field)
                })
            }
        });
        w.index = e
    }, C = {
        html: '<i class="layui-icon layedit-tool-html" title="HTML源代码" lay-command="html" layedit-event="html"">&#xe64b;</i><span class="layedit-tool-mid"></span>',
        strong: '<i class="layui-icon layedit-tool-b" title="加粗" lay-command="Bold" layedit-event="b"">&#xe62b;</i>',
        italic: '<i class="layui-icon layedit-tool-i" title="斜体" lay-command="italic" layedit-event="i"">&#xe644;</i>',
        underline: '<i class="layui-icon layedit-tool-u" title="下划线" lay-command="underline" layedit-event="u"">&#xe646;</i>',
        del: '<i class="layui-icon layedit-tool-d" title="删除线" lay-command="strikeThrough" layedit-event="d"">&#xe64f;</i>',
        "|": '<span class="layedit-tool-mid"></span>',
        left: '<i class="layui-icon layedit-tool-left" title="左对齐" lay-command="justifyLeft" layedit-event="left"">&#xe649;</i>',
        center: '<i class="layui-icon layedit-tool-center" title="居中对齐" lay-command="justifyCenter" layedit-event="center"">&#xe647;</i>',
        right: '<i class="layui-icon layedit-tool-right" title="右对齐" lay-command="justifyRight" layedit-event="right"">&#xe648;</i>',
        link: '<i class="layui-icon layedit-tool-link" title="插入链接" layedit-event="link"">&#xe64c;</i>',
        unlink: '<i class="layui-icon layedit-tool-unlink layui-disabled" title="清除链接" lay-command="unlink" layedit-event="unlink"">&#xe64d;</i>',
        face: '<i class="layui-icon layedit-tool-face" title="表情" layedit-event="face"">&#xe650;</i>',
        image: '<i class="layui-icon layedit-tool-image" title="图片" layedit-event="image">&#xe64a;<input type="file" name="file"></i>',
        code: '<i class="layui-icon layedit-tool-code" title="插入代码" layedit-event="code">&#xe64e;</i>',
        help: '<i class="layui-icon layedit-tool-help" title="帮助" layedit-event="help">&#xe607;</i>'
    };
    e("layedit", new t)
}), layui.define("jquery", function (e) {
    "use strict";
    var a = layui.$;
    e("code", function (i) {
        var e = [];
        (i = i || {}).elem = a(i.elem || ".layui-code"), i.lang = "lang" in i ? i.lang : "code", i.elem.each(function () {
            e.push(this)
        }), layui.each(e.reverse(), function (e, t) {
            var n = a(t), t = n.html();
            (n.attr("lay-encode") || i.encode) && (t = t.replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")), n.html('<ol class="layui-code-ol"><li>' + t.replace(/[\r\t\n]+/g, "</li><li>") + "</li></ol>"), n.find(">.layui-code-h3")[0] || n.prepend('<h3 class="layui-code-h3">' + (n.attr("lay-title") || i.title || "&lt;/&gt;") + '<a href="javascript:;">' + (n.attr("lay-lang") || i.lang || "") + "</a></h3>");
            t = n.find(">.layui-code-ol");
            n.addClass("layui-box layui-code-view"), (n.attr("lay-skin") || i.skin) && n.addClass("layui-code-" + (n.attr("lay-skin") || i.skin)), 0 < (t.find("li").length / 100 | 0) && t.css("margin-left", (t.find("li").length / 100 | 0) + "px"), (n.attr("lay-height") || i.height) && t.css("max-height", n.attr("lay-height") || i.height)
        })
    })
}).addcss("modules/code.css?v=2", "skincodecss");