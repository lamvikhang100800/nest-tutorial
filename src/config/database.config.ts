import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
    
  type: configService.get<string>('DATABASE_TYPE') as 'mysql', 
  
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USER'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  
  autoLoadEntities: true, 
  
  synchronize: configService.get<string>('NODE_ENV') !== 'production', 
  
  logging: true,
});