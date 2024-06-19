import {KNIGHTS_OF_CONVICTION} from "./setup/config.js"
import KoCActor from "./actor/KoCActor.mjs";
import KoCItem from "./item/KoCItem.mjs";
import { registerSheets } from "./setup/registerSheets.js";
import { registerDataModels } from "./setup/registerDataModels.js";
async function preloadHandlebarsTemplates() {
    const templatePath = [
        "systems/TheWitcherTRPG/templates/sheets/actor/character-sheet.hbs",
        
    ];
    return loadTemplates(templatePath);
}
Hooks.once("init", function () {
    console.log("KnightsOfConviction | init system");

    CONFIG.KNIGHTS_OF_CONVICTION = KNIGHTS_OF_CONVICTION;
    // эффекты которые можно наложить на токен
    CONFIG.statusEffects = CONFIG.KNIGHTS_OF_CONVICTION.statusEffects;
    CONFIG.Item.documentClass = KoCItem;
    CONFIG.Actor.documentClass = KoCActor;

    // TO DO: нужно сделать перерегистрацию моделей, пока это файлы-пустышки
    registerDataModels();
    registerSheets();
    return preloadHandlebarsTemplates();
    // preloadHandlebarsTemplates();
    // registerSettings();
});