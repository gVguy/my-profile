export const useLoading = <T extends (...args: any[]) => Promise<void>>(callback: T) => {

  const isLoading = ref(false)

  const load = async (...args: any[]) => {
    isLoading.value = true
    await callback(...args)
    isLoading.value = false
  }

  return {
    isLoading,
    load: load as T
  }

}
