import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AppLayout } from '../components/AppLayout'
import { getAllModules } from '../lib/content/loadModules'

export function JourneyPage() {
  const { t } = useTranslation('common')
  const modules = getAllModules()

  return (
    <AppLayout
      title={t('journey.title')}
      subtitle={t('journey.subtitle')}
      modules={modules}
    >
      <Stack spacing={2.5}>
        {modules.map((moduleData) => (
          <Card key={moduleData.id}>
            <CardContent>
              <Typography variant="overline" color="primary.main">
                {t('journey.module')} {moduleData.day}
              </Typography>
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                {moduleData.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                {moduleData.units.length} {t('journey.officialUnits')} • {moduleData.objectives.join(' • ')}
              </Typography>
              <Button component={RouterLink} to={`/session/${moduleData.day}`} variant="outlined">
                {t('journey.openSession')}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </AppLayout>
  )
}