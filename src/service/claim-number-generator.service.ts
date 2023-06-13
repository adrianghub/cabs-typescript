import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { ClaimRepository } from '../modules/claim/claim.repository';
import { Claim } from '../modules/claim/claim.entity';

@Injectable()
export class ClaimNumberGenerator {
  constructor(
    @InjectRepository(ClaimRepository)
    private claimRepository: ClaimRepository,
  ) {}

  public async generate(claim: Claim) {
    const count = await this.claimRepository.count();
    let prefix = count;
    if (count === 0) {
      prefix = 1;
    }
    const DATE_TIME_FORMAT = 'dd/MM/yyyy';
    return (
      prefix +
      count +
      '---' +
      dayjs(claim.getCreationDate()).format(DATE_TIME_FORMAT)
    );
  }
}
