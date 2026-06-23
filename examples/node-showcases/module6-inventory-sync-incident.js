// Module 6 case: inventory sync incident analysis and safe backfill plan.

function analyzeSyncIncident(input) {
  const delta = input.expectedQuantity - input.actualQuantity
  const hasMismatch = delta !== 0

  return {
    itemId: input.itemId,
    hasMismatch,
    delta,
    likelyCause: hasMismatch ? 'mapping_or_merge_bug' : 'none',
    nextSteps: hasMismatch
      ? [
          'inspect sync transformation mapping',
          'run dry-run backfill for affected item',
          'verify quantity after backfill',
        ]
      : ['no action needed'],
  }
}

const incident = {
  itemId: 'ITM-9001',
  expectedQuantity: 540,
  actualQuantity: 490,
  syncJob: 'nightly-inventory-sync',
}

console.log('Module 6 output:', analyzeSyncIncident(incident))

export { analyzeSyncIncident }
