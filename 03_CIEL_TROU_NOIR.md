# Ciel Dark — trou noir, planètes, nuages

**Passe B. Pas avant que le `.carte` tienne au sol.**

## Ce qu’on a dit (Grok + Jean-Yves)

Le ciel n’est pas un dégradé bleu. C’est un **astre mort qui commande**.

- Un **trou noir** (vortex) dans le ciel — lisible, pas un effet YouTube de 4 secondes.
- Des **planètes** qui **gravitent** autour (lentes, orbites longues, on les voit bouger si on attend).
- Des **nuages noirs** qui gravitent **autour du trou**, pas un scrolling de skybox.
- Lumière du monde : froide, râpeuse. La lande est jaunie **parce que** ce ciel existe.

Référence de sensation : Elden Ring (ciel comme menace), pas Starfield.

## Ce que c’est, techniquement (pour Claude)

Un **dôme / sky distant** du FPS déjà là. Pas un nouveau renderer.

- Le trou = disque / anneau, **fixe à l’infini** (il ne « suit » pas comme un objet de salle).
- Planètes = billboards ou sphères **très loin**, quaternion d’orbite autour du trou, période en **minutes**, pas en secondes.
- Nuages noirs = couches qui **tournent** plus vite que les planètes, plus près du trou. Silhouettes, pas du volumétrique cher.
- **Aucun** pont, **aucune** cascade, **aucun** peuplement dans cette passe.

## Test visuel (passe B)

1. Debout sur le sol du `.carte` (passe A déjà verte).
2. On lève la tête : le trou est là.
3. On attend : une planète a **bougé**. Un nuage a **tourné**.
4. On marche 200 m : le trou **reste** au même endroit du ciel (pas collé à la caméra comme un quad de salle).

## Interdit en passe B

Refaire le sol. Textures de biomes. Villes. Combat. Hôtel intérieur. Volumétrique lourd. « Fausse 3D » du ciel collée au nez.
