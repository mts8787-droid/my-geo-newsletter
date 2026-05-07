# BigQuery Schema 계약

> **원본 위치**: [`mts8787-droid/dashboard-raw-data`](https://github.com/mts8787-droid/dashboard-raw-data/blob/main/BIGQUERY_SCHEMA.md) — 본 사본은 어드민 열람용. 변경은 원본 레포에서 한 후 본 레포 `docs/`에도 동기화.

> **누가 읽나요?**
> - **PIC** → §1 (한 줄 설명) + §2 (Ascent DB 7개 테이블 한 눈에) + §6 (용어집)
> - **dev** → §3 (테이블별 정의) + §4 (변경 절차) + §5 (환경변수)
> - **상세 컬럼**: 본 문서가 아닌 `docs/schema/<table>.json` 7개 파일이 정확한 출처

---

## 1. 한 줄 설명

이 문서는 **두 시스템(`dashboard-raw-data` writer + `my-geo-newsletter` reader)이 같은 BigQuery 테이블을 안전하게 공유**하기 위한 약속이다. 코드는 공유하지 않고 본 문서·스키마 JSON만 양쪽이 따른다.

```
SEMrush API → dashboard-raw-data (writer) → BigQuery 7 tables → my-geo-newsletter (reader)
                  weekly/monthly             pj-my-geo.semrush_data
```

---

## 2. Ascent DB 7개 테이블 (PIC용)

`pj-my-geo.semrush_data` 데이터셋. 데이터 흐름:

```
SEMrush API
   ├─→ prompt_master (분류체계 · 14컬럼)
   ├─→ visibility    (가시성 원천 · 12컬럼)         ─┐
   └─→ citation      (인용 원천 · 13컬럼)            │
                                                      │
   PIC 수동 입력 ──→ competitor_brand (4컬럼)         │
   PIC 수동 입력 ──→ domain_mapping  (3컬럼)         │
                                                      │
   visibility ⨝ prompt_master ──→ report_visibility (9컬럼) ──→ reader
   citation  ⨝ prompt_master                                       
              ⨝ domain_mapping  ──→ report_citation  (24컬럼) ──→ reader
```

| 분류 | 테이블 | 컬럼 | 역할 / 주기 |
|---|---|:---:|---|
| 분류체계 | `prompt_master` | 14 | raw / weekly. SEMrush + PIC 정의 |
| 원천 | `visibility` | 12 | raw / weekly. LG·경쟁사 가시성 |
|  | `citation` | 13 | raw / monthly. 프롬프트 기반 인용 |
| 리포트 | `report_visibility` | 9 | transform / weekly. 가시성 평균(%) · ⚠️ **5월 업데이트 예정** |
|  | `report_citation` | 24 | transform / monthly. 인용 분류·집계 |
| 매핑 | `competitor_brand` | 4 | mapping / static. LG·경쟁사 분류 |
|  | `domain_mapping` | 3 | mapping / static. 도메인 유형 분류 |

### Prompt ID 규칙 (14자리)

```
1 / UK / HS / DW / L / N / C / 0070
W   CNTR DIV CTG STT BNS CEJ 시퀀스
1   2    2   2   1   1   1   4
```

| 자리 | 의미 | 예시 |
|---|---|---|
| **W** (Workspace, 1) | D2C=1, MS=2 |
| **CNTR** (2) | 국가 코드 | UK, US, DE |
| **DIV** (2) | 본부 | HS, MS, ES |
| **CTG** (2) | 제품 카테고리 | TV, AC, RA, CO, DW |
| **STT** (1) | 출시 상태 | L=Launched, U=Unlaunched |
| **BNS** (1) | 브랜드/논브랜드 | B=Brand, N=Nonbrand |
| **CEJ** (1) | 단계 | I=Interest, C=Conversion, E=Experience |
| **시퀀스** (4) | 일련번호 | 0001~ |

### "신선도(stale)"

마지막 적재 시각이 24h 초과면 **stale = true** → 어드민 신선도 배지에 ⚠️.

- 주간 테이블(visibility, prompt_master, report_visibility): 매주 월요일 새벽 적재
- 월간 테이블(citation, report_citation): 매월 1일 새벽 적재
- 매핑 테이블(competitor_brand, domain_mapping): static (PIC 수동)

---

## 3. 테이블별 정의 (dev용)

### 핵심 원칙

- **PK**: 모든 테이블 `id` (BIGINT, AUTO_INCREMENT)
- **FK**: `prompt_id`로 prompt_master·visibility·citation 연결
- **메타 컬럼**: `input_at`, `updated_at` (TIMESTAMP) — raw 테이블만
- **report_*** 테이블은 PIC가 직접 INSERT 안 함 — 매주/매월 변환 쿼리로 재생성

### 테이블별 상세

각 테이블의 컬럼·리니지 상세는 다음 7개 JSON 참조 (단일 source of truth):

```
docs/schema/pj-my-geo__semrush_data__prompt_master.json
docs/schema/pj-my-geo__semrush_data__visibility.json
docs/schema/pj-my-geo__semrush_data__citation.json
docs/schema/pj-my-geo__semrush_data__report_visibility.json
docs/schema/pj-my-geo__semrush_data__report_citation.json
docs/schema/pj-my-geo__semrush_data__competitor_brand.json
docs/schema/pj-my-geo__semrush_data__domain_mapping.json
```

각 JSON 구조:

```json
{
  "dataset": "pj-my-geo.semrush_data",
  "table": "report_visibility",
  "columns": [
    { "name": "visibility", "bq_type": "NUMERIC",
      "nullable": "Y", "key": "",
      "description": "가시성 값 (Group By 후 평균 %)",
      "source_file": "visibility", "source_column": "visibility",
      "derivation": "AVG(visibility) %" }
  ],
  "lineage": {
    "role": "transform",
    "frequency": "weekly",
    "sources": [
      { "table": "visibility", "join_on": "prompt_id" },
      { "table": "prompt_master", "join_on": "prompt_id, cntr" }
    ],
    "downstream": [],
    "transforms": [
      "JOIN visibility ⨝ prompt_master",
      "GROUP BY start_date, end_date, cntr, ctg, bns, brand",
      "AVG(visibility) → visibility (decimal(5,2))"
    ]
  }
}
```

### 변환 쿼리

`report_visibility`·`report_citation` 생성용 쿼리 템플릿은 Streamlit `🛠️ 스키마 DDL` 페이지에서 자동 생성. 또는 `schema_to_ddl.build_report_visibility_query(...)` 직접 호출.

### 권장 파티션·클러스터링

```sql
-- 모든 raw 테이블 (visibility/citation/prompt_master)
PARTITION BY start_date  -- prompt_master는 input_at::DATE
CLUSTER BY cntr, brand   -- prompt_master는 cntr, prompt_id

-- 리포트 테이블
PARTITION BY start_date
CLUSTER BY cntr, ctg, brand
```

미적용 시 reader가 풀 스캔 → 비용 증가.

---

## 4. Reader(my-geo-newsletter) 측 사용 패턴

`routes/bridge.js`(`@google-cloud/bigquery`)가 `report_visibility`·`report_citation`을 조회해 sync-data JSON으로 변환.

**예시 쿼리**

```sql
-- 최근 주간 가시성 (전체 카테고리, 국가별 평균)
SELECT cntr, ctg, brand, AVG(visibility) AS visibility_avg
FROM `pj-my-geo.semrush_data.report_visibility`
WHERE start_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY)
GROUP BY cntr, ctg, brand
ORDER BY visibility_avg DESC;

-- 인용 도메인 Top 10 (월간)
SELECT domain, domain_type, COUNT(*) AS cnt
FROM `pj-my-geo.semrush_data.report_citation`
WHERE start_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
  AND average_position IS NOT NULL
GROUP BY domain, domain_type
ORDER BY cnt DESC LIMIT 10;
```

**Reader 가드라인**
- 조회는 **report_*** 테이블 우선. raw 테이블은 디버깅용
- `WHERE start_date BETWEEN ...` 필수 (파티션 미적용 시 비용 폭주)
- `updated_at` 또는 별도 메타로 신선도 판정 (24h 초과 = stale)
- 컬럼 추가는 reader가 무시 가능 — 안전. 컬럼 삭제·이름 변경은 §5 절차

---

## 5. 스키마 변경 절차 (dev용)

| 변경 | 안전성 | 절차 |
|---|---|---|
| **컬럼 추가** | 🟢 안전 | writer만 추가 → reader는 무시. 며칠 후 reader 사용 시작 |
| **컬럼 이름 변경** | 🔴 위험 | (1) 새 이름 추가 → 둘 다 씀 → (2) reader 새 이름 사용 → (3) 옛 이름 제거 |
| **타입 변경** | 🔴 위험 | 새 컬럼 추가 후 마이그레이션. 직접 변경 금지 |
| **컬럼 삭제** | 🟠 주의 | reader 코드 참조 제거 → N개월 대기 → 삭제 |
| **테이블 삭제** | 🟠 주의 | reader 사용 종료 확인 → archive 처리 |
| **`report_*` 컬럼 추가** | 🟢 안전 | 변환 쿼리 SELECT에 추가 + JSON 갱신 |

**문서 변경 시**:
1. `dashboard-raw-data` 측 `docs/schema/<table>.json` 갱신 (Streamlit 학습 페이지)
2. 본 `BIGQUERY_SCHEMA.md` 사람용 표 갱신
3. `my-geo-newsletter` reader에 영향 있으면 vendor copy(`my-geo-newsletter/docs/BIGQUERY_SCHEMA.md`) 동기화 + PR 코멘트 cross-link

---

## 6. 환경변수 (writer 측)

| 변수 | 필수 | 기본 | 설명 |
|---|:---:|---|---|
| `SEMRUSH_API_KEY` | ✅ | — | SEMrush Enterprise API Key |
| `SEMRUSH_WORKSPACE_ID` | ✅ | — | Enterprise Workspace ID |
| `SEMRUSH_PROJECT_ID` | — | — | Enterprise Project ID (선택) |
| `SEMRUSH_DATABASE` | — | `us` | DB locale |
| `TARGET_DOMAIN` | — | `example.com` | 대상 도메인 |
| `GCP_PROJECT_ID` | ✅ | `pj-my-geo` | BigQuery 프로젝트 |
| `BQ_DATASET` | — | `semrush_data` | 데이터셋 이름 |
| `GOOGLE_APPLICATION_CREDENTIAL_JSON` | ✅ | — | 서비스 계정 키 JSON 문자열 |

Reader(my-geo-newsletter) 측은 `GOOGLE_APPLICATION_CREDENTIALS_JSON` (변수명 `S` 위치 다름) 사용.

---

## 7. 용어집

| 단어 | 한 줄 설명 | 비유 |
|---|---|---|
| **데이터셋(Dataset)** | BigQuery 안의 폴더 — 여러 테이블 묶음 | 자료실 캐비닛 |
| **테이블(Table)** | 데이터셋 안의 표 데이터 1개 | 캐비닛 안의 폴더 |
| **컬럼(Column)** | 표의 세로 열 | 엑셀의 A열, B열 |
| **타입(Type)** | 컬럼이 담는 값의 종류 (`STRING`, `INT64` 등) | "이 칸은 숫자만" 같은 규칙 |
| **PK / FK** | Primary Key (PK, 고유) / Foreign Key (FK, 다른 테이블 참조) | 회원번호(PK) / 주문서의 회원번호(FK) |
| **JOIN** | 두 테이블을 키로 합치기 | 엑셀 VLOOKUP |
| **GROUP BY** | 키로 묶어 집계 | 엑셀 피벗 테이블 |
| **AVG/SUM/COUNT** | 평균/합/개수 집계 함수 | 엑셀 함수와 동일 |
| **파티션(Partition)** | 큰 테이블을 날짜별로 나눠 저장해 조회 빠르게 | 연도별 자료실 폴더 |
| **클러스터링(Clustering)** | 같은 키 끼리 묶어 저장해 필터 빠르게 | 알파벳순 정렬 |
| **raw / transform / mapping** | 원천 / 가공 / 매핑 테이블 분류 |  |
| **writer / reader** | 쓰는 쪽 / 읽는 쪽 | dashboard-raw-data가 writer, my-geo-newsletter가 reader |

---

*v2.0 · 2026-05-06 — Ascent DB 7개 테이블 정의 반영. 시간 역순 lineage 폐기, 테이블별 단일 JSON으로 단순화. 상세 컬럼은 docs/schema/*.json 참조.*
