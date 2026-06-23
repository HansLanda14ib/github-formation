// Module 4 case: generate checklist from school policy rules (Spaces-like grounding).

const policyRules = {
  attendance: ['studentId required', 'classCode required', 'date required'],
  notifications: ['notify parent if absent', 'notify admin after 3 absences'],
}

function buildAttendanceChecklist(context) {
  if (!context?.studentId || !context?.classCode) {
    return { status: 400, message: 'studentId and classCode are required' }
  }

  return {
    status: 200,
    checklist: [
      ...policyRules.attendance,
      ...policyRules.notifications,
      `record request for ${context.studentId} in ${context.classCode}`,
    ],
    references: ['attendance-policy.md', 'parent-notification.md'],
  }
}

console.log(
  'Module 4 output:',
  buildAttendanceChecklist({ studentId: 'STD-3007', classCode: 'MATH-8A' }),
)

export { buildAttendanceChecklist }
