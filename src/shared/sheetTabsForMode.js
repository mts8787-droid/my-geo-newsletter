// 대시보드 mode → 해당 대시보드가 실제로 사용하는 시트 탭(SHEET_NAMES 값) 목록
import { SHEET_NAMES } from '../excelUtils.js'

const S = SHEET_NAMES

export const TABS_FOR_MODE = {
  citation: [
    S.citTouchPoints, S.citDomain, S.citPageType,
  ],
  'weekly-report': [
    S.visSummary, S.citTouchPoints, S.citPageType,
    S.productMS, S.productHS, S.productES,
    S.weeklyMS, S.weeklyHS, S.weeklyES,
  ],
  'monthly-report': [
    S.visSummary, S.citTouchPoints, S.citPageType,
    S.productMS, S.productHS, S.productES,
    S.weeklyMS, S.weeklyHS, S.weeklyES,
  ],
  // visibility 페이지 (Sidebar 의 mode='dashboard')
  dashboard: [
    S.visSummary, S.citTouchPoints, S.citDomain, S.citPageType,
    S.productMS, S.productHS, S.productES,
    S.weeklyMS, S.weeklyHS, S.weeklyES,
    S.monthlyPR, S.weeklyPR, S.weeklyBrandPrompt,
    S.unlaunched, S.prTopicList,
  ],
  newsletter: [
    S.visSummary, S.citTouchPoints, S.citDomain, S.citPageType,
    S.productMS, S.productHS, S.productES,
    S.weeklyMS, S.weeklyHS, S.weeklyES,
    S.unlaunched,
  ],
}

export function tabsForMode(mode) {
  return TABS_FOR_MODE[mode] || []
}
