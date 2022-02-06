// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  vus: 1000,
  duration: '1m',
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
    },
  },
}

export default function main() {
  let response

  group('page_1 - http://104.197.103.59/', function () {
    response = http.get('http://104.197.103.59/', {
      headers: {
        'upgrade-insecure-requests': '1',
      },
    })
    sleep(5.3)
    response = http.get('https://api.github.com/users/pavithra24/repos', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    sleep(3.5)
  })

}