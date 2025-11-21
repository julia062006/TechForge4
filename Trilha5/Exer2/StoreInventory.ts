import { Inventory } from "./Inventory";

export class StoreInventory extends Inventory {
  private readonly MAX_PER_ITEM = 10;

  addItem(item: string, quantity: number): void {
    if (!item || quantity <= 0) return;

    const currentQuantity = this.items[item] ?? 0;
    const newTotal = currentQuantity + quantity;

    this.items[item] = Math.min(newTotal, this.MAX_PER_ITEM);
  }

  removeItem(item: string): void {
    delete this.items[item];
  }

  getInventory(): Record<string, number> {
    return { ...this.items };
  }
}

