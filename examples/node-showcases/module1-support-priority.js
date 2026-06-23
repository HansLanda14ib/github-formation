// Module 1 case: fair and explainable support ticket prioritization.

const PRIORITY_SCORES = {
  low: 1,
  medium: 2,
  high: 3,
}

function computeSupportPriority(ticket) {
  if (!ticket || !ticket.ticketId || !ticket.category || !ticket.urgency) {
    throw new Error('Invalid ticket payload')
  }

  const score = PRIORITY_SCORES[ticket.urgency] ?? 1
  const priority = score >= 3 ? 'HIGH' : score === 2 ? 'MEDIUM' : 'LOW'

  return {
    ticketId: ticket.ticketId,
    priority,
    reasonCodes: ['category', 'urgency', 'submission_time'],
    requiresHumanReview: true,
  }
}

const sampleTicket = {
  ticketId: 'SUP-104',
  category: 'counseling',
  urgency: 'medium',
  submittedAt: '2026-06-21T09:30:00Z',
  studentId: 'STD-2001',
}

console.log('Module 1 output:', computeSupportPriority(sampleTicket))

export { computeSupportPriority }
