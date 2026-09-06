import { ImageResponse } from 'next/og'

export const alt = 'Artist Webdesign – Websites für Artists und kleine Unternehmen'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Die Vorschaukarte fuer geteilte Links. Wird beim Build erzeugt, damit
 * kein statisches Bild gepflegt werden muss.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#241e1a',
          backgroundImage:
            'radial-gradient(circle at 78% 8%, rgba(232,131,74,0.26), transparent 58%)',
          padding: '72px',
          color: '#f4eee6',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: '#e8834a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#241e1a',
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ fontSize: 26, letterSpacing: -0.5 }}>Artist Webdesign</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 82, lineHeight: 1.05, letterSpacing: -3, fontWeight: 700 }}>
            Erst zuhören,
          </div>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1.05,
              letterSpacing: -3,
              fontWeight: 700,
              color: '#e8834a',
            }}
          >
            dann bauen.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: '#c4b5a6', maxWidth: 900 }}>
            Individuell entwickelte Websites für Artists und kleine Unternehmen.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 40, fontSize: 24, color: '#9c8c7c' }}>
          <div>Onepager ab 500 €</div>
          <div>Entwurf für 40 €</div>
          <div>In 1 bis 3 Wochen online</div>
        </div>
      </div>
    ),
    size
  )
}
