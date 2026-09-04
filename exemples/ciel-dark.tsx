import { useEffect, useRef, useState } from "react";

type Props = { onCarte: () => void };

function rnd(s: { n: number }) {
  s.n = (s.n * 1103515245 + 12345) & 0x7fffffff;
  return s.n / 0x7fffffff;
}

/** Silhouette irrégulière : pas d’ovale, pas de cercle. */
function tacheOrganique(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, st: { n: number }) {
  const n = 10 + Math.floor(rnd(st) * 6);
  const pts: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    const ang = (i / n) * Math.PI * 2 + (rnd(st) - 0.5) * 0.55;
    const r = s * (0.18 + rnd(st) * 0.95);
    pts.push([cx + Math.cos(ang) * r, cy + Math.sin(ang) * r * (0.4 + rnd(st) * 0.45)]);
  }
  ctx.beginPath();
  const m0x = (pts[0][0] + pts[n - 1][0]) / 2;
  const m0y = (pts[0][1] + pts[n - 1][1]) / 2;
  ctx.moveTo(m0x, m0y);
  for (let i = 0; i < n; i++) {
    const p = pts[i];
    const q = pts[(i + 1) % n];
    ctx.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2);
  }
  ctx.closePath();
}

function spriteTache(taille: number, gris: number, graine: number, bd: boolean) {
  const c = document.createElement("canvas");
  c.width = c.height = taille;
  const x = c.getContext("2d");
  if (!x) return c;
  const st = { n: graine | 1 };
  const mid = taille / 2;
  x.clearRect(0, 0, taille, taille);

  for (let k = 0; k < 3; k++) {
    const g = gris + (rnd(st) - 0.5) * 18;
    x.fillStyle = `rgba(${g | 0},${(g - 4) | 0},${(g + 6) | 0},${0.55 + rnd(st) * 0.3})`;
    tacheOrganique(x, mid + (rnd(st) - 0.5) * taille * 0.2, mid + (rnd(st) - 0.5) * taille * 0.15, taille * (0.28 + rnd(st) * 0.22), st);
    x.fill();
    const tend = 1 + Math.floor(rnd(st) * 3);
    for (let t = 0; t < tend; t++) {
      const a = rnd(st) * Math.PI * 2;
      const L = taille * (0.15 + rnd(st) * 0.28);
      x.beginPath();
      x.moveTo(mid, mid);
      x.quadraticCurveTo(
        mid + Math.cos(a) * L * 0.4 + (rnd(st) - 0.5) * 20,
        mid + Math.sin(a) * L * 0.25,
        mid + Math.cos(a) * L,
        mid + Math.sin(a) * L * 0.45,
      );
      x.quadraticCurveTo(
        mid + Math.cos(a + 0.4) * L * 0.5,
        mid + Math.sin(a + 0.3) * L * 0.2,
        mid,
        mid,
      );
      x.fill();
    }
  }

  if (bd) {
    x.fillStyle = "rgba(18,16,20,0.08)";
    tacheOrganique(x, mid, mid, taille * 0.42, st);
    x.fill();
    x.save();
    tacheOrganique(x, mid, mid, taille * 0.44, { n: graine | 1 });
    x.clip();
    x.strokeStyle = "rgba(20,16,22,0.7)";
    x.lineWidth = 1;
    const yHatch = mid * 0.85;
    for (let i = -taille; i < taille * 2; i += 6) {
      x.beginPath();
      x.moveTo(i, yHatch);
      x.lineTo(i - taille * 0.55, taille);
      x.stroke();
    }
    x.strokeStyle = "rgba(12,10,14,0.85)";
    for (let i = -taille; i < taille * 2; i += 5) {
      x.beginPath();
      x.moveTo(i, mid * 1.25);
      x.lineTo(i + taille * 0.4, taille);
      x.stroke();
    }
    x.restore();
    x.strokeStyle = "#111014";
    x.lineWidth = 2;
    tacheOrganique(x, mid, mid, taille * 0.44, { n: graine | 1 });
    x.stroke();
  }
  return c;
}

