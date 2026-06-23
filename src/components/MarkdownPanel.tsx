import { Box } from '@mui/material'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownPanelProps {
  content: string
}

const docsImages = import.meta.glob('../../docs/*.{png,jpg,jpeg,gif,webp,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const imageByName = Object.fromEntries(
  Object.entries(docsImages).map(([path, url]) => [path.split('/').pop() ?? path, url]),
)

function resolveImageSource(src?: string): string {
  if (!src) {
    return ''
  }

  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) {
    return src
  }

  const fileName = src.replace(/^\.\//, '').split('/').pop() ?? src
  return imageByName[fileName] ?? src
}

export function MarkdownPanel({ content }: MarkdownPanelProps) {
  return (
    <Box
      sx={{
        '& p': { mb: 1.2, mt: 0 },
        '& ul': { mt: 1, mb: 0, pl: 3 },
        '& img': {
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
          borderRadius: 1,
          mt: 1.5,
          mb: 1.5,
        },
      }}
    >
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => <img src={resolveImageSource(src)} alt={alt ?? ''} loading="lazy" />,
        }}
      >
        {content}
      </Markdown>
    </Box>
  )
}