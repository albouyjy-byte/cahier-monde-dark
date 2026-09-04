# Ciel Dark — trou noir, planètes, nuages

**Passe B. Pas avant que le `.carte` tienne au sol.**

## Contrat visuel = la démo déjà faite

Jean-Yves l’a vue, elle est « vraiment pas mal ». C’est **ça** le ciel, pas un dégradé.

Fichier copié ici : [`exemples/ciel-dark.tsx`](exemples/ciel-dark.tsx)  
(source : cartographe `cedar-cedar-cactus-reef/src/components/ciel-dark.tsx` — **ne pas coder dans ce dépôt**)

Ouvrir : appli pinceau, bouton **« Voir le ciel Dark »**. Glisser = regarder.

## Ce que la démo montre

- Un **trou noir** (vortex) dans le ciel — lisible, ancré dans le **monde** (pas collé à la caméra). Un tour à 360° : on **revoit** le trou.
- Des **planètes entières** qui **gravitent** autour du même centre. Lentes.
- Des **nuages noirs** (taches irrégulières, pas des ovales) : nappes sur le dôme **plus** une nappe **collée au trou** (~40 petits + ~16 gros) qui **tournent et ne s’éloignent pas**.
- Pas d’étoiles. Fond : gris foncé au zénith → **noir** à l’horizon.
- Éclair du trou vers un arbre (plus tard). Flash violet puis noir.

## Technique (passe B, dans le FPS)

Un **dôme / coupole déjà là**. Pas un nouveau renderer. Pas coller le React dans l’HTML.

Test : debout sur le `.carte` → on lève la tête : le trou. On attend : planète et nuage ont **bougé**. On marche 200 m : le trou **reste** au même endroit du ciel.

## Interdit en passe B

Refaire le sol. Copier `ciel-dark.tsx` tel quel dans l’hôtel. Volumétrique. Coder dans `cedar-cedar-cactus-reef`.