function eclairTrait(
  ctx: CanvasRenderingContext2D,
  x0: number, y0: number, x1: number, y1: number, seed: number, forks = 2,
) {
  let n = seed | 1;
  const r = () => {
    n = (n * 1103515245 + 12345) & 0x7fffffff;
    return n / 0x7fffffff;
  };
  const subdivide = (pts: { x: number; y: number }[], amount: number) => {
    const out: { x: number; y: number }[] = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      const dx = b.x - a.x, dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 1;
      out.push(a);
      out.push({
        x: (a.x + b.x) / 2 + (-dy / len) * (r() - 0.5) * amount,
        y: (a.y + b.y) / 2 + (dx / len) * (r() - 0.5) * amount,
      });
    }
    out.push(pts[pts.length - 1]);
    return out;
  };
  let pts = [{ x: x0, y: y0 }, { x: x1, y: y1 }];
  let amt = Math.hypot(x1 - x0, y1 - y0) * 0.22;
  for (let i = 0; i < 5; i++) {
    pts = subdivide(pts, amt);
    amt *= 0.48;
  }
  const trait = (col: string, lw: number) => {
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.strokeStyle = col;
    ctx.lineWidth = lw;
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.miterLimit = 8;
    ctx.stroke();
  };
  trait("rgba(40,10,70,0.35)", 7);
  trait("rgba(6,2,10,0.95)", 2.2);
  trait("rgba(120,70,160,0.35)", 0.9);
  if (forks > 0 && pts.length > 8) {
    const k = 4 + Math.floor(r() * (pts.length - 8));
    const p = pts[k];
    const ang = Math.atan2(y1 - y0, x1 - x0) + (r() - 0.5) * 1.2;
    const L = 40 + r() * 70;
    eclairTrait(ctx, p.x, p.y, p.x + Math.cos(ang) * L, p.y + Math.sin(ang) * L, n, forks - 1);
  }
}

