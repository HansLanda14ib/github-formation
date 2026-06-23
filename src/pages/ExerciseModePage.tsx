import { Alert, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AppLayout } from '../components/AppLayout'
import { getAllModules, getModuleByDay } from '../lib/content/loadModules'

export function ExerciseModePage() {
  const { t } = useTranslation('common')
  const modules = getAllModules()
  const { day } = useParams()
  const dayNumber = Number(day)
  const current = getModuleByDay(dayNumber)

  if (!current) {
    return (
      <AppLayout title={t('exercise.title')} subtitle={t('exercise.title')} modules={modules}>
        <Alert severity="error">{t('errors.moduleNotFound')}</Alert>
      </AppLayout>
    )
  }

  return (
    <AppLayout
      title={`${t('exercise.title')} · Day ${current.day}`}
      subtitle={t('exercise.subtitle')}
      modules={modules}
      day={current.day}
    >
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
              {current.exercise.title}
            </Typography>
            <Stack component="ol" spacing={1} sx={{ m: 0, pl: 3 }}>
              {current.exercise.steps.map((step) => (
                <Typography component="li" key={step}>
                  {step}
                </Typography>
              ))}
            </Stack>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">{t('exercise.expectedOutcomes')}</Typography>
            <Stack component="ul" spacing={0.7} sx={{ m: 0, pl: 3, mt: 1 }}>
              {current.exercise.expectedOutcomes.map((item) => (
                <Typography component="li" key={item}>
                  {item}
                </Typography>
              ))}
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">{t('exercise.troubleshootingTips')}</Typography>
            <Stack component="ul" spacing={0.7} sx={{ m: 0, pl: 3, mt: 1 }}>
              {current.exercise.troubleshooting.map((tip) => (
                <Typography component="li" key={tip}>
                  {tip}
                </Typography>
              ))}
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1.2 }}>
              {t('exercise.labLinks')}
            </Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.2}>
              {current.exercise.links.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  endIcon={<OpenInNewIcon />}
                  variant="outlined"
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </AppLayout>
  )
}