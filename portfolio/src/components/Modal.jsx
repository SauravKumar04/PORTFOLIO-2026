import { useEffect } from 'react'

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border-2 border-black p-8 sm:p-10 my-8 transition duration-300 ease-out max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 border-b-4 border-black pb-4 mb-6">
          <h3 className="text-2xl sm:text-3xl font-serif font-black uppercase tracking-tight">{title}</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="border border-black px-3 py-1 text-sm hover:scale-[1.02] active:scale-[0.98] transition duration-200 ease-out"
          >
            Close
          </button>
        </div>
        <div className="mt-6 text-base leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
