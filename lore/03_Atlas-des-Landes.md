# L’Atlas des Landes — géographie (LA carte)

Source Drive : *L'Atlas des Landes*. Canon.

**C’est ça qu’il faut peindre / poser en 3D.**  
Avec le [Codex](02_Codex-Cosmique.md) (ciel, gravité) et le [Carrefour](01_CarrefourPurgatoire.md) (arrivée).

Ambiance : **sud de la France** pastoral (Larzac / Millau) + décadence. Royaume de la **Famille du Bouc**, jadis prospère. Mélancolie.

---

## Forme du territoire

Les Landes = vaste région **côtière** sur la paroi interne de la Géode. Tourbières + océan. Zone **la plus proche du Donjon Renversé**. Venteuse, désolée.

**Grande Fracture** : les Landes sont **au niveau de la mer** ; le continent est **surélevé** (plusieurs km). Seul passage : **Pont de l’Épineuse**, collé à la falaise du continent, gardé par **l’Épineuse**.

**Une seule carte Dark pour l’instant : Landes + mer du donjon.**  
Pas le continent élevé. Pas Montnoir. Pas la ville-crabe.

---

## Lieux à poser (ordre géographique utile)

Du **donjon en mer** vers l’**intérieur**, puis la **fracture**.

| Lieu | Où | Note 3D / biome |
|---|---|---|
| **Donjon renversé** | Pleine **mer** | Arrivée. Deux moitiés (plafond / abîme), bassin, pont, port. Blocs cyclopéens Premiers-Nés. Mini-trou. |
| Port intérieur | Dans le donjon | Quais, bateaux non-bois, Homme-Seiche |
| **Grotte du dragon** | **Falaises** côte | Vol depuis le donjon. Caverne taillée, 2 statues érodées. Sac de couchage (plus tard). Croisade Veritas : statues cyclopéennes brisées. |
| Route des falaises | Grotte → forteresse | Herse fer noir, statues Premiers-Nés, Striges dégénérés |
| Forteresse à fleur de falaise | Rocher au-dessus de la mer | Ancien bastion Premiers-Nés, **Chitineux évolués** + automates asservis |
| **Landes** | Collines, ronces, vent | Après la grotte. Maisons trouées. Braconnier. |
| Village pêcheurs abandonné | Côte | Guerre du Pot Brisé. Crustacés, poulpes à visage. Épée rouillée. |
| Village pêcheurs côtiers | Côte, vivant | Filet, tempêtes, mer noire |
| Manoir / château du Bouc | Colline | Vue sur le **four des Potiers**. Survivants : vieil homme + jeune femme (cornes). Cave labo sous le manoir. |
| **Ville des Potiers** | **Cœur**, gouffre d’argile | Maisons troglodytes, four. Sous-race Vermines. Reine pondeuse. |
| **Tourbières** | Vaste marais | Brume, sol spongieux, eau noire, soufre. Salamandre géante, Hommes-Batraciens, Striges chétives. Ambre noir. |
| Village des Tourbiers | Dans les tourbières | Cabanes, silures, ambre |
| Tour penchée de l’Astrologue | Colline isolée | Vue château falaises + « plafond ». Corps pendu. Pierres noires anguleuses. |
| Champ de pierre | Au-dessus des tourbières | Sarcophages Premiers-Nés (monolithes), Boucs Alpha, cabane du vieux gardien. Vue tour astrologue. |
| Arbre du Pendu | Extrémité | Homme Chat Noir. Corde. |
| **Carrefour de la Pierre Plantée** | Centre | Vers Potiers / pont / grotte du dragon |
| **Forteresse du Pont** | Fracture, gouffre | **Épineuse**. Donjon au milieu du pont. Cage + chaîne vers le fond. Ville abandonnée en bas (culte de l’œil, Vole-Œils). |
| Gouffre des Rejetés | Même fracture | Hommes-chauves-souris, ville au fond |
| Échafaud + prison | Isolé | Bourreau Boursouflé Ferré. Casserole. Prison : Famille du Bouc captive. |
| Tertre | Catacombe sous dôme pierre sèche | Concubines sépulcrales (gant / souvenirs). Pendentif de l’Épineuse. |
| Landes Noires / Vives | Coupées du reste | Magots de la Famille. Manoir des Échos (Renaissance gothique). Huile. |
| Tour de l’Horloger | Milieu des Landes | Cloches, Ordo Dei / Horologarius |
| Monastère fou | Landes | Mini-soleil **trop fort**, terres brûlées, moines fous |
| Souterrains | Sous tout | Triangles (même langue que le donjon). Vermines en haut, **Translucides** plus bas |
| Cave des expériences du Bouc | Sous le manoir | Ossements cornus. Clé cachée. |

### Hors carte V1 (ne pas peindre maintenant)

- Continent élevé : pins noirs, brume, froid, forteresse Ordo Dei sur la falaise, Hommes-Ours, monastère Vierge Noire, Famille des Floraisons
- Ville sur **crabe géant** (Mer Noire)
- Incubateur du Léviathan
- Montnoir (Terre)

---

## Schéma mental (haut d’écran = **NORD**)

```
                    NORD (haut d’écran, iy = 0)
    mer noire ~~~~ DONJON ~~~~ mer
                    |
              falaises / GROTTE DRAGON
                    |
         village pêcheurs (côte)     forteresse falaise
                    |
         ============ LANDES (collines, ronces) ============
         manoir Bouc     Pierre Plantée     tour Horloger
              \              |                /
            POTIERS      tourbières      Arbre du Pendu
                              |
                    Champ de pierre / astrologue
                              |
         ----------- FRACTURE / GOUFFRE / PONT ÉPINEUSE -----------
                              |
                    continent élevé (plus tard, hors carte)
                    SUD
```

JY a déjà dit : **haut de l’écran = NORD**. `iy = 0` = bord nord. Ne pas inverser.

La **légende peinte** (`exemples/carte-dark-fantasy-legende.jpg`) + **croquis crayon** + **carte peinte entière** = contrat **visuel 3D**. L’Atlas dit **quoi** est où. La peinture dit **comment ça doit y ressembler**.

---

## Biomes du `.carte` (légende) doivent pouvoir porter

| Besoin Atlas | Biome / relief probable |
|---|---|
| mer + donjon | mer 0 m, masse / pics (tours) |
| falaises + grotte | pics, falaise, cave / fosse |
| lande + ronces + collines | `lande_dark`, herbe, ronces |
| tourbières / marais | marais, brume, eau noire |
| gouffre Potiers | fosse / gouffre argile |
| fracture / pont | vide ou fosse + pont |
| plateau continent (plus tard) | plateau ~1 km |

Cellules, `cell_m`, zmin/zmax **signés** : contrat `cahier-dark-fps` / `cahier-grok/`.  
Ne pas inventer un `relief.png`. Ne pas régénérer le marais 29-08.

---

## Ce que la passe A doit permettre

1. Ouvrir un `.carte` → sol visible = pieds.
2. Pouvoir **reconnaître** mer, lande, falaise, fosse — même si les lieux nommés ne sont pas encore des meshes de donjon.
3. **Une** carte : Landes + mer. JY peint. Claude **branche**.

Passe C (villes sous les masses) : Potiers dans le gouffre, ville au fond du pont — **après** A + B.

Ne pas peupler (Braconnier, Bouc, Épineuse) en passe A.
