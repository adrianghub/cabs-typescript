import { AwardedMiles } from 'src/entity/awarded-miles.entity';
import { Client } from 'src/entity/client.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(AwardedMiles)
export class AwardedMilesRepository extends Repository<AwardedMiles> {
  public async findAllByClient(client: Client) {
    return this.find({ where: { client } });
  }
}
