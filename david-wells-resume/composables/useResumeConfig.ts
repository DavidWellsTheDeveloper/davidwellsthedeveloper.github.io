/**
 * Resume Configuration Composable
 *
 * Provides type-safe access to environment variables while enforcing
 * constitutional principles of authentic representation and clean design.
 *
 * Constitutional Compliance:
 * - Only exposes verified configuration
 * - Maintains clean, purposeful structure
 * - Optimizes for performance
 */

export interface ResumeConfig {
  // Application metadata
  name: string
  description: string
  url: string
  environment: 'development' | 'staging' | 'production'

  // Constitutional principles
  constitutional: {
    authenticRepresentation: boolean
    cleanDesign: boolean
    fastLoading: boolean
  }

  // Performance targets (milliseconds)
  performance: {
    targetLoadTime: number
    targetFCP: number // First Contentful Paint
    targetLCP: number // Largest Contentful Paint
  }

  // Public contact information
  contact: {
    email?: string
    phone?: string
    location?: string
  }

  // Social media profiles
  social: {
    linkedin?: string
    github?: string
  }

  // Analytics and tracking
  analytics: {
    googleAnalytics?: string
    gtmId?: string
  }

  // Feature flags
  features: {
    devTools: boolean
    cspEnabled: boolean
    contactForm: boolean
  }
}

/**
 * Type-safe environment variable helper
 */
function getEnvString(value: unknown, defaultValue: string): string {
  return typeof value === 'string' ? value : defaultValue
}

function getEnvOptionalString(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined
}

/**
 * Validates and parses environment variables with constitutional compliance
 */
function parseEnvironmentConfig(): ResumeConfig {
  const config = useRuntimeConfig()

  // Validate constitutional principles are enabled
  const authenticRepresentation =
    getEnvString(config.public.authenticRepresentation, 'false') === 'true'
  const cleanDesign =
    getEnvString(config.public.cleanDesign, 'false') === 'true'
  const fastLoading =
    getEnvString(config.public.fastLoading, 'false') === 'true'

  // Ensure constitutional compliance
  if (!authenticRepresentation || !cleanDesign || !fastLoading) {
    console.warn(
      '⚠️ Constitutional principles not fully enabled in environment'
    )
  }

  // Parse performance targets with constitutional defaults
  const performance = {
    targetLoadTime: parseInt(
      getEnvString(config.public.targetLoadTime, '3000')
    ),
    targetFCP: parseInt(getEnvString(config.public.targetFCP, '1500')),
    targetLCP: parseInt(getEnvString(config.public.targetLCP, '2500')),
  }

  // Validate performance targets meet constitutional requirements
  if (performance.targetLoadTime > 3000) {
    console.warn(
      '⚠️ Load time target exceeds constitutional requirement of 3000ms'
    )
  }

  const nodeEnv = getEnvString(config.public.nodeEnv, 'development')
  const environment =
    nodeEnv === 'production' || nodeEnv === 'staging'
      ? (nodeEnv as 'production' | 'staging')
      : ('development' as const)

  return {
    name: getEnvString(config.public.appName, 'Digital Resume'),
    description: getEnvString(
      config.public.appDescription,
      'Professional Digital Resume'
    ),
    url: getEnvString(config.public.appUrl, 'http://localhost:3000'),
    environment,

    constitutional: {
      authenticRepresentation,
      cleanDesign,
      fastLoading,
    },

    performance,

    contact: {
      email: getEnvOptionalString(config.public.email),
      phone: getEnvOptionalString(config.public.phone),
      location: getEnvOptionalString(config.public.location),
    },

    social: {
      linkedin: getEnvOptionalString(config.public.linkedin),
      github: getEnvOptionalString(config.public.github),
    },

    analytics: {
      googleAnalytics: getEnvOptionalString(config.public.googleAnalytics),
      gtmId: getEnvOptionalString(config.public.gtmId),
    },

    features: {
      devTools: environment === 'development',
      cspEnabled: getEnvString(config.public.cspEnabled, 'false') === 'true',
      contactForm: !!getEnvOptionalString(config.public.email), // Enable contact form if email is configured
    },
  }
}

/**
 * Resume configuration composable
 *
 * Provides reactive access to validated environment configuration
 * with constitutional compliance enforcement.
 */
export const useResumeConfig = () => {
  const config = useState<ResumeConfig>('resume.config', parseEnvironmentConfig)

  // Constitutional compliance validation
  const isConstitutionallyCompliant = computed(() => {
    const { constitutional, performance } = config.value

    return (
      constitutional.authenticRepresentation &&
      constitutional.cleanDesign &&
      constitutional.fastLoading &&
      performance.targetLoadTime <= 3000
    )
  })

  // Environment-specific utilities
  const isDevelopment = computed(
    () => config.value.environment === 'development'
  )
  const isProduction = computed(() => config.value.environment === 'production')
  const isStaging = computed(() => config.value.environment === 'staging')

  // Performance monitoring helpers
  const performanceTarget = (metric: keyof ResumeConfig['performance']) => {
    return config.value.performance[metric]
  }

  // Contact information with privacy protection
  const getPublicContact = () => {
    const { contact } = config.value

    // Only return contact info that's been explicitly configured
    return Object.fromEntries(
      Object.entries(contact).filter(([_, value]) => value !== undefined)
    )
  }

  // Social media links with validation
  const getSocialLinks = () => {
    const { social } = config.value

    return Object.fromEntries(
      Object.entries(social).filter(([_, url]) => {
        // Only return valid URLs
        return url && url.startsWith('https://')
      })
    )
  }

  // Analytics configuration
  const getAnalyticsConfig = () => {
    const { analytics, features } = config.value

    // Only return analytics if we're in production and properly configured
    if (!isProduction.value) return {}

    return analytics
  }

  return {
    config: readonly(config),

    // Constitutional compliance
    isConstitutionallyCompliant,

    // Environment helpers
    isDevelopment,
    isProduction,
    isStaging,

    // Utilities
    performanceTarget,
    getPublicContact,
    getSocialLinks,
    getAnalyticsConfig,
  }
}
