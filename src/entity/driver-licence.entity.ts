import { BaseEntity } from '../common/base.entity';
import { NotAcceptableException } from '@nestjs/common';
import { Entity } from 'typeorm';

@Entity()
export class DriverLicense extends BaseEntity {
  private static DRIVER_LICENSE_REGEX = '^[A-Z9]{5}\\d{6}[A-Z9]{2}\\d[A-Z]{2}$';

  private driverLicense: string;

  constructor(driverLicense: string) {
    super();

    this.driverLicense = driverLicense;
  }

  public static withLicense(driverLicense: string): DriverLicense {
    if (!driverLicense || !driverLicense.match(this.DRIVER_LICENSE_REGEX)) {
      throw new NotAcceptableException('Illegal license no');
    }

    return new DriverLicense(driverLicense);
  }

  public static withoutValidation(driverLicense: string): DriverLicense {
    return new DriverLicense(driverLicense);
  }

  public toString(): string {
    return (
      'DriverLicense{' + "driverLicense='" + this.driverLicense + "'" + '}'
    );
  }

  public asString(): string {
    return this.driverLicense;
  }
}
