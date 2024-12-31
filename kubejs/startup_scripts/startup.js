StartupEvents.registry('item', e => {
  e.create('fabric').maxStackSize(64)
  e.create('old_eye_fragment').maxStackSize(64)
  e.create('diamond_upgrade_smithing_template').maxStackSize(64).name(itemstack => "Smithing Template").tooltip(Text.gray("Diamond Upgrade")).tooltip("").tooltip(Text.gray("Applies to:")).tooltip(Text.blue(" Iron Equipment")).tooltip(Text.gray("Ingredients")).tooltip(Text.blue(" Diamond"))
  e.create('gold_upgrade_smithing_template').maxStackSize(64).name(itemstack => "Smithing Template").tooltip(Text.gray("Gold Upgrade")).tooltip("").tooltip(Text.gray("Applies to:")).tooltip(Text.blue(" Iron Equipment")).tooltip(Text.gray("Ingredients")).tooltip(Text.blue(" Gold Ingot"))
  e.create('iron_upgrade_smithing_template').maxStackSize(64).name(itemstack => "Smithing Template").tooltip(Text.gray("Iron Upgrade")).tooltip("").tooltip(Text.gray("Applies to:")).tooltip(Text.blue(" Chainmail Equipment")).tooltip(Text.gray("Ingredients")).tooltip(Text.blue(" Iron Ingot"))
})
ItemEvents.modification(event => {
  event.modify('minecraft:iron_helmet', item => {
    item.maxDamage = 363
  })
  event.modify('minecraft:iron_chestplate', item => {
    item.maxDamage = 528
  })
  event.modify('minecraft:iron_leggings', item => {
    item.maxDamage = 495
  })
  event.modify('minecraft:iron_boots', item => {
    item.maxDamage = 429
  })
  event.modify('minecraft:diamond_helmet', item => {
    item.maxDamage = 407
  })
  event.modify('minecraft:diamond_chestplate', item => {
    item.maxDamage = 592
  })
  event.modify('minecraft:diamond_leggings', item => {
    item.maxDamage = 555
  })
  event.modify('minecraft:diamond_boots', item => {
    item.maxDamage = 481
  })
  event.modify('minecraft:netherite_helmet', item => {
    item.maxDamage = 814
  })
  event.modify('minecraft:netherite_chestplate', item => {
    item.maxDamage = 1184
  })
  event.modify('minecraft:netherite_leggings', item => {
    item.maxDamage = 1110
  })
  event.modify('minecraft:iron_sword', item => {
    item.maxDamage = 950
  })
  event.modify('minecraft:iron_pickaxe', item => {
    item.maxDamage = 950
  })
  event.modify('minecraft:iron_axe', item => {
    item.maxDamage = 950
  })
  event.modify('minecraft:iron_shovel', item => {
    item.maxDamage = 950
  })
  event.modify('minecraft:iron_hoe', item => {
    item.maxDamage = 950
  })
})
EntityJSEvents.attributes(event => {
  event.modify('minecraft:vex', attribute => {
    attribute.add("minecraft:generic.max_health", 7)})
})
EntityJSEvents.modifyEntity(event => {
  event.modify("ars_nouveau:wilden_boss", modifyBuilder => {
      modifyBuilder.onDeath(context => {
        const { entity } = context
        entity.getBlock().popItem(Item.of("endrem:cold_eye", 1)) // It took too fucking long to do this.
      })
  });
});