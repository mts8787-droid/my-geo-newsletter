import { useEffect } from 'react'
import { useSheetData } from './hooks/useSheetData'
import Header from './components/Header'
import KPITable from './components/KPITable'

export default function App() {
  const { data, loading, error, load, refresh } = useSheetData()

  useEffect(() => { load() }, [load])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header onRefresh={refresh} loading={loading} />

      <main className="max-w-[1400px] mx-auto px-4 py-6 space-y-8">
        {/* Error */}
        {error && (
          <div className="bg-red-900/20 border border-red-800/40 rounded-lg p-4 text-red-300 text-sm">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && !data && (
          <div className="flex items-center justify-center py-24">
            <div className="flex items-center gap-3 text-slate-500 text-sm">
              <div className="w-4 h-4 border-2 border-slate-600 border-t-slate-300 rounded-full animate-spin" />
              데이터를 불러오는 중...
            </div>
          </div>
        )}

        {/* Data */}
        {data && (
          <>
            {/* 정량과제 Section */}
            <section className="space-y-4">
              <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2 px-1">
                <span className="w-1 h-4 bg-[#CF0652] rounded-full" />
                정량과제
              </h3>
              <KPITable
                title="표1. 정량과제 목표"
                rows={data.quantitativeGoals.rows}
                totals={data.quantitativeGoals.totals}
                showMonthly
              />
              <KPITable
                title="표2. 정량과제 실적"
                rows={data.quantitativeResults.rows}
                totals={data.quantitativeResults.totals}
                showMonthly
              />
              <KPITable
                title="표3. 정량과제 달성율"
                rows={data.quantitativeRates.rows}
                totals={data.quantitativeRates.totals}
                showMonthly
              />
            </section>

            {/* 정성과제 Section */}
            <section className="space-y-4">
              <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2 px-1">
                <span className="w-1 h-4 bg-[#3B82F6] rounded-full" />
                정성과제
              </h3>
              <KPITable
                title="표4. 정성과제 목표"
                rows={data.qualitativeGoals.rows}
              />
              <KPITable
                title="표5. 정성과제 달성여부"
                rows={data.qualitativeResults.rows}
              />
            </section>
          </>
        )}
      </main>
    </div>
  )
}
