import * as SICashinfoAPI from '@/services/sicashinfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return SICashinfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return SICashinfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return SICashinfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return SICashinfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return SICashinfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return SICashinfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
