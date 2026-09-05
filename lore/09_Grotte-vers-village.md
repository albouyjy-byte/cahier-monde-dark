# Grotte du dragon → village abandonné

**Première marche dehors**, après le vol.  
**Pas passe A. Pas maintenant. Cible : décembre** (après A verte, B ciel, C masses — ou au moins A + un bout de C).

Grok **n’écrit pas** le FPS. Claude **ne scriptera pas** ça tant que le `.carte` n’est pas sous les pieds.

---

## Pourquoi pas une démo rapide maintenant

| Maintenant | Décembre |
|---|---|
| Passe A = 3 fichiers test, sol + marche + ID. **Pas** cette scène. | A verte → on peut **poser** grotte + collines + village sur la vraie carte. |
| Vol 5–6 min, statue Premier-Né, dragon = cinématique. **Interdit** tant que le sol ment. | Vol = plus tard. La **marche** grotte → village n’a pas besoin du dragon. |
| Un couloir fake (boîtes) = à jeter. Claude aurait deux vérités. | Un seul HTML. Un dehors. Lieux de l’Atlas. |

**Verdict :** possible **en décembre**. Pas de proto Grok parallèle. La spec est ici pour ne rien perdre.

---

## La séquence (lieux, dans l’ordre)

Déjà dans [01_CarrefourPurgatoire.md](01_CarrefourPurgatoire.md) §3 + [03_Atlas-des-Landes.md](03_Atlas-des-Landes.md). On **aligne**, on n’ajoute pas un troisième début.

```
vol (5–6 min, mer, statue visage Premier-Né)     ← cinématique, PAS cette démo
    → GROTTE du dragon (mi-falaise, caverne taillée)
    → sortie : 2 statues érodées
    → collines, ronces, vent, maisons trouées
    → (option) Braconnier — feu dans une maison à moitié détruite
    → VILLAGE PÊCHEURS ABANDONNÉ (côte, Guerre du Pot Brisé)
```

La démo décembre = **à pied, depuis la grotte, jusqu’au village**.  
On **skip** le vol : spawn dans la grotte, déjà posé. Le dragon peut être **là** (couché, clé d’or au cou) ou déjà parti — JY tranche. Ne pas forcer le combat Mère Araignée.

---

## 1. La grotte (`grotte_dragon`)

- **Mi-falaise**, sud des Landes (haut d’écran = nord : la grotte **regarde la mer**, au sud).
- Caverne **taillée** (humains), pas un trou de bête.
- Coffre. Clé = celle du dragon. Il **refuse**, presque violent, si on la prend. (Passe D : bark. Passe C : coffre objet libre.)
- Sortie : **deux grandes statues** tellement érodées qu’elles ne ressemblent à rien (Premiers-Nés).

Lumière : pénombre, cercle depuis la bouche de la grotte (jour des Landes). Pas de ciel trou-noir **dans** la caverne. Dehors = ciel passe B.

---

## 2. Le chemin (heures de marche → en jeu : quelques minutes)

- Collines, herbes, **ronces noires** à épines (biome `lande_dark` / ronces — IDs du `.carte`, pas une texture inventée).
- Vent. Maisons abandonnées, **trous dans les toits**.
- Pas de PNJ obligatoire. Cadavres / pieux = plus tard (Forêt C-12, pas passe A).

C’est **le même** terrain que la préquelle Forêt ([08_Foret-prequelle.md](08_Foret-prequelle.md)) : maisons = plus tard La Demi-Pute. **Pas elle** sur cette première marche.

---

## 3. Le village abandonné

Atlas : **village pêcheurs abandonné**, côte, **Guerre du Pot Brisé**.

À poser (C / D, pas A) :

- Cabanes de pêcheurs vides, filets pourris, barques échouées
- Traces de **Hommes-Crustacés** / poulpes à visage — **pas** un combat obligatoire la première fois
- **Épée rouillée** (objet libre, passe E) — le premier vrai fer après le bâton / la dague du donjon
- Silence. Pas de marchand. Pas d’auberge.

Le village **vivant** (filet, tempêtes) est **ailleurs** sur la côte. Ne pas les fusionner.

---

## 4. Le Braconnier (premier humain dehors)

**Pas** un des deux persos Forêt. Déjà au Panthéon. Première rencontre **après la grotte** (Carrefour).

- Feu dans une maison à moitié détruite, **sur le chemin** grotte → village (ou juste après le village — JY).
- Âgé, bourru, bandeau (marque Bouc), arbalète, faucille.
- Chant *Le vent des Landes ne ment jamais* — bark / voix, passe D.
- Recrutable **plus tard**. Cette démo : on peut **le voir** et passer. Un bark suffit.

La Demi-Pute **n’est pas** ici. Elle est itinérante, plus profond dans les ronces / maisons. Après.

---

## Ce que la démo décembre doit *faire* (quand A est verte)

1. Spawn dans `grotte_dragon` (pas de chute, pas de vol).
2. Marche : grotte → statues → collines/ronces → village abandonné.
3. Sol = `.carte` (`cell_m` lu, pas 1 m en dur). Biomes = IDs.
4. Village **vide**, reconnaissable (cabanes, grève).
5. Option : 1 bark Braconnier. **Zéro** autre PNJ.

**Interdit dans cette démo :** ciel à recoder, dragon volant, combat scripté, Demi-Pute, médaillon, famille morte, recréer l’hôtel, inventer un `.carte`.

---

## Pour Claude

Tu **lis**. Tu **ne codes pas** tant que passe A (bouton Ouvrir + 3 tests + mesh = pieds) n’est pas verte.

Quand JY dira « décembre / pose la grotte » : lieux `grotte_dragon` + village côte **sur la carte peinte**, pas une scène hors `.carte`.
