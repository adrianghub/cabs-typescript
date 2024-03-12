import { Money } from './money';

describe('Money', () => {
  it('should create money from integer', () => {
    expect(new Money(10000).toString()).toEqual('100.00');
    expect(new Money(0).toString()).toEqual('0.00');
    expect(new Money(1012).toString()).toEqual('10.12');
  });

  it('should project money to integer', () => {
    expect(new Money(10).toInt()).toEqual(10);
    expect(new Money(0).toInt()).toEqual(0);
    expect(new Money(-5).toInt()).toEqual(-5);
  });

  it('should add money', () => {
    expect(new Money(500).add(new Money(500))).toEqual(new Money(1000));
    expect(new Money(1020).add(new Money(22))).toEqual(new Money(1042));
    expect(new Money(0).add(new Money(0))).toEqual(new Money(0));
    expect(new Money(-4).add(new Money(2))).toEqual(new Money(-2));
  });

  it('should subtract money', () => {
    expect(new Money(50).subtract(new Money(50))).toEqual(Money.ZERO);
    expect(new Money(1020).subtract(new Money(22))).toEqual(new Money(998));
    expect(new Money(2).subtract(new Money(3))).toEqual(new Money(-1));
  });

  it('should calculate percentage', () => {
    expect(new Money(10000).percentage(30).toString()).toEqual('30.00');
    expect(new Money(8800).percentage(30).toString()).toEqual('26.40');
    expect(new Money(8800).percentage(100).toString()).toEqual('88.00');
    expect(new Money(8800).percentage(0).toString()).toEqual('0.00');
    expect(new Money(4400).percentage(30).toString()).toEqual('13.20');
    expect(new Money(100).percentage(30).toString()).toEqual('0.30');
    expect(new Money(1).percentage(40).toString()).toEqual('0.00');
  });
});
