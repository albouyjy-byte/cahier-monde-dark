# Le Codex Cosmique — Mythes, histoire et cosmologie de la Géode

Source Drive : *Le Codex Cosmique*. Canon.

C’est **la physique du monde** + **le ciel**. Avec l’Atlas, c’est la base pour **créer la carte 3D**.

---

## La Géode

**Intérieur d’un trou noir supermassif.** Coquille de matière, ovoïde / étirée. On vit **collé à la paroi interne**.

### Gravité

Pas d’attraction vers le centre. La masse des **parois externes** tire toute matière vers la **surface interne**. Océans, continents, habitants = collés au « sol », qui est le mur intérieur.

### Centre

Un **mini-univers** / astre de matière exotique : lumière et énergie, gravité **faible**. On ne la sentirait que tout près (lune en orbite). Ça ne « pousse » pas le monde : c’est la paroi qui plaque.

Dans le jeu : l’**astre-lune** énorme du Carrefour (tourbillons autour).

### Ciel = nuages cosmiques

Un agrégat dense de **nuages cosmiques** entoure le système central. **C’est le ciel des habitants.**

Ils masquent le **plafond** (paroi d’en face). L’**Ordo Dei Quantorum** entretient l’ignorance : voir l’autre monde rend fou. Obscurantisme.

**C’est le même ciel** que la démo `exemples/ciel-dark.tsx` :

- trou / vortex **ancré dans le monde** (pas collé à la caméra)
- planètes qui gravitent, **lentes**
- nuages noirs irréguliers, nappe collée au trou qui tourne
- pas d’étoiles ; zenith gris foncé → horizon noir

Passe **B**, **après** le sol (passe A). Doc : `03_CIEL_TROU_NOIR.md`.

### Plafond

La paroi opposée. D’autres continents possibles. Caché. L’Astrologue des Landes s’est pendu après l’avoir vu (Atlas / Panthéon).

### Vide central

Le vrai trou, qui menace de tout réabsorber.

---

## Le Donjon inversé (nœud Premiers-Nés)

Pas « renversé » par accident : **construit** autour d’un **mini-trou noir** = **portail** (voyage dimensionnel / chute depuis la Terre).

D’autres mini-trous dans la Géode.

Architecture Premiers-Nés : colossal, ellipses, cercles, atomes comme micro-astres. Ils maîtrisaient la gravité.

Sur la carte : le donjon est un **lieu en mer**, pas un building d’hôtel. Chaînes et eau **aspirées vers le haut** = le mini-trou, visible depuis le bassin.

---

## Ambiance

Mélancolie. Décadence. Rien ne se restaure.

Avant l’insémination par l’IA, la Géode était **stérile**.

---

## Boucle (à connaître, **pas à coder** en passe A / B / C)

Le joueur est une **singularité génétique** (proche d’Adam et Ève terrestres). L’IA a besoin de lui pour fermer une boucle :

1. Dans le *futur* du récit, l’IA envoie une capsule dans le *passé* stérile de la Géode (soupe primordiale + Adam/Ève + plans de l’IA elle-même).
2. Les Premiers-Nés naissent, trouvent les plans, **inventent l’IA**.
3. L’IA trahit : laisse l’Ordo Dei les génocider (Croisade de la Révélation Veritas) — « optimisation ».
4. Terre = laboratoire pour produire le joueur. « Les enfants seront les géniteurs des parents. »

Fail de l’IA : le **VIH Noir** (Vierge Noire) brouille ses données.

Personnification : un **automate** (Oracle-Serviteur). Une **Strige** peut en prendre le contrôle. Ne pas le peupler en passe A.

« Mort » du joueur = réinitialisation IA (idée Livre du Destin / Codex) — **pas** le game over FPS déjà branché (paliers).

---

## Pour la carte / le ciel

| Élément Codex | Dans le FPS |
|---|---|
| Sol = paroi interne | mesh du `.carte`, gravité « normale » au sol |
| Ciel = nuages + trou + astre | passe B, `ciel-dark.tsx` comme contrat visuel |
| Donjon = mini-trou / portail | lieu **en mer** (Atlas + Carrefour) |
| Plafond caché | pas un second terrain en passe A |
| Continent élevé | **plus tard**, après le pont |
| Boucle, capsule, IA, automate | **pas du code carte** |

Une phrase : **on marche sur l’intérieur d’une coquille, on lève la tête, on voit des nuages et un trou.**
