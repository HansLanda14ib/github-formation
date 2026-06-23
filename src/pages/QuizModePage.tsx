import {
  Alert,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AppLayout } from '../components/AppLayout'
import { getAllModules, getModuleByDay } from '../lib/content/loadModules'
import { useLocalStorageState } from '../lib/useLocalStorageState'

export function QuizModePage() {
  const { t } = useTranslation('common')
  const modules = getAllModules()
  const { day } = useParams()
  const dayNumber = Number(day)
  const current = getModuleByDay(dayNumber)
  const [revealedQuestions, setRevealedQuestions] = useLocalStorageState<string[]>(
    `quiz:${dayNumber}:revealed`,
    [],
  )

  if (!current) {
    return (
      <AppLayout title={t('quiz.title')} subtitle={t('quiz.title')} modules={modules}>
        <Alert severity="error">{t('errors.moduleNotFound')}</Alert>
      </AppLayout>
    )
  }

  return (
    <AppLayout
      title={`${t('quiz.title')} · Day ${current.day}`}
      subtitle={t('quiz.subtitle')}
      modules={modules}
      day={current.day}
    >
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Typography variant="h6">{t('quiz.facilitatorControls')}</Typography>
              <Chip color="primary" label={`${revealedQuestions.length}/${current.quiz.length} ${t('quiz.revealed')}`} />
            </Stack>
            <Button
              sx={{ mt: 1.5 }}
              variant="outlined"
              onClick={() => setRevealedQuestions([])}
            >
              {t('quiz.resetReveals')}
            </Button>
          </CardContent>
        </Card>

        {current.quiz.map((question, index) => {
          const isVisible = revealedQuestions.includes(question.id)
          return (
            <Card key={question.id}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Q{index + 1}. {question.question}
                </Typography>
                <Stack spacing={0.8}>
                  {question.options.map((option, optionIndex) => {
                    const shouldHighlight = isVisible && optionIndex === question.answerIndex
                    return (
                      <Typography
                        key={option}
                        sx={{
                          p: 1,
                          borderRadius: 1,
                          backgroundColor: shouldHighlight
                            ? 'rgba(14, 116, 144, 0.16)'
                            : 'transparent',
                        }}
                      >
                        {option}
                      </Typography>
                    )
                  })}
                </Stack>
                <Divider sx={{ my: 1.5 }} />
                <Typography color="text.secondary">{t('quiz.discuss')}: {question.discussionPrompt}</Typography>
                <Button
                  sx={{ mt: 1.5 }}
                  variant={isVisible ? 'contained' : 'outlined'}
                  onClick={() => {
                    setRevealedQuestions((currentRevealed) => {
                      if (currentRevealed.includes(question.id)) {
                        return currentRevealed
                      }
                      return [...currentRevealed, question.id]
                    })
                  }}
                >
                  {isVisible ? t('quiz.answerRevealed') : t('quiz.revealAnswer')}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </Stack>
    </AppLayout>
  )
}