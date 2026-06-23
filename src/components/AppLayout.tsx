import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { CourseModule } from '../types/module'
import { LanguageSwitcher } from './LanguageSwitcher'

interface AppLayoutProps {
  title: string
  subtitle: string
  modules: CourseModule[]
  day?: number
  children: React.ReactNode
}

export function AppLayout({ title, subtitle, modules, day, children }: AppLayoutProps) {
  const location = useLocation()
  const { t } = useTranslation('common')

  const navItems = [
    { label: t('navigation.dashboard'), to: '/' },
    { label: t('navigation.journey'), to: '/journey' },
  ]

  return (
    <Box className="root-bg">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 3,
            bgcolor: 'background.paper',
            overflow: 'hidden',
            boxShadow: '0 16px 44px rgba(14, 116, 144, 0.12)',
          }}
        >
          <Box
            sx={{
              p: 3,
              background:
                'linear-gradient(115deg, rgba(14, 116, 144, 0.16), rgba(245, 158, 11, 0.14))',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: 'flex-start' }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4">{title}</Typography>
                <Typography color="text.secondary" sx={{ mt: 0.8 }}>
                  {subtitle}
                </Typography>
              </Box>
              <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
                <LanguageSwitcher />
                {navItems.map((item) => (
                  <Button
                    key={item.to}
                    component={RouterLink}
                    to={item.to}
                    variant={location.pathname === item.to ? 'contained' : 'outlined'}
                    size="small"
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 2, flexWrap: 'wrap' }}>
              {modules.map((moduleData) => (
                <Chip
                  key={moduleData.id}
                  component={RouterLink}
                  clickable
                  to={`/session/${moduleData.day}`}
                  color={moduleData.day === day ? 'primary' : 'default'}
                  label={`Module ${moduleData.day}: ${moduleData.title}`}
                  sx={{ textDecoration: 'none' }}
                />
              ))}
            </Stack>
          </Box>
          <Box sx={{ p: { xs: 2, md: 3 } }}>{children}</Box>
        </Box>
      </Container>
    </Box>
  )
}