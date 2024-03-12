export class Money {
  public static readonly ZERO = new Money(0);
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  public add(other: Money): Money {
    return new Money(this.value + other.value);
  }

  public subtract(other: Money): Money {
    return new Money(this.value - other.value);
  }

  public percentage(percentage: number): Money {
    return new Money(Math.round((percentage * this.value) / 100));
  }

  public toInt(): number {
    return this.value;
  }

  public toString(): string {
    const value = this.value / 100;
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  public isEqualTo(other: Money): boolean {
    return this.value === other.value;
  }
}
