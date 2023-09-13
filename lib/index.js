import { defineComponent as _, computed as r, openBlock as c, createElementBlock as d, normalizeClass as g, createCommentVNode as x, createTextVNode as w, renderSlot as h, createElementVNode as f, normalizeStyle as v } from "vue";
const S = ["disabled"], A = {
  key: 0,
  t: "1692610610160",
  class: "any-icon icon-loading",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4056",
  width: "200",
  height: "200"
}, B = /* @__PURE__ */ f("path", {
  d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 128a298.666667 298.666667 0 1 0 0 597.333334 298.666667 298.666667 0 0 0 0-597.333334z",
  fill: "currentColor",
  "fill-opacity": ".05",
  "p-id": "4057"
}, null, -1), C = /* @__PURE__ */ f("path", {
  d: "M813.696 813.696c166.613333-166.613333 166.613333-436.778667 0-603.392-166.613333-166.613333-436.778667-166.613333-603.392 0A64 64 0 0 0 300.8 300.8a298.666667 298.666667 0 1 1 422.4 422.4 64 64 0 0 0 90.496 90.496z",
  fill: "currentColor",
  "p-id": "4058"
}, null, -1), k = [
  B,
  C
], z = /* @__PURE__ */ _({
  __name: "index",
  props: {
    theme: {
      type: String,
      // 'primary' | 'line' | 'dashed' | 'text' | 'link',
      default: ""
    },
    size: {
      type: String,
      // 'large' | 'middle' | 'small',
      default: ""
    },
    shape: {
      type: String,
      // 'circle' | 'round' | 'square',
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    status: {
      type: String,
      // 'success' | 'warning' | 'error' | 'info',
      default: "normal"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    block: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, n = r(() => [
      "any-button",
      e.theme,
      e.size,
      e.shape,
      e.status,
      {
        "any-button-block": e.block
      }
    ]);
    return (s, a) => (c(), d("button", {
      class: g(n.value),
      disabled: e.disabled
    }, [
      e.loading ? (c(), d("svg", A, k)) : x("", !0),
      w(),
      h(s.$slots, "default")
    ], 10, S));
  }
});
const j = /* @__PURE__ */ _({
  __name: "index",
  props: {
    size: {
      type: String,
      // 'large' | 'middle' | 'small',
      default: ""
    },
    direction: {
      type: String,
      // 'row' | 'row-reverse' | 'column' | 'column-reverse',
      default: "row"
    },
    align: {
      type: String,
      // 'start' | 'end' | 'center' | 'baseline' | 'stretch',
      default: "start"
    },
    justify: {
      type: String,
      // 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly',
      default: "start"
    },
    wrap: {
      type: String,
      // 'nowrap' | 'wrap' | 'wrap-reverse',
      default: "wrap"
    },
    gap: {
      type: String,
      // 'nowrap' | 'wrap' | 'wrap-reverse',
      default: "16px"
    }
  },
  setup(t) {
    const e = t, n = r(() => ({
      display: "flex",
      flexDirection: e.direction,
      alignItems: e.align,
      justifyContent: e.justify,
      flexWrap: e.wrap,
      gap: e.gap
    }));
    return (s, a) => (c(), d("div", {
      class: "any-space",
      style: v(n.value)
    }, [
      h(s.$slots, "default")
    ], 4));
  }
});
window._iconfont_svg_string_4221203 = '<svg><symbol id="icon-like" viewBox="0 0 1024 1024"><path d="M760.384 64c47.808 0 91.968 11.968 132.352 35.84a264.32 264.32 0 0 1 95.872 97.152A263.68 263.68 0 0 1 1024 330.88c0 34.752-6.592 68.544-19.712 101.312a262.4 262.4 0 0 1-57.536 87.424L512 960 77.248 519.68A268.8 268.8 0 0 1 0 330.88c0-48.384 11.776-93.056 35.392-133.952A264.32 264.32 0 0 1 131.2 99.84 255.296 255.296 0 0 1 263.68 64 260.736 260.736 0 0 1 449.92 142.208l62.08 62.912 62.144-62.912a258.944 258.944 0 0 1 86.336-58.24A259.584 259.584 0 0 1 760.512 64h-0.128z m0 88.96a174.272 174.272 0 0 0-124.16 52.16L511.872 330.88 387.84 205.12a174.272 174.272 0 0 0-124.288-52.16c-32 0-61.504 7.936-88.384 23.808a175.36 175.36 0 0 0-63.808 64.64 176.32 176.32 0 0 0-23.552 89.536c0 23.168 4.352 45.632 13.056 67.392 8.704 21.824 21.504 41.28 38.4 58.432L512 834.176l372.672-377.408c16.896-17.152 29.696-36.608 38.4-58.432 8.704-21.76 13.056-44.224 13.056-67.392 0-32.448-7.808-62.336-23.488-89.536a175.36 175.36 0 0 0-63.872-64.64 170.688 170.688 0 0 0-88.32-23.808z"  ></path></symbol></svg>', function(t) {
  var n = (n = document.getElementsByTagName("script"))[n.length - 1], e = n.getAttribute("data-injectcss"), n = n.getAttribute("data-disable-injectsvg");
  if (!n) {
    var s, a, u, l, p, b = function(i, o) {
      o.parentNode.insertBefore(i, o);
    };
    if (e && !t.__iconfont__svg__cssinject__) {
      t.__iconfont__svg__cssinject__ = !0;
      try {
        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
      } catch (i) {
        console && console.log(i);
      }
    }
    s = function() {
      var i, o = document.createElement("div");
      o.innerHTML = t._iconfont_svg_string_4221203, (o = o.getElementsByTagName("svg")[0]) && (o.setAttribute("aria-hidden", "true"), o.style.position = "absolute", o.style.width = 0, o.style.height = 0, o.style.overflow = "hidden", o = o, (i = document.body).firstChild ? b(o, i.firstChild) : i.appendChild(o));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(s, 0) : (a = function() {
      document.removeEventListener("DOMContentLoaded", a, !1), s();
    }, document.addEventListener("DOMContentLoaded", a, !1)) : document.attachEvent && (u = s, l = t.document, p = !1, m(), l.onreadystatechange = function() {
      l.readyState == "complete" && (l.onreadystatechange = null, y());
    });
  }
  function y() {
    p || (p = !0, u());
  }
  function m() {
    try {
      l.documentElement.doScroll("left");
    } catch {
      return void setTimeout(m, 50);
    }
    y();
  }
}(window);
const E = ["xlink:href"], L = /* @__PURE__ */ _({
  __name: "index",
  props: {
    name: {
      type: String,
      required: !0
    },
    rotate: {
      type: Number,
      default: 0
    },
    spin: {
      type: Boolean,
      default: !1
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  setup(t) {
    const e = t, n = r(() => [{
      transform: `rotate(${e.rotate}deg)`
    }, e.style]), s = r(() => ({
      "any-icon": !0,
      [`icon-${e.name}`]: !0,
      spin: e.spin
    }));
    return (a, u) => (c(), d("svg", {
      class: g(s.value),
      style: v(n.value),
      "aria-hidden": "true"
    }, [
      f("use", {
        "xlink:href": `#icon-${e.name}`
      }, null, 8, E)
    ], 6));
  }
});
const N = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, a] of e)
    n[s] = a;
  return n;
}, $ = /* @__PURE__ */ N(L, [["__scopeId", "data-v-b1494f2d"]]), M = {
  install(t) {
    t.component("AnyButton", z), t.component("AnySpace", j), t.component("AnyIcon", $);
  }
};
export {
  z as AnyButton,
  $ as AnyIcon,
  j as AnySpace,
  M as default
};
