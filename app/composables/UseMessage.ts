import { useToast } from 'primevue/usetoast';
import type { ToastMessageOptions } from "primevue"

export function useMessage() {
  const toast = useToast()
  const { t } = useI18n()

  return {
    show: (message: string, severity: ToastMessageOptions['severity'] = 'success') => {
      toast.add({
        severity: severity,
        summary: t(`alerts.${message}`),
        life: 3000
      })
    }
  }
}