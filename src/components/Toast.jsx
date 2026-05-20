import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ toasts, removeToast }) {
  return (
    <div
      className="fixed top-24 right-4 z-[100] flex flex-col gap-2 pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence>
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function ToastItem({ toast, onRemove }) {
  useEffect(() => {
    const timer = setTimeout(() => onRemove(toast.id), 4000)
    return () => clearTimeout(timer)
  }, [toast.id, onRemove])

  const isSuccess = toast.type === 'success'

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.9 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`pointer-events-auto flex items-start gap-3 px-4 py-3 rounded-2xl shadow-2xl max-w-xs
        ${isSuccess ? 'bg-green-600' : 'bg-red-500'} text-white`}
      role="alert"
    >
      <span className="text-xl mt-0.5">{isSuccess ? '✅' : '❌'}</span>
      <div className="flex-1">
        <p className="font-display font-700 text-sm">{toast.title}</p>
        <p className="font-body text-xs mt-0.5 opacity-90">{toast.message}</p>
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="text-white/70 hover:text-white text-lg leading-none mt-0.5"
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </motion.div>
  )
}
