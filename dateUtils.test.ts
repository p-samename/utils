import dateUtils from "./dateUtils"; // ES 모듈 가져오기
import { differenceInCalendarDays, format } from "date-fns";

// today
describe("DateUtils - today", () => {
  test("기본 형식 (yyyy-MM-dd)으로 오늘 날짜 반환", () => {
    const expectedDate = format(new Date(), "yyyy-MM-dd");
    expect(dateUtils.today()).toBe(expectedDate);
  });

  test("yy/M/dd 형식으로 오늘 날짜 반환", () => {
    const expectedDate = format(new Date(), "yy/M/dd");
    expect(dateUtils.today("yy/M/dd")).toBe(expectedDate);
  });
});

// distanceDate
describe("DateUtils - distanceDate", () => {
  test("두 날짜의 차이를 일 수로 반환", () => {
    const expectedDate = differenceInCalendarDays(
      new Date(24, 0, 1),
      new Date(24, 0, 2)
    );
    expect(dateUtils.distanceDate("2024-01-01", "2024-01-02")).toBe(
      Math.abs(expectedDate)
    );
  });

  test("두 날짜의 차이를 일 수로 반환", () => {
    const expectedDate = differenceInCalendarDays(
      new Date(24, 0, 1),
      new Date(24, 0, 2)
    );
    expect(dateUtils.distanceDate(new Date(24, 0, 1), new Date(24, 0, 2))).toBe(
      Math.abs(expectedDate)
    );
  });
});
