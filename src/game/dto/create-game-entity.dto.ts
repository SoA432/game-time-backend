import { IsNotEmpty } from 'class-validator';

export class CreateGameEntityDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  imgSrc: string;

  @IsNotEmpty()
  genre: string;

  @IsNotEmpty()
  rating: string;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  gallery: string[];

  @IsNotEmpty()
  publisher: string;

  @IsNotEmpty()
  developer: string;

  @IsNotEmpty()
  size: number;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  discountPrice: number;
}
