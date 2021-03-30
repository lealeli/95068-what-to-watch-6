import {getRatingString, getTimeFromMins} from "./film";

describe(`Тестирование getRatingString()`, () => {
  it(`Должен вернуть Normal в валидном промежутке от 3 до 6`, () => {
    const correctAnswer = `Normal`;
    expect(getRatingString(3.1)).toBe(correctAnswer);
    expect(getRatingString(4)).toBe(correctAnswer);
    expect(getRatingString(5.9)).toBe(correctAnswer);
    expect(getRatingString(6)).not.toBe(correctAnswer);
  });

  it(`Должен вернуть Awesome для рейтинга от 10`, () => {
    const correctAnswer = `Awesome`;
    expect(getRatingString(10)).toBe(correctAnswer);
    expect(getRatingString(1000)).toBe(correctAnswer);
    expect(getRatingString(9.9)).not.toBe(correctAnswer);
  });

});

describe(`Тестирование getTimeFromMins()`, () => {
  it(`Тестирование валидного времени`, () => {
    expect(getTimeFromMins(10)).toBe(`0h 10m`);
    expect(getTimeFromMins(1000)).toBe(`16h 40m`);
    expect(getTimeFromMins(0)).toBe(`0h 0m`);
  });

  it(`Тестирование не валидного времени`, () => {
    expect(getTimeFromMins(-34)).toBe(`0h -34m`);
    expect(getTimeFromMins(`test`)).toBe(`NaNh NaNm`);
    expect(getTimeFromMins(NaN)).toBe(`NaNh NaNm`);
  });
});
