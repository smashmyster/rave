import { DataSource } from "typeorm"


export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nestjs',
  password: 'JacksoN1!@#',
  database: 'rave',
  logging: true,
  synchronize: false,
  name: 'default',
  entities: [
    "src/app/entities/*{.ts,.js}"
  ],
  migrations: ["src/migrations/*.ts"],
});
