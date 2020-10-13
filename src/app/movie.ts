export interface Movie {
  id: number;
  name: string;
  description: string;
  producer: string;
  rating: number;
  imgUrl: string;
  genre: string;
  year: number;
  duration: number;
  comments: any[];
}
