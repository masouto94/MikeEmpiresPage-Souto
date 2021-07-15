var Jaguar_Warrior = new Melee_Unit("Jaguar Warrior", 50, {"melee": 10}, {"Infantry": 10, "Condottiero": 10, "Eagle Warrior": 2, "Standard Building": 2}, 2.0, 0, {"base_melee":1, "base_pierce": 1, "Infantry": 0, "Unique Unit": 0}, {"food":60, "wood":0, "gold":30}, 3, 1);
var Long_Swordsman = new Melee_Unit("Long Swordsman", 60, {"melee": 9}, {"Eagle Warrior": 6, "Standard Building": 3}, 2, 0, {"base_melee":0, "base_pierce":1, "Infantry":0}, {"food": 60, "wood":0, "gold": 20}, 4, 0.9);
var Archer = new Ranged_Unit("Archer", 30, {"pierce": 4}, {"Spearman": 2}, 2, 0, {"base_melee":0, "base_pierce":0, "Archer":0}, {"wood": 25, "gold":45}, 6, 0.96, 4,0.8,15,0,7)
array_unidades = [Jaguar_Warrior, Long_Swordsman, Archer];

