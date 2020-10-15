export default {
  mainnet: {
    pubkey: 0x3f,
    pubkeyhash: 0x3f,
    scripthash: 0x7d,
    witness_v0_keyhash: 'sc',
    witness_v0_scripthash: 'sc'
  },
  testnet: {
    pubkey: 0x41,
    pubkeyhash: 0x41,
    scripthash: 0x7f,
    witness_v0_keyhash: 'tq',
    witness_v0_scripthash: 'tq'
  }
}[process.env.network || 'mainnet']
