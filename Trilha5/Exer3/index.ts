import { MoviesFavoriteManager } from "./MoviesFavoriteManager";
import { BooksFavoriteManager } from "./BooksFavoriteManager";

const movies = new MoviesFavoriteManager();
const books = new BooksFavoriteManager();


movies.addFavorite("Matrix");
movies.addFavorite("Avatar");
movies.addFavorite("Batman");
movies.addFavorite("Matrix"); 


books.addFavorite("O Pequeno Príncipe");
books.addFavorite("Clean Code");
books.addFavorite("Dom Casmurro");

console.log("Filmes favoritos:", movies.getFavorites());
console.log("Livros favoritos:", books.getFavorites());
