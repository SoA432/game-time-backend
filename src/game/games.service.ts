import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGameEntityDto } from './dto/create-game-entity.dto';
import { GameRepository } from './game.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { GetGamesFilterDto } from './dto/get-games-filter.dto';
import { User } from '../auth/user.entity';

@Injectable()
export class GamesService {
  constructor(@InjectRepository(GameRepository) private gameRepository: GameRepository) {
  }

  public async getGames(filterDto: GetGamesFilterDto): Promise<Game[]> {
    return this.gameRepository.getGames(filterDto);
  }

  public async getGameById(id: number): Promise<Game> {
    const found = await this.gameRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return found;
  }

  public async createGame(createTaskDto: CreateGameEntityDto, user: User): Promise<Game> {
    return this.gameRepository.createGame(createTaskDto, user);
  }

  public async deleteGame(id: number): Promise<void> {
    const result = await this.gameRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    console.log(result);
  }
}
