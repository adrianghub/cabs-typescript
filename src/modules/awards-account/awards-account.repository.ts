import { EntityRepository, Repository } from 'typeorm';
import { AwardsAccount } from './awards-account.entity';
import { Client } from '../../entity/client.entity';

@EntityRepository(AwardsAccount)
export class AwardsAccountRepository extends Repository<AwardsAccount> {
  public async findByClient(client: Client) {
    return this.findOne({ where: { client } });
  }
}
