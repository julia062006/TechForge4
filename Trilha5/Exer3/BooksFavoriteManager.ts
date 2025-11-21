import { FavoriteManager } from "./FavoriteManager";

export class BooksFavoriteManager extends FavoriteManager {

    addFavorite(item: string): void {
        // Insere no início
        this.favorites.unshift(item);
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}
