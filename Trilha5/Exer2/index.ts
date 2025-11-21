import { WarehouseInventory } from "./WarehouseInventory";
import { StoreInventory } from "./StoreInventory";


const warehouse = new WarehouseInventory();
warehouse.addItem("Madeira", 500);
warehouse.addItem("Ferro", 200);
console.log("Warehouse:", warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Maçã", 8);
store.addItem("Maçã", 5); 
store.addItem("Banana", 2);
console.log("Store:", store.getInventory());
