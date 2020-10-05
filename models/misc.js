import * as SICashinfoAPI from '@/services/sicashinfo-api'

class Misc {
  static info(options = {}) {
    return SICashinfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return SICashinfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return SICashinfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return SICashinfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return SICashinfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return SICashinfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return SICashinfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc
