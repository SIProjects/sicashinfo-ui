export default {
  mainnet: {
    pubkey: 0x3f,
    pubkeyhash: 0x7d,
    scripthash: 0x80,
    witness_v0_keyhash: 'sc',
    witness_v0_scripthash: 'sc'
  },
  testnet: {
    pubkey: 0x41,
    pubkeyhash: 0x7F,
    scripthash: 0x82,
    witness_v0_keyhash: 'tq',
    witness_v0_scripthash: 'tq'
  }
}[process.env.network || 'mainnet']
