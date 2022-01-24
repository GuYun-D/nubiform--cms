import { ref } from 'vue'
import PageModal from '@/components/page-modal'

export function usePageModal() {
  const defaultInfo = ref({})
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const handleNewData = () => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }

  return [pageModalRef, defaultInfo, handleEditData, handleEditData]
}
