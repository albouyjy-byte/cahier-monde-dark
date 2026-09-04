# Villes sous les masses — architecture Dark

**Passe C. Après A (lieux exacts) et de préférence B (ciel).**

## L’idée

On ne pose pas une ville sur un parking.

De **grandes masses 3D** (pics d’obsidienne, arches, falaises taillées, coques)  
→ les **villes / hameaux** se mettent **dessous**, contre, dans l’ombre.  
Murs **noirs**. Architecture **fantasy sombre**, pas des maisons d’hôtel recopiées.

Déjà dans la légende 2D : biome `lande_dark` = herbe jaunie, pics, **hameaux sous les pics**, murs noirs.

Les **lieux** du `.carte` disent **où**. Les masses disent **le volume**. Les maisons s’accrochent au volume.

## Ce que c’est, techniquement

- Un lieu `chateau` / `bourg` / `hameau` **déjà** dans le `.carte` (passe A : le point est au bon XZ).
- Une **masse** (mesh ou atlas 3D simple) ancrée sur ce lieu, grande (dizaines / centaines de m).
- Le **peuplement** (bâtiments, murs noirs) = billboards ou volumes **au pied** de la masse, pas sur le sommet.
- Densité **plus tard**. Passe C = **une** masse + **un** hameau lisible sous elle.

## Test visuel (passe C)

1. Sur la carte 2D, un lieu « hameau » sous un pic.
2. En 3D : tu vois le pic, tu vas **sous** : il y a des murs noirs. Pas à 400 m à côté.
3. Tes pieds sont sur le `.carte`. Tu ne flottes pas dans la masse.

## Interdit en passe C

Générer une ville procédurale. Recoder l’hôtel en extérieur. 40 bâtiments. Ponts. Route complète. Copier Elden Ring mesh pour mesh.
