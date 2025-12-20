export default function LoadingScreen({ isVisible }) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
      {/* Background animated line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black to-transparent animate-pulse"></div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Animated loading text */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
              <span className="font-bold text-lg">S</span>
            </div>
          </div>

          {/* Loading text with typing animation */}
          <div className="flex items-baseline gap-1">
            <span className="text-sm uppercase tracking-[0.2em] font-medium">
              Loading Portfolio
            </span>
            <span className="inline-flex gap-1">
              <span className="w-1 h-1 bg-black rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
              <span className="w-1 h-1 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-1 h-1 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-0.5 bg-gray-200 overflow-hidden">
          <div className="h-full bg-black animate-pulse" style={{
            animation: 'loading 2s ease-in-out infinite',
            width: '100%'
          }}></div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
      `}</style>
    </div>
  )
}
