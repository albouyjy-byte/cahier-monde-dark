# Lore Géode — pour Claude Code

Source Drive : dossier **0 — Géode (dark fantasy)**.  
Copie GitHub : **c’est le canon de travail**. Tu n’as pas besoin d’ouvrir Drive.

**Tu ne codes pas le lore.** Tu t’en sers pour **savoir ce que la carte contient**.

## Lis dans cet ordre

1. **[01_CarrefourPurgatoire.md](01_CarrefourPurgatoire.md)** — **début du jeu**, *avant* la carte des Landes : chute → donjon inversé en mer → dragon → grotte dans la falaise → Landes  
2. **[02_Codex-Cosmique.md](02_Codex-Cosmique.md)** — ce qu’est la **Géode** (trou noir, ciel, nuages, gravité). Base du ciel 3D.  
3. **[03_Atlas-des-Landes.md](03_Atlas-des-Landes.md)** — **LA carte** : lieux, biomes, pont, mer, manoir, potiers… C’est ça qu’il faut peindre / poser.  
   Taille : [09_TAILLE_DE_LA_CARTE.md](../09_TAILLE_DE_LA_CARTE.md) — **10 × 20 km = terre**. Mer autour. Vol 5–6 min, statue Premier-Né.  
4. [04_Factions.md](04_Factions.md) — plus tard (qui habite où). **Même** Bouc / Épineux que La Forêt 2D.  
5. [05_Pantheon.md](05_Pantheon.md) — plus tard (PNJ). Pas à peupler en passe A. **Deux ajouts Forêt** : femme du héros (médaillon) + **La Demi-Pute**.  
6. [06_Arcanes.md](06_Arcanes.md) — plus tard. Magie = techno. Combat FPS = déjà `cahier-combat/`.  
7. [07_Livre-du-Destin.md](07_Livre-du-Destin.md) — **livre dont vous êtes le héros**, **pas le FPS**. Ne pas l’implémenter dans `hotel-brume-ecarlate.html`.  
8. **[08_Foret-prequelle.md](08_Foret-prequelle.md)** — La Forêt 2D = **le même univers**. Prequelle. Pas à coder.  
9. **[09_Grotte-vers-village.md](09_Grotte-vers-village.md)** — première marche dehors. **Décembre**, pas passe A.

Images (même dépôt, `exemples/`) : légende 3D, carte peinte, croquis crayon.

## Ce que JY veut que tu fasses de ça

**Créer la carte** d’après l’**Atlas des Landes** + le **Codex Cosmique**.

Le 3D doit pouvoir **poser** :

- mer + **donjon renversé** (arrivée du héros)
- falaises + **grotte du dragon**
- **Landes** (collines, ronces, vent)
- fracture / **Pont de l’Épineuse**
- ciel = nuages cosmiques + trou (Codex = même ciel que `exemples/ciel-dark.tsx`)

Une **seule** carte Dark pour l’instant : **Landes + mer du donjon**. Pas le continent élevé. Pas Montnoir.  
Taille : [09_TAILLE_DE_LA_CARTE.md](../09_TAILLE_DE_LA_CARTE.md) — **10 × 20 km = la terre**. La mer autour est **en plus**, très grande. Vol donjon → grotte **5–6 min**, statue visage Premier-Né en mer.

## Ordre de code — inchangé

Passe **A** d’abord (`.carte` → sol + marche + ID + lieux).  
Le lore dit **quoi** peindre, **pas** comment brancher le fichier.

Passe B (ciel) **après** A verte.  
Ne pas coder l’histoire du donjon, le vol du dragon, les PNJ, le Livre du Destin.  
**Ne pas** recoder La Forêt 2D. **Ne pas** scripter grotte → village tant que A n’est pas verte.

## Six livres propres (canon) + Forêt

| Fichier | Livre Drive | Pour le FPS |
|---|---|---|
| 01 | CarrefourPurgatoire — histoire du héros | **Début** : séquence lieux, pas à scripter maintenant |
| 02 | Le Codex Cosmique | Ciel + physique du monde |
| 03 | L’Atlas des Landes | **Carte 3D** |
| 04 | Les Factions | Tags / qui habite — plus tard |
| 05 | Le Panthéon des Ombres | PNJ — plus tard. + femme / Demi-Pute |
| 06 | Les Arcanes | Pas le combat (déjà branché) |
| 07 | Le Livre du Destin | **Hors FPS** |
| 08 | La Forêt 2D (Drive **4 — La Forêt**) | **Prequelle, même lore.** Pas le HTML 2D. |
| 09 | Grotte → village abandonné | **Décembre.** Pas passe A. |

Hors canon propre (Drive, **ne pas** lire pour coder) : dossiers COLOSSE, VITA-OMEGA, vrac info.  
Le HTML `foret_2026-07-29_v7.0.html` : **ne pas** l’ouvrir pour le FPS.

Drive (si besoin un jour) : [0 — Géode](https://drive.google.com/drive/folders/1Hl4IRfsPIEBGSnpnH1uvVXHYj_2z79Ek) · [4 — La Forêt](https://drive.google.com/drive/folders/1DzoS9zQ7z1tgb_5HXywFXMBW6lF9mA55)
