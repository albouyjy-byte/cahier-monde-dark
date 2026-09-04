# Interrupteur — Enquête / Dark Fantasy

**Avis Grok, 4 sept 2026. Claude : donne le tien, ne code pas encore.**

Ne pas confondre **trois** séparations déjà là :

| | Ce que c’est | Ce que ce n’est pas |
|---|---|---|
| **Univers** (celui-ci) | Enquête (hôtel) **ou** Dark (Géode) | Un bouton dans le couloir |
| **Pays** | `sud` / `montagne` **dans l’enquête** (tuile vs ardoise) | Le Dark |
| **Raccord** | Deux cartes **qui se touchent** par une porte (`LE-RACCORD-DES-CARTES.md`) | Un mélange des deux univers |

## Ce que Jean-Yves a déjà

- **Une** carte Dark peinte (légende 21 biomes, fosse, plateau 1 km, mer, lande). Dessins 01/09. **Une carte pour l’instant.**
- Hôtel + région Pyrénées + (plus tard) mer / préquelle = **enquête**.
- Combat (fourreau) = mécanique **commune**. Dans l’hôtel on n’achève pas.

## Reco Grok — écran d’accueil, pas un va-et-vient

Au **lancement** : **Enquête** | **Dark Fantasy**. Une partie = un univers. On ne traverse pas le hall pour se retrouver sous le trou noir.

Contenu **tagué**, comme les `pays` déjà là :

```
univers: "enquete" | "dark" | "commun"
```

- `enquete` : pièces, Contact, Nadège, tuile/ardoise, région actuelle  
- `dark` : `.carte` peint, ciel trou noir, masses, armes fantasy, lande_dark  
- `commun` : moteur (marche, fatigue, `Barks._dire`, `Memoire`, paliers, lecteur `.carte`)

Le fourreau **dans l’enquête** ne bascule **pas** l’univers. C’est un combat d’hôtel.

Portail Dark ↔ hôtel = **plus tard** (une porte / le trou comme lieu). Pas l’interrupteur V1.
