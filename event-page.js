'use strict'

const actions = {
  getDependencies: function(tab) {
    let m = tab.url.match(/https:\/\/github.com\/([\w-_]+)\/([\w-_]+)/)
    let url = `https://libraries.io/api/github/${m[1]}/${m[2]}/dependencies`

    let request = new Request(url, {
      method: 'GET', 
      mode: 'cors',
      redirect: 'follow'
    })

    return fetch(request)
    .then( (response) => {
      return response.json()
    })
    .then( (json) => {
      return json
    })
    .catch( (err) => {
      console.debug('ERR:', err)
      return {}
    })
  }
}

function messageHandler(request, sender, sendResponse) {
  if (!actions[request.action]) return sendResponse({payload: {}})

  actions[request.action](sender.tab)
  .then( function(response) {
    sendResponse({payload: response})
  })
  .catch( (err) => {
    console.log('ERR:', err)
  })

  return true
}

chrome.runtime.onMessage.addListener(messageHandler)
