import { NotAcceptableException } from '@nestjs/common';
import { DriverLicense } from './driver-licence.entity';

describe('DriverLicense', () => {
  const licenseNo = 'FARME100165AB5EW';

  it('should not create invalid license', () => {
    expect(() => DriverLicense.withLicense('invalid')).toThrowError(
      new NotAcceptableException('Illegal license no'),
    );
    expect(() => DriverLicense.withLicense('')).toThrowError(
      new NotAcceptableException('Illegal license no'),
    );
  });

  it('should create valid license', () => {
    const license = DriverLicense.withLicense(licenseNo);
    expect(license.asString()).toEqual(licenseNo);
  });

  it('should create invalid license explicitly', () => {
    const license = DriverLicense.withoutValidation('invalid');
    expect(license.asString()).toEqual('invalid');
  });
});
