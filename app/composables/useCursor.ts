export const useCursor = () => {
  const cursorEnabled = ref(true)

  const toggleCursor = () => {
    cursorEnabled.value = !cursorEnabled.value
  }

  return {
    cursorEnabled: readonly(cursorEnabled),
    toggleCursor
  }
} 