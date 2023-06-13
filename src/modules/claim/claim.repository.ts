import { EntityRepository, Repository } from 'typeorm';
import { Claim } from './claim.entity';
import { Client } from '../client/client.entity';
import { Transit } from '../../entity/transit.entity';

@EntityRepository(Claim)
export class ClaimRepository extends Repository<Claim> {
  public async findByOwner(owner: Client) {
    return this.find({ where: { owner } });
  }

  public async findByOwnerAndTransit(owner: Client, transit: Transit) {
    return this.find({ where: { owner, transit } });
  }
}
