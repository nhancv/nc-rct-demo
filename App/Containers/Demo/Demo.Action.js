import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  fakeDataRequest: [],
  restApiRequest: ['username'],
  success: ['data'],
  failure: ['error']
})

export const DemoAction = Creators
export const DemoActionCode = Types
