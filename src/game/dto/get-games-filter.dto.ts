import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetGamesFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
