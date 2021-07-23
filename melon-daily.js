const melon = require('obliviate/lib/tasks/melon')

async function melonDaily() {
  await melon.perform({ id: '32185128', binId: 'kzws2arEhg' })
  await melon.perform({ id: '33382021', binId: 'KiHUNpZCbx' })
}

melonDaily()
