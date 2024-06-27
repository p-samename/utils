class ArrayUtils {
  isEmpty<T>(arr: T[] | unknown = null): boolean {
    if (arr === null || arr === undefined) {
      return true;
    }
    if (Array.isArray(arr)) {
      return arr.length === 0;
    } else {
      console.warn(arr + "는 배열이 아닙니다.");
      return false;
    }
  }

  isNull(array: null) {
    return array === null;
  }

  hasSameKey<T>(array: T[], stringKey: T) {
    // stringKey 가 array 배열에 있는지 체크
    return !array.every((arrayKey) => arrayKey !== stringKey);
  }
}

const arrayUtils: ArrayUtils = new ArrayUtils();
