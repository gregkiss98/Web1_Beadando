# Web1 beadandó leírása
Ez a weboldal a Web-es rendszerek programozása 1 nevű órára készült Kiss Gergő által, beadandó gyanánt. Kizárólag gyakorlati és tapasztalat szerzési célokat szolgál, valamint fejlesztés alatt áll.

## Dark / White mód
Az oldal alapból white módban töltődik be, és a bal felső sarokban van a felhasználónak lehetősége állítani a hogy melyik módban jelenjen meg egy gomb segítségével. Ez egy globális állapot, mindegyik oldal használja, valamint az oldal újra be töltésekor is a korábban beállított színben jelenik meg. 

## Home
A Home oldalon egy rövid áttekintést találunk hogy miért készült az oldal, ki által, valamint egy figyelmeztetést annak az egyszerűségére.

## Deals
A Deals oldalon Az éppen aktuálisan leárazott játékokat találjuk meg. Ezt egy API-ból hívtam meg (https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15). Ezt egy listába olvasom be, a list.js-be, ami továbbítja a a Deals.js-be, és ott dolgozom fel egy map segítségével. Ezen belül jelenítem meg a játék thumbnail képét, a nevét, a leárazás alatti árát, valamint a normál árát összehasonlítás képpen.

## Favourite Games Counter
Egy számlálót találunk az oldalon, useReducer segítségével készült. A lényege az a hogy számon tarthatjuk vele hány darab kedvenc játékunk van. Ezt tudjuk egyesével növelni, egyesével csökkenteni, vagy resetelni 0-ra ha. 
