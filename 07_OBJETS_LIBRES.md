# Objets 3D libres — sans aimantation

**Pas la passe A. Pas le ciel. Une mise à jour majeure du 3D, plus tard.**

## Ce que Jean-Yves veut

Placer des **objets 3D n’importe où**, sans qu’ils collent tout seuls au sol.

- Une **maison** enfoncée dans le terrain → elle **reste** enfoncée, jusqu’à ce qu’on l’enlève.
- La même maison **au-dessus** du sol → elle **lévite**. C’est voulu.
- Un **rocher contre une falaise** : on le pose dans la paroi, pas « sur la case la plus proche ».
- Pas de grille magique. Pas d’aimant « pieds au sol ». Le poseur choisit **X Y Z**.

Ça sert à **détailer** les cartes (rochers, maisons, masses) une fois le `.carte` branché.

## Ce que ça n’est pas

- Pas le pinceau 2D (biomes + altitude).
- Pas « pop au nez » du joueur.
- Pas générer une ville toute seule.
- Pas recoder l’hôtel.

Les **lieux** du `.carte` disent *où est le château*.  
Les **objets libres** disent *ce volume-ci, à ce X Y Z exact*.

## Test (quand on y sera)

1. Poser un cube **à moitié dans** le sol → il reste à moitié dans le sol après rechargement.
2. Poser le même cube **2 m au-dessus** → il flotte. Le joueur passe dessous.
3. Coller un rocher **dans** une falaise → pas recalé sur le plat.

Tant que la passe A n’est pas verte, **on n’ouvre pas cet éditeur**.
