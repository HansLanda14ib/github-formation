// Module 5 case: stock update workflow with idempotency.

const inventory = new Map([['ITM-9001', 420]])
const processedUpdates = new Set()

// 
function createStockUpdate(payload) {
  if (!payload?.updateId || !payload?.itemId) {
    return { status: 400, body: { error: 'updateId and itemId are required' } }
  }

  if (processedUpdates.has(payload.updateId)) {
    return { status: 409, body: { error: 'Duplicate updateId' } }
  }

  if (!inventory.has(payload.itemId)) {
    return { status: 404, body: { error: 'Item not found' } }
  }

  if (typeof payload.quantityAdded !== 'number' || payload.quantityAdded <= 0) {
    return { status: 400, body: { error: 'quantityAdded must be > 0' } }
  }

  processedUpdates.add(payload.updateId)
  inventory.set(payload.itemId, inventory.get(payload.itemId) + payload.quantityAdded)

  return {
    status: 201,
    body: {
      updateId: payload.updateId,
      itemId: payload.itemId,
      newQuantity: inventory.get(payload.itemId),
    },
  }
}

console.log(
  'Module 5 output:',
  createStockUpdate({ updateId: 'UPD-2026-031', itemId: 'ITM-9001', quantityAdded: 120 }),
)

export { createStockUpdate }
