export const useMobileMenu = () => {
  const mobileMenuOpen = ref(false)
  const router = useRouter()

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    mobileMenuOpen.value = false
  }

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && mobileMenuOpen.value) {
      closeMobileMenu()
    }
  }

  // Close mobile menu on route change
  router.afterEach(() => {
    closeMobileMenu()
  })

  onMounted(() => {
    document.addEventListener('keydown', handleEscape)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })

  return {
    mobileMenuOpen: readonly(mobileMenuOpen),
    toggleMobileMenu,
    closeMobileMenu
  }
} 