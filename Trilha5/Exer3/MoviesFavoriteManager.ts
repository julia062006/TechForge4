import { FavoriteManager } from "./FavoriteManager";

export class MoviesFavoriteManager extends FavoriteManager {

    addFavorite(item: string): void {
        
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
        }

        this.favorites.sort();
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}
