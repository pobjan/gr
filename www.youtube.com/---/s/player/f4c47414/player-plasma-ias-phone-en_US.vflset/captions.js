(function(g) {
    var window = this;
    'use strict';
    var wC = function(n) {
        var m = {
            languageCode: n.languageCode,
            languageName: n.languageName,
            displayName: g.W2(n),
            kind: n.kind,
            name: n.name,
            id: n.id,
            is_servable: n.U,
            is_default: n.isDefault,
            is_translateable: n.isTranslateable,
            vss_id: n.vssId
        };
        n.xtags && (m.xtags = n.xtags);
        n.captionId && (m.captionId = n.captionId);
        n.translationLanguage && (m.translationLanguage = n.translationLanguage);
        return m
    }
      , qzI = function(n, m) {
        var M = new g.jC;
        M.languageCode = n.languageCode;
        M.languageName = n.languageName;
        M.name = n.name;
        M.displayName = n.displayName;
        M.kind = n.kind;
        M.isDefault = !1;
        M.U = n.U;
        M.isTranslateable = n.isTranslateable;
        M.vssId = n.vssId;
        M.url = n.url;
        M.translationLanguage = m;
        n.xtags && (M.xtags = n.xtags);
        n.captionId && (M.captionId = n.captionId);
        return M
    }
      , ye = function(n, m) {
        return m ? n.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN"
    }
      , TXt = function(n) {
        return g.wa(n) || n.V("web_enable_caption_language_preference_stickiness")
    }
      , G0_ = function(n, m) {
        var M, h, F;
        return g.pN(function(e) {
            if (e.j == 1)
                return M = n + "|" + m,
                e.U(g.jX(), 2);
            if (e.j != 3) {
                h = e.X;
                if (!h)
                    throw g.ZT("gct");
                return e.U(g.jt(h), 3)
            }
            F = e.X;
            return e.return(F.get("captions", M))
        })
    }
      , k0_ = function(n, m, M) {
        G0_(n, m).then(function(h) {
            h && M(h.trackData, new g.jC(h.metadata))
        })
    }
      , JSZ = function(n) {
        var m = m || 0;
        return function() {
            return n.apply(this, Array.prototype.slice.call(arguments, 0, m))
        }
    }
      , Na = function(n, m, M) {
        g.S.call(this);
        this.U = null;
        this.W = !1;
        this.K = n;
        this.B = M;
        this.j = m || window;
        this.X = (0,
        g.bK)(this.E7, this)
    }
      , Y4 = function(n) {
        n.isActive() || n.start()
    }
      , UMN = function(n) {
        n = n.j;
        return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame || null
    }
      , cSm = function(n) {
        n = n.j;
        return n.cancelAnimationFrame || n.cancelRequestAnimationFrame || n.webkitCancelRequestAnimationFrame || n.mozCancelRequestAnimationFrame || n.oCancelRequestAnimationFrame || n.msCancelRequestAnimationFrame || null
    }
      , Qe = function(n) {
        if (!sVA.test(n))
            throw Error("'" + n + "' is not a valid hex color");
        n.length == 4 && (n = n.replace(uU7, "#$1$1$2$2$3$3"));
        n = n.toLowerCase();
        n = parseInt(n.slice(1), 16);
        return [n >> 16, n >> 8 & 255, n & 255]
    }
      , n$t = function() {
        var n = void 0;
        n = n === void 0 ? {} : n;
        var m = "suggest_correction"in g.Jt ? g.Jt.suggest_correction : "Edit caption";
        m = m || "";
        var M = {}, h;
        for (h in n) {
            M = {
                Db: M.Db
            };
            M.Db = h;
            var F = function(e) {
                return function() {
                    return String(n[e.Db])
                }
            }(M);
            m = m.replace(new RegExp("\\$\\{" + M.Db + "\\}","gi"), F);
            m = m.replace(new RegExp("\\$" + M.Db,"gi"), F)
        }
        return m
    }
      , Zg = function() {
        return g.Kb("yt-player-caption-display-settings")
    }
      , XK = function() {
        this.X = [];
        this.j = []
    }
      , Lv = function(n, m) {
        switch (m.kind) {
        case "asr":
            mKt(m, n.X);
            break;
        default:
            mKt(m, n.j)
        }
    }
      , mKt = function(n, m) {
        g.yx(m, function(M) {
            return n.equals(M)
        }) || m.push(n)
    }
      , gC = function(n) {
        g.S.call(this);
        this.Vi = n;
        this.U = new XK;
        this.Y = new XK;
        this.X = null;
        this.B = [];
        this.D = []
    }
      , IW = function(n) {
        gC.call(this, n);
        this.j = new Set
    }
      , $4 = function(n, m, M) {
        gC.call(this, n);
        this.videoData = m;
        this.audioTrack = M;
        this.j = null;
        this.W = !1;
        this.B = m.Bv;
        this.D = m.G2;
        this.W = g.ym(m)
    }
      , Mqt = function(n, m, M) {
        g.pN(function(h) {
            n.j = g.BK(m, M);
            h.K()
        })
    }
      , j4 = function() {
        this.segments = []
    }
      , h0A = function(n, m) {
        var M = g.d1(n.segments, m);
        M >= 0 || M < 0 && (-M - 1) % 2 === 1 || (M = -M - 1,
        M > 0 && m - n.segments[M - 1] === 1 && M < n.segments.length && n.segments[M] - m === 1 ? (g.Lh(n.segments, M),
        g.Lh(n.segments, M - 1)) : M > 0 && m - n.segments[M - 1] === 1 ? n.segments[M - 1] = m : M < n.segments.length && n.segments[M] - m === 1 ? n.segments[M] = m : (g.Ch(n.segments, M, 0, m),
        g.Ch(n.segments, M + 1, 0, m)))
    }
      , RW = function(n, m, M, h, F, e) {
        g.S.call(this);
        this.policy = n;
        this.player = m;
        this.iq = M;
        this.D = h;
        this.B = F;
        this.Y = e;
        this.W = new j4;
        this.K = -1;
        this.j = this.X = this.U = null;
        this.Z = 0;
        this.N = new g.V0(this.fW,1E3,this);
        this.events = new g.Mm(this);
        g.t(this, this.N);
        g.t(this, this.events);
        this.events.uq(m, "SEEK_COMPLETE", this.iX);
        this.iX();
        this.fW()
    }
      , F5U = function(n) {
        return n.U && n.U.B ? n.U.B + n.player.KY() < n.player.getCurrentTime() : !1
    }
      , itL = function(n, m) {
        if (n.policy.QA && n.player.LM()) {
            var M = g.Bf(m, n.policy, {});
            M.set("pot", n.player.LM());
            M = M.ET()
        } else
            M = g.Bf(m, n.policy, {}).ET();
        var h = {
            format: "RAW",
            withCredentials: !0
        };
        if (n.policy.Iz) {
            h.method = "POST";
            var F = m.W;
            F && Object.keys(F).length > 0 ? h.postBody = g.m8(F, g.A8) : h.postBody = (0,
            g.Ti)([120, 0])
        }
        n.B && (h.responseType = "arraybuffer");
        var e = ++n.Z
          , P = (0,
        g.v)();
        n.j = g.QM(M, h, 3, 100, -1, function(H) {
            H.errorCode === "net.timeout" && n.player.S("capnt", {
                rn: e++
            })
        }).then(function(H) {
            if (n.policy.w$ && e % 100 === 1) {
                var z = (0,
                g.v)();
                n.player.S("caprsp", {
                    rn: e,
                    ms: z - P,
                    kb: (H.xhr.responseText.length / 1024).toFixed()
                })
            }
            a: {
                H = H.xhr;
                n.Ew();
                if (n.X) {
                    var A = !(n.B ? H.response : H.responseText) || H.status >= 400;
                    if (z = g.Utt(H)) {
                        H = g.Bf(n.X, n.policy, {});
                        n.X.fT(H, z);
                        itL(n, n.X);
                        break a
                    }
                    if (A)
                        n.player.S("capfail", {
                            status: H.status
                        });
                    else {
                        var b;
                        g.ie("fcb_r", (0,
                        g.v)(), ((b = n.player.getVideoData()) == null ? void 0 : b.D) || "");
                        b = n.X.Rz[0];
                        z = b.lq;
                        n.D != null && n.K !== z && (n.B ? n.D(H.response, (b.startTime + n.player.KY()) * 1E3) : n.D(H.responseText, (b.startTime + n.player.KY()) * 1E3),
                        n.K = z)
                    }
                }
                n.X = null;
                n.j = null
            }
        }).Ia(function(H) {
            n.X = null;
            n.j = null;
            var z;
            n.player.S("capfail", {
                rn: e,
                status: (z = H.xhr) == null ? void 0 : z.status
            })
        });
        n.X = m;
        h0A(n.W, n.X.Rz[0].lq)
    }
      , Ws = function(n, m) {
        gC.call(this, m);
        this.j = n;
        this.k6 = m;
        this.W = null;
        this.K = !1;
        this.logger = new g.LC("caps");
        this.N = g.jz(this.k6, this.j)
    }
      , PqI = function(n, m) {
        var M = [], h;
        for (h in n.j.U)
            if (n.j.U.hasOwnProperty(h)) {
                var F = n.j.U[h];
                if (g.Ry(F, m || null)) {
                    var e = F.info.id
                      , P = e
                      , H = "." + e
                      , z = ""
                      , A = "";
                    if (F = F.info.captionTrack)
                        e = F.languageCode,
                        P = F.displayName,
                        H = F.vssId,
                        z = F.kind,
                        A = F.id;
                    else {
                        F = e;
                        var b = g.U27.get(F);
                        b == null && (b = e0B[F] || e0B[F.replace(/-/g, "_")],
                        g.U27.set(F, b));
                        F = b;
                        P = F || P
                    }
                    M.push(new g.jC({
                        id: h,
                        languageCode: e,
                        languageName: P,
                        is_servable: !0,
                        is_default: !0,
                        is_translateable: !1,
                        vss_id: H,
                        kind: z,
                        captionId: A
                    }))
                }
            }
        return M
    }
      , E$t = function(n, m) {
        return m != null && m in n.j.U ? n.j.U[m] : null
    }
      , Ht3 = function(n, m, M) {
        var h = [], F;
        for (F in n.j.U)
            if (n.j.U.hasOwnProperty(F)) {
                var e = n.j.U[F];
                if (g.Ry(e, M || null)) {
                    var P = e.info.captionTrack;
                    P && P.languageCode === m && h.push(e)
                }
            }
        return h.length ? h[0] : null
    }
      , Cv = function(n, m, M, h, F, e) {
        gC.call(this, n);
        this.videoId = M;
        this.K = F;
        this.eventId = e;
        this.N = {};
        this.j = null;
        n = h || g.lD(m).hl || "";
        n = n.split("_").join("-");
        this.W = g.T3(m, {
            hl: n
        })
    }
      , Kv = function(n) {
        if (typeof DOMParser != "undefined")
            return g.lZ(new DOMParser, g.Px(n), "application/xml");
        throw Error("Your browser does not support loading xml documents");
    }
      , rC = function(n, m, M, h, F, e, P, H, z, A) {
        var b = A.isInline() && !0
          , B = {};
        Object.assign(B, m);
        Object.assign(B, n.params);
        Object.assign(B, M);
        var V = {};
        Object.assign(V, m.DM);
        n.params.DM && Object.assign(V, n.params.DM);
        Object.assign(V, M.DM);
        b && (B.windowOpacity = .6,
        V.backgroundOpacity = 0);
        B.DM = V;
        var a = B.Kq === 1, x = [{
            L: "span",
            PT: "captions-text",
            vT: {
                style: "word-wrap: normal; display: block;"
            }
        }], Y, R, N, C = H.dW("caption_edit_on_hover") && ((Y = A.getVideoData().getPlayerResponse()) == null ? void 0 : (R = Y.captions) == null ? void 0 : (N = R.playerCaptionsTracklistRenderer) == null ? void 0 : N.openTranscriptCommand);
        C && x.unshift({
            L: "button",
            PT: "caption-edit",
            vT: {
                tabindex: "0",
                "aria-label": n$t()
            },
            KP: [{
                L: "svg",
                vT: {
                    fill: "#e3e3e3",
                    height: "100%",
                    viewBox: "5 5 38 38",
                    width: "100%"
                },
                KP: [{
                    L: "path",
                    vT: {
                        d: "M9 39h2.2l24.25-24.25-1.1-1.1-1.1-1.1L9 36.8Zm-3 3v-6.4L35.4 6.2q.85-.85 2.12-.82 1.27.02 2.12.87L41.8 8.4q.85.85.85 2.1t-.85 2.1L12.4 42Zm33.5-31.55L37.45 8.4Zm-4.05 4.3-1.1-1.1-1.1-1.1 2.2 2.2Z"
                    }
                }]
            }]
        });
        g.za.call(this, {
            L: "div",
            PT: "caption-window",
            vT: {
                id: "caption-window-" + n.id,
                dir: a ? "rtl" : "ltr",
                tabindex: "0",
                lang: B.lang
            },
            KP: x
        });
        var D = this;
        this.N = [];
        this.nP = !1;
        this.j = n;
        this.oz = this.Iz = null;
        this.q2 = e;
        this.j6 = P;
        this.D = null;
        this.maxWidth = e * .96;
        this.maxHeight = P * .96;
        this.U = B;
        this.o$ = M;
        this.Uw = m;
        this.W = this.CP("captions-text");
        this.GX = this.W.style.getPropertyValue("box-decoration-break") !== "" || this.W.style.getPropertyValue("-webkit-box-decoration-break") !== "";
        this.D9 = z07(h, F, e, P);
        this.xc = z;
        C && (this.K = this.CP("caption-edit"),
        this.uq(this.K, "click", function() {
            D.xc()
        }));
        this.type = 0;
        this.zv = this.D9 * o$3(V);
        this.JF = b;
        this.SU = H.dW("enable_centered_caption_for_tvfilm_video") && A.getVideoData().isTvfilmVideo;
        this.Y = A.G().gW().U.x6(g.UbX);
        n = new g.nO(this.element,!0);
        g.t(this, n);
        n.subscribe("dragstart", this.kW, this);
        n.subscribe("dragmove", this.rI, this);
        n.subscribe("dragend", this.ij, this);
        this.Xq = this.Z9 = this.b0 = this.QX = 0;
        n = "";
        this.U.windowOpacity && (n = Qe(this.U.windowColor),
        n = "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + this.U.windowOpacity + ")");
        m = {
            "background-color": n,
            display: this.U.isVisible === !1 ? "none" : "",
            "text-align": Aw3[this.U.textAlign]
        };
        this.GX && (m["border-radius"] = n ? this.zv / 8 + "px" : "");
        (this.B = this.j.params.Kq === 2 || this.j.params.Kq === 3) && btX(this, this.element);
        g.jm(this.element, m);
        if (b) {
            var O;
            (O = this.element.parentElement) == null || O.style.setProperty("--caption-window-color", n)
        }
        switch (this.U.OF) {
        case 0:
        case 1:
        case 2:
            g.LX(this.element, "ytp-caption-window-top");
            break;
        case 6:
        case 7:
        case 8:
            g.LX(this.element, "ytp-caption-window-bottom")
        }
    }
      , btX = function(n, m) {
        var M = "vertical-rl";
        n.U.lJ === 1 && (M = "vertical-lr");
        g.Hd && (M = M === "vertical-lr" ? "tb-lr" : "tb-rl");
        g.jm(m, "-o-writing-mode", M);
        g.jm(m, "-webkit-writing-mode", M);
        g.jm(m, "writing-mode", M);
        g.jm(m, "text-orientation", "upright");
        g.LX(m, "ytp-vertical-caption");
        n.j.params.Kq === 3 && (g.jm(m, "text-orientation", ""),
        g.jm(m, "transform", "rotate(180deg)"))
    }
      , o$3 = function(n) {
        var m = 1 + .25 * (n.fontSizeIncrement || 0);
        if (n.offset === 0 || n.offset === 2)
            m *= .8;
        return m
    }
      , BGt = function(n, m) {
        var M = {}
          , h = m.background ? m.background : n.U.DM.background;
        if (m.backgroundOpacity != null || m.background) {
            var F = m.backgroundOpacity != null ? m.backgroundOpacity : n.U.DM.backgroundOpacity;
            h = Qe(h);
            M.background = "rgba(" + h[0] + "," + h[1] + "," + h[2] + "," + F + ")";
            n.GX && (M["box-decoration-break"] = "clone",
            M["border-radius"] = n.zv / 8 + "px")
        }
        if (m.fontSizeIncrement != null || m.offset != null)
            M["font-size"] = n.D9 * o$3(m) + "px";
        h = 1;
        F = m.color || n.U.DM.color;
        if (m.color || m.textOpacity != null)
            F = Qe(F),
            h = m.textOpacity == null ? n.U.DM.textOpacity : m.textOpacity,
            F = "rgba(" + F[0] + "," + F[1] + "," + F[2] + "," + h + ")",
            M.color = F,
            M.fill = F;
        var e = m.charEdgeStyle;
        e === 0 && (e = void 0);
        if (e) {
            F = "rgba(34, 34, 34, " + h + ")";
            var P = "rgba(204, 204, 204, " + h + ")";
            m.Yf && (P = F = m.Yf);
            var H = n.D9 / 16 / 2
              , z = Math.max(H, 1)
              , A = Math.max(2 * H, 1)
              , b = Math.max(3 * H, 1)
              , B = Math.max(5 * H, 1);
            h = [];
            switch (e) {
            case 4:
                for (; b <= B; b += H)
                    h.push(A + "px " + A + "px " + b + "px " + F);
                break;
            case 1:
                A = window.devicePixelRatio >= 2 ? .5 : 1;
                for (e = z; e <= b; e += A)
                    h.push(e + "px " + e + "px " + F);
                break;
            case 2:
                h.push(z + "px " + z + "px " + P);
                h.push("-" + z + "px -" + z + "px " + F);
                break;
            case 3:
                for (b = 0; b < 5; b++)
                    h.push("0 0 " + A + "px " + F)
            }
            M["text-shadow"] = h.join(", ")
        }
        F = "";
        switch (m.fontFamily) {
        case 1:
            F = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
            break;
        case 2:
            F = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
            break;
        case 3:
            F = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
            break;
        case 5:
            F = '"Comic Sans MS", Impact, Handlee, fantasy';
            break;
        case 6:
            F = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
            break;
        case 7:
            F = g.tR() ? '"Carrois Gothic SC", sans-serif-smallcaps' : 'Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
            break;
        case 0:
        case 4:
            F = '"YouTube Noto", Roboto, Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif'
        }
        F && (M["font-family"] = F);
        F = m.offset;
        F == null && (F = n.U.DM.offset);
        switch (F) {
        case 0:
            M["vertical-align"] = "sub";
            break;
        case 2:
            M["vertical-align"] = "super"
        }
        m.fontFamily === 7 && (M["font-variant"] = "small-caps");
        m.bold && (M["font-weight"] = "bold");
        m.italic && (M["font-style"] = "italic");
        m.underline && (M["text-decoration"] = "underline");
        m.nZ && (M.visibility = "hidden");
        m.Pc === 1 && n.B && (M["text-combine-upright"] = "all",
        M["text-orientation"] = "mixed",
        F = g.If || g.YB,
        n.j.params.Kq === 3 ? M.transform = F ? "rotate(90deg)" : "rotate(180deg)" : F && (M.transform = "rotate(-90deg)"));
        if (m.textEmphasis === 1 || m.textEmphasis === 2 || m.textEmphasis === 3 || m.textEmphasis === 4 || m.textEmphasis === 5)
            if (g.If)
                M["font-weight"] = "bold";
            else
                switch (M["text-emphasis-style"] = "filled circle",
                M["text-emphasis-color"] = "currentcolor",
                M["webkit-text-emphasis"] = "filled circle",
                m.textEmphasis) {
                case 4:
                case 3:
                    M["text-emphasis-position"] = "under left";
                    M["webkit-text-emphasis-position"] = "under left";
                    break;
                case 5:
                case 2:
                    M["text-emphasis-position"] = "over right",
                    M["webkit-text-emphasis-position"] = "over right"
                }
        return M
    }
      , dC = function(n) {
        n = n.split("px");
        return n.length > 0 ? (n = Number(n[0])) ? n : 0 : 0
    }
      , aC_ = function(n) {
        n.D = g.s5("SPAN");
        g.jm(n.D, {
            display: "block"
        });
        g.LX(n.D, "caption-visual-line");
        n.W.appendChild(n.D)
    }
      , Vqt = function(n, m) {
        var M = g.s5("SPAN");
        g.jm(M, {
            display: "inline-block",
            "white-space": "pre-wrap"
        });
        g.jm(M, BGt(n, m));
        M.classList.add("ytp-caption-segment");
        n.D.appendChild(M);
        M.previousElementSibling && (g.jm(M.previousElementSibling, {
            "border-top-right-radius": "0",
            "border-bottom-right-radius": "0"
        }),
        g.jm(M, {
            "border-top-left-radius": "0",
            "border-bottom-left-radius": "0"
        }));
        return M
    }
      , xKS = function(n, m, M) {
        n.nP = n.nP || !!M;
        var h = {};
        Object.assign(h, n.U.DM);
        Object.assign(h, M || m.U);
        Object.assign(h, n.o$.DM);
        (M = !n.D) && aC_(n);
        for (var F = n.Iz && n.oz && g.t9(h, n.oz) ? n.Iz : Vqt(n, h), e = typeof m.text === "string", P = e ? m.text.split("\n") : [m.text], H = 0; H < P.length; H++) {
            var z = H > 0 || !m.append
              , A = P[H];
            z && !M ? (aC_(n),
            F = Vqt(n, h)) : z && M && (M = !1);
            A && (F.appendChild(e ? g.u8(A) : A),
            e || A.tagName !== "RUBY" || A.childElementCount !== 4 || g.If || !g.rT(A.children[2], "text-emphasis") || (z = n.B ? "padding-right" : "padding-top",
            g.rT(A.children[2], "text-emphasis-position") && (z = n.B ? "padding-left" : "padding-bottom"),
            g.CF ? g.jm(F, z, "1em") : g.jm(F, z, "0.5em")))
        }
        n.oz = h;
        n.Iz = F;
        n.N.push(m)
    }
      , z07 = function(n, m, M, h) {
        var F = m / 360 * 16;
        m >= n && (n = 640,
        h > M * 1.3 && (n = 480),
        F = M / n * 16);
        return F
    }
      , S4 = function() {
        this.X = this.time = this.mode = this.j = 0;
        this.W = new Dg(this);
        this.B = new Dg(this);
        this.U = [];
        this.clear()
    }
      , ywX = function(n, m, M) {
        if (n === 255 && m === 255 || !n && !m)
            return {
                xG: n,
                Jg: m,
                result: 0
            };
        n = wS3[n];
        m = wS3[m];
        if (n & 128) {
            var h;
            if (h = !(m & 128))
                h = m,
                h = M.Ep() && M.Jg === h;
            if (h)
                return {
                    xG: n,
                    Jg: m,
                    result: 1
                }
        } else if (m & 128 && 1 <= n && n <= 31)
            return {
                xG: n,
                Jg: m,
                result: 2
            };
        return {
            xG: n,
            Jg: m,
            result: 3
        }
    }
      , YtZ = function(n, m, M, h) {
        m === 255 && M === 255 || !m && !M ? (++n.X === 45 && n.reset(),
        n.W.j.clear(),
        n.B.j.clear()) : (n.X = 0,
        NGN(n.W, m, M, h))
    }
      , Q$m = function(n, m) {
        n.U.sort(function(F, e) {
            var P = F.time - e.time;
            return P === 0 ? F.order - e.order : P
        });
        for (var M = g.W(n.U), h = M.next(); !h.done; h = M.next())
            h = h.value,
            n.time = h.time,
            h.type === 0 ? YtZ(n, h.au, h.lf, m) : h.type === 1 && n.j & 496 && NGN(n.B, h.au, h.lf, m);
        n.U.length = 0
    }
      , tx = function() {
        this.type = 0
    }
      , Oc = function() {
        this.state = this.Jg = this.xG = 0
    }
      , ZtA = function() {
        this.timestamp = this.U = 0
    }
      , pv = function(n) {
        this.B = n;
        this.X = [];
        this.U = this.j = this.row = 0;
        this.style = new tx;
        for (n = this.W = 0; n <= 15; n++) {
            this.X[n] = [];
            for (var m = 0; m <= 32; m++)
                this.X[n][m] = new ZtA
        }
    }
      , fv = function(n, m) {
        if (n.style.type === 3) {
            for (var M = 0, h = 0, F = n.B.time + 0, e = "", P = "", H = F, z = 1; z <= 15; ++z) {
                for (var A = !1, b = h ? h : 1; b <= 32; ++b) {
                    var B = n.X[z][b];
                    if (B.U !== 0) {
                        M === 0 && (M = z,
                        h = b);
                        A = String.fromCharCode(B.U);
                        var V = B.timestamp;
                        V < F && (F = V);
                        B.timestamp = H;
                        P && (e += P,
                        P = "");
                        e += A;
                        A = !0
                    }
                    if ((B.U === 0 || b === 32) && A) {
                        P = "\n";
                        break
                    } else if (h && !A)
                        break
                }
                if (M && !A)
                    break
            }
            e && m.W(M, h, F, H, e)
        } else
            for (h = M = 0,
            e = F = n.B.time + 0,
            P = 1; P <= 15; ++P)
                for (H = "",
                z = 1; z <= 32; ++z)
                    if (b = n.X[P][z],
                    B = b.U,
                    B !== 0 && (M === 0 && (M = P,
                    h = z),
                    A = String.fromCharCode(B),
                    V = b.timestamp,
                    V <= F && (F = V),
                    H += A,
                    b.reset()),
                    z === 32 || B === 0)
                        H && m.W(M, h, F, e, H),
                        F = e,
                        H = "",
                        h = M = 0
    }
      , $Km = function(n, m) {
        switch (n) {
        case 0:
            return XSI[(m & 127) - 32];
        case 1:
            return L5X[m & 15];
        case 2:
            return g$X[m & 31];
        case 3:
            return ICI[m & 31]
        }
        return 0
    }
      , vs = function(n) {
        return n.X[n.row][n.j]
    }
      , l9 = function(n, m, M) {
        m >= 2 && n.j > 1 && (--n.j,
        vs(n).U = 0);
        var h = vs(n);
        h.timestamp = n.B.time + 0;
        h.U = $Km(m, M);
        n.j < 32 && n.j++
    }
      , j$L = function(n, m, M, h) {
        for (var F = 0; F < h; F++)
            for (var e = 0; e <= 32; e++) {
                var P = n.X[m + F][e]
                  , H = n.X[M + F][e];
                P.U = H.U;
                P.timestamp = H.timestamp
            }
    }
      , qa = function(n, m, M) {
        for (var h = 0; h < M; h++)
            for (var F = 0; F <= 32; F++)
                n.X[m + h][F].reset()
    }
      , TQ = function(n) {
        n.row = n.U > 0 ? n.U : 1;
        n.j = 1;
        qa(n, 0, 15)
    }
      , GQ = function(n) {
        this.X = n;
        this.B = 0;
        this.style = new tx;
        this.K = new pv(this.X);
        this.N = new pv(this.X);
        this.text = new pv(this.X);
        this.j = this.K;
        this.W = this.N;
        this.U = this.j
    }
      , k4 = function(n, m, M) {
        var h = n.j
          , F = !1;
        switch (n.style.get()) {
        case 4:
        case 1:
        case 2:
            n.style.get() === 4 && h.U > 0 || (fv(h, M),
            TQ(n.j),
            TQ(n.W),
            h.row = 15,
            h.U = m,
            F = !0)
        }
        n.style.set(3);
        n.U = h;
        n.U.style = n.style;
        n.X.mode = 1 << h.W;
        F ? h.j = 1 : h.U !== m && (h.U > m ? (fv(h, M),
        qa(h, h.row - h.U, m)) : h.row < m && (m = h.U),
        h.U = m)
    }
      , R07 = function(n) {
        n.style.set(1);
        n.U = n.W;
        n.U.U = 0;
        n.U.style = n.style;
        n.X.mode = 1 << n.U.W
    }
      , W5S = function(n) {
        n.style.set(4);
        n.U = n.text;
        n.U.style = n.style;
        n.X.mode = 1 << n.U.W
    }
      , Dg = function(n) {
        this.U = n;
        this.B = 0;
        this.X = new GQ(this.U);
        this.K = new GQ(this.U);
        this.j = new Oc;
        this.W = this.X
    }
      , NGN = function(n, m, M, h) {
        n.j.update();
        m = ywX(m, M, n.j);
        switch (m.result) {
        case 0:
            return;
        case 1:
        case 2:
            return
        }
        var F = m.xG;
        M = m.Jg;
        if (32 <= F || !F)
            n.U.mode & n.U.j && (m = F,
            m & 128 && (m = 127),
            M & 128 && (M = 127),
            n = n.W.U,
            m & 96 && l9(n, 0, m),
            M & 96 && l9(n, 0, M),
            m !== 0 && M !== 0 && n.style.type === 3 && fv(n, h));
        else if (F & 16)
            a: if (!n.j.matches(F, M) && (m = n.j,
            m.xG = F,
            m.Jg = M,
            m.state = 2,
            m = F & 8 ? n.K : n.X,
            n.W = m,
            n.U.mode = 1 << (n.B << 2) + (m.B << 1) + (m.style.type === 4 ? 1 : 0),
            (n.U.mode | 1 << (n.B << 2) + (m.B << 1) + (m.style.type !== 4 ? 1 : 0)) & n.U.j))
                if (M & 64) {
                    h = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(F & 7) << 1 | M >> 5 & 1];
                    n = M & 16 ? ((M & 14) >> 1) * 4 : 0;
                    M = m.U;
                    switch (m.style.get()) {
                    case 4:
                        h = M.row;
                        break;
                    case 3:
                        if (h !== M.row) {
                            if (h < M.U && (h = M.U,
                            h === M.row))
                                break;
                            var e = 1 + M.row - M.U
                              , P = 1 + h - M.U;
                            j$L(M, P, e, M.U);
                            m = e;
                            F = M.U;
                            P < e ? (e = P + F - e,
                            e > 0 && (m += e,
                            F -= e)) : (e = e + F - P,
                            e > 0 && (F -= e));
                            qa(M, m, F)
                        }
                    }
                    M.row = h;
                    M.j = n + 1
                } else
                    switch (F & 7) {
                    case 1:
                        switch (M & 112) {
                        case 32:
                            l9(m.U, 0, 32);
                            break a;
                        case 48:
                            M === 57 ? (h = m.U,
                            vs(h).U = 0,
                            h.j < 32 && h.j++) : l9(m.U, 1, M & 15)
                        }
                        break;
                    case 2:
                        M & 32 && l9(m.U, 2, M & 31);
                        break;
                    case 3:
                        M & 32 && l9(m.U, 3, M & 31);
                        break;
                    case 4:
                    case 5:
                        if (32 <= M && M <= 47)
                            switch (M) {
                            case 32:
                                R07(m);
                                break;
                            case 33:
                                h = m.U;
                                h.j > 1 && (--h.j,
                                vs(h).U = 0);
                                break;
                            case 36:
                                h = m.U;
                                m = vs(h);
                                for (n = 0; n <= 15; n++)
                                    for (M = 0; M <= 32; M++)
                                        if (h.X[n][M] === m) {
                                            for (; M <= 32; M++)
                                                h.X[n][M].reset();
                                            break
                                        }
                                break;
                            case 37:
                                k4(m, 2, h);
                                break;
                            case 38:
                                k4(m, 3, h);
                                break;
                            case 39:
                                k4(m, 4, h);
                                break;
                            case 40:
                                l9(m.U, 0, 32);
                                break;
                            case 41:
                                m.style.set(2);
                                m.U = m.j;
                                m.U.U = 0;
                                m.U.style = m.style;
                                m.X.mode = 1 << m.U.W;
                                break;
                            case 42:
                                h = m.text;
                                h.U = 15;
                                h.style.set(4);
                                TQ(h);
                                W5S(m);
                                break;
                            case 43:
                                W5S(m);
                                break;
                            case 44:
                                n = m.j;
                                switch (m.style.get()) {
                                case 1:
                                case 2:
                                case 3:
                                    fv(n, h)
                                }
                                qa(n, 0, 15);
                                break;
                            case 45:
                                b: {
                                    n = m.U;
                                    switch (m.style.get()) {
                                    default:
                                    case 2:
                                    case 1:
                                        break b;
                                    case 4:
                                        if (n.row < 15) {
                                            ++n.row;
                                            n.j = 1;
                                            break b
                                        }
                                        break;
                                    case 3:
                                    }
                                    n.U < 2 && (n.U = 2,
                                    n.row < n.U && (n.row = n.U));
                                    m = n.row - n.U + 1;
                                    fv(n, h);
                                    j$L(n, m, m + 1, n.U - 1);
                                    qa(n, n.row, 1)
                                }
                                break;
                            case 46:
                                qa(m.W, 0, 15);
                                break;
                            case 47:
                                fv(m.j, h),
                                m.W.updateTime(m.X.time + 0),
                                h = m.W,
                                m.W = m.j,
                                m.j = h,
                                R07(m)
                            }
                        break;
                    case 7:
                        switch (M) {
                        case 33:
                        case 34:
                        case 35:
                            h = m.U,
                            (h.j += M & 3) > 32 && (h.j = 32)
                        }
                    }
    }
      , CqI = function() {}
      , Jx = function(n, m, M, h, F, e, P) {
        e = e === void 0 ? !1 : e;
        P = P === void 0 ? null : P;
        g.Q$.call(this, n, n + m, {
            priority: M,
            namespace: "captions"
        });
        this.windowId = h;
        this.text = F;
        this.append = e;
        this.U = P
    }
      , rwB = function(n, m, M, h, F, e, P) {
        var H = e[0]
          , z = P[H.getAttribute("p")];
        if (z.o9 === 1) {
            var A = e[1]
              , b = e[2];
            e = e[3];
            H.getAttribute("t");
            A.getAttribute("t");
            b.getAttribute("t");
            e.getAttribute("t");
            H.getAttribute("p");
            A.getAttribute("p");
            e.getAttribute("p");
            P = P[b.getAttribute("p")];
            H = K53(H.textContent, A.textContent, b.textContent, e.textContent, P);
            return new Jx(n,m,F,M,H,h,z)
        }
        switch (z.o9) {
        case 9:
        case 10:
            z.textEmphasis = 1;
            break;
        case 11:
            z.textEmphasis = 2;
            break;
        case 12:
            z.textEmphasis = 3;
            break;
        case 13:
            z.textEmphasis = 4;
            break;
        case 14:
            z.textEmphasis = 5
        }
        return new Jx(n,m,F,M,H.textContent || "",h,z)
    }
      , K53 = function(n, m, M, h, F) {
        var e = g.tR()
          , P = e ? g.s5("DIV") : g.s5("RUBY")
          , H = g.s5("SPAN");
        H.textContent = n;
        P.appendChild(H);
        n = e ? g.s5("DIV") : g.s5("RP");
        n.textContent = m;
        P.appendChild(n);
        m = e ? g.s5("DIV") : g.s5("RT");
        m.textContent = M;
        P.appendChild(m);
        M = F.o9;
        if (M === 10 || M === 11 || M === 12 || M === 13 || M === 14)
            if (g.jm(m, "text-emphasis-style", "filled circle"),
            g.jm(m, "text-emphasis-color", "currentcolor"),
            g.jm(m, "webkit-text-emphasis", "filled circle"),
            F.o9 === 11 || F.o9 === 13)
                g.jm(m, "webkit-text-emphasis-position", "under left"),
                g.jm(m, "text-emphasis-position", "under left");
        M = !0;
        if (F.o9 === 4 || F.o9 === 7 || F.o9 === 12 || F.o9 === 14)
            g.jm(P, "ruby-position", "over"),
            g.jm(P, "-webkit-ruby-position", "before");
        else if (F.o9 === 5 || F.o9 === 6 || F.o9 === 11 || F.o9 === 13)
            g.jm(P, "ruby-position", "under"),
            g.jm(P, "-webkit-ruby-position", "after"),
            M = !1;
        F = e ? g.s5("DIV") : g.s5("RP");
        F.textContent = h;
        P.appendChild(F);
        e && (h = M,
        g.jm(P, {
            display: "inline-block",
            position: "relative"
        }),
        e = P.firstElementChild.nextElementSibling,
        g.jm(e, "display", "none"),
        e = e.nextElementSibling,
        g.jm(e, {
            "font-size": "0.5em",
            "line-height": "1.2em",
            "text-align": "center",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "400%"
        }),
        g.jm(P.lastElementChild, "display", "none"),
        h ? (g.jm(P, "padding-top", "0.6em"),
        g.jm(e, "top", "0")) : (g.jm(P, "padding-bottom", "0.6em"),
        g.jm(e, "bottom", "0")));
        return P
    }
      , Uc = function() {
        g.S.apply(this, arguments)
    }
      , cs = function(n, m, M, h, F) {
        g.Q$.call(this, n, n + m, {
            priority: M,
            namespace: "captions"
        });
        this.id = h;
        this.params = F;
        this.U = []
    }
      , dKq = function(n) {
        var m = "_" + sc++;
        return new cs(0,0x8000000000000,0,m,n)
    }
      , u9 = function(n) {
        Uc.call(this);
        this.W = n;
        this.pens = {};
        this.D = {};
        this.Y = {};
        this.B = "_" + sc++;
        this.N = {};
        this.j = this.U = null;
        this.K = !0
    }
      , nz = function(n, m) {
        n = n.getAttribute(m);
        if (n != null)
            return Number(n)
    }
      , m6 = function(n, m) {
        n = n.getAttribute(m);
        if (n != null)
            return n === "1"
    }
      , Mg = function(n, m) {
        n = nz(n, m);
        return n !== void 0 ? n : null
    }
      , Fy = function(n, m) {
        n = n.getAttribute(m);
        if (n != null)
            return hZ.test(n),
            n
    }
      , DK_ = function(n, m) {
        var M = {}
          , h = m.getAttribute("ws");
        Object.assign(M, h ? n.Y[h] : n.W);
        n = Mg(m, "mh");
        n != null && (M.XV = n);
        n = Mg(m, "ju");
        n != null && (M.textAlign = n);
        n = Mg(m, "pd");
        n != null && (M.Kq = n);
        n = Mg(m, "sd");
        n != null && (M.lJ = n);
        n = Fy(m, "wfc");
        n != null && (M.windowColor = n);
        m = nz(m, "wfo");
        m !== void 0 && (M.windowOpacity = m / 255);
        return M
    }
      , Stt = function(n, m) {
        var M = {}
          , h = m.getAttribute("wp");
        h && Object.assign(M, n.D[h]);
        n = Mg(m, "ap");
        n != null && (M.OF = n);
        n = nz(m, "cc");
        n != null && (M.T6 = n);
        n = nz(m, "ah");
        n != null && (M.TI = n);
        n = nz(m, "rc");
        n != null && (M.SA = n);
        m = nz(m, "av");
        m != null && (M.I5 = m);
        return M
    }
      , tqN = function(n, m, M, h) {
        var F = {};
        Object.assign(F, Stt(n, m));
        Object.assign(F, DK_(n, m));
        h ? g.t9(F, n.W) ? (h = n.B,
        F = n.W) : h = "_" + sc++ : h = m.getAttribute("id") || "_" + sc++;
        n = nz(m, "t") + M;
        m = nz(m, "d") || 0x8000000000000;
        if (F.Kq === 2 || F.Kq === 3)
            M = F.SA,
            F.SA = F.T6,
            F.T6 = M;
        return new cs(n,m,0,h,F)
    }
      , i2 = function(n) {
        Uc.call(this);
        this.K = n;
        this.U = new Map;
        this.W = new Map;
        this.B = new Map;
        this.j = new Map
    }
      , ew = function(n) {
        n = g.xw(Math.round(n), 0, 16777215).toString(16).toUpperCase();
        return "#000000".substring(0, 7 - n.length) + n
    }
      , Ot7 = function(n, m, M, h, F) {
        h === 0 && (h = 0x8000000000000);
        var e = {};
        m.wpWinPosId && Object.assign(e, n.W.get(m.wpWinPosId));
        m.wsWinStyleId && Object.assign(e, n.B.get(m.wsWinStyleId));
        n = m.rcRowCount;
        n !== void 0 && (e.SA = n);
        m = m.ccColCount;
        m !== void 0 && (e.T6 = m);
        if (e.Kq === 2 || e.Kq === 3)
            m = e.SA,
            e.SA = e.T6,
            e.T6 = m;
        return new cs(M,h,0,F,e)
    }
      , PR = function(n, m, M) {
        gC.call(this, n);
        this.videoData = m;
        this.audioTrack = M;
        this.B = m.Bv
    }
      , Eo = function(n, m, M, h, F, e, P, H, z, A) {
        rC.call(this, n, m, M, h, F, e, P, H, z, A);
        this.type = 1
    }
      , HR = function(n, m, M) {
        this.trackData = n;
        this.K = M;
        this.version = this.B = this.X = this.byteOffset = 0;
        this.j = [];
        this.U = new DataView(this.trackData)
    }
      , zE = function(n) {
        var m = n.byteOffset;
        n.byteOffset += 1;
        return n.U.getUint8(m)
    }
      , ov = function(n) {
        var m = n.byteOffset;
        n.byteOffset += 4;
        return n.U.getUint32(m)
    }
      , AZ = function(n, m) {
        Uc.call(this);
        this.j = n;
        this.W = m;
        this.track = this.W.languageName === "CC3" ? 4 : 0;
        this.U = new S4;
        this.U.j = 1 << this.track
    }
      , fCN = function(n) {
        if (typeof n === "string")
            return !1;
        n = new HR(n,8,0);
        return pSX(n)
    }
      , pSX = function(n) {
        if (!(n.byteOffset < n.U.byteLength) || ov(n) !== 1380139777)
            return !1;
        n.version = zE(n);
        if (n.version > 1)
            return !1;
        zE(n);
        zE(n);
        zE(n);
        return !0
    }
      , b2 = function(n, m, M, h, F, e, P, H, z, A) {
        rC.call(this, n, m, M, h, F, e, P, H, z, A);
        var b = this;
        this.type = 2;
        this.X6 = [];
        this.jU = this.Z = this.wW = 0;
        this.BT = NaN;
        this.ql = 0;
        this.BA = null;
        this.Sf = new g.V0(this.IZ,433,this);
        this.K && (A.createClientVe(this.K, this, 167342),
        this.uq(this.K, "click", function() {
            A.logClick(b.K)
        }),
        n = new g.nO(this.element,!0),
        g.t(this, n),
        n.subscribe("hoverstart", function() {
            A.logVisibility(b.K, !0)
        }, this));
        g.LX(this.element, "ytp-caption-window-rollup");
        g.t(this, this.Sf);
        g.jm(this.element, "overflow", "hidden")
    }
      , v$I = function(n, m) {
        if (!m)
            return "";
        n.B && n.j.params.lJ !== 1 && (m *= -1);
        return "translate" + (n.B ? "X" : "Y") + "(" + m + "px)"
    }
      , lC3 = function(n) {
        n.X6 = Array.from(n.element.getElementsByClassName("caption-visual-line"));
        for (var m = n.j.params.SA, M = 0, h = 0, F = n.X6.length - 1; M < m && F > -1; ) {
            var e = n.X6[F];
            h += n.B ? e.offsetWidth : e.offsetHeight;
            M++;
            F--
        }
        n.Z = h;
        m = Math;
        M = m.max;
        isNaN(n.BT) && ((h = n.U.T6) ? (F = g.s5("SPAN"),
        g.eo(F, "\u2013".repeat(h)),
        g.jm(F, BGt(n, n.U.DM)),
        n.W.appendChild(F),
        n.BT = F.offsetWidth,
        n.W.removeChild(F)) : n.BT = 0);
        h = n.W;
        n.jU = M.call(m, n.BT, n.ql, (n.B ? h.offsetHeight : h.offsetWidth) + 1)
    }
      , qtq = function(n, m) {
        lC3(n);
        var M = n.X6.reduce(function(e, P) {
            return (n.B ? P.offsetWidth : P.offsetHeight) + e
        }, 0);
        M = n.Z - M;
        if (M !== n.wW) {
            var h = M > 0 && n.wW === 0
              , F = M < n.wW;
            m || isNaN(M) || h || !F || (g.LX(n.element, "ytp-rollup-mode"),
            n.uq(n.element, "transitionend", n.IZ));
            g.jm(n.W, "transform", v$I(n, M));
            n.wW = M
        }
        lC3(n)
    }
      , BR = function(n, m, M, h) {
        this.k6 = n;
        this.K = m;
        this.logger = M;
        this.Ua = h;
        this.gL = [];
        this.U = null;
        this.X = [];
        this.GY = [];
        this.j = null;
        n = g.sQ(this.k6.G().experiments, "html5_override_micro_discontinuities_threshold_ms");
        this.W = n > 0 ? n : 10
    }
      , Jw7 = function(n, m) {
        n.j = function(M, h) {
            if (n.k6.G().experiments.dW("html5_sabr_live_support_subfragmented_captions"))
                (n.U ? n.U = g.j6(n.U, M) : (n.U = M,
                TGI(n.U)),
                n.U) ? M.info.X && (GUS(n.U),
                kUU(n, n.U, m, h),
                n.U = null) : g.gA(n.logger, 350058965, "Empty slice");
            else if (M.info.X) {
                var F = M;
                if (n.GY.length > 0) {
                    for (F = n.GY.shift(); n.GY.length > 0; )
                        F = g.j6(F, n.GY.shift());
                    F = g.j6(F, M)
                }
                F ? (TGI(F),
                GUS(F),
                kUU(n, F, m, h)) : g.gA(n.logger, 350058965, "Empty slice")
            } else
                n.GY.push(M)
        }
        ;
        n.k6.addEventListener("sabrCaptionsDataLoaded", n.j)
    }
      , kUU = function(n, m, M, h) {
        var F = n.B(m)
          , e = F.lq;
        F = {
            formatId: F.formatId,
            startTimeMs: F.startTimeMs,
            durationMs: F.durationMs,
            g9: e,
            OT: e
        };
        e = UKL(n.gL, F.startTimeMs);
        var P = e >= 0 ? n.gL[e] : null
          , H = P ? P.startTimeMs + P.durationMs : 0
          , z = F.startTimeMs + F.durationMs;
        !P || F.startTimeMs - H > n.W ? n.gL.splice(e + 1, 0, F) : (P.durationMs = Math.max(H, z) - P.startTimeMs,
        P.OT = Math.max(P.OT, F.OT));
        h(n.gL);
        h = g.$9(m);
        n = n.K;
        h = h.buffer.slice(h.byteOffset, h.byteLength + h.byteOffset);
        m = m.info.W;
        n.N ? n.W == null ? g.gA(n.logger, 350058965, "Null loaded track meta data at captions data received") : M.d6(h, n.W, m * 1E3) : g.gA(n.logger, 350058965, "Null Representation at captions data received")
    }
      , UKL = function(n, m) {
        n = g.d1(n, {
            startTimeMs: m
        }, function(M, h) {
            return M.startTimeMs - h.startTimeMs
        });
        return n >= 0 ? n : -n - 2
    }
      , TGI = function(n) {
        try {
            var m = g.Wf(n) * 1E3
        } catch (M) {
            m = n.info.startTime * 1E3
        }
        m < 0 && (m = n.info.startTime * 1E3);
        n.info.startTime = m / 1E3;
        n.info.W = m / 1E3
    }
      , GUS = function(n) {
        try {
            var m = g.jdL(n) * 1E3
        } catch (M) {
            m = n.info.duration * 1E3
        }
        m < 0 && (m = n.info.duration * 1E3);
        n.info.duration = m / 1E3;
        n.info.N = m / 1E3
    }
      , av = function(n, m) {
        gC.call(this, m);
        this.j = n;
        this.k6 = m;
        this.logger = new g.LC("caps");
        this.W = this.N = null;
        this.K = new BR(this.k6,this,this.logger,this.j.Ua)
    }
      , cwA = function(n, m) {
        var M = [], h;
        for (h in n.j.U)
            if (n.j.U.hasOwnProperty(h)) {
                var F = n.j.U[h];
                if (g.Ry(F, m || null)) {
                    var e = F.info.id
                      , P = e
                      , H = "." + e
                      , z = ""
                      , A = "";
                    if (F = F.info.captionTrack)
                        e = F.languageCode,
                        P = F.displayName,
                        H = F.vssId,
                        z = F.kind,
                        A = F.id;
                    M.push(new g.jC({
                        id: h,
                        languageCode: e,
                        languageName: P,
                        is_servable: !0,
                        is_default: !0,
                        is_translateable: !1,
                        vss_id: H,
                        kind: z,
                        captionId: A
                    }))
                }
            }
        return M
    }
      , s$m = function(n, m, M) {
        var h = [], F;
        for (F in n.j.U)
            if (n.j.U.hasOwnProperty(F)) {
                var e = n.j.U[F];
                if (g.Ry(e, M || null)) {
                    var P = e.info.captionTrack;
                    P && P.languageCode === m && h.push(e)
                }
            }
        return h.length ? h[0] : null
    }
      , ua3 = function(n, m) {
        if (!g.M7N(n) || n.U != null && g.jz(m, n.U) && n.U.U.rawcc != null)
            return !1;
        m = !!n.U && n.U.isManifestless && Object.values(n.U.U).some(function(M) {
            return g.Ry(M, "386")
        });
        n = !!n.U && !n.U.isManifestless && g.nNm(n.U);
        return m || n
    }
      , Vt = function() {
        Uc.call(this)
    }
      , m9L = function(n) {
        var m = n7X.length;
        if (n.byteLength < m)
            return !1;
        n = new Uint8Array(n,0,m);
        for (var M = 0; M < m; M++)
            if (n7X[M] !== n[M])
                return !1;
        return !0
    }
      , MGX = function(n, m, M, h, F, e, P, H, z) {
        switch (P.tagName) {
        case "b":
            H.bold = !0;
            break;
        case "i":
            H.italic = !0;
            break;
        case "u":
            H.underline = !0
        }
        for (var A = 0; A < P.childNodes.length; A++) {
            var b = P.childNodes[A];
            if (b.nodeType === 3)
                b = new Jx(m,M,h,F.id,b.nodeValue,e || A > 0,g.dO(H) ? void 0 : H),
                z.push(b),
                F.U.push(b);
            else {
                var B = {};
                Object.assign(B, H);
                MGX(n, m, M, h, F, !0, b, B, z)
            }
        }
    }
      , xQ = function(n) {
        var m = n.split(":");
        n = 0;
        m = g.W(m);
        for (var M = m.next(); !M.done; M = m.next())
            n = n * 60 + Number(M.value);
        return n * 1E3
    }
      , hkm = function(n, m, M, h) {
        h = Object.assign({
            XV: 0
        }, h);
        return new cs(n,m,M,"_" + sc++,h)
    }
      , w7 = function(n, m) {
        g.S.call(this);
        this.k6 = n;
        this.C = m;
        this.U = null;
        this.xq = this.k6.TA();
        this.logger = new g.LC("caps")
    }
      , iDX = function(n, m, M) {
        if (typeof m === "string" || fCN(m))
            return [{
                trackData: m,
                Au: M
            }];
        if (typeof m === "string" && m.substring(0, 6) === "WEBVTT" || typeof m !== "string" && m9L(m))
            return [{
                trackData: m,
                Au: M
            }];
        var h = new DataView(m);
        if (h.byteLength <= 8 || h.getUint32(4) !== 1718909296)
            return [];
        var F = g.Kdm(h);
        if (n.xq && F) {
            var e = g.gJS(F)
              , P = g.If3(F);
            F = F.segmentNumber;
            e && F && n.xq.ao(F, e, P)
        }
        n = g.$8(h, 1835295092);
        if (!n || !n.length || !n[0].size)
            return [];
        e = [];
        for (P = 0; P < n.length; P++)
            F = n[P],
            F = new Uint8Array(m,F.dataOffset,F.size - (F.dataOffset - F.offset)),
            F = g.Wg(F),
            e.push({
                trackData: F,
                Au: M + P * 1E3
            });
        Frt(h, e, M);
        return e = e.filter(function(H) {
            return !!H.trackData
        })
    }
      , Frt = function(n, m, M) {
        var h = g.bd(n, 0, 1836476516)
          , F = 9E4;
        h && (F = g.az(h) || 9E4);
        h = 0;
        for (var e = g.$8(n, 1836019558), P = 0; P < e.length; P++) {
            var H = e[P];
            P < m.length && (H = g.bd(n, H.dataOffset, 1953653094)) && (H = g.bd(n, H.dataOffset, 1952867444)) && (H = g.Y8(H) / F * 1E3,
            P === 0 && (h = H),
            m[P].Au = H - h + M || M * P * 1E3)
        }
    }
      , ekN = function(n, m, M) {
        n.U || (n.U = new Vt);
        n = n.U.X(m, M);
        Math.random() < .01 && g.VH(Error("Deprecated subtitles format in web player: WebVTT"));
        return n
    }
      , PWS = function(n) {
        var m = {};
        if (n = g.RY(n))
            m.lang = n,
            g.yzq.test(n) && (m.Kq = 1);
        return m
    }
      , YQ = function(n) {
        g.$f.call(this, n);
        var m = this;
        this.k6 = n;
        this.nP = [];
        this.Uw = {};
        this.wW = {};
        this.N = !1;
        this.X = "NONE";
        this.U = this.Y = this.Z = this.oz = this.SU = null;
        this.Xq = {
            eI: function() {
                m.eI()
            },
            d6: function(e, P, H, z, A) {
                A = A === void 0 ? 0 : A;
                var b, B = Number((b = m.videoData.G().gW().U.x6(g.nnS)) != null ? b : 0);
                A > 0 && B > 0 && m.videoData.lengthSeconds > 0 && A / m.videoData.lengthSeconds > B ? m.k6.S("tts", {
                    dropcap: A
                }) : m.d6(e, P, H, z)
            }
        };
        this.j = null;
        this.C = this.k6.G();
        this.videoData = this.k6.getVideoData();
        this.Z9 = this.k6.ZA();
        this.B = {
            DM: {}
        };
        this.K = {
            DM: {}
        };
        g.jY(this.videoData) ? this.X = "OFFLINE" : g.KpU(this.videoData, this.k6) ? this.X = "HLS" : ua3(this.videoData, this.k6) ? this.X = "SABR_LIVE" : g.rqA(this.videoData, this.k6) ? this.X = "LIVE" : this.videoData.captionTracks.length ? this.X = "INNERTUBE" : this.videoData.LF && (this.X = "TTS");
        this.zv = this.C.controlsType === "3";
        this.D9 = new w7(this.k6,this.C);
        this.X6 = new g.Mm(this);
        this.D = new g.za({
            L: "div",
            PT: "ytp-caption-window-container",
            vT: {
                id: "ytp-caption-window-container"
            }
        });
        this.jU = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 1,
            height: 1
        };
        var M = null
          , h = g.J0("yt-html5-player-modules::subtitlesModuleData");
        h && (M = new g.D7(h));
        this.storage = M;
        var F;
        this.m9 = !((F = n.j$()) == null || !F.Z5());
        this.W = E7B(this);
        this.BT = !this.W && this.zv && this.m9 && (this.X === "LIVE" || this.X === "SABR_LIVE");
        g.t(this, this.D9);
        this.W ? this.Iz = this.bq = null : (this.bq = new Na(this.ED,void 0,this),
        g.t(this, this.bq),
        this.Iz = new g.V0(this.tB,2E3,this),
        g.t(this, this.Iz));
        g.t(this, this.X6);
        g.ug(this.player, this.D.element, 4);
        g.t(this, this.D);
        this.W || this.X6.uq(n, "resize", this.Iw);
        (this.QX = g.vd(this.C) && !g.aO() && !this.k6.isFullscreen() && !this.W && !this.BT) && this.X6.uq(n, "resize", this.aA);
        this.X6.uq(n, "onPlaybackAudioChange", this.DH);
        this.X6.uq(n, g.X5("captions"), function(e) {
            m.onCueRangeEnter(e)
        });
        this.X6.uq(n, "crx_captions", function(e) {
            m.onCueRangeExit(e)
        });
        Ng(this, Zg() || {});
        this.player.PV("onCaptionsModuleAvailable");
        this.X === "HLS" && this.W && (n = this.k6.j$().cA(),
        this.m9 && this.X6.uq(n.textTracks, "addtrack", this.Aw))
    }
      , zk3 = function(n) {
        if (n.C.Wu === 1 || n.videoData.zt === 1 || g.By(n.videoData, "yt:cc") === "alwayson")
            return !0;
        if (n.videoData.captionTracks.length)
            var m = n.getAudioTrack().j;
        if (n.C.V("enable_player_captions_persistence_state_machine")) {
            var M = n.C.V("enable_player_captions_persistence_state_machine") ? g.Kb("yt-player-caption-persistence") : void 0;
            if (M !== void 0)
                return !!M
        } else if (n.C.Wu === 2) {
            if (g.wa(n.C))
                M = HDI(n);
            else if (n.storage)
                try {
                    M = n.storage.get("module-enabled")
                } catch (F) {
                    n.storage.remove("module-enabled")
                }
            else
                M = null;
            if (M != null)
                return !!M
        }
        M = ye(n.player.getAudioTrack(), g.wa(n.C));
        var h = g.By(n.videoData, "yt:cc");
        if (Qt(n) === void 0) {
            if (M === "CAPTIONS_INITIAL_STATE_ON_RECOMMENDED")
                return h ? h === "on" : !0;
            if (M === "CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED")
                return h === "on"
        } else
            return h === "on";
        return m === "ON" || g.By(n.videoData, "yt:cc") === "on"
    }
      , Z6 = function(n, m) {
        if (n.j && (m === void 0 || !m) || !n.videoData.captionTracks.length)
            return !1;
        n = n.getAudioTrack();
        return !!n.U || n.j === "FORCED_ON"
    }
      , Qt = function(n) {
        if (!n.C.V("enable_player_captions_persistence_state_machine")) {
            var m = void 0
              , M = g.fb().x6(65);
            if (g.wa(n.C) && M != null) {
                if (HDI(n) != null)
                    return !1;
                m = !M
            }
            return m
        }
    }
      , o7I = function(n) {
        return n.C.V("html5_honor_caption_availabilities_in_audio_track") && n.X !== "LIVE" && n.X !== "SABR_LIVE"
    }
      , Lz = function(n, m) {
        if (!n.U)
            return null;
        if (n.Y && n.Y.W)
            return n.Y.W;
        m = A2Z(n, m);
        m = n.U.U.U(m);
        var M = null;
        if (TXt(n.C)) {
            var h = n.k6.isInline() ? void 0 : g.Kb("yt-player-caption-sticky-language");
            for (var F = [h, n.videoData.captionsLanguagePreference, n.C.captionsLanguagePreference, g.By(n.videoData, "yt:cc_default_lang")], e = !1, P = 0; P < F.length; P++) {
                var H = F[P];
                if (H) {
                    e = !0;
                    for (var z = 0; z < m.length; z++)
                        if (g.RY(m[z]) === H)
                            return m[z];
                    for (z = 0; z < m.length; z++)
                        if (g.RY(m[z]).split("-")[0] === H.split("-")[0])
                            return m[z]
                }
            }
            if (e && n.U && (F = n.U.B,
            F.length))
                for (F = g.W(F),
                e = F.next(); !e.done; e = F.next())
                    if (e = e.value,
                    e.languageCode === h) {
                        M = e;
                        break
                    }
        } else
            for (h = [n.videoData.captionsLanguagePreference, n.C.captionsLanguagePreference, g.By(n.videoData, "yt:cc_default_lang")],
            F = 0; F < h.length; F++)
                for (e = 0; e < m.length; e++)
                    if (g.RY(m[e]) === h[F])
                        return m[e];
        h = null;
        n.Y && n.Y.X && (h = n.Y.X);
        h || (h = m.find(function(A) {
            return A.isDefault
        }) || null);
        h || (h = m[0] || Xy(n));
        h && M && g.RY(h).split("-")[0] !== M.languageCode.split("-")[0] && (h = qzI(h, M));
        return h
    }
      , Xy = function(n) {
        return n.Y && n.Y.U
    }
      , g7 = function(n) {
        var m = Xy(n);
        return !!m && n.j === m
    }
      , bDB = function(n, m) {
        if (n.j) {
            var M = n.k6.j$().cA().textTracks
              , h = null;
            n.X === "HLS" ? h = n.j.getId() : h = n.j.toString();
            for (var F = 0; F < M.length; F++) {
                var e = M[F];
                e.id === h && (m ? e.mode !== "showing" && (e.mode = "showing",
                e = n.j,
                n.tN(e, !!e, g7(n) ? "g" : n.N ? "m" : "s")) : e.mode === "showing" && (e.mode = "disabled"))
            }
        }
    }
      , WR = function(n, m, M) {
        n.loaded && n.unload();
        M != null && (n.N = M,
        n.N && (n.C.V("enable_player_captions_persistence_state_machine") ? Iv(n, !!m) : g.wa(n.C) ? $Q(n, !!m) : jw(n, !!m)));
        m !== null || Z6(n, !0) || n.tN(m, !!m, n.N ? "m" : "s");
        n.j = m;
        Z6(n) && (n.j = Xy(n));
        var h;
        Rv(n, (h = n.j) != null ? h : void 0);
        n.load()
    }
      , abX = function(n, m) {
        if (m instanceof cs) {
            var M = n.Uw[m.id];
            M && M.j !== m && (M.dispose(),
            delete n.Uw[m.id],
            M = null);
            M || (M = B_B(n, m)) && (n.Uw[m.id] = M)
        } else
            M = m.windowId,
            n.wW[M] || (n.wW[M] = []),
            n.wW[M].push(m)
    }
      , B_B = function(n, m) {
        var M = VGI(n);
        if (!M)
            return null;
        var h = n.j ? g.RY(n.j) : null;
        h && g.yzq.test(h) && (m.params.Kq = 1);
        var F = n.Z9.getPlayerSize();
        h = F.height * n.jU.height;
        F = F.width * n.jU.width;
        n.C.playerStyle !== "google-live" || n.B.isDefault || Object.assign(m.params, n.B);
        switch (m.params.XV != null ? m.params.XV : m.U.length > 1 ? 1 : 0) {
        case 1:
            return new Eo(m,n.B,n.K,M.width,M.height,F,h,n.C.experiments,n.Vq.bind(n),n.k6);
        case 2:
            return new b2(m,n.B,n.K,M.width,M.height,F,h,n.C.experiments,n.Vq.bind(n),n.k6);
        default:
            return new rC(m,n.B,n.K,M.width,M.height,F,h,n.C.experiments,n.Vq.bind(n),n.k6)
        }
    }
      , Ng = function(n, m, M) {
        M = M === void 0 ? !1 : M;
        var h = Cz.DM;
        n.B = {};
        Object.assign(n.B, Cz);
        n.B.DM = {};
        Object.assign(n.B.DM, h);
        n.K = {
            DM: {}
        };
        var F = m.backgroundOverride ? n.K : n.B
          , e = m.background || h.background;
        hZ.test(e);
        F.DM.background = e;
        F = m.colorOverride ? n.K : n.B;
        e = m.color || h.color;
        hZ.test(e);
        F.DM.color = e;
        F = m.windowColorOverride ? n.K : n.B;
        e = m.windowColor || Cz.windowColor;
        hZ.test(e);
        F.windowColor = e;
        F = m.backgroundOpacityOverride ? n.K : n.B;
        e = m.backgroundOpacity;
        e == null && (e = h.backgroundOpacity);
        F.DM.backgroundOpacity = e;
        F = m.fontSizeIncrementOverride ? n.K : n.B;
        e = m.fontSizeIncrement;
        e == null && (e = h.fontSizeIncrement);
        F.DM.fontSizeIncrement = e;
        e = m.fontStyleOverride ? n.K : n.B;
        F = m.fontStyle;
        F == null && (F = h.bold && h.italic ? 3 : h.bold ? 1 : h.italic ? 2 : 0);
        e = e.DM;
        switch (F) {
        case 1:
            e.bold = !0;
            delete e.italic;
            break;
        case 2:
            delete e.bold;
            e.italic = !0;
            break;
        case 3:
            e.bold = !0;
            e.italic = !0;
            break;
        default:
            delete e.bold,
            delete e.italic
        }
        F = m.textOpacityOverride ? n.K : n.B;
        e = m.textOpacity;
        e == null && (e = h.textOpacity);
        F.DM.textOpacity = e;
        F = m.windowOpacityOverride ? n.K : n.B;
        e = m.windowOpacity;
        e == null && (e = Cz.windowOpacity);
        F.windowOpacity = e;
        F = m.charEdgeStyleOverride ? n.K : n.B;
        e = m.charEdgeStyle;
        e == null && (e = h.charEdgeStyle);
        F.DM.charEdgeStyle = e;
        F = m.fontFamilyOverride ? n.K : n.B;
        e = m.fontFamily;
        e == null && (e = h.fontFamily);
        F.DM.fontFamily = e;
        n.loaded && n.Iw();
        M && g.Cb("yt-player-caption-display-settings", m, 2592E3)
    }
      , x9_ = function(n, m) {
        if (!n.U)
            return {};
        if (m) {
            g.dO(m) || n.wp(m.vss_id, "m");
            if (n.W && n.X !== "HLS" || !g.HP(m))
                return;
            if (g.dO(m)) {
                WR(n, null, !0);
                return
            }
            for (var M, h = n.U.U.U(!0), F = 0; F < h.length; F++) {
                var e = h[F];
                e.languageCode !== m.languageCode || M && (e.languageName !== m.languageName || (e.captionId || "") !== (m.captionId || "") || g.W2(e) !== m.displayName) || (M = m.translationLanguage ? qzI(e, m.translationLanguage) : e)
            }
            n.yR(m.position);
            !M || M === n.j && n.loaded || (m = g.yH(),
            h = g.RY(M),
            m.length && h === m[m.length - 1] || (m.push(h),
            g.Cb("yt-player-caption-language-preferences", m)),
            TXt(n.C) && !n.k6.isInline() && g.Cb("yt-player-caption-sticky-language", h, 2592E3),
            WR(n, M, !0))
        } else
            return n.loaded && n.j && !g7(n) ? wC(n.j) : {};
        return ""
    }
      , Kz = function(n, m, M) {
        m && !n.Z ? (m = dKq({
            Kq: 0,
            lang: "en"
        }),
        n.Z = [m, new Jx(m.start,m.end - m.start,0,m.id,M != null ? M : "Captions look like this")],
        n.player.Ao(n.Z)) : !m && n.Z && (wvI(n, n.Z),
        n.Z = null)
    }
      , wvI = function(n, m) {
        n.player.Lq(m);
        m = g.W(m);
        for (var M = m.next(); !M.done; M = m.next())
            g.g1(n.nP, M.value);
        Y4(n.bq)
    }
      , Rv = function(n, m) {
        n.C.V("html5_modify_caption_vss_logging") && (n.videoData.No = m)
    }
      , VGI = function(n) {
        var m = n.Z9.getVideoContentRect(!0).height
          , M = n.Z9.getVideoContentRect(!0).width;
        if (!m || !M)
            return null;
        m *= n.jU.height;
        M *= n.jU.width;
        return {
            width: M,
            height: m
        }
    }
      , jw = function(n, m) {
        if (n.storage)
            try {
                n.storage.set("module-enabled", m)
            } catch (M) {}
    }
      , $Q = function(n, m) {
        n.k6.isInline() || g.Cb("yt-player-sticky-caption", m, 2592E3)
    }
      , HDI = function(n) {
        if (!n.k6.isInline())
            return g.Kb("yt-player-sticky-caption")
    }
      , Iv = function(n, m) {
        n.C.V("enable_player_captions_persistence_state_machine") && g.Cb("yt-player-caption-persistence", m, 3122064E3)
    }
      , E7B = function(n) {
        var m, M = !((m = n.k6.j$()) == null || !m.Yd());
        return n.X === "HLS" && M ? !0 : n.zv && M && n.X !== "LIVE" && n.X !== "SABR_LIVE"
    }
      , A2Z = function(n, m) {
        if (n.X === "HLS")
            return !1;
        g.ym(n.videoData) && (m = !0);
        m || (m = n.X === "TTS" ? !1 : n.X === "INNERTUBE" ? !1 : !0);
        return m || n.C.V("web_watch_disable_account_level_captions_settings") && g.wa(n.C) ? !0 : !!g.fb().x6(66)
    };
    g.q6.prototype.ao = g.e3(79, function(n, m, M) {
        this.j.set(n, {
            Yl: m,
            MN: M
        })
    });
    g.kh.prototype.ao = g.e3(78, function(n, m, M) {
        this.N.ao(n, m, M)
    });
    g.i5.prototype.hT = g.e3(77, function() {
        var n = g.kw(document, "track", void 0, this.U);
        for (var m = 0; m < n.length; m++)
            g.hu(n[m])
    });
    g.VI.prototype.hT = g.e3(76, function() {
        this.mediaElement.hT()
    });
    g.i5.prototype.Z5 = g.e3(75, function() {
        return !(!this.U.textTracks || !this.U.textTracks.addEventListener)
    });
    g.VI.prototype.Z5 = g.e3(74, function() {
        return this.mediaElement.Z5()
    });
    g.i5.prototype.Yd = g.e3(73, function() {
        return !!this.U.textTracks
    });
    g.VI.prototype.Yd = g.e3(72, function() {
        return this.mediaElement.Yd()
    });
    g.i5.prototype.ey = g.e3(71, function(n) {
        for (var m = 0; m < n.length; m++)
            this.U.appendChild(n[m])
    });
    g.VI.prototype.ey = g.e3(70, function(n) {
        this.mediaElement.ey(n)
    });
    g.Jz.prototype.xx = g.e3(32, function(n) {
        return this.app.Pd({
            playerType: void 0
        }).xx(n)
    });
    g.F5.prototype.xx = g.e3(31, function(n) {
        return this.J.M_.xx(n)
    });
    g.d9.prototype.xx = g.e3(30, function(n) {
        return this.AN().some(function(m) {
            return m.namespace === n
        })
    });
    g.It.prototype.xx = g.e3(29, function() {
        return !1
    });
    g.Jz.prototype.wp = g.e3(24, function(n, m) {
        this.app.Tv().wp(n, m)
    });
    g.F5.prototype.wp = g.e3(23, function(n, m) {
        this.J.wp(n, m)
    });
    g.T_.prototype.wp = g.e3(22, function(n, m) {
        n = [n, m];
        g.qe(this, g.JB(this.provider), "cfi", n)
    });
    g.Cm.prototype.wp = g.e3(21, function(n, m) {
        this.qoe && this.qoe.wp(n, m)
    });
    g.wf.prototype.wp = g.e3(20, function(n, m) {
        this.AF.wp(n, m)
    });
    g.It.prototype.wp = g.e3(19, function() {});
    g.Jz.prototype.tN = g.e3(18, function(n, m, M) {
        this.app.Tv().tN(n, m, M)
    });
    g.F5.prototype.tN = g.e3(17, function(n, m, M) {
        this.J.tN(n, m, M)
    });
    g.T_.prototype.tN = g.e3(16, function(n, m, M) {
        if (this.D9 !== n || this.j6 !== m)
            m = m === "rawcc" ? "" : m,
            M = [n, m, this.D9, M],
            g.qe(this, g.JB(this.provider), "cfs", M),
            this.D9 = n,
            this.j6 = m
    });
    g.Cm.prototype.tN = g.e3(15, function(n, m, M) {
        this.qoe && this.qoe.tN(n, m, M)
    });
    g.wf.prototype.tN = g.e3(14, function(n, m, M) {
        this.AF.tN(n, m, M)
    });
    g.It.prototype.tN = g.e3(13, function() {});
    g.FF.prototype.Kb = g.e3(8, function() {
        return this.xq
    });
    g.Rf.prototype.Kb = g.e3(7, function() {
        return this.Tv().TA()
    });
    g.Jz.prototype.TA = g.e3(6, function() {
        return this.app.Kb()
    });
    g.F5.prototype.TA = g.e3(5, function() {
        return this.J.TA()
    });
    g.wf.prototype.TA = g.e3(4, function() {
        var n;
        return ((n = this.loader) == null ? void 0 : n.Kb()) || null
    });
    g.It.prototype.TA = g.e3(3, function() {
        return null
    });
    g.nE.prototype.Fa = g.e3(2, function(n) {
        return (n = this.NU(n)) ? n.U : 0
    });
    g.dA.prototype.Fa = g.e3(1, function() {
        return 0
    });
    g.XY(Na, g.S);
    g.y = Na.prototype;
    g.y.start = function() {
        this.stop();
        this.W = !1;
        var n = UMN(this)
          , m = cSm(this);
        n && !m && this.j.mozRequestAnimationFrame ? (this.U = g.sL(this.j, "MozBeforePaint", this.X),
        this.j.mozRequestAnimationFrame(null),
        this.W = !0) : this.U = n && m ? n.call(this.j, this.X) : this.j.setTimeout(JSZ(this.X), 20)
    }
    ;
    g.y.stop = function() {
        if (this.isActive()) {
            var n = UMN(this)
              , m = cSm(this);
            n && !m && this.j.mozRequestAnimationFrame ? g.eU(this.U) : n && m ? m.call(this.j, this.U) : this.j.clearTimeout(this.U)
        }
        this.U = null
    }
    ;
    g.y.isActive = function() {
        return this.U != null
    }
    ;
    g.y.E7 = function() {
        this.W && this.U && g.eU(this.U);
        this.U = null;
        this.K.call(this.B, g.am())
    }
    ;
    g.y.m7 = function() {
        this.stop();
        Na.hA.m7.call(this)
    }
    ;
    var uU7 = /#(.)(.)(.)/
      , sVA = /^#(?:[0-9a-f]{3}){1,2}$/i
      , e0B = {
        aa: "Afar",
        ab: "Abkhazian",
        ace: "Acehnese",
        ach: "Acoli",
        ada: "Adangme",
        ady: "Adyghe",
        ae: "Avestan",
        aeb: "Tunisian Arabic",
        af: "Afrikaans",
        afh: "Afrihili",
        agq: "Aghem",
        ain: "Ainu",
        ak: "Akan",
        akk: "Akkadian",
        akz: "Alabama",
        ale: "Aleut",
        aln: "Gheg Albanian",
        alt: "Southern Altai",
        am: "Amharic",
        an: "Aragonese",
        ang: "Old English",
        anp: "Angika",
        ar: "Arabic",
        ar_001: "Arabic (world)",
        arc: "Aramaic",
        arn: "Mapuche",
        aro: "Araona",
        arp: "Arapaho",
        arq: "Algerian Arabic",
        ars: "Najdi Arabic",
        arw: "Arawak",
        ary: "Moroccan Arabic",
        arz: "Egyptian Arabic",
        as: "Assamese",
        asa: "Asu",
        ase: "American Sign Language",
        ast: "Asturian",
        av: "Avaric",
        avk: "Kotava",
        awa: "Awadhi",
        ay: "Aymara",
        az: "Azerbaijani",
        az_Cyrl: "Azerbaijani (Cyrillic)",
        az_Latn: "Azerbaijani (Latin)",
        ba: "Bashkir",
        bal: "Baluchi",
        ban: "Balinese",
        bar: "Bavarian",
        bas: "Basaa",
        bax: "Bamun",
        bbc: "Batak Toba",
        bbj: "Ghomala",
        be: "Belarusian",
        bej: "Beja",
        bem: "Bemba",
        bew: "Betawi",
        bez: "Bena",
        bfd: "Bafut",
        bfq: "Badaga",
        bg: "Bulgarian",
        bgc: "Haryanvi",
        bgn: "Western Balochi",
        bho: "Bhojpuri",
        bi: "Bislama",
        bik: "Bikol",
        bin: "Bini",
        bjn: "Banjar",
        bkm: "Kom",
        bla: "Siksik\u00e1",
        blo: "Anii",
        bm: "Bambara",
        bn: "Bangla",
        bo: "Tibetan",
        bpy: "Bishnupriya",
        bqi: "Bakhtiari",
        br: "Breton",
        bra: "Braj",
        brh: "Brahui",
        brx: "Bodo",
        bs: "Bosnian",
        bs_Cyrl: "Bosnian (Cyrillic)",
        bs_Latn: "Bosnian (Latin)",
        bss: "Akoose",
        bua: "Buriat",
        bug: "Buginese",
        bum: "Bulu",
        byn: "Blin",
        byv: "Medumba",
        ca: "Catalan",
        cad: "Caddo",
        car: "Carib",
        cay: "Cayuga",
        cch: "Atsam",
        ccp: "Chakma",
        ce: "Chechen",
        ceb: "Cebuano",
        cgg: "Chiga",
        ch: "Chamorro",
        chb: "Chibcha",
        chg: "Chagatai",
        chk: "Chuukese",
        chm: "Mari",
        chn: "Chinook Jargon",
        cho: "Choctaw",
        chp: "Chipewyan",
        chr: "Cherokee",
        chy: "Cheyenne",
        ckb: "Central Kurdish",
        co: "Corsican",
        cop: "Coptic",
        cps: "Capiznon",
        cr: "Cree",
        crh: "Crimean Tatar",
        cs: "Czech",
        csb: "Kashubian",
        csw: "Swampy Cree",
        cu: "Church Slavic",
        cv: "Chuvash",
        cy: "Welsh",
        da: "Danish",
        dak: "Dakota",
        dar: "Dargwa",
        dav: "Taita",
        de: "German",
        de_AT: "German (Austria)",
        de_CH: "German (Switzerland)",
        del: "Delaware",
        den: "Slave",
        dgr: "Dogrib",
        din: "Dinka",
        dje: "Zarma",
        doi: "Dogri",
        dsb: "Lower Sorbian",
        dua: "Duala",
        dum: "Middle Dutch",
        dv: "Divehi",
        dyo: "Jola-Fonyi",
        dyu: "Dyula",
        dz: "Dzongkha",
        dzg: "Dazaga",
        ebu: "Embu",
        ee: "Ewe",
        efi: "Efik",
        egy: "Ancient Egyptian",
        eka: "Ekajuk",
        el: "Greek",
        elx: "Elamite",
        en: "English",
        en_AU: "English (Australia)",
        en_CA: "English (Canada)",
        en_GB: "English (United Kingdom)",
        en_US: "English (United States)",
        enm: "Middle English",
        eo: "Esperanto",
        es: "Spanish",
        es_419: "Spanish (Latin America)",
        es_ES: "Spanish (Spain)",
        es_MX: "Spanish (Mexico)",
        et: "Estonian",
        eu: "Basque",
        ewo: "Ewondo",
        fa: "Persian",
        fa_AF: "Persian (Afghanistan)",
        fan: "Fang",
        fat: "Fanti",
        ff: "Fula",
        ff_Adlm: "Fula (Adlam)",
        ff_Latn: "Fula (Latin)",
        fi: "Finnish",
        fil: "Filipino",
        fj: "Fijian",
        fo: "Faroese",
        fon: "Fon",
        fr: "French",
        fr_CA: "French (Canada)",
        fr_CH: "French (Switzerland)",
        frm: "Middle French",
        fro: "Old French",
        frr: "Northern Frisian",
        frs: "Eastern Frisian",
        fur: "Friulian",
        fy: "Western Frisian",
        ga: "Irish",
        gaa: "Ga",
        gay: "Gayo",
        gba: "Gbaya",
        gd: "Scottish Gaelic",
        gez: "Geez",
        gil: "Gilbertese",
        gl: "Galician",
        gmh: "Middle High German",
        gn: "Guarani",
        goh: "Old High German",
        gon: "Gondi",
        gor: "Gorontalo",
        got: "Gothic",
        grb: "Grebo",
        grc: "Ancient Greek",
        gsw: "Swiss German",
        gu: "Gujarati",
        guz: "Gusii",
        gv: "Manx",
        gwi: "Gwich\u02bcin",
        ha: "Hausa",
        hai: "Haida",
        haw: "Hawaiian",
        he: "Hebrew",
        hi: "Hindi",
        hi_Latn: "Hindi (Latin)",
        hil: "Hiligaynon",
        hit: "Hittite",
        hmn: "Hmong",
        ho: "Hiri Motu",
        hr: "Croatian",
        hsb: "Upper Sorbian",
        ht: "Haitian Creole",
        hu: "Hungarian",
        hup: "Hupa",
        hy: "Armenian",
        hz: "Herero",
        ia: "Interlingua",
        iba: "Iban",
        ibb: "Ibibio",
        id: "Indonesian",
        ie: "Interlingue",
        ig: "Igbo",
        ii: "Sichuan Yi",
        ik: "Inupiaq",
        ilo: "Iloko",
        "in": "Indonesian",
        inh: "Ingush",
        io: "Ido",
        is: "Icelandic",
        it: "Italian",
        iu: "Inuktitut",
        iw: "Hebrew",
        ja: "Japanese",
        jbo: "Lojban",
        jgo: "Ngomba",
        jmc: "Machame",
        jpr: "Judeo-Persian",
        jrb: "Judeo-Arabic",
        jv: "Javanese",
        ka: "Georgian",
        kaa: "Kara-Kalpak",
        kab: "Kabyle",
        kac: "Kachin",
        kaj: "Jju",
        kam: "Kamba",
        kaw: "Kawi",
        kbd: "Kabardian",
        kbl: "Kanembu",
        kcg: "Tyap",
        kde: "Makonde",
        kea: "Kabuverdianu",
        kfo: "Koro",
        kg: "Kongo",
        kgp: "Kaingang",
        kha: "Khasi",
        kho: "Khotanese",
        khq: "Koyra Chiini",
        ki: "Kikuyu",
        kj: "Kuanyama",
        kk: "Kazakh",
        kk_Arab: "Kazakh (Arabic)",
        kk_Cyrl: "Kazakh (Cyrillic)",
        kkj: "Kako",
        kl: "Kalaallisut",
        kln: "Kalenjin",
        km: "Khmer",
        kmb: "Kimbundu",
        kn: "Kannada",
        ko: "Korean",
        kok: "Konkani",
        kok_Deva: "Konkani (Devanagari)",
        kok_Latn: "Konkani (Latin)",
        kos: "Kosraean",
        kpe: "Kpelle",
        kr: "Kanuri",
        krc: "Karachay-Balkar",
        krl: "Karelian",
        kru: "Kurukh",
        ks: "Kashmiri",
        ks_Arab: "Kashmiri (Arabic)",
        ks_Deva: "Kashmiri (Devanagari)",
        ksb: "Shambala",
        ksf: "Bafia",
        ksh: "Colognian",
        ku: "Kurdish",
        ku_Latn: "Kurdish (Latin)",
        kum: "Kumyk",
        kut: "Kutenai",
        kv: "Komi",
        kw: "Cornish",
        kxv: "Kuvi",
        kxv_Deva: "Kuvi (Devanagari)",
        kxv_Latn: "Kuvi (Latin)",
        kxv_Orya: "Kuvi (Odia)",
        kxv_Telu: "Kuvi (Telugu)",
        ky: "Kyrgyz",
        la: "Latin",
        lad: "Ladino",
        lag: "Langi",
        lah: "Western Panjabi",
        lam: "Lamba",
        lb: "Luxembourgish",
        lez: "Lezghian",
        lg: "Ganda",
        li: "Limburgish",
        lij: "Ligurian",
        lkt: "Lakota",
        lmo: "Lombard",
        ln: "Lingala",
        lo: "Lao",
        lol: "Mongo",
        loz: "Lozi",
        lrc: "Northern Luri",
        lt: "Lithuanian",
        lu: "Luba-Katanga",
        lua: "Luba-Lulua",
        lui: "Luiseno",
        lun: "Lunda",
        luo: "Luo",
        lus: "Mizo",
        luy: "Luyia",
        lv: "Latvian",
        mad: "Madurese",
        maf: "Mafa",
        mag: "Magahi",
        mai: "Maithili",
        mak: "Makasar",
        man: "Mandingo",
        mas: "Masai",
        mde: "Maba",
        mdf: "Moksha",
        mdr: "Mandar",
        men: "Mende",
        mer: "Meru",
        mfe: "Morisyen",
        mg: "Malagasy",
        mga: "Middle Irish",
        mgh: "Makhuwa-Meetto",
        mgo: "Meta\u02bc",
        mh: "Marshallese",
        mi: "M\u0101ori",
        mic: "Mi'kmaw",
        min: "Minangkabau",
        mk: "Macedonian",
        ml: "Malayalam",
        mn: "Mongolian",
        mnc: "Manchu",
        mni: "Manipuri",
        mni_Beng: "Manipuri (Bangla)",
        mo: "Romanian",
        moh: "Mohawk",
        mos: "Mossi",
        mr: "Marathi",
        ms: "Malay",
        mt: "Maltese",
        mua: "Mundang",
        mul: "Multiple languages",
        mus: "Muscogee",
        mwl: "Mirandese",
        mwr: "Marwari",
        my: "Burmese",
        mye: "Myene",
        myv: "Erzya",
        mzn: "Mazanderani",
        na: "Nauru",
        nap: "Neapolitan",
        naq: "Nama",
        nb: "Norwegian Bokm\u00e5l",
        nd: "North Ndebele",
        nds: "Low German",
        nds_NL: "Low German (Netherlands)",
        ne: "Nepali",
        "new": "Newari",
        ng: "Ndonga",
        nia: "Nias",
        niu: "Niuean",
        nl: "Dutch",
        nl_BE: "Dutch (Belgium)",
        nmg: "Kwasio",
        nn: "Norwegian Nynorsk",
        nnh: "Ngiemboon",
        no: "Norwegian",
        nog: "Nogai",
        non: "Old Norse",
        nqo: "N\u2019Ko",
        nr: "South Ndebele",
        nso: "Northern Sotho",
        nus: "Nuer",
        nv: "Navajo",
        nwc: "Classical Newari",
        ny: "Nyanja",
        nym: "Nyamwezi",
        nyn: "Nyankole",
        nyo: "Nyoro",
        nzi: "Nzima",
        oc: "Occitan",
        oj: "Ojibwa",
        om: "Oromo",
        or: "Odia",
        os: "Ossetic",
        osa: "Osage",
        ota: "Ottoman Turkish",
        pa: "Punjabi",
        pa_Arab: "Punjabi (Arabic)",
        pa_Guru: "Punjabi (Gurmukhi)",
        pag: "Pangasinan",
        pal: "Pahlavi",
        pam: "Pampanga",
        pap: "Papiamento",
        pau: "Palauan",
        pcm: "Nigerian Pidgin",
        peo: "Old Persian",
        phn: "Phoenician",
        pi: "Pali",
        pl: "Polish",
        pms: "Piedmontese",
        pon: "Pohnpeian",
        prg: "Prussian",
        pro: "Old Proven\u00e7al",
        ps: "Pashto",
        pt: "Portuguese",
        pt_BR: "Portuguese (Brazil)",
        pt_PT: "Portuguese (Portugal)",
        qu: "Quechua",
        raj: "Rajasthani",
        rap: "Rapanui",
        rar: "Rarotongan",
        rm: "Romansh",
        rn: "Rundi",
        ro: "Romanian",
        ro_MD: "Romanian (Moldova)",
        rof: "Rombo",
        rom: "Romany",
        ru: "Russian",
        rup: "Aromanian",
        rw: "Kinyarwanda",
        rwk: "Rwa",
        sa: "Sanskrit",
        sad: "Sandawe",
        sah: "Yakut",
        sam: "Samaritan Aramaic",
        saq: "Samburu",
        sas: "Sasak",
        sat: "Santali",
        sat_Olck: "Santali (Ol Chiki)",
        sba: "Ngambay",
        sbp: "Sangu",
        sc: "Sardinian",
        scn: "Sicilian",
        sco: "Scots",
        sd: "Sindhi",
        sd_Arab: "Sindhi (Arabic)",
        sd_Deva: "Sindhi (Devanagari)",
        se: "Northern Sami",
        see: "Seneca",
        seh: "Sena",
        sel: "Selkup",
        ses: "Koyraboro Senni",
        sg: "Sango",
        sga: "Old Irish",
        sh: "Serbo-Croatian",
        shi: "Tachelhit",
        shi_Latn: "Tachelhit (Latin)",
        shi_Tfng: "Tachelhit (Tifinagh)",
        shn: "Shan",
        shu: "Chadian Arabic",
        si: "Sinhala",
        sid: "Sidamo",
        sk: "Slovak",
        sl: "Slovenian",
        sm: "Samoan",
        sma: "Southern Sami",
        smj: "Lule Sami",
        smn: "Inari Sami",
        sms: "Skolt Sami",
        sn: "Shona",
        snk: "Soninke",
        so: "Somali",
        sog: "Sogdien",
        sq: "Albanian",
        sr: "Serbian",
        sr_Cyrl: "Serbian (Cyrillic)",
        sr_Latn: "Serbian (Latin)",
        srn: "Sranan Tongo",
        srr: "Serer",
        ss: "Swati",
        ssy: "Saho",
        st: "Southern Sotho",
        su: "Sundanese",
        su_Latn: "Sundanese (Latin)",
        suk: "Sukuma",
        sus: "Susu",
        sux: "Sumerian",
        sv: "Swedish",
        sw: "Swahili",
        sw_CD: "Swahili (Congo - Kinshasa)",
        swb: "Comorian",
        syc: "Classical Syriac",
        syr: "Syriac",
        szl: "Silesian",
        ta: "Tamil",
        te: "Telugu",
        tem: "Timne",
        teo: "Teso",
        ter: "Tereno",
        tet: "Tetum",
        tg: "Tajik",
        th: "Thai",
        ti: "Tigrinya",
        tig: "Tigre",
        tiv: "Tiv",
        tk: "Turkmen",
        tkl: "Tokelauan",
        tl: "Tagalog",
        tlh: "Klingon",
        tli: "Tlingit",
        tmh: "Tamashek",
        tn: "Tswana",
        to: "Tongan",
        tog: "Nyasa Tonga",
        tok: "Toki Pona",
        tpi: "Tok Pisin",
        tr: "Turkish",
        trv: "Taroko",
        ts: "Tsonga",
        tsi: "Tsimshian",
        tt: "Tatar",
        tum: "Tumbuka",
        tvl: "Tuvalu",
        tw: "Twi",
        twq: "Tasawaq",
        ty: "Tahitian",
        tyv: "Tuvinian",
        tzm: "Central Atlas Tamazight",
        udm: "Udmurt",
        ug: "Uyghur",
        uga: "Ugaritic",
        uk: "Ukrainian",
        umb: "Umbundu",
        ur: "Urdu",
        uz: "Uzbek",
        uz_Arab: "Uzbek (Arabic)",
        uz_Cyrl: "Uzbek (Cyrillic)",
        uz_Latn: "Uzbek (Latin)",
        vai: "Vai",
        vai_Latn: "Vai (Latin)",
        vai_Vaii: "Vai (Vai)",
        ve: "Venda",
        vec: "Venetian",
        vi: "Vietnamese",
        vmw: "Makhuwa",
        vo: "Volap\u00fck",
        vot: "Votic",
        vun: "Vunjo",
        wa: "Walloon",
        wae: "Walser",
        wal: "Wolaytta",
        war: "Waray",
        was: "Washo",
        wo: "Wolof",
        xal: "Kalmyk",
        xh: "Xhosa",
        xnr: "Kangri",
        xog: "Soga",
        yao: "Yao",
        yap: "Yapese",
        yav: "Yangben",
        ybb: "Yemba",
        yi: "Yiddish",
        yo: "Yoruba",
        yrl: "Nheengatu",
        yue: "Cantonese",
        yue_Hans: "Cantonese (Simplified)",
        yue_Hant: "Cantonese (Traditional)",
        za: "Zhuang",
        zap: "Zapotec",
        zbl: "Blissymbols",
        zen: "Zenaga",
        zgh: "Standard Moroccan Tamazight",
        zh: "Chinese",
        zh_Hans: "Chinese (Simplified)",
        zh_Hant: "Chinese (Traditional)",
        zh_TW: "Chinese (Taiwan)",
        zu: "Zulu",
        zun: "Zuni",
        zxx: "No linguistic content",
        zza: "Zaza"
    };
    XK.prototype.U = function(n) {
        return n ? this.j.concat(this.X) : this.j
    }
    ;
    g.Z(gC, g.S);
    g.y = gC.prototype;
    g.y.uw = function() {}
    ;
    g.y.Wp = function() {}
    ;
    g.y.A3 = function() {}
    ;
    g.y.i8 = function() {
        return ""
    }
    ;
    g.y.T$ = function() {
        return !1
    }
    ;
    g.y.eI = function(n, m) {
        var M = this;
        if (this.Vi.G().V("html5_dispatch_tracklist_loaded_event")) {
            this.X && (this.X.reject(),
            this.X = null);
            var h = [];
            this.Vi.fP("trackListLoaded", this.U, h, m);
            this.Vi.G().V("enable_po_decoration_of_forced_tracks") && this.Vi.fP("trackListLoaded", this.Y, h, m);
            h.length ? (m = new g.Ib,
            m.promise.then(n.eI, function() {}),
            this.X = m,
            Promise.all(h).then(m.resolve, m.reject).finally(function() {
                M.X = null
            })) : n.eI()
        } else
            n.eI()
    }
    ;
    g.y.m7 = function() {
        this.X && (this.X.reject(),
        this.X = null);
        this.A3();
        g.S.prototype.m7.call(this)
    }
    ;
    var y2q = {
        en: "English"
    };
    g.Z(IW, gC);
    IW.prototype.Wp = function(n) {
        var m = this.Vi.j$();
        if (m && m.cA()) {
            m = m.cA().textTracks;
            m = g.W(m);
            for (var M = m.next(); !M.done; M = m.next())
                M = M.value,
                M.kind === "subtitles" && !this.j.has(M.language) && M.language && (Lv(this.U, new g.jC({
                    languageCode: M.language,
                    languageName: M.language,
                    kind: M.kind,
                    id: M.id,
                    displayName: y2q[M.label] || M.label,
                    vss_id: "." + M.language
                })),
                this.j.add(M.language))
        }
        this.U.U().length > 0 && n.eI()
    }
    ;
    g.Z($4, gC);
    $4.prototype.uw = function(n, m, M) {
        var h = this;
        this.Ew();
        m = this.i8(n, m);
        var F = this.Vi.G().V("html5_report_captions_ctmp_qoe")
          , e = (0,
        g.v)();
        this.A3();
        Mqt(this, m, {
            format: "RAW",
            onSuccess: function(P) {
                h.j = null;
                if (F) {
                    var H = (P.responseText.length / 1024).toFixed()
                      , z = (0,
                    g.v)();
                    h.videoData.S("capresp", {
                        ms: z - e,
                        kb: H
                    })
                }
                H = P.getResponseHeader && P.getResponseHeader("Content-Length") ? Number(P.getResponseHeader("Content-Length")) : 0;
                M.d6(P.responseText, n, void 0, void 0, H)
            },
            onError: F ? function(P) {
                var H;
                P = (H = P == null ? void 0 : P.status) != null ? H : 0;
                h.videoData.S("capfail", {
                    status: P
                })
            }
            : void 0,
            withCredentials: !0
        })
    }
    ;
    $4.prototype.Wp = function(n) {
        if (this.audioTrack) {
            for (var m = g.W(this.audioTrack.captionTracks), M = m.next(); !M.done; M = m.next())
                Lv(this.U, M.value);
            this.audioTrack.U && Lv(this.Y, this.audioTrack.U)
        }
        this.eI(n, this.videoData.videoId)
    }
    ;
    $4.prototype.i8 = function(n, m) {
        var M = n.ET()
          , h = {
            fmt: m
        };
        if (m === "srv3" || m === "3" || m === "json3")
            g.tR() ? Object.assign(h, {
                xorb: 2,
                xobt: 1,
                xovt: 1
            }) : Object.assign(h, {
                xorb: 2,
                xobt: 3,
                xovt: 3
            });
        n.translationLanguage && (h.tlang = g.RY(n));
        this.W && (h.xosf = "1");
        Object.assign(h, this.Vi.G().U);
        return g.T3(M, h)
    }
    ;
    $4.prototype.A3 = function() {
        this.j && this.j.abort()
    }
    ;
    j4.prototype.contains = function(n) {
        n = g.d1(this.segments, n);
        return n >= 0 || n < 0 && (-n - 1) % 2 === 1
    }
    ;
    j4.prototype.length = function() {
        return this.segments.length / 2
    }
    ;
    g.Z(RW, g.S);
    g.y = RW.prototype;
    g.y.m7 = function() {
        g.S.prototype.m7.call(this);
        this.j && this.j.cancel()
    }
    ;
    g.y.iX = function() {
        this.seekTo(this.player.getCurrentTime())
    }
    ;
    g.y.seekTo = function(n) {
        n -= this.player.KY();
        var m = this.U;
        this.U = g.Vx(this.iq.HF(n).Rz);
        m !== this.U && this.Y && this.Y()
    }
    ;
    g.y.reset = function() {
        this.W = new j4;
        this.K = -1;
        this.j && (this.j.cancel(),
        this.j = null)
    }
    ;
    g.y.fW = function() {
        this.Ew();
        var n;
        if (n = this.U != null)
            n = this.U,
            n = n.iq.X4(n);
        if (n && !this.j && !(this.U && this.U.startTime - this.player.getCurrentTime() > 30)) {
            n = this.U;
            n = n.iq.gC(n);
            var m = n.Rz[0], M;
            if ((M = this.player.getVideoData()) == null ? 0 : M.enableServerStitchedDai)
                if (M = this.player.TA()) {
                    var h = m.iq.info.id
                      , F = m.lq
                      , e = n.Rz[0].W;
                    if (this.policy.Iz) {
                        if (M = g.DV7(M, e, F, h, 3))
                            n.W = M
                    } else if (h = M.U0(e, F, h, 3))
                        if (e = 2,
                        M.xX.has(F) ? e = 0 : g.iF(M, F) && (e = 1),
                        M = e,
                        M === 0)
                            h && (n.U = new g.rV(h));
                        else if (M === 2) {
                            this.N.start();
                            F5U(this) && this.seekTo(this.player.getCurrentTime());
                            return
                        }
                }
            m.iq.index.h6(m.lq) ? (this.W.contains(n.Rz[0].lq) || itL(this, n),
            this.U = g.Vx(n.Rz)) : F5U(this) && this.seekTo(this.player.getCurrentTime())
        }
        this.N.start()
    }
    ;
    g.Z(Ws, gC);
    g.y = Ws.prototype;
    g.y.uw = function(n, m, M) {
        var h = this;
        this.A3();
        m = E$t(this, n.getId());
        m || (m = n.languageCode,
        m = this.j.isManifestless ? Ht3(this, m, "386") : Ht3(this, m));
        if (m) {
            var F = (m.index.Fa(m.index.w_()) - m.index.getStartTime(m.index.w_())) * 1E3
              , e = new g.Cjm(this.k6.G());
            this.W = new RW(e,this.k6,m,function(P, H) {
                M.d6(P, n, H, F)
            }
            ,this.N || g.RP(m.info),function() {
                h.W && h.W.reset();
                h.K = !0
            }
            )
        }
    }
    ;
    g.y.T$ = function() {
        var n = this.K;
        this.K = !1;
        return n
    }
    ;
    g.y.Wp = function(n) {
        var m = this.k6.G().V("html5_fallback_if_rawcc_missing");
        var M = this.j.U.rawcc != null;
        if (!this.N || !M && m)
            m = this.j.isManifestless ? PqI(this, "386") : PqI(this);
        else {
            if (!M) {
                g.gA(this.logger, 386248249, "rawcc used but unavailable");
                return
            }
            m = [new g.jC({
                id: "rawcc",
                languageCode: "rawcc",
                languageName: "CC1",
                is_servable: !0,
                is_default: !0,
                is_translateable: !1,
                vss_id: ".en"
            }), new g.jC({
                id: "rawcc",
                languageCode: "rawcc",
                languageName: "CC3",
                is_servable: !0,
                is_default: !0,
                is_translateable: !1,
                vss_id: ".en"
            })]
        }
        m = g.W(m);
        for (M = m.next(); !M.done; M = m.next())
            Lv(this.U, M.value);
        n.eI()
    }
    ;
    g.y.A3 = function() {
        this.W && (this.W.dispose(),
        this.W = null)
    }
    ;
    g.y.i8 = function() {
        return ""
    }
    ;
    g.Z(Cv, gC);
    Cv.prototype.uw = function(n, m, M) {
        var h = this;
        this.Ew();
        m = this.i8(n, m);
        this.A3();
        this.j = g.BK(m, {
            format: "RAW",
            onSuccess: function(F) {
                h.j = null;
                var e = F.getResponseHeader && F.getResponseHeader("Content-Length") ? Number(F.getResponseHeader("Content-Length")) : 0;
                M.d6(F.responseText, n, void 0, void 0, e)
            },
            withCredentials: !0
        })
    }
    ;
    Cv.prototype.Wp = function(n) {
        var m = this
          , M = this.W
          , h = {
            type: "list",
            tlangs: 1,
            v: this.videoId,
            vssids: 1
        };
        this.K && (h.asrs = 1);
        M = g.T3(M, h);
        this.A3();
        this.j = g.BK(M, {
            format: "RAW",
            onSuccess: function(F) {
                m.j = null;
                if ((F = F.responseXML) && F.firstChild) {
                    for (var e = F.getElementsByTagName("track"), P = 0; P < e.length; P++) {
                        var H = e[P]
                          , z = H.getAttribute("lang_code")
                          , A = H.getAttribute("lang_translated")
                          , b = H.getAttribute("name")
                          , B = H.getAttribute("kind")
                          , V = H.getAttribute("id")
                          , a = H.getAttribute("lang_default") === "true"
                          , x = H.getAttribute("cantran") === "true";
                        H = H.getAttribute("vss_id");
                        Lv(m.U, new g.jC({
                            languageCode: z,
                            languageName: A,
                            name: b,
                            kind: B,
                            id: V,
                            is_servable: !0,
                            is_translateable: x,
                            vss_id: H,
                            is_default: a
                        }))
                    }
                    F = F.getElementsByTagName("target");
                    e = F.length;
                    for (P = 0; P < e; P++)
                        z = {
                            languageCode: F[P].getAttribute("lang_code"),
                            languageName: F[P].getAttribute("lang_translated"),
                            languageOriginal: F[P].getAttribute("lang_original"),
                            id: F[P].getAttribute("id"),
                            isDefault: F[P].getAttribute("lang_default") === "true"
                        },
                        m.N[z.languageCode] = z.languageName,
                        m.B.push(z)
                }
                m.eI(n, m.videoId)
            },
            withCredentials: !0
        })
    }
    ;
    Cv.prototype.i8 = function(n, m) {
        var M = this.W;
        m = {
            v: this.videoId,
            type: "track",
            lang: n.languageCode,
            name: n.getName(),
            kind: n.kind,
            fmt: m
        };
        var h = this.Vi.G();
        h.V("captions_url_add_ei") && (m.ei = this.eventId);
        n.translationLanguage && (m.tlang = g.RY(n));
        Object.assign(m, h.U);
        return M = g.T3(M, m)
    }
    ;
    Cv.prototype.A3 = function() {
        this.j && this.j.abort()
    }
    ;
    var hZ = /^#(?:[0-9a-f]{3}){1,2}$/i;
    var Aw3 = ["left", "right", "center", "justify"];
    g.Z(rC, g.za);
    g.y = rC.prototype;
    g.y.kW = function(n, m) {
        this.Z9 = n;
        this.Xq = m;
        var M = g.t$(this.element, this.element.parentElement);
        this.QX = n - M.x;
        this.b0 = m - M.y
    }
    ;
    g.y.rI = function(n, m) {
        if (n !== this.Z9 || m !== this.Xq) {
            g.XC(this.element, "ytp-dragging") || g.LX(this.element, "ytp-dragging");
            var M = g.vF(this.element);
            n = n - this.QX - .02 * this.q2;
            var h = m - this.b0 - .02 * this.j6
              , F = (n + M.width / 2) / this.maxWidth * 3;
            F = Math.floor(g.xw(F, 0, 2));
            var e = (h + M.height / 2) / this.maxHeight * 3;
            e = Math.floor(g.xw(e, 0, 2));
            m = F + e * 3;
            n = (n + F / 2 * M.width) / this.maxWidth;
            n = g.xw(n, 0, 1) * 100;
            M = (h + e / 2 * M.height) / this.maxHeight;
            M = g.xw(M, 0, 1) * 100;
            this.j.params.OF = m;
            this.j.params.I5 = M;
            this.j.params.TI = n;
            this.j.params.isDefault = !1;
            this.U.OF = m;
            this.U.I5 = M;
            this.U.TI = n;
            this.U.isDefault = !1;
            this.Uw.OF = m;
            this.Uw.I5 = M;
            this.Uw.TI = n;
            this.Uw.isDefault = !1;
            this.uT()
        }
    }
    ;
    g.y.ij = function() {
        g.Io(this.element, "ytp-dragging")
    }
    ;
    g.y.uT = function() {
        this.ZV(this.N)
    }
    ;
    g.y.ZV = function(n) {
        var m = this.JF ? 0 : Math.min(this.eG(), this.maxWidth)
          , M = this.B2()
          , h = this.JF;
        if (h) {
            var F = getComputedStyle(this.W.parentNode);
            F = dC(F.borderLeftWidth) + dC(F.borderRightWidth) + dC(F.paddingLeft) + dC(F.paddingRight)
        } else
            F = 0;
        var e = F;
        F = "";
        this.j.params.Kq === 3 && (F = "rotate(180deg)");
        var P = h ? "calc(96% - " + e + "px)" : "96%";
        g.jm(this.element, {
            top: 0,
            left: 0,
            right: "",
            bottom: "",
            width: m ? m + "px" : "",
            height: M ? M + "px" : "",
            "max-width": P,
            "max-height": P,
            margin: "",
            transform: ""
        });
        this.dk(n);
        F = {
            transform: F,
            top: "",
            left: "",
            width: m ? m + "px" : "",
            height: M ? M + "px" : "",
            "max-width": "",
            "max-height": ""
        };
        P = this.U.OF;
        var H = this.U.TI
          , z = this.U.I5;
        this.SU && P != null && (H = 50,
        P = Math.floor(P / 3) * 3 + 1);
        H = H * .96 + 2;
        switch (P) {
        case 0:
        case 3:
        case 6:
            (h = this.U.DM.fontSizeIncrement) && h > 0 && this.U.Kq !== 2 && this.U.Kq !== 3 && (H = Math.max(H / (1 + h * 2), 2));
            F.left = H + "%";
            break;
        case 1:
        case 4:
        case 7:
            F.left = H + "%";
            H = 0;
            this.Y || (H = this.W.offsetWidth);
            m || H ? (m = m || H + 1,
            F.width = m + "px",
            F["margin-left"] = h ? m / -2 - e / 2 + "px" : m / -2 + "px") : (this.Y && (F.width = "max-content"),
            F.transform += " translateX(-50%)");
            break;
        case 2:
        case 5:
        case 8:
            F.right = 100 - H + "%"
        }
        h = z * .96 + 2;
        switch (P) {
        case 0:
        case 1:
        case 2:
            F.top = h + "%";
            break;
        case 3:
        case 4:
        case 5:
            F.top = h + "%";
            h = 0;
            this.Y || (h = this.element.clientHeight);
            (M = M || h) ? (F.height = M + "px",
            F["margin-top"] = M / -2 + "px") : F.transform += " translateY(-50%)";
            break;
        case 6:
        case 7:
        case 8:
            F.bottom = 100 - h + "%"
        }
        g.jm(this.element, F);
        if (this.K) {
            if (this.Y)
                M = this.zv;
            else {
                if (this.SU && n.length === 0)
                    n = 0;
                else {
                    M = 1;
                    for (h = 0; h < n.length; h++)
                        F = n[h],
                        typeof F.text === "string" && (M += F.text.split("\n").length - 1,
                        F.append || h === 0 || M++);
                    n = M
                }
                M = this.SU ? n > 0 ? this.W.offsetHeight / n : 0 : this.W.offsetHeight / n
            }
            this.K.style.height = M + "px";
            this.K.style.width = M + "px";
            this.element.style.paddingLeft = M + 5 + "px";
            this.element.style.paddingRight = M + 5 + "px";
            this.Y || (n = Number(this.element.style.marginLeft.replace("px", "")) - M - 5,
            M = Number(this.element.style.marginRight.replace("px", "")) - M - 5,
            this.element.style.marginLeft = n + "px",
            this.element.style.marginRight = M + "px")
        }
    }
    ;
    g.y.dk = function(n) {
        var m;
        for (m = 0; m < n.length && n[m] === this.N[m]; m++)
            ;
        if (this.nP || this.N.length > m)
            m = 0,
            this.nP = !1,
            this.N = [],
            this.D = this.oz = this.Iz = null,
            g.m4(this.W);
        for (; m < n.length; m++)
            xKS(this, n[m])
    }
    ;
    g.y.eG = function() {
        return 0
    }
    ;
    g.y.B2 = function() {
        return 0
    }
    ;
    g.y.toString = function() {
        return g.za.prototype.toString.call(this)
    }
    ;
    S4.prototype.clear = function() {
        this.X = this.time = this.mode = 0;
        this.U = [];
        this.reset()
    }
    ;
    S4.prototype.reset = function() {
        this.mode = 0;
        this.W.reset(0);
        this.B.reset(1)
    }
    ;
    var wS3 = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139, 12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255];
    tx.prototype.set = function(n) {
        this.type = n
    }
    ;
    tx.prototype.get = function() {
        return this.type
    }
    ;
    Oc.prototype.clear = function() {
        this.state = 0
    }
    ;
    Oc.prototype.update = function() {
        this.state = this.state === 2 ? 1 : 0
    }
    ;
    Oc.prototype.Ep = function() {
        return this.state !== 0
    }
    ;
    Oc.prototype.matches = function(n, m) {
        return this.Ep() && n === this.xG && m === this.Jg
    }
    ;
    ZtA.prototype.reset = function() {
        this.timestamp = this.U = 0
    }
    ;
    pv.prototype.updateTime = function(n) {
        for (var m = 1; m <= 15; ++m)
            for (var M = 1; M <= 32; ++M)
                this.X[m][M].timestamp = n
    }
    ;
    pv.prototype.debugString = function() {
        for (var n = "\n", m = 1; m <= 15; ++m) {
            for (var M = 1; M <= 32; ++M) {
                var h = this.X[m][M];
                n = h.U === 0 ? n + "_" : n + String.fromCharCode(h.U)
            }
            n += "\n"
        }
        return n
    }
    ;
    pv.prototype.reset = function(n) {
        for (var m = 0; m <= 15; m++)
            for (var M = 0; M <= 32; M++)
                this.X[m][M].reset();
        this.W = n;
        this.U = 0;
        this.j = this.row = 1
    }
    ;
    var XSI = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632]
      , L5X = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251]
      , g$X = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235, 206, 207, 239, 212, 217, 249, 219, 171, 187]
      , ICI = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499];
    GQ.prototype.reset = function(n, m) {
        this.B = m;
        this.style.set(2);
        this.j = this.K;
        this.W = this.N;
        this.U = this.j;
        var M = (n << 2) + (m << 1);
        this.K.reset(M);
        this.N.reset(M);
        this.text.reset((n << 2) + (m << 1) + 1)
    }
    ;
    Dg.prototype.reset = function(n) {
        this.B = n;
        this.j.clear();
        this.W = this.X;
        this.X.reset(n, 0);
        this.K.reset(n, 1)
    }
    ;
    CqI.prototype.W = function() {}
    ;
    g.Z(Jx, g.Q$);
    Jx.prototype.toString = function() {
        return g.Q$.prototype.toString.call(this)
    }
    ;
    g.Z(Uc, g.S);
    Uc.prototype.reset = function() {}
    ;
    g.Z(cs, g.Q$);
    cs.prototype.toString = function() {
        return g.Q$.prototype.toString.call(this)
    }
    ;
    var sc = 0;
    g.Z(u9, Uc);
    u9.prototype.reset = function() {
        this.N = {};
        this.j = this.U = null;
        this.K = !0
    }
    ;
    u9.prototype.X = function(n, m) {
        n = n.firstChild;
        n.getAttribute("format");
        m = m || 0;
        Number.isFinite(m);
        n = Array.from(n.childNodes);
        n = g.W(n);
        for (var M = n.next(); !M.done; M = n.next())
            if (M = M.value,
            M.nodeType === 1)
                switch (M.tagName) {
                case "head":
                    var h = M;
                    break;
                case "body":
                    var F = M
                }
        if (h)
            for (h = Array.from(h.childNodes),
            h = g.W(h),
            n = h.next(); !n.done; n = h.next())
                if (n = n.value,
                n.nodeType === 1)
                    switch (n.tagName) {
                    case "pen":
                        M = n.getAttribute("id");
                        var e = this.pens
                          , P = {}
                          , H = n.getAttribute("p");
                        H && Object.assign(P, this.pens[H]);
                        H = m6(n, "b");
                        H != null && (P.bold = H);
                        H = m6(n, "i");
                        H != null && (P.italic = H);
                        H = m6(n, "u");
                        H != null && (P.underline = H);
                        H = Mg(n, "et");
                        H != null && (P.charEdgeStyle = H);
                        H = Mg(n, "of");
                        H != null && (P.offset = H);
                        H = Fy(n, "bc");
                        H != null && (P.background = H);
                        H = Fy(n, "ec");
                        H != null && (P.Yf = H);
                        H = Fy(n, "fc");
                        H != null && (P.color = H);
                        H = Mg(n, "fs");
                        H != null && H !== 0 && (P.fontFamily = H);
                        H = nz(n, "sz");
                        H !== void 0 && (P.fontSizeIncrement = H / 100 - 1);
                        H = nz(n, "bo");
                        H !== void 0 && (P.backgroundOpacity = H / 255);
                        H = nz(n, "fo");
                        H !== void 0 && (P.textOpacity = H / 255);
                        H = Mg(n, "rb");
                        H != null && H !== 10 && H !== 0 && (P.o9 = H > 10 ? H - 1 : H);
                        n = Mg(n, "hg");
                        n != null && (P.Pc = n);
                        e[M] = P;
                        break;
                    case "ws":
                        M = n.getAttribute("id");
                        this.Y[M] = DK_(this, n);
                        break;
                    case "wp":
                        M = n.getAttribute("id"),
                        this.D[M] = Stt(this, n)
                    }
        if (F) {
            h = [];
            F = Array.from(F.childNodes);
            F = g.W(F);
            for (n = F.next(); !n.done; n = F.next())
                if (n = n.value,
                n.nodeType === 1)
                    switch (n.tagName) {
                    case "w":
                        this.U = tqN(this, n, m, !1);
                        (n = this.N[this.U.id]) && n.end > this.U.start && (n.end = this.U.start);
                        this.N[this.U.id] = this.U;
                        h.push(this.U);
                        break;
                    case "p":
                        var z = n;
                        H = m;
                        M = [];
                        e = z.getAttribute("w") || this.B;
                        P = !!m6(z, "a");
                        H = (nz(z, "t") || 0) + H;
                        var A = nz(z, "d") || 5E3;
                        P || (!this.K && this.j && this.j.windowId === e && this.j.end > H && (this.j.end = H),
                        this.j && this.j.text === "\n" && (this.j.text = ""));
                        var b = P ? 6 : 5
                          , B = z.getAttribute("p");
                        B = B ? this.pens[B] : null;
                        var V = Array.from(z.childNodes);
                        V.length && (this.K = z.getAttribute("d") != null);
                        for (z = 0; z < V.length; z++) {
                            var a = V[z]
                              , x = void 0;
                            z > 0 && (P = !0);
                            var Y = void 0;
                            a.nodeType === 1 && (Y = a);
                            if (Y && Y.tagName === "s") {
                                if ((a = (a = Y.getAttribute("p")) ? this.pens[a] : null) && a.o9 && (a.o9 === 1 ? (a = V.slice(z, z + 4),
                                a.length === 4 && (x = rwB(H, A, e, P, b, a, this.pens),
                                z += 3)) : x = rwB(H, A, e, P, b, [Y], this.pens)),
                                !x) {
                                    var R = Y;
                                    x = H;
                                    Y = A;
                                    a = e;
                                    var N = P
                                      , C = b
                                      , D = R.textContent ? R.textContent : ""
                                      , O = R.getAttribute("p");
                                    O = O ? this.pens[O] : null;
                                    R = nz(R, "t") || 0;
                                    x = new Jx(x + R,Y - R,C,a,D,N,O)
                                }
                            } else
                                x = new Jx(H,A,b,e,a.textContent || "",P,B);
                            M.push(x);
                            this.j = x
                        }
                        if (M.length > 0)
                            for (M[0].windowId === this.B && (this.U = tqN(this, n, m, !0),
                            h.push(this.U)),
                            n = g.W(M),
                            M = n.next(); !M.done; M = n.next())
                                M = M.value,
                                M.windowId = this.U.id,
                                this.U.U.push(M),
                                h.push(M)
                    }
            m = h
        } else
            m = [];
        return m
    }
    ;
    var N_I = new Map([[9, 1], [10, 1], [11, 2], [12, 3], [13, 4], [14, 5]]);
    g.Z(i2, Uc);
    i2.prototype.reset = function() {
        this.j.clear()
    }
    ;
    i2.prototype.X = function(n, m) {
        var M = JSON.parse(n);
        if (!M)
            return [];
        if (M.pens) {
            n = 0;
            for (var h = g.W(M.pens), F = h.next(); !F.done; F = h.next()) {
                F = F.value;
                var e = {}
                  , P = F.pParentId;
                P && Object.assign(e, this.U.get(P));
                F.bAttr && (e.bold = !0);
                F.iAttr && (e.italic = !0);
                F.uAttr && (e.underline = !0);
                P = F.ofOffset;
                P != null && (e.offset = P);
                F.szPenSize !== void 0 && (e.fontSizeIncrement = F.szPenSize / 100 - 1);
                P = F.etEdgeType;
                P != null && (e.charEdgeStyle = P);
                F.ecEdgeColor !== void 0 && (e.Yf = ew(F.ecEdgeColor));
                P = F.fsFontStyle;
                P != null && P !== 0 && (e.fontFamily = P);
                F.fcForeColor !== void 0 && (e.color = ew(F.fcForeColor));
                F.foForeAlpha !== void 0 && (e.textOpacity = F.foForeAlpha / 255);
                F.bcBackColor !== void 0 && (e.background = ew(F.bcBackColor));
                F.boBackAlpha !== void 0 && (e.backgroundOpacity = F.boBackAlpha / 255);
                (P = F.rbRuby) && P !== 10 && (e.o9 = P > 10 ? P - 1 : P,
                e.textEmphasis = N_I.get(e.o9));
                F.hgHorizGroup && (e.Pc = F.hgHorizGroup);
                this.U.set(n++, e)
            }
        }
        if (M.wsWinStyles)
            for (n = 0,
            h = g.W(M.wsWinStyles),
            F = h.next(); !F.done; F = h.next())
                F = F.value,
                e = {},
                (P = F.wsParentId) ? Object.assign(e, this.B.get(P)) : Object.assign(e, this.K),
                F.mhModeHint !== void 0 && (e.XV = F.mhModeHint),
                F.juJustifCode !== void 0 && (e.textAlign = F.juJustifCode),
                F.pdPrintDir !== void 0 && (e.Kq = F.pdPrintDir),
                F.sdScrollDir !== void 0 && (e.lJ = F.sdScrollDir),
                F.wfcWinFillColor !== void 0 && (e.windowColor = ew(F.wfcWinFillColor)),
                F.wfoWinFillAlpha !== void 0 && (e.windowOpacity = F.wfoWinFillAlpha / 255),
                this.B.set(n++, e);
        if (M.wpWinPositions)
            for (n = 0,
            h = g.W(M.wpWinPositions),
            F = h.next(); !F.done; F = h.next())
                F = F.value,
                e = {},
                (P = F.wpParentId) && Object.assign(e, this.W.get(P)),
                F.ahHorPos !== void 0 && (e.TI = F.ahHorPos),
                F.apPoint !== void 0 && (e.OF = F.apPoint),
                F.avVerPos !== void 0 && (e.I5 = F.avVerPos),
                F.ccCols !== void 0 && (e.T6 = F.ccCols),
                F.rcRows !== void 0 && (e.SA = F.rcRows),
                this.W.set(n++, e);
        if (M.events) {
            n = [];
            M = g.W(M.events);
            for (h = M.next(); !h.done; h = M.next()) {
                var H = h.value;
                F = (H.tStartMs || 0) + m;
                e = H.dDurationMs || 0;
                if (H.id)
                    P = String(H.id),
                    h = Ot7(this, H, F, e, P),
                    n.push(h),
                    this.j.set(P, h);
                else {
                    H.wWinId ? P = H.wWinId.toString() : (P = "_" + sc++,
                    h = Ot7(this, H, F, e, P),
                    n.push(h),
                    this.j.set(P, h));
                    h = n;
                    var z = H;
                    e === 0 && (e = 5E3);
                    H = this.j.get(P);
                    var A = !!z.aAppend
                      , b = A ? 6 : 5
                      , B = z.segs
                      , V = null;
                    z.pPenId && (V = this.U.get(z.pPenId));
                    for (z = 0; z < B.length; z++) {
                        var a = B[z]
                          , x = a.utf8;
                        if (x) {
                            var Y = a.tOffsetMs || 0
                              , R = null;
                            a.pPenId && (R = this.U.get(a.pPenId));
                            if ((H.params.XV != null ? H.params.XV : H.U.length > 1 ? 1 : 0) === 2 && A && x === "\n")
                                continue;
                            a = null;
                            var N = [], C;
                            if (C = R && R.o9 === 1) {
                                C = B;
                                var D = z;
                                if (D + 3 >= C.length || !C[D + 1].pPenId || !C[D + 2].pPenId || !C[D + 3].pPenId)
                                    C = !1;
                                else {
                                    var O = C[D + 1].pPenId;
                                    (O = this.U.get(O)) && O.o9 && O.o9 === 2 ? (O = C[D + 2].pPenId,
                                    O = this.U.get(O),
                                    !O || !O.o9 || O.o9 < 3 ? C = !1 : (O = C[D + 3].pPenId,
                                    C = (O = this.U.get(O)) && O.o9 && O.o9 === 2 ? !0 : !1)) : C = !1
                                }
                            }
                            if (C)
                                Y = B[z + 1].utf8,
                                a = B[z + 3].utf8,
                                C = B[z + 2].utf8,
                                D = this.U.get(B[z + 2].pPenId),
                                x = K53(x, Y, C, a, D),
                                a = new Jx(F,e,b,P,x,A,R),
                                z += 3;
                            else {
                                if (x.indexOf("<") > -1) {
                                    var q = void 0;
                                    N = R;
                                    C = V;
                                    D = F;
                                    O = e;
                                    var G = Y
                                      , c = b
                                      , iL = A
                                      , PA = []
                                      , HA = Kv("<html>" + x + "</html>");
                                    if (!HA.getElementsByTagName("parsererror").length && ((q = HA.firstChild) == null ? 0 : q.childNodes.length))
                                        for (q = g.W(HA.firstChild.childNodes),
                                        HA = q.next(); !HA.done; HA = q.next()) {
                                            HA = HA.value;
                                            var Q_ = void 0
                                              , M7 = void 0
                                              , KN = (M7 = (Q_ = HA.textContent) == null ? void 0 : Q_.replace(/\n/g, "")) != null ? M7 : "";
                                            if (HA.nodeType !== 3 || KN && KN.match(/^ *$/) == null) {
                                                Q_ = {};
                                                Object.assign(Q_, N || C);
                                                M7 = void 0;
                                                switch ((M7 = HA) == null ? void 0 : M7.tagName) {
                                                case "b":
                                                    Q_.bold = !0;
                                                    break;
                                                case "i":
                                                    Q_.italic = !0;
                                                    break;
                                                case "u":
                                                    Q_.underline = !0
                                                }
                                                PA.push(new Jx(D + G,O - G,c,H.id,KN,iL,Q_))
                                            }
                                        }
                                    N = PA
                                }
                                N.length || (N = [new Jx(F + Y,e - Y,b,H.id,x,A,R || V)])
                            }
                            if (N.length)
                                for (A = g.W(N),
                                R = A.next(); !R.done; R = A.next())
                                    R = R.value,
                                    h.push(R),
                                    H.U.push(R);
                            else
                                a && (h.push(a),
                                H.U.push(a))
                        }
                        A = !0
                    }
                }
            }
            m = n
        } else
            m = [];
        return m
    }
    ;
    g.Z(PR, gC);
    PR.prototype.uw = function(n, m, M) {
        k0_(this.videoData.videoId, n.vssId, M.d6)
    }
    ;
    PR.prototype.Wp = function(n) {
        if (this.audioTrack)
            for (var m = g.W(this.audioTrack.captionTracks), M = m.next(); !M.done; M = m.next())
                Lv(this.U, M.value);
        n.eI()
    }
    ;
    g.Z(Eo, rC);
    Eo.prototype.dk = function(n) {
        var m = this.j.U;
        rC.prototype.dk.call(this, n);
        for (n = n.length; n < m.length; n++) {
            var M = m[n];
            if (e && M.U === F)
                var h = e;
            else {
                h = {};
                Object.assign(h, M.U);
                Object.assign(h, Y13);
                var F = M.U;
                var e = h
            }
            xKS(this, M, h)
        }
    }
    ;
    var Y13 = {
        nZ: !0
    };
    g.Z(HR, CqI);
    HR.prototype.W = function(n, m, M, h, F) {
        if (M < h) {
            var e = "_" + sc++;
            M = M / 1E3 - this.K;
            h = h / 1E3 - this.K;
            n = new cs(M,h - M,5,e,{
                textAlign: 0,
                OF: 0,
                TI: m * 2.5,
                I5: n * 5.33
            });
            F = new Jx(M,h - M,5,e,F);
            this.j.push(n);
            this.j.push(F)
        }
    }
    ;
    g.Z(AZ, Uc);
    AZ.prototype.X = function(n) {
        n = new HR(n,n.byteLength,this.j);
        if (pSX(n)) {
            for (; n.byteOffset < n.U.byteLength; )
                for (n.version === 0 ? n.X = ov(n) * (1E3 / 45) : n.version === 1 && (n.X = ov(n) * 4294967296 + ov(n)),
                n.B = zE(n); n.B > 0; n.B--) {
                    var m = zE(n)
                      , M = zE(n)
                      , h = zE(n);
                    m & 4 && (m & 3) === this.track && (this.track === 0 || this.track === 1) && (m = this.U,
                    m.U.push({
                        time: n.X,
                        type: this.track,
                        au: M,
                        lf: h,
                        order: m.U.length
                    }))
                }
            Q$m(this.U, n);
            return n.j
        }
        return []
    }
    ;
    AZ.prototype.reset = function() {
        this.U.clear()
    }
    ;
    g.Z(b2, rC);
    g.y = b2.prototype;
    g.y.uT = function() {
        g.ws(this.Sf)
    }
    ;
    g.y.IZ = function() {
        this.element.removeEventListener("transitionend", this.IZ, !1);
        g.Io(this.element, "ytp-rollup-mode");
        this.ZV(this.BA, !0)
    }
    ;
    g.y.B2 = function() {
        return this.B ? this.jU : this.Z
    }
    ;
    g.y.eG = function() {
        return this.B ? this.Z : this.jU
    }
    ;
    g.y.ZV = function(n, m) {
        this.BA = n;
        if (this.j.params.SA) {
            for (var M = 0, h = 0; h < this.N.length && M < n.length; h++)
                this.N[h] === n[M] && M++;
            M > 0 && M < n.length && (n = this.N.concat(n.slice(M)));
            this.ql = this.jU;
            this.Z = this.jU = 0;
            rC.prototype.ZV.call(this, n);
            qtq(this, m)
        }
        rC.prototype.ZV.call(this, n)
    }
    ;
    BR.prototype.unload = function() {
        this.j != null && (this.k6.removeEventListener("sabrCaptionsDataLoaded", this.j),
        this.j = null);
        this.gL = [];
        this.U = null;
        this.X = [];
        this.k6.fP("sabrCaptionsBufferedRangesUpdated", this.gL)
    }
    ;
    BR.prototype.B = function(n) {
        return {
            formatId: g.Ub(n.info.iq.info, this.Ua),
            lq: n.info.lq + (this.Ua ? 0 : 1),
            startTimeMs: n.info.W * 1E3,
            durationMs: n.info.N * 1E3
        }
    }
    ;
    g.Z(av, gC);
    av.prototype.uw = function(n, m, M) {
        this.A3();
        m = n.getId();
        m = m != null && m in this.j.U ? this.j.U[m] : null;
        m || (m = n.languageCode,
        m = this.j.isManifestless ? s$m(this, m, "386") : s$m(this, m));
        m && (this.W = n,
        this.N = m,
        Jw7(this.K, M),
        this.k6.fP("sabrCaptionsTrackChanged", g.Ub(m.info, this.j.Ua)))
    }
    ;
    av.prototype.Wp = function(n) {
        var m = this.j.isManifestless ? cwA(this, "386") : cwA(this);
        m = g.W(m);
        for (var M = m.next(); !M.done; M = m.next())
            Lv(this.U, M.value);
        n.eI()
    }
    ;
    av.prototype.A3 = function() {
        this.W && (this.W = this.N = null,
        this.K.unload(),
        this.k6.fP("sabrCaptionsTrackChanged", null))
    }
    ;
    av.prototype.i8 = function() {
        return ""
    }
    ;
    var n7X = "WEBVTT".split("").map(function(n) {
        return n.charCodeAt(0)
    });
    g.Z(Vt, Uc);
    Vt.prototype.X = function(n, m) {
        n instanceof ArrayBuffer && (n = g.Wg(new Uint8Array(n)));
        var M = [];
        n = n.split(QhN);
        for (var h = 1; h < n.length; h++) {
            var F = n[h]
              , e = m;
            if (F !== "" && !ZDt.test(F)) {
                var P = r7.exec(F);
                if (P && P.length >= 4) {
                    var H = xQ(P[1])
                      , z = xQ(P[2]) - H;
                    H += e;
                    var A = (P = P[3]) ? P.split(" ") : [];
                    P = {};
                    var b = null;
                    var B = "";
                    var V = null
                      , a = "";
                    A = g.W(A);
                    for (var x = A.next(); !x.done; x = A.next())
                        if (x = x.value.split(":"),
                        x.length === 2) {
                            var Y = x[1];
                            switch (x[0]) {
                            case "line":
                                x = Y.split(",");
                                x[0].endsWith("%") && (b = x[0],
                                P.I5 = Number.parseInt(b, 10),
                                x.length === 2 && (B = x[1].trim()));
                                break;
                            case "position":
                                x = Y.split(",");
                                V = x[0];
                                P.TI = Number.parseInt(V, 10);
                                x.length === 2 && (a = x[1].trim());
                                break;
                            case "align":
                                switch (Y) {
                                case "start":
                                    P.textAlign = 0;
                                    break;
                                case "middle":
                                    P.textAlign = 2;
                                    break;
                                case "end":
                                    P.textAlign = 1
                                }
                            }
                        }
                    b || B || (B = "end");
                    if (!V)
                        switch (P.textAlign) {
                        case 0:
                            P.TI = 0;
                            break;
                        case 1:
                            P.TI = 100;
                            break;
                        case 2:
                            P.TI = 50
                        }
                    if (P.textAlign != null) {
                        b = 0;
                        switch (B) {
                        case "center":
                            b += 3;
                            break;
                        case "end":
                            b += 6;
                            break;
                        default:
                            b += 0
                        }
                        switch (a) {
                        case "line-left":
                            b += 0;
                            break;
                        case "center":
                            b += 1;
                            break;
                        case "line-right":
                            b += 2;
                            break;
                        default:
                            switch (P.textAlign) {
                            case 0:
                                b += 0;
                                break;
                            case 2:
                                b += 1;
                                break;
                            case 1:
                                b += 2
                            }
                        }
                        B = b < 0 || b > 8 ? 7 : b;
                        P.OF = B
                    }
                    F = F.substring(r7.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
                    a = P;
                    P = F;
                    F = {};
                    if (P.indexOf("<") < 0 && P.indexOf("&") < 0)
                        e = hkm(H, z, 5, a),
                        z = new Jx(H,z,5,e.id,P,!1,g.dO(F) ? void 0 : F),
                        M.push(e),
                        M.push(z),
                        e.U.push(z);
                    else
                        for (B = P.split(Xvt),
                        B.length === 1 ? (P = 5,
                        a = hkm(H, z, P, a)) : (b = P = 6,
                        a = Object.assign({
                            T6: 32
                        }, a),
                        a = new cs(H,z,b,"_" + sc++,a)),
                        M.push(a),
                        b = H,
                        V = 0; V < B.length; V++)
                            A = B[V],
                            V % 2 === 0 ? (x = Kv("<html>" + A + "</html>"),
                            x.getElementsByTagName("parsererror").length ? (Y = x.createElement("span"),
                            Y.appendChild(x.createTextNode(A))) : Y = x.firstChild,
                            MGX(this, b, z - (b - H), P, a, V > 0, Y, F, M)) : b = xQ(A) + e
                }
                r7.lastIndex = 0
            }
        }
        return M
    }
    ;
    var ZDt = /^NOTE/
      , QhN = /(?:\r\n|\r|\n){2,}/
      , r7 = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm")
      , Xvt = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
    g.Z(w7, g.S);
    w7.prototype.clear = function() {
        this.U && this.U.dispose();
        this.U = null
    }
    ;
    w7.prototype.reset = function() {
        this.U && this.U.reset()
    }
    ;
    w7.prototype.m7 = function() {
        g.S.prototype.m7.call(this);
        this.clear()
    }
    ;
    var Cz = {
        windowColor: "#080808",
        windowOpacity: 0,
        textAlign: 2,
        OF: 7,
        TI: 50,
        I5: 100,
        isDefault: !0,
        DM: {
            background: "#080808",
            backgroundOpacity: .75,
            charEdgeStyle: 0,
            color: "#fff",
            fontFamily: 4,
            fontSizeIncrement: 0,
            textOpacity: 1,
            offset: 1
        }
    };
    g.Z(YQ, g.$f);
    g.y = YQ.prototype;
    g.y.m7 = function() {
        if (this.W || this.BT) {
            var n = this.k6.j$();
            n && !n.Ew() && n.hT()
        } else
            Kz(this, !1);
        g.$f.prototype.m7.call(this)
    }
    ;
    g.y.rC = function() {
        if (this.zv)
            return this.W || this.BT;
        if (this.X === "HLS")
            return this.W;
        var n = this.getAudioTrack();
        if (o7I(this)) {
            if (!n.captionTracks.length)
                return !1;
            if (!this.U)
                return !0
        }
        n = ye(n, g.wa(this.C));
        return n === "CAPTIONS_INITIAL_STATE_ON_REQUIRED" ? !0 : n === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" ? Z6(this) : Qt(this) || Z6(this) ? !0 : zk3(this)
    }
    ;
    g.y.load = function() {
        g.$f.prototype.load.call(this);
        this.Y = this.getAudioTrack();
        if (this.U)
            this.j && (this.D9.clear(),
            this.W ? bDB(this, !0) : this.player.getPresentingPlayerType() !== 3 && this.U.uw(this.j, "json3", this.Xq),
            this.X !== "HLS" && this.W || this.BT || g7(this) || this.player.PV("captionschanged", wC(this.j)));
        else {
            if (this.X === "OFFLINE")
                var n = new PR(this.player,this.videoData,this.getAudioTrack());
            else
                this.X === "SABR_LIVE" ? n = new av(this.videoData.U,this.player) : this.X === "HLS" ? n = new IW(this.player) : this.X === "LIVE" ? n = new Ws(this.videoData.U,this.player) : this.X === "INNERTUBE" ? n = new $4(this.player,this.videoData,this.getAudioTrack()) : (n = this.videoData,
                n = new Cv(this.player,this.videoData.LF,this.videoData.videoId,n.captionsLanguagePreference || n.rW.captionsLanguagePreference || g.By(n, "yt:cc_default_lang") || n.rW.zv,this.videoData.xM,this.videoData.eventId));
            this.U = n;
            g.t(this, this.U);
            this.U.Wp(this.Xq)
        }
    }
    ;
    g.y.unload = function() {
        if (this.W && this.j)
            bDB(this, !1);
        else {
            if (this.Iz) {
                var n = this.Iz;
                n.isActive() && g.ws(n)
            }
            this.player.RQ("captions");
            this.nP = [];
            this.U && this.U.A3();
            this.D9.clear();
            this.Z && this.player.Ao(this.Z);
            this.Iw()
        }
        g.$f.prototype.unload.call(this);
        this.player.mJ();
        this.player.PV("captionschanged", {})
    }
    ;
    g.y.create = function() {
        this.rC() && this.load();
        var n;
        a: {
            var m, M, h;
            if (this.C.V("web_player_nitrate_promo_tooltip") && ((m = this.videoData.getPlayerResponse()) == null ? 0 : (M = m.captions) == null ? 0 : (h = M.playerCaptionsTracklistRenderer) == null ? 0 : h.enableTouchCaptionsNitrate)) {
                var F, e;
                if (m = (n = this.videoData.getPlayerResponse()) == null ? void 0 : (F = n.captions) == null ? void 0 : (e = F.playerCaptionsTracklistRenderer) == null ? void 0 : e.captionTracks)
                    for (n = g.W(m),
                    F = n.next(); !F.done; F = n.next())
                        if (F = F.value,
                        F.kind === "asr" && F.languageCode === "en") {
                            n = !0;
                            break a
                        }
            }
            n = !1
        }
        n && this.k6.fP("showpromotooltip", this.D.element)
    }
    ;
    g.y.eI = function() {
        var n = ye(this.player.getAudioTrack(), g.wa(this.C));
        var m = n === "CAPTIONS_INITIAL_STATE_ON_REQUIRED" ? Lz(this, this.N) : n === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" && Z6(this) ? Xy(this) : Qt(this) || this.N || zk3(this) ? Lz(this, this.N) : Z6(this) ? Xy(this) : null;
        if (this.X !== "HLS" && this.W || this.BT) {
            var M = this.U.U.U(!0);
            n = [];
            for (var h = 0; h < M.length; h++) {
                var F = M[h]
                  , e = g.s5("TRACK");
                e.setAttribute("kind", "subtitles");
                e.setAttribute("label", g.W2(F));
                e.setAttribute("srclang", g.RY(F));
                e.setAttribute("id", F.toString());
                this.BT || e.setAttribute("src", this.U.i8(F, "vtt"));
                F === m && e.setAttribute("default", "1");
                n.push(e)
            }
            m = this.k6.j$();
            m.ey(n);
            n = m.cA();
            this.m9 && this.X6.uq(n.textTracks, "change", this.x5)
        } else
            !this.j && m && WR(this, m),
            this.player.PV("onCaptionsTrackListChanged"),
            this.player.qR("onApiChange")
    }
    ;
    g.y.getTrackById = function(n) {
        for (var m = this.U.U.U(!0), M = 0; M < m.length; M++)
            if (m[M].toString() === n)
                return m[M];
        return null
    }
    ;
    g.y.x5 = function() {
        for (var n = this.k6.j$().cA().textTracks, m = null, M = 0; M < n.length; M++)
            n[M].mode === "showing" && (m = this.getTrackById(n[M].id));
        (this.loaded ? this.j : null) !== m && WR(this, m, !0)
    }
    ;
    g.y.Aw = function() {
        var n;
        (n = this.U) == null || n.Wp(this.Xq)
    }
    ;
    g.y.RL = function() {
        !this.j && this.W || this.unload()
    }
    ;
    g.y.d6 = function(n, m, M, h) {
        if (n) {
            var F;
            Rv(this, (F = this.j) != null ? F : void 0);
            this.U.T$() && (this.nP = [],
            this.k6.RQ("captions"),
            Y4(this.bq),
            this.D9.reset());
            a: {
                F = this.D9;
                h = h || 0;
                M = iDX(F, n, M || 0);
                n = [];
                try {
                    for (var e = g.W(M), P = e.next(); !P.done; P = e.next()) {
                        var H = P.value
                          , z = H.trackData
                          , A = H.Au
                          , b = F.C.V("safari_live_drm_captions_fix");
                        if (typeof z !== "string") {
                            M = n;
                            var B = M.concat;
                            if (b && m9L(z))
                                var V = ekN(F, z, A);
                            else {
                                var a = F
                                  , x = m
                                  , Y = z
                                  , R = A
                                  , N = h;
                                if (!fCN(Y))
                                    throw Error("Invalid binary caption track data");
                                a.U || (a.U = new AZ(N,x));
                                V = a.U.X(Y, R)
                            }
                            var C = B.call(M, V)
                        } else {
                            if (z.substring(0, 6) === "WEBVTT")
                                var D = n.concat(ekN(F, z, A));
                            else {
                                M = n;
                                var O = M.concat;
                                b: {
                                    x = a = void 0;
                                    Y = F;
                                    R = m;
                                    if (z[0] === "{")
                                        try {
                                            Y.U || (Y.U = new i2(PWS(R)));
                                            var q = x = Y.U.X(z, A);
                                            break b
                                        } catch (M7) {
                                            g.Mx(M7);
                                            q = [];
                                            break b
                                        }
                                    var G = Kv(z);
                                    if (!G || !G.firstChild) {
                                        var c = Error("Invalid caption track data");
                                        c.params = z;
                                        throw c;
                                    }
                                    if (G.firstChild.tagName === "timedtext") {
                                        if (Number(G.firstChild.getAttribute("format")) === 3) {
                                            Y.U || (Y.U = new u9(PWS(R),Y.C));
                                            q = a = Y.U.X(G, A);
                                            break b
                                        }
                                        var iL = Error("Unsupported subtitles format in web player (Format2)");
                                        iL.params = z;
                                        throw iL;
                                    }
                                    if (G.firstChild.tagName === "transcript") {
                                        var PA = Error("Unsupported subtitles format in web player (Format1)");
                                        PA.params = z;
                                        throw PA;
                                    }
                                    var HA = Error("Invalid caption track data");
                                    HA.params = z;
                                    throw HA;
                                }
                                D = O.call(M, q)
                            }
                            C = D
                        }
                        n = C
                    }
                    var Q_ = n;
                    break a
                } catch (M7) {
                    g.gA(F.logger, 187101178, "Captions parsing failed: " + M7.message + ". ");
                    F.clear();
                    Q_ = [];
                    break a
                }
                Q_ = void 0
            }
            this.C.V("html5_sabr_live_support_subfragmented_captions") && this.U instanceof av && (m = this.U.K,
            e = [],
            Q_.length > 0 && (e = Q_.slice(m.X.length)),
            m.X = !m.U || m.U.info.X ? [] : Q_,
            Q_ = e);
            Q_.length > 0 && (m = this.j,
            this.tN(m, !!m, g7(this) ? "g" : this.N ? "m" : "s"));
            this.player.Ao(Q_, void 0, this.X === "LIVE" || this.X === "SABR_LIVE");
            !this.N || this.BT || g7(this) || g.uc(this.C) || g.Gg(this.C) || g.pQ(this.C) || this.C.K === "shortspage" || this.player.isInline() || (Q_ = this.Iz,
            Q_.isActive() && g.ws(Q_),
            Q_ = dKq({
                OF: 0,
                TI: 5,
                I5: 5,
                SA: 2,
                textAlign: 0,
                Kq: 0,
                lang: "en"
            }),
            this.oz = [Q_],
            m = ["Click ", " for settings"],
            this.SU || (e = new g.Pk({
                L: "svg",
                vT: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 36 36",
                    width: "100%"
                },
                KP: [{
                    L: "path",
                    jb: !0,
                    vT: {
                        d: "m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z",
                        fill: "#fff"
                    }
                }]
            }),
            g.t(this, e),
            this.SU = e.element),
            e = Q_.end - Q_.start,
            (P = g.W2(this.j)) && this.oz.push(new Jx(Q_.start,e,0,Q_.id,P)),
            this.oz.push(new Jx(Q_.start,e,0,Q_.id,m[0]), new Jx(Q_.start,e,0,Q_.id,this.SU,!0), new Jx(Q_.start,e,0,Q_.id,m[1],!0)),
            this.player.Ao(this.oz),
            g.xN(this.Iz));
            !this.N || this.BT || g7(this) || (this.C.V("enable_player_captions_persistence_state_machine") ? Iv(this, !0) : g.wa(this.C) ? $Q(this, !0) : jw(this, !0),
            this.Y && (this.Y.W = this.j),
            this.player.mJ());
            this.N = !1
        }
    }
    ;
    g.y.onCueRangeEnter = function(n) {
        this.nP.push(n);
        Y4(this.bq)
    }
    ;
    g.y.onCueRangeExit = function(n) {
        g.g1(this.nP, n);
        this.U instanceof Ws && this.U.N && this.player.Lq([n]);
        Y4(this.bq)
    }
    ;
    g.y.getCaptionWindowContainerId = function() {
        return this.D.element.id
    }
    ;
    g.y.tB = function() {
        wvI(this, this.oz);
        this.oz = null
    }
    ;
    g.y.ED = function() {
        var n = this;
        if (!this.QX || !this.W) {
            this.bq.stop();
            g.Dd(this.wW);
            this.nP.sort(g.Z9);
            var m = this.nP;
            if (this.Z) {
                var M = g.L_(m, function(e) {
                    return this.Z.indexOf(e) === -1
                }, this);
                M.length && (m = M)
            }
            m = g.W(m);
            for (M = m.next(); !M.done; M = m.next())
                abX(this, M.value);
            m = g.W(Object.entries(this.Uw));
            var h = m.next();
            for (M = {}; !h.done; M = {
                vZ: void 0,
                Gt: void 0
            },
            h = m.next()) {
                var F = g.W(h.value);
                h = F.next().value;
                F = F.next().value;
                M.vZ = h;
                M.Gt = F;
                this.wW[M.vZ] ? (M.Gt.element.parentNode || (M.Gt instanceof b2 || M.Gt instanceof Eo || g.LB(this.Uw, function(e) {
                    return function(P, H) {
                        H !== e.vZ && P.j.params.OF === e.Gt.j.params.OF && P.j.params.TI === e.Gt.j.params.TI && P.j.params.I5 === e.Gt.j.params.I5 && (P.dispose(),
                        delete n.Uw[H]);
                        return H === e.vZ
                    }
                }(M), this),
                this.D.element.appendChild(M.Gt.element)),
                M.Gt.ZV(this.wW[M.vZ])) : (M.Gt.dispose(),
                delete this.Uw[M.vZ])
            }
        }
    }
    ;
    g.y.AB = function() {
        Ng(this, {}, !0);
        this.player.PV("captionssettingschanged")
    }
    ;
    g.y.Cl = function() {
        var n = Cz.DM;
        n = {
            background: n.background,
            backgroundOpacity: n.backgroundOpacity,
            charEdgeStyle: n.charEdgeStyle,
            color: n.color,
            fontFamily: n.fontFamily,
            fontSizeIncrement: n.fontSizeIncrement,
            fontStyle: n.bold && n.italic ? 3 : n.bold ? 1 : n.italic ? 2 : 0,
            textOpacity: n.textOpacity,
            windowColor: Cz.windowColor,
            windowOpacity: Cz.windowOpacity
        };
        var m = Zg() || {};
        m.background != null && (n.background = m.background);
        m.backgroundOverride != null && (n.backgroundOverride = m.backgroundOverride);
        m.backgroundOpacity != null && (n.backgroundOpacity = m.backgroundOpacity);
        m.backgroundOpacityOverride != null && (n.backgroundOpacityOverride = m.backgroundOpacityOverride);
        m.charEdgeStyle != null && (n.charEdgeStyle = m.charEdgeStyle);
        m.charEdgeStyleOverride != null && (n.charEdgeStyleOverride = m.charEdgeStyleOverride);
        m.color != null && (n.color = m.color);
        m.colorOverride != null && (n.colorOverride = m.colorOverride);
        m.fontFamily != null && (n.fontFamily = m.fontFamily);
        m.fontFamilyOverride != null && (n.fontFamilyOverride = m.fontFamilyOverride);
        m.fontSizeIncrement != null && (n.fontSizeIncrement = m.fontSizeIncrement);
        m.fontSizeIncrementOverride != null && (n.fontSizeIncrementOverride = m.fontSizeIncrementOverride);
        m.fontStyle != null && (n.fontStyle = m.fontStyle);
        m.fontStyleOverride != null && (n.fontStyleOverride = m.fontStyleOverride);
        m.textOpacity != null && (n.textOpacity = m.textOpacity);
        m.textOpacityOverride != null && (n.textOpacityOverride = m.textOpacityOverride);
        m.windowColor != null && (n.windowColor = m.windowColor);
        m.windowColorOverride != null && (n.windowColorOverride = m.windowColorOverride);
        m.windowOpacity != null && (n.windowOpacity = m.windowOpacity);
        m.windowOpacityOverride != null && (n.windowOpacityOverride = m.windowOpacityOverride);
        return n
    }
    ;
    g.y.eg = function(n, m) {
        var M = {};
        Object.assign(M, Zg());
        Object.assign(M, n);
        Ng(this, M, m);
        this.player.PV("captionssettingschanged")
    }
    ;
    g.y.Iw = function() {
        !this.W && this.loaded && (g.jr(this.Uw, function(n, m) {
            n.dispose();
            delete this.Uw[m]
        }, this),
        this.ED())
    }
    ;
    g.y.dZ = function(n, m) {
        switch (n) {
        case "fontSize":
            if (isNaN(m))
                break;
            n = g.xw(m, -2, 4);
            this.eg({
                fontSizeIncrement: n
            });
            return n;
        case "reload":
            m && !this.W && WR(this, this.j, !0);
            break;
        case "stickyLoading":
            m !== void 0 && (this.C.V("enable_player_captions_persistence_state_machine") ? Iv(this, !(!m || !m.userInitiated)) : g.wa(this.C) ? $Q(this, !!m) : jw(this, !!m));
            break;
        case "track":
            return x9_(this, m);
        case "tracklist":
            return this.U ? g.qp(this.U.U.U(!(!m || !m.includeAsr)), function(M) {
                return wC(M)
            }) : [];
        case "translationLanguages":
            return this.U ? this.U.B.map(function(M) {
                return Object.assign({}, M)
            }) : [];
        case "sampleSubtitles":
            this.W || m === void 0 || Kz(this, !!m);
            break;
        case "sampleSubtitlesCustomized":
            this.W || Kz(this, !!m, m);
            break;
        case "recommendedTranslationLanguages":
            return g.yH();
        case "defaultTranslationSourceTrackIndices":
            return this.U ? this.U.D : []
        }
    }
    ;
    g.y.getOptions = function() {
        var n = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
        n.push("stickyLoading");
        return n
    }
    ;
    g.y.iD = function() {
        var n = this.j;
        if (this.k6.xx("captions")) {
            if (this.C.V("html5_modify_caption_vss_logging")) {
                var m;
                return (n = (m = this.videoData.No) != null ? m : null) ? {
                    cc: g.JeS(n)
                } : {}
            }
            if (n)
                return m = n.vssId,
                n.translationLanguage && m && (m = "t" + m + "." + g.RY(n)),
                {
                    cc: m
                }
        }
        return {}
    }
    ;
    g.y.xJ = function(n) {
        this.isSubtitlesOn() ? (this.C.V("enable_player_captions_persistence_state_machine") && n ? Iv(this, !1) : g.wa(this.C) ? $Q(this, !1) : jw(this, !1),
        Rv(this),
        WR(this, null, !0)) : this.iM(n)
    }
    ;
    g.y.iM = function(n) {
        var m = g7(this) || !this.j ? Lz(this, !0) : this.j;
        m && this.wp(m.vssId, "m");
        this.isSubtitlesOn() || WR(this, m, this.C.V("enable_player_captions_persistence_state_machine") ? n : !0)
    }
    ;
    g.y.isSubtitlesOn = function() {
        return !!this.loaded && !!this.j && !g7(this)
    }
    ;
    g.y.DH = function() {
        var n = g7(this);
        Z6(this, n) ? WR(this, this.getAudioTrack().U, !1) : this.videoData.captionTracks.length && (this.loaded && this.unload(),
        o7I(this) && (this.N = !1,
        this.j = null,
        this.U && (this.U.dispose(),
        this.U = null)),
        this.rC() && (n ? WR(this, Lz(this, !1), !1) : this.load()))
    }
    ;
    g.y.yR = function(n) {
        n && (this.jU = {
            top: n.top,
            right: n.right,
            bottom: n.bottom,
            left: n.left,
            width: 1 - n.left - n.right,
            height: 1 - n.top - n.bottom
        },
        this.D.element.style.top = this.jU.top * 100 + "%",
        this.D.element.style.left = this.jU.left * 100 + "%",
        this.D.element.style.width = this.jU.width * 100 + "%",
        this.D.element.style.height = this.jU.height * 100 + "%",
        this.D.element.style.position = "absolute",
        n = VGI(this)) && (this.D.element.style.width = n.width + "px",
        this.D.element.style.height = n.height + "px")
    }
    ;
    g.y.onVideoDataChange = function(n, m) {
        n === "newdata" && (this.videoData = m,
        this.loaded && this.unload(),
        this.N = !1,
        this.j = null,
        this.U && (this.U.dispose(),
        this.U = null,
        this.player.PV("captionschanged", {})),
        this.rC() && this.load())
    }
    ;
    g.y.getAudioTrack = function() {
        return this.player.getAudioTrack()
    }
    ;
    g.y.aA = function() {
        var n = this.k6.j$();
        n && !n.Ew() && n.hT();
        this.k6.isFullscreen() ? (this.W = this.zv = !0,
        this.loaded && this.eI()) : (this.zv = this.C.controlsType === "3",
        this.W = E7B(this));
        WR(this, this.j)
    }
    ;
    g.y.Vq = function() {
        var n, m, M, h = (n = this.videoData.getPlayerResponse()) == null ? void 0 : (m = n.captions) == null ? void 0 : (M = m.playerCaptionsTracklistRenderer) == null ? void 0 : M.openTranscriptCommand;
        h && this.player.Ip("innertubeCommand", h)
    }
    ;
    g.y.tN = function(n, m, M) {
        var h = /&|,|:|;|(\n)|(\s)|(\/)|(\\)/gm
          , F = "";
        n && (F = n.vssId,
        F = F.replace(h, ""));
        var e = "";
        n && n.getId() && (e = n.getId() || "");
        n && n.getXtags() && (n = n.getXtags(),
        n = n.replace(h, ""),
        e = e.concat(";" + n));
        this.X === "HLS" && (e = "");
        this.k6.tN(m ? F : "", m ? e : "", M)
    }
    ;
    g.y.wp = function(n, m) {
        n = (n || "").replace(/&|,|:|;|(\n)|(\s)|(\/)|(\\)/gm, "");
        n.length > 0 && this.k6.wp(n, m)
    }
    ;
    g.Iy("captions", YQ);
}
)(_yt_player);
