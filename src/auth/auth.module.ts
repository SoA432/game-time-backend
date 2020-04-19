import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.stategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'topSecretSecret14',
      signOptions: {
        expiresIn: '1h'
      }
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,

  ],
  exports: [
    JwtStrategy,
    PassportModule
  ]
})
export class AuthModule {
}
