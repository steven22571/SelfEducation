(window.webpackJsonp = window.webpackJsonp || []).push([[10, 3], {
    597: function(e, t, r) {
        "use strict";
        r.r(t);
        var o = {
            name: "Captcha"
        }
          , n = r(26)
          , component = Object(n.a)(o, (function() {
            var e = this._self._c;
            return e("div", {
                staticClass: "form-group"
            }, [e("div", {
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
        t.default = component.exports
    },
    609: function(e, t, r) {
        var content = r(621);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
        (0,
        r(18).default)("16327eae", content, !0, {
            sourceMap: !1
        })
    },
    620: function(e, t, r) {
        "use strict";
        r(609)
    },
    621: function(e, t, r) {
        var o = r(17)((function(i) {
            return i[1]
        }
        ));
        o.push([e.i, ".disabled-button{background:grey}.disabled-button:hover{background:#6e6e6e}", ""]),
        o.locals = {},
        e.exports = o
    },
    633: function(e, t, r) {
        "use strict";
        r.r(t);
        r(76),
        r(59);
        var o = [function() {
            var e = this._self._c;
            return e("div", {
                staticClass: "login-logo"
            }, [e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("img", {
                attrs: {
                    src: r(221),
                    alt: "ИТ Иммунитет"
                }
            })])])
        }
        ]
          , n = (r(31),
        r(39),
        r(55),
        r(56),
        r(33),
        r(15),
        r(32),
        r(23))
          , l = r(57);
        function c(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, o)
            }
            return r
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(r), !0).forEach((function(t) {
                    Object(n.a)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        var m = {
            auth: !1,
            name: "Register",
            data: function() {
                return {
                    form: {
                        error: !1,
                        errors: []
                    },
                    captcha: {
                        image: "",
                        key: "",
                        text: ""
                    },
                    model: {
                        email: "",
                        login: "",
                        password: "",
                        agree: !1
                    }
                }
            },
            mounted: function() {
                this.getCaptchaImage()
            },
            methods: {
                getCaptchaImage: function() {
                    var e = document.createElement("script");
                    e.src = "https://captcha-api.yandex.ru/captcha.js",
                    document.getElementsByTagName("head")[0].appendChild(e)
                },
                getRegisterButtonClass: function() {
                    var e = "au-btn au-btn--block au-btn--green m-b-20";
                    return this.model.agree ? e : e + " disabled-button"
                },
                submit: function() {
                    var e = this
                      , t = document.querySelectorAll("[name=smart-token]")[0].value;
                    l.a.post("/api/auth/register", d(d({}, this.model), {}, {
                        captcha: t
                    })).then((function(t) {
                        e.$router.push({
                            path: "/login/"
                        })
                    }
                    )).catch((function(t) {
                        var r = t.response.data;
                        e.form.errors = r.errors,
                        e.form.error = !0
                    }
                    ))
                }
            }
        }
          , v = (r(620),
        r(26))
          , component = Object(v.a)(m, (function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "page-wrapper"
            }, [t("div", {
                staticClass: "page-content--bge5"
            }, [t("div", {
                staticClass: "container"
            }, [t("div", {
                staticClass: "login-wrap"
            }, [t("div", {
                staticClass: "login-content"
            }, [e._m(0), e._v(" "), t("div", {
                staticClass: "login-form"
            }, [t("form", {
                attrs: {
                    method: "post"
                }
            }, [t("div", {
                staticClass: "form-group"
            }, [t("label", [e._v("Имя пользователя")]), e._v(" "), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.model.login,
                    expression: "model.login"
                }],
                staticClass: "au-input au-input--full",
                attrs: {
                    type: "text",
                    placeholder: "Login"
                },
                domProps: {
                    value: e.model.login
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.model, "login", t.target.value)
                    }
                }
            }), e._v(" "), e.form.errors.login ? t("div", {
                staticClass: "alert alert-danger"
            }, [e._v("\n                  " + e._s(e.form.errors.login[0]) + "\n                ")]) : e._e()]), e._v(" "), t("div", {
                staticClass: "form-group"
            }, [t("label", [e._v("Адрес Email")]), e._v(" "), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.model.email,
                    expression: "model.email"
                }],
                staticClass: "au-input au-input--full",
                attrs: {
                    type: "text",
                    placeholder: "Email"
                },
                domProps: {
                    value: e.model.email
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.model, "email", t.target.value)
                    }
                }
            }), e._v(" "), e.form.errors.email ? t("div", {
                staticClass: "alert alert-danger"
            }, [e._v("\n                  " + e._s(e.form.errors.email[0]) + "\n                ")]) : e._e()]), e._v(" "), t("div", {
                staticClass: "form-group"
            }, [t("label", [e._v("Пароль")]), e._v(" "), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.model.password,
                    expression: "model.password"
                }],
                staticClass: "au-input au-input--full",
                attrs: {
                    type: "password",
                    placeholder: "Password"
                },
                domProps: {
                    value: e.model.password
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.model, "password", t.target.value)
                    }
                }
            }), e._v(" "), e.form.errors.password ? t("div", {
                staticClass: "alert alert-danger"
            }, [e._v("\n                  " + e._s(e.form.errors.password[0]) + "\n                ")]) : e._e()]), e._v(" "), t("Captcha"), e._v(" "), t("div", {
                staticClass: "login-checkbox"
            }, [t("label", [t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.model.agree,
                    expression: "model.agree"
                }],
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.model.agree) ? e._i(e.model.agree, null) > -1 : e.model.agree
                },
                on: {
                    change: function(t) {
                        var r = e.model.agree
                          , o = t.target
                          , n = !!o.checked;
                        if (Array.isArray(r)) {
                            var l = e._i(r, null);
                            o.checked ? l < 0 && e.$set(e.model, "agree", r.concat([null])) : l > -1 && e.$set(e.model, "agree", r.slice(0, l).concat(r.slice(l + 1)))
                        } else
                            e.$set(e.model, "agree", n)
                    }
                }
            }), e._v("Согласен с условия использования\n                ")])]), e._v(" "), t("button", {
                class: e.getRegisterButtonClass(),
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        return e.submit()
                    }
                }
            }, [e._v("Регистрация")])], 1), e._v(" "), t("div", {
                staticClass: "register-link"
            }, [t("p", [e._v("\n                У Вас есть доступ?\n                "), t("NuxtLink", {
                attrs: {
                    to: "/login/"
                }
            }, [e._v("Войти")])], 1)])])])])])])])
        }
        ), o, !1, null, null, null);
        t.default = component.exports;
        installComponents(component, {
            Captcha: r(597).default
        })
    }
}]);
