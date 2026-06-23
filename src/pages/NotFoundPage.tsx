import { Box, Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function NotFoundPage() {
  const { t } = useTranslation('common')

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ mb: 1 }}>
        {t('notFound.title')}
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        {t('notFound.subtitle')}
      </Typography>
      <Button component={RouterLink} to="/" variant="contained">
        {t('notFound.returnToDashboard')}
      </Button>
    </Box>
  )
}