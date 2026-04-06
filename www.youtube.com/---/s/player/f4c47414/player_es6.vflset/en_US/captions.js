(function(g) {
    var window = this;
    'use strict';
    var Ffm = async function(n, m, M) {
        n.j = g.sx(m, M)
    }
      , a5 = function(n) {
        n.isActive() || n.start()
    }
      , iq7 = function(n, m) {
        const M = new g.qR;
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
      , Vy = function(n, m) {
        return m ? n.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN"
    }
      , eLY = function(n) {
        return g.TY(n) || n.O("web_enable_caption_language_preference_stickiness")
    }
      , PCq = async function(n, m) {
        n = n + "|" + m;
        m = await g.a7();
        if (!m)
            throw g.qZ("gct");
        return (await g.hK(m)).get("captions", n)
    }
      , EtV = function(n, m, M) {
        PCq(n, m).then(h => {
            h && M(h.trackData, new g.qR(h.metadata))
        }
        )
    }
      , xM = function(n) {
        if (!HqY.test(n))
            throw Error("'" + n + "' is not a valid hex color");
        n.length == 4 && (n = n.replace(zLP, "#$1$1$2$2$3$3"));
        n = n.toLowerCase();
        n = parseInt(n.slice(1), 16);
        return [n >> 16, n >> 8 & 255, n & 255]
    }
      , ot7 = function() {
        var n = {};
        let m = "suggest_correction"in g.KD ? g.KD.suggest_correction : "Edit caption";
        m = m || "";
        for (let M in n) {
            const h = () => String(n[M]);
            m = m.replace(new RegExp("\\$\\{" + M + "\\}","gi"), h);
            m = m.replace(new RegExp("\\$" + M,"gi"), h)
        }
        return m
    }
      , wr = function() {
        return g.Ap("yt-player-caption-display-settings")
    }
      , AEH = function(n, m) {
        let M = g.rS(n.segments, m);
        M >= 0 || M < 0 && (-M - 1) % 2 === 1 || (M = -M - 1,
        M > 0 && m - n.segments[M - 1] === 1 && M < n.segments.length && n.segments[M] - m === 1 ? (g.XY(n.segments, M),
        g.XY(n.segments, M - 1)) : M > 0 && m - n.segments[M - 1] === 1 ? n.segments[M - 1] = m : M < n.segments.length && n.segments[M] - m === 1 ? n.segments[M] = m : (g.WP(n.segments, M, 0, m),
        g.WP(n.segments, M + 1, 0, m)))
    }
      , bq5 = function(n) {
        return n.U && n.U.B ? n.U.B + n.player.gL() < n.player.getCurrentTime() : !1
    }
      , B0V = function(n, m) {
        if (n.policy.AC && n.player.UR()) {
            var M = g.OG(m, n.policy, {});
            M.set("pot", n.player.UR());
            M = M.LF()
        } else
            M = g.OG(m, n.policy, {}).LF();
        const h = {
            format: "RAW",
            withCredentials: !0
        };
        if (n.policy.eU) {
            h.method = "POST";
            const P = m.W;
            P && Object.keys(P).length > 0 ? h.postBody = g.$O(P, g.$p) : h.postBody = (0,
            g.BM)([120, 0])
        }
        n.B && (h.responseType = "arraybuffer");
        let F = ++n.fP;
        const e = (0,
        g.l)();
        n.j = g.MD(M, h, 3, 100, -1, P => {
            P.errorCode === "net.timeout" && n.player.uq("capnt", {
                rn: F++
            })
        }
        ).then(P => {
            if (n.policy.tv && F % 100 === 1) {
                var E = (0,
                g.l)();
                n.player.uq("caprsp", {
                    rn: F,
                    ms: E - e,
                    kb: (P.xhr.responseText.length / 1024).toFixed()
                })
            }
            a: {
                P = P.xhr;
                n.As();
                if (n.X) {
                    var H = !(n.B ? P.response : P.responseText) || P.status >= 400;
                    if (E = g.VVI(P)) {
                        P = g.OG(n.X, n.policy, {});
                        n.X.eS(P, E);
                        B0V(n, n.X);
                        break a
                    }
                    H ? n.player.uq("capfail", {
                        status: P.status
                    }) : (g.gt("fcb_r", (0,
                    g.l)(), n.player.getVideoData()?.Y || ""),
                    E = n.X.kq[0],
                    H = E.Ow,
                    n.C != null && n.A !== H && (n.B ? n.C(P.response, (E.startTime + n.player.gL()) * 1E3) : n.C(P.responseText, (E.startTime + n.player.gL()) * 1E3),
                    n.A = H))
                }
                n.X = null;
                n.j = null
            }
        }
        ).pM(P => {
            n.X = null;
            n.j = null;
            n.player.uq("capfail", {
                rn: F,
                status: P.xhr?.status
            })
        }
        );
        n.X = m;
        AEH(n.W, n.X.kq[0].Ow)
    }
      , aXm = function(n, m) {
        return m != null && m in n.j.U ? n.j.U[m] : null
    }
      , VRV = function(n, m, M) {
        const h = [];
        for (const F in n.j.U) {
            if (!n.j.U.hasOwnProperty(F))
                continue;
            const e = n.j.U[F];
            if (g.D3(e, M || null)) {
                const P = e.info.captionTrack;
                P && P.languageCode === m && h.push(e)
            }
        }
        return h.length ? h[0] : null
    }
      , www = function(n, m) {
        const M = [];
        for (const F in n.j.U) {
            if (!n.j.U.hasOwnProperty(F))
                continue;
            var h = n.j.U[F];
            if (g.D3(h, m || null)) {
                let e = h.info.id
                  , P = e
                  , E = `.${e}`
                  , H = ""
                  , z = "";
                if (h = h.info.captionTrack)
                    e = h.languageCode,
                    P = h.displayName,
                    E = h.vssId,
                    H = h.kind,
                    z = h.id;
                else {
                    {
                        h = e;
                        let A = g.sUw.get(h);
                        A == null && (A = x4V[h] || x4V[h.replace(/-/g, "_")],
                        g.sUw.set(h, A));
                        h = A
                    }
                    P = h || P
                }
                M.push(new g.qR({
                    id: F,
                    languageCode: e,
                    languageName: P,
                    is_servable: !0,
                    is_default: !0,
                    is_translateable: !1,
                    vss_id: E,
                    kind: H,
                    captionId: z
                }))
            }
        }
        return M
    }
      , yEq = function(n, m, M, h) {
        let F = m / 360 * 16;
        m >= n && (n = 640,
        h > M * 1.3 && (n = 480),
        F = M / n * 16);
        return F
    }
      , N0w = function(n) {
        let m = 1 + .25 * (n.fontSizeIncrement || 0);
        if (n.offset === 0 || n.offset === 2)
            m *= .8;
        return m
    }
      , Ymm = function(n, m) {
        let M = "vertical-rl";
        n.U.UG === 1 && (M = "vertical-lr");
        g.jM && (M = M === "vertical-lr" ? "tb-lr" : "tb-rl");
        g.mI(m, "-o-writing-mode", M);
        g.mI(m, "-webkit-writing-mode", M);
        g.mI(m, "writing-mode", M);
        g.mI(m, "text-orientation", "upright");
        g.wo(m, "ytp-vertical-caption");
        n.j.params.zY === 3 && (g.mI(m, "text-orientation", ""),
        g.mI(m, "transform", "rotate(180deg)"))
    }
      , QTY = function(n, m) {
        const M = {};
        var h = m.background ? m.background : n.U.rp.background;
        if (m.backgroundOpacity != null || m.background) {
            var F = m.backgroundOpacity != null ? m.backgroundOpacity : n.U.rp.backgroundOpacity;
            h = xM(h);
            M.background = "rgba(" + h[0] + "," + h[1] + "," + h[2] + "," + F + ")";
            n.Sf && (M["box-decoration-break"] = "clone",
            M["border-radius"] = `${n.CP / 8}px`)
        }
        if (m.fontSizeIncrement != null || m.offset != null)
            M["font-size"] = `${n.Js * N0w(m)}px`;
        h = 1;
        F = m.color || n.U.rp.color;
        if (m.color || m.textOpacity != null)
            F = xM(F),
            h = m.textOpacity == null ? n.U.rp.textOpacity : m.textOpacity,
            F = "rgba(" + F[0] + "," + F[1] + "," + F[2] + "," + h + ")",
            M.color = F,
            M.fill = F;
        var e = m.charEdgeStyle;
        e === 0 && (e = void 0);
        if (e) {
            F = `rgba(34, 34, 34, ${h})`;
            let H = `rgba(204, 204, 204, ${h})`;
            m.Jt && (H = F = m.Jt);
            const z = n.Js / 16 / 2
              , A = Math.max(z, 1);
            var P = Math.max(2 * z, 1)
              , E = Math.max(3 * z, 1);
            const b = Math.max(5 * z, 1);
            h = [];
            switch (e) {
            case 4:
                for (; E <= b; E += z)
                    h.push(`${P}px ${P}px ${E}px ${F}`);
                break;
            case 1:
                P = window.devicePixelRatio >= 2 ? .5 : 1;
                for (e = A; e <= E; e += P)
                    h.push(`${e}px ${e}px ${F}`);
                break;
            case 2:
                h.push(`${A}px ${A}px ${H}`);
                h.push(`-${A}px -${A}px ${F}`);
                break;
            case 3:
                for (E = 0; E < 5; E++)
                    h.push(`0 0 ${P}px ${F}`)
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
            F = g.wu() ? '"Carrois Gothic SC", sans-serif-smallcaps' : 'Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
            break;
        case 0:
        case 4:
            F = '"YouTube Noto", Roboto, Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif'
        }
        F && (M["font-family"] = F);
        F = m.offset;
        F == null && (F = n.U.rp.offset);
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
        m.x5 && (M.visibility = "hidden");
        m.Cy === 1 && n.W && (M["text-combine-upright"] = "all",
        M["text-orientation"] = "mixed",
        F = g.jB || g.fb,
        n.j.params.zY === 3 ? M.transform = F ? "rotate(90deg)" : "rotate(180deg)" : F && (M.transform = "rotate(-90deg)"));
        if (m.textEmphasis === 1 || m.textEmphasis === 2 || m.textEmphasis === 3 || m.textEmphasis === 4 || m.textEmphasis === 5)
            if (g.jB)
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
      , yy = function(n) {
        n = n.split("px");
        return n.length > 0 ? (n = Number(n[0])) ? n : 0 : 0
    }
      , LfK = function(n, m, M) {
        n.eU = n.eU || !!M;
        const h = {};
        Object.assign(h, n.U.rp);
        Object.assign(h, M || m.U);
        Object.assign(h, n.xc.rp);
        (M = !n.N) && Zqw(n);
        let F = n.nP && n.cT && g.Bm(h, n.cT) ? n.nP : Xw5(n, h);
        const e = typeof m.text === "string"
          , P = e ? m.text.split("\n") : [m.text];
        for (let H = 0; H < P.length; H++) {
            var E = H > 0 || !m.append;
            const z = P[H];
            E && !M ? (Zqw(n),
            F = Xw5(n, h)) : E && M && (M = !1);
            z && (F.appendChild(e ? g.Ia(z) : z),
            e || z.tagName !== "RUBY" || z.childElementCount !== 4 || g.jB || !g.ib(z.children[2], "text-emphasis") || (E = n.W ? "padding-right" : "padding-top",
            g.ib(z.children[2], "text-emphasis-position") && (E = n.W ? "padding-left" : "padding-bottom"),
            g.YH ? g.mI(F, E, "1em") : g.mI(F, E, "0.5em")))
        }
        n.cT = h;
        n.nP = F;
        n.A.push(m)
    }
      , Zqw = function(n) {
        n.N = g.gg("SPAN");
        g.mI(n.N, {
            display: "block"
        });
        g.wo(n.N, "caption-visual-line");
        n.X.appendChild(n.N)
    }
      , Xw5 = function(n, m) {
        const M = g.gg("SPAN");
        g.mI(M, {
            display: "inline-block",
            "white-space": "pre-wrap"
        });
        g.mI(M, QTY(n, m));
        M.classList.add("ytp-caption-segment");
        n.N.appendChild(M);
        M.previousElementSibling && (g.mI(M.previousElementSibling, {
            "border-top-right-radius": "0",
            "border-bottom-right-radius": "0"
        }),
        g.mI(M, {
            "border-top-left-radius": "0",
            "border-bottom-left-radius": "0"
        }));
        return M
    }
      , IXo = function(n, m, M) {
        if (n === 255 && m === 255 || !n && !m)
            return {
                O6: n,
                V0: m,
                result: 0
            };
        n = gtV[n];
        m = gtV[m];
        if (n & 128) {
            var h;
            if (h = !(m & 128))
                h = m,
                h = M.NR() && M.V0 === h;
            if (h)
                return {
                    O6: n,
                    V0: m,
                    result: 1
                }
        } else if (m & 128 && 1 <= n && n <= 31)
            return {
                O6: n,
                V0: m,
                result: 2
            };
        return {
            O6: n,
            V0: m,
            result: 3
        }
    }
      , jTw = function(n, m, M, h) {
        m === 255 && M === 255 || !m && !M ? (++n.X === 45 && n.reset(),
        n.W.j.clear(),
        n.B.j.clear()) : (n.X = 0,
        $4H(n.W, m, M, h))
    }
      , RL7 = function(n, m) {
        n.U.sort( (M, h) => {
            const F = M.time - h.time;
            return F === 0 ? M.order - h.order : F
        }
        );
        for (const M of n.U)
            n.time = M.time,
            M.type === 0 ? jTw(n, M.G$, M.Yi, m) : M.type === 1 && n.j & 496 && $4H(n.B, M.G$, M.Yi, m);
        n.U.length = 0
    }
      , d4Y = function(n, m) {
        switch (n) {
        case 0:
            return Wfw[(m & 127) - 32];
        case 1:
            return CCS[m & 15];
        case 2:
            return KfS[m & 31];
        case 3:
            return rEw[m & 31]
        }
        return 0
    }
      , Nu = function(n, m) {
        if (n.style.type === 3) {
            var M = 0
              , h = 0
              , F = n.B.time + 0
              , e = ""
              , P = ""
              , E = F;
            for (var H = 1; H <= 15; ++H) {
                var z = !1;
                for (var A = h ? h : 1; A <= 32; ++A) {
                    var b = n.X[H][A];
                    if (b.U !== 0) {
                        M === 0 && (M = H,
                        h = A);
                        z = String.fromCharCode(b.U);
                        var B = b.timestamp;
                        B < F && (F = B);
                        b.timestamp = E;
                        P && (e += P,
                        P = "");
                        e += z;
                        z = !0
                    }
                    if ((b.U === 0 || A === 32) && z) {
                        P = "\n";
                        break
                    } else if (h && !z)
                        break
                }
                if (M && !z)
                    break
            }
            e && m.W(M, h, F, E, e)
        } else
            for (h = M = 0,
            e = F = n.B.time + 0,
            P = 1; P <= 15; ++P)
                for (E = "",
                H = 1; H <= 32; ++H)
                    if (A = n.X[P][H],
                    b = A.U,
                    b !== 0 && (M === 0 && (M = P,
                    h = H),
                    z = String.fromCharCode(b),
                    B = A.timestamp,
                    B <= F && (F = B),
                    E += z,
                    A.reset()),
                    H === 32 || b === 0)
                        E && m.W(M, h, F, e, E),
                        F = e,
                        E = "",
                        h = M = 0
    }
      , YM = function(n) {
        return n.X[n.row][n.j]
    }
      , Qy = function(n, m, M) {
        m >= 2 && n.j > 1 && (--n.j,
        YM(n).U = 0);
        const h = YM(n);
        h.timestamp = n.B.time + 0;
        h.U = d4Y(m, M);
        n.j < 32 && n.j++
    }
      , D46 = function(n, m, M, h) {
        for (let P = 0; P < h; P++)
            for (let E = 0; E <= 32; E++) {
                var F = n.X[m + P][E]
                  , e = n.X[M + P][E];
                F.U = e.U;
                F.timestamp = e.timestamp
            }
    }
      , Z_ = function(n, m, M) {
        for (let h = 0; h < M; h++)
            for (let F = 0; F <= 32; F++)
                n.X[m + h][F].reset()
    }
      , Xj = function(n) {
        n.row = n.U > 0 ? n.U : 1;
        n.j = 1;
        Z_(n, 0, 15)
    }
      , SmS = function(n) {
        n.style.set(1);
        n.U = n.W;
        n.U.U = 0;
        n.U.style = n.style;
        n.X.mode = 1 << n.U.W
    }
      , Lj = function(n, m, M) {
        const h = n.j;
        let F = !1;
        switch (n.style.get()) {
        case 4:
        case 1:
        case 2:
            n.style.get() === 4 && h.U > 0 || (Nu(h, M),
            Xj(n.j),
            Xj(n.W),
            h.row = 15,
            h.U = m,
            F = !0)
        }
        n.style.set(3);
        n.U = h;
        n.U.style = n.style;
        n.X.mode = 1 << h.W;
        F ? h.j = 1 : h.U !== m && (h.U > m ? (Nu(h, M),
        Z_(h, h.row - h.U, m)) : h.row < m && (m = h.U),
        h.U = m)
    }
      , tRH = function(n) {
        n.style.set(4);
        n.U = n.text;
        n.U.style = n.style;
        n.X.mode = 1 << n.U.W
    }
      , $4H = function(n, m, M, h) {
        n.j.update();
        m = IXo(m, M, n.j);
        switch (m.result) {
        case 0:
            return;
        case 1:
        case 2:
            return
        }
        var F = m.O6;
        m = m.V0;
        if (32 <= F || !F)
            n.U.mode & n.U.j && (M = F,
            M & 128 && (M = 127),
            m & 128 && (m = 127),
            n = n.W.U,
            M & 96 && Qy(n, 0, M),
            m & 96 && Qy(n, 0, m),
            M !== 0 && m !== 0 && n.style.type === 3 && Nu(n, h));
        else if (F & 16)
            a: if (!n.j.matches(F, m) && (M = n.j,
            M.O6 = F,
            M.V0 = m,
            M.state = 2,
            M = F & 8 ? n.A : n.X,
            n.W = M,
            n.U.mode = 1 << (n.B << 2) + (M.B << 1) + (M.style.type === 4 ? 1 : 0),
            (n.U.mode | 1 << (n.B << 2) + (M.B << 1) + (M.style.type !== 4 ? 1 : 0)) & n.U.j))
                if (m & 64) {
                    h = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(F & 7) << 1 | m >> 5 & 1];
                    n = m & 16 ? ((m & 14) >> 1) * 4 : 0;
                    m = M.U;
                    switch (M.style.get()) {
                    case 4:
                        h = m.row;
                        break;
                    case 3:
                        if (h !== m.row) {
                            if (h < m.U && (h = m.U,
                            h === m.row))
                                break;
                            var e = 1 + m.row - m.U;
                            const P = 1 + h - m.U;
                            D46(m, P, e, m.U);
                            M = e;
                            F = m.U;
                            P < e ? (e = P + F - e,
                            e > 0 && (M += e,
                            F -= e)) : (e = e + F - P,
                            e > 0 && (F -= e));
                            Z_(m, M, F)
                        }
                    }
                    m.row = h;
                    m.j = n + 1
                } else
                    switch (F & 7) {
                    case 1:
                        switch (m & 112) {
                        case 32:
                            Qy(M.U, 0, 32);
                            break a;
                        case 48:
                            m === 57 ? (h = M.U,
                            YM(h).U = 0,
                            h.j < 32 && h.j++) : Qy(M.U, 1, m & 15)
                        }
                        break;
                    case 2:
                        m & 32 && Qy(M.U, 2, m & 31);
                        break;
                    case 3:
                        m & 32 && Qy(M.U, 3, m & 31);
                        break;
                    case 4:
                    case 5:
                        if (32 <= m && m <= 47)
                            switch (m) {
                            case 32:
                                SmS(M);
                                break;
                            case 33:
                                h = M.U;
                                h.j > 1 && (--h.j,
                                YM(h).U = 0);
                                break;
                            case 36:
                                h = M.U;
                                n = YM(h);
                                for (m = 0; m <= 15; m++)
                                    for (M = 0; M <= 32; M++)
                                        if (h.X[m][M] === n) {
                                            for (; M <= 32; M++)
                                                h.X[m][M].reset();
                                            break
                                        }
                                break;
                            case 37:
                                Lj(M, 2, h);
                                break;
                            case 38:
                                Lj(M, 3, h);
                                break;
                            case 39:
                                Lj(M, 4, h);
                                break;
                            case 40:
                                Qy(M.U, 0, 32);
                                break;
                            case 41:
                                h = M;
                                h.style.set(2);
                                h.U = h.j;
                                h.U.U = 0;
                                h.U.style = h.style;
                                h.X.mode = 1 << h.U.W;
                                break;
                            case 42:
                                h = M;
                                n = h.text;
                                n.U = 15;
                                n.style.set(4);
                                Xj(n);
                                tRH(h);
                                break;
                            case 43:
                                tRH(M);
                                break;
                            case 44:
                                n = M;
                                m = n.j;
                                switch (n.style.get()) {
                                case 1:
                                case 2:
                                case 3:
                                    Nu(m, h)
                                }
                                Z_(m, 0, 15);
                                break;
                            case 45:
                                b: {
                                    m = M;
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
                                    Nu(n, h);
                                    D46(n, m, m + 1, n.U - 1);
                                    Z_(n, n.row, 1)
                                }
                                break;
                            case 46:
                                Z_(M.W, 0, 15);
                                break;
                            case 47:
                                n = M,
                                Nu(n.j, h),
                                n.W.updateTime(n.X.time + 0),
                                h = n.W,
                                n.W = n.j,
                                n.j = h,
                                SmS(n)
                            }
                        break;
                    case 7:
                        switch (m) {
                        case 33:
                        case 34:
                        case 35:
                            h = M.U,
                            (h.j += m & 3) > 32 && (h.j = 32)
                        }
                    }
    }
      , pwm = function(n, m, M, h, F, e, P) {
        var E = e[0];
        let H = P[E.getAttribute("p")];
        if (H.PD === 1) {
            var z = e[1]
              , A = e[2];
            e = e[3];
            E.getAttribute("t");
            z.getAttribute("t");
            A.getAttribute("t");
            e.getAttribute("t");
            E.getAttribute("p");
            z.getAttribute("p");
            e.getAttribute("p");
            P = P[A.getAttribute("p")];
            E = OqK(E.textContent, z.textContent, A.textContent, e.textContent, P);
            return new gr(n,m,F,M,E,h,H)
        }
        switch (H.PD) {
        case 9:
        case 10:
            H.textEmphasis = 1;
            break;
        case 11:
            H.textEmphasis = 2;
            break;
        case 12:
            H.textEmphasis = 3;
            break;
        case 13:
            H.textEmphasis = 4;
            break;
        case 14:
            H.textEmphasis = 5
        }
        return new gr(n,m,F,M,E.textContent || "",h,H)
    }
      , OqK = function(n, m, M, h, F) {
        var e = g.wu();
        const P = e ? g.gg("DIV") : g.gg("RUBY")
          , E = g.gg("SPAN");
        E.textContent = n;
        P.appendChild(E);
        n = e ? g.gg("DIV") : g.gg("RP");
        n.textContent = m;
        P.appendChild(n);
        m = e ? g.gg("DIV") : g.gg("RT");
        m.textContent = M;
        P.appendChild(m);
        M = F.PD;
        if (M === 10 || M === 11 || M === 12 || M === 13 || M === 14)
            if (g.mI(m, "text-emphasis-style", "filled circle"),
            g.mI(m, "text-emphasis-color", "currentcolor"),
            g.mI(m, "webkit-text-emphasis", "filled circle"),
            F.PD === 11 || F.PD === 13)
                g.mI(m, "webkit-text-emphasis-position", "under left"),
                g.mI(m, "text-emphasis-position", "under left");
        M = !0;
        if (F.PD === 4 || F.PD === 7 || F.PD === 12 || F.PD === 14)
            g.mI(P, "ruby-position", "over"),
            g.mI(P, "-webkit-ruby-position", "before");
        else if (F.PD === 5 || F.PD === 6 || F.PD === 11 || F.PD === 13)
            g.mI(P, "ruby-position", "under"),
            g.mI(P, "-webkit-ruby-position", "after"),
            M = !1;
        F = e ? g.gg("DIV") : g.gg("RP");
        F.textContent = h;
        P.appendChild(F);
        e && (h = M,
        g.mI(P, {
            display: "inline-block",
            position: "relative"
        }),
        e = P.firstElementChild.nextElementSibling,
        g.mI(e, "display", "none"),
        e = e.nextElementSibling,
        g.mI(e, {
            "font-size": "0.5em",
            "line-height": "1.2em",
            "text-align": "center",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "400%"
        }),
        g.mI(P.lastElementChild, "display", "none"),
        h ? (g.mI(P, "padding-top", "0.6em"),
        g.mI(e, "top", "0")) : (g.mI(P, "padding-bottom", "0.6em"),
        g.mI(e, "bottom", "0")));
        return P
    }
      , fXq = function(n) {
        const m = "_" + I5++;
        return new $M(0,0x8000000000000,0,m,n)
    }
      , jg = function(n, m) {
        n = n.getAttribute(m);
        if (n != null)
            return Number(n)
    }
      , R5 = function(n, m) {
        n = n.getAttribute(m);
        if (n != null)
            return n === "1"
    }
      , WJ = function(n, m) {
        n = jg(n, m);
        return n !== void 0 ? n : null
    }
      , Kj = function(n, m) {
        n = n.getAttribute(m);
        if (n != null)
            return Cj.test(n),
            n
    }
      , vtm = function(n, m) {
        const M = {}
          , h = m.getAttribute("ws");
        Object.assign(M, h ? n.Y[h] : n.W);
        n = WJ(m, "mh");
        n != null && (M.Zb = n);
        n = WJ(m, "ju");
        n != null && (M.textAlign = n);
        n = WJ(m, "pd");
        n != null && (M.zY = n);
        n = WJ(m, "sd");
        n != null && (M.UG = n);
        n = Kj(m, "wfc");
        n != null && (M.windowColor = n);
        m = jg(m, "wfo");
        m !== void 0 && (M.windowOpacity = m / 255);
        return M
    }
      , lXS = function(n, m) {
        const M = {}
          , h = m.getAttribute("wp");
        h && Object.assign(M, n.C[h]);
        n = WJ(m, "ap");
        n != null && (M.kM = n);
        n = jg(m, "cc");
        n != null && (M.Fw = n);
        n = jg(m, "ah");
        n != null && (M.vl = n);
        n = jg(m, "rc");
        n != null && (M.d3 = n);
        m = jg(m, "av");
        m != null && (M.LT = m);
        return M
    }
      , qmV = function(n, m, M, h) {
        let F = {};
        Object.assign(F, lXS(n, m));
        Object.assign(F, vtm(n, m));
        h ? g.Bm(F, n.W) ? (h = n.B,
        F = n.W) : h = "_" + I5++ : h = m.getAttribute("id") || "_" + I5++;
        n = jg(m, "t") + M;
        m = jg(m, "d") || 0x8000000000000;
        if (F.zY === 2 || F.zY === 3)
            M = F.d3,
            F.d3 = F.Fw,
            F.Fw = M;
        return new $M(n,m,0,h,F)
    }
      , rr = function(n) {
        n = g.UO(Math.round(n), 0, 16777215).toString(16).toUpperCase();
        return "#000000".substring(0, 7 - n.length) + n
    }
      , T05 = function(n, m, M, h, F) {
        h === 0 && (h = 0x8000000000000);
        const e = {};
        m.wpWinPosId && Object.assign(e, n.W.get(m.wpWinPosId));
        m.wsWinStyleId && Object.assign(e, n.B.get(m.wsWinStyleId));
        n = m.rcRowCount;
        n !== void 0 && (e.d3 = n);
        m = m.ccColCount;
        m !== void 0 && (e.Fw = m);
        if (e.zY === 2 || e.zY === 3)
            m = e.d3,
            e.d3 = e.Fw,
            e.Fw = m;
        return new $M(M,h,0,F,e)
    }
      , dr = function(n) {
        const m = n.byteOffset;
        n.byteOffset += 1;
        return n.U.getUint8(m)
    }
      , D_ = function(n) {
        const m = n.byteOffset;
        n.byteOffset += 4;
        return n.U.getUint32(m)
    }
      , JEH = function(n) {
        if (typeof n === "string")
            return !1;
        n = new GM7(n,0);
        return kMS(n)
    }
      , kMS = function(n) {
        if (!(n.byteOffset < n.U.byteLength) || D_(n) !== 1380139777)
            return !1;
        n.version = dr(n);
        if (n.version > 1)
            return !1;
        dr(n);
        dr(n);
        dr(n);
        return !0
    }
      , U4K = function(n, m) {
        if (!m)
            return "";
        n.W && n.j.params.UG !== 1 && (m *= -1);
        return `translate${n.W ? "X" : "Y"}(${m}px)`
    }
      , cES = function(n) {
        n.lq = Array.from(n.element.getElementsByClassName("caption-visual-line"));
        for (var m = n.j.params.d3, M = 0, h = 0, F = n.lq.length - 1; M < m && F > -1; ) {
            var e = n.lq[F];
            h += n.W ? e.offsetWidth : e.offsetHeight;
            M++;
            F--
        }
        n.Z = h;
        m = Math;
        M = m.max;
        isNaN(n.BT) && ((h = n.U.Fw) ? (F = g.gg("SPAN"),
        g.KV(F, "\u2013".repeat(h)),
        g.mI(F, QTY(n, n.U.rp)),
        n.X.appendChild(F),
        n.BT = F.offsetWidth,
        n.X.removeChild(F)) : n.BT = 0);
        h = n.X;
        n.fP = M.call(m, n.BT, n.xq, (n.W ? h.offsetHeight : h.offsetWidth) + 1)
    }
      , sTH = function(n, m) {
        cES(n);
        var M = n.lq.reduce( (h, F) => (n.W ? F.offsetWidth : F.offsetHeight) + h, 0);
        M = n.Z - M;
        if (M !== n.Iz) {
            const h = M > 0 && n.Iz === 0
              , F = M < n.Iz;
            m || isNaN(M) || h || !F || (g.wo(n.element, "ytp-rollup-mode"),
            n.L(n.element, "transitionend", n.D9));
            g.mI(n.X, "transform", U4K(n, M));
            n.Iz = M
        }
        cES(n)
    }
      , nYm = function(n, m, M, h) {
        const {formatId: F, Ow: e, startTimeMs: P, durationMs: E} = n.KQ(m)
          , H = {
            formatId: F,
            startTimeMs: P,
            durationMs: E,
            EL: e,
            HK: e
        };
        let z = u_7(n.O9, H.startTimeMs);
        const A = z >= 0 ? n.O9[z] : null
          , b = A ? A.startTimeMs + A.durationMs : 0
          , B = H.startTimeMs + H.durationMs;
        !A || H.startTimeMs - b > n.W ? n.O9.splice(z + 1, 0, H) : (A.durationMs = Math.max(b, B) - A.startTimeMs,
        A.HK = Math.max(A.HK, H.HK));
        h(n.O9);
        h = g.Jz(m);
        n = n.B;
        h = h.buffer.slice(h.byteOffset, h.byteLength + h.byteOffset);
        m = m.info.W;
        n.fP ? n.C == null ? g.kn(n.logger, 350058965, "Null loaded track meta data at captions data received") : M.TP(h, n.C, m * 1E3) : g.kn(n.logger, 350058965, "Null Representation at captions data received")
    }
      , hgw = function(n, m) {
        n.j = (M, h) => {
            if (n.V.D().experiments.HT("html5_sabr_live_support_subfragmented_captions"))
                (n.U ? n.U = n.U.A(M) : (n.U = M,
                mlH(n.U)),
                n.U) ? M.info.X && (MrH(n.U),
                nYm(n, n.U, m, h),
                n.U = null) : g.kn(n.logger, 350058965, "Empty slice");
            else if (M.info.X) {
                var F = M;
                if (n.AJ.length > 0) {
                    for (F = n.AJ.shift(); n.AJ.length > 0; )
                        F = F.A(n.AJ.shift());
                    F = F.A(M)
                }
                F ? (mlH(F),
                MrH(F),
                nYm(n, F, m, h)) : g.kn(n.logger, 350058965, "Empty slice")
            } else
                n.AJ.push(M)
        }
        ;
        n.V.addEventListener("sabrCaptionsDataLoaded", n.j)
    }
      , u_7 = function(n, m) {
        n = g.rS(n, {
            startTimeMs: m
        }, (M, h) => M.startTimeMs - h.startTimeMs);
        return n >= 0 ? n : -n - 2
    }
      , mlH = function(n) {
        let m;
        try {
            m = g.sG(n) * 1E3
        } catch (M) {
            m = n.info.startTime * 1E3
        }
        m < 0 && (m = n.info.startTime * 1E3);
        n.info.startTime = m / 1E3;
        n.info.W = m / 1E3
    }
      , MrH = function(n) {
        let m;
        try {
            m = g.E_3(n) * 1E3
        } catch (M) {
            m = n.info.duration * 1E3
        }
        m < 0 && (m = n.info.duration * 1E3);
        n.info.duration = m / 1E3;
        n.info.C = m / 1E3
    }
      , FlK = function(n, m) {
        if (!g.Zx_(n) || n.U != null && g.dF(m, n.U) && n.U.U.rawcc != null)
            return !1;
        m = !!n.U && n.U.isManifestless && Object.values(n.U.U).some(M => g.D3(M, "386"));
        n = !!n.U && !n.U.isManifestless && g.DxX(n.U);
        return m || n
    }
      , i5Y = function(n, m, M) {
        const h = [];
        for (const F in n.j.U) {
            if (!n.j.U.hasOwnProperty(F))
                continue;
            const e = n.j.U[F];
            if (g.D3(e, M || null)) {
                const P = e.info.captionTrack;
                P && P.languageCode === m && h.push(e)
            }
        }
        return h.length ? h[0] : null
    }
      , ego = function(n, m) {
        const M = [];
        for (const F in n.j.U) {
            if (!n.j.U.hasOwnProperty(F))
                continue;
            var h = n.j.U[F];
            if (g.D3(h, m || null)) {
                let e = h.info.id
                  , P = e
                  , E = `.${e}`
                  , H = ""
                  , z = "";
                if (h = h.info.captionTrack)
                    e = h.languageCode,
                    P = h.displayName,
                    E = h.vssId,
                    H = h.kind,
                    z = h.id;
                M.push(new g.qR({
                    id: F,
                    languageCode: e,
                    languageName: P,
                    is_servable: !0,
                    is_default: !0,
                    is_translateable: !1,
                    vss_id: E,
                    kind: H,
                    captionId: z
                }))
            }
        }
        return M
    }
      , EYo = function(n) {
        const m = PX_.length;
        if (n.byteLength < m)
            return !1;
        n = new Uint8Array(n,0,m);
        for (let M = 0; M < m; M++)
            if (PX_[M] !== n[M])
                return !1;
        return !0
    }
      , Sg = function(n) {
        n = n.split(":");
        let m = 0;
        for (const M of n)
            m = m * 60 + Number(M);
        return m * 1E3
    }
      , H5K = function(n, m, M, h) {
        h = Object.assign({
            Zb: 0
        }, h);
        return new $M(n,m,M,"_" + I5++,h)
    }
      , zgq = function(n, m, M, h, F, e, P, E, H) {
        switch (P.tagName) {
        case "b":
            E.bold = !0;
            break;
        case "i":
            E.italic = !0;
            break;
        case "u":
            E.underline = !0
        }
        for (let A = 0; A < P.childNodes.length; A++) {
            var z = P.childNodes[A];
            if (z.nodeType === 3)
                z = new gr(m,M,h,F.id,z.nodeValue,e || A > 0,g.oU(E) ? void 0 : E),
                H.push(z),
                F.U.push(z);
            else {
                const b = {};
                Object.assign(b, E);
                zgq(n, m, M, h, F, !0, z, b, H)
            }
        }
    }
      , AQ6 = function(n, m, M) {
        if (typeof m === "string" || JEH(m))
            return [{
                trackData: m,
                H9: M
            }];
        if (typeof m === "string" && m.substring(0, 6) === "WEBVTT" || typeof m !== "string" && EYo(m))
            return [{
                trackData: m,
                H9: M
            }];
        const h = new DataView(m);
        if (h.byteLength <= 8 || h.getUint32(4) !== 1718909296)
            return [];
        var F = g.b9m(h);
        if (n.dL && F) {
            var e = g.FV3(F)
              , P = g.i9L(F);
            F = F.segmentNumber;
            e && F && n.dL.XZ(F, e, P)
        }
        n = g.nK(h, 1835295092);
        if (!n || !n.length || !n[0].size)
            return [];
        e = [];
        for (P = 0; P < n.length; P++)
            F = n[P],
            F = new Uint8Array(m,F.dataOffset,F.size - (F.dataOffset - F.offset)),
            F = g.o6(F),
            e.push({
                trackData: F,
                H9: M + P * 1E3
            });
        oYS(h, e, M);
        return e = e.filter(E => !!E.trackData)
    }
      , BV5 = function(n, m, M) {
        n.U || (n.U = new b57);
        n = n.U.X(m, M);
        Math.random() < .01 && g.lz(Error("Deprecated subtitles format in web player: WebVTT"));
        return n
    }
      , oYS = function(n, m, M) {
        var h = g.UH(n, 0, 1836476516);
        let F = 9E4;
        h && (F = g.cN(h) || 9E4);
        h = 0;
        const e = g.nK(n, 1836019558);
        for (let E = 0; E < e.length; E++) {
            var P = e[E];
            E < m.length && (P = g.UH(n, P.dataOffset, 1953653094)) && (P = g.UH(n, P.dataOffset, 1952867444)) && (P = g.uT(P) / F * 1E3,
            E === 0 && (h = P),
            m[E].H9 = P - h + M || M * E * 1E3)
        }
    }
      , aD5 = function(n) {
        const m = {};
        if (n = g.y2(n))
            m.lang = n,
            g.An_.test(n) && (m.zY = 1);
        return m
    }
      , Vrw = function(n) {
        const m = !!n.V.S$()?.Uw();
        return n.X === "HLS" && m ? !0 : n.bq && m && n.X !== "LIVE" && n.X !== "SABR_LIVE"
    }
      , OJ = function(n, m, M=!1) {
        const h = tn.rp;
        n.B = {};
        Object.assign(n.B, tn);
        n.B.rp = {};
        Object.assign(n.B.rp, h);
        n.A = {
            rp: {}
        };
        var F = m.backgroundOverride ? n.A : n.B
          , e = m.background || h.background;
        Cj.test(e);
        F.rp.background = e;
        F = m.colorOverride ? n.A : n.B;
        e = m.color || h.color;
        Cj.test(e);
        F.rp.color = e;
        F = m.windowColorOverride ? n.A : n.B;
        e = m.windowColor || tn.windowColor;
        Cj.test(e);
        F.windowColor = e;
        F = m.backgroundOpacityOverride ? n.A : n.B;
        e = m.backgroundOpacity;
        e == null && (e = h.backgroundOpacity);
        F.rp.backgroundOpacity = e;
        F = m.fontSizeIncrementOverride ? n.A : n.B;
        e = m.fontSizeIncrement;
        e == null && (e = h.fontSizeIncrement);
        F.rp.fontSizeIncrement = e;
        e = m.fontStyleOverride ? n.A : n.B;
        F = m.fontStyle;
        F == null && (F = h.bold && h.italic ? 3 : h.bold ? 1 : h.italic ? 2 : 0);
        e = e.rp;
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
        F = m.textOpacityOverride ? n.A : n.B;
        e = m.textOpacity;
        e == null && (e = h.textOpacity);
        F.rp.textOpacity = e;
        F = m.windowOpacityOverride ? n.A : n.B;
        e = m.windowOpacity;
        e == null && (e = tn.windowOpacity);
        F.windowOpacity = e;
        F = m.charEdgeStyleOverride ? n.A : n.B;
        e = m.charEdgeStyle;
        e == null && (e = h.charEdgeStyle);
        F.rp.charEdgeStyle = e;
        F = m.fontFamilyOverride ? n.A : n.B;
        e = m.fontFamily;
        e == null && (e = h.fontFamily);
        F.rp.fontFamily = e;
        n.loaded && n.Gv();
        M && g.oO("yt-player-caption-display-settings", m, 2592E3)
    }
      , pj = function(n, m, M) {
        m && !n.k6 ? (m = fXq({
            zY: 0,
            lang: "en"
        }),
        n.k6 = [m, new gr(m.start,m.end - m.start,0,m.id,M ?? "Captions look like this")],
        n.player.pF(n.k6)) : !m && n.k6 && (xlS(n, n.k6),
        n.k6 = null)
    }
      , wh5 = function(n) {
        if (!n.V.isInline())
            return g.Ap("yt-player-sticky-caption")
    }
      , fj = function(n) {
        if (!n.iq.O("enable_player_captions_persistence_state_machine")) {
            var m = void 0
              , M = g.vK().LP(65);
            if (g.TY(n.iq) && M != null) {
                if (wh5(n) != null)
                    return !1;
                m = !M
            }
            return m
        }
    }
      , yQo = function(n) {
        if (n.iq.a5 === 1 || n.videoData.Qc === 1 || g.qr(n.videoData, "yt:cc") === "alwayson")
            return !0;
        let m;
        n.videoData.captionTracks.length && (m = n.getAudioTrack().j);
        if (n.iq.O("enable_player_captions_persistence_state_machine")) {
            var M = n.iq.O("enable_player_captions_persistence_state_machine") ? g.Ap("yt-player-caption-persistence") : void 0;
            if (M !== void 0)
                return !!M
        } else if (n.iq.a5 === 2) {
            if (g.TY(n.iq))
                M = wh5(n);
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
        M = Vy(n.player.getAudioTrack(), g.TY(n.iq));
        const h = g.qr(n.videoData, "yt:cc");
        if (fj(n) === void 0) {
            if (M === "CAPTIONS_INITIAL_STATE_ON_RECOMMENDED")
                return h ? h === "on" : !0;
            if (M === "CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED")
                return h === "on"
        } else
            return h === "on";
        return m === "ON" || g.qr(n.videoData, "yt:cc") === "on"
    }
      , vJ = function(n, m=!1) {
        if (n.j && !m || !n.videoData.captionTracks.length)
            return !1;
        n = n.getAudioTrack();
        return !!n.U || n.j === "FORCED_ON"
    }
      , NVo = function(n, m) {
        if (n.j) {
            var M = n.V.S$().Ea().textTracks
              , h = null;
            n.X === "HLS" ? h = n.j.getId() : h = n.j.toString();
            for (let e = 0; e < M.length; e++) {
                var F = M[e];
                F.id === h && (m ? F.mode !== "showing" && (F.mode = "showing",
                F = n.j,
                n.Qg(F, !!F, lG(n) ? "g" : n.N ? "m" : "s")) : F.mode === "showing" && (F.mode = "disabled"))
            }
        }
    }
      , lG = function(n) {
        const m = qu(n);
        return !!m && n.j === m
    }
      , YSH = function(n, m) {
        if (n.X === "HLS")
            return !1;
        g.ng(n.videoData) && (m = !0);
        m || (m = n.X === "TTS" ? !1 : n.X === "INNERTUBE" ? !1 : !0);
        return m || n.iq.O("web_watch_disable_account_level_captions_settings") && g.TY(n.iq) ? !0 : !!g.vK().LP(66)
    }
      , qu = function(n) {
        return n.Y && n.Y.U
    }
      , T5 = function(n, m) {
        if (!n.U)
            return null;
        if (n.Y && n.Y.W)
            return n.Y.W;
        m = YSH(n, m);
        m = g.BI(n.U.U, m);
        let M = null;
        if (eLY(n.iq)) {
            var h = n.V.isInline() ? void 0 : g.Ap("yt-player-caption-sticky-language");
            var F = [h, n.videoData.captionsLanguagePreference, n.iq.captionsLanguagePreference, g.qr(n.videoData, "yt:cc_default_lang")];
            let E = !1;
            for (let H = 0; H < F.length; H++) {
                const z = F[H];
                if (z) {
                    E = !0;
                    for (var e = 0; e < m.length; e++)
                        if (g.y2(m[e]) === z)
                            return m[e];
                    for (e = 0; e < m.length; e++)
                        if (g.y2(m[e]).split("-")[0] === z.split("-")[0])
                            return m[e]
                }
            }
            if (E && n.U && (F = n.U.Y,
            F.length))
                for (var P of F)
                    if (P.languageCode === h) {
                        M = P;
                        break
                    }
        } else
            for (P = [n.videoData.captionsLanguagePreference, n.iq.captionsLanguagePreference, g.qr(n.videoData, "yt:cc_default_lang")],
            h = 0; h < P.length; h++)
                for (F = 0; F < m.length; F++)
                    if (g.y2(m[F]) === P[h])
                        return m[F];
        P = null;
        n.Y && n.Y.X && (P = n.Y.X);
        P || (P = m.find(E => E.isDefault) || null);
        P || (P = m[0] || qu(n));
        P && M && g.y2(P).split("-")[0] !== M.languageCode.split("-")[0] && (P = iq7(P, M));
        return P
    }
      , cJ = function(n, m, M) {
        n.loaded && n.unload();
        M != null && (n.N = M,
        n.N && (n.iq.O("enable_player_captions_persistence_state_machine") ? G5(n, !!m) : g.TY(n.iq) ? kM(n, !!m) : Jn(n, !!m)));
        m !== null || vJ(n, !0) || n.Qg(m, !!m, n.N ? "m" : "s");
        n.j = m;
        vJ(n) && (n.j = qu(n));
        UJ(n, n.j ?? void 0);
        n.load()
    }
      , G5 = function(n, m) {
        n.iq.O("enable_player_captions_persistence_state_machine") && g.oO("yt-player-caption-persistence", m, 3122064E3)
    }
      , kM = function(n, m) {
        n.V.isInline() || g.oO("yt-player-sticky-caption", m, 2592E3)
    }
      , Jn = function(n, m) {
        if (n.storage)
            try {
                n.storage.set("module-enabled", m)
            } catch (M) {}
    }
      , UJ = function(n, m) {
        n.iq.O("html5_modify_caption_vss_logging") && (n.videoData.B5 = m)
    }
      , Z5m = function(n, m) {
        var M = n.fP[m.id];
        M && M.j !== m && (M.dispose(),
        delete n.fP[m.id],
        M = null);
        M || (M = QJ_(n, m)) && (n.fP[m.id] = M)
    }
      , Xhw = function(n, m) {
        const M = m.windowId;
        n.Iz[M] || (n.Iz[M] = []);
        n.Iz[M].push(m)
    }
      , QJ_ = function(n, m) {
        const M = Llq(n);
        if (!M)
            return null;
        var h = n.j ? g.y2(n.j) : null;
        h && g.An_.test(h) && (m.params.zY = 1);
        var F = n.SU.getPlayerSize();
        h = F.height * n.Z.height;
        F = F.width * n.Z.width;
        n.iq.playerStyle !== "google-live" || n.B.isDefault || Object.assign(m.params, n.B);
        switch (m.params.Zb != null ? m.params.Zb : m.U.length > 1 ? 1 : 0) {
        case 1:
            return new gYP(m,n.B,n.A,M.width,M.height,F,h,n.iq.experiments,n.Js.bind(n),n.V);
        case 2:
            return new IDY(m,n.B,n.A,M.width,M.height,F,h,n.iq.experiments,n.Js.bind(n),n.V);
        default:
            return new sJ(m,n.B,n.A,M.width,M.height,F,h,n.iq.experiments,n.Js.bind(n),n.V)
        }
    }
      , Llq = function(n) {
        let m = n.SU.getVideoContentRect(!0).height
          , M = n.SU.getVideoContentRect(!0).width;
        if (!m || !M)
            return null;
        m *= n.Z.height;
        M *= n.Z.width;
        return {
            width: M,
            height: m
        }
    }
      , xlS = function(n, m) {
        n.player.GA(m);
        for (const M of m)
            g.L7(n.BT, M);
        a5(n.eU)
    }
      , $lV = function(n, m) {
        if (!n.U)
            return {};
        if (m) {
            g.oU(m) || n.DD(m.vss_id, "m");
            if (n.W && n.X !== "HLS" || !g.XI(m))
                return;
            if (g.oU(m)) {
                cJ(n, null, !0);
                return
            }
            let h;
            var M = g.BI(n.U.U, !0);
            for (let F = 0; F < M.length; F++) {
                const e = M[F];
                e.languageCode !== m.languageCode || h && (e.languageName !== m.languageName || (e.captionId || "") !== (m.captionId || "") || g.xr(e) !== m.displayName) || (h = m.translationLanguage ? iq7(e, m.translationLanguage) : e)
            }
            n.MH(m.position);
            !h || h === n.j && n.loaded || (m = g.GY(),
            M = g.y2(h),
            m.length && M === m[m.length - 1] || (m.push(M),
            g.oO("yt-player-caption-language-preferences", m)),
            eLY(n.iq) && !n.V.isInline() && g.oO("yt-player-caption-sticky-language", M, 2592E3),
            cJ(n, h, !0))
        } else
            return n.loaded && n.j && !lG(n) ? g.w2(n.j) : {};
        return ""
    };
    g.ME.prototype.XZ = g.M7(65, function(n, m, M) {
        this.j.set(n, {
            qO: m,
            ao: M
        })
    });
    g.hl.prototype.XZ = g.M7(64, function(n, m, M) {
        this.Z.XZ(n, m, M)
    });
    g.vG.prototype.Z = g.M7(63, function() {
        return !1
    });
    g.vG.prototype.W = g.M7(62, function() {});
    g.la.prototype.W = g.M7(61, function(n, m, M) {
        this.As();
        m = this.A(n, m);
        const h = this.NG.D().O("html5_report_captions_ctmp_qoe")
          , F = (0,
        g.l)();
        this.X();
        Ffm(this, m, {
            format: "RAW",
            onSuccess: e => {
                this.j = null;
                if (h) {
                    var P = (e.responseText.length / 1024).toFixed();
                    const E = (0,
                    g.l)();
                    this.videoData.uq("capresp", {
                        ms: E - F,
                        kb: P
                    })
                }
                P = e.getResponseHeader && e.getResponseHeader("Content-Length") ? Number(e.getResponseHeader("Content-Length")) : 0;
                M.TP(e.responseText, n, void 0, void 0, P)
            }
            ,
            onError: h ? e => {
                this.videoData.uq("capfail", {
                    status: e?.status ?? 0
                })
            }
            : void 0,
            withCredentials: !0
        })
    });
    g.qB.prototype.W = g.M7(60, function(n, m, M) {
        this.As();
        m = this.A(n, m);
        this.X();
        this.j = g.sx(m, {
            format: "RAW",
            onSuccess: h => {
                this.j = null;
                const F = h.getResponseHeader && h.getResponseHeader("Content-Length") ? Number(h.getResponseHeader("Content-Length")) : 0;
                M.TP(h.responseText, n, void 0, void 0, F)
            }
            ,
            withCredentials: !0
        })
    });
    g.G2.prototype.N = g.M7(59, function() {
        const n = g.B3(document, "track", void 0, this.U);
        for (let m = 0; m < n.length; m++)
            g.W3(n[m])
    });
    g.UF.prototype.N = g.M7(58, function() {
        this.mediaElement.N()
    });
    g.G2.prototype.lq = g.M7(57, function() {
        return !(!this.U.textTracks || !this.U.textTracks.addEventListener)
    });
    g.UF.prototype.lq = g.M7(56, function() {
        return this.mediaElement.lq()
    });
    g.G2.prototype.Uw = g.M7(55, function() {
        return !!this.U.textTracks
    });
    g.UF.prototype.Uw = g.M7(54, function() {
        return this.mediaElement.Uw()
    });
    g.G2.prototype.k6 = g.M7(53, function(n) {
        for (let m = 0; m < n.length; m++)
            this.U.appendChild(n[m])
    });
    g.UF.prototype.k6 = g.M7(52, function(n) {
        this.mediaElement.k6(n)
    });
    g.xz.prototype.Ag = g.M7(40, function(n) {
        return this.app.AF({
            playerType: void 0
        }).Ag(n)
    });
    g.AS.prototype.Ag = g.M7(39, function(n) {
        return this.rW.f$.Ag(n)
    });
    g.Kn.prototype.Ag = g.M7(38, function(n) {
        return this.xn().some(m => m.namespace === n)
    });
    g.sB.prototype.Ag = g.M7(37, function() {
        return !1
    });
    g.xz.prototype.DD = g.M7(35, function(n, m) {
        this.app.hs().DD(n, m)
    });
    g.AS.prototype.DD = g.M7(34, function(n, m) {
        this.rW.DD(n, m)
    });
    g.jS.prototype.DD = g.M7(33, function(n, m) {
        n = [n, m];
        g.lu(this, g.GL(this.provider), "cfi", n)
    });
    g.Cn.prototype.DD = g.M7(32, function(n, m) {
        this.qoe && this.qoe.DD(n, m)
    });
    g.yQ.prototype.DD = g.M7(31, function(n, m) {
        this.DA.DD(n, m)
    });
    g.sB.prototype.DD = g.M7(30, function() {});
    g.xz.prototype.Qg = g.M7(29, function(n, m, M) {
        this.app.hs().Qg(n, m, M)
    });
    g.AS.prototype.Qg = g.M7(28, function(n, m, M) {
        this.rW.Qg(n, m, M)
    });
    g.jS.prototype.Qg = g.M7(27, function(n, m, M) {
        if (this.nP !== n || this.l0 !== m)
            m = m === "rawcc" ? "" : m,
            M = [n, m, this.nP, M],
            g.lu(this, g.GL(this.provider), "cfs", M),
            this.nP = n,
            this.l0 = m
    });
    g.Cn.prototype.Qg = g.M7(26, function(n, m, M) {
        this.qoe && this.qoe.Qg(n, m, M)
    });
    g.yQ.prototype.Qg = g.M7(25, function(n, m, M) {
        this.DA.Qg(n, m, M)
    });
    g.sB.prototype.Qg = g.M7(24, function() {});
    g.ia.prototype.Yf = g.M7(3, function(n) {
        return (n = this.X(n)) ? n.U : 0
    });
    g.PG.prototype.Yf = g.M7(2, function() {
        return 0
    });
    var zLP = /#(.)(.)(.)/
      , HqY = /^#(?:[0-9a-f]{3}){1,2}$/i
      , x4V = {
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
    }
      , jJP = {
        en: "English"
    }
      , Rg5 = class extends g.vG {
        constructor(n) {
            super(n);
            this.j = new Set
        }
        B(n) {
            var m = this.NG.S$();
            if (m && m.Ea()) {
                m = m.Ea().textTracks;
                for (const M of m)
                    M.kind === "subtitles" && !this.j.has(M.language) && M.language && (g.rF(this.U, new g.qR({
                        languageCode: M.language,
                        languageName: M.language,
                        kind: M.kind,
                        id: M.id,
                        displayName: jJP[M.label] || M.label,
                        vss_id: `.${M.language}`
                    })),
                    this.j.add(M.language))
            }
            g.BI(this.U).length > 0 && n.MP()
        }
    }
      , Wl7 = class {
        constructor() {
            this.segments = []
        }
        contains(n) {
            n = g.rS(this.segments, n);
            return n >= 0 || n < 0 && (-n - 1) % 2 === 1
        }
        length() {
            return this.segments.length / 2
        }
    }
      , CXY = class extends g.xC {
        constructor(n, m, M, h, F, e) {
            super();
            this.policy = n;
            this.player = m;
            this.X6 = M;
            this.C = h;
            this.B = F;
            this.Z = e;
            this.W = new Wl7;
            this.A = -1;
            this.j = this.X = this.U = null;
            this.fP = 0;
            this.N = new g.o9(this.k6,1E3,this);
            this.events = new g.Zw(this);
            g.L(this, this.N);
            g.L(this, this.events);
            this.events.L(m, "SEEK_COMPLETE", this.Y);
            this.Y();
            this.k6()
        }
        jU() {
            super.jU();
            this.j && this.j.cancel()
        }
        Y() {
            this.seekTo(this.player.getCurrentTime())
        }
        seekTo(n) {
            n -= this.player.gL();
            const m = this.U;
            this.U = g.S3(this.X6.A(n).kq);
            m !== this.U && this.Z && this.Z()
        }
        reset() {
            this.W = new Wl7;
            this.A = -1;
            this.j && (this.j.cancel(),
            this.j = null)
        }
        k6() {
            this.As();
            var n;
            if (n = this.U != null)
                n = this.U,
                n = n.X6.W(n);
            if (n && !this.j && !(this.U && this.U.startTime - this.player.getCurrentTime() > 30)) {
                n = this.U;
                n = n.X6.eU(n);
                const F = n.kq[0];
                if (this.player.getVideoData()?.enableServerStitchedDai) {
                    var m = this.player.uw();
                    if (m) {
                        var M = F.X6.info.id;
                        const e = F.Ow;
                        var h = n.kq[0].W;
                        if (this.policy.eU) {
                            if (m = g.fK7(m, h, e, M, 3))
                                n.W = m
                        } else if (M = m.dk(h, e, M, 3))
                            if (h = 2,
                            m.qo.has(e) ? h = 0 : g.xF(m, e) && (h = 1),
                            m = h,
                            m === 0)
                                M && (n.U = new g.uK(M));
                            else if (m === 2) {
                                this.N.start();
                                bq5(this) && this.seekTo(this.player.getCurrentTime());
                                return
                            }
                    }
                }
                F.X6.index.lD(F.Ow) ? (this.W.contains(n.kq[0].Ow) || B0V(this, n),
                this.U = g.S3(n.kq)) : bq5(this) && this.seekTo(this.player.getCurrentTime())
            }
            this.N.start()
        }
    }
      , Kl6 = class extends g.vG {
        constructor(n, m) {
            super(m);
            this.j = n;
            this.V = m;
            this.C = null;
            this.k6 = !1;
            this.logger = new g.GA("caps");
            this.fP = g.dF(this.V, this.j)
        }
        W(n, m, M) {
            this.X();
            m = aXm(this, n.getId());
            m || (m = n.languageCode,
            m = this.j.isManifestless ? VRV(this, m, "386") : VRV(this, m));
            if (m) {
                var h = (m.index.Yf(m.index.rd()) - m.index.getStartTime(m.index.rd())) * 1E3
                  , F = new g.fVt(this.V.D());
                this.C = new CXY(F,this.V,m, (e, P) => {
                    M.TP(e, n, P, h)
                }
                ,this.fP || g.Tw(m.info), () => {
                    this.C && this.C.reset();
                    this.k6 = !0
                }
                )
            }
        }
        Z() {
            const n = this.k6;
            this.k6 = !1;
            return n
        }
        B(n) {
            var m = this.V.D().O("html5_fallback_if_rawcc_missing");
            const M = this.j.U.rawcc != null;
            if (!this.fP || !M && m)
                m = this.j.isManifestless ? www(this, "386") : www(this);
            else {
                if (!M) {
                    g.kn(this.logger, 386248249, "rawcc used but unavailable");
                    return
                }
                m = [new g.qR({
                    id: "rawcc",
                    languageCode: "rawcc",
                    languageName: "CC1",
                    is_servable: !0,
                    is_default: !0,
                    is_translateable: !1,
                    vss_id: ".en"
                }), new g.qR({
                    id: "rawcc",
                    languageCode: "rawcc",
                    languageName: "CC3",
                    is_servable: !0,
                    is_default: !0,
                    is_translateable: !1,
                    vss_id: ".en"
                })]
            }
            for (const h of m)
                g.rF(this.U, h);
            n.MP()
        }
        X() {
            this.C && (this.C.dispose(),
            this.C = null)
        }
        A() {
            return ""
        }
    }
      , Cj = /^#(?:[0-9a-f]{3}){1,2}$/i;
    var rQ5 = ["left", "right", "center", "justify"];
    var sJ = class extends g.U {
        constructor(n, m, M, h, F, e, P, E, H, z) {
            const A = z.isInline() && !0
              , b = {};
            Object.assign(b, m);
            Object.assign(b, n.params);
            Object.assign(b, M);
            const B = {};
            Object.assign(B, m.rp);
            n.params.rp && Object.assign(B, n.params.rp);
            Object.assign(B, M.rp);
            A && (b.windowOpacity = .6,
            B.backgroundOpacity = 0);
            b.rp = B;
            const a = b.zY === 1
              , w = [{
                K: "span",
                J: "captions-text",
                S: {
                    style: "word-wrap: normal; display: block;"
                }
            }]
              , Z = E.HT("caption_edit_on_hover") && z.getVideoData().getPlayerResponse()?.captions?.playerCaptionsTracklistRenderer?.openTranscriptCommand;
            Z && w.unshift({
                K: "button",
                J: "caption-edit",
                S: {
                    tabindex: "0",
                    "aria-label": ot7()
                },
                G: [{
                    K: "svg",
                    S: {
                        fill: "#e3e3e3",
                        height: "100%",
                        viewBox: "5 5 38 38",
                        width: "100%"
                    },
                    G: [{
                        K: "path",
                        S: {
                            d: "M9 39h2.2l24.25-24.25-1.1-1.1-1.1-1.1L9 36.8Zm-3 3v-6.4L35.4 6.2q.85-.85 2.12-.82 1.27.02 2.12.87L41.8 8.4q.85.85.85 2.1t-.85 2.1L12.4 42Zm33.5-31.55L37.45 8.4Zm-4.05 4.3-1.1-1.1-1.1-1.1 2.2 2.2Z"
                        }
                    }]
                }]
            });
            super({
                K: "div",
                J: "caption-window",
                S: {
                    id: `caption-window-${n.id}`,
                    dir: a ? "rtl" : "ltr",
                    tabindex: "0",
                    lang: b.lang
                },
                G: w
            });
            this.A = [];
            this.eU = !1;
            this.j = n;
            this.cT = this.nP = null;
            this.a9 = e;
            this.Yc = P;
            this.N = null;
            this.maxWidth = e * .96;
            this.maxHeight = P * .96;
            this.U = b;
            this.xc = M;
            this.Uw = m;
            this.X = this.m7("captions-text");
            this.Sf = this.X.style.getPropertyValue("box-decoration-break") !== "" || this.X.style.getPropertyValue("-webkit-box-decoration-break") !== "";
            this.Js = yEq(h, F, e, P);
            this.BA = H;
            Z && (this.B = this.m7("caption-edit"),
            this.L(this.B, "click", () => {
                this.BA()
            }
            ));
            this.type = 0;
            this.CP = this.Js * N0w(B);
            this.l0 = A;
            this.zv = E.HT("enable_centered_caption_for_tvfilm_video") && z.getVideoData().isTvfilmVideo;
            this.Y = z.D().Z9().U.LP(g.HTA);
            n = new g.xi(this.element,!0);
            g.L(this, n);
            n.subscribe("dragstart", this.o$, this);
            n.subscribe("dragmove", this.wx, this);
            n.subscribe("dragend", this.Cf, this);
            this.Y6 = this.SU = this.u0 = this.Gv = 0;
            n = "";
            this.U.windowOpacity && (n = xM(this.U.windowColor),
            n = "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + this.U.windowOpacity + ")");
            m = {
                "background-color": n,
                display: this.U.isVisible === !1 ? "none" : "",
                "text-align": rQ5[this.U.textAlign]
            };
            this.Sf && (m["border-radius"] = n ? `${this.CP / 8}px` : "");
            (this.W = this.j.params.zY === 2 || this.j.params.zY === 3) && Ymm(this, this.element);
            g.mI(this.element, m);
            A && this.element.parentElement?.style.setProperty("--caption-window-color", n);
            switch (this.U.kM) {
            case 0:
            case 1:
            case 2:
                g.wo(this.element, "ytp-caption-window-top");
                break;
            case 6:
            case 7:
            case 8:
                g.wo(this.element, "ytp-caption-window-bottom")
            }
        }
        o$(n, m) {
            this.SU = n;
            this.Y6 = m;
            const M = g.Vv(this.element, this.element.parentElement);
            this.Gv = n - M.x;
            this.u0 = m - M.y
        }
        wx(n, m) {
            if (n !== this.SU || m !== this.Y6) {
                g.xT(this.element, "ytp-dragging") || g.wo(this.element, "ytp-dragging");
                var M = g.wL(this.element);
                n = n - this.Gv - .02 * this.a9;
                var h = m - this.u0 - .02 * this.Yc
                  , F = (n + M.width / 2) / this.maxWidth * 3;
                F = Math.floor(g.UO(F, 0, 2));
                var e = (h + M.height / 2) / this.maxHeight * 3;
                e = Math.floor(g.UO(e, 0, 2));
                m = F + e * 3;
                n = (n + F / 2 * M.width) / this.maxWidth;
                n = g.UO(n, 0, 1) * 100;
                M = (h + e / 2 * M.height) / this.maxHeight;
                M = g.UO(M, 0, 1) * 100;
                this.j.params.kM = m;
                this.j.params.LT = M;
                this.j.params.vl = n;
                this.j.params.isDefault = !1;
                this.U.kM = m;
                this.U.LT = M;
                this.U.vl = n;
                this.U.isDefault = !1;
                this.Uw.kM = m;
                this.Uw.LT = M;
                this.Uw.vl = n;
                this.Uw.isDefault = !1;
                this.Yq()
            }
        }
        Cf() {
            g.Nw(this.element, "ytp-dragging")
        }
        Yq() {
            this.C(this.A)
        }
        C(n) {
            var m = this.l0 ? 0 : Math.min(this.Ip(), this.maxWidth)
              , M = this.Wd()
              , h = this.l0;
            if (h) {
                var F = getComputedStyle(this.X.parentNode);
                F = yy(F.borderLeftWidth) + yy(F.borderRightWidth) + yy(F.paddingLeft) + yy(F.paddingRight)
            } else
                F = 0;
            const e = F;
            F = "";
            this.j.params.zY === 3 && (F = "rotate(180deg)");
            var P = h ? `calc(96% - ${e}px)` : "96%";
            g.mI(this.element, {
                top: 0,
                left: 0,
                right: "",
                bottom: "",
                width: m ? `${m}px` : "",
                height: M ? `${M}px` : "",
                "max-width": P,
                "max-height": P,
                margin: "",
                transform: ""
            });
            this.bq(n);
            F = {
                transform: F,
                top: "",
                left: "",
                width: m ? `${m}px` : "",
                height: M ? `${M}px` : "",
                "max-width": "",
                "max-height": ""
            };
            P = this.U.kM;
            var E = this.U.vl;
            const H = this.U.LT;
            this.zv && P != null && (E = 50,
            P = Math.floor(P / 3) * 3 + 1);
            E = E * .96 + 2;
            switch (P) {
            case 0:
            case 3:
            case 6:
                (h = this.U.rp.fontSizeIncrement) && h > 0 && this.U.zY !== 2 && this.U.zY !== 3 && (E = Math.max(E / (1 + h * 2), 2));
                F.left = `${E}%`;
                break;
            case 1:
            case 4:
            case 7:
                F.left = `${E}%`;
                E = 0;
                this.Y || (E = this.X.offsetWidth);
                m || E ? (m = m || E + 1,
                F.width = `${m}px`,
                F["margin-left"] = h ? `${m / -2 - e / 2}px` : `${m / -2}px`) : (this.Y && (F.width = "max-content"),
                F.transform += " translateX(-50%)");
                break;
            case 2:
            case 5:
            case 8:
                F.right = `${100 - E}%`
            }
            h = H * .96 + 2;
            switch (P) {
            case 0:
            case 1:
            case 2:
                F.top = `${h}%`;
                break;
            case 3:
            case 4:
            case 5:
                F.top = `${h}%`;
                h = 0;
                this.Y || (h = this.element.clientHeight);
                (M = M || h) ? (F.height = `${M}px`,
                F["margin-top"] = `${M / -2}px`) : F.transform += " translateY(-50%)";
                break;
            case 6:
            case 7:
            case 8:
                F.bottom = `${100 - h}%`
            }
            g.mI(this.element, F);
            if (this.B) {
                if (this.Y)
                    M = this.CP;
                else {
                    if (this.zv && n.length === 0)
                        n = 0;
                    else {
                        M = 1;
                        for (h = 0; h < n.length; h++)
                            F = n[h],
                            typeof F.text === "string" && (M += F.text.split("\n").length - 1,
                            F.append || h === 0 || M++);
                        n = M
                    }
                    M = this.zv ? n > 0 ? this.X.offsetHeight / n : 0 : this.X.offsetHeight / n
                }
                this.B.style.height = `${M}px`;
                this.B.style.width = `${M}px`;
                this.element.style.paddingLeft = `${M + 5}px`;
                this.element.style.paddingRight = `${M + 5}px`;
                this.Y || (n = Number(this.element.style.marginLeft.replace("px", "")) - M - 5,
                M = Number(this.element.style.marginRight.replace("px", "")) - M - 5,
                this.element.style.marginLeft = `${n}px`,
                this.element.style.marginRight = `${M}px`)
            }
        }
        bq(n) {
            let m;
            for (m = 0; m < n.length && n[m] === this.A[m]; m++)
                ;
            if (this.eU || this.A.length > m)
                m = 0,
                this.eU = !1,
                this.A = [],
                this.N = this.cT = this.nP = null,
                g.jL(this.X);
            for (; m < n.length; m++)
                LfK(this, n[m])
        }
        Ip() {
            return 0
        }
        Wd() {
            return 0
        }
        toString() {
            return super.toString()
        }
    }
    ;
    var Dl5 = class {
        constructor() {
            this.X = this.time = this.mode = this.j = 0;
            this.W = new dlP(this);
            this.B = new dlP(this);
            this.U = [];
            this.clear()
        }
        clear() {
            this.X = this.time = this.mode = 0;
            this.U = [];
            this.reset()
        }
        reset() {
            this.mode = 0;
            this.W.reset(0);
            this.B.reset(1)
        }
    }
      , gtV = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139, 12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255]
      , SSY = class {
        constructor() {
            this.type = 0
        }
        set(n) {
            this.type = n
        }
        get() {
            return this.type
        }
    }
      , trm = class {
        constructor() {
            this.state = this.V0 = this.O6 = 0
        }
        clear() {
            this.state = 0
        }
        update() {
            this.state = this.state === 2 ? 1 : 0
        }
        NR() {
            return this.state !== 0
        }
        matches(n, m) {
            return this.NR() && n === this.O6 && m === this.V0
        }
    }
      , O57 = class {
        constructor() {
            this.timestamp = this.U = 0
        }
        reset() {
            this.timestamp = this.U = 0
        }
    }
      , uG = class {
        constructor(n) {
            this.B = n;
            this.X = [];
            this.U = this.j = this.row = 0;
            this.style = new SSY;
            this.W = 0;
            for (n = 0; n <= 15; n++) {
                this.X[n] = [];
                for (let m = 0; m <= 32; m++)
                    this.X[n][m] = new O57
            }
        }
        updateTime(n) {
            for (let m = 1; m <= 15; ++m)
                for (let M = 1; M <= 32; ++M)
                    this.X[m][M].timestamp = n
        }
        debugString() {
            let n = "\n";
            for (let m = 1; m <= 15; ++m) {
                for (let M = 1; M <= 32; ++M) {
                    const h = this.X[m][M];
                    n = h.U === 0 ? n + "_" : n + String.fromCharCode(h.U)
                }
                n += "\n"
            }
            return n
        }
        reset(n) {
            for (let m = 0; m <= 15; m++)
                for (let M = 0; M <= 32; M++)
                    this.X[m][M].reset();
            this.W = n;
            this.U = 0;
            this.j = this.row = 1
        }
    }
      , Wfw = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632]
      , CCS = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251]
      , KfS = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235, 206, 207, 239, 212, 217, 249, 219, 171, 187]
      , rEw = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499]
      , ph7 = class {
        constructor(n) {
            this.X = n;
            this.B = 0;
            this.style = new SSY;
            this.A = new uG(this.X);
            this.N = new uG(this.X);
            this.text = new uG(this.X);
            this.j = this.A;
            this.W = this.N;
            this.U = this.j
        }
        reset(n, m) {
            this.B = m;
            this.style.set(2);
            this.j = this.A;
            this.W = this.N;
            this.U = this.j;
            const M = (n << 2) + (m << 1);
            this.A.reset(M);
            this.N.reset(M);
            this.text.reset((n << 2) + (m << 1) + 1)
        }
    }
      , dlP = class {
        constructor(n) {
            this.U = n;
            this.B = 0;
            this.X = new ph7(this.U);
            this.A = new ph7(this.U);
            this.j = new trm;
            this.W = this.X
        }
        reset(n) {
            this.B = n;
            this.j.clear();
            this.W = this.X;
            this.X.reset(n, 0);
            this.A.reset(n, 1)
        }
    }
    ;
    var fD_ = class {
        W() {}
    }
    ;
    var gr = class extends g.OW {
        constructor(n, m, M, h, F, e=!1, P=null) {
            super(n, n + m, {
                priority: M,
                namespace: "captions"
            });
            this.windowId = h;
            this.text = F;
            this.append = e;
            this.U = P
        }
        toString() {
            return super.toString()
        }
    }
    ;
    var nZ = class extends g.xC {
        reset() {}
    }
    ;
    var $M = class extends g.OW {
        constructor(n, m, M, h, F) {
            super(n, n + m, {
                priority: M,
                namespace: "captions"
            });
            this.id = h;
            this.params = F;
            this.U = []
        }
        toString() {
            return super.toString()
        }
    }
      , I5 = 0;
    var vYV = class extends nZ {
        constructor(n) {
            super();
            this.W = n;
            this.pens = {};
            this.C = {};
            this.Y = {};
            this.B = "_" + I5++;
            this.N = {};
            this.j = this.U = null;
            this.A = !0
        }
        reset() {
            this.N = {};
            this.j = this.U = null;
            this.A = !0
        }
        X(n, m) {
            n = n.firstChild;
            n.getAttribute("format");
            m = m || 0;
            Number.isFinite(m);
            n = Array.from(n.childNodes);
            for (var M of n)
                if (M.nodeType === 1)
                    switch (M.tagName) {
                    case "head":
                        var h = M;
                        break;
                    case "body":
                        var F = M
                    }
            if (h) {
                h = Array.from(h.childNodes);
                for (var e of h)
                    if (e.nodeType === 1)
                        switch (e.tagName) {
                        case "pen":
                            M = e.getAttribute("id");
                            h = this.pens;
                            n = {};
                            var P = e.getAttribute("p");
                            P && Object.assign(n, this.pens[P]);
                            P = R5(e, "b");
                            P != null && (n.bold = P);
                            P = R5(e, "i");
                            P != null && (n.italic = P);
                            P = R5(e, "u");
                            P != null && (n.underline = P);
                            P = WJ(e, "et");
                            P != null && (n.charEdgeStyle = P);
                            P = WJ(e, "of");
                            P != null && (n.offset = P);
                            P = Kj(e, "bc");
                            P != null && (n.background = P);
                            P = Kj(e, "ec");
                            P != null && (n.Jt = P);
                            P = Kj(e, "fc");
                            P != null && (n.color = P);
                            P = WJ(e, "fs");
                            P != null && P !== 0 && (n.fontFamily = P);
                            P = jg(e, "sz");
                            P !== void 0 && (n.fontSizeIncrement = P / 100 - 1);
                            P = jg(e, "bo");
                            P !== void 0 && (n.backgroundOpacity = P / 255);
                            P = jg(e, "fo");
                            P !== void 0 && (n.textOpacity = P / 255);
                            P = WJ(e, "rb");
                            P != null && P !== 10 && P !== 0 && (n.PD = P > 10 ? P - 1 : P);
                            P = WJ(e, "hg");
                            P != null && (n.Cy = P);
                            h[M] = n;
                            break;
                        case "ws":
                            h = e.getAttribute("id");
                            this.Y[h] = vtm(this, e);
                            break;
                        case "wp":
                            h = e.getAttribute("id"),
                            this.C[h] = lXS(this, e)
                        }
            }
            if (F) {
                e = [];
                F = Array.from(F.childNodes);
                for (Z of F)
                    if (Z.nodeType === 1)
                        switch (Z.tagName) {
                        case "w":
                            this.U = qmV(this, Z, m, !1);
                            (F = this.N[this.U.id]) && F.end > this.U.start && (F.end = this.U.start);
                            this.N[this.U.id] = this.U;
                            e.push(this.U);
                            break;
                        case "p":
                            var E = Z;
                            n = m;
                            F = [];
                            h = E.getAttribute("w") || this.B;
                            M = !!R5(E, "a");
                            n = (jg(E, "t") || 0) + n;
                            P = jg(E, "d") || 5E3;
                            M || (!this.A && this.j && this.j.windowId === h && this.j.end > n && (this.j.end = n),
                            this.j && this.j.text === "\n" && (this.j.text = ""));
                            const W = M ? 6 : 5;
                            var H = E.getAttribute("p");
                            H = H ? this.pens[H] : null;
                            const r = Array.from(E.childNodes);
                            r.length && (this.A = E.getAttribute("d") != null);
                            for (E = 0; E < r.length; E++) {
                                var z = r[E]
                                  , A = void 0;
                                E > 0 && (M = !0);
                                let K;
                                z.nodeType === 1 && (K = z);
                                if (K && K.tagName === "s") {
                                    if ((z = (z = K.getAttribute("p")) ? this.pens[z] : null) && z.PD && (z.PD === 1 ? (z = r.slice(E, E + 4),
                                    z.length === 4 && (A = pwm(n, P, h, M, W, z, this.pens),
                                    E += 3)) : A = pwm(n, P, h, M, W, [K], this.pens)),
                                    !A) {
                                        var b = K;
                                        A = n;
                                        z = P;
                                        var B = h
                                          , a = M;
                                        const D = b.textContent ? b.textContent : "";
                                        var w = b.getAttribute("p");
                                        w = w ? this.pens[w] : null;
                                        b = jg(b, "t") || 0;
                                        A = new gr(A + b,z - b,W,B,D,a,w)
                                    }
                                } else
                                    A = new gr(n,P,W,h,z.textContent || "",M,H);
                                F.push(A);
                                this.j = A
                            }
                            if (F.length > 0) {
                                F[0].windowId === this.B && (this.U = qmV(this, Z, m, !0),
                                e.push(this.U));
                                for (const K of F)
                                    K.windowId = this.U.id,
                                    this.U.U.push(K),
                                    e.push(K)
                            }
                        }
                var Z = e
            } else
                Z = [];
            return Z
        }
    }
    ;
    var lDK = new Map([[9, 1], [10, 1], [11, 2], [12, 3], [13, 4], [14, 5]])
      , qS_ = class extends nZ {
        constructor(n) {
            super();
            this.A = n;
            this.U = new Map;
            this.W = new Map;
            this.B = new Map;
            this.j = new Map
        }
        reset() {
            this.j.clear()
        }
        X(n, m) {
            n = JSON.parse(n);
            if (!n)
                return [];
            if (n.pens) {
                var M = n.pens
                  , h = 0;
                for (var F of M) {
                    M = {};
                    var e = F.pParentId;
                    e && Object.assign(M, this.U.get(e));
                    F.bAttr && (M.bold = !0);
                    F.iAttr && (M.italic = !0);
                    F.uAttr && (M.underline = !0);
                    e = F.ofOffset;
                    e != null && (M.offset = e);
                    F.szPenSize !== void 0 && (M.fontSizeIncrement = F.szPenSize / 100 - 1);
                    e = F.etEdgeType;
                    e != null && (M.charEdgeStyle = e);
                    F.ecEdgeColor !== void 0 && (M.Jt = rr(F.ecEdgeColor));
                    e = F.fsFontStyle;
                    e != null && e !== 0 && (M.fontFamily = e);
                    F.fcForeColor !== void 0 && (M.color = rr(F.fcForeColor));
                    F.foForeAlpha !== void 0 && (M.textOpacity = F.foForeAlpha / 255);
                    F.bcBackColor !== void 0 && (M.background = rr(F.bcBackColor));
                    F.boBackAlpha !== void 0 && (M.backgroundOpacity = F.boBackAlpha / 255);
                    (e = F.rbRuby) && e !== 10 && (M.PD = e > 10 ? e - 1 : e,
                    M.textEmphasis = lDK.get(M.PD));
                    F.hgHorizGroup && (M.Cy = F.hgHorizGroup);
                    this.U.set(h++, M)
                }
            }
            if (n.wsWinStyles) {
                h = n.wsWinStyles;
                F = 0;
                for (var P of h)
                    h = {},
                    (M = P.wsParentId) ? Object.assign(h, this.B.get(M)) : Object.assign(h, this.A),
                    P.mhModeHint !== void 0 && (h.Zb = P.mhModeHint),
                    P.juJustifCode !== void 0 && (h.textAlign = P.juJustifCode),
                    P.pdPrintDir !== void 0 && (h.zY = P.pdPrintDir),
                    P.sdScrollDir !== void 0 && (h.UG = P.sdScrollDir),
                    P.wfcWinFillColor !== void 0 && (h.windowColor = rr(P.wfcWinFillColor)),
                    P.wfoWinFillAlpha !== void 0 && (h.windowOpacity = P.wfoWinFillAlpha / 255),
                    this.B.set(F++, h)
            }
            if (n.wpWinPositions) {
                F = n.wpWinPositions;
                P = 0;
                for (var E of F)
                    F = {},
                    (h = E.wpParentId) && Object.assign(F, this.W.get(h)),
                    E.ahHorPos !== void 0 && (F.vl = E.ahHorPos),
                    E.apPoint !== void 0 && (F.kM = E.apPoint),
                    E.avVerPos !== void 0 && (F.LT = E.avVerPos),
                    E.ccCols !== void 0 && (F.Fw = E.ccCols),
                    E.rcRows !== void 0 && (F.d3 = E.rcRows),
                    this.W.set(P++, F)
            }
            if (n.events) {
                n = n.events;
                E = [];
                for (const O of n)
                    if (P = (O.tStartMs || 0) + m,
                    F = O.dDurationMs || 0,
                    O.id)
                        h = String(O.id),
                        n = T05(this, O, P, F, h),
                        E.push(n),
                        this.j.set(h, n);
                    else {
                        O.wWinId ? h = O.wWinId.toString() : (h = "_" + I5++,
                        n = T05(this, O, P, F, h),
                        E.push(n),
                        this.j.set(h, n));
                        n = E;
                        var H = O;
                        F === 0 && (F = 5E3);
                        M = this.j.get(h);
                        const iL = (e = !!H.aAppend) ? 6 : 5
                          , e3 = H.segs;
                        let ON = null;
                        H.pPenId && (ON = this.U.get(H.pPenId));
                        for (H = 0; H < e3.length; H++) {
                            var z = e3[H]
                              , A = z.utf8;
                            if (A) {
                                var b = z.tOffsetMs || 0;
                                let ZS = null;
                                z.pPenId && (ZS = this.U.get(z.pPenId));
                                if ((M.params.Zb != null ? M.params.Zb : M.U.length > 1 ? 1 : 0) === 2 && e && A === "\n")
                                    continue;
                                z = null;
                                var B = [], a;
                                if (a = ZS && ZS.PD === 1)
                                    a: {
                                        a = e3;
                                        var w = H;
                                        if (w + 3 >= a.length || !a[w + 1].pPenId || !a[w + 2].pPenId || !a[w + 3].pPenId) {
                                            a = !1;
                                            break a
                                        }
                                        var Z = a[w + 1].pPenId;
                                        (Z = this.U.get(Z)) && Z.PD && Z.PD === 2 ? (Z = a[w + 2].pPenId,
                                        Z = this.U.get(Z),
                                        !Z || !Z.PD || Z.PD < 3 ? a = !1 : (Z = a[w + 3].pPenId,
                                        a = (Z = this.U.get(Z)) && Z.PD && Z.PD === 2 ? !0 : !1)) : a = !1
                                    }
                                if (a)
                                    b = e3[H + 1].utf8,
                                    z = e3[H + 3].utf8,
                                    a = e3[H + 2].utf8,
                                    w = this.U.get(e3[H + 2].pPenId),
                                    A = OqK(A, b, a, z, w),
                                    z = new gr(P,F,iL,h,A,e,ZS),
                                    H += 3;
                                else {
                                    if (A.indexOf("<") > -1) {
                                        B = ZS;
                                        a = ON;
                                        w = P;
                                        Z = F;
                                        var W = b
                                          , r = iL
                                          , K = e;
                                        const pN = [];
                                        var D = g.x$(`<html>${A}</html>`);
                                        if (!D.getElementsByTagName("parsererror").length && D.firstChild?.childNodes.length)
                                            for (const Tq of D.firstChild.childNodes) {
                                                D = Tq.textContent?.replace(/\n/g, "") ?? "";
                                                if (Tq.nodeType === 3 && (!D || D.match(/^ *$/) != null))
                                                    continue;
                                                const RU = {};
                                                Object.assign(RU, B || a);
                                                switch (Tq?.tagName) {
                                                case "b":
                                                    RU.bold = !0;
                                                    break;
                                                case "i":
                                                    RU.italic = !0;
                                                    break;
                                                case "u":
                                                    RU.underline = !0
                                                }
                                                pN.push(new gr(w + W,Z - W,r,M.id,D,K,RU))
                                            }
                                        B = pN
                                    }
                                    B.length || (B = [new gr(P + b,F - b,iL,M.id,A,e,ZS || ON)])
                                }
                                if (B.length)
                                    for (const pN of B)
                                        n.push(pN),
                                        M.U.push(pN);
                                else
                                    z && (n.push(z),
                                    M.U.push(z))
                            }
                            e = !0
                        }
                    }
                m = E
            } else
                m = [];
            return m
        }
    }
    ;
    var TVY = class extends g.vG {
        constructor(n, m, M) {
            super(n);
            this.videoData = m;
            this.audioTrack = M;
            this.Y = m.yR
        }
        W(n, m, M) {
            EtV(this.videoData.videoId, n.vssId, M.TP)
        }
        B(n) {
            if (this.audioTrack)
                for (const m of this.audioTrack.captionTracks)
                    g.rF(this.U, m);
            n.MP()
        }
    }
    ;
    var gYP = class extends sJ {
        constructor(n, m, M, h, F, e, P, E, H, z) {
            super(n, m, M, h, F, e, P, E, H, z);
            this.type = 1
        }
        bq(n) {
            const m = this.j.U;
            super.bq(n);
            let M, h;
            for (n = n.length; n < m.length; n++) {
                const F = m[n];
                let e;
                h && F.U === M ? e = h : (e = {},
                Object.assign(e, F.U),
                Object.assign(e, GkH),
                M = F.U,
                h = e);
                LfK(this, F, e)
            }
        }
    }
      , GkH = {
        x5: !0
    };
    var GM7 = class extends fD_ {
        constructor(n, m) {
            super();
            this.trackData = n;
            this.A = m;
            this.version = this.B = this.X = this.byteOffset = 0;
            this.j = [];
            this.U = new DataView(this.trackData)
        }
        W(n, m, M, h, F) {
            if (M < h) {
                const e = "_" + I5++;
                M = M / 1E3 - this.A;
                h = h / 1E3 - this.A;
                n = new $M(M,h - M,5,e,{
                    textAlign: 0,
                    kM: 0,
                    vl: m * 2.5,
                    LT: n * 5.33
                });
                F = new gr(M,h - M,5,e,F);
                this.j.push(n);
                this.j.push(F)
            }
        }
    }
      , kk_ = class extends nZ {
        constructor(n, m) {
            super();
            this.j = n;
            this.W = m;
            this.track = this.W.languageName === "CC3" ? 4 : 0;
            this.U = new Dl5;
            this.U.j = 1 << this.track
        }
        X(n) {
            n = new GM7(n,this.j);
            if (kMS(n)) {
                for (; n.byteOffset < n.U.byteLength; )
                    for (n.version === 0 ? n.X = D_(n) * (1E3 / 45) : n.version === 1 && (n.X = D_(n) * 4294967296 + D_(n)),
                    n.B = dr(n); n.B > 0; n.B--) {
                        var m = dr(n);
                        const M = dr(n)
                          , h = dr(n);
                        m & 4 && (m & 3) === this.track && (this.track === 0 || this.track === 1) && (m = this.U,
                        m.U.push({
                            time: n.X,
                            type: this.track,
                            G$: M,
                            Yi: h,
                            order: m.U.length
                        }))
                    }
                RL7(this.U, n);
                return n.j
            }
            return []
        }
        reset() {
            this.U.clear()
        }
    }
    ;
    var IDY = class extends sJ {
        constructor(n, m, M, h, F, e, P, E, H, z) {
            super(n, m, M, h, F, e, P, E, H, z);
            this.type = 2;
            this.lq = [];
            this.fP = this.Z = this.Iz = 0;
            this.BT = NaN;
            this.xq = 0;
            this.PA = null;
            this.LY = new g.o9(this.D9,433,this);
            this.B && (z.createClientVe(this.B, this, 167342),
            this.L(this.B, "click", () => {
                z.logClick(this.B)
            }
            ),
            n = new g.xi(this.element,!0),
            g.L(this, n),
            n.subscribe("hoverstart", () => {
                z.logVisibility(this.B, !0)
            }
            , this));
            g.wo(this.element, "ytp-caption-window-rollup");
            g.L(this, this.LY);
            g.mI(this.element, "overflow", "hidden")
        }
        Yq() {
            g.A1(this.LY)
        }
        D9() {
            this.element.removeEventListener("transitionend", this.D9, !1);
            g.Nw(this.element, "ytp-rollup-mode");
            this.C(this.PA, !0)
        }
        Wd() {
            return this.W ? this.fP : this.Z
        }
        Ip() {
            return this.W ? this.Z : this.fP
        }
        C(n, m) {
            this.PA = n;
            if (this.j.params.d3) {
                var M = 0;
                for (let h = 0; h < this.A.length && M < n.length; h++)
                    this.A[h] === n[M] && M++;
                M > 0 && M < n.length && (n = this.A.concat(n.slice(M)));
                this.xq = this.fP;
                this.Z = this.fP = 0;
                super.C(n);
                sTH(this, m)
            }
            super.C(n)
        }
    }
    ;
    var JQo = class {
        constructor(n, m, M, h) {
            this.V = n;
            this.B = m;
            this.logger = M;
            this.VX = h;
            this.O9 = [];
            this.U = null;
            this.X = [];
            this.AJ = [];
            this.j = null;
            this.GX = {
                D_w: () => this.j,
                Um: () => this.O9,
                qmi: F => {
                    this.X = F
                }
                ,
                Hwv: () => this.X
            };
            n = g.PN(this.V.D().experiments, "html5_override_micro_discontinuities_threshold_ms");
            this.W = n > 0 ? n : 10
        }
        unload() {
            this.j != null && (this.V.removeEventListener("sabrCaptionsDataLoaded", this.j),
            this.j = null);
            this.O9 = [];
            this.U = null;
            this.X = [];
            this.V.publish("sabrCaptionsBufferedRangesUpdated", this.O9)
        }
        KQ(n) {
            return {
                formatId: g.kp(n.info.X6.info, this.VX),
                Ow: n.info.Ow + (this.VX ? 0 : 1),
                startTimeMs: n.info.W * 1E3,
                durationMs: n.info.C * 1E3
            }
        }
    }
    ;
    var Ulm = class extends g.vG {
        constructor(n, m) {
            super(m);
            this.j = n;
            this.V = m;
            this.logger = new g.GA("caps");
            this.C = this.fP = null;
            this.k6 = new JQo(this.V,this,this.logger,this.j.VX)
        }
        W(n, m, M) {
            this.X();
            m = n.getId();
            m = m != null && m in this.j.U ? this.j.U[m] : null;
            m || (m = n.languageCode,
            m = this.j.isManifestless ? i5Y(this, m, "386") : i5Y(this, m));
            m && (this.C = n,
            this.fP = m,
            hgw(this.k6, M),
            this.V.publish("sabrCaptionsTrackChanged", g.kp(m.info, this.j.VX)))
        }
        B(n) {
            var m = this.j.isManifestless ? ego(this, "386") : ego(this);
            for (const M of m)
                g.rF(this.U, M);
            n.MP()
        }
        X() {
            this.C && (this.C = this.fP = null,
            this.k6.unload(),
            this.V.publish("sabrCaptionsTrackChanged", null))
        }
        A() {
            return ""
        }
    }
    ;
    var PX_ = "WEBVTT".split("").map(n => n.charCodeAt(0))
      , b57 = class extends nZ {
        constructor() {
            super()
        }
        X(n, m) {
            n instanceof ArrayBuffer && (n = g.o6(new Uint8Array(n)));
            const M = [];
            n = n.split(cQY);
            for (let w = 1; w < n.length; w++) {
                var h = n[w]
                  , F = m;
                if (h !== "" && !sJY.test(h)) {
                    var e = mE.exec(h);
                    if (e && e.length >= 4) {
                        var P = Sg(e[1])
                          , E = Sg(e[2]) - P;
                        P += F;
                        var H = (e = e[3]) ? e.split(" ") : [];
                        e = {};
                        var z = null;
                        var A = "";
                        var b = null
                          , B = "";
                        for (const Z of H) {
                            H = Z.split(":");
                            if (H.length !== 2)
                                continue;
                            var a = H[1];
                            switch (H[0]) {
                            case "line":
                                H = a.split(",");
                                H[0].endsWith("%") && (z = H[0],
                                e.LT = Number.parseInt(z, 10),
                                H.length === 2 && (A = H[1].trim()));
                                break;
                            case "position":
                                H = a.split(",");
                                b = H[0];
                                e.vl = Number.parseInt(b, 10);
                                H.length === 2 && (B = H[1].trim());
                                break;
                            case "align":
                                switch (a) {
                                case "start":
                                    e.textAlign = 0;
                                    break;
                                case "middle":
                                    e.textAlign = 2;
                                    break;
                                case "end":
                                    e.textAlign = 1
                                }
                            }
                        }
                        z || A || (A = "end");
                        if (!b)
                            switch (e.textAlign) {
                            case 0:
                                e.vl = 0;
                                break;
                            case 1:
                                e.vl = 100;
                                break;
                            case 2:
                                e.vl = 50
                            }
                        if (e.textAlign != null) {
                            z = 0;
                            switch (A) {
                            case "center":
                                z += 3;
                                break;
                            case "end":
                                z += 6;
                                break;
                            default:
                                z += 0
                            }
                            switch (B) {
                            case "line-left":
                                z += 0;
                                break;
                            case "center":
                                z += 1;
                                break;
                            case "line-right":
                                z += 2;
                                break;
                            default:
                                switch (e.textAlign) {
                                case 0:
                                    z += 0;
                                    break;
                                case 2:
                                    z += 1;
                                    break;
                                case 1:
                                    z += 2
                                }
                            }
                            A = z < 0 || z > 8 ? 7 : z;
                            e.kM = A
                        }
                        h = h.substring(mE.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
                        B = e;
                        e = h;
                        h = {};
                        if (e.indexOf("<") < 0 && e.indexOf("&") < 0)
                            F = H5K(P, E, 5, B),
                            E = new gr(P,E,5,F.id,e,!1,g.oU(h) ? void 0 : h),
                            M.push(F),
                            M.push(E),
                            F.U.push(E);
                        else
                            for (A = e.split(ulm),
                            A.length === 1 ? (e = 5,
                            B = H5K(P, E, e, B)) : (z = e = 6,
                            B = Object.assign({
                                Fw: 32
                            }, B),
                            B = new $M(P,E,z,"_" + I5++,B)),
                            M.push(B),
                            z = P,
                            b = 0; b < A.length; b++)
                                if (H = A[b],
                                b % 2 === 0) {
                                    a = g.x$(`<html>${H}</html>`);
                                    let Z;
                                    a.getElementsByTagName("parsererror").length ? (Z = a.createElement("span"),
                                    Z.appendChild(a.createTextNode(H))) : Z = a.firstChild;
                                    zgq(this, z, E - (z - P), e, B, b > 0, Z, h, M)
                                } else
                                    z = Sg(H) + F
                    }
                    mE.lastIndex = 0
                }
            }
            return M
        }
    }
      , sJY = /^NOTE/
      , cQY = /(?:\r\n|\r|\n){2,}/
      , mE = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm")
      , ulm = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
    var naV = class extends g.xC {
        constructor(n, m) {
            super();
            this.V = n;
            this.iq = m;
            this.U = null;
            this.dL = this.V.uw();
            this.logger = new g.GA("caps")
        }
        clear() {
            this.U && this.U.dispose();
            this.U = null
        }
        reset() {
            this.U && this.U.reset()
        }
        jU() {
            super.jU();
            this.clear()
        }
    }
    ;
    var tn = {
        windowColor: "#080808",
        windowOpacity: 0,
        textAlign: 2,
        kM: 7,
        vl: 50,
        LT: 100,
        isDefault: !0,
        rp: {
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
    g.K0("captions", class extends g.fn {
        constructor(n) {
            super(n);
            this.V = n;
            this.BT = [];
            this.fP = {};
            this.Iz = {};
            this.N = !1;
            this.X = "NONE";
            this.U = this.Y = this.k6 = this.cT = this.zv = null;
            this.Y6 = {
                MP: () => {
                    this.MP()
                }
                ,
                TP: (h, F, e, P, E=0) => {
                    const H = Number(this.videoData.D().Z9().U.LP(g.w4Z) ?? 0);
                    E > 0 && H > 0 && this.videoData.lengthSeconds > 0 && E / this.videoData.lengthSeconds > H ? this.V.uq("tts", {
                        dropcap: E
                    }) : this.TP(h, F, e, P)
                }
            };
            this.j = null;
            this.iq = this.V.D();
            this.videoData = this.V.getVideoData();
            this.SU = this.V.rL();
            this.B = {
                rp: {}
            };
            this.A = {
                rp: {}
            };
            this.videoData.Ip() ? this.X = "OFFLINE" : g.hKZ(this.videoData, this.V) ? this.X = "HLS" : FlK(this.videoData, this.V) ? this.X = "SABR_LIVE" : g.F_3(this.videoData, this.V) ? this.X = "LIVE" : this.videoData.captionTracks.length ? this.X = "INNERTUBE" : this.videoData.Wd && (this.X = "TTS");
            this.bq = this.iq.controlsType === "3";
            this.CP = new naV(this.V,this.iq);
            this.Uw = new g.Zw(this);
            this.C = new g.U({
                K: "div",
                J: "ytp-caption-window-container",
                S: {
                    id: "ytp-caption-window-container"
                }
            });
            this.Z = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 1,
                height: 1
            };
            let m = null;
            const M = g.el("yt-html5-player-modules::subtitlesModuleData");
            M && (m = new g.Go(M));
            this.storage = m;
            this.D9 = !!n.S$()?.lq();
            this.W = Vrw(this);
            this.lq = !this.W && this.bq && this.D9 && (this.X === "LIVE" || this.X === "SABR_LIVE");
            g.L(this, this.CP);
            this.W ? this.nP = this.eU = null : (this.eU = new g.E2(this.l0,void 0,this),
            g.L(this, this.eU),
            this.nP = new g.o9(this.Yq,2E3,this),
            g.L(this, this.nP));
            g.L(this, this.Uw);
            g.jn(this.player, this.C.element, 4);
            g.L(this, this.C);
            this.W || this.Uw.L(n, "resize", this.Gv);
            (this.u0 = g.zi(this.iq) && !g.uz() && !this.V.isFullscreen() && !this.W && !this.lq) && this.Uw.L(n, "resize", this.Wd);
            this.Uw.L(n, "onPlaybackAudioChange", this.TX);
            this.Uw.L(n, g.jK("captions"), h => {
                this.onCueRangeEnter(h)
            }
            );
            this.Uw.L(n, g.RE("captions"), h => {
                this.onCueRangeExit(h)
            }
            );
            OJ(this, wr() || {});
            g.bn(this.player, "onCaptionsModuleAvailable");
            this.X === "HLS" && this.W && (n = this.V.S$().Ea(),
            this.D9 && this.Uw.L(n.textTracks, "addtrack", this.Ip))
        }
        jU() {
            if (this.W || this.lq) {
                const n = this.V.S$();
                n && !n.As() && n.N()
            } else
                pj(this, !1);
            super.jU()
        }
        Tf() {
            return this.iq.O("html5_honor_caption_availabilities_in_audio_track") && this.X !== "LIVE" && this.X !== "SABR_LIVE"
        }
        Rb() {
            if (this.bq)
                return this.W || this.lq;
            if (this.X === "HLS")
                return this.W;
            var n = this.getAudioTrack();
            if (this.Tf()) {
                if (!n.captionTracks.length)
                    return !1;
                if (!this.U)
                    return !0
            }
            n = Vy(n, g.TY(this.iq));
            return n === "CAPTIONS_INITIAL_STATE_ON_REQUIRED" ? !0 : n === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" ? vJ(this) : fj(this) || vJ(this) ? !0 : yQo(this)
        }
        load() {
            super.load();
            this.Y = this.getAudioTrack();
            if (this.U)
                this.j && (this.CP.clear(),
                this.W ? NVo(this, !0) : this.player.getPresentingPlayerType() !== 3 && this.U.W(this.j, "json3", this.Y6),
                this.X !== "HLS" && this.W || this.lq || lG(this) || g.bn(this.player, "captionschanged", g.w2(this.j)));
            else {
                let n;
                this.X === "OFFLINE" ? n = new TVY(this.player,this.videoData,this.getAudioTrack()) : this.X === "SABR_LIVE" ? n = new Ulm(this.videoData.U,this.player) : this.X === "HLS" ? n = new Rg5(this.player) : this.X === "LIVE" ? n = new Kl6(this.videoData.U,this.player) : this.X === "INNERTUBE" ? n = new g.la(this.player,this.videoData,this.getAudioTrack()) : n = new g.qB(this.player,this.videoData.Wd,this.videoData.videoId,g.gpN(this.videoData),this.videoData.QH,this.videoData.eventId);
                this.U = n;
                g.L(this, this.U);
                this.U.B(this.Y6)
            }
        }
        unload() {
            this.W && this.j ? NVo(this, !1) : (this.nP && this.nP.fU(),
            this.player.Aj("captions"),
            this.BT = [],
            this.U && this.U.X(),
            this.CP.clear(),
            this.k6 && this.player.pF(this.k6),
            this.Gv());
            super.unload();
            this.player.r6();
            g.bn(this.player, "captionschanged", {})
        }
        create() {
            this.Rb() && this.load();
            var n;
            a: {
                if (this.iq.O("web_player_nitrate_promo_tooltip") && this.videoData.getPlayerResponse()?.captions?.playerCaptionsTracklistRenderer?.enableTouchCaptionsNitrate && (n = this.videoData.getPlayerResponse()?.captions?.playerCaptionsTracklistRenderer?.captionTracks))
                    for (const m of n)
                        if (m.kind === "asr" && m.languageCode === "en") {
                            n = !0;
                            break a
                        }
                n = !1
            }
            n && this.V.publish("showpromotooltip", this.C.element)
        }
        MP() {
            var n = Vy(this.player.getAudioTrack(), g.TY(this.iq));
            var m = n === "CAPTIONS_INITIAL_STATE_ON_REQUIRED" ? T5(this, this.N) : n === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" && vJ(this) ? qu(this) : fj(this) || this.N || yQo(this) ? T5(this, this.N) : vJ(this) ? qu(this) : null;
            if (this.X !== "HLS" && this.W || this.lq) {
                const M = g.BI(this.U.U, !0);
                n = [];
                for (let h = 0; h < M.length; h++) {
                    const F = M[h]
                      , e = g.gg("TRACK");
                    e.setAttribute("kind", "subtitles");
                    e.setAttribute("label", g.xr(F));
                    e.setAttribute("srclang", g.y2(F));
                    e.setAttribute("id", F.toString());
                    this.lq || e.setAttribute("src", this.U.A(F, "vtt"));
                    F === m && e.setAttribute("default", "1");
                    n.push(e)
                }
                m = this.V.S$();
                m.k6(n);
                n = m.Ea();
                this.D9 && this.Uw.L(n.textTracks, "change", this.xq)
            } else
                !this.j && m && cJ(this, m),
                g.bn(this.player, "onCaptionsTrackListChanged"),
                g.Bt(this.player, "onApiChange")
        }
        getTrackById(n) {
            const m = g.BI(this.U.U, !0);
            for (let M = 0; M < m.length; M++)
                if (m[M].toString() === n)
                    return m[M];
            return null
        }
        xq() {
            const n = this.V.S$().Ea().textTracks;
            let m = null;
            for (let M = 0; M < n.length; M++)
                n[M].mode === "showing" && (m = this.getTrackById(n[M].id));
            (this.loaded ? this.j : null) !== m && cJ(this, m, !0)
        }
        Ip() {
            this.U?.B(this.Y6)
        }
        mp() {
            !this.j && this.W || this.unload()
        }
        TP(n, m, M, h) {
            if (n) {
                UJ(this, this.j ?? void 0);
                this.U.Z() && (this.BT = [],
                this.V.Aj("captions"),
                a5(this.eU),
                this.CP.reset());
                a: {
                    var F = this.CP;
                    h = h || 0;
                    M = AQ6(F, n, M || 0);
                    n = [];
                    try {
                        for (const r of M) {
                            const K = r.trackData
                              , D = r.H9
                              , O = F.iq.O("safari_live_drm_captions_fix");
                            if (typeof K !== "string") {
                                M = n;
                                var e = M.concat;
                                if (O && EYo(K))
                                    var P = BV5(F, K, D);
                                else {
                                    var E = F
                                      , H = m
                                      , z = K
                                      , A = D
                                      , b = h;
                                    if (!JEH(z))
                                        throw Error("Invalid binary caption track data");
                                    E.U || (E.U = new kk_(b,H));
                                    P = E.U.X(z, A)
                                }
                                var B = e.call(M, P)
                            } else {
                                if (K.substring(0, 6) === "WEBVTT")
                                    var a = n.concat(BV5(F, K, D));
                                else {
                                    M = n;
                                    var w = M.concat;
                                    b: {
                                        H = F;
                                        E = m;
                                        if (K[0] === "{")
                                            try {
                                                H.U || (H.U = new qS_(aD5(E)));
                                                var Z = H.U.X(K, D);
                                                break b
                                            } catch (ON) {
                                                g.Rw(ON);
                                                Z = [];
                                                break b
                                            }
                                        const iL = g.x$(K);
                                        if (!iL || !iL.firstChild) {
                                            const ON = Error("Invalid caption track data");
                                            ON.params = K;
                                            throw ON;
                                        }
                                        if (iL.firstChild.tagName === "timedtext") {
                                            if (Number(iL.firstChild.getAttribute("format")) === 3) {
                                                z = iL;
                                                H.U || (H.U = new vYV(aD5(E)));
                                                Z = H.U.X(z, D);
                                                break b
                                            }
                                            const ON = Error("Unsupported subtitles format in web player (Format2)");
                                            ON.params = K;
                                            throw ON;
                                        }
                                        if (iL.firstChild.tagName === "transcript") {
                                            const ON = Error("Unsupported subtitles format in web player (Format1)");
                                            ON.params = K;
                                            throw ON;
                                        }
                                        const e3 = Error("Invalid caption track data");
                                        e3.params = K;
                                        throw e3;
                                    }
                                    a = w.call(M, Z)
                                }
                                B = a
                            }
                            n = B
                        }
                        var W = n;
                        break a
                    } catch (r) {
                        g.kn(F.logger, 187101178, `Captions parsing failed: ${r.message}. `);
                        F.clear();
                        W = [];
                        break a
                    }
                    W = void 0
                }
                this.iq.O("html5_sabr_live_support_subfragmented_captions") && this.U instanceof Ulm && (m = this.U.k6,
                F = [],
                W.length > 0 && (F = W.slice(m.X.length)),
                m.X = !m.U || m.U.info.X ? [] : W,
                W = F);
                W.length > 0 && (m = this.j,
                this.Qg(m, !!m, lG(this) ? "g" : this.N ? "m" : "s"));
                this.player.pF(W, void 0, this.X === "LIVE" || this.X === "SABR_LIVE");
                !this.N || this.lq || lG(this) || g.x5(this.iq) || g.HO(this.iq) || g.J4(this.iq) || this.iq.fP === "shortspage" || this.player.isInline() || (this.nP.fU(),
                W = fXq({
                    kM: 0,
                    vl: 5,
                    LT: 5,
                    d3: 2,
                    textAlign: 0,
                    zY: 0,
                    lang: "en"
                }),
                this.cT = [W],
                m = ["Click ", " for settings"],
                this.zv || (F = new g.fD(g.I8()),
                g.L(this, F),
                this.zv = F.element),
                F = W.end - W.start,
                (B = g.xr(this.j)) && this.cT.push(new gr(W.start,F,0,W.id,B)),
                this.cT.push(new gr(W.start,F,0,W.id,m[0]), new gr(W.start,F,0,W.id,this.zv,!0), new gr(W.start,F,0,W.id,m[1],!0)),
                this.player.pF(this.cT),
                this.nP.gx());
                !this.N || this.lq || lG(this) || (this.iq.O("enable_player_captions_persistence_state_machine") ? G5(this, !0) : g.TY(this.iq) ? kM(this, !0) : Jn(this, !0),
                this.Y && (this.Y.W = this.j),
                this.player.r6());
                this.N = !1
            }
        }
        onCueRangeEnter(n) {
            this.BT.push(n);
            a5(this.eU)
        }
        onCueRangeExit(n) {
            g.L7(this.BT, n);
            this.U instanceof Kl6 && this.U.fP && this.player.GA([n]);
            a5(this.eU)
        }
        getCaptionWindowContainerId() {
            return this.C.element.id
        }
        Yq() {
            xlS(this, this.cT);
            this.cT = null
        }
        l0() {
            if (!this.u0 || !this.W) {
                this.eU.stop();
                g.Aa(this.Iz);
                this.BT.sort(g.$5);
                var n = this.BT;
                if (this.k6) {
                    const m = g.lL(n, function(M) {
                        return this.k6.indexOf(M) === -1
                    }, this);
                    m.length && (n = m)
                }
                for (const m of n)
                    m instanceof $M ? Z5m(this, m) : Xhw(this, m);
                for (const [m,M] of Object.entries(this.fP)) {
                    const h = m
                      , F = M;
                    this.Iz[h] ? (F.element.parentNode || (F instanceof IDY || F instanceof gYP || g.qH(this.fP, (e, P) => {
                        P !== h && e.j.params.kM === F.j.params.kM && e.j.params.vl === F.j.params.vl && e.j.params.LT === F.j.params.LT && (e.dispose(),
                        delete this.fP[P]);
                        return P === h
                    }
                    , this),
                    this.C.element.appendChild(F.element)),
                    F.C(this.Iz[h])) : (F.dispose(),
                    delete this.fP[h])
                }
            }
        }
        jV() {
            OJ(this, {}, !0);
            g.bn(this.player, "captionssettingschanged")
        }
        Pb() {
            var n = tn.rp;
            n = {
                background: n.background,
                backgroundOpacity: n.backgroundOpacity,
                charEdgeStyle: n.charEdgeStyle,
                color: n.color,
                fontFamily: n.fontFamily,
                fontSizeIncrement: n.fontSizeIncrement,
                fontStyle: n.bold && n.italic ? 3 : n.bold ? 1 : n.italic ? 2 : 0,
                textOpacity: n.textOpacity,
                windowColor: tn.windowColor,
                windowOpacity: tn.windowOpacity
            };
            const m = wr() || {};
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
        WU(n, m) {
            const M = {};
            Object.assign(M, wr());
            Object.assign(M, n);
            OJ(this, M, m);
            g.bn(this.player, "captionssettingschanged")
        }
        Gv() {
            !this.W && this.loaded && (g.f7(this.fP, function(n, m) {
                n.dispose();
                delete this.fP[m]
            }, this),
            this.l0())
        }
        fN(n, m) {
            switch (n) {
            case "fontSize":
                if (isNaN(m))
                    break;
                n = g.UO(m, -2, 4);
                this.WU({
                    fontSizeIncrement: n
                });
                return n;
            case "reload":
                m && !this.W && cJ(this, this.j, !0);
                break;
            case "stickyLoading":
                m !== void 0 && this.iq.C && (this.iq.O("enable_player_captions_persistence_state_machine") ? G5(this, !(!m || !m.userInitiated)) : g.TY(this.iq) ? kM(this, !!m) : Jn(this, !!m));
                break;
            case "track":
                return $lV(this, m);
            case "tracklist":
                return this.U ? g.q7(g.BI(this.U.U, !(!m || !m.includeAsr)), M => g.w2(M)) : [];
            case "translationLanguages":
                return this.U ? this.U.Y.map(M => Object.assign({}, M)) : [];
            case "sampleSubtitles":
                this.W || m === void 0 || pj(this, !!m);
                break;
            case "sampleSubtitlesCustomized":
                this.W || pj(this, !!m, m);
                break;
            case "recommendedTranslationLanguages":
                return g.GY();
            case "defaultTranslationSourceTrackIndices":
                return this.U ? this.U.Uw : []
            }
        }
        getOptions() {
            const n = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
            this.iq.C && n.push("stickyLoading");
            return n
        }
        DU() {
            let n = this.j;
            if (this.V.Ag("captions")) {
                if (this.iq.O("html5_modify_caption_vss_logging"))
                    return (n = this.videoData.B5 ?? null) ? {
                        cc: g.RlU(n)
                    } : {};
                if (n) {
                    let m = n.vssId;
                    n.translationLanguage && m && (m = `t${m}.${g.y2(n)}`);
                    return {
                        cc: m
                    }
                }
            }
            return {}
        }
        Yv(n) {
            this.isSubtitlesOn() ? (this.iq.O("enable_player_captions_persistence_state_machine") && n ? G5(this, !1) : g.TY(this.iq) ? kM(this, !1) : Jn(this, !1),
            UJ(this),
            cJ(this, null, !0)) : this.Hk(n)
        }
        Hk(n) {
            const m = lG(this) || !this.j ? T5(this, !0) : this.j;
            m && this.DD(m.vssId, "m");
            this.isSubtitlesOn() || cJ(this, m, this.iq.O("enable_player_captions_persistence_state_machine") ? n : !0)
        }
        isSubtitlesOn() {
            return !!this.loaded && !!this.j && !lG(this)
        }
        TX() {
            const n = lG(this);
            vJ(this, n) ? cJ(this, this.getAudioTrack().U, !1) : this.videoData.captionTracks.length && (this.loaded && this.unload(),
            this.Tf() && (this.N = !1,
            this.j = null,
            this.U && (this.U.dispose(),
            this.U = null)),
            this.Rb() && (n ? cJ(this, T5(this, !1), !1) : this.load()))
        }
        MH(n) {
            n && (this.Z = {
                top: n.top,
                right: n.right,
                bottom: n.bottom,
                left: n.left,
                width: 1 - n.left - n.right,
                height: 1 - n.top - n.bottom
            },
            this.C.element.style.top = `${this.Z.top * 100}%`,
            this.C.element.style.left = `${this.Z.left * 100}%`,
            this.C.element.style.width = `${this.Z.width * 100}%`,
            this.C.element.style.height = `${this.Z.height * 100}%`,
            this.C.element.style.position = "absolute",
            n = Llq(this)) && (this.C.element.style.width = `${n.width}px`,
            this.C.element.style.height = `${n.height}px`)
        }
        onVideoDataChange(n, m) {
            n === "newdata" && (this.videoData = m,
            this.loaded && this.unload(),
            this.N = !1,
            this.j = null,
            this.U && (this.U.dispose(),
            this.U = null,
            g.bn(this.player, "captionschanged", {})),
            this.Rb() && this.load())
        }
        getAudioTrack() {
            return this.player.getAudioTrack()
        }
        Wd() {
            const n = this.V.S$();
            n && !n.As() && n.N();
            this.V.isFullscreen() ? (this.W = this.bq = !0,
            this.loaded && this.MP()) : (this.bq = this.iq.controlsType === "3",
            this.W = Vrw(this));
            cJ(this, this.j)
        }
        Js() {
            const n = this.videoData.getPlayerResponse()?.captions?.playerCaptionsTracklistRenderer?.openTranscriptCommand;
            n && g.Ht(this.player, "innertubeCommand", n)
        }
        Qg(n, m, M) {
            const h = /&|,|:|;|(\n)|(\s)|(\/)|(\\)/gm;
            let F = "";
            n && (F = n.vssId,
            F = F.replace(h, ""));
            let e = "";
            n && n.getId() && (e = n.getId() || "");
            n && n.getXtags() && (n = n.getXtags(),
            n = n.replace(h, ""),
            e = e.concat(`;${n}`));
            this.X === "HLS" && (e = "");
            this.V.Qg(m ? F : "", m ? e : "", M)
        }
        DD(n, m) {
            n = (n || "").replace(/&|,|:|;|(\n)|(\s)|(\/)|(\\)/gm, "");
            n.length > 0 && this.V.DD(n, m)
        }
    }
    );
}
)(_yt_player);
