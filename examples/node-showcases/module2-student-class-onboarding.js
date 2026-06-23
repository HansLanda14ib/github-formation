// Module 2 case: student and class onboarding handlers (Express-style).

const db = {
  students: new Map(),
  classes: new Map(),
}

function createStudent(payload) {
  if (!payload?.studentId || !payload?.fullName || !payload?.email) {
    return { status: 400, body: { error: 'Missing required student fields' } }
  }

  if (db.students.has(payload.studentId)) {
    return { status: 409, body: { error: 'Student already exists' } }
  }

  db.students.set(payload.studentId, payload)
  return { status: 201, body: payload }
}

function createClass(payload) {
  if (!payload?.classCode || !payload?.teacher) {
    return { status: 400, body: { error: 'Missing required class fields' } }
  }

  if (db.classes.has(payload.classCode)) {
    return { status: 409, body: { error: 'Class already exists' } }
  }

  db.classes.set(payload.classCode, payload)
  return { status: 201, body: payload }
}

const student = {
  studentId: 'STD-3007',
  fullName: 'Sara Idrissi',
  email: 'sara.idrissi@school.edu',
}

const clazz = {
  classCode: 'MATH-8A',
  teacher: 'Mr. Karim',
  room: 'B12',
}

console.log('Create student:', createStudent(student))
console.log('Create class:', createClass(clazz))

export { createStudent, createClass }
