import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameEntityDto } from './dto/create-game-entity.dto';
import { GetGamesFilterDto } from './dto/get-games-filter.dto';
import { Game } from './game.entity';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.entity';
import { GetUser } from '../auth/get-user.decorator';

@Controller('games')
export class GameController {
  constructor(private gamesService: GamesService) {
  }

  @Get()
  getGames(@Query(ValidationPipe) filterDto: GetGamesFilterDto): Promise<Game[]> {
    return this.gamesService.getGames(filterDto);
  }

  @Get('/:id')
  getGameById(@Param('id', ParseIntPipe) id: number): Promise<Game> {
    return this.gamesService.getGameById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard())
  createGame(
    @Body() createGameEntityDtoDto: CreateGameEntityDto,
    @GetUser() user: User): Promise<Game> {

    return this.gamesService.createGame(createGameEntityDtoDto, user);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.gamesService.deleteGame(id);
  }
}
