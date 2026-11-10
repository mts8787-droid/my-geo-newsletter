# GEO 액션아이템 실행 대시보드

답변분석 4개 제품 액션아이템 엑셀을 대시보드로 보여줌.

| 주소 | 용도 |
|---|---|
| `/admin/geo-actions` | 진척 입력 (어드민 로그인) — 팀 공용, 영구 디스크 `geo-actions-progress.json` |
| `/p/GEO-Action-Items` | 공개 게시본 (IP allowlist) — 같은 화면, 진척은 읽기 전용 |

## 엑셀 새 판 반영

1. 새 엑셀(`…액션아이템_vNN.xlsx`)을 `data/geo-actions/source/` 에 넣음. 파일명 끝 버전 번호가 가장 큰 파일을 자동으로 고름.
2. `npm run build:geo-actions` 실행 → `data/geo-actions/geo_actions_vNN.json` 생성.
   - 엑셀 '요약' 시트와 집계를 대조해 하나라도 다르면 **저장하지 않고** 멈춤 (`--no-strict` 로 강제 저장).
   - 직전 판 대비 세부과제 ID 유지·신규·삭제 건수를 보여줌. 진척은 ID 에 붙으므로 삭제된 ID 의 진척은 새 판에서 보이지 않음.
3. `npm test` 후 커밋·푸시 → 배포되면 두 주소 모두 새 판으로 바뀜 (요청 시 렌더, 별도 게시 불필요).

열 이름 꼬리표(예: '변경 (v16~v18)')가 바뀌어도 앞부분으로 찾음. 필수 열·시트가 없거나 주관 조직·실행 축을 판별하지 못하면 오류로 멈춤.

## 파일

| 파일 | 내용 |
|---|---|
| `scripts/build-geo-actions.mjs` | 엑셀 → JSON 변환 + '요약' 대조 (원본 규칙: JOY 저장소 `dashboard/build_data.py`) |
| `data/geo-actions/competitors.json` | 제품 × 국가 1위 경쟁사 — 엑셀에 없는 항목, 보고서가 바뀌면 직접 고침 |
| `scripts/render-geo-actions.mjs` | 셸 + 데이터 + 클라이언트 JS 조립 |
| `src/geo-actions/` | 화면 셸(HTML·CSS)과 클라이언트 JS |
| `routes/geo-actions.js` | 어드민 페이지 + 진척 API (`GET/PUT /api/geo-actions/progress`) |
