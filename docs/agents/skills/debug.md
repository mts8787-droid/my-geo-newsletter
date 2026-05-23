<!-- 자동 생성 미러 — 원본: .claude/skills/debug/SKILL.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# Debug — 디버깅 시나리오 호출 워크플로우

> 사용자가 디버깅 / 수정 요청 시 본 스킬 사용. `.claude/rules/BOOTSTRAP.md` 의 "디버깅 시나리오 모음" 15 카테고리 활용.

---

## skill: 디버깅 시나리오 찾기 + 진행

```
1. 증상 분류 — 사용자 보고 + 코드 / 데이터 / 화면 확인:
   · 디자인 (베이스라인 / 컨테이너 / 좁은 셀 / 카드 / 차트 / 다국어)
   · 데이터 (날짜 / MoM / 미출시 / 시트 / Citation / 매핑 / silent)
   · AI (인사이트 호출)
   · 코드 (거대 함수)

2. BOOTSTRAP DEBUG-N 매핑 — 15 카테고리 중 가장 유사한 것 식별:
   · DEBUG-1: 베이스라인 / 라벨 위치
   · DEBUG-2: 컨테이너 너비 / iframe 클립
   · DEBUG-3: 날짜 파싱 정렬
   · DEBUG-4: MoM 계산 정합성
   · DEBUG-5: 좁은 셀 짤림
   · DEBUG-6: 미출시 / DEFAULT 처리
   · DEBUG-7: AI 인사이트 호출 실패
   · DEBUG-8: 시트 동기화 에러
   · DEBUG-9: Citation 도메인 layout
   · DEBUG-10: 카드 범례 / 디자인 일치
   · DEBUG-11: 필터 시 차트 갱신
   · DEBUG-12: 다국어 / 약어
   · DEBUG-13: 카테고리 매핑 회귀
   · DEBUG-14: 거대 함수 분할
   · DEBUG-15: silent fallback

3. 매칭 시나리오의 디버깅 순서 따름:
   · 각 step 의 진단 / 검증 / 수정 동작 실행
   · 사용자에게 진단 결과 보고
   · 관련 룰 (data.md / design.md / ai.md NEVER 룰) 위반 여부 검토

4. 더 나은 방법 발견 시 그 방식으로 진행:
   · 시나리오는 절대 아님 — 가이드
   · 발견한 더 나은 방법은 사용자에게 보고 + 진행
   · 해결 후 → 시나리오 등재 가치 있으면 BOOTSTRAP 에 DEBUG-N+1 추가 제안

5. 일치 시나리오 없음 → 새 패턴:
   · BOOTSTRAP 15 카테고리 외 증상이면 일반 5단계 ERROR CATCHING 적용 (data.md §6)
   · 해결 후 → 사용자에게 "이 패턴 BOOTSTRAP DEBUG-N+1 으로 등재할까요?" 제안
   · 동의 시 BOOTSTRAP.md 갱신 + 미러 sync

6. 회귀 방지:
   · 수정 후 단위 테스트 추가 (회귀 디버깅 TDD 워크플로우 참조)
   · 관련 룰 ANTI-PATTERN 으로 등재할지 검토
```

---

## skill: 신규 디버깅 패턴 등재

3회 이상 반복되는 디버깅 패턴 발견 시 BOOTSTRAP 시나리오로 정식 등재.

```
1. 패턴 식별 — 이전 커밋 / 메모리에서 3회+ 반복 확인
2. 카테고리 결정 — 디자인 / 데이터 / AI / 코드 중
3. BOOTSTRAP DEBUG-N+1 작성:
   · 증상 (사용자가 보는 현상)
   · 원인 (코드 / 데이터 / 외부 boundary 의 어디서)
   · 디버깅 순서 (1~6 step)
   · 관련 룰 / ANTI-PATTERN 참조
4. 관련 ANTI-PATTERN 이 룰에 없으면 추가 (data.md / design.md / ai.md)
5. npm run sync:harness — 미러 갱신
```

---

## skill: 디버깅 결과 검증

수정 후 회귀 없음 확인.

```
1. npm test — 모든 단위 / 통합 테스트 통과
2. npm run build — 산출물 정상 생성
3. 영향 범위 확인:
   · 서버 측 SVG (dashboardSvg.js) 변경 → 클라이언트 짝 (_miniSvg) 동시 수정 여부
   · 매핑 single source 위반 없는지
   · silent fallback 없는지 (_logWarn 사용)
4. 어드민 페이지 시각 검증 (특히 디자인 수정 시 KO/EN 양쪽)
5. /admin/observability 의 Sync Health — 데이터 수정 시 invariant 통과
6. 사용자 검증 요청 — 의도된 동작인지 확인
```
