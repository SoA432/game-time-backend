import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GamesService } from './games.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameRepository } from './game.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([GameRepository]),
    AuthModule
  ],
  controllers: [GameController],
  providers: [GamesService],
})
export class GameModule {}
