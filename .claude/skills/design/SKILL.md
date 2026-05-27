---
name: design
description: "(인덱스) design-layout / design-chart / design-component / design-tune 분기. 의도가 명확하면 sub-skill 직접 호출 권장."
---

# design (인덱스) — 디자인 워크플로우 분리

> 본 skill 은 **인덱스**. 실제 워크플로우는 성격별 4 sub-skill 에 있음.
> /skills 명령어로 호출 시 정밀 매칭을 위해 sub-skill 을 직접 사용 권장.

---

## sub-skills

| sub-skill | 담는 워크플로우 | 트리거 |
|---|---|---|
| **`design-layout`** | 전체 페이지 / 대시보드 골격 설계 (8 섹션 + 그리드 + 폴더 구조). 시트 스키마 우선 참조, 없으면 사용자에게 스케치 요청 | "대시보드 레이아웃 짜줘", "전체 페이지 구성", "신규 페이지 어떻게 배치" |
| **`design-chart`** | 차트 그리기 (분류 코드 L-1 ~ T-1), 차트 + 표 결합 (X 좌표 정렬, C-24), 신규 SVG 차트 패턴 추가 | "L-1 차트 그려줘", "차트 + 표", "heatmap 추가" |
| **`design-component`** | 신규 컴포넌트 (C-XX) 추가, 뉴스레터 카드 변형 (V1/V2/V3 → V4), iframe srcdoc 미리보기 추가 | "새 카드 만들어줘", "C-25 추가", "뉴스레터 V4", "어드민 프리뷰" |
| **`design-tune`** | 이메일 호환 변환, 다국어 (KO/EN) 라벨 추가, UI 컴포넌트 깨짐 디버깅 | "이메일에서 차트 안 보임", "EN 라벨 추가", "카드 깨짐" |

## 참조 Rule

- `.claude/rules/design.md` — 디자인 토큰·컴포넌트 카탈로그 (C-01~C-24)·SVG 패턴·**§5.17 페이지 레이아웃 표준 패턴**·이메일 호환 ANTI-PATTERN
- `CLAUDE.md` — 프로젝트 헌법 (containerWidth ≤ 940 등 NEVER Rule)
- Hook (`.claude/hooks/`) — 절대 금지 (시스템 차단)
