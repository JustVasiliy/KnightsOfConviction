import {KNIGHTS_OF_CONVICTION} from "./setup/config.js"
import KoCActor from "./actor/KoCActor.mjs";
import KoCItem from "./item/KoCItem.mjs";

Hooks.once("init", function () {
    console.log("KnightsOfConviction | init system");

    CONFIG.KNIGHTS_OF_CONVICTION = KNIGHTS_OF_CONVICTION;
    // CONFIG.statusEffects = CONFIG.WITCHER.statusEffects;
    CONFIG.Item.documentClass = KoCItem;
    CONFIG.Actor.documentClass = KoCActor;

    // registerDataModels();
    // registerSheets();
    // preloadHandlebarsTemplates();
    // registerSettings();
});