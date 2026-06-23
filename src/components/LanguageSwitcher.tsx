import { Button, Stack } from '@mui/material'
import { useLanguage } from '../hooks/useLanguage'

export function LanguageSwitcher() {
  const { language, setLanguage, languages } = useLanguage()

  return (
    <Stack direction="row" spacing={0.5}>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          size="small"
          variant={language === lang.code ? 'contained' : 'outlined'}
          onClick={() => setLanguage(lang.code)}
          sx={{ minWidth: 50 }}
        >
          {lang.code.toUpperCase()}
        </Button>
      ))}
    </Stack>
  )
}
