import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import OverviewDashboard from './components/OverviewDashboard'
import HSDashboard from './components/HSDashboard'
import HSDataMart from './components/HSDataMart'
import { useSheetData } from './hooks/useSheetData'

export default function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const {
    overview, hs, hsMgmt,
    loading, errors,
    loadOverview, loadHs, loadHsMgmt,
    refresh,
  } = useSheetData()

  // Load data for active tab on mount / tab switch
  useEffect(() => {
    if (activeTab === 'overview' && !overview && !loading.overview) loadOverview()
    if (activeTab === 'hs' && !hs && !loading.hs) loadHs()
    if (activeTab === 'hs-mgmt' && !hsMgmt && !loading.hsMgmt) loadHsMgmt()
  }, [activeTab, overview, hs, hsMgmt, loading, loadOverview, loadHs, loadHsMgmt])

  const isAnyLoading = loading.overview || loading.hs || loading.hsMgmt

  const handleRefresh = () => {
    if (activeTab === 'overview') refresh('overview')
    else if (activeTab === 'hs') refresh('hs')
    else if (activeTab === 'hs-mgmt') refresh('hsMgmt')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onRefresh={handleRefresh}
        loading={isAnyLoading}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {activeTab === 'overview' && (
          <OverviewDashboard
            data={overview}
            loading={loading.overview}
            error={errors.overview}
          />
        )}
        {activeTab === 'hs' && (
          <HSDashboard
            data={hs}
            loading={loading.hs}
            error={errors.hs}
          />
        )}
        {activeTab === 'hs-mgmt' && (
          <HSDataMart
            data={hsMgmt}
            loading={loading.hsMgmt}
            error={errors.hsMgmt}
          />
        )}
      </main>
    </div>
  )
}
