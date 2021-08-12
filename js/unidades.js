var Jaguar_Warrior = new Melee_Unit("Jaguar Warrior", 50, {"melee": 10}, {"Infantry": 10, "Condottiero": 10, "Eagle Warrior": 2, "Standard Building": 2}, 2.0, 0, {"base_melee":1, "base_pierce": 1, "Infantry": 0, "Unique Unit": 0}, {"food":60, "gold":30}, 3, 1);
var Long_Swordsman = new Melee_Unit("Long Swordsman", 60, {"melee": 9}, {"Eagle Warrior": 6, "Standard Building": 3}, 2, 0, {"base_melee":0, "base_pierce":1, "Infantry":0}, {"food": 60, "gold": 20}, 4, 0.9);
var Archer = new Ranged_Unit("Archer", 30, {"pierce": 4}, {"Spearman": 2}, 2, 0, {"base_melee":0, "base_pierce":0, "Archer":0}, {"wood": 25, "gold":45}, 6, 0.96, 4,0.8,15,0,7);
var Condottiero = new Melee_Unit("Condottiero", 80, {"melee":10}, {"Gunpowder Unit": 10, "Standard Building": 2}, 1.9, 0, {"base_melee": 1, "base_pierce": 0, "Infantry": 10, "Condottiero": 0, "Unique Unit":0},{"food": 50, "gold":35}, 6, 1.2);
var Steppe_Lancer =new Melee_Unit("Steppe Lancer", 60, {"melee":9}, {}, 2.0, 0,{"base_melee": 0, "base_pierce":1, "Cavalry": 0}, {"food": 70, "gold": 40}, 5, 1.45)
Steppe_Lancer.range = 1;
var Mangudai = new Ranged_Unit("Mangudai", 60, {"pierce": 6}, {"Siege Weapon": 3, "Spearman": 1}, 1.7, 0, {"base_melee": 0, "base_pierce": 0, "Archer": 0, "Cavalry Archer": 0, "Cavalry": 0, "Unique Unit":0}, {"wood": 55, "gold": 65}, 6, 1.4, 4, 0.95, 23, 0, 7);
var Villager = new Melee_Unit("Villager", 25, {"melee": 3}, {"Stone Defense": 6, "Standard Building": 3}, 2.0, 0, {"base_melee": 0, "base_pierce": 0}, {"food": 50}, 4, 0.8)
var Hand_Canonneer = new Ranged_Unit("Hand Cannoneer", 40, {"pierce": 17}, {"Infantry": 10, "Ram": 2, "Spearman": 1}, 3.45, 0, {"base_melee": 1, "base_pierce": 0, "Archer": 0, "Gunpowder Unit": 0}, {"food": 45, "gold": 50}, 9, 0.96, 7, 0.75, 15, 0, 7.5)
var Serjeant = new Melee_Unit ("Serjeant", 65, {"melee": 8}, {"Eagle Warrior": 2, "Standard Building": 2}, 2.0, 0, {"base_melee": 3, "base_pierce": 3, "Infantry": 0, "Unique Unit": 0}, {"food": 60, "gold": 35}, 3, 0.9)


array_unidades = [Jaguar_Warrior, Long_Swordsman, Archer, Condottiero, Steppe_Lancer, Mangudai, Villager, Hand_Canonneer, Serjeant];


