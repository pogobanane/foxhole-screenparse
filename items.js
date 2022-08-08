// downloaded from https://foxholelogi.com/ and added imgPath as icon from github.com/foxholetools/assets/
// Items from update 48 are added, but values of existing items are still the old ones.
const gameitems = [
    {
      "displayId": 0,
      "faction": [
        "warden"
      ],
      "imgName": "Cascadier_873.png",
      "imgPath": "icons/items/pistollightwitem.png",
      "imgUasset": "ItemIcons/PistolLightWItemIcon.png",
      "itemName": "Cascadier 873",
      "itemDesc": "This unique sidearm fires in three-round bursts. The Cascadier may not have the stopping power of its cousins, but it more than makes up for it with its lightweight frame, concealability, and fire rate.",
      "itemCategory": "small_arms",
      "itemClass": "Pistol",
      "ammoUsed": "8mm",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 60
      }
    },
    {
      "displayId": 1,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "8mm.png",
      "imgPath": "icons/items/pistolammoitem.png",
      "imgUasset": "ItemIcons/PistolAmmoItemIcon.png",
      "itemName": "8mm",
      "itemDesc": "Standard ammunition for pistols.",
      "itemCategory": "small_arms",
      "numberProduced": 40,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals light kinetic damage",
      "extraIcon": "light_kinetic",
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 40
      }
    },  
    {
      "displayId": 2,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Cometa_T2_9.png",
      "imgPath": "icons/items/revolveritem.png",
      "imgUasset": "ItemIcons/RevolverItemIcon.png",
      "itemName": "Cometa T2-9",
      "itemDesc": "The Cometa T2-9 boasts remarkable stopping power for a sidearm. This Estrellan mainstay has lived through several generations due to its fine craftsmanship design.",
      "itemCategory": "small_arms",
      "itemClass": "Revolver",
      "ammoUsed": ".44",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 2,
        "cratesIdeal": 8,
      },
      "cost": {
        "bmat": 60
      }
    },
    {
      "displayId": 3,
      "faction": [
        "warden"
      ],
      "imgName": "The_Hangman_757.png",
      "imgPath": "icons/items/revolvingriflewitem.png",
      "imgUasset": "ItemIcons/RevolvingRifleWItemIcon.png",
      "itemName": "The Hangman 757",
      "itemDesc": "The weapon of choice for pirates and smugglers, its legend is well-earned. With incredibly high stopping power and unique revolver mechanism, the Hangman often playes judge, jury, and executioner.",
      "itemCategory": "small_arms",
      "itemClass": "Heavy Rifle",
      "ammoUsed": ".44",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 125
      }
    },
    {
      "displayId": 4,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "44.png",
      "imgPath": "icons/items/revolverammoitem.png",
      "imgUasset": "ItemIcons/RevolverAmmoItemIcon.png",
      "itemName": ".44",
      "itemDesc": "Standard ammunition for revolvers.",
      "itemCategory": "small_arms",
      "numberProduced": 40,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals light kinetic damage",
      "extraIcon": "light_kinetic",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 2,
        "cratesIdeal": 6,
      },
      "cost": {
        "bmat": 40
      }
    },
    {
      "displayId": 5,
      "faction": [
        "warden"
      ],
      "imgName": "No_2_Loughcaster.png",
      "imgPath": "icons/items/riflew.png",
      "imgUasset": "ItemIcons/RifleW.png",
      "itemName": "No.2 Loughcaster",
      "itemDesc": "Standard-issue Warden rifle. This bolt-action firearm is as robust as they come and has seen over a century of use on the battlefield.",
      "itemCategory": "small_arms",
      "itemClass": "Rifle",
      "ammoUsed": "7.62mm",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 1,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 6,
      "faction": [
        "warden"
      ],
      "imgName": "Blakerow_871.png",
      "imgPath": "icons/items/carbineitem.png",
      "imgUasset": "ItemIcons/CarbineItemIcon.png",
      "itemName": "Blakerow 871",
      "itemDesc": "The Blakerow is a carbine with a high rate of fire compared to its bolt-action predecessor. This increased fire rate does come at the cost of innate stopping power; however, its versatility and lightweight frame more than makes up for any perceived shortcomings.",
      "itemCategory": "small_arms",
      "itemClass": "Rifle",
      "ammoUsed": "7.62mm",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 2,
        "cratesIdeal": 10,
      },
      "cost": {
        "bmat": 140
      }
    },
    {
      "displayId": 7,
      "faction": [
        "warden"
      ],
      "imgName": "Clancy_Cinder_M3.png",
      "imgPath": "icons/items/riflelongw.png",
      "imgUasset": "ItemIcons/RifleLongW.png",
      "itemName": "Clancy Cinder M3",
      "itemDesc": "The Clancy Cinder is a classic, high-powered long rifle designed for use in mid-to-long range encounters. First deployed with the Hands during a high-risk operation in Acrithia.",
      "itemCategory": "small_arms",
      "itemClass": "Long Rifle",
      "ammoUsed": "7.62mm",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 130
      }
    },
    {
      "displayId": 8,
      "faction": [
        "warden"
      ],
      "imgName": "Sampo_Auto_Rifle_77.png",
      "imgPath": "icons/items/rifleautomaticw.png",
      "imgUasset": "ItemIcons/RifleAutomaticW.png",
      "itemName": "Sampo Auto-Rifle 77",
      "itemDesc": "The precursor to the storm rifle, the Sampo Auto-Rifle, is a mastercraft of its day. With a single shot and automatic fire mode, this versatile rifle may not reach the fire rates of automatic weapons but more than makes up for it with utility.",
      "itemCategory": "small_arms",
      "itemClass": "Rifle",
      "ammoUsed": "7.62mm",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 125
      }
    },
    {
      "displayId": 9,
      "faction": [
        "colonial"
      ],
      "imgName": "Argenti_R_II.png",
      "imgPath": "icons/items/riflecitem.png",
      "imgUasset": "ItemIcons/RifleCItemIcon.png",
      "itemName": "Argenti r.II Rifle",
      "itemDesc": "The primary infantry rifle of the Colonial legion. Its predecessor, the Volta repeater, was a sturdy, reliable firearm but had many limitations, namely, fire rate. The Argenti solves this limitation as well as being more compact and lightweight.",
      "itemCategory": "small_arms",
      "itemClass": "Rifle",
      "ammoUsed": "7.62mm",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 10,
      "faction": [
        "colonial"
      ],
      "imgName": "Fuscina_pi_I.png",
      "imgPath": "icons/items/riflelightcitem.png",
      "imgUasset": "ItemIcons/RifleLightCItemIcon.png",
      "itemName": "Fuscina pi.I",
      "itemDesc": "This unique rifle fires three rounds in rapid succession. The Fuscina is the first of its kind, designed for laying down suppressive fire during assaults on fortified enemy entrenchments.",
      "itemCategory": "small_arms",
      "itemClass": "Rifle",
      "ammoUsed": "7.62mm",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 140
      }
    },
    {
      "displayId": 11,
      "faction": [
        "colonial"
      ],
      "imgName": "KRR2_790_Omen.png",
      "imgPath": "icons/items/riflelongc.png",
      "imgUasset": "ItemIcons/RifleLongC.png",
      "itemName": "KRR2-790 Omen",
      "itemDesc": "An older but reliable model of Kraunian long rifle. The Omen is a sturdy, simple weapon best used in long-distance skirmishes.",
      "itemCategory": "small_arms",
      "itemClass": "Long Rifle",
      "ammoUsed": "7.62mm",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 155
      }
    },
    {
      "displayId": 12,
      "faction": [
        "colonial"
      ],
      "imgName": "Volta_r_I_Repeater.png",
      "imgPath": "icons/items/rifleheavycitem.png",
      "imgUasset": "ItemIcons/RifleHeavyCItemIcon.png",
      "itemName": "Volta r.I Repeater",
      "itemDesc": "An old war Mesean rifle. It boasts high stopping power, but not as accurate as its modern variant. A weapon of legend, the Howling Lions wielded the Volta during their raid on the beaches of Fisherman's Row.",
      "itemCategory": "small_arms",
      "itemClass": "Heavy Rifle",
      "ammoUsed": "7.62mm",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 13,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "7_62mm.png",
      "imgPath": "icons/items/rifleammoitem.png",
      "imgUasset": "ItemIcons/RifleAmmoItemIcon.png",
      "itemName": "7.62mm",
      "itemDesc": "Standard ammunition for rifles.",
      "itemCategory": "small_arms",
      "numberProduced": 40,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals light kinetic damage",
      "extraIcon": "light_kinetic",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 1,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 80
      }
    },
    {
      "displayId": 14,
      "faction": [
        "warden"
      ],
      "imgName": "Fiddler_Submachine_Gun_Model_868.png",
      "imgPath": "icons/items/submachinegun.png",
      "imgUasset": "ItemIcons/SubMachineGunIcon.png",
      "itemName": "Fiddler Submachine Gun Model 868",
      "itemDesc": "The Fiddler Submachine gun is a widely used urban combat weapon. Its high rate of fire and compact frame makes it ideal for close-quarters engagements.",
      "itemCategory": "small_arms",
      "itemClass": "Submachine Gun",
      "ammoUsed": "9mm SMG",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 3,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 120
      }
    },
    {
      "displayId": 15,
      "faction": [
        "warden"
      ],
      "imgName": "No_1_The_Liar_Submachine_Gun.png",
      "imgPath": "icons/items/smgheavywitem.png",
      "imgUasset": "ItemIcons/SMGHeavyWItemIcon.png",
      "itemName": "No.1 \"The Liar\" Submachinegun",
      "itemDesc": "This unique, heavy-duty submachine gun is not very useful on the run, but with careful aim and adequate cover, becomes a razorblade in the night.",
      "itemCategory": "small_arms",
      "itemClass": "Submachine Gun",
      "ammoUsed": "9mm SMG",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 3,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 120
      }
    },
    {
      "displayId": 16,
      "faction": [
        "colonial"
      ],
      "imgName": "The_Pitch_Gun_mc_V.png",
      "imgPath": "icons/items/smgcitem.png",
      "imgUasset": "ItemIcons/SMGCItemIcon.png",
      "itemName": "\"The Pitch Gun\" mc. V",
      "itemDesc": "This classic submachine gun is sturdy and irreplaceable as a general tool for close-range engagements. The \"Pitch Gun\" earned its namesake from Mesean sailors who employed the weapon to successfully defend against a night raid on the Geraston docks.",
      "itemCategory": "small_arms",
      "itemClass": "Submachine Gun",
      "ammoUsed": "9mm SMG",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 80
      }
    },
    {
      "displayId": 17,
      "faction": [
        "colonial"
      ],
      "imgName": "Lionclaw_mc_VIII.png",
      "imgPath": "icons/items/smgheavycitem.png",
      "imgUasset": "ItemIcons/SMGHeavyCItemIcon.png",
      "itemName": "\"Lionclaw\" mc.VIII",
      "itemDesc": "A heavier, modern variation of the Pitch Gun, the Lionclaw Performs well as a decent, all-around submachine gun designed as a primary firearm in urban and close-quarters combat operations.",
      "itemCategory": "small_arms",
      "itemClass": "Submachine Gun",
      "ammoUsed": "9mm SMG",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 120
      }
    },
    {
      "displayId": 18,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "9mm_SMG.png",
      "imgPath": "icons/items/submachinegunammo.png",
      "imgUasset": "ItemIcons/SubMachineGunAmmoIcon.png",
      "itemName": "9mm SMG",
      "itemDesc": "Standard ammunition for submachine guns.",
      "itemCategory": "small_arms",
      "numberProduced": 40,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals light kinetic damage",
      "extraIcon": "light_kinetic",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 3,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 80
      }
    },
    {
      "displayId": 19,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Brasa_Shotgun.png",
      "imgPath": "icons/items/shotgunitem.png",
      "imgUasset": "ItemIcons/ShotgunItemIcon.png",
      "itemName": "Brasa Shotgun",
      "itemDesc": "This close-range firearm is an Estrellan import originally designed for hunting wild game. The Brasa is primarily used in urban operations.",
      "itemCategory": "small_arms",
      "itemClass": "Shotgun",
      "ammoUsed": "Buckshot",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 120
      }
    },
    {
      "displayId": 20,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Buckshot.png",
      "imgPath": "icons/items/shotgunammoitem.png",
      "imgUasset": "ItemIcons/ShotgunAmmoItemIcon.png",
      "itemName": "Buckshot",
      "itemDesc": "Standard ammunition for Shotguns.",
      "itemCategory": "small_arms",
      "numberProduced": 40,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals light kinetic damage",
      "extraIcon": "light_kinetic",
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 80
      }
    },
    {
      "displayId": 21,
      "faction": [
        "warden"
      ],
      "imgName": "Aalto_Storm_Rifle_24.png",
      "imgPath": "icons/items/assaultrifleitem.png",
      "imgUasset": "ItemIcons/AssaultRifleItemIcon.png",
      "itemName": "Aalto Storm Rifle 24",
      "itemDesc": "Widely considered to be the first storm rifle, the Aalto is a marvel in Caoivish engineering. With its two fire modes, it can be used as a rapid-fire assault weapon or a mid-range rifle.",
      "itemCategory": "small_arms",
      "itemClass": "Assault Rifle",
      "ammoUsed": "7.92mm",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 2,
        "cratesIdeal": 24,
      },
      "cost": {
        "bmat": 165
      }
    },
    {
      "displayId": 22,
      "faction": [
        "warden"
      ],
      "imgName": "Booker_Storm_Rifle_Model_838.png",
      "imgPath": "icons/items/assaultrifleheavywitem.png",
      "imgUasset": "ItemIcons/AssaultRifleHeavyWItemIcon.png",
      "itemName": "Booker Storm Rifle Model 838",
      "itemDesc": "The Booker is a high-impact three-round burst Storm Rifle for those who like to shoot first.",
      "itemCategory": "small_arms",
      "itemClass": "Assault Rifle",
      "ammoUsed": "7.92mm",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 3,
        "cratesIdeal": 20,
      },
      "cost": {
        "bmat": 165
      }
    },
    {
      "displayId": 23,
      "faction": [
        "colonial"
      ],
      "imgName": "Catara_mo_II.png",
      "imgPath": "icons/items/lightmachinegun.png",
      "imgUasset": "ItemIcons/LightMachineGunIcon.png",
      "itemName": "Catara mo.II",
      "itemDesc": "A titanic light machine gun capable of scattering infantry lines with ease, the Catara is a modern weapon for the modern Colonial.",
      "itemCategory": "small_arms",
      "itemClass": "Light Machine Gun",
      "ammoUsed": "12.7mm",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 165
      }
    },
    {
      "displayId": 24,
      "faction": [
        "colonial"
      ],
      "imgName": "Dusk_ce_III.png",
      "imgPath": "icons/items/assaultrifleheavycitem.png",
      "imgUasset": "ItemIcons/AssaultRifleHeavyCItemIcon.png",
      "itemName": "\"Dusk\" ce.III",
      "itemDesc": "This unique assault rifle includes a high-capacity drum magazine designed for sustained rapid fire.",
      "itemCategory": "small_arms",
      "itemClass": "Assault Rifle",
      "ammoUsed": "7.92mm",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 165
      }
    },
    {
      "displayId": 25,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "7_92mm.png",
      "imgPath": "icons/items/assaultrifleammoitem.png",
      "imgUasset": "ItemIcons/AssaultRifleAmmoItemIcon.png",
      "itemName": "7.92mm",
      "itemDesc": "Standard ammunition for storm rifles, light machine guns, and armored cars.",
      "itemCategory": "small_arms",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals light kinetic damage",
      "extraIcon": "light_kinetic",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 2,
        "cratesIdeal": 16,
      },
      "cost": {
        "bmat": 120
      }
    },
    {
      "displayId": 26,
      "faction": [
        "warden"
      ],
      "imgName": "Clancy_Raca_M4.png",
      "imgPath": "icons/items/sniperrifleitem.png",
      "imgUasset": "ItemIcons/SniperRifleItemIcon.png",
      "itemName": "Clancy-Raca M4",
      "itemDesc": "A heavy-duty, long-range marksman rifle. The Clancy-Raca has one hell of a kick but is fitted with a powerful scope, allowing infantry to survey the battlefield and provide support from a safe location.",
      "itemCategory": "small_arms",
      "itemClass": "Sniper Rifle",
      "ammoUsed": "8.5mm",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 200,
        "rmat": 15
      }
    },
    {
      "displayId": 27,
      "faction": [
        "colonial"
      ],
      "imgName": "KRR3_792_Auger.png",
      "imgPath": "icons/items/sniperriflecitem.png",
      "imgUasset": "ItemIcons/SniperRifleCItemIcon.png",
      "itemName": "KRR3-792 Auger",
      "itemDesc": "A Kraunian rifle modified for long-range engagements. It doesn't have the range or stopping power of other marksman rifles but more than makes up for it with unmatched reliability in a range of environments and a superior effective rate of fire.",
      "itemCategory": "small_arms",
      "itemClass": "Sniper Rifle",
      "ammoUsed": "8.5mm",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 200,
        "rmat": 15
      }
    },
    {
      "displayId": 28,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "8_5mm.png",
      "imgPath": "icons/items/sniperrifleammoitem.png",
      "imgUasset": "ItemIcons/SniperRifleAmmoItemIcon.png",
      "itemName": "8.5mm",
      "itemDesc": "Standard ammunition for sniper rifles.",
      "itemCategory": "small_arms",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals light kinetic damage",
      "extraIcon": "light_kinetic",
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 150
      }
    },
    {
      "displayId": 29,
      "faction": [
        "colonial"
      ],
      "imgName": "KRN886_127_Gast_Machine_Gun.png",
      "imgPath": "icons/items/mgcitem.png",
      "imgUasset": "ItemIcons/MGCItemIcon.png",
      "itemName": "KRN886-127 Gast Machine Gun",
      "itemDesc": "The Gast is a deadly but cumbersome Kraunian heavy machine gun. It is best suited to holding and defending established fortifications or garrisoned structures against encroaching infantry.",
      "itemCategory": "small_arms",
      "itemClass": "Machine Gun",
      "ammoUsed": "12.7mm",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "damageType": "Deals heavy kinetic damage",
      "cost": {
        "rmat": 30
      }
    },
    {
      "displayId": 30,
      "faction": [
        "warden"
      ],
      "imgName": "Malone_MK_2.png",
      "imgPath": "icons/items/mgwitem.png",
      "imgUasset": "ItemIcons/MGWItemIcon.png",
      "itemName": "Malone MK.2",
      "itemDesc": "This heavy machine gun is bulky enough to require a steady surface to maintain stability. The Malone series of machine guns are unmatched defenders on the battlefield.",
      "itemCategory": "small_arms",
      "itemClass": "Machine Gun",
      "ammoUsed": "12.7mm",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 30
      }
    },
    {
      "displayId": 31,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "12_7mm.png",
      "imgPath": "icons/items/machinegunammo.png",
      "imgUasset": "ItemIcons/MachineGunAmmoIcon.png",
      "itemName": "12.7mm",
      "itemDesc": "Standard ammunition for all machine guns, including vehicle mounted weapons like those on the half-track and battle tank.",
      "itemCategory": "small_arms",
      "extraIcon": "heavy_kinetic",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 3,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 32,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "PT_815_Smoke_Grenade.png",
      "imgPath": "icons/items/smokegrenadeicon1.png",
      "imgUasset": "ItemIcons/Smokegrenadeicon1.png",
      "itemName": "PT-815 Smoke Grenade",
      "itemDesc": "A standard smoke grenade designed for concealing allied movement or screening the enemy's vision.",
      "itemCategory": "small_arms",
      "itemClass": "Smoke Grenade",
      "extraIcon": "smoke",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 3,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 120
      }
    },
    {
      "displayId": 0,
      "faction": [
        "colonial"
      ],
      "imgName": "Typhon_ra_XII.png",
      "itemName": "\"Typhon\" ra.XII",
      "imgPath": "icons/items/atrifletc.png",
      "imgUasset": "ItemIcons/ATRifleTCIcon.png",
      "itemDesc": "This mounted anti-tank rifle boasts improved accuracy over its free-standing counterparts. The Typhon was specifically designed with shock absorption in mind, allowing for faster, more consistent firing patterns.",
      "itemCategory": "heavy_arms",
      "itemClass": "Mounted Anti-Tank Rifle",
      "highVelocityBonus": "Equipped with a high velocity barrel that deals 50% extra damage per shot.",
      "ammoUsed": "20mm",
      "isMountable": true,
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 150
      }
    },
    {
      "displayId": 1,
      "faction": [
        "warden"
      ],
      "imgName": "135_Neville_Anti_Tank_Rifle.png",
      "imgPath": "icons/items/atrifleitem.png",
      "imgUasset": "ItemIcons/ATRifleItemIcon.png",
      "itemName": "135 Neville Anti-Tank Rifle",
      "itemDesc": "The Neville is unmatched in its versatility as a portable, magazine-based anti-armor firearm.",
      "itemCategory": "heavy_arms",
      "itemClass": "Anti-Tank Rifle",
      "ammoUsed": "20mm",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 4,
        "cratesIdeal": 14,
      },
      "cost": {
        "bmat": 150
      }
    },
    {
      "displayId": 2,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "20mm.png",
      "imgPath": "icons/items/atrifleammoitem.png",
      "imgUasset": "ItemIcons/ATRifleAmmoItemIcon.png",
      "itemName": "20mm",
      "itemDesc": "Standard ammunition for anti-tank rifles.",
      "itemCategory": "heavy_arms",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals anti-tank explosive damage", // TODO this is kinetic damage https://foxhole.fandom.com/wiki/20mm
      "damageDesc": "Can penetrate armored vehicles",
      "extraIcon": "at_kinetic",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 4,
        "cratesIdeal": 30,
      },
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 3,
      "faction": [
        "colonial"
      ],
      "imgName": "Daucus_isg_III.png",
      "imgPath": "icons/items/infantrysupportgunitem.png",
      "imgUasset": "ItemIcons/InfantrySupportGunItemIcon.png",
      "itemName": "Daucus isg.III",
      "itemDesc": "This heavy infantry cannon requires a tripod for stability. The Daucus is designed to give infantry a foothold against enemy vehicles and light fortifications or established fortified garrisons.",
      "itemCategory": "heavy_arms",
      "itemClass": "Infantry Support Gun",
      "ammoUsed": "30mm",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "extraIcon": "explosive",
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 150
      }
    },
    {
      "displayId": 4,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "30mm.png",
      "imgPath": "icons/items/minitankammoitem.png",
      "imgUasset": "ItemIcons/MiniTankAmmoItemIcon.png",
      "itemName": "30mm",
      "itemDesc": "Standard explosive shell for small vehicles or infantry weapons.",
      "itemCategory": "heavy_arms",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals explosive damage",
      "damageDesc": "Can penetrate armored vehicles",
      "extraIcon": "explosive",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 3,
        "cratesIdeal": 8,
      },
      "cost": {
        "bmat": 80,
        "emat": 20
      }
    },
    {
      "displayId": 5,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "40mm.png",
      "imgPath": "icons/items/lighttankammoitem.png",
      "imgUasset": "ItemIcons/LightTankAmmoItemIcon.png",
      "itemName": "40mm",
      "itemDesc": "Standard payload for light tanks.",
      "itemCategory": "heavy_arms",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals explosive damage",
      "damageDesc": "Can penetrate armored vehicles",
      "extraIcon": "explosive",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 7,
        "cratesIdeal": 10,
      },
      "cost": {
        "bmat": 160,
        "emat": 120
      }
    },
    {
      "displayId": 6,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "68mm.png",
      "imgPath": "icons/items/atammo.png",
      "imgUasset": "ItemIcons/ATAmmoIcon.png",
      "itemName": "68mm AT",
      "itemDesc": "An anti-tank shell that's effective against penetrating tank armor.",
      "itemCategory": "heavy_arms",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals armor piercing damage",
      "damageDesc": "Can penetrate armored vehicles",
      "extraIcon": "armour_piercing",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "vehiclePenChance": "High chance to penetrate armored vehicles.",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 8,
        "cratesIdeal": 10,
      },
      "cost": {
        "bmat": 120,
        "emat": 120
      }
    },
    {
      "displayId": 7,
      "faction": [
        "warden"
      ],
      "imgName": "Cutler_Launcher_4.png",
      "imgPath": "icons/items/rpgitem.png",
      "imgUasset": "ItemIcons/RpgItemIcon.png",
      "itemName": "Cutler Launcher 4",
      "itemDesc": "The Cutler Launcher is capable of firing and unguided, rocket-propelled grenade over short distances with startling efficiency. Its simple design allows for easy deployment and storage.",
      "itemCategory": "heavy_arms",
      "itemClass": "RPG",
      "ammoUsed": "R.P.G. Shell",
      "damageType": "Deals explosive damage",
      "damageDesc": "Can penetrate armored vehicles",
      "extraIcon": "explosive",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 4,
        "cratesIdeal": 6,
      },
      "cost": {
        "bmat": 100,
        "rmat": 25
      }
    },
    {
      "displayId": 8,
      "faction": [
        "warden"
      ],
      "imgName": "Cutler_Foebreaker.png",
      "imgPath": "icons/items/atrpgtw.png",
      "imgUasset": "ItemIcons/ATRPGTWIcon.png",
      "itemName": "Cutler Foebreaker",
      "itemClass": "Mounted RPG Launcher",
      "itemDesc": "This unique duel-barrelled RPG launcher can fire two RPG shells in relatively quick succession. This increase in firepower makes it nearly impossible for a single soldier to operate without the support of a sturdy mount.",
      "itemCategory": "heavy_arms",
      "extraIcon": "explosive",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals explosive damage",
      "damageDesc": "Can penetrate armored vehicles",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "isTeched": true,
      "ammoUsed": "R.P.G. Shell",
      "isMpfCraftable": true,
      "cost": {
        "bmat": 200
      }
    },
    {
      "displayId": 9,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "R_P_G_Shell.png",
      "imgPath": "icons/items/rpgammoitem.png",
      "imgUasset": "ItemIcons/RpgAmmoItemIcon.png",
      "itemName": "R.P.G Shell",
      "itemDesc": "An explosive projectile fired from an R.P.G.",
      "itemCategory": "heavy_arms",
      "extraIcon": "explosive",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals explosive damage",
      "damageDesc": "Can penetrate armored vehicles",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 4,
        "cratesIdeal": 20,
      },
      "cost": {
        "bmat": 60,
        "emat": 75
      }
    },
    {
      "displayId": 10,
      "faction": [
        "colonial"
      ],
      "imgName": "Venom_c_II.png",
      "imgPath": "icons/items/atrpgcitem.png",
      "imgUasset": "ItemIcons/ATRPGCItemIcon.png",
      "itemName": "Venom c.II 35",
      "itemDesc": "The venom RPG launcher fires anti-tank charges. Its simple design makes it easy to deploy, even in high-stakes operations",
      "itemCategory": "heavy_arms",
      "itemClass": "Anti-Tank RPG",
      "ammoUsed": "A.T.R.P.G. Shell",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "damageType": "Deals armor piercing damage",
      "damageDesc": "Can penetrate armored vehicles",
      "extraIcon": "armour_piercing",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "vehiclePenChance": "High chance to penetrate armored vehicles.",
      "cost": {
        "bmat": 100,
        "rmat": 25
      }
    },
    {
      "displayId": 11,
      "faction": [
        "colonial"
      ],
      "imgName": "Ignifist_30.png",
      "imgPath": "icons/items/atrpglightcitem.png",
      "imgUasset": "ItemIcons/ATRPGLightCItemIcon.png",
      "itemName": "Ignifist 30",
      "itemDesc": "This single-use rocket can be fired a short distance. Designed to punch holes into tanks, the ignifist is the perfect tool for infantry anticipating armored resistance.",
      "itemCategory": "heavy_arms",
      "itemClass": "Anti-Tank RPG",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "damageType": "Deals armor piercing damage",
      "damageDesc": "Can penetrate armored vehicles",
      "extraIcon": "armour_piercing",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "vehiclePenChance": "High chance to penetrate armored vehicles.",
      "cost": {
        "bmat": 60,
        "emat": 50
      }
    },
    {
      "displayId": 12,
      "faction": [
        "colonial"
      ],
      "imgName": "Bane_45.png",
      "imgPath": "icons/items/atrpgitem.png",
      "imgUasset": "ItemIcons/ATRpgItemIcon.png",
      "itemName": "Bane 45",
      "itemDesc": "This shoulder-mounted heavy launcher is the first of its kind. It features heavy blast shielding and is capable of launching anti-tank charges over relatively large distances.",
      "itemCategory": "heavy_arms",
      "itemClass": "Anti-Tank RPG",
      "ammoUsed": "A.T.R.P.G. Shell",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "damageType": "Deals armor piercing damage",
      "damageDesc": "Can penetrate armored vehicles",
      "extraIcon": "armour_piercing",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "vehiclePenChance": "High chance to penetrate armored vehicles.",
      "cost": {
        "bmat": 150,
        "rmat": 45
      }
    },
    {
      "displayId": 13,
      "faction": [
        "colonial"
      ],
      "imgName": "A_T_R_P_G_Shell.png",
      "imgPath": "icons/items/atrpgammoitem.png",
      "imgUasset": "ItemIcons/ATRpgAmmoItemIcon.png",
      "itemName": "A.T.R.P.G Shell",
      "itemDesc": "An anti-tank projectile fired from an R.P.G.",
      "itemCategory": "heavy_arms",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals armor piercing damage",
      "damageDesc": "Can penetrate armored vehicles",
      "extraIcon": "armour_piercing",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "vehiclePenChance": "High chance to penetrate armored vehicles.",
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 60,
        "emat": 75
      }
    },
    {
      "displayId": 14,
      "faction": [
        "warden"
      ],
      "imgName": "Bonesaw_MK_3.png",
      "imgPath": "icons/items/atmortaritem.png",
      "imgUasset": "ItemIcons/ATMortarItemIcon.png",
      "itemName": "Bonesaw MK.3",
      "itemDesc": "The pride of the Warden anti-armored arsenal, the Bonesaw Mk.3 has one job; to cut through heavy metal plating of Colonial tanks.",
      "itemCategory": "heavy_arms",
      "itemClass": "Anti-Tank RPG",
      "extraIcon": "armour_piercing",
      "ammoUsed": "A.T.R.P.G. Indirect Shell",
      "damageType": "Deals armor piercing damage",
      "damageDesc": "Can penetrate armored vehicles",
      "vehiclePen": "High chance to penetrate armored vehicles.",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 7,
        "cratesIdeal": 8,
      },
      "cost": {
        "bmat": 100,
        "rmat": 25
      }
    },
    {
      "displayId": 15,
      "faction": [
        "warden"
      ],
      "imgName": "Mounted_Bonesaw_MK_3.png",
      "imgPath": "icons/items/atmortarwtripoditem.png",
      "imgUasset": "ItemIcons/ATMortarWTripodItemIcon.png",
      "itemName": "Mounted Bonesaw MK.3",
      "itemDesc": "This variant of the Bonesaw MK.3 is specially designed for use with tripod mounts. This affords it with increased stability and maximum potential range.",
      "itemCategory": "heavy_arms",
      "itemClass": "Anti-Tank RPG",
      "extraIcon": "armour_piercing",
      "ammoUsed": "A.T.R.P.G. Indirect Shell",
      "damageType": "Deals armor piercing damage",
      "damageDesc": "Can penetrate armored vehicles",
      "vehiclePen": "High chance to penetrate armored vehicles.",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 5,
        "cratesIdeal": 6,
      },
      "cost": {
        "bmat": 200
      }
    },
    {
      "displayId": 16,
      "faction": [
        "warden"
      ],
      "imgName": "A_T_R_P_G_Indirect_Shell.png",
      "imgPath": "icons/items/atmortarammoitem.png",
      "imgUasset": "ItemIcons/ATMortarAmmoItemIcon.png",
      "itemName": "A.T.R.P.G. Indirect Shell",
      "itemDesc": "An anti-tank projectile fired from indirect R.P.G. weapons.",
      "itemCategory": "heavy_arms",
      "damageType": "Deals armor piercing damage",
      "damageDesc": "Can penetrate armored vehicles",
      "extraIcon": "armour_piercing",
      "vehiclePen": "High chance to penetrate armored vehicles.",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 5,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 60,
        "emat": 75
      }
    },
    {
      "displayId": 17,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Cremari_Mortar.png",
      "imgPath": "icons/items/mortaritem.png",
      "imgUasset": "ItemIcons/MortarItemIcon.png",
      "itemName": "Cremari Mortar",
      "itemDesc": "This short-range cannon is designed to bombard enemy infantry with indirect fire.",
      "itemCategory": "heavy_arms",
      "itemClass": "Mortar",
      "ammoUsed": "Mortar Shell, Mortar Shrapnel Shell, Mortar Flare Shell",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 5,
        "cratesIdeal": 10,
      },
      "cost": {
        "bmat": 100,
        "rmat": 25
      }
    },
    {
      "displayId": 18,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Mortar_Shell.png",
      "imgPath": "icons/items/mortarammo.png",
      "imgUasset": "ItemIcons/MortarAmmoIcon.png",
      "itemName": "Mortar Shell",
      "itemDesc": "An explosive projectile fired from a mortar.",
      "itemCategory": "heavy_arms",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals high explosive damage",
      "damageDesc": "Reduced damage against trenches",
      "extraIcon": "high_explosive",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 6,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 60,
        "emat": 35
      }
    },
    {
      "displayId": 19,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Mortar_Shell.png",
      "imgPath": "icons/items/mortarammo.png",
      "imgUasset": "ItemIcons/MortarAmmoIcon.png",
      "itemName": "Mortar Shrapnel Shell",
      "itemDesc": "A shell that explodes into shrapnel on impact, devastating nearby infantry.",
      "itemCategory": "heavy_arms",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "damageType": "Deals shrapnel damage",
      "damageDesc": "Always causes target to bleed",
      "extraIcon": "shrapnel",
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 6,
        "cratesIdeal": 10,
      },
      "cost": {
        "bmat": 60,
        "emat": 15
      }
    },
    {
      "displayId": 20,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Mortar_Shell.png",
      "imgPath": "icons/items/mortarammo.png",
      "imgUasset": "ItemIcons/MortarAmmoIcon.png",
      "itemName": "Mortar Flare Shell",
      "itemDesc": "A shell that ignites midair and illuminates a large area, revealing enemy targets.",
      "itemCategory": "heavy_arms",
      "extraIcon": "flare",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 5,
        "cratesIdeal": 30,
      },
      "cost": {
        "bmat": 60,
        "emat": 10
      }
    },
    {
      "displayId": 21,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "120mm.png",
      "imgPath": "icons/items/lightartilleryammoitem.png",
      "imgUasset": "ItemIcons/LightArtilleryAmmoItemIcon.png",
      "itemName": "120mm",
      "itemDesc": "Payload for light artillery weapons.",
      "itemCategory": "heavy_arms",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals high explosive damage",
      "damageDesc": "Reduced damage against trenches",
      "extraIcon": "high_explosive",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 5,
        "cratesIdeal": 40,
      },
      "cost": {
        "bmat": 60,
        "emat": 15
      }
    },
    {
      "displayId": 22,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "150mm.png",
      "imgPath": "icons/items/heavyartilleryammoitem.png",
      "imgUasset": "ItemIcons/HeavyArtilleryAmmoItemIcon.png",
      "itemName": "150mm",
      "itemDesc": "Payload for heavy artillery weapons.",
      "itemCategory": "heavy_arms",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals high explosive damage",
      "damageDesc": "Reduced damage against trenches",
      "extraIcon": "high_explosive",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 9,
        "cratesIdeal": 40,
      },
      "cost": {
        "bmat": 120,
        "hemat": 10
      }
    },
    {
      "displayId": 23,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "250mm.png",
      "imgPath": "icons/items/mortartank.png",
      "imgUasset": "ItemIcons/MortarTankIcon.png",
      "itemName": "250mm",
      "itemDesc": "A shell that is launched over short distances by a spigot mortar.",
      "itemCategory": "heavy_arms",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals demolition damage",
      "extraIcon": "demolition",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 9,
        "cratesIdeal": 8,
      },
      "cost": {
        "bmat": 120,
        "hemat": 25
      }
    },
    {
      "displayId": 24,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Green_Ash_Grenade.png",
      "imgPath": "icons/items/deadlygas01.png",
      "imgUasset": "ItemIcons/DeadlyGas01Icon.png",
      "itemName": "Green Ash Grenade",
      "itemDesc": "Green ash is an asphyxiating toxin. Inhaling it without protection will result in a quick death. Be sure to wear a gas mask with fresh filters when handling green ash.",
      "itemCategory": "heavy_arms",
      "itemClass": "Gas Grenade",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "damageType": "Deals poisonous gas damage",
      "damageDesc": "Causes damage over time",
      "extraIcon": "gas",
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 1,
        "cratesIdeal": 30,
      },
      "cost": {
        "bmat": 140
      }
    },
    {
      "displayId": 25,
      "faction": [
        "colonial"
      ],
      "imgName": "Bomastone_Grenade.png",
      "imgPath": "icons/items/grenadecitem.png",
      "imgUasset": "ItemIcons/GrenadeCItemIcon.png",
      "itemName": "Bomastone Grenade",
      "itemDesc": "The bomastone is a 'stick' style fragmentation grenade with a handle designed to aid in lobbing over moderate distances.",
      "itemCategory": "heavy_arms",
      "itemClass": "Grenade",
      "numberProduced": 25,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals shrapnel damage",
      "damageDesc": "Always causes target to bleed",
      "extraIcon": "shrapnel",
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100,
        "emat": 20
      }
    },
    {
      "displayId": 26,
      "faction": [
        "warden"
      ],
      "imgName": "A3_Harpa_Fragmentation_Grenade.png",
      "imgPath": "icons/items/grenadeitem.png",
      "imgUasset": "ItemIcons/GrenadeItemIcon.png",
      "itemName": "A3 Harpa Fragmentation Grenade",
      "itemDesc": "This anti-personnel fragmentation grenade is designed with pull-pin mechanics and a time fuse for user safety. Serrations in the casing allow for a better grip and increased fragmentation effectiveness.",
      "itemCategory": "heavy_arms",
      "itemClass": "Grenade",
      "damageType": "Deals light kinetic damage",
      "extraIcon": "light_kinetic",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 2,
        "cratesIdeal": 10,
      },
      "cost": {
        "bmat": 100,
        "emat": 20
      }
    },
    {
      "displayId": 27,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Mammon_91_b.png",
      "imgPath": "icons/items/hegrenadeitem.png",
      "imgUasset": "ItemIcons/HEGrenadeItemIcon.png",
      "itemName": "Mammon 91-b",
      "itemDesc": "This densely packed, high-explosive grenade is designed to damage structures and vehicles.",
      "itemCategory": "heavy_arms",
      "itemClass": "HE Grenade",
      "numberProduced": 25,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals explosive damage",
      "extraIcon": "explosive",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 2,
        "cratesIdeal": 30,
      },
      "cost": {
        "bmat": 100,
        "emat": 10
      }
    },
    {
      "displayId": 28,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Anti_Tank_Sticky_Bomb.png",
      "imgPath": "icons/items/stickybomb.png",
      "imgUasset": "ItemIcons/StickyBombIcon.png",
      "itemName": "Anti-Tank Sticky Bomb",
      "itemDesc": "An adherable grenade designed to penetrate heavy tank armor. The sticky bomb can only be thrown a short distance and is ineffective against structures.",
      "itemCategory": "heavy_arms",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals anti-tank explosive damage",
      "damageDesc": "High chance of disabling Track subsystem",
      "extraIcon": "at_explosive",
      "isTeched": false,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 1,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 50,
        "emat": 50
      }
    },
    {
      "displayId": 29,
      "faction": [
        "warden"
      ],
      "imgName": "BF5_White_Ash_Flask_Grenade.png",
      "imgPath": "icons/items/atgrenadew.png",
      "imgUasset": "ItemIcons/ATGrenadeWIcon.png",
      "itemName": "BF5 White Ash Flask Grenade",
      "itemDesc": "An explosive flask used for melting enemy armor. This carefully designed liquid bomb explodes into a dazzling flash of molten debris upon impact.",
      "itemCategory": "heavy_arms",
      "itemClass": "Anti-Tank Grenade",
      "damageType": "Deals anti-tank explosive damage",
      "damageDesc": "High chance of disabling Track subsystem",
      "extraIcon": "at_explosive",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 2,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 100,
        "emat": 50
      }
    },
    {
      "displayId": 30,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Warhead.png",
      "imgPath": "icons/items/rocketwarhead.png",
      "imgUasset": "ItemIcons/RocketWarheadIcon.png",
      "itemName": "Warhead",
      "itemDesc": "The payload for ballistic rockets. A high yield bomb that delivers over 3 tons of TNT and is capable of leveling an entire village or town block.",
      "itemCategory": "heavy_arms",
      "numberProduced": 1,
      "stockpileLimitPrivate": 100,
      "isTeched": false,
      "isMpfCraftable": false,
      "cost": {
        "rmat": 200,
        "hemat": 1000
      }
    },
    {
      "displayId": 31,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "300mm.png",
      "imgPath": "icons/items/lrartilleryammoitem.png",
      "imgUasset": "ItemIcons/LRArtilleryAmmoItemIcon.png",
      "itemName": "300mm",
      "itemDesc": "Payload for the storm cannon.",
      "itemCategory": "heavy_arms",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "damageType": "Deals demolition damage",
      "extraIcon": "high_explosive",
      "isTeched": false,
      "isMpfCraftable": false,
      "cost": {
        "bmat": 135,
        "hemat": 30
      }
    },
    {
      "displayId": 32,
      "faction": [
        "colonial"
      ],
      "imgName": "Lamentum_mm_IV.png",
      "imgPath": "icons/items/heavymachinegun.png",
      "imgUasset": "ItemIcons/HeavyMachineGunIcon.png",
      "itemName": "Lamentum mm.IV",
      "itemClass": "Mounted machinegun",
      "itemDesc": "Built on the bones of the first automatic weapons introduced to the Legion, the \"Lamentum\" mm.IV is still quite an intimidating force to encounter on the battlefield. Boasting a large magazine and impressive active range, this mounted machinegun excels at laying down consistent suppressive fire.",
      "itemCategory": "heavy_arms",
      "isMountable": true,
      "highVelocityBonus": "Equipped with a high velocity barrel that deals 50% extra damage per shot.",
      "ammoUsed": "12.7mm",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 150
      }
    },
    {
      "displayId": 33,
      "faction": [
        "warden"
      ],
      "imgName": "Malone_Ratcatcher_MK_1.png",
      "imgPath": "icons/items/mgheavytwitem.png",
      "imgUasset": "ItemIcons/MGHeavyTWItemIcon.png",
      "itemName": "Malone Ratcatcher MK.1",
      "itemClass": "Mounted Machinegun",
      "itemDesc": "Early iterations of this machinegun were built to be emplaced in bunkers and on the decks of lightly armed warships, the Ratcatcher is Harvey Malone’s first freely mountable infantry weapon designed for field use. Just like its predecessors, this heavy weapon suppresses enemy soldiers with unmatched efficiency.",
      "itemCategory": "heavy_arms",
      "highVelocityBonus": "",
      "ammoUsed": "12.7mm",
      "isMountable": true,
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "supplyPyramid": {
        "priority": 4,
        "cratesIdeal": 6,
      },
      "cost": {
        "bmat": 150
      }
    },
    {
      "displayId": 34,
      "faction": [
         "colonial"
      ],
      "imgName": "KLG901_2_Lunaire_F.png",
      "imgPath": "icons/items/grenadelaunchercitem.png",
      "imgUasset": "ItemIcons/GrenadeLauncherCItemIcon.png",
      "itemName": "KLG901-2 Lunaire F",
      "itemDesc": "A weapon designed to launch specialty grenades over long-distances. This modern Kraunian firearm uses advanced propulsion designed for increased efficiency due to the overall weight of the weapon and projectiles.",
      "itemCategory": "heavy_arms",
      "itemClass": "Grenade Launcher",
      "ammoUsed": "Green Ash Grenade, PT-815 Smoke Grenade, Tremola Grenade GPb-1",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
         "bmat": 50,
         "rmat": 5
      }
    },
    {
      "displayId": 35,
      "faction": [
         "colonial",
         "warden"
      ],
      "imgName": "Tremola_Grenade_GPb_1.png",
      "imgPath": "icons/items/helaunchedgrenadeitem.png",
      "imgUasset": "ItemIcons/HELaunchedGrenadeItemIcon.png",
      "itemName": "Tremola Grenade GPb-1",
      "itemDesc": "An expolosive Estrllan grenade specially designed for use with handheld grenade launchers. This modern grenade boasts a large payload and is deadly to lingering infantry and structural supports.",
      "itemCategory": "heavy_arms",
      "itemClass": "Grenade",
      "extraIcon": "explosive",
      "numberProduced": 15,
      "stockpileLimitPrivate": 100,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
         "bmat": 150,
         "emat": 10
      }
    },
    {
      "displayId": 0,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Shovel.png",
      "imgPath": "icons/items/shovel.png",
      "imgUasset": "ItemIcons/ShovelIcon.png",
      "itemName": "Shovel",
      "itemDesc": "A tool for digging trenches and other entrenched structures.",
      "itemCategory": "utilities",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": false,
      "supplyPyramid": {
        "priority": 6,
        "cratesIdeal": 6,
      },
      "cost": {
        "bmat": 200
      }
    },
    {
      "displayId": 1,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Sledge_Hammer.png",
      "imgPath": "icons/items/sledgehammeritem.png",
      "imgUasset": "ItemIcons/SledgeHammerItemIcon.png",
      "itemName": "Sledge Hammer",
      "itemDesc": "A tool used to salvage components from remains of old vehicles and equipment.",
      "itemCategory": "utilities",
      "isMpfCraftable": false,
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "cost": {
        "bmat": 200
      }
    },
    {
      "displayId": 2,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Binoculars.png",
      "imgPath": "icons/items/binocularsitem.png",
      "imgUasset": "ItemIcons/BinocularsItemIcon.png",
      "itemName": "Binoculars",
      "itemDesc": "An optical instrument used for viewing distant objects.",
      "itemCategory": "utilities",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "supplyPyramid": {
        "priority": 5,
        "cratesIdeal": 8,
      },
      "cost": {
        "bmat": 75
      }
    },
    {
      "displayId": 3,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Gas_Mask.png",
      "imgPath": "icons/items/gasmask.png",
      "imgUasset": "ItemIcons/GasmaskIcon.png",
      "itemName": "Gas Mask",
      "itemDesc": "Protects against poison gas.",
      "itemCategory": "utilities",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "supplyPyramid": {
        "priority": 1,
        "cratesIdeal": 10,
      },
      "cost": {
        "bmat": 160
      }
    },
    {
      "displayId": 4,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Gas_Mask_Filter.png",
      "imgPath": "icons/items/gasmaskfilter.png",
      "imgUasset": "ItemIcons/GasMaskFilterIcon.png",
      "itemName": "Gas Mask Filter",
      "itemDesc": "When attached to a gas mask, this filter provides fresh air to the wearer.",
      "itemCategory": "utilities",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": false,
      "supplyPyramid": {
        "priority": 1,
        "cratesIdeal": 14,
      },
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 5,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Wrench.png",
      "imgPath": "icons/items/workwrench.png",
      "imgUasset": "ItemIcons/WorkWrench.png",
      "itemName": "Wrench",
      "itemDesc": "A multipurpose tool. Can be used to dismantle mines/barbed wire and unlock vehicles.",
      "itemCategory": "utilities",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": false,
      "supplyPyramid": {
        "priority": 4,
        "cratesIdeal": 4,
      },
      "cost": {
        "bmat": 75
      }
    },
    {
      "displayId": 6,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Radio.png",
      "imgPath": "icons/items/radioitem.png",
      "imgUasset": "ItemIcons/RadioItemIcon.png",
      "itemName": "Radio",
      "itemDesc": "Receives map intelligence updates.",
      "itemCategory": "utilities",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": false,
      "supplyPyramid": {
        "priority": 6,
        "cratesIdeal": 10,
      },
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 7,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Radio_Backpack.png",
      "imgPath": "icons/items/radiobackpackitem.png",
      "imgUasset": "ItemIcons/RadioBackpackItemIcon.png",
      "itemName": "Radio Backpack",
      "itemDesc": "Automatically gathers map intel periodically when equipped. The radio backpack is also used to transmit other sensitive information across long distances.",
      "itemCategory": "utilities",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "supplyPyramid": {
        "priority": 10,
        "cratesIdeal": 8,
      },
      "cost": {
        "bmat": 150
      }
    },
    {
      "displayId": 8,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Buckhorn_CCQ_18.png",
      "imgPath": "icons/items/bayonet.png",
      "imgUasset": "ItemIcons/BayonetIcon.png",
      "itemName": "Buckhorn CCQ-18",
      "itemDesc": "Attached to the barrel of a rifle, this short blade can spear enemies in close quarters encounters.",
      "itemCategory": "utilities",
      "itemClass": "Bayonet",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "supplyPyramid": {
        "priority": 1,
        "cratesIdeal": 10,
      },
      "cost": {
        "bmat": 40
      }
    },
    {
      "displayId": 9,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Tripod.png",
      "imgPath": "icons/items/deployabletripoditem.png",
      "imgUasset": "ItemIcons/DeployableTripodItemIcon.png",
      "itemName": "Tripod",
      "itemDesc": "A mount point for deployable infantry weapons and equipment.",
      "itemCategory": "utilities",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": false,
      "supplyPyramid": {
        "priority": 3,
        "cratesIdeal": 6,
      },
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 10,
      "faction": [
        "colonial"
      ],
      "imgName": "Hydras_Whisper.png",
      "imgPath": "icons/menus/bangaloreitem.png",
      "imgUasset": "Menus/BangaloreItemIcon.png",
      "itemName": "Hydra's Whisper",
      "itemDesc": "This unique demolotion tool is a long, metal tube packed with explosives. The Hydra's Whisper is designed to destroy out-of-reach movement impairing structures and detonate any mines along the length of the tube.",
      "itemCategory": "utilities",
      "itemClass": "Explosive",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "damageType": "Deals demolition damage",
      "damageDesc": "Destroys obstacles that can otherwise only be dismantled with Wrenches",
      "extraIcon": "demolition",
      "cost": {
        "bmat": 100,
        "emat": 40
      }
    },
    {
      "displayId": 11,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Alligator_Charge.png",
      "imgPath": "icons/structures/satchelcharge.png",
      "imgUasset": "StructureIcons/SatchelCharge.png",
      "itemName": "Alligator Charge",
      "itemDesc": "This heavy-duty explosive device is designed to deal significant damage to structures and stationary vehicles.",
      "itemCategory": "utilities",
      "itemClass": "Satchel Charge",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "damageType": "Deals demolition damage",
      "extraIcon": "demolition",
      "supplyPyramid": {
        "priority": 8,
        "cratesIdeal": 16,
      },
      "cost": {
        "bmat": 100,
        "hemat": 15
      }
    },
    {
      "displayId": 12,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Abisme_AT_99.png",
      "imgPath": "icons/items/antitankmineitem.png",
      "imgUasset": "ItemIcons/AntiTankMineItemIcon.png",
      "itemName": "Abisme AT-99",
      "itemDesc": "A simple mine that is placed under terrain and fitted with a pressure-sensitive plate to detonate under the weight of heavy vehicles. Mines are visible to friendlies and enemies on foot and deactivate after 48 in-game days.",
      "itemCategory": "utilities",
      "itemClass": "Anti-Tank Mine",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "damageType": "Deal anti-tank explosive damage",
      "damageDesc": "Always disables the track subsystem",
      "extraIcon": "at_explosive",
      "isMpfCraftable": false,
      "isTeched": false,
      "supplyPyramid": {
        "priority": 4,
        "cratesIdeal": 18,
      },
      "cost": {
        "bmat": 100,
        "emat": 10
      }
    },
    {
      "displayId": 13,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Rocket_Booster.png",
      "imgPath": "icons/items/rocketbooster.png",
      "imgUasset": "ItemIcons/RocketBoosterIcon.png",
      "itemName": "Rocket Booster",
      "itemDesc": "A booster engine that provides thrust for launching ballistic rockets to long distant targets.",
      "itemCategory": "utilities",
      "numberProduced": 1,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "cost": {
        "rmat": 800
      }
    },
    {
      "displayId": 14,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Listening_Kit.png",
      "imgPath": "icons/items/listeningkit.png",
      "imgUasset": "ItemIcons/ListeningKitIcon.png",
      "itemName": "Listening Kit",
      "itemDesc": "A device used to intercept enemy radio broadcasts transmitted from nearby sources.",
      "itemCategory": "utilities",
      "numberProduced": 3,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "cost": {
        "bmat": 120
      }
    },
    {
      "displayId": 15,
      "faction": [
         "warden"
      ],
      "imgName": "The_Ospreay.png",
      "imgPath": "icons/items/grenadeadapter.png",
      "imgUasset": "ItemIcons/GrenadeAdapterIcon.png",
      "itemName": "The Ospreay",
      "itemDesc": "A rifle attachment that fires grenades with pneumatic force. Along with specialized grenades, it can launch standard grenades.",
      "itemCategory": "utilities",
      "itemClass": "Grenade Launcher",
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": false,
      "cost": {
         "bmat": 85,
         "rmat": 10
      }
   },
    {
      "displayId": 0,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Soldier_Supplies.png",
      "imgPath": "icons/items/clothitem.png",
      "itemName": "Soldier Supplies",
      "imgUasset": "ItemIcons/ClothItemIcon.png",
      "itemDesc": "A standard issue set of supplies for foot soldiers. Bases must be stockpiled with soldier supplies in order for players to spawn.",
      "itemCategory": "medical",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": false,
      "supplyPyramid": {
        "priority": 1,
        "cratesIdeal": 60,
      },
      "cost": {
        "bmat": 80
      }
    },
    {
      "displayId": 1,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Bandages.png",
      "imgPath": "icons/items/bandagesitem.png",
      "imgUasset": "ItemIcons/BandagesItemIcon.png",
      "itemName": "Bandages",
      "itemDesc": "Used to stem bleeding.",
      "itemCategory": "medical",
      "numberProduced": 80,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": false,
      "supplyPyramid": {
        "priority": 1,
        "cratesIdeal": 10,
      },
      "cost": {
        "bmat": 160
      }
    },
    {
      "displayId": 2,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "First_Aid_kit.png",
      "imgPath": "icons/items/firstaidkititem.png",
      "imgUasset": "ItemIcons/FirstAidKitItem.png",
      "itemName": "First Aid Kit",
      "itemDesc": "Used by medics to heal other soldiers.",
      "itemCategory": "medical",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "supplyPyramid": {
        "priority": 1,
        "cratesIdeal": 10,
      },
      "cost": {
        "bmat": 60
      }
    },
    {
      "displayId": 3,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Trauma_Kit.png",
      "imgPath": "icons/items/traumakititem.png",
      "imgUasset": "ItemIcons/TraumaKitItemIcon.png",
      "itemName": "Trauma Kit",
      "itemDesc": "Used by medics to revive wounded soldiers.",
      "itemCategory": "medical",
      "numberProduced": 10,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "supplyPyramid": {
        "priority": 2,
        "cratesIdeal": 6,
      },
      "cost": {
        "bmat": 80
      }
    },
    {
      "displayId": 4,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Blood_Plasma.png",
      "imgPath": "icons/items/bloodplasmaitem.png",
      "imgUasset": "ItemIcons/BloodPlasmaItemIcon.png",
      "itemName": "Blood Plasma",
      "itemDesc": "A blood component used to treat wounded soldiers on the battlefield.",
      "itemCategory": "medical",
      "numberProduced": 80,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": false,
      "supplyPyramid": {
        "priority": 2,
        "cratesIdeal": 4,
      },
      "cost": {
        "bmat": 80
      }
    },
    {
      "displayId": 0,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Garrison_Supplies.png",
      "imgPath": "icons/items/garrisonsupplies.png",
      "imgUasset": "ItemIcons/GarrisonSuppliesIcon.png",
      "itemName": "Garrison Supplies",
      "itemDesc": "Supplies for maintaining structures. Store at bases to prevent decay on surrounding structures.",
      "itemCategory": "supplies",
      "numberProduced": 150,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "supplyPyramid": {
        "priority": 4,
        "cratesIdeal": 4,
      },
      "cost": {
        "bmat": 75
      }
    },
    {
      "displayId": 1,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Bunker_Supplies.png",
      "imgPath": "icons/items/bunkersupplies.png",
      "imgUasset": "ItemIcons/BunkerSuppliesIcon.png",
      "itemName": "Bunker Supplies",
      "itemDesc": "Supplies for maintaining structures. Store at bases to prevent decay on surrounding bunker/trench structures when garrison supplies are not available.",
      "itemCategory": "supplies",
      "numberProduced": 150,
      "stockpileLimitPrivate": 100,
      "isMpfCraftable": false,
      "isTeched": true,
      "supplyPyramid": {
        "priority": 7,
        "cratesIdeal": 12,
      },
      "cost": {
        "bmat": 75
      }
    },
    {
      "displayId": 0,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Barbed_Wire_Pallet.png",
      "imgPath": "icons/items/barbedwireplatformitem.png",
      // "imgUasset": "missing",
      "itemName": "Barbed Wire Pallet",
      "itemDesc": "A pallet of Barbed Wire that's used for the construction of frontline defenses.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300 
      }
    },
    {
      "displayId": 1,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Concrete_Mixer.png",
      "imgPath": "icons/structures/concretemixer.png",
      // "imgUasset": "missing",
      "itemName": "Concrete Mixer",
      "itemDesc": "A portable device that mixes various materials to form Concrete, which are used to build heavily fortified structures.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 225
      }
    },
    {
      "displayId": 2,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "68mm_Anti_Tank_Cannon.png",
      "imgPath": "icons/structures/emplacedat.png",
      "imgUasset": "StructureIcons/EmplacedATIcon.png",
      "itemName": "68mm Anti-Tank Cannon",
      "itemDesc": "A defensive emplacement against heavily armored vehicles.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 450
      }
    },
    {
      "displayId": 3,
      "faction": [
        "colonial"
      ],
      "imgName": "50_500_Thunderbolt_Cannon.png",
      "imgPath": "icons/structures/heavyartilleryc.png",
      "imgUasset": "StructureIcons/HeavyArtilleryCIcon.png",
      "itemName": "50-500 \"Thunderbolt\" Cannon",
      "itemDesc": "This heavy artillery cannon is designed to cripple enemy fortifcations from an entrenched position. Its long heavy barrel gives the \"Thunderbolt\" outstanding range.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 195
      }
    },
    {
      "displayId": 4,
      "faction": [
        "warden"
      ],
      "imgName": "Huber_Exalt_150mm.png",
      "imgPath": "icons/structures/heavyartilleryw.png",
      "imgUasset": "StructureIcons/HeavyArtilleryW.png",
      "itemName": "Huber Exalt 150mm",
      "itemDesc": "A heavy cannon designed to shatter the garrisons and fortifications of advancing forces. The Exalt is best utilized when placed into a defensive position to take advantage of its impressive range.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 525
      }
    },
    {
      "displayId": 5,
      "faction": [
        "warden"
      ],
      "imgName": "Huber_Lariat_120mm.png",
      "imgPath": "icons/structures/emplacedhowitzer.png",
      "imgUasset": "StructureIcons/EmplacedHowitzerIcon.png",
      "itemName": "Huber Lariat 120mm",
      "itemDesc": "A light artillery cannon designed to be a fixture in defensive fortifications. The Lariat sports a formidable long-range 120mm cannon designed to put immense pressure on the enemy infantry.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 105
      }
    },
    {
      "displayId": 6,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "12_7_Anti_Infantry_Flak_Gun.png",
      "imgPath": "icons/structures/emplacedmg.png",
      "imgUasset": "StructureIcons/EmplacedMGIcon.png",
      "itemName": "12.7 Anti Infantry Flak Gun",
      "itemDesc": "An anti-aircraft flak cannon repurposed as a defensive emplacement against infantry.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 225
      }
    },
    {
      "displayId": 7,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Metal_Beam_Pallet.png",
      "imgPath": "icons/items/metalbeamplatformitem.png",
      // "imgUasset": "missing",
      "itemName": "Metal Beam Pallet",
      "itemDesc": "A pallet of Metal Beams that's used for the construction of frontline defenses.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300 
      }
    },
    {
      "displayId": 8,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Resource_Container.png",
      "imgPath": "icons/structures/resourcecontainer.png",
      // "imgUasset": "missing",
      "itemName": "Resource Container",
      "itemDesc": "A container that can carry large quantities of resources and can be transported by certain vehicles.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 150
      }
    },
    {
      "displayId": 9,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Sandbag_Pallet.png",
      "imgPath": "icons/items/sandbagplatformitem.png",
      // "imgUasset": "missing",
      "itemName": "Sandbag Pallet",
      "itemDesc": "A pallet of sandbags that's used for the construction of frontline defenses.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300 
      }
    },
    {
      "displayId": 10,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Shipping_Container.png",
      "imgPath": "icons/structures/shippingcontainerstructure.png",
      // "imgUasset": "missing",
      "itemName": "Shipping Container",
      "itemDesc": "A container for shipping very large quantities of Crates using Crane loaded vehicles. This type of container can only be unloaded at Storage Depots and Seaports.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300
      }
    },
    {
      "displayId": 11,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "Small_Shipping_Container.png",
      "imgPath": "icons/structures/shippingcontainershort.png",
      // "imgUasset": "missing",
      "itemName": "Small Shipping Container",
      "itemDesc": "A container for shipping large quantities of Crates using Crane loaded vehicles. This type of container can be unloaded from any location.",
      "itemCategory": "shipables",
      "numberProduced": 3,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300 
      }
    },
    {
      "displayId": 0,
      "faction": [
        "colonial"
      ],
      "imgName": "r_12_Salus_Ambulance.png",
      "imgPath": "icons/vehicles/ambulance.png",
      "imgUasset": "VehicleIcons/Ambulance.png",
      "itemName": "r-12 - \"Salus\" Ambulance",
      "itemClass": "Ambulance",
      "itemDesc": "The \"salus\" Ambulance is efficient at transporting Critcally Wounded Soldiers and carrying medical supplies.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 450
      }
    },
    {
      "displayId": 1,
      "faction": [
        "warden"
      ],
      "imgName": "Dunne_Responder_3e.png",
      "imgPath": "icons/vehicles/ambulancewar.png",
      "imgUasset": "VehicleIcons/AmbulanceWar.png",
      "itemName": "Dunne Responder 3e",
      "itemClass": "Ambulance",
      "itemDesc": "The Responder Ambuleance is efficient at transporting Critically Wounded Soldiers and carrying medical supplies.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 450
      }
    },
    {
      "displayId": 2,
      "faction": [
        "colonial"
      ],
      "imgName": "T3_Xiphos.png",
      "imgPath": "icons/vehicles/armoredcarvehicle.png",
      "imgUasset": "VehicleIcons/ArmoredCarVehicleIcon.png",
      "itemName": "T3 \"Xiphos\"",
      "itemClass": "Armored Car",
      "itemDesc": "Colonial Armored Cars are quick, well-rounded urban assault platforms. These anti-infantry vehicles are equipped with twin-barelled machineguns.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 120
      }
    },
  
    {
      "displayId": 3,
      "faction": [
        "colonial"
      ],
      "imgName": "T12_Actaeon_Tankette.png",
      "imgPath": "icons/vehicles/armoredcardefensivevehicle.png",
      "imgUasset": "VehicleIcons/ArmoredCarDefensiveVehicleIcon.png",
      "itemName": "T12 \"Actaeon\" Tankette",
      "itemClass": "Armored Car",
      "itemDesc": "This complete overhaul of the T3 Armored Car is reinforced with tank armor. While these extra defenses lower the T12's overall speed and handling, the addition of treads provide increased performace in less than ideal terrain.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 150
      }
    },
    {
      "displayId": 4,
      "faction": [
        "colonial"
      ],
      "imgName": "T5_Percutio.png",
      "imgPath": "icons/vehicles/armoredcaroffensivecvehicle.png",
      "imgUasset": "VehicleIcons/ArmoredCarOffensiveCVehicleIcon.png",
      "itemName": "T5 \"Percutio\"",
      "itemClass": "Armored Car",
      "itemDesc": "This \"Xiphos\" variant is fitted with a high-powered anti-tank turret in place of the twin machine gun platforms.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 120
      }
    },
    {
      "displayId": 5,
      "faction": [
        "colonial"
      ],
      "imgName": "T8_Gemini.png",
      "imgPath": "icons/vehicles/armoredcartwincitem.png",
      "imgUasset": "VehicleIcons/ArmoredCarTwinCItemIcon.png",
      "itemName": "T8 \"Gemini\"",
      "itemClass": "Armored Car",
      "itemDesc": "Fitted with twin RPG launchers, the T8 employs hit-and-run assaults against enemy structures and emplacements.",
      "damageType": "Deals explosive damage",
      "damageDesc": "Can penetrate armored vehicles",
      "vehiclePen": "Higher chance to penetrate armored vehicles at direct angles (to the sides/rear of the target) and at close range.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 135
      }
    },
    {
      "displayId": 6,
      "faction": [
        "warden"
      ],
      "imgName": "O_Brien_v_113_Gravekeeper.png",
      "imgPath": "icons/vehicles/armoredcaratwvehicle.png",
      "imgUasset": "VehicleIcons/ArmoredCarATWVehicleIcon.png",
      "itemName": "O’Brien v.113 Gravekeeper",
      "itemClass": "Armored Car",
      "itemDesc": "A slight variation of the v.110, the Gravekeeper comes fitted with an embedded Bonesaw launcher, transforming the humble armoured car into an effective indirect anti-armour vehicle.",
      "damageType": "Deals Armor Piercing damage",
      "damageDesc": "Can penetrate armored vehicles",
      "vehiclePen": "High Chance to penetrate armored vehicles",
      "vehiclePenChance": "Additional 100% chance to penetrate armored vehicles",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 135
      }
    },
    {
    "displayId": 7,
    "faction": [
        "warden"
      ],
      "imgName": "O_Brien_v_121_Highlander.png",
      "imgPath": "icons/vehicles/armoredcarmobilitywarvehicle.png",
      "imgUasset": "VehicleIcons/ArmoredCarMobilityWarVehicleIcon.png",
      "itemName": "O'Brien v.121 Highlander",
      "itemClass": "Armored Car",
      "itemDesc": "Fitted with all-terrain treads, the Highlander brings significant all-terrain mobility and performs especially well in snowy and mountainous environments.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 120
      }
    },
    {
      "displayId": 8,
      "faction": [
        "warden"
      ],
      "imgName": "O_Brien_v_101_Freeman.png",
      "imgPath": "icons/vehicles/armoredcaroffensivewvehicle.png",
      "imgUasset": "VehicleIcons/ArmoredCarOffensiveWVehicleIcon.png",
      "itemName": "O'Brien v.101 Freeman",
      "itemClass": "Armored Car",
      "itemDesc": "This early O'Brein variant, the v.101 Freeman is fitted with a 360 degree ballistics cannon turret at the expense of top speed.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 180
      }
    },
    {
      "displayId": 9,
      "faction": [
        "warden"
      ],
      "imgName": "O_Brien_v_110.png",
      "imgPath": "icons/vehicles/armoredcarwarvehicle.png",
      "imgUasset": "VehicleIcons/ArmoredCarWarVehicleIcon.png",
      "itemName": "O'Brien v.110",
      "itemClass": "Armored Car",
      "itemDesc": "Warden Armoured Cars are quick, well-rounded urban assault platforms. These anti-infantry vehicles are equipped with twin-barrelled machineguns.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 105
      }
    },
    {
      "displayId": 10,
      "faction": [
        "colonial"
      ],
      "imgName": "R_15_Chariot.png",
      "imgPath": "icons/vehicles/bus.png",
      "imgUasset": "VehicleIcons/BusIcon.png",
      "itemName": "R-15 - \"Chariot\"",
      "itemClass": "Transport Bus",
      "itemDesc": "The \"Chariot\" is a transport vehicle used to shuttle personnel to the front line.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300
      }
    },
    {
      "displayId": 11,
      "faction": [
        "warden"
      ],
      "imgName": "Dunne_Caravaner_2F.png",
      "imgPath": "icons/vehicles/buswar.png",
      "imgUasset": "VehicleIcons/BusWarIcon.png",
      "itemName": "Dunne Caravaner 2F",
      "itemClass": "Transport Bus",
      "itemDesc": "The Caravaner is a transport vehicle used to shuttle personnel to the front line.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300
      }
    },
    {
      "displayId": 12,
      "faction": [
        "colonial"
      ],
      "imgName": "AA_2_Battering_Ram.png",
      "imgPath": "icons/vehicles/fieldantitankcolvehicle.png",
      "imgUasset": "VehicleIcons/FieldAntiTankColVehicleIcon.png",
      "itemName": "AA-2 Battering Ram",
      "itemClass": "Field AT Gun",
      "itemDesc": "The Battering Ram is a mobile Anti-Tank field gun firing 68mm armor piercing rounds.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 90
      }
    },
    {
      "displayId": 13,
      "faction": [
        "colonial"
      ],
      "imgName": "68_45_Smelter_Heavy_Field_Gun.png",
      "imgPath": "icons/vehicles/fieldatoffensivec.png",
      "imgUasset": "VehicleIcons/FieldATOffensiveCIcon.png",
      "itemName": "68-45 \"Smelter\" Heavy Field Gun",
      "itemClass": "Heavy Field Gun",
      "itemDesc": "Armored with heavy anti-tank rounds, the Smelter is perfect for engaging enemy armor. The frontal blast shielding providers operators with ample cover in heated skirmishes.",
      "itemCategory": "vehicles",
      "highVelocityBonus": "Equipped with a high velocity barrel that deals 75% extra damage per shot",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 120
      }
    },
    {
      "displayId": 14,
      "faction": [
        "colonial"
      ],
      "imgName": "120_68_Koronides_Field_Gun.png",
      "imgPath": "icons/vehicles/fieldartillerycolvehicle.png",
      "imgUasset": "VehicleIcons/FieldArtilleryColVehicleIcon.png",
      "itemName": "120-68 \"Koronides\" Field Gun",
      "itemClass": "Field Artillery",
      "itemDesc": "A long range Colonial mobile artillery used to lay siege to fortified positions",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 150
      }
    },
    {
      "displayId": 15,
      "faction": [
        "colonial"
      ],
      "imgName": "G40_Sagittarii.png",
      "imgPath": "icons/vehicles/fieldmachinegun.png",
      "imgUasset": "VehicleIcons/FieldMachineGun.png",
      "itemName": "G40 \"Sagittarii\"",
      "itemClass": "Field Machine Gun",
      "itemDesc": "A duel barrelled, high calibre anti-infantry machine gun. The \"Sagittarii\" is fitted with forward-facing armor plating and is excellent for suppression.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 75
      }
    },
    {
      "displayId": 16,
      "faction": [
        "warden"
      ],
      "imgName": "Noble_Widow_MK_XIV.png",
      "imgPath": "icons/vehicles/destroyertankwvehicle.png",
      "imgUasset": "VehicleIcons/DestroyerTankWVehicleIcon.png",
      "itemName": "Noble Widow MK. XIV",
      "itemClass": "Destroyer Tank",
      "itemDesc": "This deadly tank turns predator into prey. A tank Destroyer, the Noble Widow specializes in ambush tactics, waiting for its quarry and striking with destructive high-velocity shells",
      "itemCategory": "vehicles",
      "highVelocityBonus": "Equipped with a high velocity barrel that deals 75% extra damage per shot.",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 480
      }
    },
    {
      "displayId": 17,
      "faction": [
        "warden"
      ],
      "imgName": "Collins_Cannon_68mm.png",
      "imgPath": "icons/vehicles/fieldantitankwarvehicle.png",
      "imgUasset": "VehicleIcons/FieldAntiTankWarVehicleIcon.png",
      "itemName": "Collins Cannon 68mm",
      "itemClass": "Field AT Gun",
      "itemDesc": "The Collins Cannon is a mobile Anti-Tank field gun firing 68mm armor-piercing rounds.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 90
      }
    },
    {
      "displayId": 18,
      "faction": [
        "warden"
      ],
      "imgName": "Balfour_Rampart_40mm.png",
      "imgPath": "icons/vehicles/fieldcannonoffensivew.png",
      "imgUasset": "VehicleIcons/FieldCannonOffensiveWIcon.png",
      "itemName": "Balfour Rampart 40mm",
      "itemClass": "Heavy Field Cannon",
      "itemDesc": "The Rampart is a high-velocity, anti-armor field cannon capable of dealing devasting damage to all but the heaviest armored vehicles while providing its crew with comprehensive ballistic shielding.",
      "itemCategory": "vehicles",
      "highVelocityBonus": "Equipped with a high velocity barrel that deals 115% extra damage per shot.",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 120
      }
    },
    {
      "displayId": 19,
      "faction": [
        "warden"
      ],
      "imgName": "Balfour_Wolfhound_40mm.png",
      "imgPath": "icons/vehicles/fieldcannonwvehicle.png",
      "imgUasset": "VehicleIcons/FieldCannonWVehicleIcon.png",
      "itemName": "Balfour Wolfhound 40mm",
      "itemClass": "Field Cannon",
      "itemDesc": "This destructive short-ranged cannon is designed for direct engagement with enemy fortifications. The Wolfhound is fitted with reinforced shielding and a 40mm barrel.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 90
      }
    },
    {
      "displayId": 20,
      "faction": [
        "warden"
      ],
      "imgName": "Swallowtail_988_127_2.png",
      "imgPath": "icons/vehicles/fieldmachinegunwar.png",
      "imgUasset": "VehicleIcons/FieldMachineGunWar.png",
      "itemName": "Swallowtail 988/127-2",
      "itemClass": "Field Machine Gun",
      "itemDesc": "A duel barrelled, high calibre anti-infantry machine gun. The Swallowtail is fitted with forward-facing armor plating and is excellent for suppression.",
      "itemCategory": "vehicles",
      "highVelocityBonus": "Equipped with a high velocity barrel that deals 20% extra damage per shot.",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 75
      }
    },
    {
      "displayId": 21,
      "faction": [
        "warden"
      ],
      "imgName": "Balfour_Falconer_250mm.png",
      "imgPath": "icons/vehicles/fieldmortarw.png",
      "imgUasset": "VehicleIcons/FieldMortarWIcon.png",
      "itemName": "Balfour Falconer 250mm",
      "itemClass": "Field Mortar",
      "itemDesc": "A heavy mobile mortar platform fitted with a thick frontal sheild for assaulting fortified locations.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 105
      }
    },
    {
      "displayId": 22,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "BMS_Packmule_Flatbed.png",
      "imgPath": "icons/vehicles/flatbedtruckvehicle.png",
      "imgUasset": "VehicleIcons/FlatbedTruckVehicleIcon.png",
      "itemName": "BMS - Packmule Flatbed",
      "itemClass": "Flatbed Truck",
      "itemDesc": "A heavy duty shipping transport truck designed by Bassett Motor Society. It's built for hauling the heaviest of equipment over long distances with ease.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 90
      }
    },
    {
      "displayId": 23,
      "faction": [
        "colonial"
      ],
      "imgName": "HH_d_Peltast.png",
      "imgPath": "icons/vehicles/halftrackartilleryc.png",
      "imgUasset": "VehicleIcons/HalfTrackArtilleryCIcon.png",
      "itemName": "HH-d \"Peltast\"",
      "itemClass": "Half-Track",
      "itemDesc": "This \"Javelin\" variant is fitted with a 360 degree mortar platform, designed to support infantry in frontline operations.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 210
      }
    },
    {
      "displayId": 24,
      "faction": [
        "colonial"
      ],
      "imgName": "HH_a_Javelin.png",
      "imgPath": "icons/vehicles/halftrackcolvehicle.png",
      "imgUasset": "VehicleIcons/HalfTrackColVehicleIcon.png",
      "itemName": "HH-a \"Javelin\"",
      "itemClass": "Half-Track",
      "itemDesc": "Designed for escort missions and to support infantry operations, the HH-a class \"Javelin\" Half-Track is an armored, versatile all-terrain vehicle equipped with a mounted machinegun.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 165
      }
    },
    {
      "displayId": 25,
      "faction": [
        "colonial"
      ],
      "imgName": "HH_b_Hoplite.png",
      "imgPath": "icons/vehicles/halftrackcolheavyarmorvehicle.png",
      "imgUasset": "VehicleIcons/HalfTrackColHeavyArmorVehicleIcon.png",
      "itemName": "HH-b \"Hoplite\"",
      "itemClass": "Half-Track",
      "itemDesc": "With reinforced armor at the expense of speed, the Hoplite is a formidable force in the heat of combat.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 210
      }
    },
    {
      "displayId": 26,
      "faction": [
        "warden"
      ],
      "imgName": "Niska_Mk_II_Blinder.png",
      "imgPath": "icons/vehicles/halftrackoffensivewarvehicle.png",
      "imgUasset": "VehicleIcons/HalfTrackOffensiveWarVehicleIcon.png",
      "itemName": "Niska Mk. II Blinder",
      "itemClass": "Half-Track",
      "itemDesc": "Fitted with a heavy-duty anti-tank gun, the Blinder is capable of punching through all but the most tempered of alloys.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 255
      }
    },
    {
      "displayId": 27,
      "faction": [
        "warden"
      ],
      "imgName": "Niska_Mk_I_Gun_Motor_Carriage.png",
      "imgPath": "icons/vehicles/halftrackwarvehicle.png",
      "imgUasset": "VehicleIcons/HalfTrackWarVehicleIcon.png",
      "itemName": "Niska Mk. I Gun Motor Carriage",
      "itemClass": "Half-Track",
      "itemDesc": "Designed for escort missions and to support infantry operations, the Niska Gun Motor Carriage Half-Track is an armored, versatile all-terrain vehicle equipped with a mounted machinegun.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 180
      }
    },
    {
      "displayId": 28,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "BMS_Scrap_Hauler.png",
      "imgPath": "icons/vehicles/harvester.png",
      "imgUasset": "VehicleIcons/Harvester.png",
      "itemName": "BMS - Scrap Hauler",
      "itemClass": "Harvester",
      "itemDesc": "The Scrap Hauler, designed by the Bassett Motor Society is a heavy-duty piece of machinery designed to reduce scrap matal and other materials into usable, raw resources. Scrap Haulers are often used to extract battlefield resources following skirmishes.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 360
      }
    },
    {
      "displayId": 29,
      "faction": [
        "colonial"
      ],
      "imgName": "AB_8_Acheron.png",
      "imgPath": "icons/vehicles/landingcraftvehicle.png",
      "imgUasset": "VehicleIcons/LandingCraftVehicleIcon.png",
      "itemName": "AB-8 \"Acheron\"",
      "itemClass": "Landing APC",
      "itemDesc": "The Acheron is an armored amphibious vehicle designed for carrying troops across large bodies of water to aid in coordinated beach landings and flanking assaults.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 60
      }
    },
    {
      "displayId": 30,
      "faction": [
        "colonial"
      ],
      "imgName": "AB_11_Doru.png",
      "imgPath": "icons/vehicles/landingcraftoffensivevehicle.png",
      "imgUasset": "VehicleIcons/LandingCraftOffensiveVehicleIcon.png",
      "itemName": "AB-11 \"Doru\"",
      "itemClass": "Landing APC",
      "itemDesc": "With its mounted machinegun, the Doru is the perfect addition to any shoreline assault.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 135
      }
    },
    {
      "displayId": 31,
      "faction": [
        "warden"
      ],
      "imgName": "Mulloy_LPC.png",
      "imgPath": "icons/vehicles/landingcraftwarvehicle.png",
      "imgUasset": "VehicleIcons/LandingCraftWarVehicleIcon.png",
      "itemName": "Mulloy LPC",
      "itemClass": "Landing APC",
      "itemDesc": "The Mulloy Landing Personnel Carrier is an armored amphibious vehicle designed for carrying troops across large bodies of water to aid in coordinated beach landings and flanking assaults.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 60
      }
    },
    {
      "displayId": 32,
      "faction": [
        "colonial"
      ],
      "imgName": "HC_2_Scorpion.png",
      "imgPath": "icons/vehicles/lighttank2infantrycvehicle.png",
      "imgUasset": "VehicleIcons/LightTank2InfantryCVehicleIcon.png",
      "itemName": "HC-2 \"Scorpion\"",
      "itemClass": "Light Infantry Tank",
      "itemDesc": "The \"Scorpion\" HC-class tank is a moderately armored infantry support vehicle with twin, high-powered heavy machine guns and short-range radios for improved intelligence support. In addition, exterior seating is available for infantry.",
      "itemCategory": "vehicles",
      "highVelocityBonus": "Equipped with a high velocity barrel that deals 20% extra damage per shot.",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 420
      }
    },
    {
      "displayId": 33,
      "faction": [
        "colonial"
      ],
      "imgName": "H5_Hatchet.png",
      "imgPath": "icons/vehicles/lighttankcolvehicle.png",
      "imgUasset": "VehicleIcons/LightTankColVehicleIcon.png",
      "itemName": "H5 \"Hatchet\"",
      "itemClass": "Light Tank",
      "itemDesc": "A highly maneuverable lightweight tank. Designed for urban environments, the \"Hatchet\" is fitted with a 40mm cannon.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 405
      }
    },
    {
      "displayId": 34,
      "faction": [
        "colonial"
      ],
      "imgName": "H_8_Kranesca.png",
      "imgPath": "icons/vehicles/lighttankcolmobilityvehicle.png",
      "imgUasset": "VehicleIcons/LightTankColMobilityVehicleIcon.png",
      "itemName": "H-8 \"Kranesca\"",
      "itemClass": "Light Tank",
      "itemDesc": "The \"Kranesca\" Light Tank is fitted with an overpowered engine and a reinforced chassis, capable of boosting its top speed at the expense of overall acceleration and maneuverability.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 435
      }
    },
    {
      "displayId": 35,
      "faction": [
        "colonial"
      ],
      "imgName": "H_10_Pelekys.png",
      "imgPath": "icons/vehicles/lighttankoffensivecvehicle.png",
      "imgUasset": "VehicleIcons/LightTankOffensiveCVehicleIcon.png",
      "itemName": "H-10 \"Pelekys\"",
      "itemClass": "Light Tank",
      "itemDesc": "The \"Pelekys\" H-class light tank is heavily modified with an open top chassis and equipped with a devastating long-range anti-tank cannon.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 435
      }
    },
    {
      "displayId": 36,
      "faction": [
        "colonial"
      ],
      "imgName": "86K_a_Bardiche.png",
      "imgPath": "icons/vehicles/mediumtank2c.png",
      "imgUasset": "VehicleIcons/MediumTank2CIcon.png",
      "itemName": "86K-a \"Bardiche\"",
      "itemClass": "Assault Tank",
      "itemDesc": "Unlike the 85-series, the Bardiche sports a heavier, more durable build and is fitted with a coaxial heavy machinegun along with a powerful, short-barrelled 68mm turret. Modern Kraunian engineering allows for a fast reload, making it an ideal tool to combat enemy armor.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 525
      }
    },
    {
      "displayId": 37,
      "faction": [
        "colonial"
      ],
      "imgName": "85K_b_Falchion.png",
      "imgPath": "icons/vehicles/colonialmediumtank.png",
      "imgUasset": "VehicleIcons/ColonialMediumTankIcon.png",
      "itemName": "85K-b \"Falchion\"",
      "itemClass": "Assault Tank",
      "itemDesc": "Designed for mass-production in Kraunia, this assault tank features a modular turret system for maximum versatility.The \"Falchion\" Class features a powerful if understated, 40mm cannon.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "numberProducedBonus": "2x bonus vehicles produced per crate",
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 495
      }
    },
    {
      "displayId": 38,
      "faction": [
        "colonial"
      ],
      "imgName": "85k_a_Spatha.png",
      "imgPath": "icons/vehicles/colonialmediumtankoffensive.png",
      "imgUasset": "VehicleIcons/ColonialMediumTankOffensive.png",
      "itemName": "85k-a \"Spatha\"",
      "itemClass": "Assault Tank",
      "itemDesc": "The \"Spatha\" assault tank features a unique and destructive 40mm turret that fires high-velocity shells. This specialized turret is not as well suited to mass-production as its more refined counterpart, the \"Falchion.\"",
      "itemCategory": "vehicles",
      "highVelocityBonus": "Equipped with a high velocity barrel that deals 20% extra damage per shot.",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 495
      }
    },
    {
      "displayId": 39,
      "faction": [
        "colonial"
      ],
      "imgName": "HC_7_Ballista.png",
      "imgPath": "icons/vehicles/mortartankvehicle.png",
      "imgUasset": "VehicleIcons/MortarTankVehicleIcon.png",
      "itemName": "HC-7 \"Ballista\"",
      "itemClass": "Seige Tank",
      "itemDesc": "The HC-Class \"Ballista\" is a heavy tank designed to obliterate opposition defenses with its 250mm Hades Mortar Cannon.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 465
      }
    },
    {
      "displayId": 40,
      "faction": [
        "colonial"
      ],
      "imgName": "03MM_Caster.png",
      "imgPath": "icons/vehicles/motorcyclevehicle.png",
      "imgUasset": "VehicleIcons/MotorcycleVehicleIcon.png",
      "itemName": "03MM \"Caster\"",
      "itemClass": "Motorcyle",
      "itemDesc": "A motorcycle and sidecar used to patrol large areas. Speed can be boosted at the cost of additional fuel.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 255
      }
    },
    {
      "displayId": 41,
      "faction": [
        "colonial"
      ],
      "imgName": "00MS_Stinger.png",
      "imgPath": "icons/vehicles/motorcycleoffensivevehicle.png",
      "imgUasset": "VehicleIcons/MotorcycleOffensiveVehicleIcon.png",
      "itemName": "00MS \"Stinger\"",
      "itemClass": "Motorcyle",
      "itemDesc": "The cab of this Motorcycle is fitted with an LMG for fast-response hit and run assaults.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 330
      }
    },
    {
      "displayId": 42,
      "faction": [
        "colonial"
      ],
      "imgName": "RR_3_Stolon_Tanker.png",
      "imgPath": "icons/vehicles/oiltanker.png",
      "imgUasset": "VehicleIcons/OilTankerIcon.png",
      "itemName": "RR-3 \"Stolon\" Tanker.",
      "itemClass": "Fuel Tanker",
      "itemDesc": "The \"Stolen\" Tanker is a heavier R-series rig designed to transport and distribute large quantities of Fuel.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300
      }
    },
    {
      "displayId": 43,
      "faction": [
        "colonial"
      ],
      "imgName": "UV_05a_Argonaut.png",
      "imgPath": "icons/vehicles/scoutvehiclemobilityvehicle.png",
      "imgUasset": "VehicleIcons/ScoutVehicleMobilityVehicleIcon.png",
      "itemName": "UV-05a \"Argonaut\"",
      "itemClass": "Light Utility Vehicle",
      "itemDesc": "This stripped down Light Utility Vehicle provides extra seating for a small crew to engage in hit and run tactices.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 30
      }
    },
    {
      "displayId": 44,
      "faction": [
        "colonial"
      ],
      "imgName": "UV_24_Icarus.png",
      "imgPath": "icons/vehicles/scoutvehicleoffensivevehicle.png",
      "imgUasset": "VehicleIcons/ScoutVehicleOffensiveVehicleIcon.png",
      "itemName": "UV-24 \"Icarus\"",
      "itemClass": "Light Utility Vehicle",
      "itemDesc": "This RPG-mounted Light Utility Vehicle provides a heavy-duty weapon platform with suerior speed. Perfectly suited for assaulting enemy structures and vehicles, or supporting an armored assault.",
      "itemCategory": "vehicles",
      "damageType": "Deals explosive damage",
      "damageDesc": "Can penetrate armored vehicles",
      "vehiclePen": "Damage to the sides and rear of armored vehicles have a higher chance to penetrate at close range and at direct angles.",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 75
      }
    },
    {
      "displayId": 45,
      "faction": [
        "colonial"
      ],
      "imgName": "UV_5c_Odyssey.png",
      "imgPath": "icons/vehicles/scoutvehicleutilitycvehicle.png",
      "imgUasset": "VehicleIcons/ScoutVehicleUtilityCVehicleIcon.png",
      "itemName": "UV-5c \"Odyssey\"",
      "itemClass": "Light Utility Vehicle",
      "itemDesc": "This simple, modified Utility Vehicle is fitted with a reinforced hatch to provide one crew member with increased visibility for intense recon operations.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 30
      }
    },
    {
      "displayId": 46,
      "faction": [
        "colonial"
      ],
      "imgName": "T20_Ixion_Tankette.png",
      "imgPath": "icons/vehicles/tanketteoffensivecvehicle.png",
      "imgUasset": "VehicleIcons/TanketteOffensiveCVehicleIcon.png",
      "itemName": "T20 \"Ixion\" Tankette",
      "itemClass": "Tankette",
      "itemDesc": "A bombastic variant of the T12 Tankette, the \"Ixion\" provides its crew with more support and mounted Infantry Support Gun. Added weight from the armor results in reduced overall speed.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 180
      }
    },
    {
      "displayId": 47,
      "faction": [
        "colonial"
      ],
      "imgName": "R_1_Hauler.png",
      "imgPath": "icons/vehicles/truckvehicle.png",
      "imgUasset": "VehicleIcons/TruckVehicleIcon.png",
      "itemName": "R-1 Hauler",
      "itemClass": "Truck",
      "itemDesc": "A heavy-duty Colonial truck used to mobilize troops and supplies.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300
      }
    },
    {
      "displayId": 48,
      "faction": [
        "colonial"
      ],
      "imgName": "R_5_Atlas_Hauler.png",
      "imgPath": "icons/vehicles/truckutilityvehicle.png",
      "imgUasset": "VehicleIcons/TruckUtilityVehicleIcon.png",
      "itemName": "R-5 \"Atlas\" Hauler",
      "itemClass": "Truck",
      "itemDesc": "This standard Truck is fitted with a resource hopper in place of the standard cargo hold. This allows for a much greater capacity for resources at the expense of space for cargo.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 360
      }
    },
    {
      "displayId": 49,
      "faction": [
        "colonial"
      ],
      "imgName": "R_5b_Sisyphus_Hauler.png",
      "imgPath": "icons/vehicles/truckmobilitycvehicle.png",
      "imgUasset": "VehicleIcons/TruckMobilityCVehicleIcon.png",
      "itemName": "R-5b \"Sisyphus\" Hauler",
      "itemClass": "Truck",
      "itemDesc": "This variation of the standard R-5 Hauler is fitted with an improved suspension and axle system resulting in better overall handling. However, these improvements may not hold up under severe weather conditions.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300
      }
    },
    {
      "displayId": 50,
      "faction": [
        "colonial"
      ],
      "imgName": "R_9_Speartip_Escort.png",
      "imgPath": "icons/vehicles/truckoffensivevehicle.png",
      "imgUasset": "VehicleIcons/TruckOffensiveVehicleIcon.png",
      "itemName": "R-9 \"Speartip\" Escort",
      "itemClass": "Truck",
      "itemDesc": "This standard Truck is fitted with Light Machinegun in place of the passenger seat. It's well suited as an escort for convoys or lightly armored operations.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 435
      }
    },
    {
      "displayId": 51,
      "faction": [
        "warden"
      ],
      "imgName": "Devitt_Caine_Mk_IV_MMR.png",
      "imgPath": "icons/vehicles/lighttankartillerywar.png",
      "imgUasset": "VehicleIcons/LightTankArtilleryWar.png",
      "itemName": "Devitt-Caine Mk. IV MMR",
      "itemClass": "Light Tank",
      "itemDesc": "A modified Devitt fitted with a specialized Caine mortar turret at the expense of top speed.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 450
      }
    },
    {
      "displayId": 52,
      "faction": [
        "warden"
      ],
      "imgName": "Devitt_Ironhide_Mk_IV.png",
      "imgPath": "icons/vehicles/lighttankwardefensivevehicle.png",
      "imgUasset": "VehicleIcons/LightTankWarDefensiveVehicleIcon.png",
      "itemName": "Devitt Ironhide Mk. IV",
      "itemClass": "Light Tank",
      "itemDesc": "The Ironhide Light Tank is similar to the Mk. III but reinforced with plates of heavy steel at the expense of speed and maneuverability.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 480
      }
    },
    {
      "displayId": 53,
      "faction": [
        "warden"
      ],
      "imgName": "Devitt_Mk_III.png",
      "imgPath": "icons/vehicles/lighttankwarvehicle.png",
      "imgUasset": "VehicleIcons/LightTankWarVehicleIcon.png",
      "itemName": "Devitt Mk. III",
      "itemClass": "Light Tank",
      "itemDesc": "A highly maneuverable lightweight tank. Designed for urban environments, the Devitt is fitted with a 40mm cannon.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 420
      }
    },
    {
      "displayId": 54,
      "faction": [
        "warden"
      ],
      "imgName": "Gallagher_Outlaw_Mk_II.png",
      "imgPath": "icons/vehicles/mediumtank2rangew.png",
      "imgUasset": "VehicleIcons/MediumTank2RangeWIcon.png",
      "itemName": "Gallagher Outlaw Mk. II",
      "itemClass": "Cruiser Tank",
      "itemDesc": "Originally designed in response to increasing swarms of Mesean armor, the Outlaw is an exceptionally capable medium tank armed with a long-range 40mm turret and includes a built-in storm rifle support position.",
      "highVelocityBonus": "Engine can be boosted for increased top speed.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 495
      }
    },
    {
      "displayId": 55,
      "faction": [
        "warden"
      ],
      "imgName": "Silverhand_Chieftain_Mk_VI.png",
      "imgPath": "icons/vehicles/mediumtanksiegewvehicle.png",
      "imgUasset": "VehicleIcons/MediumTankSiegeWVehicleIcon.png",
      "itemName": "Silverhand Chieftain - Mk. VI",
      "itemClass": "Assault Tank",
      "itemDesc": "The Cheiftan assault tank is fitted with asymmetrical armaments, including a 250mm mortar cannon and a twin-barreled 12.7mm turret.",
      "itemCategory": "vehicles",
      "highVelocityBonus": "Equipped with a high velocity barrel that deals 20% extra damage per shot.",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 555
      }
    },
    {
      "displayId": 56,
      "faction": [
        "warden"
      ],
      "imgName": "Silverhand_Mk_IV.png",
      "imgPath": "icons/vehicles/wardenmediumtank.png",
      "imgUasset": "VehicleIcons/WardenMediumTankIcon.png",
      "itemName": "Silverhand - Mk. IV",
      "itemClass": "Assault Tank",
      "itemDesc": "The Silverhand assault tank is fitted with destructive dual-barrel armaments, and heavy frontal and rear armor. Its 68mm frontal cannon is pared with a lighter 40mm turret.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 510
      }
    },
    {
      "displayId": 57,
      "faction": [
        "warden"
      ],
      "imgName": "Kivela_Power_Wheel_80_1.png",
      "imgPath": "icons/vehicles/motorcyclew.png",
      "imgUasset": "VehicleIcons/MotorcycleWIcon.png",
      "itemName": "Kivela Power Wheel 80-1",
      "itemClass": "Motorcycle",
      "itemDesc": "A Warden Motorcycle used in patrols and fitted with a sidecar. The Kivela Power Wheel can also gain a momentary speed boost by burning additional fuel.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 255
      }
    },
    {
      "displayId": 58,
      "faction": [
        "warden"
      ],
      "imgName": "Dunne_Fuelrunner_2d.png",
      "imgPath": "icons/vehicles/oiltankerwar.png",
      "imgUasset": "VehicleIcons/OilTankerWarIcon.png",
      "itemName": "Dunne Fuelrunner 2d",
      "itemClass": "Fuel Tanker",
      "itemDesc": "The Fuelrunner is a heavy Dunne rig designed to transport and distribute large quantities of Fuel.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300
      }
    },
    {
      "displayId": 59,
      "faction": [
        "warden"
      ],
      "imgName": "King_Gallant_Mk_II.png",
      "imgPath": "icons/vehicles/scoutankoffensivew.png",
      "imgUasset": "VehicleIcons/ScouTankOffensiveWIcon.png",
      "itemName": "King Gallant Mk. II",
      "itemClass": "Scout Tank",
      "itemDesc": "A heavily armored variant of the King Spire, the Gallant Mk. II boasts a weighty 30mm cannon at the cost of top speed.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 270
      }
    },
    {
      "displayId": 60,
      "faction": [
        "warden"
      ],
      "imgName": "King_Spire_Mk_I.png",
      "imgPath": "icons/vehicles/scoutvehiclewar.png",
      "imgUasset": "VehicleIcons/ScoutVehicleWar.png",
      "itemName": "King Spire Mk. I",
      "itemClass": "Scout Tank",
      "itemDesc": "This small tank has been recently recommissioned to the Warden arsenal. It b oasts high maneuverability and an antenna that allows for long-range communications during high-stakes recon operations.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 240
      }
    },
    {
      "displayId": 61,
      "faction": [
        "warden"
      ],
      "imgName": "Drummond_Spitfire_100d.png",
      "imgPath": "icons/vehicles/scoutvehicleoffensivewarvehicle.png",
      "imgUasset": "VehicleIcons/ScoutVehicleOffensiveWarVehicleIcon.png",
      "itemName": "Drummond Spitfire 100d",
      "itemClass": "Light Utility Vehicle",
      "itemDesc": "This LMG-mounted Light Utility Vehicle provides a heavy-duty weapons platform with superior speed. Perfectly suited for supporting flanking infantry or an armored assault.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 45
      }
    },
    {
      "displayId": 62,
      "faction": [
        "warden"
      ],
      "imgName": "Drummond_Loscann_55c.png",
      "imgPath": "icons/vehicles/scoutvehicleamphibiouswarvehicle.png",
      "imgUasset": "VehicleIcons/ScoutVehicleAmphibiousWarVehicleIcon.png",
      "itemName": "Drummond Loscann 55c",
      "itemClass": "Light Utility Vehicle",
      "itemDesc": "This amphibious Light Utility Vehicle has been heavily modified to cross rivers and lakes with ease. Venturing out into the open sea is ill-advised, however.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 30
      }
    },
    {
      "displayId": 63,
      "faction": [
        "warden"
      ],
      "imgName": "Drummond_100a.png",
      "imgPath": "icons/vehicles/scoutvehiclewarvehicle.png",
      "imgUasset": "VehicleIcons/ScoutVehicleWarVehicleIcon.png",
      "itemName": "Drummond 100a",
      "itemClass": "Light Utility Vehicle",
      "itemDesc": "A maltipurpose off-road Warden vehicle that can scout nearby targets.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 30
      }
    },
    {
      "displayId": 64,
      "faction": [
        "warden"
      ],
      "imgName": "Dunne_Leatherback_2a.png",
      "imgPath": "icons/vehicles/truckdefensivew.png",
      "imgUasset": "VehicleIcons/TruckDefensiveWIcon.png",
      "itemName": "Dunne Leatherback 2a",
      "itemClass": "Truck",
      "itemDesc": "A heavy, reinforced Dunne transport. Fitted with a heavier frame, the Leatherback is capable of enduring more punishment at the cost of initial acceleration.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 435
      }
    },
    {
      "displayId": 65,
      "faction": [
        "warden"
      ],
      "imgName": "Dunne_Loadlugger_3c.png",
      "imgPath": "icons/vehicles/truckutilitywarvehicle.png",
      "imgUasset": "VehicleIcons/TruckUtilityWarVehicleIcon.png",
      "itemName": "Dunne Loadlugger 3c",
      "itemClass": "Truck",
      "itemDesc": "This standard Truck is fitted with a resource hopper in place of the standard cargo hold. This allows for a much greater capacity for resources at the expense of space for cargo.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 360
      }
    },
    {
      "displayId": 66,
      "faction": [
        "warden"
      ],
      "imgName": "Dunne_Landrunner_12c.png",
      "imgPath": "icons/vehicles/truckmobilitywarvehicle.png",
      "imgUasset": "VehicleIcons/TruckMobilityWarVehicleIcon.png",
      "itemName": "Dunne Landrunner 12c",
      "itemClass": "Truck",
      "itemDesc": "This standard Truck is fitted with rugged off-road treads, allowing for more efficient movement on rough terrain and conditions at the expense of maximum speed.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 360
      }
    },
    {
      "displayId": 67,
      "faction": [
        "warden"
      ],
      "imgName": "Dunne_Transport.png",
      "imgPath": "icons/vehicles/truckwarvehicle.png",
      "imgUasset": "VehicleIcons/TruckWarVehicleIcon.png",
      "itemName": "Dunne Transport",
      "itemClass": "Truck",
      "itemDesc": "A heavy-duty Warden truck used to mobilize troops and supplies.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300
      }
    },
    {
      "displayId": 68,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "BMS_Aquatipper.png",
      "imgPath": "icons/vehicles/bargevehicle.png",
      "imgUasset": "VehicleIcons/BargeVehicleIcon.png",
      "itemName": "BMS - Aquatipper",
      "itemClass": "Barge",
      "itemDesc": "A large shipping vessel, the Aquatipper is used to transport vehicles, equipment, and personnel over large bodies of water.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": false,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 450
      }
    },
    {
      "displayId": 69,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "BMS_Ironship.png",
      "imgPath": "icons/vehicles/freightervehicle.png",
      "imgUasset": "VehicleIcons/FreighterVehicleIcon.png",
      "itemName": "BMS - Ironship",
      "itemClass": "Freighter",
      "itemDesc": "The Basset Motor Society's Ironship-class shipping vessel is used to freight shippable goods and heavy vehicles.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 1500
      }
    },
    {
      "displayId": 70,
      "faction": [
        "colonial"
      ],
      "imgName": "Type_C_Charon.png",
      "imgPath": "icons/vehicles/gunboatvehicle.png",
      "imgUasset": "VehicleIcons/GunBoatVehicleIcon.png",
      "itemName": "Type C - \"Charon\"",
      "itemClass": "Gunboat",
      "itemDesc": "A navel vessel designed to bombard coastal targets. The Charon is fitted with a 120mm light artillery cannon and 12.7mm Machinegun.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 480
      }
    },
    {
      "displayId": 71,
      "faction": [
        "warden"
      ],
      "imgName": "74c_2_Ronan_Meteora_Gunship.png",
      "imgPath": "icons/vehicles/gunboatwardoubleartilleryvehicle.png",
      "imgUasset": "VehicleIcons/GunboatWarDoubleArtilleryVehicleIcon.png",
      "itemName": "74c-2 Ronan Meteora Gunship",
      "itemClass": "Gunboat",
      "itemDesc": "The Meteora Gunship replaces the machinegun with another identical 120mm artillery cannon on the bow.",
      "itemCategory": "vehicles",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 480
      }
    },
    {
      "displayId": 72,
      "faction": [
        "warden"
      ],
      "imgName": "74b_1_Ronan_Gunship.png",
      "imgPath": "icons/vehicles/gunboatwarvehicle.png",
      "imgUasset": "VehicleIcons/GunboatWarVehicleIcon.png",
      "itemName": "74b-1 Ronan Gunship",
      "itemClass": "Gunboat",
      "itemDesc": "A naval vessel designed to bombard coastal targets. The Ronan is fitted with a 120mm light artillery cannon and a 12.7mm Machinegun.",
      "itemCategory": "vehicles",
      "highVelocityBonus": "Equpped with a high velocity barrel that deals 20% extra damage per shot.",
      "numberProduced": 1,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 480
      }
    },
    {
      "displayId": 73,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "BMS_White_Whale.png",
      "imgPath": "icons/vehicles/troopshipvehicle.png",
      "imgUasset": "VehicleIcons/TroopShipVehicleIcon.png",
      "itemName": "BMS - White Whale",
      "itemClass": "Landing Ship",
      "itemDesc": "A heavily armored vessel, the Basset Motor Society's White Whale-class troop transports can deploy on a faraway beaches to function as a permanent forward operating base.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "rmat": 300
      }
    },
    {
      "displayId": 74,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "BMS_Universal_Assemly_Rig.png",
      "imgPath": "icons/vehicles/constructionvehicle.png",
      "imgUasset": "VehicleIcons/ConstructionVehicleIcon.png",
      "itemName": "BMS - Universal Assemly Rig",
      "itemClass": "Construction Vehicle",
      "itemDesc": "A specialized vehicle designed by the Basset Motor Society used in the construction of large structures.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 300
      }
    },
    {
      "displayId": 75,
      "faction": [
        "colonial",
        "warden"
      ],
      "imgName": "BMS_Class_2_Mobile_Auto_Crane.png",
      "imgPath": "icons/vehicles/cranevehicle.png",
      "imgUasset": "VehicleIcons/CraneVehicleIcon.png",
      "itemName": "BMS - Class 2 Mobile Auto-Crane",
      "itemClass": "Crane",
      "itemDesc": "The Basset Motor Society's Class 2 Mobile Auto-Crane is used to lift and reposition vehicles and very heavy equipment.",
      "itemCategory": "vehicles",
      "numberProduced": 3,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 375
      }
    },
    {
      "displayId": -1,
      "faction": [
        "colonial"
      ],
      "imgName": "",
      "imgPath": "icons/uniforms/soldieruniformc.png",
      "imgUasset": "ItemIcons/Uniforms/SoldierUniformCIcon.png",
      "itemName": "Legionary Fatigues",
      "itemClass": "Colonial Soldier Uniform",
      "itemDesc": "Standard issue infantry uniform for the Colonial Legion, designed for general frontline warfare with ballistic weapons such as rifles and machine guns.",
      "itemCategory": "uniforms",
      "isCraftable": false,
      "outfitBuffs": [
        "8 backpack slots",
        "Kinetic Firearms have reduced encumbrance",
        "Light Kinetic Ammunition stacks"
      ],
    },
    {
      "displayId": 0,
      "faction": [
        "colonial"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/engineeruniformc.png",
      "imgUasset": "ItemIcons/Uniforms/EngineerUniformCIcon.png",
      "itemName": "Fabri Rucksack",
      "itemClass": "Colonial Engineering Uniform",
      "itemDesc": "Engineers are the bones of the Mesean Republic. They are outfitted with a heavy bag and belts for easy access to tools and handheld materials.",
      "itemCategory": "uniforms",
      "extraIcon": "engineer",
      "outfitBuffs": [
        "8 backpack slots",
        "Materials have reduced encumberance"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 1,
      "faction": [
        "colonial"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/grenadeuniformc.png",
      "imgUasset": "ItemIcons/Uniforms/GrenadeUniformCIcon.png",
      "itemName": "Grenadier's Baldric",
      "itemClass": "Colonial Grenade Uniform",
      "itemDesc": "Of the most distinguished divisions of the Legion are the Grenadiers. They are outfitted with specialized satchels and pockets for maximizing their capacity to hail explosives.",
      "itemCategory": "uniforms",
      "extraIcon": "grenade",
      "outfitBuffs": [
        "6 backpack slots",
        "Grenades stack",
        "Grenades have reduced encumberance"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 2,
      "faction": [
        "colonial"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/medicuniformc.png",
      "imgUasset": "ItemIcons/Uniforms/MedicUniformCIcon.png",
      "itemName": "Medic Fatigues",
      "itemClass": "Colonial Medic Uniform",
      "itemDesc": "For medics of the Legion, this uniform has a plethora of pockets and bags designed to carry and deploy first aid gear easily.",
      "itemCategory": "uniforms",
      "extraIcon": "medic",
      "outfitBuffs": [
        "6 backpack slots",
        "Bandages and Blood Plasma stack",
        "First Aid Kits and Trauma Kits have reduced encumberance"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 3,
      "faction": [
        "colonial"
      ],
      "imgName": "Legionarys_Oilcoat.png",
      "imgPath": "icons/uniforms/rainuniformc.png",
      "imgUasset": "ItemIcons/Uniforms/RainUniformCIcon.png",
      "itemName": "Legionary's Oilcoat",
      "itemClass": "Colonial Rain Uniform",
      "itemDesc": "Quite accustomed to the temperate climates of the south, Colonials wear this oilcloth jacket paired with thick boots to operate at high efficiency in all but the heaviest storms.",
      "itemCategory": "uniforms",
      "extraIcon": "rain",
      "outfitBuffs": [
        "6 backpack slots",
        "Kinetic weapon light ammunition stacks",
        "High resistance to Rain Storms"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 4,
      "faction": [
        "colonial"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/scoutuniformc.png",
      "imgUasset": "ItemIcons/Uniforms/ScoutUniformCIcon.png",
      "itemName": "Recon Camo",
      "itemClass": "Colonial Scout Uniform",
      "itemDesc": "Legion scouts are deployed on the most dangerous missions. Their gear is lightweight, sturdy and well-suited for extended operations in rugged terrain.",
      "itemCategory": "uniforms",
      "extraIcon": "scout",
      "outfitBuffs": [
        "5 backpack slots",
        "High chance of not being detected by enemy intelligence"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 5,
      "faction": [
        "colonial"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/snowuniformc.png",
      "imgUasset": "ItemIcons/Uniforms/SnowUniformCIcon.png",
      "itemName": "Heavy Topcoat",
      "itemClass": "Colonial Snow Uniform",
      "itemDesc": "Unaccustomed to the cold, Legionaries must always adapt. This heavy topcoat is designed to mitigate the effects of cold while still allowing for optimal mobility and combat effectiveness.",
      "itemCategory": "uniforms",
      "extraIcon": "snow",
      "outfitBuffs": [
        "6 backpack slots",
        "Kinetic weapon light ammunition stacks",
        "Low resistance to Snow Storms"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 6,
      "faction": [
        "colonial"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/tankuniformc.png",
      "imgUasset": "ItemIcons/Uniforms/TankUniformCIcon.png",
      "itemName": "Tankman's Coveralls",
      "itemClass": "Colonial Tank Uniform",
      "itemDesc": "Nothing compares to the efficiency and destructive capabilities of the Colonial armor devision. Tank crew are provided with sturdy coveralls and satchel belts for easy access to essential tools required for tank maintenance and operation.",
      "itemCategory": "uniforms",
      "extraIcon": "tank",
      "outfitBuffs": [
        "7 backpack slots",
        "Gas Mask Filters stack",
        "Basic Materials have reduced encumbrance"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 6,
      "faction": [
         "colonial"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/armouruniformc.png",
      "imgUasset": "ItemIcons/Uniforms/ArmourUniformC.png",
      "itemName": "Velian Flak Vest",
      "itemDesc": "A heavily reinforced vest designed to protect grenadiers from shrapnel back blasts. As such, the Flak Vest reduces cuts and scrapes on top of dampening bullet impacts.",
      "itemCategory": "uniforms",
      "itemClass": "Colonial Armour Uniform",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "extraIcon": "armour",
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
         "bmat": 100
      },
      "outfitBuffs": [
         "3 backpack slots"
      ]
    },
    {
      "displayId": 7,
      "faction": [
         "colonial"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/officeruniformc.png",
      "imgUasset": "ItemIcons/Uniforms/OfficerUniformCIcon.png",
      "itemName": "Officialis' Attire",
      "itemDesc": "This uniform, while impractical in combat, denotes the head of a regiment. Appropriately dressed officers may freely discipline their subordinates. Ancient Mesean officialis were key to the Legion's organization. This modern attire honours their lasting legacy.",
      "itemCategory": "uniforms",
      "itemClass": "Colonial Officer Uniform",
      "extraIcon": "officer",
      "numberProduced": 3,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
         "bmat": 100
      },
      "outfitBuffs": [
         "6 backpack slots"
      ]
    },
    {
      "displayId": -2,
      "faction": [
        "warden"
      ],
      "imgName": "",
      "imgPath": "icons/uniforms/soldieruniformw.png",
      "imgUasset": "ItemIcons/Uniforms/SoldierUniformWIcon.png",
      "itemName": "Infantry Battledress",
      "itemClass": "Warden Soldier Uniform",
      "itemDesc": "Most common Warden infantry uniform, designed for general frontline warfare with ballistic weapons such as rifles and machine guns.",
      "itemCategory": "uniforms",
      "isCraftable": false,
      "outfitBuffs": [
        "8 backpack slots",
        "Kinetic Firearms have reduced encumbrance",
        "Light Kinetic Ammunition stacks"
      ],
    },
    {
      "displayId": 7,
      "faction": [
        "warden"
      ],
      "imgName": "Specialists_Overcoat.png",
      "imgPath": "icons/uniforms/ammouniformw.png",
      "imgUasset": "ItemIcons/Uniforms/AmmoUniformWIcon.png",
      "itemName": "Specialist's Overcoat",
      "itemClass": "Warden Heavy Ammo Uniform",
      "itemDesc": "Warden specialists require a uniform designed to optimize their capacity to haul a variety of heavy ammunition.",
      "itemCategory": "uniforms",
      "extraIcon": "ammo",
      "outfitBuffs": [
        "8 backpack slots",
        "Heavy ammunition has reduced encumbrance"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 8,
      "faction": [
        "warden"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/engineeruniformw.png",
      "imgUasset": "ItemIcons/Uniforms/EngineerUniformWIcon.png",
      "itemName": "Sapper Gear",
      "itemClass": "Warden Engineering Uniform",
      "itemDesc": "Caovish engineers are legendary in song and stature. They wear specialized uniforms, outfitted with belts and bags for easy access to tools and handheld materials.",
      "itemCategory": "uniforms",
      "extraIcon": "engineer",
      "outfitBuffs": [
        "8 backpack slots",
        "Materials have reduced encumbrance"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 9,
      "faction": [
        "warden"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/medicuniformw.png",
      "imgUasset": "ItemIcons/Uniforms/MedicUniformWIcon.png",
      "itemName": "Physician's Jacket",
      "itemClass": "Warden Medic Uniform",
      "itemDesc": "Physicians in the Warden army are unmatched and this uniform has a plethora of pockets and bags designed to carry and deploy first aid gear easily.",
      "itemCategory": "uniforms",
      "extraIcon": "medic",
      "outfitBuffs": [
        "6 backpack slots",
        "Bandages and Blood Plasma stack",
        "First Aid Kits and Trauma Kits have reduced encumbrance"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 10,
      "faction": [
        "warden"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/scoutuniformw.png",
      "imgUasset": "ItemIcons/Uniforms/ScoutUniformWIcon.png",
      "itemName": "Outrider's Mantle",
      "itemClass": "Warden Scout Uniform",
      "itemDesc": "the Warden army relies on outriders to provide and recieve vital intelligence. Their gear is sturdy and well-suited for extended operations in rugged terrain and inclement weather.",
      "itemCategory": "uniforms",
      "extraIcon": "scout",
      "outfitBuffs": [
        "5 backpack slots",
        "High chance of not being detected by enemy intelligence",
        "Low resistance to Snow Storms"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 11,
      "faction": [
        "warden"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/snowuniformw.png",
      "imgUasset": "ItemIcons/Uniforms/SnowUniformWIcon.png",
      "itemName": "Caoivish Parka",
      "itemClass": "Warden Snow Uniform",
      "itemDesc": "Born and bred in the northern cold, this heavy parka protects Warden infantry from all but the worst blizzards.",
      "itemCategory": "uniforms",
      "extraIcon": "snow",
      "outfitBuffs": [
        "6 backpack slots",
        "Kinetic weapon light ammunition stacks",
        "High resistance to Snow Storms"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 12,
      "faction": [
        "warden"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/tankuniformw.png",
      "imgUasset": "ItemIcons/Uniforms/TankUniformWIcon.png",
      "itemName": "Padded Boiler Suit",
      "itemClass": "Warden Tank Uniform",
      "itemDesc": "Caovish armor is unmatched in its design and resilience. All crew are provided with a sturdy boilersuit and satchel belts to access essential tools required for tank maintenance and operation.",
      "itemCategory": "uniforms",
      "extraIcon": "tank",
      "outfitBuffs": [
        "7 backpack slots",
        "Gas Mask Filters stack",
        "Basic Materials have reduced encumbrance"
      ],
      "numberProduced": 20,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
        "bmat": 100
      }
    },
    {
      "displayId": 13,
      "faction": [
         "warden"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/armouruniformw.png",
      "imgUasset": "ItemIcons/Uniforms/ArmourUniformW.png",
      "itemName": "Gunner's Breastplate",
      "itemDesc": "Repurposed from ancient wars, these armour plates are highly effective at stopping enemy small arms fire. That protection comes at the cost of weight, and the wearer will feel quite restricted.",
      "itemCategory": "uniforms",
      "itemClass": "Warden Armour Uniform",
      "extraIcon": "armour",
      "numberProduced": 5,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
         "bmat": 100
      },
      "outfitBuffs": [
         "3 backpack slots"
      ]
    },
    {
      "displayId": 14,
      "faction": [
         "warden"
      ],
      "imgName": "Grenadiers_Baldric.png",
      "imgPath": "icons/uniforms/officeruniformw.png",
      "imgUasset": "ItemIcons/Uniforms/OfficerUniformWIcon.png",
      "itemName": "Officer's Regalia",
      "itemDesc": "A formal uniform that denotes a regiment's leading officer. While impractical, the officer on duty may use their authority to discipline subordinates without reparation. Officers hold an important role in the Warden military, dating back to ancient times when Caoiva was ruled by a dozen kings.",
      "itemCategory": "uniforms",
      "itemClass": "Warden Officer Uniform",
      "extraIcon": "officer",
      "numberProduced": 3,
      "stockpileLimitPrivate": 100,
      "isTeched": true,
      "isMpfCraftable": true,
      "cost": {
         "bmat": 100
      },
      "outfitBuffs": [
         "6 backpack slots"
      ]
    },
    {
      "displayId": 0,
      "faction": [
        "warden",
        "colonial"
      ],
      "imgName": "",
      "imgPath": "icons/items/basicmaterials.png",
      "imgUasset": "ItemIcons/BasicMaterialsIcon.png",
      "itemName": "Basic Materials",
      "itemCategory": "refined",
      "numberProduced": 100,
      "stockpileLimitPrivate": 300,
      "supplyPyramid": {
        "priority": 1,
        "cratesIdeal": 60,
      },
    },
    {
      "displayId": 1,
      "faction": [
        "warden",
        "colonial"
      ],
      "imgName": "",
      "imgPath": "icons/items/resourcefuel.png",
      "imgUasset": "War/Content/Slate/Images/ResourceFuelIcon.png", // This is in a completely different directory root.
      "itemName": "Diesel",
      "itemCategory": "refined",
      "numberProduced": 1,
      "stockpileLimitPrivate": 100,
    },
    {
      "displayId": 2,
      "faction": [
        "warden",
        "colonial"
      ],
      "imgName": "",
      "imgPath": "icons/items/explosivematerial.png",
      "imgUasset": "ItemIcons/ExplosiveMaterialIcon.png",
      "itemName": "Explosive Materials",
      "itemCategory": "refined",
      "numberProduced": 20,
      "stockpileLimitPrivate": 300,
    },
    {
      "displayId": 3,
      "faction": [
        "warden",
        "colonial"
      ],
      "imgName": "",
      "imgPath": "icons/items/refinedmaterials.png",
      "imgUasset": "ItemIcons/RefinedMaterialsIcon.png",
      "itemName": "Refined Materials",
      "itemCategory": "refined",
      "numberProduced": 20,
      "stockpileLimitPrivate": 300,
    },
    {
      "displayId": 4,
      "faction": [
        "warden",
        "colonial"
      ],
      "imgName": "",
      "imgPath": "icons/items/heavyexplosivematerial.png",
      "imgUasset": "ItemIcons/HeavyExplosiveMaterialIcon.png",
      "itemName": "Heavy Explosive Materials",
      "itemCategory": "refined",
      "numberProduced": 20,
      "stockpileLimitPrivate": 300,
    },
    {
      "displayId": 5,
      "faction": [
        "warden",
        "colonial"
      ],
      "imgName": "",
      "imgPath": "icons/items/refinedfuel.png",
      "imgUasset": "ItemIcons/RefinedFuelIcon.png",
      "itemName": "Petrol",
      "itemCategory": "refined",
      "numberProduced": 1,
      "stockpileLimitPrivate": 100,
    },
    {
      "displayId": 6,
      "faction": [
        "warden",
        "colonial"
      ],
      "imgName": "",
      "imgPath": "icons/items/resoucealuminumrefined.png",
      "imgUasset": "ItemIcons/ResouceAluminumRefinedIcon.png",
      "itemName": "Aluminum Alloy",
      "itemCategory": "refined",
      "numberProduced": 20,
      "stockpileLimitPrivate": 300,
    },
    {
      "displayId": 7,
      "faction": [
        "warden",
        "colonial"
      ],
      "imgName": "",
      "imgPath": "icons/items/resouceironrefined.png",
      "imgUasset": "ItemIcons/ResouceIronRefinedIcon.png",
      "itemName": "Iron Alloy",
      "itemCategory": "refined",
      "numberProduced": 20,
      "stockpileLimitPrivate": 300,
    },
    {
      "displayId": 8,
      "faction": [
        "warden",
        "colonial"
      ],
      "imgName": "",
      "imgPath": "icons/items/resourcecopperrefined.png",
      "imgUasset": "ItemIcons/ResourceCopperRefinedIcon.png",
      "itemName": "Copper Alloy",
      "itemCategory": "refined",
      "numberProduced": 20,
      "stockpileLimitPrivate": 300,
    },
  ];

const known_iconpacks = [
  {
    "name": "UILabelIcons3.0",
    "label": "UILabelIcons3.0",
  },
  {
    "name": "UILabelIcons2.0",
    "label": "UILabelIcons2.0",
  },
  {
    "name": "UILabelIcons1.1",
    "label": "UILabelIcons1.1",
  },
  {
    "name": "NewIcons3.0",
    "label": "NewIcons3.0 (bad accuracy)",
  }
]

const extra_icons = {
  "smoke": {
    "label": "Smoke",
    "labelLong": "Creates Smoke",
    "imgPath": "icons/items/subtypesmk.png"
  },
  "light_kinetic": {
    "label": "Light Kinetic",
    "labelLong": "Deals light kinetic damage",
    "imgPath": "icons/items/subtypesb.png"
  },
  "heavy_kinetic": {
    "label": "Heavy Kinetic",
    "labelLong": "Deals heavy kinetic damage",
    "imgPath": "icons/items/subtypehb.png"
  },
  "at_kinetic": {
    "label": "Anti-Tank Kinetic",
    "labelLong": "Deals anti-tank kinetic damage",
    "imgPath": "icons/items/subtypeantitank.png"
  },
  "shrapnel": {
    "label": "Shrapnel",
    "labelLong": "Deals shrapnel damage",
    "imgPath": "icons/items/subtypesh.png"
  },
  "flare": {
    "label": "Flare",
    "labelLong": "Shines a bright onto the battlefield",
    "imgPath": "icons/items/subtypefl.png"
  },
  "gas": {
    "label": "Poisonous Gas",
    "labelLong": "Deals poisonous gas damage",
    "imgPath": "icons/items/subtypega.png"
  },
  "explosive": {
    "label": "Explosive",
    "labelLong": "Deals explosive damage",
    "imgPath": "icons/items/subtypese.png"
  },
  "high_explosive": {
    "label": "High Explosive",
    "labelLong": "Deals high explosive damage",
    "imgPath": "icons/items/subtypehe.png"
  },
  "demolition": {
    "label": "Demolitions",
    "labelLong": "Deals demolition damage",
    "imgPath": "icons/items/subtypelra.png"
  },
  "armour_piercing": {
    "label": "Armour Piercing",
    "labelLong": "Deals armor piercing damage",
    "imgPath": "icons/items/subtypeap.png"
  },
  "at_explosive": {
    "label": "Anti-Tank Explosive",
    "labelLong": "Deals anti-tank explosive damage",
    "imgPath": "icons/items/subtypeat.png"
  },
  "engineer": {
    "label": "Engineer Uniform",
    "imgPath": "icons/items/subtypeengineer.png"
  },
  "medic": {
    "label": "Medic Uniform",
    "imgPath": "icons/items/subtypemedic.png"
  },
  "scout": {
    "label": "Scout Uniform",
    "imgPath": "icons/items/subtypescout.png"
  },
  "tank": {
    "label": "Tank Uniform",
    "imgPath": "icons/items/subtypetank.png"
  },
  "snow": {
    "label": "Snow Uniform",
    "imgPath": "icons/items/subtypesnow.png"
  },
  "rain": {
    "label": "Rain Uniform",
    "imgPath": "icons/items/subtyperain.png"
  },
  "grenade": {
    "label": "Grenade Uniform",
    "imgPath": "icons/items/subtypegrenade.png"
  },
  "ammo": {
    "label": "Heavy Ammo Uniform",
    "imgPath": "icons/items/subtypeammo.png"
  },
  "armour": {
    "label": "Armour Uniform",
    "imgPath": "icons/items/subtypearmour.png"
  },
  "officer": {
    "label": "Officer Uniform",
    "imgPath": "icons/items/subtypeofficer.png"
  }
}

const stockpile_types = [
  {
    "label": "Seaport",
    "crateBased": true
  },
  {
    "label": "Storage Depot",
    "crateBased": true
  },
  {
    "label": "Keep",
    "crateBased": false
  },
  {
    "label": "Border Base",
    "crateBased": false
  },
  {
    "label": "Bunker Base",
    "crateBased": false
  },
  {
    "label": "Encampment",
    "crateBased": false
  },
  {
    "label": "Field Base",
    "crateBased": false
  },
  {
    "label": "Outpost",
    "crateBased": false
  },
  {
    "label": "Relic Base",
    "crateBased": false
  },
  {
    "label": "Safehouse",
    "crateBased": false
  },
  { // Does this show on map?
    "label": "Landing Ship",
    "crateBased": false
  },
  {
    "label": "Town Base",
    "crateBased": false
  },
]

const getItems = () => {
  let ret = [];
  let a;
  let b;
  for (let item of gameitems) {
    if (item.itemCategory === 'vehicles' || item.itemCategory === 'shipables') {
      let name = item.itemName + ' (crated)';
      a = JSON.parse(JSON.stringify(item));
      b = JSON.parse(JSON.stringify(item));
      a.crated = "always";
      b.crated = "never";
      a.itemName = item.itemName + ' (crated)';
      b.itemName = item.itemName + ' (uncrated)';
      ret.push(a);
      ret.push(b);
    } else {
      ret.push(item)
    }
  }
  return ret;
}
