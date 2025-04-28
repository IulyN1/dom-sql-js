function Ar(l, i) {
  function e() {
    this.constructor = l;
  }
  e.prototype = i.prototype, l.prototype = new e();
}
function I(l, i, e, a) {
  var o = Error.call(this, l);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, I.prototype), o.expected = i, o.found = e, o.location = a, o.name = "SyntaxError", o;
}
Ar(I, Error);
function k(l, i, e) {
  return e = e || " ", l.length > i ? l : (i -= l.length, e += e.repeat(i), l + e.slice(0, i));
}
I.prototype.format = function(l) {
  var i = "Error: " + this.message;
  if (this.location) {
    var e = null, a;
    for (a = 0; a < l.length; a++)
      if (l[a].source === this.location.source) {
        e = l[a].text.split(/\r\n|\n|\r/g);
        break;
      }
    var o = this.location.start, p = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(o) : o, $ = this.location.source + ":" + p.line + ":" + p.column;
    if (e) {
      var m = this.location.end, x = k("", p.line.toString().length, " "), E = e[o.line - 1], d = o.line === m.line ? m.column : E.length + 1, N = d - o.column || 1;
      i += `
 --> ` + $ + `
` + x + ` |
` + p.line + " | " + E + `
` + x + " | " + k("", o.column - 1, " ") + k("", N, "^");
    } else
      i += `
 at ` + $;
  }
  return i;
};
I.buildMessage = function(l, i) {
  var e = {
    literal: function(E) {
      return '"' + o(E.text) + '"';
    },
    class: function(E) {
      var d = E.parts.map(function(N) {
        return Array.isArray(N) ? p(N[0]) + "-" + p(N[1]) : p(N);
      });
      return "[" + (E.inverted ? "^" : "") + d.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(E) {
      return E.description;
    }
  };
  function a(E) {
    return E.charCodeAt(0).toString(16).toUpperCase();
  }
  function o(E) {
    return E.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
      return "\\x0" + a(d);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
      return "\\x" + a(d);
    });
  }
  function p(E) {
    return E.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
      return "\\x0" + a(d);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
      return "\\x" + a(d);
    });
  }
  function $(E) {
    return e[E.type](E);
  }
  function m(E) {
    var d = E.map($), N, b;
    if (d.sort(), d.length > 0) {
      for (N = 1, b = 1; N < d.length; N++)
        d[N - 1] !== d[N] && (d[b] = d[N], b++);
      d.length = b;
    }
    switch (d.length) {
      case 1:
        return d[0];
      case 2:
        return d[0] + " or " + d[1];
      default:
        return d.slice(0, -1).join(", ") + ", or " + d[d.length - 1];
    }
  }
  function x(E) {
    return E ? '"' + o(E) + '"' : "end of input";
  }
  return "Expected " + m(l) + " but " + x(i) + " found.";
};
function yr(l, i) {
  i = i !== void 0 ? i : {};
  var e = {}, a = i.grammarSource, o = { start: xe }, p = xe, $ = "'", m = "*", x = '"', E = "DELETE", d = "FROM", N = ";", b = "DROP", B = "INSERT", _ = "(", V = ")", J = "INTO", K = "SELECT", Q = "COUNT", W = "SUM", Y = "MIN", ee = "MAX", re = "AVG", te = "CREATE", q = "TRIGGER", U = "ON", G = "EXECUTE", le = "UPDATE", ne = "SET", se = ",", Fe = "=", ie = /^[a-zA-Z0-9.#_\/[\]()>+=~:"\-]/, fe = /^[^']/, oe = /^[^"]/, ae = /^[a-zA-Z0-9_\-]/, ce = /^[ \t\n\r]/, P = A("'", !1), ue = O([["a", "z"], ["A", "Z"], ["0", "9"], ".", "#", "_", "/", "[", "]", "(", ")", ">", "+", "=", "~", ":", '"', "-"], !1, !1), Ie = A("*", !1), ge = O(["'"], !0, !1), pe = A('"', !1), ve = O(['"'], !0, !1), he = O([["a", "z"], ["A", "Z"], ["0", "9"], "_", "-"], !1, !1), Me = vr("whitespace"), de = O([" ", "	", `
`, "\r"], !1, !1), Oe = A("DELETE", !1), $e = A("FROM", !1), R = A(";", !1), De = A("DROP", !1), qe = A("INSERT", !1), z = A("(", !1), H = A(")", !1), Ue = A("INTO", !1), Ge = A("SELECT", !1), Pe = A("COUNT", !1), Le = A("SUM", !1), je = A("MIN", !1), Xe = A("MAX", !1), _e = A("AVG", !1), Ve = A("CREATE", !1), me = A("TRIGGER", !1), Ee = A("ON", !1), Ae = A("EXECUTE", !1), ze = A("UPDATE", !1), He = A("SET", !1), ye = A(",", !1), Ze = A("=", !1), ke = function(r) {
    return r.join("");
  }, Be = function() {
    return "*";
  }, Je = function(r) {
    return r;
  }, Ke = function(r) {
    return r.join("");
  }, Qe = function(r) {
    return r.join("");
  }, We = function(r) {
    return r.join("");
  }, Ye = function(r, n) {
    return {
      type: "DELETE",
      target: r,
      from: n
    };
  }, er = function(r) {
    return {
      type: "DROP",
      target: r
    };
  }, rr = function(r, n) {
    return {
      type: "INSERT",
      values: r,
      target: n
    };
  }, tr = function(r, n, f) {
    return {
      type: "SELECT",
      func: r,
      target: n,
      from: f
    };
  }, lr = function() {
    return "COUNT";
  }, nr = function() {
    return "SUM";
  }, sr = function() {
    return "MIN";
  }, ir = function() {
    return "MAX";
  }, fr = function() {
    return "AVG";
  }, or = function(r, n, f) {
    return {
      type: "CREATE_TRIGGER",
      event: r,
      target: n,
      statement: f
    };
  }, ar = function(r, n) {
    return {
      type: "EXECUTE_TRIGGER",
      event: r,
      target: n
    };
  }, cr = function(r, n) {
    return {
      type: "UPDATE",
      target: r,
      entries: n
    };
  }, ur = function(r, n) {
    return [r, ...n.map((f) => f[3])];
  }, gr = function(r, n) {
    return { property: r, value: n };
  }, t = i.peg$currPos | 0, F = [{ line: 1, column: 1 }], C = t, L = i.peg$maxFailExpected || [], c = i.peg$silentFails | 0, M;
  if (i.startRule) {
    if (!(i.startRule in o))
      throw new Error(`Can't start parsing from rule "` + i.startRule + '".');
    p = o[i.startRule];
  }
  function A(r, n) {
    return { type: "literal", text: r, ignoreCase: n };
  }
  function O(r, n, f) {
    return { type: "class", parts: r, inverted: n, ignoreCase: f };
  }
  function pr() {
    return { type: "end" };
  }
  function vr(r) {
    return { type: "other", description: r };
  }
  function Ne(r) {
    var n = F[r], f;
    if (n)
      return n;
    if (r >= F.length)
      f = F.length - 1;
    else
      for (f = r; !F[--f]; )
        ;
    for (n = F[f], n = {
      line: n.line,
      column: n.column
    }; f < r; )
      l.charCodeAt(f) === 10 ? (n.line++, n.column = 1) : n.column++, f++;
    return F[r] = n, n;
  }
  function Te(r, n, f) {
    var s = Ne(r), g = Ne(n), v = {
      source: a,
      start: {
        offset: r,
        line: s.line,
        column: s.column
      },
      end: {
        offset: n,
        line: g.line,
        column: g.column
      }
    };
    return v;
  }
  function u(r) {
    t < C || (t > C && (C = t, L = []), L.push(r));
  }
  function hr(r, n, f) {
    return new I(
      I.buildMessage(r, n),
      r,
      n,
      f
    );
  }
  function xe() {
    var r;
    return r = j(), r === e && (r = be(), r === e && (r = Re(), r === e && (r = we(), r === e && (r = $r())))), r;
  }
  function w() {
    var r, n, f, s;
    if (r = t, l.charCodeAt(t) === 39 ? (n = $, t++) : (n = e, c === 0 && u(P)), n !== e) {
      if (f = [], s = l.charAt(t), ie.test(s) ? t++ : (s = e, c === 0 && u(ue)), s !== e)
        for (; s !== e; )
          f.push(s), s = l.charAt(t), ie.test(s) ? t++ : (s = e, c === 0 && u(ue));
      else
        f = e;
      f !== e ? (l.charCodeAt(t) === 39 ? (s = $, t++) : (s = e, c === 0 && u(P)), s !== e ? r = ke(f) : (t = r, r = e)) : (t = r, r = e);
    } else
      t = r, r = e;
    return r === e && (r = D()), r;
  }
  function Ce() {
    var r, n;
    return r = t, l.charCodeAt(t) === 42 ? (n = m, t++) : (n = e, c === 0 && u(Ie)), n !== e && (n = Be()), r = n, r === e && (r = t, n = w(), n !== e && (n = Je(n)), r = n), r;
  }
  function Se() {
    var r, n, f, s;
    if (r = t, l.charCodeAt(t) === 39 ? (n = $, t++) : (n = e, c === 0 && u(P)), n !== e) {
      for (f = [], s = l.charAt(t), fe.test(s) ? t++ : (s = e, c === 0 && u(ge)); s !== e; )
        f.push(s), s = l.charAt(t), fe.test(s) ? t++ : (s = e, c === 0 && u(ge));
      l.charCodeAt(t) === 39 ? (s = $, t++) : (s = e, c === 0 && u(P)), s !== e ? r = Ke(f) : (t = r, r = e);
    } else
      t = r, r = e;
    if (r === e) {
      if (r = t, l.charCodeAt(t) === 34 ? (n = x, t++) : (n = e, c === 0 && u(pe)), n !== e) {
        for (f = [], s = l.charAt(t), oe.test(s) ? t++ : (s = e, c === 0 && u(ve)); s !== e; )
          f.push(s), s = l.charAt(t), oe.test(s) ? t++ : (s = e, c === 0 && u(ve));
        l.charCodeAt(t) === 34 ? (s = x, t++) : (s = e, c === 0 && u(pe)), s !== e ? r = Qe(f) : (t = r, r = e);
      } else
        t = r, r = e;
      r === e && (r = D());
    }
    return r;
  }
  function D() {
    var r, n, f;
    if (r = t, n = [], f = l.charAt(t), ae.test(f) ? t++ : (f = e, c === 0 && u(he)), f !== e)
      for (; f !== e; )
        n.push(f), f = l.charAt(t), ae.test(f) ? t++ : (f = e, c === 0 && u(he));
    else
      n = e;
    return n !== e && (n = We(n)), r = n, r;
  }
  function h() {
    var r, n;
    for (c++, r = [], n = l.charAt(t), ce.test(n) ? t++ : (n = e, c === 0 && u(de)); n !== e; )
      r.push(n), n = l.charAt(t), ce.test(n) ? t++ : (n = e, c === 0 && u(de));
    return c--, n = e, c === 0 && u(Me), r;
  }
  function we() {
    var r, n, f, s, g, v;
    return r = t, l.substr(t, 6) === E ? (n = E, t += 6) : (n = e, c === 0 && u(Oe)), n !== e ? (h(), f = Ce(), f !== e ? (h(), l.substr(t, 4) === d ? (s = d, t += 4) : (s = e, c === 0 && u($e)), s !== e ? (h(), g = w(), g !== e ? (h(), l.charCodeAt(t) === 59 ? (v = N, t++) : (v = e, c === 0 && u(R)), v !== e ? r = Ye(f, g) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r === e && (r = t, l.substr(t, 4) === b ? (n = b, t += 4) : (n = e, c === 0 && u(De)), n !== e ? (h(), f = w(), f !== e ? (h(), l.charCodeAt(t) === 59 ? (s = N, t++) : (s = e, c === 0 && u(R)), s !== e ? r = er(f) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)), r;
  }
  function be() {
    var r, n, f, s, g, v, y, T;
    return r = t, l.substr(t, 6) === B ? (n = B, t += 6) : (n = e, c === 0 && u(qe)), n !== e ? (h(), f = Se(), f === e && (f = t, l.charCodeAt(t) === 40 ? (s = _, t++) : (s = e, c === 0 && u(z)), s !== e ? (g = j(), g !== e ? (l.charCodeAt(t) === 41 ? (v = V, t++) : (v = e, c === 0 && u(H)), v !== e ? (s = [s, g, v], f = s) : (t = f, f = e)) : (t = f, f = e)) : (t = f, f = e)), f !== e ? (s = h(), l.substr(t, 4) === J ? (g = J, t += 4) : (g = e, c === 0 && u(Ue)), g !== e ? (v = h(), y = w(), y !== e ? (h(), l.charCodeAt(t) === 59 ? (T = N, t++) : (T = e, c === 0 && u(R)), T !== e ? r = rr(f, y) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r;
  }
  function j() {
    var r, n, f, s, g, v, y, T;
    return r = t, l.substr(t, 6) === K ? (n = K, t += 6) : (n = e, c === 0 && u(Ge)), n !== e ? (h(), f = dr(), f !== e ? (h(), l.charCodeAt(t) === 40 ? (s = _, t++) : (s = e, c === 0 && u(z)), s !== e ? (h(), g = Ce(), g !== e ? (h(), l.charCodeAt(t) === 41 ? (v = V, t++) : (v = e, c === 0 && u(H)), v !== e ? (h(), l.substr(t, 4) === d ? (y = d, t += 4) : (y = e, c === 0 && u($e)), y !== e ? (h(), T = w(), T !== e ? (h(), l.charCodeAt(t) === 59 ? t++ : c === 0 && u(R), r = tr(f, g, T)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r;
  }
  function dr() {
    var r, n;
    return r = t, l.substr(t, 5) === Q ? (n = Q, t += 5) : (n = e, c === 0 && u(Pe)), n !== e && (n = lr()), r = n, r === e && (r = t, l.substr(t, 3) === W ? (n = W, t += 3) : (n = e, c === 0 && u(Le)), n !== e && (n = nr()), r = n, r === e && (r = t, l.substr(t, 3) === Y ? (n = Y, t += 3) : (n = e, c === 0 && u(je)), n !== e && (n = sr()), r = n, r === e && (r = t, l.substr(t, 3) === ee ? (n = ee, t += 3) : (n = e, c === 0 && u(Xe)), n !== e && (n = ir()), r = n, r === e && (r = t, l.substr(t, 3) === re ? (n = re, t += 3) : (n = e, c === 0 && u(_e)), n !== e && (n = fr()), r = n)))), r;
  }
  function $r() {
    var r, n, f, s, g, v, y, T;
    return r = t, l.substr(t, 6) === te ? (n = te, t += 6) : (n = e, c === 0 && u(Ve)), n !== e ? (h(), l.substr(t, 7) === q ? (f = q, t += 7) : (f = e, c === 0 && u(me)), f !== e ? (h(), s = D(), s !== e ? (h(), l.substr(t, 2) === U ? (g = U, t += 2) : (g = e, c === 0 && u(Ee)), g !== e ? (h(), v = w(), v !== e ? (h(), l.substr(t, 7) === G ? (y = G, t += 7) : (y = e, c === 0 && u(Ae)), y !== e ? (h(), T = mr(), T !== e ? r = or(s, v, T) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r === e && (r = t, l.substr(t, 7) === G ? (n = G, t += 7) : (n = e, c === 0 && u(Ae)), n !== e ? (h(), l.substr(t, 7) === q ? (f = q, t += 7) : (f = e, c === 0 && u(me)), f !== e ? (h(), s = D(), s !== e ? (h(), l.substr(t, 2) === U ? (g = U, t += 2) : (g = e, c === 0 && u(Ee)), g !== e ? (h(), v = w(), v !== e ? (h(), l.charCodeAt(t) === 59 ? (y = N, t++) : (y = e, c === 0 && u(R)), y !== e ? r = ar(s, v) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)), r;
  }
  function mr() {
    var r;
    return r = we(), r === e && (r = Re(), r === e && (r = be(), r === e && (r = j()))), r;
  }
  function Re() {
    var r, n, f, s, g, v;
    return r = t, l.substr(t, 6) === le ? (n = le, t += 6) : (n = e, c === 0 && u(ze)), n !== e ? (h(), f = w(), f !== e ? (h(), l.substr(t, 3) === ne ? (s = ne, t += 3) : (s = e, c === 0 && u(He)), s !== e ? (h(), g = Er(), g !== e ? (h(), l.charCodeAt(t) === 59 ? (v = N, t++) : (v = e, c === 0 && u(R)), v !== e ? r = cr(f, g) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r;
  }
  function Er() {
    var r, n, f, s, g, v, y, T;
    if (r = t, n = Z(), n !== e) {
      for (f = [], s = t, g = h(), l.charCodeAt(t) === 44 ? (v = se, t++) : (v = e, c === 0 && u(ye)), v !== e ? (y = h(), T = Z(), T !== e ? (g = [g, v, y, T], s = g) : (t = s, s = e)) : (t = s, s = e); s !== e; )
        f.push(s), s = t, g = h(), l.charCodeAt(t) === 44 ? (v = se, t++) : (v = e, c === 0 && u(ye)), v !== e ? (y = h(), T = Z(), T !== e ? (g = [g, v, y, T], s = g) : (t = s, s = e)) : (t = s, s = e);
      r = ur(n, f);
    } else
      t = r, r = e;
    return r;
  }
  function Z() {
    var r, n, f, s, g, v, y;
    return r = t, n = D(), n !== e ? (h(), l.charCodeAt(t) === 61 ? (f = Fe, t++) : (f = e, c === 0 && u(Ze)), f !== e ? (h(), s = Se(), s === e && (s = t, l.charCodeAt(t) === 40 ? (g = _, t++) : (g = e, c === 0 && u(z)), g !== e ? (v = j(), v !== e ? (l.charCodeAt(t) === 41 ? (y = V, t++) : (y = e, c === 0 && u(H)), y !== e ? (g = [g, v, y], s = g) : (t = s, s = e)) : (t = s, s = e)) : (t = s, s = e)), s !== e ? r = gr(n, s) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r;
  }
  if (M = p(), i.peg$library)
    return (
      /** @type {any} */
      {
        peg$result: M,
        peg$currPos: t,
        peg$FAILED: e,
        peg$maxFailExpected: L,
        peg$maxFailPos: C
      }
    );
  if (M !== e && t === l.length)
    return M;
  throw M !== e && t < l.length && u(pr()), hr(
    L,
    C < l.length ? l.charAt(C) : null,
    C < l.length ? Te(C, C + 1) : Te(C, C)
  );
}
const S = {
  select(l) {
    return {
      count(i) {
        let e;
        if (l) {
          if (e = document.querySelectorAll(l), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${l} selector!`);
            return;
          }
        } else {
          console.error("No selector provided!");
          return;
        }
        if (i) {
          let a = 0;
          return i === "*" ? a = e.reduce((o, p) => o + p.children.length, 0) : e.forEach((o) => {
            a += o.querySelectorAll(i).length;
          }), e = null, a;
        } else {
          console.error("No target provided to count!");
          return;
        }
      },
      sum(i) {
        let e;
        if (l) {
          if (e = document.querySelectorAll(l), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${l} selector!`);
            return;
          }
        } else {
          console.error("No selector provided!");
          return;
        }
        if (i) {
          let a = 0, o;
          return i === "*" ? e.forEach((p) => {
            o = Array.from(p.children), o.forEach(($) => {
              const m = parseFloat($.innerText);
              a += isNaN(m) ? 0 : m;
            });
          }) : e.forEach((p) => {
            o = p.querySelectorAll(i), o.forEach(($) => {
              const m = parseFloat($.innerText);
              a += isNaN(m) ? 0 : m;
            });
          }), o = null, e = null, a;
        } else {
          console.error("No target provided to sum!");
          return;
        }
      },
      avg(i) {
        let e;
        if (l) {
          if (e = document.querySelectorAll(l), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${l} selector!`);
            return;
          }
        } else {
          console.error("No selector provided!");
          return;
        }
        if (i) {
          let a = 0, o = 0, p;
          return i === "*" ? e.forEach(($) => {
            p = Array.from($.children), p.forEach((m) => {
              const x = parseFloat(m.innerText);
              a += isNaN(x) ? 0 : x, o++;
            });
          }) : e.forEach(($) => {
            p = $.querySelectorAll(i), p.forEach((m) => {
              const x = parseFloat(m.innerText);
              a += isNaN(x) ? 0 : x, o++;
            });
          }), p = null, e = null, o > 0 ? a / o : 0;
        } else {
          console.error("No target provided to average!");
          return;
        }
      },
      min(i) {
        let e;
        if (l) {
          if (e = document.querySelectorAll(l), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${l} selector!`);
            return;
          }
        } else {
          console.error("No selector provided!");
          return;
        }
        if (i) {
          let a = 1 / 0, o;
          return i === "*" ? e.forEach((p) => {
            o = Array.from(p.children), o.forEach(($) => {
              const m = parseFloat($.innerText);
              a = Math.min(a, isNaN(m) ? 1 / 0 : m);
            });
          }) : e.forEach((p) => {
            o = p.querySelectorAll(i), o.forEach(($) => {
              const m = parseFloat($.innerText);
              a = Math.min(a, isNaN(m) ? 1 / 0 : m);
            });
          }), o = null, e = null, a === 1 / 0 ? null : a;
        } else {
          console.error("No target provided to minimum!");
          return;
        }
      },
      max(i) {
        let e;
        if (l) {
          if (e = document.querySelectorAll(l), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${l} selector!`);
            return;
          }
        } else {
          console.error("No selector provided!");
          return;
        }
        if (i) {
          let a = -1 / 0, o;
          return i === "*" ? e.forEach((p) => {
            o = Array.from(p.children), o.forEach(($) => {
              const m = parseFloat($.innerText);
              a = Math.max(a, isNaN(m) ? -1 / 0 : m);
            });
          }) : e.forEach((p) => {
            o = p.querySelectorAll(i), o.forEach(($) => {
              const m = parseFloat($.innerText);
              a = Math.max(a, isNaN(m) ? -1 / 0 : m);
            });
          }), o = null, e = null, a === -1 / 0 ? null : a;
        } else {
          console.error("No target provided to maximum!");
          return;
        }
      }
    };
  },
  insert(l) {
    return {
      into(i) {
        let e;
        if (i) {
          if (e = document.querySelectorAll(i), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${i} selector!`);
            return;
          }
          e.forEach((a) => {
            a.innerHTML += l;
          });
        } else {
          console.error("No selector provided!");
          return;
        }
        e = null;
      }
    };
  },
  update(l) {
    return {
      set(i) {
        let e;
        if (l) {
          if (e = document.querySelectorAll(l), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${l} selector!`);
            return;
          }
        } else {
          console.error("No selector provided!");
          return;
        }
        typeof i == "object" ? Object.entries(i).forEach((a) => {
          const [o, p] = a;
          if (o === "text") {
            e.forEach(($) => {
              $.innerText = p;
            });
            return;
          }
          if (o === "html") {
            e.forEach(($) => {
              $.innerHTML = p;
            });
            return;
          }
          e.forEach(($) => {
            $.style[o] = p;
          });
        }) : console.error(i !== void 0 ? "Invalid content type! Expected object!" : "No content provided to update!"), e = null;
      }
    };
  },
  delete(l) {
    return {
      from(i) {
        let e;
        if (i) {
          if (e = document.querySelectorAll(i), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${i} selector!`);
            return;
          }
        } else {
          console.error("No selector provided!");
          return;
        }
        !l || l === "*" ? e.forEach((a) => {
          a.innerHTML = "";
        }) : e.forEach((a) => {
          let o = a.querySelectorAll(l);
          if (o = o.length === 0 ? o : Array.from(o), !o.length) {
            console.error(`No child element with ${l} selector!`);
            return;
          }
          o.forEach((p) => {
            p.innerHTML = "";
          }), o = null;
        }), e = null;
      }
    };
  },
  drop(l) {
    let i;
    if (l) {
      if (i = document.querySelectorAll(l), i = i.length === 0 ? i : Array.from(i), !i.length) {
        console.error(`No element with ${l} selector!`);
        return;
      }
      i.forEach((e) => {
        e.remove();
      });
    } else {
      console.error("No selector provided!");
      return;
    }
    i = null;
  },
  createTrigger(l) {
    return {
      on(i) {
        let e;
        if (i) {
          if (e = document.querySelectorAll(i), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${i} selector!`);
            return;
          }
        } else {
          console.error("No selector provided!");
          return;
        }
        return {
          execute(a) {
            e.forEach((o) => {
              o.addEventListener(l, a);
            }), e = null;
          }
        };
      }
    };
  },
  executeTrigger(l) {
    return {
      on(i) {
        let e;
        if (i) {
          if (e = document.querySelectorAll(i), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${i} selector!`);
            return;
          }
          e.forEach((a) => {
            let o = new Event(l);
            a.dispatchEvent(o), o = null;
          });
        } else {
          console.error("No selector provided!");
          return;
        }
        e = null;
      }
    };
  }
};
function X(l) {
  switch (l.type) {
    case "SELECT":
      switch (l.func) {
        case "COUNT":
          return S.select(l.from).count(l.target);
        case "SUM":
          return S.select(l.from).sum(l.target);
        case "AVG":
          return S.select(l.from).avg(l.target);
        case "MIN":
          return S.select(l.from).min(l.target);
        case "MAX":
          return S.select(l.from).max(l.target);
        default:
          throw new Error("Unknown function: " + l.func);
      }
    case "INSERT":
      let i;
      return typeof l.values == "string" ? i = l.values : i = X(l.values[1]), S.insert(i).into(l.target);
    case "UPDATE":
      const e = {};
      for (const o of l.entries) {
        let p = o.value;
        typeof p != "string" && (p = X(p[1])), e[o.property] = p;
      }
      return S.update(l.target).set(e);
    case "DELETE":
      return S.delete(l.target).from(l.from);
    case "DROP":
      return S.drop(l.target);
    case "CREATE_TRIGGER":
      const a = () => X(l.statement);
      return S.createTrigger(l.event).on(l.target).execute(a);
    case "EXECUTE_TRIGGER":
      return S.executeTrigger(l.event).on(l.target);
    default:
      throw new Error("Unknown AST node type: " + l.type);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  (async () => {
    const l = document.querySelectorAll('script[type="text/qdom"]');
    for (const i of l) {
      let e = "";
      if (i.src ? e = await (await fetch(i.src)).text() : e = i.textContent, !e) {
        console.error("No code found in script tag!");
        return;
      }
      e = e.split(`
`).map((a) => a.trim()).filter((a) => a.length > 0);
      for (const a of e) {
        const o = yr(a);
        X(o);
      }
    }
  })();
});
