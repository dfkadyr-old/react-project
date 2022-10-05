import { t } from 'i18next'
import { useEffect, useState } from 'react'

import { Button } from 'shared/ui/button'

// Component for testing ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false)

  const handleThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button onClick={handleThrow}>
      {t('throw error')}
    </Button>
  )
}