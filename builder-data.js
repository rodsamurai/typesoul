// builder-data.js
// All data for races, weapons, skills, essences, transformations, etc. for Type://Soul Builder

const DATA = {
  races: [
    {
      name: "Shinigami",
      clans: [
        { name: "Sozosei", rarity: "mythic", percent: 0.05, buffs: "+30 HP, +20 Reiatsu, +10 Posture, +5 Regen" },
        { name: "Urahara", rarity: "legendary", percent: 3, buffs: "+20 HP, +10 Reiatsu, +5 Posture" },
        { name: "Yamamoto", rarity: "legendary", percent: 3, buffs: "+20 HP, +10 Reiatsu, +5 Posture" },
        { name: "Hyosube", rarity: "legendary", percent: 3, buffs: "+20 HP, +10 Reiatsu, +5 Posture" },
        { name: "Zaraki", rarity: "legendary", percent: 3, buffs: "+20 HP, +10 Reiatsu, +5 Posture" },
        { name: "Shutara", rarity: "legendary", percent: 3, buffs: "+20 HP, +10 Reiatsu, +5 Posture" },
        { name: "Tsunayashiro", rarity: "legendary", percent: 3, buffs: "+20 HP, +10 Reiatsu, +5 Posture" },
        { name: "Abarai", rarity: "common", percent: 85.95 },
        { name: "Ichimaru", rarity: "common", percent: 85.95 },
        { name: "Kuchiki", rarity: "common", percent: 85.95 },
        // ...other common clans
      ],
      weapons: [
        { name: "Ichimonji", rarity: "other", percent: null, desc: "Element-locked" },
        { name: "Senbonzakura", rarity: "other", percent: null, desc: "Element-locked" },
        { name: "Shinso", rarity: "other", percent: null, desc: "Element-locked" },
        { name: "Sakanade", rarity: "other", percent: null, desc: "Confusion (element-locked)" },
        { name: "Odachi", rarity: "mythic", percent: 0.05 },
        { name: "Rapier", rarity: "mythic", percent: 0.05 },
        { name: "Longsword", rarity: "legendary", percent: 3 },
        { name: "Dagger", rarity: "legendary", percent: 3 },
        { name: "Scythe", rarity: "legendary", percent: 3 },
        { name: "Greatsword", rarity: "common", percent: 96.5 },
        { name: "Hammer", rarity: "common", percent: 96.5 },
        { name: "Katana", rarity: "common", percent: 96.5 },
        { name: "Spear", rarity: "common", percent: 96.5 },
        { name: "Twinblade", rarity: "common", percent: 96.5 },
        { name: "Dual Swords", rarity: "common", percent: 96.5 },
        { name: "Hakuda Gauntlets", rarity: "common", percent: 96.5, desc: "Locked to Hakuda tree" },
      ],
      shikais: [
        { name: "Lightning", rarity: "common", percent: 86.5 },
        { name: "Shadow", rarity: "common", percent: 86.5 },
        { name: "Creation", rarity: "common", percent: 86.5 },
        { name: "Wind", rarity: "common", percent: 86.5 },
        { name: "Poison", rarity: "common", percent: 86.5 },
        { name: "Weight", rarity: "common", percent: 86.5 },
        { name: "Fire", rarity: "rare", percent: 10 },
        { name: "Berserk", rarity: "rare", percent: 10 },
        { name: "Zangetsu", rarity: "rare", percent: 10 },
        { name: "Confusion", rarity: "rare", percent: 10 },
        { name: "Judgement", rarity: "rare", percent: 10 },
        { name: "Shinso", rarity: "rare", percent: 10 },
        { name: "Water", rarity: "rare", percent: 10 },
        { name: "Blood", rarity: "legendary", percent: 3 },
        { name: "Ink", rarity: "legendary", percent: 3 },
        { name: "Ice", rarity: "legendary", percent: 3 },
        { name: "Flower", rarity: "legendary", percent: 3 },
        { name: "Theatre", rarity: "legendary", percent: 3 },
        { name: "Suzumebachi", rarity: "legendary", percent: 3 },
        { name: "Assimilation", rarity: "legendary", percent: 3 },
        { name: "Benihime", rarity: "mythic", percent: 0.005 },
        { name: "Kyokasuigetsu", rarity: "mythic", percent: 0.005 },
        { name: "Duality", rarity: "mythic", percent: 0.005 },
        { name: "Snow", rarity: "mythic", percent: 0.005 },
      ],
      bankai: true
    },
    {
      name: "Hollow",
      clans: [],
      weapons: [
        { name: "Piety", rarity: "special", percent: null },
        { name: "Heatpiercer", rarity: "special", percent: null },
      ],
      resurrections: [
        { name: "Starrk", rarity: "legendary", percent: null },
        { name: "Vampire", rarity: "legendary", percent: null },
        { name: "Storm", rarity: "common", percent: null },
        { name: "Shark", rarity: "rare", percent: null },
        { name: "Light", rarity: "mythic", percent: null },
        { name: "Bone", rarity: "common", percent: null },
        { name: "Phoenix", rarity: "rare", percent: null },
        { name: "Volcanica", rarity: "legendary", percent: null },
        { name: "Arrogante", rarity: "legendary", percent: null },
        { name: "Slash", rarity: "common", percent: null },
        { name: "Pantera", rarity: "rare", percent: null },
        { name: "Snake", rarity: "mythic", percent: null },
        { name: "Acid", rarity: "common", percent: null },
        { name: "Horse", rarity: "legendary", percent: null },
      ],
      segunda: true
    },
    {
      name: "Quincy",
      clans: [
        { name: "Kurosaki", rarity: "mythic", percent: 0.05, buffs: "+20 Reiatsu, +10 HP, +5 Regen" },
        { name: "Du", rarity: "legendary", percent: 3, buffs: "+10 HP, +5 Reiatsu" },
        { name: "Valkyrie", rarity: "legendary", percent: 3, buffs: "+10 HP, +5 Reiatsu" },
        { name: "B", rarity: "legendary", percent: 3, buffs: "+10 HP, +5 Reiatsu" },
        { name: "Parnkgjas", rarity: "legendary", percent: 3, buffs: "+10 HP, +5 Reiatsu" },
        { name: "Le Vaar", rarity: "legendary", percent: 3, buffs: "+10 HP, +5 Reiatsu" },
        { name: "Bachman", rarity: "common", percent: 85.95 },
        { name: "Lloyd", rarity: "common", percent: 85.95 },
        // ...other common clans
      ],
      weapons: [
        { name: "Schwert", rarity: "common", percent: null },
        { name: "Jugramshield", rarity: "common", percent: null },
        { name: "Quilge", rarity: "common", percent: null },
        { name: "Cutlass", rarity: "common", percent: null },
        { name: "Antithesis", rarity: "common", percent: null },
        { name: "Cang Du Claws", rarity: "common", percent: null, desc: "Hakuda-locked" },
        { name: "Warden Gauntlets", rarity: "common", percent: null, desc: "Hakuda-locked" },
        { name: "Reichweite", rarity: "legendary", percent: null },
        { name: "Spalten", rarity: "legendary", percent: null },
        { name: "Quincyglock", rarity: "legendary", percent: null },
        { name: "Kehren", rarity: "legendary", percent: null },
        { name: "Greatlance", rarity: "legendary", percent: null },
        { name: "Zweis", rarity: "mythic", percent: null },
        { name: "Stream of Reiatsu", rarity: "special", percent: null },
        { name: "Dimensional Shard", rarity: "special", percent: null },
        { name: "Shard of Reiatsu", rarity: "special", percent: null },
      ],
      vollstandig: true,
      cybernetics: ["Cybernetic Arm", "Cybernetic Eye", "Cybernetic Leg"]
    }
  ],
  schrifte: [
    { name: "Iron", rarity: "common" },
    { name: "Wind", rarity: "common" },
    { name: "Heat", rarity: "common" },
    { name: "Fear", rarity: "rare" },
    { name: "Power", rarity: "rare" },
    { name: "Compulsory", rarity: "rare" },
    { name: "Thunderbolt", rarity: "rare" },
    { name: "Visionary", rarity: "legendary" },
    { name: "Glutton", rarity: "legendary" },
    { name: "Miracle", rarity: "legendary" },
    { name: "Zombie", rarity: "legendary" },
    { name: "Superstar", rarity: "legendary" },
    { name: "Explode", rarity: "legendary" },
    { name: "Balance", rarity: "mythic" },
    { name: "Death-Dealing", rarity: "mythic" },
  ],
  essences: [
    { name: "Hollow Essence", rarity: "mythic", desc: "Grants Hollow mode or resets Hollow/Arrancar res, used for becoming a Hollow" },
    { name: "Partial Essence", rarity: "mythic", desc: "Buffs your Partial Resurrección and can add moves to some forms" },
    { name: "Duo Essence", rarity: "mythic", desc: "Grants two Cero paths (20% faster cooldowns) and changes eye color" },
    { name: "Horizon Essence", rarity: "mythic", desc: "(Requires 45 Kendo) grants the Horizon Core move" },
    { name: "Shattered Comet Essence", rarity: "mythic", desc: "(Requires 45 Kido) grants the Shattered Comet move" },
    { name: "Unseen Blade Essence", rarity: "mythic", desc: "(Requires 45 Speed) grants a flash-step teleport finisher" },
    { name: "Territorial Mark Essence", rarity: "mythic", desc: "(Requires 40 Hakuda) presumably a special Hakuda move (context suggests 'marking' ability)" },
    { name: "Shikai Stasis", rarity: "mythic", desc: "Requires you have a Shikai. Lets you use your base Shikai weapon instead of the locked element version (with 10% damage reduction)" },
  ],
  skillTrees: [
    {
      name: "Soul Style",
      universal: true,
      skills: [
        { name: "Soul Style", desc: "Global combo meter." },
        { name: "Flashstep", desc: "Quick movement technique." }
      ]
    },
    {
      name: "Hakuda",
      skills: [
        { name: "Hakuda Style" },
        { name: "Duelist’s Dance" },
        { name: "Rising Shot" },
        { name: "Grand Entrance" },
        { name: "Whirlwind Step" },
        { name: "Pulse" },
        { name: "Catching Dragon" },
        { name: "Ankle Splitter" },
        { name: "Triple Striker" },
        { name: "Absolute Defense" },
        { name: "Demonic Embrace" },
        { name: "Negation" },
        { name: "Tora Reach" },
        { name: "Spine Rend" }
      ],
      ultra: { name: "Thousand Deaths (Raging Demon)", cost: 50, desc: "Hakuda Ultra Skill. Requires Ultra Soul Style meter." }
    },
    {
      name: "Kendo",
      skills: [
        { name: "Safeguard" },
        { name: "Brace" },
        { name: "Thrust" },
        { name: "Suikawari" },
        { name: "Senmaioroshi" },
        { name: "Bisection" },
        { name: "Rising Swallow" },
        { name: "Vertical Down" },
        { name: "Split Gate" },
        { name: "Overpowering Slash" },
        { name: "Delayed Crossing" },
        { name: "Flower Passage" },
        { name: "Pressure Shift" },
        { name: "Flowing Petals" },
        { name: "Mortal Ties" }
      ],
      ultras: [
        { name: "Orlando Furioso", cost: 45, desc: "Kendo Ultra Skill." },
        { name: "Judgement of the Sword", cost: 45, desc: "Kendo Ultra Skill." }
      ]
    },
    {
      name: "Arrancar Kido",
      skills: [
        { name: "Cero Grab" },
        { name: "Tri Cero" },
        { name: "Cero Cornea" },
        { name: "Blade Cero" },
        { name: "Finger Cero (paths)" },
        { name: "Bala" },
        { name: "Hierro" },
        { name: "Instinct" },
        { name: "Cero Burst" },
        { name: "Bala Blackout" },
        { name: "Bala Barrage" },
        { name: "Cero Scourge" },
        { name: "Cero Confinement" },
        { name: "Cero Sweep" },
        { name: "Bala Gum" },
        { name: "Cero Cyclone" },
        { name: "Bala Drive" },
        { name: "Cero Salvo" },
        { name: "Zero" },
        { name: "Cero Oscuras (ultimate)" }
      ]
    },
    {
      name: "Shinigami Kido",
      skills: [
        { name: "Shakkako" },
        { name: "Tenran" },
        { name: "Byakurai" },
        { name: "Geki" },
        { name: "Hainawa" },
        { name: "Zangerin" },
        { name: "Raikohō" },
        { name: "Gaki Rekko" },
        { name: "Haien" },
        { name: "Tsuzuri Raiden" },
        { name: "Rikujokoro" },
        { name: "Fushibi" },
        { name: "Preserved Reserves (passive)" },
        { name: "Weaker Itto Kasō" },
        { name: "Heavenly Cannon" },
        { name: "Dokatsui" },
        { name: "Danku" }
      ]
    },
    {
      name: "Quincy Kido",
      skills: [
        { name: "Piercing Light" },
        { name: "Volley" },
        { name: "Waveshot" },
        { name: "Slide" },
        { name: "Focal Point" },
        { name: "Reishi Strings" },
        { name: "Still Sliver" },
        { name: "Shadow" },
        { name: "Sankt Bogen" }
      ]
    },
    {
      name: "Speed",
      skills: [
        { name: "Flash Tension" },
        { name: "Blooming Cut" },
        { name: "Flash Fakeout" },
        { name: "Sonido Break" },
        { name: "Flash Cut" },
        { name: "Phantom Trick" },
        { name: "Enhanced Steps" },
        { name: "Dropping Fang" },
        { name: "Floating Strikes" },
        { name: "Shunko" },
        { name: "Passing Breath" },
        { name: "Fast Fang" },
        { name: "Waterfall Dance" },
        { name: "Specter Step" },
        { name: "Time Cut" }
      ],
      ultra: { name: "Serum W", cost: 50, desc: "Speed Ultra Skill. Requires Ultra Soul Style meter." }
    },
    {
      name: "Medic (Healing)",
      skills: [
        { name: "Medic" },
        { name: "Self Heal" },
        { name: "High Speed Regeneration" },
        { name: "Reiatsu Transfer" },
        { name: "Barrier" },
        { name: "Revitalized" },
        { name: "Medic 2" },
        { name: "Selfless Heart" },
        { name: "Medic 3" },
        { name: "Self Heal 2" },
        { name: "Reiatsu Push" },
        { name: "Healing Circle" },
        { name: "Self Heal 3" },
        { name: "Tether" },
        { name: "Bloody Canvas" },
        { name: "Reiatsu Rend" },
        { name: "Leap" },
        { name: "Encompass" },
        { name: "Soul Link" }
      ]
    }
  ],
  transformations: [
    { name: "Vizard (False)", race: "shinigami", desc: "Soul Reaper mask-transformation, tier 1." },
    { name: "Vizard (Standard)", race: "shinigami", desc: "Soul Reaper mask-transformation, tier 2." },
    { name: "Vizard (True)", race: "shinigami", desc: "Requires True Hōgyoku (via 10 fragments)." },
    { name: "Letzt Stil (Lesser)", race: "quincy", desc: "Quincy mode, form 1." },
    { name: "Letzt Stil (True)", race: "quincy", desc: "Obtained by a True Hōgyoku after Lesser Letz." },
    { name: "Segunda Etapa", race: "hollow", desc: "Enhanced Arrancar release after unlocking Resurrección." },
    { name: "Vollständig", race: "quincy", desc: "Quincy final form (beyond Letzt Stil)." },
    { name: "True Vizard", race: "shinigami", desc: "Advanced variant unlocked by using the True Hōgyoku." },
    { name: "True Letz", race: "quincy", desc: "Advanced variant unlocked by using the True Hōgyoku." },
    { name: "True Visored", race: "shinigami", desc: "Advanced variant unlocked by using the True Hōgyoku." }
  ]
};

