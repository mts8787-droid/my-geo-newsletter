// Chart Library — 14 차트 양식 분류 카탈로그
// 분류 코드 (L-1, B-1, M-1, D-1, R-1, BU-1, T-1) + 예시 SVG + 본 저장소 사용 위치.
// Skill에서 "L-1 차트 그려줘" 같이 호출.
// 어드민 페이지: GET /hiro/chart-library
// 미러: docs/agents/CHART_LIBRARY.html (sync-harness 가 본 페이지의 HTML 을 정적 생성)

import { Router } from 'express'
import { renderChartLibraryHTML } from '../scripts/render-chart-library.mjs'

export const chartLibraryRouter = Router()

chartLibraryRouter.get('/hiro/chart-library', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(renderChartLibraryHTML({ adminMode: true }))
})

// 기존 /admin/chart-library → /hiro/chart-library 백워드 호환 redirect
chartLibraryRouter.get('/admin/chart-library', (req, res) => res.redirect(301, '/hiro/chart-library'))
