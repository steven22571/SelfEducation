(window.webpackJsonp = window.webpackJsonp || []).push([[19, 3], {
    597: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = {
            name: "Captcha"
        }
          , o = n(26)
          , component = Object(o.a)(r, (function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "form-group"
            }, [t("div", {
                staticClass: "smart-captcha",
                staticStyle: {
                    height: "100px"
                },
                attrs: {
                    id: "captcha-container",
                    "data-sitekey": this.$config.captcha.key
                }
            })])
        }
        ), [], !1, null, "67aba07e", null);
        e.default = component.exports
    },
    631: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = [function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "login-logo"
            }, [t("a", {
                attrs: {
                    href: "#"
                }
            }, [t("img", {
                attrs: {
                    src: n(221),
                    alt: "ИТ Иммунитет"
                }
            })])])
        }
        , function() {
            var t = this._self._c;
            return t("label", [t("input", {
                attrs: {
                    type: "checkbox",
                    name: "remember"
                }
            }), this._v("Запомнить в браузере\n                ")])
        }
        ]
          , o = (n(31),
        n(39),
        n(55),
        n(56),
        n(33),
        n(15),
        n(32),
        n(23))
          , c = n(8);
        n(40);
        function l(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function d(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(n), !0).forEach((function(e) {
                    Object(o.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var v = new BroadcastChannel("login")
          , m = {
            name: "IndexPage",
            auth: !1,
            data: function() {
                return {
                    error: "",
                    captcha: {
                        image: "",
                        key: "",
                        text: ""
                    },
                    login: {
                        login: "",
                        password: ""
                    }
                }
            },
            mounted: function() {
                this.getCaptchaImage()
            },
            methods: {
                getDefaultLink: function() {
                    return "/dashboard/status"
                },
                getCaptchaImage: function() {
                    var t = document.createElement("script");
                    t.src = "https://captcha-api.yandex.ru/captcha.js",
                    document.getElementsByTagName("head")[0].appendChild(t)
                },
                submit: function() {
                    var t = this;
                    return Object(c.a)(regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = document.querySelectorAll("[name=smart-token]")[0].value,
                                    e.next = 3,
                                    t.onLogin(d(d({}, t.login), {}, {
                                        captcha: n
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                onLogin: function(t) {
                    var e = this;
                    return Object(c.a)(regeneratorRuntime.mark((function n() {
                        var r, o, c, l;
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return r = t.login,
                                    o = t.password,
                                    c = t.key,
                                    l = t.captcha,
                                    n.next = 3,
                                    e.$auth.login({
                                        data: {
                                            login: r,
                                            password: o,
                                            key: c,
                                            captcha: l
                                        }
                                    }).then((function(t) {
                                        v.postMessage({
                                            data: {
                                                login: r,
                                                password: o
                                            }
                                        }),
                                        e.$router.push(e.getDefaultLink())
                                    }
                                    )).catch((function(t) {
                                        var n;
                                        return e.error = null == t || null === (n = t.response) || void 0 === n || null === (n = n.data) || void 0 === n ? void 0 : n.message,
                                        console.log(t),
                                        1
                                    }
                                    ));
                                case 3:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                }
            }
        }
          , f = m
          , h = n(26)
          , component = Object(h.a)(f, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "page-wrapper"
            }, [e("div", {
                staticClass: "page-content--bge5"
            }, [e("div", {
                staticClass: "container"
            }, [e("div", {
                staticClass: "login-wrap"
            }, [e("div", {
                staticClass: "login-content"
            }, [t._m(0), t._v(" "), e("div", {
                staticClass: "login-form"
            }, [e("form", {
                attrs: {
                    "accept-charset": "UTF-8"
                }
            }, [e("div", {
                staticClass: "form-group"
            }, [e("label", [t._v("Имя пользователя")]), t._v(" "), e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.login.login,
                    expression: "login.login"
                }],
                staticClass: "au-input au-input--full",
                attrs: {
                    type: "text",
                    placeholder: "Login",
                    name: "login"
                },
                domProps: {
                    value: t.login.login
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.login, "login", e.target.value)
                    }
                }
            })]), t._v(" "), e("div", {
                staticClass: "form-group"
            }, [e("label", [t._v("Пароль")]), t._v(" "), e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.login.password,
                    expression: "login.password"
                }],
                staticClass: "au-input au-input--full",
                attrs: {
                    placeholder: "Password",
                    required: "required",
                    type: "password",
                    name: "password"
                },
                domProps: {
                    value: t.login.password
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.login, "password", e.target.value)
                    }
                }
            })]), t._v(" "), e("Captcha"), t._v(" "), e("div", {
                staticClass: "login-checkbox"
            }, [t._m(1), t._v(" "), e("label", [e("NuxtLink", {
                attrs: {
                    to: "/auth/password-remind"
                }
            }, [t._v("Забыли пароль?")])], 1)]), t._v(" "), e("div", {
                staticClass: "alert-danger m-b-15"
            }, [t._v(t._s(t.error))]), t._v(" "), e("button", {
                staticClass: "au-btn au-btn--block au-btn--green m-b-20",
                attrs: {
                    type: "submit"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.submit()
                    }
                }
            }, [t._v("Войти")])], 1), t._v(" "), e("div", {
                staticClass: "register-link"
            }, [e("p", [t._v("\n                У Вас есть доступ?\n                "), e("NuxtLink", {
                attrs: {
                    to: "/register/"
                }
            }, [t._v("Регистрация пользователя")])], 1)])])])])])])])
        }
        ), r, !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Captcha: n(597).default
        })
    }
}]);
