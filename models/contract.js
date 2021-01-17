import * as SICashinfoAPI from '@/services/sicashinfo-api'

class Contract {
  static get(id, options = {}) {
    return SICashinfoAPI.get(`/contract/${id}`, options)
  }

  static getUtxo(id, options = {}) {
    return SICashinfoAPI.get(`/contract/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return SICashinfoAPI.get(`/contract/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static listTokens({page, pageSize}, options = {}) {
    return SICashinfoAPI.get(`/src20`, {params: {page, pageSize}, ...options})
  }

  static richList(id, {page, pageSize}, options = {}) {
    return SICashinfoAPI.get(`/src20/${id}/rich-list`, {params: {page, pageSize}, ...options})
  }
}

export default Contract
