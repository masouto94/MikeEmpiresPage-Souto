
class Unit{
    constructor(name, hp, attack,  bonus, ROF,blast_radius, armorclasses, cost, LOS,speed){
        this.name=name
        this.hp=hp
        this.attack=attack
        this.bonus= [bonus]
        this.ROF=ROF
        this.blast_radius=blast_radius
        this.armorclasses=[armorclasses]
        this.armorclasses.push({'Anti-Leitis' : 0})
        this.cost=cost
        this.LOS = LOS
        this.speed = speed
    }
};


class Melee_Unit extends Unit{
    constructor(name, hp, attack,  bonus, ROF,blast_radius, armorclasses, cost, LOS,speed){
    super(name, hp, attack,  bonus, ROF,blast_radius, armorclasses, cost, LOS,speed);
}
};

class Ranged_Unit extends Unit{
    constructor(name, hp, attack,  bonus, ROF,blast_radius, armorclasses, cost, LOS,speed, range, accuracy, frame_delay, min_range, projectile_speed){
    super(name, hp, attack,  bonus, ROF,blast_radius, armorclasses, cost, LOS,speed);
    this.range = range;
    this.accuracy = accuracy;
    this.frame_delay = frame_delay;
    this.min_range = min_range;
    this.projectile_speed = projectile_speed;
}
};

class Blacksmith{
    constructor(melee_attack, ranged_attack, infantry_defense, cavalry_defense, archer_defense){
        this.melee_attack=melee_attack || 0;
        this.ranged_attack= [ranged_attack] || [0,0];
        this.infantry_defense= [infantry_defense] || [0,0];
        this.cavalry_defense= [cavalry_defense] || [0,0];
        this.archer_defense= [archer_defense] || [0,0];
    }
}

class Barracks{
    constructor(supplies, squires, arsoning){
        this.supplies = supplies || false;
        this.squires = squires || false;
        this.arsoning = arsoning || false;
    }
}

class Stable{
    constructor(bloodlines, husbandry){
        this.bloodlines = bloodlines || false;
        this.husbandry = husbandry || false;
    }
}

class ArcheryRange{
    constructor(thumbring, parthian_tactics){
        this.thumbring = thumbring || false;
        this.parthian_tactics = parthian_tactics || false;
    }
}

class University{
    constructor(ballistics, siege_engineers, chemistry){
        this.ballistics = ballistics || false;
        this.siege_engineers = siege_engineers || false;
        this.chemistry = chemistry || false;
    }
};


