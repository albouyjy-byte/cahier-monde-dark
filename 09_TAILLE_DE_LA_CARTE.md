# Taille de la carte Dark — décision Jean-Yves, 4 sept 2026

**Verrouillé.** Ce n’est pas un avis. Ce n’est pas la carte Sud de l’hôtel.

Claude Code : tu **lis** ça. Tu ne fabriques pas cette grille en passe A.
Tu ne touches pas au cartographe 2D.

---

## Le monde

```
minimum  10 km de large  ×  20 km de long
```

| Axe | Mètres | Sur le canevas |
|---|---|---|
| **Longueur** (est–ouest) | **20 000 m** | bas de la carte, le grand côté |
| **Largeur** (nord–sud) | **10 000 m** | haut → bas |

Haut d’écran = **NORD**. `iy = 0` = bord nord.  
Bas de la carte = **SUD**.

```
monde X  =  nx * cell_m  =  20 000 m
monde Z  =  ny * cell_m  =  10 000 m
```

`cell_m` se **lit dans le fichier**. Pas 1 en dur. Pas 4000 en dur.

---

## La plage

Bande **en bas** de la carte des Landes (bord sud) :

```
20 km de long  ×  3 km de large
```

- Longueur : tout le bas, **20 km** (est–ouest)
- Profondeur : **3 km** depuis le bord sud, vers le nord
- Au sud de la bande : la mer
- Au nord de la bande : les Landes (le reste, ~7 km)

Le donjon renversé est **en mer**, donc au sud de cette bande.

---

## Passe A : tu ne construis pas ça maintenant

Les tests restent :

1. `carte-test-32x24.carte`
2. `carte-test-40x27-sud.carte` (échelle, peu de cases)
3. `carte-test-signe-8x8.carte`

**Interdit en passe A :**

- mailler 10 km × 20 km (200 millions de cases à 1 m)
- inventer un `.carte` Dark de cette taille
- changer le cartographe (`cedar-cedar-cactus-reef`)
- coller 4000, 2668, ou 4 km

Le jour où Jean-Yves **peint** et enregistre, le `.carte` portera `nx`, `ny`, `cell_m`.
Tu dimensionnes le 3D avec **ce fichier-là**. Rendu (LOD, pas 1 triangle / mètre) = plus tard.

---

## Message à coller (bloc seul)

```
Jean-Yves. Taille de la carte DARK — c’est une décision, pas une question.

Lis sur GitHub :
  https://github.com/albouyjy-byte/cahier-monde-dark
  → 09_TAILLE_DE_LA_CARTE.md

Le monde Dark, minimum :
  10 km de large  ×  20 km de long

Canevas :
  est–ouest  = 20 000 m   (le grand côté, le bas de la carte)
  nord–sud   = 10 000 m
  Haut d’écran = NORD. iy = 0 = bord nord. Bas = SUD.

La plage :
  bande EN BAS de la carte des Landes
  20 km de long  ×  3 km de large
  mer au sud de la bande
  landes au nord de la bande
  donjon en mer, donc au sud

Tu lis nx, ny, cell_m DANS le .carte. Tu ne colles pas ces mètres en dur.

Passe A : tu ne fabriques PAS cette carte.
Tu continues les 3 fichiers d’essai.
Tu ne mailles pas 10×20 km.
Tu ne touches pas au peintre 2D.

Quand tu as lu 09_TAILLE_DE_LA_CARTE.md, tu le dis en une phrase, tu ne codes pas cette taille.
```