export function CielDark({ onCarte }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const bdRef = useRef(true);
  const [bd, setBd] = useState(true);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const g = canvas.getContext("2d");
    if (!g) return;
    const cv = canvas;
    const ctx = g;
    let alive = true;
    let w = 0;
    let h = 0;
    let yaw = 0;
    let pitch = 0;
    let drag = false;
    let lx = 0;
    let ly = 0;
    const t0 = performance.now();
    let flashAt = t0 - 4000;
    let flashSeed = 7;
    let raf = 0;
    const FOV = 1.4;
    const TROU_AZ = 0;
    const TROU_EL = 0.42;

    const spr = [0, 1, 2, 3].map((i) => ({
      clair: spriteTache(140, 82 - i * 5, 11 + i * 17, false),
      clairBd: spriteTache(140, 200 - i * 8, 11 + i * 17, false),
      fonce: spriteTache(140, 52 - i * 3, 55 + i * 11, false),
      fonceBd: spriteTache(140, 52 - i * 3, 55 + i * 11, false),
      sombre: spriteTache(140, 22 + i * 3, 80 + i * 13, false),
      sombreBd: spriteTache(140, 28 + i * 4, 80 + i * 13, false),
    }));

    type N = { az: number; el: number; s: number; couche: number; sp: number; daz: number; del: number; sombre: boolean };
    const nuages: N[] = [];
    for (let i = 0; i < 40; i++) {
      nuages.push({
        az: Math.random() * Math.PI * 2,
        el: 0.05 + Math.random() * 1.25,
        s: ((i % 5 === 0 ? 280 : 130) + Math.random() * 120) * 2,
        couche: i % 4,
        sp: i % spr.length,
        daz: (Math.random() - 0.5) * 0.00035,
        del: (Math.random() - 0.5) * 0.00012,
        sombre: i % 5 === 0 || i % 7 === 0,
      });
    }
    nuages.sort((a, b) => a.couche - b.couche);

    type V = { ang: number; rayAz: number; rayEl: number; s: number; sp: number; vit: number };
    const vortex: V[] = [];
    for (let i = 0; i < 40; i++) {
      vortex.push({
        ang: (i / 40) * Math.PI * 2,
        rayAz: 0.16 + (i % 5) * 0.08,
        rayEl: 0.055 + (i % 4) * 0.028,
        s: 110 + (i % 6) * 32,
        sp: i % spr.length,
        vit: 0.16 + (i % 5) * 0.04,
      });
    }
    const vortexGros: V[] = [];
    for (let i = 0; i < 16; i++) {
      vortexGros.push({
        ang: (i / 16) * Math.PI * 2 + 0.4,
        rayAz: 0.4 + (i % 4) * 0.13,
        rayEl: 0.11 + (i % 3) * 0.055,
        s: 260 + (i % 5) * 60,
        sp: i % spr.length,
        vit: 0.07 + (i % 4) * 0.025,
      });
    }

    function resize() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = Math.max(320, window.innerWidth);
      h = Math.max(240, window.innerHeight);
      cv.width = Math.floor(w * dpr);
      cv.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const wrap = (a: number) => {
      while (a > Math.PI) a -= Math.PI * 2;
      while (a < -Math.PI) a += Math.PI * 2;
      return a;
    };
    const toX = (az: number, par: number) => w / 2 + (wrap(az - yaw * par) / FOV) * w;
    const toY = (el: number, horizon: number) => horizon - (el - pitch) * h * 0.72;

    const down = (e: PointerEvent) => {
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      cv.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      yaw = wrap(yaw - ((e.clientX - lx) / w) * FOV * 1.8);
      pitch = Math.max(-0.35, Math.min(0.7, pitch + ((e.clientY - ly) / h) * 0.9));
      lx = e.clientX;
      ly = e.clientY;
    };
    const up = () => {
      drag = false;
    };
    cv.addEventListener("pointerdown", down);
    cv.addEventListener("pointermove", move);
    cv.addEventListener("pointerup", up);

    function herbe(y0: number, shift: number) {
      ctx.strokeStyle = "rgba(90,78,32,0.85)";
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 180; i++) {
        const x = ((i * 47 + shift) % (w + 80)) - 40;
        const y = y0 + ((i * 19) % 40);
        const hh = 6 + (i % 7);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x + 2, y - hh * 0.5, x + ((i % 3) - 1) * 3, y - hh);
        ctx.stroke();
      }
    }

    function arbreRonce(x: number, y: number, sc: number) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(sc, sc);
      ctx.strokeStyle = "#120e0a";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(-8, -40, 4, -88);
      ctx.stroke();
      ctx.lineWidth = 2;
      for (const [ax, ay, bx, by] of [
        [-4, -30, -38, -62], [2, -44, 32, -70], [-2, -55, -22, -92],
        [6, -60, 28, -96], [-6, -22, -30, -40], [4, -18, 24, -36],
      ] as const) {
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.quadraticCurveTo((ax + bx) / 2 + 6, (ay + by) / 2, bx, by);
        ctx.stroke();
      }
      ctx.restore();
    }

    function statue(x: number, y: number, sc: number) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(sc, sc);
      ctx.fillStyle = "#3a3632";
      ctx.fillRect(-28, -118, 56, 130);
      ctx.fillStyle = "#2c2926";
      ctx.fillRect(-22, -20, 44, 28);
      ctx.fillStyle = "#1f1c1a";
      ctx.beginPath();
      ctx.ellipse(-10, -88, 6, 4, 0, 0, Math.PI * 2);
      ctx.ellipse(10, -88, 6, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function tampon(n: N, horizon: number) {
      const par = 0.28 + n.couche * 0.26;
      const x = toX(n.az, par);
      const y = toY(n.el, horizon);
      if (x < -n.s || x > w + n.s || y > horizon + 50 || y < -n.s) return;
      const pack = spr[n.sp];
      const img = n.sombre
        ? (bdRef.current ? pack.fonceBd : pack.fonce)
        : (bdRef.current ? pack.clairBd : pack.clair);
      ctx.globalAlpha = 0.82 + n.couche * 0.04;
      ctx.drawImage(img, x - n.s / 2, y - n.s * 0.38, n.s, n.s * 0.72);
      ctx.globalAlpha = 1;
    }

    function frame(now: number) {
      if (!alive) return;
      const t = (now - t0) / 1000;
      const horizon = h * (0.58 + pitch * 0.4);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, w, h);
      const ciel = ctx.createLinearGradient(0, 0, 0, horizon);
      ciel.addColorStop(0, "#3a3840");
      ciel.addColorStop(1, "#060508");
      ctx.fillStyle = ciel;
      ctx.fillRect(0, 0, w, h);
      const holeR = Math.min(w, h) * 0.09;
      const hx = toX(TROU_AZ, 1);
      const hy = toY(TROU_EL, horizon);

      for (const n of nuages) {
        n.az += n.daz;
        n.el += n.del;
        if (n.az > Math.PI) n.az -= Math.PI * 2;
        if (n.az < -Math.PI) n.az += Math.PI * 2;
        if (n.el < 0.04 || n.el > 1.32) n.del *= -1;
        tampon(n, horizon);
      }

      const tourne = (liste: V[]) => {
        for (const v of liste) {
          v.ang += v.vit * 0.012;
          const az = TROU_AZ + Math.cos(v.ang) * v.rayAz;
          const el = TROU_EL + Math.sin(v.ang) * v.rayEl;
          const x = toX(az, 1);
          const y = toY(el, horizon);
          if (x < -v.s || x > w + v.s || y > horizon + 40) continue;
          const img = bdRef.current ? spr[v.sp].sombreBd : spr[v.sp].sombre;
          ctx.globalAlpha = 0.88;
          ctx.drawImage(img, x - v.s / 2, y - v.s * 0.35, v.s, v.s * 0.62);
          ctx.globalAlpha = 1;
        }
      };
      tourne(vortexGros);
      tourne(vortex);

      const holeOnScreen = hx > -holeR * 2 && hx < w + holeR * 2;
      if (holeOnScreen) {
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(hx, hy, holeR * 1.15, holeR * 1.05, 0, 0, Math.PI);
        ctx.closePath();
        ctx.clip();
        const hg = ctx.createRadialGradient(hx, hy + holeR * 0.15, holeR * 0.08, hx, hy, holeR * 1.2);
        hg.addColorStop(0, "#1a1420");
        hg.addColorStop(0.5, "#07050a");
        hg.addColorStop(1, "#000");
        ctx.fillStyle = hg;
        ctx.fillRect(hx - holeR * 1.5, hy - 4, holeR * 3, holeR * 2.2);
        ctx.restore();
        for (let i = 0; i < 8; i++) {
          const ang = t * 0.08 + i * 0.8;
          const img = bdRef.current ? spr[i % spr.length].sombreBd : spr[i % spr.length].sombre;
          ctx.globalAlpha = 0.85;
          ctx.drawImage(img, hx + Math.cos(ang) * holeR * 1.05 - 45, hy - 26 + Math.sin(ang) * 6, 95, 58);
          ctx.globalAlpha = 1;
        }
        for (let i = 0; i < 4; i++) {
          const ang = t * (0.05 + i * 0.03) + i * 1.4;
          const px = hx + Math.cos(ang) * holeR * (2.2 + i * 0.7);
          const py = hy + Math.sin(ang) * holeR * (0.5 + i * 0.12);
          const gcol = ctx.createRadialGradient(px - 4, py - 4, 1, px, py, 8 + i);
          gcol.addColorStop(0, ["#c4a070", "#9aa8b4", "#b07058", "#d0c4b0"][i]);
          gcol.addColorStop(1, "#2a2018");
          ctx.beginPath();
          ctx.arc(px, py, 6 + i * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = gcol;
          ctx.fill();
        }
      }

      const lookingSea = Math.cos(yaw) > -0.15;
      const sea = ctx.createLinearGradient(0, horizon, 0, h * 0.8);
      sea.addColorStop(0, lookingSea ? "#6a7380" : "#3d3828");
      sea.addColorStop(0.2, lookingSea ? "#3a4654" : "#322e20");
      sea.addColorStop(1, lookingSea ? "#1a222c" : "#241f14");
      ctx.fillStyle = sea;
      ctx.fillRect(0, horizon, w, h);
      if (lookingSea) {
        ctx.strokeStyle = "rgba(180,190,200,0.16)";
        ctx.lineWidth = 1;
        for (let i = 0; i < 8; i++) {
          const y = horizon + 10 + i * 10;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.bezierCurveTo(w * 0.3, y + 2, w * 0.6, y - 2, w, y + 1);
          ctx.stroke();
        }
      }

      const sx = toX(0, 1);
      if (lookingSea && sx > -80 && sx < w + 80) statue(sx, horizon + 78, Math.min(w, h) / 900);

      const land = h * 0.76;
      ctx.fillStyle = "#4a4228";
      ctx.beginPath();
      ctx.moveTo(0, h);
      ctx.lineTo(0, land);
      ctx.quadraticCurveTo(w * 0.4, land - 8, w, land + 18);
      ctx.lineTo(w, h);
      ctx.fill();
      ctx.fillStyle = "#5a4e2a";
      ctx.fillRect(0, land + 12, w, h);
      herbe(land + 8, yaw * 180);

      const treeX = toX(0.35, 1);
      const treeY = h * 0.93;
      if (treeX > -60 && treeX < w + 60) {
        arbreRonce(treeX, treeY, Math.min(w, h) / 700);
        arbreRonce(treeX + 70, treeY + 10, Math.min(w, h) / 1100);
      }

      if ((now - flashAt) / 1000 > 5.2) {
        flashAt = now;
        flashSeed = (now * 17) | 0;
      }
      const age = (now - flashAt) / 1000;
      if (age < 0.7 && holeOnScreen) {
        if (age < 0.1) {
          ctx.fillStyle = `rgba(160,70,220,${0.55 * (1 - age / 0.1)})`;
          ctx.fillRect(0, 0, w, h);
        } else {
          ctx.fillStyle = `rgba(0,0,0,${0.82 * (1 - (age - 0.1) / 0.6)})`;
          ctx.fillRect(0, 0, w, h);
        }
        eclairTrait(ctx, hx, hy + 8, treeX, treeY - 90, flashSeed);
      }

      ctx.fillStyle = "rgba(0,0,0,0.45)";
      ctx.fillRect(12, h - 40, 420, 28);
      ctx.fillStyle = "#e4e4e7";
      ctx.font = "13px system-ui,sans-serif";
      const cote = wrap(TROU_AZ - yaw) > 0 ? "→" : "←";
      ctx.fillText(
        holeOnScreen
          ? "Glisse tout autour : un tour et tu retombes sur le trou."
          : `Continue ${cote}  — le trou revient (tour complet).`,
        20,
        h - 21,
      );

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      cv.removeEventListener("pointerdown", down);
      cv.removeEventListener("pointermove", move);
      cv.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50"
      style={{ background: "linear-gradient(#3a3840, #060508)" }}
    >
      <canvas ref={ref} className="absolute inset-0 block h-full w-full touch-none" />
      <button
        type="button"
        className="absolute right-3 top-3 z-10 h-11 rounded-md bg-zinc-100 px-3 text-sm font-medium text-zinc-900"
        onClick={onCarte}
      >
        Retour carte
      </button>
      <label className="absolute right-3 top-16 z-10 flex h-11 cursor-pointer items-center gap-2 rounded-md bg-black/55 px-3 text-sm text-zinc-100">
        <input
          type="checkbox"
          className="size-4"
          checked={bd}
          onChange={(e) => {
            bdRef.current = e.target.checked;
            setBd(e.target.checked);
          }}
        />
        Bande dessinée
      </label>
    </div>
  );
}
