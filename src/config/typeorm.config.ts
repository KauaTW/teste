import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'lallah.db.elephantsql.com',
  port: 5432,
  username: 'guwtpjjj',
  password: 'upQaBna4L0HboNrHcCAUIDL-Hr9jHPVq',
  database: 'guwtpjjj',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
