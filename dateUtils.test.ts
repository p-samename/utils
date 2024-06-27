import dateUtils from "./dateUtils"; // ES 모듈 가져오기
import {
  addDays,
  differenceInCalendarDays,
  endOfMonth,
  format,
  formatDuration,
  intervalToDuration,
  isAfter,
  isBefore,
  isMatch,
} from "date-fns";

describe("dateUtils", () => {
  // isDateFormat
  test("isDateFormat - baseDate의 형식이 defaultFormat과 일치하는지 체크", () => {
    const expectedDate = isMatch(dateUtils.dateForm(new Date()), "yyyy-MM-dd");
    expect(dateUtils.isDateFormat(dateUtils.dateForm(new Date()))).toEqual(
      expectedDate
    );
  });

  // dateForm
  test("dateForm - Date 형식을 원하는 format 으로 변환", () => {
    const expectedDate = format(new Date(), "yyyy-MM-dd");
    expect(dateUtils.dateForm(new Date(), "yyyy-MM-dd")).toEqual(expectedDate);
  });

  // today
  test("today - 오늘 날짜 반환 : Date", () => {
    const expectedDate = new Date();
    // toBe 는 객체의 참조값을 비교한다.
    // new Date() 는 객체의 내부 값을 비교해야 하기에 toEqual 을 사용.
    expect(dateUtils.today()).toEqual(expectedDate);
  });

  // distanceDate
  test("distanceDate - 두 날짜의 차이를 일 수로 반환 : number", () => {
    const baseDate = new Date(24, 0, 1);
    const targetDate = new Date(24, 0, 2);
    const expectedDate = differenceInCalendarDays(baseDate, targetDate);
    expect(dateUtils.distanceDate(baseDate, targetDate)).toBe(
      Math.abs(expectedDate)
    );
  });

  // dayAfter
  test("dayAfter - baseDate의 몇일 후를 반환 : Date", () => {
    const durationDate = 2;
    const expectedDate = addDays(new Date(), durationDate);
    expect(dateUtils.dayAfter(new Date(), durationDate)).toEqual(expectedDate);
  });

  // isAfterDate
  test("isAfterDate - baseDate가 targetDate의 이후 인지 판단 : boolean", () => {
    const baseDate = new Date(24, 0, 2);
    const targetDate = new Date(24, 0, 1);
    const expectedDate = isAfter(baseDate, targetDate);
    expect(dateUtils.isAfterDate(baseDate, targetDate)).toBe(expectedDate);
  });

  // isBeforeDate
  test("isBeforeDate - baseDate가 targetDate의 이전 인지 판단 : boolean", () => {
    const baseDate = new Date(24, 0, 1);
    const targetDate = new Date(24, 0, 2);
    const expectedDate = isBefore(baseDate, targetDate);
    expect(dateUtils.isBeforeDate(baseDate, targetDate)).toBe(expectedDate);
  });

  // endDateOfMonth
  test("endDateOfMonth -baseDate의 해당 달의 마지막 일자를 구함 : Date", () => {
    const baseDate = new Date();
    const expectedDate = endOfMonth(baseDate);
    expect(dateUtils.endDateOfMonth(baseDate)).toEqual(expectedDate);
  });

  // remainFullTime
  test("remainFullTime - baseDate부터 targetDate까지 남은 시간(?년 ?개월 ?일 ?시 ?분 ?초)을 반환 : string", () => {
    const baseDate = new Date(2024, 0, 1);
    const targetDate = new Date(2025, 4, 23);
    const { years, months, days, hours, minutes, seconds } = intervalToDuration(
      {
        start: baseDate,
        end: targetDate,
      }
    );

    // {years,months,days , ...} 형식으로 반환
    const convertRemainTime = formatDuration({
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });

    // fullTime 형식으로 변환
    expect(dateUtils.remainFullTime(baseDate, targetDate)).toBe(
      convertRemainTime
    );
  });
});
