// 일관된 섹션 헤더 — 모든 v2 섹션 공통 사용
export default function SectionHeader({ number, title, subtitle, accent = '#CF0652' }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
        {number != null && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 32, height: 32, borderRadius: 8,
            background: accent, color: '#FFFFFF',
            fontSize: 14, fontWeight: 900, fontVariantNumeric: 'tabular-nums',
            boxShadow: `0 4px 12px ${accent}33`,
          }}>
            {number}
          </span>
        )}
        <h2 style={{
          margin: 0, fontSize: 22, fontWeight: 900, color: '#0F172A',
          letterSpacing: '-0.01em',
        }}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p style={{
          margin: '0 0 0 44px',
          fontSize: 13, color: '#64748B', lineHeight: 1.5,
        }}>
          {subtitle}
        </p>
      )}
      <div style={{
        marginTop: 10, marginLeft: 0,
        height: 2,
        background: `linear-gradient(90deg, ${accent} 0%, ${accent}40 30%, transparent 100%)`,
      }} />
    </div>
  )
}
