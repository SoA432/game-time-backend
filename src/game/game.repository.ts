import { Game } from './game.entity';
import { EntityRepository, Repository,  } from 'typeorm';
import { CreateGameEntityDto } from './dto/create-game-entity.dto';
import { GetGamesFilterDto } from './dto/get-games-filter.dto';
import { User } from '../auth/user.entity';

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {
  async getGames(filterDto: GetGamesFilterDto): Promise<Game[]> {
    const { search } = filterDto;
    const query = this.createQueryBuilder('game');

    if (search) {
      query.andWhere('game.title LIKE :search OR game.description LIKE :search', { search: `%${search}%` })
    }

    const games = await query.getMany();
    return games;
  }

  async createGame(createTaskDto: CreateGameEntityDto, user: User): Promise<Game> {
    const { title, description, imgSrc, genre, price, rating, gallery, age, category, date, developer, publisher, size, discountPrice } = createTaskDto;
    const game = new Game();
    game.title = title;
    game.description = description;
    game.imgSrc = imgSrc;
    game.genre = genre;
    game.price = price;
    game.rating = rating;
    game.gallery = gallery;
    game.age = age;
    game.category = category;
    game.date = date;
    game.developer = developer;
    game.publisher = publisher;
    game.size = size;
    game.user = user;
    game.discountPrice = discountPrice;

    await game.save();

    delete game.user;

    return game;
  }
}
