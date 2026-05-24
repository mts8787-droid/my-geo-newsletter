<!-- 자동 생성 미러 — 원본: .claude/skills/newsletter-send/SKILL.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# newsletter-send — 뉴스레터 발송 전 검증 + SMTP 발송 워크플로우

> 발송 전 multi-client 호환 검증 + 본인 테스트 발송 + 전체 발송 + audit log.
> 참조: `.claude/rules/newsletter.md` §5 (검증 체크리스트), §4.10 (SMTP).

---

## skill: 이메일 호환 검증 (발송 전)

발송 직전 multi-client 호환 검증.

```
1. [어드민 iframe 미리보기] — 가장 빠른 1차 검증
   ├─ /admin/newsletter 의 미리보기 모달
   ├─ KO / EN 토글하면서 시각 확인
   └─ iframe 부모 컨테이너에 overflow-x:hidden / min-width 없는지 확인 (CLAUDE.md NEVER)

2. [정적 HTML 직접 열람]
   ├─ npm run build → dist-newsletter/
   ├─ 또는 /p/GEO-Monthly-Report-KO 등 PUB_DIR URL
   └─ 브라우저 (Chrome / Safari / Firefox) 각각 열어 차이 확인

3. [실제 이메일 클라이언트 — Litmus / Email on Acid]
   ├─ (가능하면) Litmus 같은 서비스로 multi-client 캡처
   ├─ 우선순위 클라이언트: Outlook 2007+ / Gmail Web / Apple Mail / Gmail iOS
   └─ 본인 이메일로 테스트 발송 — 최소 Gmail + Outlook + Apple Mail 셋

4. [체크리스트 — .claude/rules/newsletter.md §5]
   ├─ containerWidth ≤ 940
   ├─ display:flex / grid 없음
   ├─ overflow-x:hidden / min-width 없음 (부모 컨테이너)
   ├─ 모든 style 인라인
   ├─ 외부 폰트 fallback 시스템 폰트 명시
   ├─ 이미지 base64 100KB 이하 또는 외부 호스팅
   ├─ preheader 50~110자
   ├─ footer 발행 정보
   ├─ 미출시 회색 + '—' 일관
   └─ KO / EN 양 모드 정상

5. [Hook 통과] — newsletter-guard.sh
   └─ Edit/Write 시점에 자동 검증되지만 수동 확인:
      grep -nE "containerWidth\s*[:=]\s*[0-9]+" src/emailTemplate.js
      grep -nE "display\s*:\s*(flex|grid)" src/emailTemplate.js
      grep -nE "overflow-x\s*:\s*hidden" src/newsletter/*.jsx

6. [회귀 방지]
   ├─ 발송 후 사용자 피드백 (클라이언트별 깨짐) 즉시 기록
   ├─ 회귀 발견 시 → newsletter-debug skill 위임
   └─ 패턴 반복되면 .claude/rules/newsletter.md §6 ANTI-PATTERN 에 등재
```

---

## skill: SMTP 발송

뉴스레터를 SMTP 로 발송할 때.

```
1. [환경 확인]
   ├─ .env 에 SMTP_USER / SMTP_PASS 설정 확인
   │   test -f .env && grep -E "^SMTP_" .env 으로 키 존재 확인 (값은 출력 X)
   ├─ TLS 포트 (587 STARTTLS 또는 465 SSL) 사용
   └─ 보낸 사람 도메인 SPF/DKIM 설정 권장 (실제 발송 도메인 — 회사 정책 확인)

2. [수신자 목록]
   ├─ 어드민 UI 또는 .env 의 수신자 리스트
   ├─ BCC 권장 (수신자끼리 이메일 노출 방지)
   ├─ 또는 별도 transactional ID 추적 (대량 발송 시)
   └─ 외부 발송 시 unsubscribe 링크 필수 (법적 의무)

3. [발송 호출 — routes/email.js]
   ├─ HTML body = generateNewsletterHTML(...) 결과
   ├─ 제목 = `[GEO] {월} 뉴스레터` 같이 명확
   ├─ Preheader 가 HTML 첫 줄에 포함됐는지 확인
   └─ 발송 결과 (성공 / 실패 / bounce) 영구 기록 — .claude/rules/data.md §7.3 boundary 기록 패턴

4. [본인 이메일 테스트 발송 우선]
   ├─ 전체 발송 전 본인 (또는 팀 내 1-2명) 이메일로 1건 테스트
   ├─ Gmail / Outlook / Apple Mail 등에서 모두 정상 표시 확인
   │   - 제목 / 발신자 표시 / preheader / 본문 카드 / footer
   ├─ 미리보기 텍스트 (preheader) 가 inbox 에 정상 노출
   └─ 통과 후 전체 발송 진행

5. [전체 발송]
   ├─ 수신자 N명에 대해 BCC 또는 개별 발송
   ├─ Rate limit 고려 (SMTP 서버 제한 — 보통 분당 N건)
   ├─ 실패 시 retry 정책 (최대 3회, exponential backoff)
   └─ 결과 집계 (성공 N-x / 실패 x)

6. [audit log]
   ├─ 발송 시각 / 수신자 수 / 제목 / 본문 hash (변경 추적) / 결과
   ├─ insight_runs 또는 별도 boundary_calls 테이블 (.claude/rules/data.md §7.3)
   └─ /admin/observability 또는 별도 dashboard 시각화

7. [회귀 / 사고 대응]
   ├─ Bounce 율 높으면 SMTP 설정 / 수신자 리스트 정제
   ├─ 스팸 분류 시 발신 도메인 reputation 확인 (SPF/DKIM/DMARC)
   ├─ 발송 사고 (잘못된 데이터 발송) — 즉시 후속 정정 발송 + 사과
   └─ 사용자 unsubscribe 요청 즉시 수신자 리스트에서 제거
```
