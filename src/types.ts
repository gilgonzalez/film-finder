export interface SearchType {
    Search:       Search[];
    totalResults: string;
    Response:     string;
}

export interface Search {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   string;
    Poster: string;
}

export enum Type {
    Game = "game",
    Movie = "movie",
    Series = "series",
}