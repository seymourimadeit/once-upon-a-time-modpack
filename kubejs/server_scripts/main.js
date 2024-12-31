ServerEvents.tags('block', event => {
  const copper_ores = event.get('minecraft:copper_ores').getObjectIds()
  copper_ores.forEach(copper_ores => {
    event.remove('minecraft:needs_stone_tool', copper_ores)
    event.remove('minecraft:incorrect_for_wooden_tool', copper_ores)
  })
})
ServerEvents.recipes(event => {
  event.remove({ id: 'minecraft:stone_pickaxe' })
  event.remove({ id: 'minecraft:stone_axe' })
  event.remove({ id: 'minecraft:stone_sword' })
  event.remove({ id: 'minecraft:stone_shovel' })
  event.remove({ id: 'minecraft:stone_hoe' })
  event.remove({ id: 'minecraft:diamond_chestplate' })
  event.remove({ id: 'minecraft:diamond_helmet' })
  event.remove({ id: 'minecraft:diamond_leggings' })
  event.remove({ id: 'minecraft:diamond_boots' })
  event.remove({ id: 'lifesteal:heart_crystal' })
  event.remove({ id: 'lifesteal:revive_crystal' })
  event.remove({ id: 'endrem:undead_eye' })
  event.remove({ id: 'endrem:witch_eye' })
  event.remove({ id: 'minecraft:recovery_compass' })
  event.remove({ id: 'solonion:golden_lunchbox' })
  event.remove({ id: 'solonion:lunchbag' })
  event.remove({ id: 'solonion:lunchbox' })
  event.remove({ id: 'minecraft:enchanting_table'})
})
MoreJS.registerPotionBrewing(event => {
  event.addPotionBrewing("modern_industrialization:uranium_235_dust", "minecraft:strength", "mutantmonsters:chemical_x")
})
MoreJS.villagerTrades(event => {
  event.removeVanillaTypedTrades("minecraft:armorer")
  event.addTrade("minecraft:armorer", 1, TradeItem.of("minecraft:leather_helmet"), TradeItem.of("minecraft:emerald", 2))
  event.addTrade("minecraft:armorer", 1, TradeItem.of("minecraft:leather_chestplate"), TradeItem.of("minecraft:emerald", 2))
  event.addTrade("minecraft:armorer", 1, TradeItem.of("minecraft:leather_leggings"), TradeItem.of("minecraft:emerald", 2))
  event.addTrade("minecraft:armorer", 1, TradeItem.of("minecraft:leather_boots"), TradeItem.of("minecraft:emerald", 2))
  event.addTrade("minecraft:armorer", 1, TradeItem.of("minecraft:emerald", 8), TradeItem.of("endermanoverhaul:ancient_pearl", 2))
  event.addTrade("minecraft:armorer", 1, TradeItem.of("minecraft:emerald", 1), TradeItem.of("minecraft:snowball", 1))
  event.addTrade("minecraft:armorer", 2, TradeItem.of("minecraft:iron_ingot"), TradeItem.of("minecraft:gold_ingot"))
  event.addTrade("minecraft:armorer", 2, TradeItem.of("minecraft:emerald", 8), TradeItem.of("endermanoverhaul:corrupted_pearl"))
  event.addTrade("minecraft:armorer", 2, TradeItem.of("minecraft:emerald", 16), TradeItem.of("minecraft:wind_charge", 16))
  event.addTrade("minecraft:armorer", 3, TradeItem.of("minecraft:copper_ingot"), TradeItem.of("modern_industrialization:tin_ingot"))
  event.addTrade("minecraft:armorer", 3, TradeItem.of("minecraft:emerald", 12), TradeItem.of("minecraft:iron_sword")),
  event.addTrade("minecraft:armorer", 4, TradeItem.of("kubejs:gold_upgrade_smithing_template"), TradeItem.of("minecraft:emerald", 8))
  event.addTrade("minecraft:armorer", 4, TradeItem.of("kubejs:iron_upgrade_smithing_template"), TradeItem.of("minecraft:emerald", 8))
  event.addTrade("minecraft:armorer", 4, TradeItem.of("minecraft:emerald", 32), TradeItem.of("minecraft:turtle_helmet"))
  event.addTrade("minecraft:armorer", 4, TradeItem.of("emerald", 12), TradeItem.of("infested_swarms_spiders:insect_template"))
  event.addTrade("minecraft:armorer", 5, TradeItem.of("emerald", 12), TradeItem.of("infested_swarms_spiders:spider_template"))
  event.removeTrades({
    first: "coal",
    outputCount: [1],
    level: 2,
    professions: "minecraft:butcher",
  })
  event.removeTrades({
    first: "emerald",
    outputCount: [5],
    level: 2,
    professions: "minecraft:butcher",
  })
  event.removeTrades({
    first: "emerald",
    outputCount: [8],
    level: 2,
    professions: "minecraft:butcher",
  })
  event.removeTrades({
    first: "chicken",
    outputCount: [1],
    level: 1,
    professions: "minecraft:butcher",
  })
  event.removeTrades({
    first: "porkchop",
    outputCount: [1],
    level: 1,
    professions: "minecraft:butcher",
  })
  event.removeTrades({
    first: "rabbit",
    outputCount: [1],
    level: 1,
    professions: "minecraft:butcher",
  })
  event.addTrade("minecraft:butcher", 1, TradeItem.of("farmersdelight:cooked_mutton_chops", 3), TradeItem.of("emerald", 1))
  event.addTrade("minecraft:butcher", 1, TradeItem.of("farmersdelight:beef_patty", 3), TradeItem.of("emerald", 1))
  event.addTrade("minecraft:butcher", 2, TradeItem.of("farmersdelight:hamburger", 1), TradeItem.of("emerald", 10))
  event.addTrade("minecraft:butcher", 2, TradeItem.of("farmersdelight:bacon_and_eggs", 1), TradeItem.of("emerald", 20))
  event.addTrade("minecraft:butcher", 5, TradeItem.of("emerald", 20), TradeItem.of("farmersdelight:steak_and_potatoes"))
  event.removeTrades({
    first: "paper",
    outputCount: [1],
    level: 1,
    professions: "minecraft:cartographer",
  })
  event.addTrade("minecraft:cartographer", 1, TradeItem.of("minecraft:spyglass", 1), TradeItem.of("emerald", 7))
  event.removeTrades({
    first: "rotten_flesh",
    outputCount: [1],
    level: 1,
    professions: "minecraft:cleric",
  })
  event.removeTrades({
    first: "gold",
    outputCount: [1],
    level: 1,
    professions: "minecraft:cleric",
  })
  event.removeTrades({
    first: "wheat",
    outputCount: [1],
    level: 1,
    professions: "minecraft:farmer",
  })
  event.removeTrades({
    first: "potato",
    outputCount: [1],
    level: 1,
    professions: "minecraft:farmer",
  })
  event.removeTrades({
    first: "carrot",
    outputCount: [1],
    level: 1,
    professions: "minecraft:farmer",
  })
  event.removeTrades({
    first: "beetroot",
    outputCount: [1],
    level: 1,
    professions: "minecraft:farmer",
  })
  event.addTrade("minecraft:farmer", 1, TradeItem.of("minecraft:potato", 4), TradeItem.of("emerald", 1))
  event.addTrade("minecraft:farmer", 1, TradeItem.of("minecraft:beetroot", 4), TradeItem.of("emerald", 1))
  event.addTrade("minecraft:farmer", 1, TradeItem.of("minecraft:carrot", 4), TradeItem.of("emerald", 1))
  event.addTrade("minecraft:farmer", 1, TradeItem.of("minecraft:wheat", 4), TradeItem.of("emerald", 1))
  event.removeTrades({
    first: "string",
    outputCount: [1],
    level: 1,
    professions: "minecraft:fisherman",
  })
  event.removeTrades({
    first: "coal",
    outputCount: [1],
    level: 1,
    professions: "minecraft:fisherman",
  })
  event.removeTrades({
    first: "stick",
    outputCount: [1],
    level: 1,
    professions: "minecraft:fletcher",
  })
  event.removeTrades({
    first: "clay",
    outputCount: [1],
    level: 1,
    professions: "minecraft:mason",
  })
  event.addTrade("minecraft:mason", 1, TradeItem.of("modern_industrialization:fire_clay_dust", 8), TradeItem.of("emerald", 1))
  event.removeTrades({
    first: "white_wool",
    outputCount: [1],
    level: 1,
    professions: "minecraft:shepherd",
  })
  event.removeTrades({
    first: "black_wool",
    outputCount: [1],
    level: 1,
    professions: "minecraft:shepherd",
  })
  event.removeTrades({
    first: "gray_wool",
    outputCount: [1],
    level: 1,
    professions: "minecraft:shepherd",
  })
  event.removeTrades({
    first: "brown_wool",
    outputCount: [1],
    level: 1,
    professions: "minecraft:shepherd",
  })
  event.addTrade("minecraft:shepherd", 1, TradeItem.of("kubejs:fabric", 4), TradeItem.of("emerald", 1))
  event.addTrade("minecraft:shepherd", 1, TradeItem.of("brown_wool", 4), TradeItem.of("emerald", 1))
  event.addTrade("minecraft:shepherd", 1, TradeItem.of("black_wool", 4), TradeItem.of("emerald", 1))
  event.addTrade("minecraft:shepherd", 1, TradeItem.of("gray_wool", 4), TradeItem.of("emerald", 1))
  event.addTrade("minecraft:shepherd", 1, TradeItem.of("white_wool", 4), TradeItem.of("emerald", 1))
  event.removeVanillaTypedTrades("minecraft:toolsmith")
  event.addTrade("minecraft:toolsmith", 1, TradeItem.of("bucket", 1), TradeItem.of("emerald", 4))
  event.addTrade("minecraft:toolsmith", 1, TradeItem.of("flint_and_steel", 1), TradeItem.of("emerald", 4))
  event.addTrade("minecraft:toolsmith", 1, TradeItem.of("emerald", 1), TradeItem.of("metalbundles:golden_bundle"))
  event.addTrade("minecraft:toolsmith", 2, TradeItem.of("wolf_armor", 1), TradeItem.of("emerald", 6))
  event.addTrade("minecraft:toolsmith", 2, TradeItem.of("minecraft:iron_horse_armor", 1), TradeItem.of("emerald", 6))
  event.addTrade("minecraft:toolsmith", 2, TradeItem.of("minecraft:diamond_horse_armor", 1), TradeItem.of("emerald", 6))
  event.addTrade("minecraft:toolsmith", 2, TradeItem.of("emerald", 6), TradeItem.of("rail", 6))
  event.addTrade("minecraft:toolsmith", 2, TradeItem.of("emerald", 6), TradeItem.of("friendsandfoes:crab_claw", 3))
  event.addTrade("minecraft:toolsmith", 3, TradeItem.of("emerald", 6), TradeItem.of("iron_shovel"))
  event.addTrade("minecraft:toolsmith", 3, TradeItem.of("emerald", 6), TradeItem.of("iron_pickaxe"))
  event.addTrade("minecraft:toolsmith", 4, TradeItem.of("emerald", 3), TradeItem.of("scaffolding", 3))
  event.addTrade("minecraft:toolsmith", 5, TradeItem.of("emerald", 1), TradeItem.of("lava_bucket"))
  event.removeTrades({
    first: "emerald",
    firstCount: [17, 31],
    outputCount: [1],
    level: 4,
    professions: "minecraft:weaponsmith",
  })
  event.removeTrades({
    first: "emerald",
    firstCount: [13, 27],
    outputCount: [1],
    level: 5,
    professions: "minecraft:weaponsmith",
  })
  event.removeTrades({
    first: "coal",
    outputCount: [1],
    level: 1,
    professions: "minecraft:weaponsmith",
  })
  event.addTrade("minecraft:weaponsmith", 1, TradeItem.of("minecraft:shield", 1), TradeItem.of("emerald", 8))
  event.addTrade("minecraft:weaponsmith", 5, TradeItem.of("emerald", 1), TradeItem.of("minecraft:tnt"))
})
LootJS.lootTables(event => {
  event.modifyLootTables(LootType.ARCHAEOLOGY).firstPool((pool) => {
    pool.addEntry(LootEntry.of("kubejs:old_eye_fragment").withWeight(120).matchPlayerCustom(player => {
      return !player.tags.contains("completed_old_eye_quest")
    }))
  });
})
LootJS.modifiers(event => {
  event.addEntityModifier("friendsandfoes:wildfire").addLoot("endrem:nether_eye")
  event.addEntityModifier("mutantmonsters:mutant_zombie").addLoot("endrem:undead_eye")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:iron_helmet")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:iron_chestplate")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:iron_leggings")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:iron_boots")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("endrem:old_eye")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("dmr:dragon_egg")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:stone_pickaxe")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:stone_axe")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:stone_hoe")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:stone_shovel")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:stone_sword")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:iron_pickaxe")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:iron_axe")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:iron_hoe")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:iron_shovel")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:iron_sword")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("minecraft:iron_sword")
  event.addTableModifier(LootType.CHEST, LootType.VAULT, LootType.ARCHAEOLOGY).removeLoot("artifacts:everlasting_beef")
  event.addTableModifier(LootType.CHEST, LootType.VAULT, LootType.ARCHAEOLOGY).removeLoot("artifacts:eternal_steak")
  event.addTableModifier(LootType.CHEST, LootType.VAULT, LootType.ARCHAEOLOGY).removeLoot("artifacts:umbrella")
  event.addTableModifier(LootType.CHEST, LootType.VAULT, LootType.ARCHAEOLOGY).removeLoot("artifacts:villager_hat")
  event.addTableModifier(LootType.CHEST, LootType.VAULT, LootType.ARCHAEOLOGY).removeLoot("artifacts:charm_of_shrinking")
  event.addTableModifier(LootType.CHEST, LootType.VAULT, LootType.ARCHAEOLOGY).removeLoot("artifacts:charm_of_shrinking")
  event.addTableModifier(LootType.CHEST, LootType.VAULT, LootType.ARCHAEOLOGY).removeLoot("artifacts:strider_shoes")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).replaceLoot("minecraft:diamond_sword", "minecraft:diamond")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).replaceLoot("minecraft:diamond_pickaxe", "minecraft:diamond")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).replaceLoot("minecraft:diamond_axe", "minecraft:diamond")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).replaceLoot("minecraft:diamond_shovel", "minecraft:diamond")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).replaceLoot("minecraft:diamond_helmet", "minecraft:diamond")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).replaceLoot("minecraft:diamond_chestplate", "minecraft:diamond")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).replaceLoot("minecraft:diamond_leggings", "minecraft:diamond")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).replaceLoot("minecraft:diamond_boots", "minecraft:diamond")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("lifesteal:crystal_core")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("lifesteal:crystal_fragment")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("lifesteal:crystal_block")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("lifesteal:crystal_ore")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).replaceLoot("minecraft:elytra", "minecraft:diamond")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("lifesteal:deepslate_crystal_ore")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).removeLoot("lifesteal:netherrack_crystal_ore")
  event.addTableModifier(LootType.CHEST, LootType.VAULT).randomChance(0.3).customAction((context, loot) => {
    if (loot.hasItem("minecraft:diamond")) {
      loot.addItem("lifesteal:heart_crystal")
    }
  })
  event.addTableModifier(LootType.CHEST, LootType.VAULT).customAction((context, loot) => {
    if (loot.hasItem("endrem:evil_eye") && context.entity != null) {
      if (context.entity.tags.contains("completed_evil_eye_quest")) {
        loot.remove("endrem:evil_eye")
      }
    }
  })
})
FTBQuestsEvents.completed("6C51E188E3952C51", event => {
  event.player.addTag("completed_old_eye_quest")
})
FTBQuestsEvents.completed("758BD6C0D6D08AB7", event => {
  event.player.addTag("completed_evil_eye_quest")
})