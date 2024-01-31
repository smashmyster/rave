import { DataSource } from "typeorm"


export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'rave',
  logging: true,
  synchronize: false,
  name: 'default',
  entities: [
    "src/app/entity2/*{.ts,.js}"
  ],
  migrations: ["src/migrations/*.ts"],
});
