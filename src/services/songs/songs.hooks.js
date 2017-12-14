const { authenticate } = require('@feathersjs/authentication').hooks;
const { associateCurrentUser, restrictToOwner } = require('feathers-authentication-hooks')
const separateIncomingData = require('./separateIncomingData.hook')
const joinOutgoingData = require('./joinOutgoingData.hook')

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [
      restrictToOwner({ idField: '_id', ownerField: 'userId' })
    ],
    get: [
      restrictToOwner({ idField: '_id', ownerField: 'userId' })      
    ],
    create: [
      associateCurrentUser({ idField: '_id', as: 'userId' }),
      separateIncomingData()
        ],
    update: [
      associateCurrentUser({ idField: '_id', as: 'userId' }),      
      restrictToOwner({ idField: '_id', ownerField: 'userId' }),
      separateIncomingData()      
    ],
    patch: [
      associateCurrentUser({ idField: '_id', as: 'userId' }),      
      restrictToOwner({ idField: '_id', ownerField: 'userId' }),
      separateIncomingData()      
    ],
    remove: [

      restrictToOwner({ idField: '_id', ownerField: 'userId' })
    ]
  },

  after: {
    all: [],
    find: [
      joinOutgoingData()
    ],
    get: [
      joinOutgoingData()      
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
