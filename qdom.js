function Ar(n, i) {
  function e() {
    this.constructor = n;
  }
  e.prototype = i.prototype, n.prototype = new e();
}
function M(n, i, e, g) {
  var c = Error.call(this, n);
  return Object.setPrototypeOf && Object.setPrototypeOf(c, M.prototype), c.expected = i, c.found = e, c.location = g, c.name = "SyntaxError", c;
}
Ar(M, Error);
function _(n, i, e) {
  return e = e || " ", n.length > i ? n : (i -= n.length, e += e.repeat(i), n + e.slice(0, i));
}
M.prototype.format = function(n) {
  var i = "Error: " + this.message;
  if (this.location) {
    var e = null, g;
    for (g = 0; g < n.length; g++)
      if (n[g].source === this.location.source) {
        e = n[g].text.split(/\r\n|\n|\r/g);
        break;
      }
    var c = this.location.start, m = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(c) : c, A = this.location.source + ":" + m.line + ":" + m.column;
    if (e) {
      var R = this.location.end, w = _("", m.line.toString().length, " "), h = e[c.line - 1], $ = c.line === R.line ? R.column : h.length + 1, E = $ - c.column || 1;
      i += `
 --> ` + A + `
` + w + ` |
` + m.line + " | " + h + `
` + w + " | " + _("", c.column - 1, " ") + _("", E, "^");
    } else
      i += `
 at ` + A;
  }
  return i;
};
M.buildMessage = function(n, i) {
  var e = {
    literal: function(h) {
      return '"' + c(h.text) + '"';
    },
    class: function(h) {
      var $ = h.parts.map(function(E) {
        return Array.isArray(E) ? m(E[0]) + "-" + m(E[1]) : m(E);
      });
      return "[" + (h.inverted ? "^" : "") + $.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(h) {
      return h.description;
    }
  };
  function g(h) {
    return h.charCodeAt(0).toString(16).toUpperCase();
  }
  function c(h) {
    return h.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function($) {
      return "\\x0" + g($);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function($) {
      return "\\x" + g($);
    });
  }
  function m(h) {
    return h.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function($) {
      return "\\x0" + g($);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function($) {
      return "\\x" + g($);
    });
  }
  function A(h) {
    return e[h.type](h);
  }
  function R(h) {
    var $ = h.map(A), E, N;
    if ($.sort(), $.length > 0) {
      for (E = 1, N = 1; E < $.length; E++)
        $[E - 1] !== $[E] && ($[N] = $[E], N++);
      $.length = N;
    }
    switch ($.length) {
      case 1:
        return $[0];
      case 2:
        return $[0] + " or " + $[1];
      default:
        return $.slice(0, -1).join(", ") + ", or " + $[$.length - 1];
    }
  }
  function w(h) {
    return h ? '"' + c(h) + '"' : "end of input";
  }
  return "Expected " + R(n) + " but " + w(i) + " found.";
};
function yr(n, i) {
  i = i !== void 0 ? i : {};
  var e = {}, g = i.grammarSource, c = { start: me }, m = me, A = "'", R = "*", w = '"', h = "DELETE", $ = "FROM", E = ";", N = "DROP", z = "INSERT", H = "INTO", V = "SELECT", we = "(", Ne = ")", Z = "COUNT", B = "SUM", k = "MIN", J = "MAX", K = "AVG", Q = "CREATE", U = "TRIGGER", G = "ON", P = "EXECUTE", W = "UPDATE", Y = "SET", ee = ",", Re = "=", re = /^[a-zA-Z0-9.#_\/[\]()>+=~:"\-]/, te = /^[^']/, se = /^[^"]/, ne = /^[a-zA-Z0-9_\-]/, fe = /^[ \t\n\r]/, L = d("'", !1), le = D([["a", "z"], ["A", "Z"], ["0", "9"], ".", "#", "_", "/", "[", "]", "(", ")", ">", "+", "=", "~", ":", '"', "-"], !1, !1), Se = d("*", !1), ie = D(["'"], !0, !1), ae = d('"', !1), oe = D(['"'], !0, !1), ce = D([["a", "z"], ["A", "Z"], ["0", "9"], "_", "-"], !1, !1), Oe = vr("whitespace"), ue = D([" ", "	", `
`, "\r"], !1, !1), Me = d("DELETE", !1), ge = d("FROM", !1), S = d(";", !1), Fe = d("DROP", !1), De = d("INSERT", !1), Ie = d("INTO", !1), Ue = d("SELECT", !1), Ge = d("(", !1), Pe = d(")", !1), Le = d("COUNT", !1), je = d("SUM", !1), qe = d("MIN", !1), Xe = d("MAX", !1), _e = d("AVG", !1), ze = d("CREATE", !1), pe = d("TRIGGER", !1), ve = d("ON", !1), $e = d("EXECUTE", !1), He = d("UPDATE", !1), Ve = d("SET", !1), he = d(",", !1), Ze = d("=", !1), Be = function(r) {
    return r.join("");
  }, ke = function() {
    return "*";
  }, Je = function(r) {
    return r;
  }, Ke = function(r) {
    return r.join("");
  }, Qe = function(r) {
    return r.join("");
  }, We = function(r) {
    return r.join("");
  }, Ye = function(r, s) {
    return {
      type: "DELETE",
      target: r,
      from: s
    };
  }, er = function(r) {
    return {
      type: "DROP",
      target: r
    };
  }, rr = function(r, s) {
    return {
      type: "INSERT",
      values: r,
      target: s
    };
  }, tr = function(r, s, l) {
    return {
      type: "SELECT",
      func: r,
      target: s,
      from: l
    };
  }, sr = function() {
    return "COUNT";
  }, nr = function() {
    return "SUM";
  }, fr = function() {
    return "MIN";
  }, lr = function() {
    return "MAX";
  }, ir = function() {
    return "AVG";
  }, ar = function(r, s, l) {
    return {
      type: "CREATE_TRIGGER",
      event: r,
      target: s,
      statement: l
    };
  }, or = function(r, s) {
    return {
      type: "EXECUTE_TRIGGER",
      event: r,
      target: s
    };
  }, cr = function(r, s) {
    return {
      type: "UPDATE",
      target: r,
      entries: s
    };
  }, ur = function(r, s) {
    return [r, ...s.map((l) => l[3])];
  }, gr = function(r, s) {
    return { property: r, value: s };
  }, t = i.peg$currPos | 0, O = [{ line: 1, column: 1 }], C = t, j = i.peg$maxFailExpected || [], a = i.peg$silentFails | 0, F;
  if (i.startRule) {
    if (!(i.startRule in c))
      throw new Error(`Can't start parsing from rule "` + i.startRule + '".');
    m = c[i.startRule];
  }
  function d(r, s) {
    return { type: "literal", text: r, ignoreCase: s };
  }
  function D(r, s, l) {
    return { type: "class", parts: r, inverted: s, ignoreCase: l };
  }
  function pr() {
    return { type: "end" };
  }
  function vr(r) {
    return { type: "other", description: r };
  }
  function de(r) {
    var s = O[r], l;
    if (s)
      return s;
    if (r >= O.length)
      l = O.length - 1;
    else
      for (l = r; !O[--l]; )
        ;
    for (s = O[l], s = {
      line: s.line,
      column: s.column
    }; l < r; )
      n.charCodeAt(l) === 10 ? (s.line++, s.column = 1) : s.column++, l++;
    return O[r] = s, s;
  }
  function Ee(r, s, l) {
    var f = de(r), p = de(s), v = {
      source: g,
      start: {
        offset: r,
        line: f.line,
        column: f.column
      },
      end: {
        offset: s,
        line: p.line,
        column: p.column
      }
    };
    return v;
  }
  function o(r) {
    t < C || (t > C && (C = t, j = []), j.push(r));
  }
  function $r(r, s, l) {
    return new M(
      M.buildMessage(r, s),
      r,
      s,
      l
    );
  }
  function me() {
    var r;
    return r = xe(), r === e && (r = Ce(), r === e && (r = be(), r === e && (r = Te(), r === e && (r = dr())))), r;
  }
  function b() {
    var r, s, l, f;
    if (r = t, n.charCodeAt(t) === 39 ? (s = A, t++) : (s = e, a === 0 && o(L)), s !== e) {
      if (l = [], f = n.charAt(t), re.test(f) ? t++ : (f = e, a === 0 && o(le)), f !== e)
        for (; f !== e; )
          l.push(f), f = n.charAt(t), re.test(f) ? t++ : (f = e, a === 0 && o(le));
      else
        l = e;
      l !== e ? (n.charCodeAt(t) === 39 ? (f = A, t++) : (f = e, a === 0 && o(L)), f !== e ? r = Be(l) : (t = r, r = e)) : (t = r, r = e);
    } else
      t = r, r = e;
    return r === e && (r = I()), r;
  }
  function Ae() {
    var r, s;
    return r = t, n.charCodeAt(t) === 42 ? (s = R, t++) : (s = e, a === 0 && o(Se)), s !== e && (s = ke()), r = s, r === e && (r = t, s = b(), s !== e && (s = Je(s)), r = s), r;
  }
  function ye() {
    var r, s, l, f;
    if (r = t, n.charCodeAt(t) === 39 ? (s = A, t++) : (s = e, a === 0 && o(L)), s !== e) {
      for (l = [], f = n.charAt(t), te.test(f) ? t++ : (f = e, a === 0 && o(ie)); f !== e; )
        l.push(f), f = n.charAt(t), te.test(f) ? t++ : (f = e, a === 0 && o(ie));
      n.charCodeAt(t) === 39 ? (f = A, t++) : (f = e, a === 0 && o(L)), f !== e ? r = Ke(l) : (t = r, r = e);
    } else
      t = r, r = e;
    if (r === e) {
      if (r = t, n.charCodeAt(t) === 34 ? (s = w, t++) : (s = e, a === 0 && o(ae)), s !== e) {
        for (l = [], f = n.charAt(t), se.test(f) ? t++ : (f = e, a === 0 && o(oe)); f !== e; )
          l.push(f), f = n.charAt(t), se.test(f) ? t++ : (f = e, a === 0 && o(oe));
        n.charCodeAt(t) === 34 ? (f = w, t++) : (f = e, a === 0 && o(ae)), f !== e ? r = Qe(l) : (t = r, r = e);
      } else
        t = r, r = e;
      r === e && (r = I());
    }
    return r;
  }
  function I() {
    var r, s, l;
    if (r = t, s = [], l = n.charAt(t), ne.test(l) ? t++ : (l = e, a === 0 && o(ce)), l !== e)
      for (; l !== e; )
        s.push(l), l = n.charAt(t), ne.test(l) ? t++ : (l = e, a === 0 && o(ce));
    else
      s = e;
    return s !== e && (s = We(s)), r = s, r;
  }
  function u() {
    var r, s;
    for (a++, r = [], s = n.charAt(t), fe.test(s) ? t++ : (s = e, a === 0 && o(ue)); s !== e; )
      r.push(s), s = n.charAt(t), fe.test(s) ? t++ : (s = e, a === 0 && o(ue));
    return a--, s = e, a === 0 && o(Oe), r;
  }
  function Te() {
    var r, s, l, f, p, v;
    return r = t, n.substr(t, 6) === h ? (s = h, t += 6) : (s = e, a === 0 && o(Me)), s !== e ? (u(), l = Ae(), l !== e ? (u(), n.substr(t, 4) === $ ? (f = $, t += 4) : (f = e, a === 0 && o(ge)), f !== e ? (u(), p = b(), p !== e ? (u(), n.charCodeAt(t) === 59 ? (v = E, t++) : (v = e, a === 0 && o(S)), v !== e ? r = Ye(l, p) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r === e && (r = t, n.substr(t, 4) === N ? (s = N, t += 4) : (s = e, a === 0 && o(Fe)), s !== e ? (u(), l = b(), l !== e ? (u(), n.charCodeAt(t) === 59 ? (f = E, t++) : (f = e, a === 0 && o(S)), f !== e ? r = er(l) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)), r;
  }
  function Ce() {
    var r, s, l, f, p, v;
    return r = t, n.substr(t, 6) === z ? (s = z, t += 6) : (s = e, a === 0 && o(De)), s !== e ? (u(), l = ye(), l !== e ? (u(), n.substr(t, 4) === H ? (f = H, t += 4) : (f = e, a === 0 && o(Ie)), f !== e ? (u(), p = b(), p !== e ? (u(), n.charCodeAt(t) === 59 ? (v = E, t++) : (v = e, a === 0 && o(S)), v !== e ? r = rr(l, p) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r;
  }
  function xe() {
    var r, s, l, f, p, v, y, T, X;
    return r = t, n.substr(t, 6) === V ? (s = V, t += 6) : (s = e, a === 0 && o(Ue)), s !== e ? (u(), l = hr(), l !== e ? (u(), n.charCodeAt(t) === 40 ? (f = we, t++) : (f = e, a === 0 && o(Ge)), f !== e ? (u(), p = Ae(), p !== e ? (u(), n.charCodeAt(t) === 41 ? (v = Ne, t++) : (v = e, a === 0 && o(Pe)), v !== e ? (u(), n.substr(t, 4) === $ ? (y = $, t += 4) : (y = e, a === 0 && o(ge)), y !== e ? (u(), T = b(), T !== e ? (u(), n.charCodeAt(t) === 59 ? (X = E, t++) : (X = e, a === 0 && o(S)), X !== e ? r = tr(l, p, T) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r;
  }
  function hr() {
    var r, s;
    return r = t, n.substr(t, 5) === Z ? (s = Z, t += 5) : (s = e, a === 0 && o(Le)), s !== e && (s = sr()), r = s, r === e && (r = t, n.substr(t, 3) === B ? (s = B, t += 3) : (s = e, a === 0 && o(je)), s !== e && (s = nr()), r = s, r === e && (r = t, n.substr(t, 3) === k ? (s = k, t += 3) : (s = e, a === 0 && o(qe)), s !== e && (s = fr()), r = s, r === e && (r = t, n.substr(t, 3) === J ? (s = J, t += 3) : (s = e, a === 0 && o(Xe)), s !== e && (s = lr()), r = s, r === e && (r = t, n.substr(t, 3) === K ? (s = K, t += 3) : (s = e, a === 0 && o(_e)), s !== e && (s = ir()), r = s)))), r;
  }
  function dr() {
    var r, s, l, f, p, v, y, T;
    return r = t, n.substr(t, 6) === Q ? (s = Q, t += 6) : (s = e, a === 0 && o(ze)), s !== e ? (u(), n.substr(t, 7) === U ? (l = U, t += 7) : (l = e, a === 0 && o(pe)), l !== e ? (u(), f = I(), f !== e ? (u(), n.substr(t, 2) === G ? (p = G, t += 2) : (p = e, a === 0 && o(ve)), p !== e ? (u(), v = b(), v !== e ? (u(), n.substr(t, 7) === P ? (y = P, t += 7) : (y = e, a === 0 && o($e)), y !== e ? (u(), T = Er(), T !== e ? r = ar(f, v, T) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r === e && (r = t, n.substr(t, 7) === P ? (s = P, t += 7) : (s = e, a === 0 && o($e)), s !== e ? (u(), n.substr(t, 7) === U ? (l = U, t += 7) : (l = e, a === 0 && o(pe)), l !== e ? (u(), f = I(), f !== e ? (u(), n.substr(t, 2) === G ? (p = G, t += 2) : (p = e, a === 0 && o(ve)), p !== e ? (u(), v = b(), v !== e ? (u(), n.charCodeAt(t) === 59 ? (y = E, t++) : (y = e, a === 0 && o(S)), y !== e ? r = or(f, v) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)), r;
  }
  function Er() {
    var r;
    return r = Te(), r === e && (r = be(), r === e && (r = Ce(), r === e && (r = xe()))), r;
  }
  function be() {
    var r, s, l, f, p, v;
    return r = t, n.substr(t, 6) === W ? (s = W, t += 6) : (s = e, a === 0 && o(He)), s !== e ? (u(), l = b(), l !== e ? (u(), n.substr(t, 3) === Y ? (f = Y, t += 3) : (f = e, a === 0 && o(Ve)), f !== e ? (u(), p = mr(), p !== e ? (u(), n.charCodeAt(t) === 59 ? (v = E, t++) : (v = e, a === 0 && o(S)), v !== e ? r = cr(l, p) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r;
  }
  function mr() {
    var r, s, l, f, p, v, y, T;
    if (r = t, s = q(), s !== e) {
      for (l = [], f = t, p = u(), n.charCodeAt(t) === 44 ? (v = ee, t++) : (v = e, a === 0 && o(he)), v !== e ? (y = u(), T = q(), T !== e ? (p = [p, v, y, T], f = p) : (t = f, f = e)) : (t = f, f = e); f !== e; )
        l.push(f), f = t, p = u(), n.charCodeAt(t) === 44 ? (v = ee, t++) : (v = e, a === 0 && o(he)), v !== e ? (y = u(), T = q(), T !== e ? (p = [p, v, y, T], f = p) : (t = f, f = e)) : (t = f, f = e);
      r = ur(s, l);
    } else
      t = r, r = e;
    return r;
  }
  function q() {
    var r, s, l, f;
    return r = t, s = I(), s !== e ? (u(), n.charCodeAt(t) === 61 ? (l = Re, t++) : (l = e, a === 0 && o(Ze)), l !== e ? (u(), f = ye(), f !== e ? r = gr(s, f) : (t = r, r = e)) : (t = r, r = e)) : (t = r, r = e), r;
  }
  if (F = m(), i.peg$library)
    return (
      /** @type {any} */
      {
        peg$result: F,
        peg$currPos: t,
        peg$FAILED: e,
        peg$maxFailExpected: j,
        peg$maxFailPos: C
      }
    );
  if (F !== e && t === n.length)
    return F;
  throw F !== e && t < n.length && o(pr()), $r(
    j,
    C < n.length ? n.charAt(C) : null,
    C < n.length ? Ee(C, C + 1) : Ee(C, C)
  );
}
const x = {
  insert(n) {
    return {
      into(i) {
        let e;
        if (i) {
          if (e = document.querySelectorAll(i), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${i} selector!`);
            return;
          }
          e.forEach((g) => {
            g.innerHTML += n;
          });
        } else {
          console.error("No selector provided!");
          return;
        }
        e = null;
      }
    };
  },
  update(n) {
    return {
      set(i) {
        let e;
        if (n) {
          if (e = document.querySelectorAll(n), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${n} selector!`);
            return;
          }
        } else {
          console.error("No selector provided!");
          return;
        }
        typeof i == "object" ? Object.entries(i).forEach((g) => {
          const [c, m] = g;
          if (c === "text") {
            e.forEach((A) => {
              A.innerText = m;
            });
            return;
          }
          if (c === "html") {
            e.forEach((A) => {
              A.innerHTML = m;
            });
            return;
          }
          e.forEach((A) => {
            A.style[c] = m;
          });
        }) : console.error(i !== void 0 ? "Invalid content type! Expected object!" : "No content provided to update!"), e = null;
      }
    };
  },
  delete(n) {
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
        !n || n === "*" ? e.forEach((g) => {
          g.innerHTML = "";
        }) : e.forEach((g) => {
          let c = g.querySelectorAll(n);
          if (c = c.length === 0 ? c : Array.from(c), !c.length) {
            console.error(`No child element with ${n} selector!`);
            return;
          }
          c.forEach((m) => {
            m.innerHTML = "";
          }), c = null;
        }), e = null;
      }
    };
  },
  drop(n) {
    let i;
    if (n) {
      if (i = document.querySelectorAll(n), i = i.length === 0 ? i : Array.from(i), !i.length) {
        console.error(`No element with ${n} selector!`);
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
  createTrigger(n) {
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
          execute(g) {
            e.forEach((c) => {
              c.addEventListener(n, g);
            }), e = null;
          }
        };
      }
    };
  },
  executeTrigger(n) {
    return {
      on(i) {
        let e;
        if (i) {
          if (e = document.querySelectorAll(i), e = e.length === 0 ? e : Array.from(e), !e.length) {
            console.error(`No element with ${i} selector!`);
            return;
          }
          e.forEach((g) => {
            let c = new Event(n);
            g.dispatchEvent(c), c = null;
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
function Tr(n) {
  switch (n.type) {
    case "SELECT":
      switch (n.func) {
        case "COUNT":
          return x.select(n.from).count(n.target);
        case "SUM":
          return x.select(n.from).sum(n.target);
        case "AVG":
          return x.select(n.from).avg(n.target);
        case "MIN":
          return x.select(n.from).min(n.target);
        case "MAX":
          return x.select(n.from).max(n.target);
        default:
          throw new Error("Unknown function: " + n.func);
      }
    case "INSERT":
      return x.insert(n.values).into(n.target);
    case "UPDATE":
      const i = n.entries.map((g) => ({ [g.property]: g.value })), e = Object.assign({}, ...i);
      return x.update(n.target).set(e);
    case "DELETE":
      return x.delete(n.target).from(n.from);
    case "DROP":
      return x.drop(n.target);
    case "CREATE_TRIGGER":
      return x.createTrigger(n.event).on(n.target).execute(n.statement);
    case "EXECUTE_TRIGGER":
      return x.executeTrigger(n.event).on(n.target);
    default:
      throw new Error("Unknown AST node type: " + n.type);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  (async () => {
    const n = document.querySelectorAll('script[type="text/qdom"]');
    for (const i of n) {
      let e = "";
      if (i.src ? e = await (await fetch(i.src)).text() : e = i.textContent, !e) {
        console.error("No code found in script tag!");
        return;
      }
      e = e.split(`
`).map((g) => g.trim()).filter((g) => g.length > 0);
      for (const g of e) {
        const c = yr(g);
        Tr(c);
      }
    }
  })();
});
