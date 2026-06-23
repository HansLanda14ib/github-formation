// Module 3 case: inventory request endpoint logic (good prompt target).

const items = new Set(['ITM-9001', 'ITM-9002'])
const allowedStatus = new Set(['PENDING', 'APPROVED'])

function createInventoryRequest(payload) {
  if (!payload?.requestId || !payload?.itemId) {
    return { status: 400, body: { error: 'requestId and itemId are required' } }
  }

  if (!items.has(payload.itemId)) {
    return { status: 404, body: { error: 'Item not found' } }
  }

  if (typeof payload.quantity !== 'number' || payload.quantity <= 0) {
    return { status: 400, body: { error: 'quantity must be > 0' } }
  }

  if (!allowedStatus.has(payload.status)) {
    return { status: 400, body: { error: 'status must be PENDING or APPROVED' } }
  }

  return {
    status: 201,
    body: {
      requestId: payload.requestId,
      itemId: payload.itemId,
      quantity: payload.quantity,
      status: payload.status,
    },
  }
}

const sample = {
  requestId: 'REQ-21',
  itemId: 'ITM-9001',
  quantity: 10,
  status: 'PENDING',
}

console.log('Module 3 output:', createInventoryRequest(sample))

export { createInventoryRequest }
