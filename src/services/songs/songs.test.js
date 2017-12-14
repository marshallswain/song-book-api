const assert = require('assert')
const app = require('../../app')

describe('\'songs\' service', () => {
  it('registered the service', () => {
    const service = app.service('songs')

    assert.ok(service, 'Registered the service')
  })
})
