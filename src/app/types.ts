export class Movie{
    id! : number;
    title! : string;
    overview! : string;
    poster_path! : string;
    tagline! : string;
    vote_average! : number;
    original_language! : string;
    release_date! : string;
    runtime! : number;
    genres! : Genre[];
}

export class Genre{
    id! : number;
    name! : string;
}

