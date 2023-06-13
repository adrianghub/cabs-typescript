import { IsEnum } from 'class-validator';
import { CarClass } from '../modules/car-type/car-type.entity';

export class CreateCarTypeDto {
  public description: string;

  @IsEnum(CarClass)
  public carClass: CarClass;
}
