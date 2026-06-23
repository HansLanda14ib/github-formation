import type { CourseModule } from '../../types/module'
import i18n from '../../i18n/index'

// Import French translation data
import frTranslationsFull from '../../locales/fr/modules-full.json'
import frTranslationsExtended from '../../locales/fr/modules-extended.json'

// Define types for translation objects
interface TranslationSection {
  title?: string
  body?: string
  bullets?: string[]
}

interface TranslationExercise {
  title?: string
  steps?: string[]
  expectedOutcomes?: string[]
  troubleshooting?: string[]
}

interface TranslationQuiz {
  id: string
  question?: string
  options?: string[]
  discussionPrompt?: string
}

interface TranslationModule {
  title?: string
  objectives?: string[]
  sections?: Record<string, TranslationSection>
  exercise?: TranslationExercise
  quiz?: TranslationQuiz[]
  agenda?: Array<{ label: string; minutes: number; focus: string }>
  trainerNotes?: string[]
}

type TranslationsModules = Record<string, TranslationModule>

const moduleFiles = import.meta.glob('../../content/day*/module.json', {
  eager: true,
})

// Merge French translations from both files
const frTranslations = {
  modules: {
    ...(frTranslationsFull.modules as TranslationsModules),
    ...(frTranslationsExtended.modules as TranslationsModules),
  },
}

function ensureModuleShape(moduleData: Partial<CourseModule>, path: string): CourseModule {
  if (!moduleData.id || !moduleData.title || !moduleData.day) {
    throw new Error(`Invalid module content in ${path}`)
  }

  return {
    id: moduleData.id,
    day: moduleData.day,
    title: moduleData.title,
    duration: moduleData.duration ?? 45,
    objectives: moduleData.objectives ?? [],
    agenda: moduleData.agenda ?? [],
    units: moduleData.units ?? [],
    officialAlignment: moduleData.officialAlignment ?? [],
    officialDocs: moduleData.officialDocs ?? [],
    sections: moduleData.sections ?? [],
    demo: moduleData.demo ?? { title: 'Demo', steps: [] },
    exercise: moduleData.exercise ?? {
      title: 'Exercise',
      steps: [],
      expectedOutcomes: [],
      troubleshooting: [],
      links: [],
    },
    quiz: moduleData.quiz ?? [],
    trainerNotes: moduleData.trainerNotes ?? [],
  }
}

function applyFrenchTranslations(module: CourseModule): CourseModule {
  const dayKey = `day${module.day}` as keyof typeof frTranslations.modules
  const translation = frTranslations.modules[dayKey] as TranslationModule | undefined

  if (!translation) {
    return module
  }

  const translated = { ...module }

  // Apply basic fields
  if (translation.title) translated.title = translation.title
  if (translation.objectives) translated.objectives = translation.objectives
  if (translation.agenda) translated.agenda = translation.agenda
  if (translation.trainerNotes) translated.trainerNotes = translation.trainerNotes

  // Apply section translations
  if (translation.sections) {
    translated.sections = translated.sections.map((section) => {
      const sectionKey = section.id as keyof typeof translation.sections
      const sectionTranslation = translation.sections?.[sectionKey]
      if (sectionTranslation) {
        return {
          ...section,
          title: sectionTranslation.title || section.title,
          body: sectionTranslation.body || section.body,
          bullets: sectionTranslation.bullets || section.bullets,
        }
      }
      return section
    })
  }

  // Apply exercise translations
  if (translation.exercise) {
    translated.exercise = {
      ...translated.exercise,
      title: translation.exercise.title || translated.exercise.title,
      steps: translation.exercise.steps || translated.exercise.steps,
      expectedOutcomes: translation.exercise.expectedOutcomes || translated.exercise.expectedOutcomes,
      troubleshooting: translation.exercise.troubleshooting || translated.exercise.troubleshooting,
    }
  }

  // Apply quiz translations
  if (translation.quiz && translated.quiz) {
    translated.quiz = translated.quiz.map((question) => {
      const translatedQuestion = translation.quiz?.find((q) => q.id === question.id)
      if (translatedQuestion) {
        return {
          ...question,
          question: translatedQuestion.question || question.question,
          options: translatedQuestion.options || question.options,
          discussionPrompt: translatedQuestion.discussionPrompt || question.discussionPrompt,
        }
      }
      return question
    })
  }

  return translated
}

function applyCurrentLanguageTranslations(module: CourseModule): CourseModule {
  const currentLanguage = i18n.language || 'en'
  if (currentLanguage === 'fr') {
    return applyFrenchTranslations(module)
  }
  return module
}

export function getAllModules(): CourseModule[] {
  const modules = Object.entries(moduleFiles).map(([path, value]) => {
    const raw = value as unknown
    const content = (
      typeof raw === 'object' && raw !== null && 'default' in raw
        ? (raw as { default?: Partial<CourseModule> }).default
        : (raw as Partial<CourseModule> | undefined)
    )
    if (!content) {
      throw new Error(`Missing module content in ${path}`)
    }
    return ensureModuleShape(content, path)
  })

  return modules.sort((a, b) => a.day - b.day).map((module) => applyCurrentLanguageTranslations(module))
}

export function getModuleByDay(day: number): CourseModule | undefined {
  return getAllModules().find((moduleData) => moduleData.day === day)
}
