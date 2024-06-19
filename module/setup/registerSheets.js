import { KoCActorSheet } from "../sheets/KoCActorSheet";
import { KoCItemSheet } from "../sheets/KoCItemSheet";
export const registerSheets = () => {
    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet('boilerplate', KoCActorSheet, {
        makeDefault: true,
        label: 'Actor Sheet',
    });
    Items.unregisterSheet('core', ItemSheet);
    Items.registerSheet('boilerplate', KoCItemSheet, {
        makeDefault: true,
        label: 'Item Sheet',
    });
}