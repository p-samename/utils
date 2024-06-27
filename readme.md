<h2>dateUtils 관련 함수 정리</h2>

서비스에서 자주 사용하는 날짜관련 함수들 정리 및 각 상황 함수에 따른 테스트 코드 작성

<ul>
    <li>isDateFormat - baseDate의 형식이 defaultFormat과 일치하는지 체크</li>
    <li>dateForm - Date 형식을 원하는 format 으로 변환</li>
    <li>today - 오늘 날짜 반환</li>
    <li>distanceDate - 두 날짜의 차이를 일 수로 반환</li>
    <li>dayAfter - baseDate로 부터의 몇 일 후를 Date형식으로 반환</li>
    <li>isAfterDate - baseDate가 targetDate의 이후 인지 판단</li>
    <li>isBeforeDate - baseDate가 targetDate의 이전 인지 판단</li>
    <li>remainFullTime - baseDate부터 targetDate까지 남은 시간(?년 ?개월 ?일 ?시 ?분 ?초)을 반환</li>
</ul>

<br/>

```
테스트 코드 실행
test-code 실행 => npm test
```
