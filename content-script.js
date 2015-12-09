'use strict'

function init() {
  if (document.readyState !== 'complete') return setTimeout(init, 100)
  run() 
}

function run() {
  chrome.runtime.sendMessage({action: "getDependencies"}, getDependencies)
}

function getDependencies(response) {
  let repo = response.payload

  if (!repo.dependencies) return

  console.debug(repo)

  repo.dependency_count = repo.dependencies.length
  repo.deprecated_count = repo.dependencies.filter( (d) => d.deprecated ).length
  repo.outdated_count   = repo.dependencies.filter( (d) => d.outdated ).length

  // Retry injection becuase GitHub PJAX re-renders .reponav 
  setInterval( () => injectDependenciesTab(repo), 250)
}

function injectDependenciesTab(repo) {
  if ($('.reponav #dependencies').length) return

  $('.reponav').append('<a href="#" id="dependencies" class="js-selected-navigation-item reponav-item"><span class="octicon octicon-package"></span> Dependencies</a>')

  $('#dependencies').click( (evt) => {
    evt.preventDefault()

    $('.reponav .selected').removeClass('selected')
    $('#dependencies').addClass('selected')
    $('.repository-content').html(Handlebars.templates.deps({repo: repo}))
  })
}

init()
