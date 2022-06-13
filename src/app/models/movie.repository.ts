import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];
  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'Shazam ',
        description: 'Shazam description',
        imageUrl: 'https://movieposters2.com/images/1631718-b.jpg',
        isPopular: false,
        datePublished: new Date(1990, 10, 10),
        isFavorite: false,
      },
      {
        id: 2,
        title: 'Julie Verne ',
        description: 'Salam',
        imageUrl: 'https://movieposters2.com/images/1849503-b.jpg',
        isPopular: true,
        datePublished: new Date(2020, 10, 10),
        isFavorite: false,
      },
      {
        id: 3,
        title: 'I Kill Giants ',
        description: 'I Kill Giants description',
        imageUrl: 'https://movieposters2.com/images/1520245-b.jpg',
        isPopular: false,
        datePublished: new Date(2022, 11, 10),
        isFavorite: false,
      },
      {
        id: 4,
        title: 'Ferdinand ',
        description: 'Ferdinand description',
        imageUrl: 'https://movieposters2.com/images/1524659-b.jpg',
        isPopular: true,
        datePublished: new Date(1999, 10, 16),
        isFavorite: false,
      },
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }
  getPopularMovies(): Movie[] {
    return this.movies.filter((i) => i.isPopular);
  }
  getMovieById(id: number): Movie | undefined {
    return this.movies.find((m) => m.id == id);
  }
  Update(mv: Movie) {
    this.movies[mv.id - 1] = mv;
  }
}