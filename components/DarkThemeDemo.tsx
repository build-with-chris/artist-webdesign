// Dark Theme UI Demo Snippet
// Verwende diese Klassen für konsistente Dark-Mode-Komponenten

export default function DarkThemeDemo() {
  return (
    <section className="min-h-screen bg-dark-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-dark-text mb-4">
            Elegantes Dark Theme
          </h2>
          <p className="text-xl text-dark-text/70 max-w-2xl mx-auto">
            Perfekt abgestimmte Farben für maximale Lesbarkeit und Eleganz
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Card Example 1 */}
          <div className="group bg-dark-surface rounded-2xl p-8 border border-dark-text/10 hover:border-dark-accent/50 transition-all duration-300 shadow-dark hover:shadow-dark-lg">
            <div className="w-12 h-12 rounded-xl bg-dark-accent/10 flex items-center justify-center mb-6 group-hover:bg-dark-accent/20 transition-colors">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-dark-text mb-3">
              Surface Card
            </h3>
            <p className="text-dark-text/60 leading-relaxed mb-6">
              Background: #151820
              <br />Border hover mit Accent
            </p>
            <button className="w-full px-6 py-3 bg-dark-accent text-white rounded-lg font-medium hover:bg-dark-accent-hover hover:shadow-dark-lg transition-all duration-300">
              Primary Button
            </button>
          </div>

          {/* Card Example 2 */}
          <div className="bg-dark-surface rounded-2xl p-8 border border-dark-text/10 shadow-dark">
            <div className="w-12 h-12 rounded-xl bg-dark-text/5 flex items-center justify-center mb-6">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-dark-text mb-3">
              Neutral Card
            </h3>
            <p className="text-dark-text/60 leading-relaxed mb-6">
              Text: #e8edf2
              <br />Opacity 60% für Beschreibung
            </p>
            <button className="w-full px-6 py-3 bg-dark-text/10 text-dark-text rounded-lg font-medium hover:bg-dark-text/20 hover:shadow-dark transition-all duration-300">
              Secondary Button
            </button>
          </div>

          {/* Card Example 3 */}
          <div className="bg-gradient-to-br from-dark-surface to-dark-bg rounded-2xl p-8 border border-dark-accent/30 shadow-dark-lg">
            <div className="w-12 h-12 rounded-xl bg-dark-accent flex items-center justify-center mb-6">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold text-dark-text mb-3">
              Accent Card
            </h3>
            <p className="text-dark-text/60 leading-relaxed mb-6">
              Accent: #f97316
              <br />Gradient Background
            </p>
            <button className="w-full px-6 py-3 bg-transparent border-2 border-dark-accent text-dark-accent rounded-lg font-medium hover:bg-dark-accent hover:text-white hover:shadow-dark-xl transition-all duration-300">
              Outline Button
            </button>
          </div>
        </div>

        {/* Button Variations */}
        <div className="bg-dark-surface rounded-2xl p-8 border border-dark-text/10">
          <h3 className="text-2xl font-bold text-dark-text mb-6">Button Styles</h3>
          <div className="flex flex-wrap gap-4">

            {/* Primary */}
            <button className="px-6 py-3 bg-dark-accent text-white rounded-lg font-medium hover:bg-dark-accent-hover hover:shadow-dark-lg transition-all duration-300">
              Primary
            </button>

            {/* Secondary */}
            <button className="px-6 py-3 bg-dark-text/10 text-dark-text rounded-lg font-medium hover:bg-dark-text/20 hover:shadow-dark transition-all duration-300">
              Secondary
            </button>

            {/* Outline */}
            <button className="px-6 py-3 bg-transparent border-2 border-dark-accent text-dark-accent rounded-lg font-medium hover:bg-dark-accent hover:text-white transition-all duration-300">
              Outline
            </button>

            {/* Ghost */}
            <button className="px-6 py-3 bg-transparent text-dark-text/70 rounded-lg font-medium hover:bg-dark-text/10 hover:text-dark-text transition-all duration-300">
              Ghost
            </button>

            {/* Pill Primary */}
            <button className="px-6 py-3 bg-dark-accent text-white rounded-full font-medium hover:bg-dark-accent-hover hover:shadow-dark-lg transition-all duration-300 flex items-center gap-2">
              Pill Button
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Color Palette Reference */}
        <div className="mt-12 bg-dark-surface rounded-2xl p-8 border border-dark-text/10">
          <h3 className="text-2xl font-bold text-dark-text mb-6">Farbpalette</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <div className="w-full h-20 bg-dark-bg rounded-lg border border-dark-text/20 mb-2"></div>
              <p className="text-sm text-dark-text/60">Background</p>
              <p className="text-xs text-dark-text/40 font-mono">#0f1115</p>
            </div>
            <div>
              <div className="w-full h-20 bg-dark-surface rounded-lg border border-dark-text/20 mb-2"></div>
              <p className="text-sm text-dark-text/60">Surface</p>
              <p className="text-xs text-dark-text/40 font-mono">#151820</p>
            </div>
            <div>
              <div className="w-full h-20 bg-dark-text rounded-lg mb-2"></div>
              <p className="text-sm text-dark-text/60">Text</p>
              <p className="text-xs text-dark-text/40 font-mono">#e8edf2</p>
            </div>
            <div>
              <div className="w-full h-20 bg-dark-accent rounded-lg mb-2"></div>
              <p className="text-sm text-dark-text/60">Accent</p>
              <p className="text-xs text-dark-text/40 font-mono">#f97316</p>
            </div>
            <div>
              <div className="w-full h-20 bg-dark-accent-hover rounded-lg mb-2"></div>
              <p className="text-sm text-dark-text/60">Accent Hover</p>
              <p className="text-xs text-dark-text/40 font-mono">#fb923c</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/*
VERWENDUNGSBEISPIELE:

Section:
className="min-h-screen bg-dark-bg py-20 px-6"

Card:
className="bg-dark-surface rounded-2xl p-8 border border-dark-text/10 hover:border-dark-accent/50 transition-all duration-300 shadow-dark hover:shadow-dark-lg"

Primary Button:
className="px-6 py-3 bg-dark-accent text-white rounded-lg font-medium hover:bg-dark-accent-hover hover:shadow-dark-lg transition-all duration-300"

Secondary Button:
className="px-6 py-3 bg-dark-text/10 text-dark-text rounded-lg font-medium hover:bg-dark-text/20 hover:shadow-dark transition-all duration-300"

Outline Button:
className="px-6 py-3 bg-transparent border-2 border-dark-accent text-dark-accent rounded-lg font-medium hover:bg-dark-accent hover:text-white transition-all duration-300"

Title:
className="text-4xl font-bold text-dark-text"

Subtitle:
className="text-xl text-dark-text/70"

Body Text:
className="text-dark-text/60 leading-relaxed"
*/
