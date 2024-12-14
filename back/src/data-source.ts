import "reflect-metadata";
import { DataSource } from "typeorm";
import { DB_PATH } from "./config";
import { Historical } from "./entities/historical";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: DB_PATH,
  entities: [Historical],
  synchronize: true,
});
