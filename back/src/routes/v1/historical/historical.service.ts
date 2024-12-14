import { Repository } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { Historical } from "../../../entities/historical";
import { IAddHistorical } from "../../../types/historical.types";

export default class HistoricalService {
  private static historicalRepository: Repository<Historical>;

  private static GetRepository(): Repository<Historical> {
    if (!this.historicalRepository) {
      this.historicalRepository = AppDataSource.getRepository(Historical);
    }
    return this.historicalRepository;
  }

  public static async FindAll() {
    const historicalRepository = this.GetRepository();
    const historical = await historicalRepository.find({
      order: {
        id: {
          direction: "DESC",
        },
      },
    });

    return historical;
  }

  public static async AddToHistorical(data: IAddHistorical) {
    const historicalRepository = this.GetRepository();
    const newHistorical = historicalRepository.create(data);
    await historicalRepository.save(newHistorical);

    return newHistorical;
  }
}
