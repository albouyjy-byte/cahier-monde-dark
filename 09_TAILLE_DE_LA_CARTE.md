# Taille de la carte Dark — décision Jean-Yves, 4 sept 2026

**Verrouillé.** Ce n’est pas un avis. Ce n’est pas la carte Sud de l’hôtel.

Claude Code : tu **lis** ça. Tu ne fabriques pas cette grille en passe A.
Tu ne touches pas au cartographe 2D. Tu ne scripte pas le vol du dragon.

---

## 1. Les Landes = la terre, pas la mer

```
minimum  10 km de large  ×  20 km de long
```

**Ça, c’est le morceau de terre.** Landes + plage + fosse + forêt de pins noirs.

**Ça n’inclut pas la mer.**

| Axe terre | Mètres | Sur le canevas |
|---|---|---|
| **Longueur** (est–ouest) | **20 000 m** | le grand côté |
| **Largeur** (nord–sud) | **10 000 m** | haut → bas, **sans** l’océan |

Haut d’écran = **NORD**. `iy = 0` = bord nord.  
Bas de la carte = **SUD**.

Sur cette terre :

- **Plage** : bande en **bas** (sud), **20 km de long × 3 km de large**
- **Landes** au nord de la plage (~7 km)
- **Fosse** sur la terre
- **Forêt de pins noirs** **au-dessus** de la fosse (plus haut / en retrait)

La carte peinte (`exemples/carte-peinte-entiere.jpg`) le montre : terre au milieu, **beaucoup d’eau tout autour**.

---

## 2. La mer autour — très grande

L’océan **entoure** les Landes. Il n’est pas une mince gouttière.

Il doit **donner la sensation d’être immense**. Comme sur la peinture : eau à l’ouest, à l’est, au sud — le donjon est **une tache dans l’océan**, pas collé à la plage.

```
terre (Landes)     =  10 km × 20 km
mer autour         =  EN PLUS, très grande
```

Le `.carte` final = terre **+** cette mer.  
`nx * cell_m` et `ny * cell_m` seront **plus grands** que 10 × 20 km.

`cell_m` se **lit dans le fichier**. Pas 1 en dur. Pas 4000 en dur. Pas 10 000 / 20 000 en dur.

---

## 3. Vol donjon → grotte : 5 à 6 minutes

Première scène (Carrefour) : le héros quitte le **donjon inversé** à dos de dragon, jusqu’à la **grotte à flanc de falaise**.

Verrouillé :

- le vol dure **au moins 5 à 6 minutes**
- depuis la falaise / la grotte, le donjon est **minuscule au loin** dans l’océan
- on **passe par** une **statue géante** : visage d’un **Premier-Né**, en **pleine mer**

Pour que le donjon soit minuscule et que le vol tienne 5–6 min, il faut **au moins ~15 km de mer ouverte** entre le donjon et la falaise (sud de la plage). Moins que ça, le donjon reste gros et le vol est trop court.

```
DONJON (pleine mer, minuscule vu de la côte)
    ↓  vol dragon  5–6 min
STATUE  visage Premier-Né  (pleine mer, sur le trajet)
    ↓
FALAISE / GROTTE DU DRAGON  (bord sud des Landes)
```

Tu **ne codes pas** ce vol en passe A. Tu notes le lieu (donjon, statue, grotte) et la distance. Le script du vol = plus tard.

---

## 4. Passe A : tu ne construis pas ça maintenant

Les tests restent :

1. `carte-test-32x24.carte`
2. `carte-test-40x27-sud.carte`
3. `carte-test-signe-8x8.carte`

**Interdit en passe A :**

- mailler les Landes + l’océan
- inventer un `.carte` Dark de cette taille
- changer le cartographe
- scripter le dragon, la statue, la grotte
- coller 4000, 2668, ou 4 km

Jean-Yves peint. Le `.carte` portera `nx`, `ny`, `cell_m`. Tu dimensionnes le 3D avec **ce fichier-là**. Rendu (LOD, pas 1 triangle / mètre) = plus tard.

---

## Message à coller (bloc seul)

```
Jean-Yves. Taille Dark — suite. Lis :
  https://github.com/albouyjy-byte/cahier-monde-dark
  → 09_TAILLE_DE_LA_CARTE.md  (relis-le, il a changé)

Les 10 km × 20 km, c’est la TERRE seulement
(Landes + plage + fosse + pins noirs).
ÇA N’INCLUT PAS LA MER.

La mer entoure les Landes. Très grande.
Comme sur exemples/carte-peinte-entiere.jpg :
beaucoup d’eau tout autour, le donjon est une tache dans l’océan.

Plage : bande EN BAS (sud), 20 km × 3 km.
Fosse sur la terre. Pins noirs AU-DESSUS de la fosse.

Vol donjon inversé → grotte du dragon (flanc de falaise) :
  au moins 5 à 6 minutes à dos de dragon
  depuis la falaise, le donjon est MINUSCULE au loin
  donc au moins ~15 km de mer ouverte entre les deux
  on passe par une STATUE GÉANTE : visage d’un Premier-Né, en pleine mer

Haut d’écran = NORD. Bas = SUD = plage puis océan puis donjon.

Tu lis nx, ny, cell_m DANS le .carte. Pas de mètres en dur.

Passe A : tu ne fabriques PAS cette carte, tu ne scripte PAS le vol,
tu ne mailles pas l’océan, tu ne touches pas au peintre.
Tu dis en une phrase que tu as relu 09, puis tu continues les 3 fichiers d’essai.
```
