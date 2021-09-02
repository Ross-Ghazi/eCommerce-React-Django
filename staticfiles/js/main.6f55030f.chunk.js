(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    113: function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r(1),
        n = r(27),
        c = r.n(n),
        s = (r(82), r(83), r(118)),
        i = r(12),
        o = r(14),
        d = r(125),
        j = r(128),
        l = r(123),
        u = r(24),
        p = r(8),
        h = r(10),
        b = r.n(h),
        O = r(20),
        x = r(25),
        m = r.n(x),
        f = "USER_LOGIN_REQUEST",
        g = "USER_LOGIN_SUCCESS",
        y = "USER_LOGIN_FAIL",
        v = "USER_LOGOUT",
        I = "USER_REGISTER_REQUEST",
        S = "USER_REGISTER_SUCCESS",
        E = "USER_REGISTER_FAIL",
        C = "USER_DETAIL_REQUEST",
        L = "USER_DETAIL_SUCCESS",
        _ = "USER_DETAIL_FAIL",
        P = "USER_DETAIL_RESET",
        R = "USER_UPDATE_REQUEST",
        k = "USER_UPDATE_SUCCESS",
        A = "USER_UPDATE_FAIL",
        T = "USER_UPDATE_RESET",
        w = "ORDER_CREATE_REQUEST",
        D = "ORDER_CREATE_SUCCESS",
        N = "ORDER_CREATE_FAIL",
        U = "ORDER_CREATE_RESET",
        G = "ORDER_DETAILS_REQUEST",
        M = "ORDER_DETAILS_SUCCESS",
        F = "ORDER_DETAILS_FAIL",
        q = "ORDER_PAY_REQUEST",
        $ = "ORDER_PAY_SUCCESS",
        B = "ORDER_PAY_FAIL",
        J = "ORDER_PAY_RESET",
        Y = "ORDER_LIST_MY_REQUEST",
        Q = "ORDER_LIST_MY_SUCCESS",
        z = "ORDER_LIST_MY_FAIL",
        H = "ORDER_LIST_MY_RESET",
        V = r(0);
      var W = function () {
          var e = Object(p.c)(function (e) {
              return e.userLogin.userInfo;
            }),
            t = Object(p.b)();
          return Object(V.jsx)("header", {
            children: Object(V.jsx)(d.a, {
              bg: "dark",
              variant: "dark ",
              expand: "lg",
              collapseOnSelect: !0,
              children: Object(V.jsxs)(s.a, {
                children: [
                  Object(V.jsx)(u.LinkContainer, {
                    to: "/",
                    children: Object(V.jsx)(d.a.Brand, { children: "ProShop" }),
                  }),
                  Object(V.jsx)(d.a.Toggle, {
                    "aria-controls": "basic-navbar-nav",
                  }),
                  Object(V.jsx)(d.a.Collapse, {
                    id: "basic-navbar-nav",
                    children: Object(V.jsxs)(j.a, {
                      className: "mr-auto",
                      children: [
                        Object(V.jsx)(u.LinkContainer, {
                          to: "/cart",
                          children: Object(V.jsxs)(j.a.Link, {
                            children: [
                              Object(V.jsx)("i", {
                                className: "fas fa-shopping-cart",
                              }),
                              "Cart",
                            ],
                          }),
                        }),
                        e
                          ? Object(V.jsxs)(l.a, {
                              title: e.name,
                              id: "username",
                              children: [
                                Object(V.jsx)(u.LinkContainer, {
                                  to: "/profile",
                                  children: Object(V.jsx)(l.a.Item, {
                                    children: "Profile",
                                  }),
                                }),
                                Object(V.jsx)(l.a.Item, {
                                  onClick: function () {
                                    t(function (e) {
                                      e({ type: v }),
                                        e({ type: P }),
                                        e({ type: H }),
                                        localStorage.removeItem("userInfo");
                                    });
                                  },
                                  children: "Logout",
                                }),
                              ],
                            })
                          : Object(V.jsx)(u.LinkContainer, {
                              to: "/login",
                              children: Object(V.jsxs)(j.a.Link, {
                                children: [
                                  Object(V.jsx)("i", {
                                    className: "fa fa-user",
                                  }),
                                  "Login",
                                ],
                              }),
                            }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        X = r(119),
        K = r(73);
      var Z = function () {
          return Object(V.jsx)("footer", {
            children: Object(V.jsx)(s.a, {
              children: Object(V.jsx)(X.a, {
                children: Object(V.jsx)(K.a, {
                  className: "text-center py=3",
                  children: "Copyright \xa9 Ross",
                }),
              }),
            }),
          });
        },
        ee = r(126);
      var te = function (e) {
        var t = e.value,
          r = e.text,
          a = e.color;
        return Object(V.jsxs)("div", {
          className: "rating",
          children: [
            Object(V.jsx)("span", {
              children: Object(V.jsx)("i", {
                style: { color: a },
                className:
                  t >= 1
                    ? "fas fa-star"
                    : t >= 0.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              }),
            }),
            Object(V.jsx)("span", {
              children: Object(V.jsx)("i", {
                style: { color: a },
                className:
                  t >= 2
                    ? "fas fa-star"
                    : t >= 1.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              }),
            }),
            Object(V.jsx)("span", {
              children: Object(V.jsx)("i", {
                style: { color: a },
                className:
                  t >= 3
                    ? "fas fa-star"
                    : t >= 2.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              }),
            }),
            Object(V.jsx)("span", {
              children: Object(V.jsx)("i", {
                style: { color: a },
                className:
                  t >= 4
                    ? "fas fa-star"
                    : t >= 3.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              }),
            }),
            Object(V.jsx)("span", {
              children: Object(V.jsx)("i", {
                style: { color: a },
                className:
                  t >= 5
                    ? "fas fa-star"
                    : t >= 4.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              }),
            }),
            Object(V.jsx)("span", { children: r && r }),
          ],
        });
      };
      var re = function (e) {
          var t = e.product;
          return Object(V.jsxs)(ee.a, {
            className: "my-3 p-3 rounded",
            children: [
              Object(V.jsx)(i.Link, {
                to: "/product/".concat(t._id),
                children: Object(V.jsx)(ee.a.Img, { src: t.image }),
              }),
              Object(V.jsxs)(ee.a.Body, {
                children: [
                  Object(V.jsx)(i.Link, {
                    to: "/product/".concat(t._id),
                    children: Object(V.jsx)(ee.a.Title, {
                      as: "div",
                      children: Object(V.jsx)("strong", { children: t.name }),
                    }),
                  }),
                  Object(V.jsx)(ee.a.Text, {
                    as: "div",
                    children: Object(V.jsx)("div", {
                      className: "my-3",
                      children: Object(V.jsx)(te, {
                        value: t.rating,
                        text: "".concat(t.numReviews, " reviews"),
                        color: "#f8e825",
                      }),
                    }),
                  }),
                  Object(V.jsxs)(ee.a.Text, {
                    as: "h3",
                    children: ["$", t.price],
                  }),
                ],
              }),
            ],
          });
        },
        ae = r(120);
      var ne = function () {
          return Object(V.jsx)(ae.a, {
            animation: "border",
            role: "status",
            children: Object(V.jsx)("span", {
              className: "visually-hidden",
              children: "Loading...",
            }),
          });
        },
        ce = r(127);
      var se = function (e) {
          var t = e.variant,
            r = e.children;
          return Object(V.jsx)(ce.a, { variant: t, children: r });
        },
        ie = "PRODCUT_LIST_REQUEST",
        oe = "PRODCUT_LIST_SUCCESS",
        de = "PRODCUT_LIST_FAIL",
        je = "PRODCUT_DETAIL_REQUEST",
        le = "PRODCUT_DETAIL_SUCCESS",
        ue = "PRODCUT_DETAIL_FAIL";
      var pe = function () {
          var e = Object(p.b)(),
            t = Object(p.c)(function (e) {
              return e.ProductList;
            }),
            r = t.products,
            n = t.error,
            c = t.loading;
          return (
            Object(a.useEffect)(
              function () {
                e(
                  (function () {
                    var e = Object(O.a)(
                      b.a.mark(function e(t) {
                        var r, a;
                        return b.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: ie }),
                                    (e.next = 5),
                                    m.a.get("/api/products")
                                  );
                                case 5:
                                  (r = e.sent),
                                    (a = r.data),
                                    t({ type: oe, payload: a }),
                                    (e.next = 13);
                                  break;
                                case 10:
                                  (e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    t({
                                      type: de,
                                      payload:
                                        e.t0.response &&
                                        e.t0.response.data.message
                                          ? e.t0.response.data.message
                                          : e.t0.message,
                                    });
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 10]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
              [e]
            ),
            Object(V.jsxs)("div", {
              children: [
                Object(V.jsx)("h1", { children: "Latest product " }),
                c
                  ? Object(V.jsx)(ne, {})
                  : n
                  ? Object(V.jsxs)(se, {
                      variant: "danger",
                      children: [" ", n, " "],
                    })
                  : Object(V.jsx)(X.a, {
                      children: r.map(function (e) {
                        return Object(V.jsx)(
                          K.a,
                          {
                            sm: 12,
                            md: 6,
                            lg: 4,
                            xl: 3,
                            children: Object(V.jsx)(re, { product: e }),
                          },
                          e._id
                        );
                      }),
                    }),
              ],
            })
          );
        },
        he = r(37),
        be = r(9),
        Oe = r(121),
        xe = r(129),
        me = r(124),
        fe = r(72);
      var ge = function (e) {
          var t = e.match,
            r = e.history,
            n = Object(a.useState)(1),
            c = Object(be.a)(n, 2),
            s = c[0],
            o = c[1],
            d = Object(p.b)(),
            j = Object(p.c)(function (e) {
              return e.ProductDetails;
            }),
            l = j.product,
            u = j.error,
            h = j.loading;
          return (
            Object(a.useEffect)(
              function () {
                return d(
                  ((e = t.params.id),
                  (function () {
                    var t = Object(O.a)(
                      b.a.mark(function t(r) {
                        var a, n, c;
                        return b.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    r({ type: je }),
                                    (a = "/api/products/".concat(e)),
                                    (t.next = 5),
                                    fetch(a)
                                  );
                                case 5:
                                  return (n = t.sent), (t.next = 8), n.json();
                                case 8:
                                  (c = t.sent),
                                    r({ type: le, payload: c }),
                                    (t.next = 15);
                                  break;
                                case 12:
                                  (t.prev = 12),
                                    (t.t0 = t.catch(0)),
                                    r({
                                      type: ue,
                                      payload:
                                        t.t0.response &&
                                        t.t0.response.data.message.detail
                                          ? t.t0.response.data.message.detail
                                          : t.t0.message,
                                    });
                                case 15:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 12]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })())
                );
                var e;
              },
              [t, d]
            ),
            Object(V.jsxs)("div", {
              children: [
                Object(V.jsxs)(i.Link, {
                  to: "/",
                  className: "btn btn-light my-3",
                  children: [" ", "Go Back", " "],
                }),
                h
                  ? Object(V.jsx)(ne, {})
                  : u
                  ? Object(V.jsxs)(se, {
                      variant: "danger",
                      children: [" ", u, " "],
                    })
                  : Object(V.jsxs)(X.a, {
                      children: [
                        Object(V.jsx)(K.a, {
                          md: 6,
                          children: Object(V.jsx)(Oe.a, {
                            src: l.image,
                            alt: l.name,
                            fluid: !0,
                          }),
                        }),
                        Object(V.jsx)(K.a, {
                          md: 3,
                          children: Object(V.jsxs)(xe.a, {
                            variant: "flush",
                            children: [
                              Object(V.jsx)(xe.a.Item, {
                                children: Object(V.jsx)("h3", {
                                  children: l.name,
                                }),
                              }),
                              Object(V.jsx)(xe.a.Item, {
                                children: Object(V.jsx)(te, {
                                  value: l.rating,
                                  text: "".concat(l.numReviews, " reviews"),
                                  color: "#f8e825",
                                }),
                              }),
                              Object(V.jsxs)(xe.a.Item, {
                                children: ["price: $", l.price],
                              }),
                              Object(V.jsxs)(xe.a.Item, {
                                children: ["Description: ", l.description],
                              }),
                            ],
                          }),
                        }),
                        Object(V.jsx)(K.a, {
                          md: 3,
                          children: Object(V.jsx)(ee.a, {
                            children: Object(V.jsxs)(xe.a, {
                              variant: "flush",
                              children: [
                                Object(V.jsx)(xe.a.Item, {
                                  children: Object(V.jsxs)(X.a, {
                                    children: [
                                      Object(V.jsx)(K.a, {
                                        children: " Price: ",
                                      }),
                                      Object(V.jsx)(K.a, {
                                        children: Object(V.jsxs)("strong", {
                                          children: ["$", l.price],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                Object(V.jsx)(xe.a.Item, {
                                  children: Object(V.jsxs)(X.a, {
                                    children: [
                                      Object(V.jsx)(K.a, {
                                        children: " Status: ",
                                      }),
                                      Object(V.jsx)(K.a, {
                                        children:
                                          l.countInStock > 0
                                            ? "In Stock"
                                            : "Out of Stock",
                                      }),
                                    ],
                                  }),
                                }),
                                l.countInStock > 0 &&
                                  Object(V.jsx)(xe.a.Item, {
                                    children: Object(V.jsxs)(X.a, {
                                      children: [
                                        Object(V.jsx)(K.a, { children: "Qty" }),
                                        Object(V.jsx)(K.a, {
                                          xs: "auto",
                                          className: "my-1",
                                          children: Object(V.jsx)(me.a.Select, {
                                            onChange: function (e) {
                                              return o(e.target.value);
                                            },
                                            value: s,
                                            children: Object(he.a)(
                                              Array(l.countInStock).keys()
                                            ).map(function (e) {
                                              return Object(V.jsx)(
                                                "option",
                                                {
                                                  value: e + 1,
                                                  children: e + 1,
                                                },
                                                e + 1
                                              );
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                Object(V.jsx)(xe.a.Item, {
                                  children: Object(V.jsx)(fe.a, {
                                    onClick: function () {
                                      r.push(
                                        "/cart/"
                                          .concat(t.params.id, "?qty=")
                                          .concat(s)
                                      );
                                    },
                                    className: "btn-block",
                                    type: "button",
                                    disabled: 0 === l.countInStock,
                                    children: "Add to Cart",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
              ],
            })
          );
        },
        ye = "CART_ADD_ITEM",
        ve = "CART_REMOVE_ITEM",
        Ie = "CART_SAVE_SHIPPING_ADDRESS",
        Se = "CART_SAVE_PAYMENT_METHOD",
        Ee = "CARD_CLEAR_ITEMS",
        Ce = function (e, t) {
          return (function () {
            var r = Object(O.a)(
              b.a.mark(function r(a, n) {
                var c, s, i;
                return b.a.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (c = "/api/products/".concat(e)),
                          (r.next = 3),
                          fetch(c)
                        );
                      case 3:
                        return (s = r.sent), (r.next = 6), s.json();
                      case 6:
                        (i = r.sent),
                          a({
                            type: ye,
                            payload: {
                              product: i._id,
                              name: i.name,
                              image: i.image,
                              price: i.price,
                              countInStock: i.countInStock,
                              qty: t,
                            },
                          }),
                          localStorage.setItem(
                            "cartItems",
                            JSON.stringify(n().cart.cartItems)
                          );
                      case 9:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            );
            return function (e, t) {
              return r.apply(this, arguments);
            };
          })();
        };
      var Le = function (e) {
        var t = e.match,
          r = e.history,
          n = e.location,
          c = t.params.id,
          s = n.search ? Number(n.search.split("=")[1]) : 1,
          o = Object(p.b)(),
          d = function (e) {
            o(
              (function (e) {
                return function (t, r) {
                  t({ type: ve, payload: e }),
                    localStorage.setItem(
                      "cartItems",
                      JSON.stringify(r().cart.cartItems)
                    );
                };
              })(e)
            );
          },
          j = Object(p.c)(function (e) {
            return e.cart;
          }).cartItems;
        return (
          Object(a.useEffect)(
            function () {
              c && o(Ce(c, s));
            },
            [o, c, s]
          ),
          Object(V.jsxs)(X.a, {
            children: [
              Object(V.jsxs)(K.a, {
                md: 8,
                children: [
                  Object(V.jsx)("h1", { children: "Shopping Cart" }),
                  0 === j.length
                    ? Object(V.jsxs)(se, {
                        variant: "info",
                        children: [
                          "Your cart is empty ",
                          Object(V.jsx)(i.Link, {
                            to: "/",
                            children: " GO BACK ",
                          }),
                        ],
                      })
                    : Object(V.jsx)(xe.a, {
                        variant: "flush",
                        children: j.map(function (e) {
                          return Object(V.jsx)(
                            xe.a,
                            {
                              children: Object(V.jsxs)(X.a, {
                                children: [
                                  Object(V.jsx)(K.a, {
                                    md: 2,
                                    children: Object(V.jsx)(Oe.a, {
                                      src: e.image,
                                      alt: e.name,
                                      fluid: !0,
                                      rounded: !0,
                                    }),
                                  }),
                                  Object(V.jsx)(K.a, {
                                    md: 3,
                                    children: Object(V.jsx)(i.Link, {
                                      to: "/product/".concat(e.product),
                                      children: e.name,
                                    }),
                                  }),
                                  Object(V.jsxs)(K.a, {
                                    md: 2,
                                    children: ["$", e.price],
                                  }),
                                  Object(V.jsxs)(K.a, {
                                    md: 3,
                                    children: [
                                      " ",
                                      Object(V.jsx)(me.a.Select, {
                                        onChange: function (t) {
                                          return o(
                                            Ce(
                                              e.product,
                                              Number(t.target.value)
                                            )
                                          );
                                        },
                                        value: e.qty,
                                        children: Object(he.a)(
                                          Array(e.countInStock).keys()
                                        ).map(function (e) {
                                          return Object(V.jsx)(
                                            "option",
                                            { value: e + 1, children: e + 1 },
                                            e + 1
                                          );
                                        }),
                                      }),
                                      " ",
                                    ],
                                  }),
                                  Object(V.jsx)(K.a, {
                                    md: 1,
                                    children: Object(V.jsx)(fe.a, {
                                      type: "button",
                                      variant: "light",
                                      onClick: function () {
                                        return d(e.product);
                                      },
                                      children: Object(V.jsx)("i", {
                                        className: "fas fa-trash",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            },
                            e.product
                          );
                        }),
                      }),
                ],
              }),
              Object(V.jsx)(K.a, {
                md: 4,
                children: Object(V.jsxs)(ee.a, {
                  children: [
                    Object(V.jsx)(xe.a, {
                      variant: "flush",
                      children: Object(V.jsxs)(xe.a.Item, {
                        children: [
                          Object(V.jsxs)("h2", {
                            children: [
                              "Subtotal (",
                              j.reduce(function (e, t) {
                                return e + t.qty;
                              }, 0),
                              ") items",
                            ],
                          }),
                          "$",
                          j
                            .reduce(function (e, t) {
                              return e + t.qty * t.price;
                            }, 0)
                            .toFixed(2),
                        ],
                      }),
                    }),
                    Object(V.jsx)(xe.a, {
                      children: Object(V.jsx)(xe.a.Item, {
                        children: Object(V.jsx)(fe.a, {
                          type: "button",
                          className: "btn-block",
                          disabled: 0 === j.length,
                          onClick: function () {
                            r.push("/login?redirect=shipping");
                          },
                          children: "Proceed to checkpout",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      function _e(e) {
        var t = e.children;
        return Object(V.jsx)(s.a, {
          children: Object(V.jsx)(X.a, {
            className: "justify-content-md-center",
            children: Object(V.jsx)(K.a, { xs: 12, md: 6, children: t }),
          }),
        });
      }
      var Pe = function (e) {
        var t = e.location,
          r = e.history,
          n = Object(a.useState)(""),
          c = Object(be.a)(n, 2),
          s = c[0],
          o = c[1],
          d = Object(a.useState)(""),
          j = Object(be.a)(d, 2),
          l = j[0],
          u = j[1],
          h = Object(p.b)(),
          x = t.search ? t.search.split("=")[1] : "/",
          v = Object(p.c)(function (e) {
            return e.userLogin;
          }),
          I = v.error,
          S = v.loading,
          E = v.userInfo;
        return (
          Object(a.useEffect)(
            function () {
              E && r.push(x);
            },
            [r, x, E]
          ),
          Object(V.jsxs)(_e, {
            children: [
              Object(V.jsx)("h1", { children: "Sign In" }),
              I && Object(V.jsx)(se, { variant: "danger", children: I }),
              S && Object(V.jsx)(ne, {}),
              Object(V.jsxs)(me.a, {
                onSubmit: function (e) {
                  e.preventDefault(),
                    h(
                      (function (e, t) {
                        return (function () {
                          var r = Object(O.a)(
                            b.a.mark(function r(a) {
                              var n, c, s;
                              return b.a.wrap(
                                function (r) {
                                  for (;;)
                                    switch ((r.prev = r.next)) {
                                      case 0:
                                        return (
                                          (r.prev = 0),
                                          a({ type: f }),
                                          (n = {
                                            headers: {
                                              "Content-type":
                                                "application/json",
                                            },
                                          }),
                                          (r.next = 6),
                                          m.a.post(
                                            "/api/users/login/",
                                            { username: e, password: t },
                                            n
                                          )
                                        );
                                      case 6:
                                        (c = r.sent),
                                          (s = c.data),
                                          a({ type: g, payload: s }),
                                          localStorage.setItem(
                                            "userInfo",
                                            JSON.stringify(s)
                                          ),
                                          (r.next = 15);
                                        break;
                                      case 12:
                                        (r.prev = 12),
                                          (r.t0 = r.catch(0)),
                                          a({
                                            type: y,
                                            payload:
                                              r.t0.response &&
                                              r.t0.response.data.message
                                                ? r.t0.response.data.message
                                                : r.t0.message,
                                          });
                                      case 15:
                                      case "end":
                                        return r.stop();
                                    }
                                },
                                r,
                                null,
                                [[0, 12]]
                              );
                            })
                          );
                          return function (e) {
                            return r.apply(this, arguments);
                          };
                        })();
                      })(s, l)
                    );
                },
                children: [
                  Object(V.jsxs)(me.a.Group, {
                    controlId: "email",
                    children: [
                      Object(V.jsx)(me.a.Label, { children: "Email Address" }),
                      Object(V.jsx)(me.a.Control, {
                        type: "email",
                        placeholder: "Enter Email",
                        value: s,
                        onChange: function (e) {
                          return o(e.target.value);
                        },
                      }),
                    ],
                  }),
                  Object(V.jsxs)(me.a.Group, {
                    controlId: "password",
                    children: [
                      Object(V.jsx)(me.a.Label, { children: "Email Address" }),
                      Object(V.jsx)(me.a.Control, {
                        type: "password",
                        placeholder: "Enter password",
                        value: l,
                        onChange: function (e) {
                          return u(e.target.value);
                        },
                      }),
                    ],
                  }),
                  Object(V.jsxs)(fe.a, {
                    type: "submit",
                    variant: "primary",
                    children: ["Sign In", " "],
                  }),
                ],
              }),
              Object(V.jsxs)(X.a, {
                className: "py-3",
                children: [
                  "New Customer ?",
                  " ",
                  Object(V.jsxs)(i.Link, {
                    to: x ? "/register/?redirect=".concat(x) : "register",
                    children: ["Register", " "],
                  }),
                ],
              }),
            ],
          })
        );
      };
      var Re = function (e) {
          var t = e.location,
            r = e.history,
            n = Object(a.useState)(""),
            c = Object(be.a)(n, 2),
            s = c[0],
            o = c[1],
            d = Object(a.useState)(""),
            j = Object(be.a)(d, 2),
            l = j[0],
            u = j[1],
            h = Object(a.useState)(""),
            x = Object(be.a)(h, 2),
            f = x[0],
            y = x[1],
            v = Object(a.useState)(""),
            C = Object(be.a)(v, 2),
            L = C[0],
            _ = C[1],
            P = Object(a.useState)(""),
            R = Object(be.a)(P, 2),
            k = R[0],
            A = R[1],
            T = Object(p.b)(),
            w = t.search ? t.search.split("=") : "/",
            D = Object(p.c)(function (e) {
              return e.userRegister;
            }),
            N = D.error,
            U = D.loading,
            G = D.userInfo;
          return (
            Object(a.useEffect)(
              function () {
                G && r.push(w);
              },
              [r, w, G]
            ),
            Object(V.jsxs)(_e, {
              children: [
                Object(V.jsx)("h1", { children: "Register" }),
                k && Object(V.jsx)(se, { variant: "danger", children: k }),
                N && Object(V.jsx)(se, { variant: "danger", children: N }),
                U && Object(V.jsx)(ne, {}),
                Object(V.jsxs)(me.a, {
                  onSubmit: function (e) {
                    e.preventDefault(),
                      f === L
                        ? T(
                            (function (e, t, r) {
                              return (function () {
                                var a = Object(O.a)(
                                  b.a.mark(function a(n) {
                                    var c, s, i;
                                    return b.a.wrap(
                                      function (a) {
                                        for (;;)
                                          switch ((a.prev = a.next)) {
                                            case 0:
                                              return (
                                                (a.prev = 0),
                                                n({ type: I }),
                                                (c = {
                                                  headers: {
                                                    "Content-type":
                                                      "application/json",
                                                  },
                                                }),
                                                (a.next = 6),
                                                m.a.post(
                                                  "/api/users/register/",
                                                  {
                                                    name: r,
                                                    email: e,
                                                    password: t,
                                                  },
                                                  c
                                                )
                                              );
                                            case 6:
                                              (s = a.sent),
                                                (i = s.data),
                                                n({ type: S, payload: i }),
                                                n({ type: g, payload: i }),
                                                localStorage.setItem(
                                                  "userInfo",
                                                  JSON.stringify(i)
                                                ),
                                                (a.next = 16);
                                              break;
                                            case 13:
                                              (a.prev = 13),
                                                (a.t0 = a.catch(0)),
                                                n({
                                                  type: E,
                                                  payload:
                                                    a.t0.response &&
                                                    a.t0.response.data.message
                                                      ? a.t0.response.data
                                                          .message
                                                      : a.t0.message,
                                                });
                                            case 16:
                                            case "end":
                                              return a.stop();
                                          }
                                      },
                                      a,
                                      null,
                                      [[0, 13]]
                                    );
                                  })
                                );
                                return function (e) {
                                  return a.apply(this, arguments);
                                };
                              })();
                            })(s, l, f)
                          )
                        : A("Passwords do not match");
                  },
                  children: [
                    Object(V.jsxs)(me.a.Group, {
                      controlId: "name",
                      children: [
                        Object(V.jsx)(me.a.Label, { children: " Name" }),
                        Object(V.jsx)(me.a.Control, {
                          required: !0,
                          type: "name",
                          placeholder: "Enter Name",
                          value: s,
                          onChange: function (e) {
                            return o(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(V.jsxs)(me.a.Group, {
                      controlId: "email",
                      children: [
                        Object(V.jsx)(me.a.Label, {
                          children: "Email Address",
                        }),
                        Object(V.jsx)(me.a.Control, {
                          type: "email",
                          required: !0,
                          placeholder: "Enter Email",
                          value: l,
                          onChange: function (e) {
                            return u(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(V.jsxs)(me.a.Group, {
                      controlId: "password",
                      children: [
                        Object(V.jsx)(me.a.Label, {
                          children: "Email Password",
                        }),
                        Object(V.jsx)(me.a.Control, {
                          type: "password",
                          required: !0,
                          placeholder: "Enter password",
                          value: f,
                          onChange: function (e) {
                            return y(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(V.jsxs)(me.a.Group, {
                      controlId: "password2",
                      children: [
                        Object(V.jsx)(me.a.Label, {
                          children: "Cinfirm Password",
                        }),
                        Object(V.jsx)(me.a.Control, {
                          type: "password",
                          required: !0,
                          placeholder: "Confrim password",
                          value: L,
                          onChange: function (e) {
                            return _(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(V.jsx)(fe.a, {
                      type: "submit",
                      variant: "primary",
                      children: "Register",
                    }),
                  ],
                }),
                Object(V.jsxs)(X.a, {
                  className: "py-3",
                  children: [
                    "Already haveh ab account ?",
                    Object(V.jsxs)(i.Link, {
                      to: w ? "/login/?redirect=".concat(w) : "login",
                      children: ["Sign in", " "],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        ke = r(122);
      var Ae = function (e) {
        e.location;
        var t = e.history,
          r = Object(a.useState)(""),
          n = Object(be.a)(r, 2),
          c = n[0],
          s = n[1],
          i = Object(a.useState)(""),
          o = Object(be.a)(i, 2),
          d = o[0],
          j = o[1],
          l = Object(a.useState)(""),
          h = Object(be.a)(l, 2),
          x = h[0],
          f = h[1],
          y = Object(a.useState)(""),
          v = Object(be.a)(y, 2),
          I = v[0],
          S = v[1],
          E = Object(a.useState)(""),
          P = Object(be.a)(E, 2),
          w = (P[0], P[1]),
          D = Object(p.b)(),
          N = Object(p.c)(function (e) {
            return e.userDetails;
          }),
          U = (N.error, N.loading, N.user),
          G = Object(p.c)(function (e) {
            return e.userLogin;
          }).userInfo,
          M = Object(p.c)(function (e) {
            return e.userUpdateProfile;
          }).success,
          F = Object(p.c)(function (e) {
            return e.myOrderList;
          }),
          q = F.loading,
          $ = F.error,
          B = F.orders;
        return (
          Object(a.useEffect)(
            function () {
              var e;
              G
                ? U && U.name && !M
                  ? (s(U.name), j(U.email))
                  : (D({ type: T }),
                    D(
                      ((e = "profile"),
                      (function () {
                        var t = Object(O.a)(
                          b.a.mark(function t(r, a) {
                            var n, c, s, i, o, d;
                            return b.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        r({ type: C }),
                                        (n = a()),
                                        (c = n.userLogin.userInfo),
                                        (s = "/api/users/".concat(e)),
                                        (i = {
                                          headers: {
                                            "Content-type": "application/json",
                                            Authorization: "Bearer ".concat(
                                              c.token
                                            ),
                                          },
                                        }),
                                        (t.next = 7),
                                        m.a.get(s, i)
                                      );
                                    case 7:
                                      (o = t.sent),
                                        (d = o.data),
                                        r({ type: L, payload: d }),
                                        (t.next = 15);
                                      break;
                                    case 12:
                                      (t.prev = 12),
                                        (t.t0 = t.catch(0)),
                                        r({
                                          type: _,
                                          payload:
                                            t.t0.response &&
                                            t.t0.response.data.message
                                              ? t.t0.response.data.message
                                              : t.t0.message,
                                        });
                                    case 15:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 12]]
                            );
                          })
                        );
                        return function (e, r) {
                          return t.apply(this, arguments);
                        };
                      })())
                    ),
                    D(
                      (function () {
                        var e = Object(O.a)(
                          b.a.mark(function e(t, r) {
                            var a, n, c, s, i;
                            return b.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        t({ type: Y }),
                                        (a = r()),
                                        (n = a.userLogin.userInfo),
                                        (c = {
                                          headers: {
                                            "Content-type": "application/json",
                                            Authorization: "Bearer ".concat(
                                              n.token
                                            ),
                                          },
                                        }),
                                        (e.next = 7),
                                        m.a.get("/api/orders/myorders/", c)
                                      );
                                    case 7:
                                      (s = e.sent),
                                        (i = s.data),
                                        t({ type: Q, payload: i }),
                                        (e.next = 15);
                                      break;
                                    case 12:
                                      (e.prev = 12),
                                        (e.t0 = e.catch(0)),
                                        t({
                                          type: z,
                                          payload:
                                            e.t0.response &&
                                            e.t0.response.data.message
                                              ? e.t0.response.data.message
                                              : e.t0.message,
                                        });
                                    case 15:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 12]]
                            );
                          })
                        );
                        return function (t, r) {
                          return e.apply(this, arguments);
                        };
                      })()
                    ))
                : t.push("/login");
            },
            [t, D, M, U, G]
          ),
          Object(V.jsxs)(X.a, {
            children: [
              Object(V.jsxs)(K.a, {
                md: 3,
                children: [
                  Object(V.jsx)("h2", { children: "User Profile" }),
                  Object(V.jsxs)(me.a, {
                    onSubmit: function (e) {
                      e.preventDefault(),
                        x != I
                          ? w("Passwords do not match")
                          : D(
                              (function (e) {
                                return (function () {
                                  var t = Object(O.a)(
                                    b.a.mark(function t(r, a) {
                                      var n, c, s, i, o;
                                      return b.a.wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.prev = 0),
                                                  r({ type: R }),
                                                  (n = a()),
                                                  (c = n.userLogin.userInfo),
                                                  (s = {
                                                    headers: {
                                                      "Content-type":
                                                        "application/json",
                                                      Authorization:
                                                        "Bearer ".concat(
                                                          c.token
                                                        ),
                                                    },
                                                  }),
                                                  (t.next = 7),
                                                  m.a.put(
                                                    "/api/users/profile/update/",
                                                    e,
                                                    s
                                                  )
                                                );
                                              case 7:
                                                (i = t.sent),
                                                  (o = i.data),
                                                  r({ type: k, payload: o }),
                                                  r({ type: g, payload: o }),
                                                  localStorage.setItem(
                                                    "userInfo",
                                                    JSON.stringify(o)
                                                  ),
                                                  (t.next = 17);
                                                break;
                                              case 14:
                                                (t.prev = 14),
                                                  (t.t0 = t.catch(0)),
                                                  r({
                                                    type: A,
                                                    payload:
                                                      t.t0.response &&
                                                      t.t0.response.data.message
                                                        ? t.t0.response.data
                                                            .message
                                                        : t.t0.message,
                                                  });
                                              case 17:
                                              case "end":
                                                return t.stop();
                                            }
                                        },
                                        t,
                                        null,
                                        [[0, 14]]
                                      );
                                    })
                                  );
                                  return function (e, r) {
                                    return t.apply(this, arguments);
                                  };
                                })();
                              })({ id: U._id, name: c, email: d, password: x })
                            );
                    },
                    children: [
                      Object(V.jsxs)(me.a.Group, {
                        controlId: "name",
                        children: [
                          Object(V.jsx)(me.a.Label, { children: " Name" }),
                          Object(V.jsx)(me.a.Control, {
                            required: !0,
                            type: "name",
                            placeholder: "Enter Name",
                            value: c,
                            onChange: function (e) {
                              return s(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(V.jsxs)(me.a.Group, {
                        controlId: "email",
                        children: [
                          Object(V.jsx)(me.a.Label, {
                            children: "Email Address",
                          }),
                          Object(V.jsx)(me.a.Control, {
                            type: "email",
                            required: !0,
                            placeholder: "Enter Email",
                            value: d,
                            onChange: function (e) {
                              return j(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(V.jsxs)(me.a.Group, {
                        controlId: "password",
                        children: [
                          Object(V.jsx)(me.a.Label, {
                            children: "Email Password",
                          }),
                          Object(V.jsx)(me.a.Control, {
                            type: "password",
                            placeholder: "Enter password",
                            value: x,
                            onChange: function (e) {
                              return f(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(V.jsxs)(me.a.Group, {
                        controlId: "password2",
                        children: [
                          Object(V.jsx)(me.a.Label, {
                            children: "Cinfirm Password",
                          }),
                          Object(V.jsx)(me.a.Control, {
                            type: "password",
                            placeholder: "Confrim password",
                            value: I,
                            onChange: function (e) {
                              return S(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(V.jsx)(fe.a, {
                        type: "submit",
                        variant: "primary",
                        children: "update",
                      }),
                    ],
                  }),
                ],
              }),
              Object(V.jsxs)(K.a, {
                md: 9,
                children: [
                  Object(V.jsx)("h2", { children: "My Orders" }),
                  q
                    ? Object(V.jsx)(ne, {})
                    : $
                    ? Object(V.jsx)(se, { variant: "danger", children: $ })
                    : Object(V.jsxs)(ke.a, {
                        striped: !0,
                        responsive: !0,
                        className: "table-sm",
                        children: [
                          Object(V.jsx)("thead", {
                            children: Object(V.jsxs)("tr", {
                              children: [
                                Object(V.jsx)("th", { children: "ID" }),
                                Object(V.jsx)("th", { children: "Date" }),
                                Object(V.jsx)("th", { children: "Total" }),
                                Object(V.jsx)("th", { children: "Paid" }),
                                Object(V.jsx)("th", { children: "Delivered" }),
                              ],
                            }),
                          }),
                          Object(V.jsx)("tbody", {
                            children: B.map(function (e) {
                              return Object(V.jsxs)(
                                "tr",
                                {
                                  children: [
                                    Object(V.jsx)("td", { children: e._id }),
                                    Object(V.jsx)("td", {
                                      children: e.createdAt.substring(0, 10),
                                    }),
                                    Object(V.jsx)("td", {
                                      children: e.totalPrice,
                                    }),
                                    Object(V.jsx)("td", {
                                      children: e.isPaid
                                        ? e.paidAt.substring(0, 10)
                                        : Object(V.jsx)("i", {
                                            className: "fas fa-times",
                                            style: { color: "red" },
                                          }),
                                    }),
                                    Object(V.jsx)("td", {
                                      children: Object(V.jsx)(u.LinkContainer, {
                                        to: "/order/".concat(e._id),
                                        children: Object(V.jsx)(fe.a, {
                                          className: "btn-sm",
                                          children: "Details",
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                e._id
                              );
                            }),
                          }),
                        ],
                      }),
                ],
              }),
            ],
          })
        );
      };
      var Te = function (e) {
        var t = e.step1,
          r = e.step2,
          a = e.step3,
          n = e.step4;
        return Object(V.jsxs)(j.a, {
          className: "justify-content-center mb-4",
          children: [
            Object(V.jsx)(j.a.Item, {
              children: t
                ? Object(V.jsx)(u.LinkContainer, {
                    to: "/login",
                    children: Object(V.jsx)(j.a.Link, { children: "Login" }),
                  })
                : Object(V.jsx)(j.a.Link, { disabled: !0, children: "Login" }),
            }),
            Object(V.jsx)(j.a.Item, {
              children: r
                ? Object(V.jsx)(u.LinkContainer, {
                    to: "/shipping",
                    children: Object(V.jsx)(j.a.Link, { children: "Shipping" }),
                  })
                : Object(V.jsx)(j.a.Link, {
                    disabled: !0,
                    children: "Shipping",
                  }),
            }),
            Object(V.jsx)(j.a.Item, {
              children: a
                ? Object(V.jsx)(u.LinkContainer, {
                    to: "/payment",
                    children: Object(V.jsx)(j.a.Link, { children: "Payment" }),
                  })
                : Object(V.jsx)(j.a.Link, {
                    disabled: !0,
                    children: "Payment",
                  }),
            }),
            Object(V.jsx)(j.a.Item, {
              children: n
                ? Object(V.jsx)(u.LinkContainer, {
                    to: "/placeorder",
                    children: Object(V.jsx)(j.a.Link, {
                      children: "Place Order",
                    }),
                  })
                : Object(V.jsx)(j.a.Link, {
                    disabled: !0,
                    children: "Place Order",
                  }),
            }),
          ],
        });
      };
      var we = function (e) {
        var t = e.history,
          r = Object(p.b)(),
          n = Object(p.c)(function (e) {
            return e.cart;
          }).shippingAddress,
          c = Object(a.useState)(n.address),
          s = Object(be.a)(c, 2),
          i = s[0],
          o = s[1],
          d = Object(a.useState)(n.city),
          j = Object(be.a)(d, 2),
          l = j[0],
          u = j[1],
          h = Object(a.useState)(n.postalcode),
          b = Object(be.a)(h, 2),
          O = b[0],
          x = b[1],
          m = Object(a.useState)(n.country),
          f = Object(be.a)(m, 2),
          g = f[0],
          y = f[1];
        return Object(V.jsxs)(_e, {
          children: [
            Object(V.jsx)(Te, { step1: !0 }),
            Object(V.jsx)("h1", { children: "Shipping" }),
            Object(V.jsxs)(me.a, {
              onSubmit: function (e) {
                var a;
                e.preventDefault(),
                  r(
                    ((a = { address: i, city: l, postalcode: O, country: g }),
                    function (e) {
                      e({ type: Ie, payload: a }),
                        localStorage.setItem(
                          "shippingAddress",
                          JSON.stringify(a)
                        );
                    })
                  ),
                  t.push("/payment");
              },
              children: [
                Object(V.jsxs)(me.a.Group, {
                  controlId: "address",
                  children: [
                    Object(V.jsx)(me.a.Label, { children: " Address" }),
                    Object(V.jsx)(me.a.Control, {
                      required: !0,
                      type: "text",
                      placeholder: "Enter Address",
                      value: i || "",
                      onChange: function (e) {
                        return o(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(V.jsxs)(me.a.Group, {
                  controlId: "city",
                  children: [
                    Object(V.jsx)(me.a.Label, { children: " City" }),
                    Object(V.jsx)(me.a.Control, {
                      required: !0,
                      type: "text",
                      placeholder: "Enter City",
                      value: l || "",
                      onChange: function (e) {
                        return u(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(V.jsxs)(me.a.Group, {
                  controlId: "postalcode",
                  children: [
                    Object(V.jsx)(me.a.Label, { children: " Postal Code" }),
                    Object(V.jsx)(me.a.Control, {
                      required: !0,
                      type: "text",
                      placeholder: "Enter Postal Code",
                      value: O || "",
                      onChange: function (e) {
                        return x(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(V.jsxs)(me.a.Group, {
                  controlId: "country",
                  children: [
                    Object(V.jsx)(me.a.Label, { children: " Country" }),
                    Object(V.jsx)(me.a.Control, {
                      required: !0,
                      type: "text",
                      placeholder: "Enter country",
                      value: g || "",
                      onChange: function (e) {
                        return y(e.target.value);
                      },
                    }),
                  ],
                }),
                Object(V.jsx)(fe.a, {
                  type: "submit",
                  variant: "primary",
                  children: "Continue",
                }),
              ],
            }),
          ],
        });
      };
      var De = function (e) {
        var t = e.history,
          r = Object(p.b)(),
          n = Object(p.c)(function (e) {
            return e.cart;
          }).shippingAddress,
          c = Object(a.useState)("PayPal"),
          s = Object(be.a)(c, 2),
          i = s[0],
          o = s[1];
        return (
          n.address || t.push("/shipping"),
          Object(V.jsxs)(_e, {
            children: [
              Object(V.jsx)(Te, { step1: !0, step2: !0, step3: !0 }),
              Object(V.jsxs)(me.a, {
                onSubmit: function (e) {
                  var a;
                  e.preventDefault(),
                    r(
                      ((a = i),
                      function (e) {
                        e({ type: Se, payload: a }),
                          localStorage.setItem(
                            "paymentMethod",
                            JSON.stringify(a)
                          );
                      })
                    ),
                    t.push("/placeorder");
                },
                children: [
                  Object(V.jsxs)(me.a.Group, {
                    children: [
                      Object(V.jsx)(me.a.Label, {
                        as: "legend",
                        children: "Select Meothd",
                      }),
                      Object(V.jsx)(K.a, {
                        children: Object(V.jsx)(me.a.Check, {
                          type: "radio",
                          label: "PayPal or Credit Card",
                          id: "PayPal",
                          name: "PaymentMethod",
                          checked: !0,
                          onChange: function (e) {
                            return o(e.target.value);
                          },
                        }),
                      }),
                    ],
                  }),
                  Object(V.jsx)(fe.a, {
                    type: "submit",
                    variant: "primary",
                    children: "Continue",
                  }),
                ],
              }),
            ],
          })
        );
      };
      var Ne = function (e) {
          var t = e.history,
            r = Object(p.c)(function (e) {
              return e.orderCreate;
            }),
            n = r.order,
            c = r.error,
            s = r.success,
            o = Object(p.b)(),
            d = Object(p.c)(function (e) {
              return e.cart;
            });
          return (
            (d.itemsPrice = d.cartItems.reduce(function (e, t) {
              return e + t.qty * t.price;
            }, 0)),
            (d.shippingPrice = d.itemsPrice > 100 ? 0 : 25),
            (d.taxPrice = 0.05 * (d.itemsPrice + d.shippingPrice)),
            (d.totalPrice = d.taxPrice + d.shippingPrice + d.itemsPrice),
            d.paymentMethod || t.push("/payment"),
            Object(a.useEffect)(
              function () {
                s && (t.push("/order/".concat(n._id)), o({ type: U }));
              },
              [s, t]
            ),
            Object(V.jsxs)("div", {
              children: [
                Object(V.jsx)(Te, {
                  step1: !0,
                  step2: !0,
                  step3: !0,
                  step4: !0,
                }),
                Object(V.jsxs)(X.a, {
                  children: [
                    Object(V.jsx)(K.a, {
                      md: 8,
                      children: Object(V.jsxs)(xe.a, {
                        variant: "flush",
                        children: [
                          Object(V.jsxs)(xe.a.Item, {
                            children: [
                              Object(V.jsx)("h2", { children: "Shipping" }),
                              Object(V.jsxs)("p", {
                                children: [
                                  Object(V.jsx)("strong", {
                                    children: "adress:",
                                  }),
                                  d.shippingAddress.address,
                                  ", ",
                                  d.shippingAddress.city,
                                  ",",
                                  " ",
                                  d.shippingAddress.postalcode,
                                  ",",
                                  " ",
                                  d.shippingAddress.country,
                                  ",",
                                ],
                              }),
                            ],
                          }),
                          Object(V.jsxs)(xe.a.Item, {
                            children: [
                              Object(V.jsx)("h2", {
                                children: "Payment Method",
                              }),
                              Object(V.jsxs)("p", {
                                children: [
                                  Object(V.jsx)("strong", {
                                    children: "Method:",
                                  }),
                                  d.paymentMethod,
                                ],
                              }),
                            ],
                          }),
                          Object(V.jsxs)(xe.a.Item, {
                            children: [
                              Object(V.jsx)("h2", { children: "Order items" }),
                              0 === d.cartItems.length
                                ? Object(V.jsx)(se, {
                                    variant: "info",
                                    children: "Your card is empty",
                                  })
                                : Object(V.jsx)(xe.a, {
                                    variant: "flush",
                                    children: d.cartItems.map(function (e, t) {
                                      return Object(V.jsx)(
                                        xe.a.Item,
                                        {
                                          children: Object(V.jsxs)(X.a, {
                                            children: [
                                              Object(V.jsx)(K.a, {
                                                md: 1,
                                                children: Object(V.jsx)(Oe.a, {
                                                  src: e.image,
                                                  alt: e.name,
                                                  fluid: !0,
                                                  rounded: !0,
                                                }),
                                              }),
                                              Object(V.jsx)(K.a, {
                                                children: Object(V.jsxs)(
                                                  i.Link,
                                                  {
                                                    to: "/product/".concat(
                                                      e.product
                                                    ),
                                                    children: [e.name, " "],
                                                  }
                                                ),
                                              }),
                                              Object(V.jsxs)(K.a, {
                                                md: 4,
                                                children: [
                                                  e.qty,
                                                  " X $",
                                                  e.price,
                                                  "=$",
                                                  (e.qty * e.price).toFixed(2),
                                                ],
                                              }),
                                            ],
                                          }),
                                        },
                                        t
                                      );
                                    }),
                                  }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(V.jsx)(K.a, {
                      md: 4,
                      children: Object(V.jsx)(ee.a, {
                        children: Object(V.jsxs)(xe.a, {
                          variant: "flush",
                          children: [
                            Object(V.jsx)(xe.a.Item, {
                              children: Object(V.jsx)("h2", {
                                children: "Order Summery",
                              }),
                            }),
                            Object(V.jsx)(xe.a.Item, {
                              children: Object(V.jsxs)(X.a, {
                                children: [
                                  Object(V.jsx)(K.a, { children: "Item:" }),
                                  Object(V.jsxs)(K.a, {
                                    children: ["$", d.itemsPrice.toFixed(2)],
                                  }),
                                ],
                              }),
                            }),
                            Object(V.jsx)(xe.a.Item, {
                              children: Object(V.jsxs)(X.a, {
                                children: [
                                  Object(V.jsx)(K.a, { children: "Shipping:" }),
                                  Object(V.jsxs)(K.a, {
                                    children: ["$", d.shippingPrice.toFixed(2)],
                                  }),
                                ],
                              }),
                            }),
                            Object(V.jsx)(xe.a.Item, {
                              children: Object(V.jsxs)(X.a, {
                                children: [
                                  Object(V.jsx)(K.a, { children: "Tax:" }),
                                  Object(V.jsxs)(K.a, {
                                    children: ["$", d.taxPrice.toFixed(2)],
                                  }),
                                ],
                              }),
                            }),
                            Object(V.jsx)(xe.a.Item, {
                              children: Object(V.jsxs)(X.a, {
                                children: [
                                  Object(V.jsx)(K.a, { children: "Total:" }),
                                  Object(V.jsxs)(K.a, {
                                    children: ["$", d.totalPrice.toFixed(2)],
                                  }),
                                ],
                              }),
                            }),
                            Object(V.jsx)(xe.a.Item, {
                              children:
                                c &&
                                Object(V.jsx)(se, {
                                  variant: "danger",
                                  children: c,
                                }),
                            }),
                            Object(V.jsx)(xe.a.Item, {
                              children: Object(V.jsx)(fe.a, {
                                type: "button",
                                className: "btn-block",
                                disabled: 0 === d.cartItems,
                                onClick: function () {
                                  o(
                                    (function (e) {
                                      return (function () {
                                        var t = Object(O.a)(
                                          b.a.mark(function t(r, a) {
                                            var n, c, s, i, o;
                                            return b.a.wrap(
                                              function (t) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      return (
                                                        (t.prev = 0),
                                                        r({ type: w }),
                                                        (n = a()),
                                                        (c =
                                                          n.userLogin.userInfo),
                                                        (s = {
                                                          headers: {
                                                            "Content-type":
                                                              "application/json",
                                                            Authorization:
                                                              "Bearer ".concat(
                                                                c.token
                                                              ),
                                                          },
                                                        }),
                                                        (t.next = 7),
                                                        m.a.post(
                                                          "/api/orders/add/",
                                                          e,
                                                          s
                                                        )
                                                      );
                                                    case 7:
                                                      (i = t.sent),
                                                        (o = i.data),
                                                        r({
                                                          type: D,
                                                          payload: o,
                                                        }),
                                                        r({ type: Ee }),
                                                        localStorage.removeItem(
                                                          "cartItems"
                                                        ),
                                                        (t.next = 17);
                                                      break;
                                                    case 14:
                                                      (t.prev = 14),
                                                        (t.t0 = t.catch(0)),
                                                        r({
                                                          type: N,
                                                          payload:
                                                            t.t0.response &&
                                                            t.t0.response.data
                                                              .message
                                                              ? t.t0.response
                                                                  .data.message
                                                              : t.t0.message,
                                                        });
                                                    case 17:
                                                    case "end":
                                                      return t.stop();
                                                  }
                                              },
                                              t,
                                              null,
                                              [[0, 14]]
                                            );
                                          })
                                        );
                                        return function (e, r) {
                                          return t.apply(this, arguments);
                                        };
                                      })();
                                    })({
                                      orderItems: d.cartItems,
                                      shippingAddress: d.shippingAddress,
                                      paymentMethod: d.paymentMethod,
                                      itemsPrice: d.itemPrice,
                                      shippingPrice: d.shippingPrice,
                                      taxPrice: d.taxPrice,
                                      totalPrice: d.totalPrice,
                                    })
                                  );
                                },
                                children: "Place Order",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Ue = r(74);
      var Ge = function (e) {
        var t = e.match.params.id,
          r = Object(p.b)(),
          n = Object(a.useState)(!1),
          c = Object(be.a)(n, 2),
          s = c[0],
          o = c[1],
          d = Object(p.c)(function (e) {
            return e.orderDetails;
          }),
          j = d.order,
          l = d.error,
          u = d.loading,
          h = Object(p.c)(function (e) {
            return e.orderPay;
          }),
          x = h.success,
          f = h.loading;
        return (
          !u & l &&
            (j.itemsPrice = j.orderItems.reduce(function (e, t) {
              return e + t.qty * t.price;
            }, 0)),
          Object(a.useEffect)(
            function () {
              var e;
              !j || x || j._id !== Number(t)
                ? (r({ type: J }),
                  r(
                    ((e = t),
                    (function () {
                      var t = Object(O.a)(
                        b.a.mark(function t(r, a) {
                          var n, c, s, i, o, d;
                          return b.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      r({ type: G }),
                                      (n = a()),
                                      (c = n.userLogin.userInfo),
                                      (s = "/api/orders/".concat(e, "/")),
                                      (i = {
                                        headers: {
                                          "Content-type": "application/json",
                                          Authorization: "Bearer ".concat(
                                            c.token
                                          ),
                                        },
                                      }),
                                      (t.next = 7),
                                      m.a.get(s, i)
                                    );
                                  case 7:
                                    (o = t.sent),
                                      (d = o.data),
                                      r({ type: M, payload: d }),
                                      (t.next = 15);
                                    break;
                                  case 12:
                                    (t.prev = 12),
                                      (t.t0 = t.catch(0)),
                                      r({
                                        type: F,
                                        payload:
                                          t.t0.response &&
                                          t.t0.response.data.message
                                            ? t.t0.response.data.message
                                            : t.t0.message,
                                      });
                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 12]]
                          );
                        })
                      );
                      return function (e, r) {
                        return t.apply(this, arguments);
                      };
                    })())
                  ))
                : j.isPaid ||
                  (window.paypal
                    ? o(!0)
                    : (function () {
                        var e = document.createElement("script");
                        (e.type = "text/javascript"),
                          (e.src =
                            "https://www.paypal.com/sdk/js?client-id=AYPHR5k17yPpbN0pjrTFHDRPkT1mL4FPhyTGrCVc-s06NaCvSTcMq4rD6P1NX4bWr8-p13eWDx40IVJ5"),
                          (e.async = !0),
                          (e.onload = function () {
                            o(!0);
                          }),
                          document.body.appendChild(e);
                      })());
            },
            [j, t, x]
          ),
          u
            ? Object(V.jsx)(ne, {})
            : l
            ? Object(V.jsx)(se, { variant: "danger", children: l })
            : Object(V.jsxs)("div", {
                children: [
                  Object(V.jsxs)("h1", { children: ["Order :", j._id] }),
                  Object(V.jsxs)(X.a, {
                    children: [
                      Object(V.jsx)(K.a, {
                        md: 8,
                        children: Object(V.jsxs)(xe.a, {
                          variant: "flush",
                          children: [
                            Object(V.jsxs)(xe.a.Item, {
                              children: [
                                Object(V.jsx)("h2", { children: "Shipping" }),
                                Object(V.jsxs)("p", {
                                  children: [
                                    Object(V.jsx)("strong", {
                                      children: "Name: ",
                                    }),
                                    " ",
                                    j.user.name,
                                  ],
                                }),
                                Object(V.jsxs)("p", {
                                  children: [
                                    Object(V.jsx)("strong", {
                                      children: "Email: ",
                                    }),
                                    " ",
                                    Object(V.jsxs)("a", {
                                      href: "mailto:".concat(j.user.email),
                                      children: [" ", j.user.email, " "],
                                    }),
                                  ],
                                }),
                                Object(V.jsxs)("p", {
                                  children: [
                                    Object(V.jsx)("strong", {
                                      children: "adress:",
                                    }),
                                    j.shippingAddress.address,
                                    ", ",
                                    j.shippingAddress.city,
                                    ",",
                                    " ",
                                    j.shippingAddress.postalcode,
                                    ",",
                                    " ",
                                    j.shippingAddress.country,
                                    ",",
                                  ],
                                }),
                                j.isDelivered
                                  ? Object(V.jsxs)(se, {
                                      variant: "success",
                                      children: [
                                        "Deilvered on ",
                                        j.deliveredAt,
                                        " ",
                                      ],
                                    })
                                  : Object(V.jsx)(se, {
                                      variant: "warning",
                                      children: "Not Deilvered ",
                                    }),
                              ],
                            }),
                            Object(V.jsxs)(xe.a.Item, {
                              children: [
                                Object(V.jsx)("h2", {
                                  children: "Payment Method",
                                }),
                                Object(V.jsxs)("p", {
                                  children: [
                                    Object(V.jsx)("strong", {
                                      children: "Method:",
                                    }),
                                    j.paymentMethod,
                                  ],
                                }),
                                j.isPaid
                                  ? Object(V.jsxs)(se, {
                                      variant: "success",
                                      children: ["Paid on ", j.paidAt, " "],
                                    })
                                  : Object(V.jsx)(se, {
                                      variant: "warning",
                                      children: "Not Paid ",
                                    }),
                              ],
                            }),
                            Object(V.jsxs)(xe.a.Item, {
                              children: [
                                Object(V.jsx)("h2", {
                                  children: "Order items",
                                }),
                                0 === j.orderItems.length
                                  ? Object(V.jsx)(se, {
                                      variant: "info",
                                      children: "Order is empty",
                                    })
                                  : Object(V.jsx)(xe.a, {
                                      variant: "flush",
                                      children: j.orderItems.map(function (
                                        e,
                                        t
                                      ) {
                                        return Object(V.jsx)(
                                          xe.a.Item,
                                          {
                                            children: Object(V.jsxs)(X.a, {
                                              children: [
                                                Object(V.jsx)(K.a, {
                                                  md: 1,
                                                  children: Object(V.jsx)(
                                                    Oe.a,
                                                    {
                                                      src: e.image,
                                                      alt: e.name,
                                                      fluid: !0,
                                                      rounded: !0,
                                                    }
                                                  ),
                                                }),
                                                Object(V.jsx)(K.a, {
                                                  children: Object(V.jsxs)(
                                                    i.Link,
                                                    {
                                                      to: "/product/".concat(
                                                        e.product
                                                      ),
                                                      children: [e.name, " "],
                                                    }
                                                  ),
                                                }),
                                                Object(V.jsxs)(K.a, {
                                                  md: 4,
                                                  children: [
                                                    e.qty,
                                                    " X $",
                                                    e.price,
                                                    "=$",
                                                    (e.qty * e.price).toFixed(
                                                      2
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          },
                                          t
                                        );
                                      }),
                                    }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(V.jsx)(K.a, {
                        md: 4,
                        children: Object(V.jsx)(ee.a, {
                          children: Object(V.jsxs)(xe.a, {
                            variant: "flush",
                            children: [
                              Object(V.jsx)(xe.a.Item, {
                                children: Object(V.jsx)("h2", {
                                  children: "Order Summery",
                                }),
                              }),
                              Object(V.jsx)(xe.a.Item, {
                                children: Object(V.jsxs)(X.a, {
                                  children: [
                                    Object(V.jsx)(K.a, { children: "Item:" }),
                                    Object(V.jsxs)(K.a, {
                                      children: ["$", j.itemsPrice],
                                    }),
                                  ],
                                }),
                              }),
                              Object(V.jsx)(xe.a.Item, {
                                children: Object(V.jsxs)(X.a, {
                                  children: [
                                    Object(V.jsx)(K.a, {
                                      children: "Shipping:",
                                    }),
                                    Object(V.jsxs)(K.a, {
                                      children: ["$", j.shippingPrice],
                                    }),
                                  ],
                                }),
                              }),
                              Object(V.jsx)(xe.a.Item, {
                                children: Object(V.jsxs)(X.a, {
                                  children: [
                                    Object(V.jsx)(K.a, { children: "Tax:" }),
                                    Object(V.jsxs)(K.a, {
                                      children: ["$", j.taxPrice],
                                    }),
                                  ],
                                }),
                              }),
                              Object(V.jsx)(xe.a.Item, {
                                children: Object(V.jsxs)(X.a, {
                                  children: [
                                    Object(V.jsx)(K.a, { children: "Total:" }),
                                    Object(V.jsxs)(K.a, {
                                      children: ["$", j.totalPrice],
                                    }),
                                  ],
                                }),
                              }),
                              !j.isPaid &&
                                Object(V.jsxs)(xe.a.Item, {
                                  children: [
                                    f && Object(V.jsx)(ne, {}),
                                    s
                                      ? Object(V.jsx)(Ue.PayPalButton, {
                                          amount: j.totalPrice,
                                          onSuccess: function (e) {
                                            r(
                                              (function (e, t) {
                                                return (function () {
                                                  var r = Object(O.a)(
                                                    b.a.mark(function r(a, n) {
                                                      var c, s, i, o, d, j;
                                                      return b.a.wrap(
                                                        function (r) {
                                                          for (;;)
                                                            switch (
                                                              (r.prev = r.next)
                                                            ) {
                                                              case 0:
                                                                return (
                                                                  (r.prev = 0),
                                                                  a({
                                                                    type: q,
                                                                  }),
                                                                  (c = n()),
                                                                  (s =
                                                                    c.userLogin
                                                                      .userInfo),
                                                                  (i =
                                                                    "/api/orders/".concat(
                                                                      e,
                                                                      "/pay/"
                                                                    )),
                                                                  (o = {
                                                                    headers: {
                                                                      "Content-type":
                                                                        "application/json",
                                                                      Authorization:
                                                                        "Bearer ".concat(
                                                                          s.token
                                                                        ),
                                                                    },
                                                                  }),
                                                                  (r.next = 7),
                                                                  m.a.put(
                                                                    i,
                                                                    t,
                                                                    o
                                                                  )
                                                                );
                                                              case 7:
                                                                (d = r.sent),
                                                                  (j = d.data),
                                                                  a({
                                                                    type: $,
                                                                    payload: j,
                                                                  }),
                                                                  (r.next = 15);
                                                                break;
                                                              case 12:
                                                                (r.prev = 12),
                                                                  (r.t0 =
                                                                    r.catch(0)),
                                                                  a({
                                                                    type: B,
                                                                    payload:
                                                                      r.t0
                                                                        .response &&
                                                                      r.t0
                                                                        .response
                                                                        .data
                                                                        .message
                                                                        ? r.t0
                                                                            .response
                                                                            .data
                                                                            .message
                                                                        : r.t0
                                                                            .message,
                                                                  });
                                                              case 15:
                                                              case "end":
                                                                return r.stop();
                                                            }
                                                        },
                                                        r,
                                                        null,
                                                        [[0, 12]]
                                                      );
                                                    })
                                                  );
                                                  return function (e, t) {
                                                    return r.apply(
                                                      this,
                                                      arguments
                                                    );
                                                  };
                                                })();
                                              })(t, e)
                                            );
                                          },
                                        })
                                      : Object(V.jsx)(ne, {}),
                                  ],
                                }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
        );
      };
      var Me = function () {
          return Object(V.jsxs)(i.HashRouter, {
            children: [
              Object(V.jsx)(W, {}),
              Object(V.jsx)("main", {
                className: "py-3",
                children: Object(V.jsxs)(s.a, {
                  children: [
                    Object(V.jsx)(o.d, { path: "/", component: pe, exact: !0 }),
                    Object(V.jsx)(o.d, { path: "/login", component: Pe }),
                    Object(V.jsx)(o.d, { path: "/register", component: Re }),
                    Object(V.jsx)(o.d, { path: "/profile", component: Ae }),
                    Object(V.jsx)(o.d, { path: "/product/:id", component: ge }),
                    Object(V.jsx)(o.d, { path: "/shipping", component: we }),
                    Object(V.jsx)(o.d, { path: "/payment", component: De }),
                    Object(V.jsx)(o.d, { path: "/placeorder", component: Ne }),
                    Object(V.jsx)(o.d, { path: "/order/:id", component: Ge }),
                    Object(V.jsx)(o.d, { path: "/cart/:id?", component: Le }),
                  ],
                }),
              }),
              Object(V.jsx)(Z, {}),
            ],
          });
        },
        Fe = function (e) {
          e &&
            e instanceof Function &&
            r
              .e(3)
              .then(r.bind(null, 130))
              .then(function (t) {
                var r = t.getCLS,
                  a = t.getFID,
                  n = t.getFCP,
                  c = t.getLCP,
                  s = t.getTTFB;
                r(e), a(e), n(e), c(e), s(e);
              });
        },
        qe = r(43),
        $e = r(75),
        Be = r(76),
        Je = r(2),
        Ye = Object(qe.combineReducers)({
          ProductList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { products: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ie:
                return { loading: !0, products: [] };
              case oe:
                return { loading: !1, products: t.payload };
              case de:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          ProductDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { product: { reviews: [] } },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case je:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 });
              case le:
                return { loading: !1, product: t.payload };
              case ue:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          cart: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { cartItems: [], shippingAddress: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ye:
                var r = t.payload,
                  a = e.cartItems.find(function (e) {
                    return e.product === t.payload.product;
                  });
                return a
                  ? Object(Je.a)(
                      Object(Je.a)({}, e),
                      {},
                      {
                        cartItems: e.cartItems.map(function (e) {
                          return e.product === a.product ? r : e;
                        }),
                      }
                    )
                  : Object(Je.a)(
                      Object(Je.a)({}, e),
                      {},
                      { cartItems: [].concat(Object(he.a)(e.cartItems), [r]) }
                    );
              case ve:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    cartItems: e.cartItems.filter(function (e) {
                      return e.product !== t.payload;
                    }),
                  }
                );
              case Ie:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { shippingAddress: t.payload }
                );
              case Se:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { paymentMethod: t.payload }
                );
              case Ee:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { cartItems: [] });
              default:
                return e;
            }
          },
          userLogin: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case f:
                return { loading: !0 };
              case g:
                return { loading: !1, userInfo: t.payload };
              case y:
                return { loading: !1, error: t.payload };
              case v:
                return {};
              default:
                return e;
            }
          },
          userRegister: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case I:
                return { loading: !0 };
              case S:
                return { loading: !1, userInfo: t.payload };
              case E:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case C:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 });
              case L:
                return { loading: !1, user: t.payload };
              case _:
                return { loading: !1, error: t.payload };
              case P:
                return { user: {} };
              default:
                return e;
            }
          },
          userUpdateProfile: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case R:
                return { loading: !0 };
              case k:
                return { loading: !1, success: !0, userInfo: t.payload };
              case A:
                return { loading: !1, error: t.payload };
              case T:
                return {};
              default:
                return e;
            }
          },
          orderCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case w:
                return { loading: !0 };
              case D:
                return { loading: !1, success: !0, order: t.payload };
              case N:
                return { loading: !1, error: t.payload };
              case U:
                return {};
              default:
                return e;
            }
          },
          orderDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !0, orderItems: [], shippingAddress: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case G:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 });
              case M:
                return { loading: !1, order: t.payload };
              case F:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          orderPay: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case q:
                return { loading: !0 };
              case $:
                return { loading: !1, success: !0 };
              case B:
                return { loading: !1, error: t.payload };
              case J:
                return {};
              default:
                return e;
            }
          },
          myOrderList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { orders: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Y:
                return { loading: !0 };
              case Q:
                return { loading: !1, orders: t.payload };
              case z:
                return { loading: !1, error: t.payload };
              case H:
                return { orders: [] };
              default:
                return e;
            }
          },
        }),
        Qe = localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
        ze = localStorage.getItem("userInfo")
          ? JSON.parse(localStorage.getItem("userInfo"))
          : null,
        He = {
          cart: {
            cartItems: Qe,
            shippingAddress: localStorage.getItem("shippingAddress")
              ? JSON.parse(localStorage.getItem("shippingAddress"))
              : {},
          },
          userLogin: { userInfo: ze },
        },
        Ve = [$e.a],
        We = Object(qe.createStore)(
          Ye,
          He,
          Object(Be.composeWithDevTools)(qe.applyMiddleware.apply(void 0, Ve))
        );
      c.a.render(
        Object(V.jsx)(p.a, { store: We, children: Object(V.jsx)(Me, {}) }),
        document.getElementById("root")
      ),
        Fe();
    },
    82: function (e, t, r) {},
    83: function (e, t, r) {},
  },
  [[113, 1, 2]],
]);
//# sourceMappingURL=main.6f55030f.chunk.js.map
