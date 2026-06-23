# GitHub Copilot Fundamentals (GH-300 Part 1)

# Trainer Companion Platform

## Executive Summary

Build a Trainer Companion Platform for delivering **GitHub Copilot Fundamentals Part 1 (GH-300)** workshops.

This platform is not a traditional LMS.

It is a modern, visual, instructor-led training application used by a Technical Trainer during live sessions.

The trainer shares the screen and uses the platform as:

* Presentation deck
* Learning journey map
* Demo guide
* Lab guide
* Quiz facilitator
* Trainer playbook

The platform should help deliver engaging GitHub Copilot workshops while showcasing the power of GitHub Copilot itself.

---

# Vision

Create the best trainer-first experience for delivering GitHub Copilot workshops.

Instead of PowerPoint slides, PDFs, Word documents, and scattered notes, the trainer has a single web application that contains:

* Session flow
* Visual explanations
* Live demos
* Exercises
* Discussion prompts
* Quizzes
* Trainer notes

---

# Core Principles

## Trainer First

The platform serves the trainer.

Participants are consumers of the training experience.

## Visual First

Avoid long text.

Transform content into:

* Diagrams
* Timelines
* Comparison cards
* Workflows
* Architecture views
* Interactive visual journeys

## Practical First

Target ratio:

* 60% Practical
* 40% Theory

Every concept should lead to:

* Demo
* Discussion
* Exercise

## Workshop First

Every page should help answer:

"How does this help me deliver the next 5 minutes of training?"

---

# Target Training Format

## Audience

Developers

## Delivery

Instructor-led

## Duration

5 Days

## Session Length

45 Minutes

## Learning Style

Live workshop

Screen sharing

Guided exercises

Interactive discussion

---

# Learning Journey

```text
Introduction
    ↓
What is GitHub Copilot?
    ↓
Copilot Fundamentals
    ↓
Prompt Engineering
    ↓
Code Generation
    ↓
Code Explanation
    ↓
Testing & Documentation
    ↓
GitHub Actions Lab
    ↓
Copilot Spaces Lab
    ↓
Final Challenge
```

---

# Course Structure

## Day 1

### Module 1

Introduction to GitHub Copilot

Topics

* What is GitHub Copilot
* AI-assisted development
* Supported IDEs
* Business value
* Real-world use cases

Trainer Demo

* First Copilot experience

Quiz

* 5 questions

---

## Day 2

### Module 2

Prompting Fundamentals

Topics

* Effective prompts
* Context
* Iterative prompting
* Prompt patterns

Trainer Demo

* Bad prompt vs good prompt

Exercise

* Improve prompts

Quiz

* 5 questions

---

## Day 3

### Module 3

Code Generation

Topics

* Function generation
* API development
* Refactoring
* Boilerplate generation

Trainer Demo

* Build a small feature using Copilot

Exercise

* Generate API endpoints

Quiz

* 5 questions

---

## Day 4

### Module 4

Testing, Documentation & Knowledge Sharing

Topics

* Unit tests
* Integration tests
* Documentation generation
* Code explanation

Trainer Demo

* Generate tests
* Generate README

Exercise

* Improve test coverage

Quiz

* 5 questions

---

## Day 5

### Module 5

Hands-On Labs

Lab 1

Getting Started with GitHub Copilot

Repository

https://github.com/bibzaznenorsys/skills-getting-started-with-github-copilot

Lab 2

Scale Institutional Knowledge using Copilot Spaces

Repository

https://github.com/bibzaznenorsys/skills-scale-institutional-knowledge-using-copilot-spaces

Final Challenge

Participants solve a realistic development scenario using Copilot.

Quiz

Final assessment.

---

# Real-World Use Cases

## Legacy Modernization

Scenario

Refactor a legacy application.

How Copilot Helps

* Understand code
* Explain functions
* Generate refactoring suggestions

---

## API Development

Scenario

Build REST endpoints quickly.

How Copilot Helps

* Generate controllers
* Generate DTOs
* Generate validation rules

---

## Testing

Scenario

Increase test coverage.

How Copilot Helps

* Generate unit tests
* Generate mocks
* Explain failures

---

## Documentation

Scenario

New developer onboarding.

How Copilot Helps

* Generate README files
* Generate architecture summaries
* Explain complex code

---

## Knowledge Sharing

Scenario

Enterprise team onboarding.

How Copilot Spaces Helps

* Centralized knowledge
* Faster onboarding
* Better discoverability

---

# Platform Features

## Dashboard

Purpose

Training control center.

Contains

* Today's session
* Progress roadmap
* Session objectives
* Quick navigation

---

## Learning Journey

Visual roadmap of the workshop.

Features

* Progress indicators
* Session status
* Module navigation

---

## Session View

Each training unit contains:

### Tell

Concept explanation.

### Show

Visual explanation.

### Demo

Trainer demonstration steps.

### Discuss

Questions for participants.

### Practice

Hands-on activity.

---

## Demo Mode

Optimized for screen sharing.

Features

* Large typography
* Full-screen mode
* Minimal distractions
* Presenter notes

---

## Exercise Mode

Features

* Step-by-step instructions
* Copyable prompts
* GitHub links
* Expected outcomes
* Troubleshooting tips

---

## Quiz Mode

Features

* Reveal answers
* Discussion prompts
* Session wrap-up

---

## Trainer Notes

Private section.

Contains

* Key talking points
* Common mistakes
* Timing guidance
* Backup demos

---

# UI/UX Requirements

## Inspiration

* Microsoft Learn
* GitHub Skills
* Duolingo
* Linear
* Raycast

---

## Avoid

* Long text blocks
* Documentation-heavy pages
* Traditional LMS layouts

---

## Prefer

* Cards
* Visual timelines
* Infographics
* Progress maps
* Interactive diagrams
* Callout sections
* Demo checklists

---

# Technical Architecture

## Phase 1 (Immediate MVP)

Frontend

* React
* Material UI

Content

* Markdown
* JSON

Hosting

* Vercel

Authentication

* Optional

Backend

* None required

Database

* None required

Purpose

Deliver workshops immediately.

---

## Content Structure

```text
content/

day1/
  module.json

day2/
  module.json

day3/
  module.json

day4/
  module.json

day5/
  module.json
```

---

## Sample Module Schema

```json
{
  "id": "module-1",
  "title": "Introduction to GitHub Copilot",
  "duration": 45,
  "objectives": [],
  "sections": [],
  "demo": {},
  "quiz": [],
  "trainerNotes": []
}
```

---

# Future Architecture

## Phase 2

Introduce

* NestJS
* MySQL
* Authentication
* Content Management
* Analytics

---

## Phase 3

Introduce

* Learner accounts
* Progress tracking
* Certificates
* Multi-language support
* AI trainer assistant
* Cohort management

---

# Success Criteria

The platform succeeds if a trainer can:

* Open the application
* Share the screen
* Deliver a complete session
* Run demonstrations
* Launch exercises
* Facilitate discussions
* Conduct quizzes
* Complete a full 5-day workshop

without needing:

* PowerPoint
* PDF documents
* Word notes
* Separate trainer guides

The platform becomes the single source of truth for delivering GitHub Copilot Fundamentals (GH-300 Part 1).
