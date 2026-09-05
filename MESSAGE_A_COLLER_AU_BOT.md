# Colle ce message à Claude Code

Nouvelle session **« Dark Fantasy Mode »**.  
Si tu es encore dans la session combat / remise en ordre : **ouvre-en une nouvelle**, colle ce bloc là-bas. Ne code pas le lore ici.

```
Jean-Yves. Univers DARK (Géode). Pas l’intérieur de l’hôtel.

VA LIRE GitHub, dans cet ordre — tu ne codes pas le lore, tu t’en sers pour la CARTE :

  https://github.com/albouyjy-byte/cahier-monde-dark

  1. lore/00_LIS_MOI.md
  2. lore/01_CarrefourPurgatoire.md
     = DÉBUT DU JEU, AVANT la carte des Landes.
       Chute trou noir → donjon INVERSÉ en MER (arrivée)
       → dragon vole le héros → GROTTE dans la FALAISE, au niveau des Landes.
  3. lore/02_Codex-Cosmique.md
     = la Géode (intérieur d’un trou noir, ciel = nuages + trou).
  4. lore/03_Atlas-des-Landes.md
     = LA CARTE. C’est ça qu’il faut poser / peindre.
  5. 06_GARDE_FOU.md + 02_ORDRE_DES_PASSES.md
  6. cahier-grok/00_LIS_MOI.md (passe A, dans hotel-brume-ecarlate)

Les six livres propres sont dans lore/ (Factions, Panthéon, Arcanes, Livre du Destin aussi).
Livre du Destin = livre dont vous êtes le héros. PAS le FPS. Tu ne l’implémentes pas.

INTÉRESSANT — créer la carte d’après l’Atlas + le Codex :
  Une seule carte Dark : Landes + mer du donjon.
  Doit pouvoir porter : mer, donjon renversé, falaises, grotte du dragon,
  landes (collines / ronces), tourbières, fracture / Pont de l’Épineuse.
  Ciel (passe B, APRÈS A) : même contrat que exemples/ciel-dark.tsx
  (trou ancré, planètes lentes, nuages noirs).
  Haut d’écran = NORD. iy=0 = bord nord.
  TAILLE (09_TAILLE_DE_LA_CARTE.md) — décision, pas une question :
    10 km × 20 km = la TERRE seulement (Landes + plage + fosse + pins noirs).
    ÇA N’INCLUT PAS LA MER. La mer entoure, très grande (peinture).
    Plage = bande EN BAS (sud)  20 km × 3 km.
    Vol donjon → grotte : 5–6 min à dos de dragon.
    Depuis la falaise, le donjon est MINUSCULE au loin (~15 km de mer).
    Sur le trajet : STATUE GÉANTE, visage d’un Premier-Né, pleine mer.
    Tu ne fabriques PAS cette grille en passe A. Tu ne scripte PAS le vol.
    Tu lis nx, ny, cell_m dans le .carte. Pas de mètres en dur.
  Légende + croquis + carte peinte = exemples/  (contrat VISUEL 3D).

  Lore 08 / 09 : La Forêt 2D = le MÊME univers (préquelle). Deux PNJ au Panthéon
    (femme du héros / médaillon, La Demi-Pute). Tu ne RECODES PAS le HTML 2D.
    Grotte → village abandonné = décembre, PAS passe A. Tu ne scripte PAS ça.

Images :
  exemples/carte-dark-fantasy-legende.jpg
  exemples/croquis-crayon-iles.png
  exemples/carte-peinte-entiere.jpg

ORDRE :
  Si « Ouvrir une carte » + 3 tests .carte + mesh=pieds  PAS verts
      → UNIQUEMENT passe A (sol + marche + ID + lieux).
         Tu ne scripte PAS le donjon, PAS le vol du dragon, PAS les PNJ, PAS le ciel.
  Si passe A verte
      → passe B courte : ciel (trou + 1 planète + nuages). 03_CIEL_TROU_NOIR.md

Interdit :
  - recoder l’hôtel, vider l’hôtel
  - copier la démo combat Grok
  - coder dans cedar-cedar-cactus-reef
  - fusionner combat + carte + ciel
  - Livre du Destin / tarot / Colosse / Vita-Omega
  - régénérer le marais 29-08, inventer un relief.png
  - recoder La Forêt 2D / scripter grotte→village / spawner Demi-Pute

Dis d’abord : tu as lu lore/00, 01, 02, 03. Puis : passe A verte ou pas. Puis tu codes UNE passe.
```
