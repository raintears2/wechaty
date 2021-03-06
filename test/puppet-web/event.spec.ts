import { test } from 'ava'

import {
  // PuppetWeb
  // , log
} from '../../'

import {
    Event
  , PuppetWeb
} from '../../src/puppet-web/'

// import util from 'util'

// const PORT = process.env.WECHATY_PORT || 58788
const PROFILE = 'unit-test-session.wechaty.json'

// const PuppetWeb = require('../../src/puppet-web')

test('Puppet Web Event smoking test', async t => {
  let pw = new PuppetWeb({profile: PROFILE})
  t.truthy(pw, 'should instantiated a PuppetWeb')

  // co(function* () {
    await pw.init()
    t.pass('should be inited')

    await Event.onBrowserDead.call(pw, 'event unit test')
    t.pass('should finish onBrowserDead event process')

    await pw.quit()
  // })
  // .catch(e => t.fail(e))  // Reject
  // .then(r => {            // Finally
  //   pw.quit()
  //   .then(_ => t.end())
  // })
  // .catch(e => t.fail(e))  // Exception
})
