import { useToast } from 'primevue/usetoast';
import type { ToastMessageOptions } from "primevue"

export function useAlert() {
  const toast = useToast()
  const { t } = useI18n()

  const show = (message: string, severity: ToastMessageOptions['severity']) => {
    toast.add({
      severity: severity,
      summary: t(`alerts.${message}`),
      life: 3000
    })
  }

  const success = (message: string) => show(message, 'success')

  const error = (message: string) => show(message, 'error')

  return {
    success,
    error,
  }
}