// Skillbox requirements and universal skillboxes
const SKILLBOX_REQUIREMENTS = {
  hakuda: [
    { name: "Shori", req: p => p.hakuda_points >= 25 },
    { name: "Gehenna", req: p => p.hakuda_points >= 25 },
    { name: "Death flair", req: p => p.hakuda_points >= 25 }
  ],
  kendo: [
    { name: "Sonata Flow", req: p => p.kendo_points >= 25 },
    { name: "Eviscerate", req: p => p.kendo_points >= 25 },
    { name: "Crescent Relief", req: p => p.kendo_points >= 25 }
  ],
  medic: [
    { name: "Overcharge", req: p => p.medic_points >= 25 },
    { name: "Amplifier", req: p => p.medic_points >= 25 },
    { name: "Discord", req: p => p.medic_points >= 25 }
  ],
  speed: [
    { name: "Flash Fang", req: p => p.speed_points >= 25 },
    { name: "Strata Strike", req: p => p.speed_points >= 25 },
    { name: "Black Claw", req: p => p.speed_points >= 25 },
    { name: "Ghost Cleave", req: p => p.speed_points >= 25 }
  ],
  kido_quincy: [
    { name: "Licht Regen", req: p => p.kido_points >= 25 },
    { name: "Zorn Gottes", req: p => p.kido_points >= 25 },
    { name: "Holy Thunder", req: p => p.kido_points >= 25 }
  ],
  kido_shinigami: [
    { name: "Goryutenmetsu", req: p => p.kido_points >= 25 },
    { name: "Shinten Raiho", req: p => p.kido_points >= 25 },
    { name: "Kuyo Shibari", req: p => p.kido_points >= 25 }
  ],
  kido_arrancar: [
    { name: "Bala Burner", req: p => p.kido_points >= 25 },
    { name: "Cero Fireflies", req: p => p.kido_points >= 25 },
    { name: "Hollow Bite", req: p => p.kido_points >= 25 }
  ],
  universal: [
    { name: "Sanguine Spear", req: () => true },
    { name: "Earthshatter", req: () => true }
  ]
};
