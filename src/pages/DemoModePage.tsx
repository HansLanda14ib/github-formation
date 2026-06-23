import {
  Alert,
  Box,
  Card,
  CardContent,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AppLayout } from '../components/AppLayout'
import { getAllModules, getModuleByDay } from '../lib/content/loadModules'
import { useLocalStorageState } from '../lib/useLocalStorageState'

export function DemoModePage() {
  const { t } = useTranslation('common')
  const modules = getAllModules()
  const { day } = useParams()
  const dayNumber = Number(day)
  const current = getModuleByDay(dayNumber)
  const [showNotes, setShowNotes] = useLocalStorageState('trainer:show-notes', false)

  if (!current) {
    return (
      <AppLayout title={t('demo.title')} subtitle={t('demo.title')} modules={modules}>
        <Alert severity="error">{t('errors.moduleNotFound')}</Alert>
      </AppLayout>
    )
  }

  return (
    <AppLayout
      title={`${t('demo.title')} · Day ${current.day}`}
      subtitle={t('demo.subtitle')}
      modules={modules}
      day={current.day}
    >
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              sx={{ justifyContent: 'space-between', alignItems: { md: 'center' } }}
            >
              <Box>
                <Typography variant="h5">{current.demo.title}</Typography>
                <Typography color="text.secondary">{current.title}</Typography>
              </Box>
              <FormControlLabel
                control={<Switch checked={showNotes} onChange={(_, checked) => setShowNotes(checked)} />}
                label={showNotes ? t('demo.trainerNotesVisible') : t('demo.trainerNotesHidden')}
              />
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Stack component="ol" spacing={1.2} sx={{ m: 0, pl: 3 }}>
              {current.demo.steps.map((step) => (
                <Typography component="li" variant="h6" key={step}>
                  {step}
                </Typography>
              ))}
            </Stack>
          </CardContent>
        </Card>

        {showNotes && (
          <Card sx={{ border: '1px dashed', borderColor: 'secondary.main' }}>
            <CardContent>
              <Typography variant="h6" color="secondary.main" sx={{ mb: 1 }}>
                Trainer Notes
              </Typography>
              <Stack component="ul" spacing={0.7} sx={{ m: 0, pl: 3 }}>
                {current.trainerNotes.map((note) => (
                  <Typography component="li" key={note}>
                    {note}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>
        )}
      </Stack>
    </AppLayout>
  )
}