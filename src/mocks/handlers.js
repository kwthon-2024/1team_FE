// src/mocks/handlers.js

import { search } from '@/mocks/apis/search'
import { kwTreeMailBoxList, kwTree } from './apis/kwTree'
import { myTreeMailBoxList, myTree } from './apis/myTree'
import { tree } from './apis/tree'
import { friendTreeMailBoxList, friendTree } from './apis/friendTree'
import { signUp } from './apis/signUp'
import { emailDuplication } from './apis/emailDuplication'
import { emailVerification } from './apis/emailVerification'
import { signIn } from './apis/signIn'
import { mail } from './apis/mail'

export const handlers = [
  search,
  kwTree,
  kwTreeMailBoxList,
  myTree,
  myTreeMailBoxList,
  tree,
  friendTree,
  friendTreeMailBoxList,
  signUp,
  emailDuplication,
  emailVerification,
  signIn,
  mail,
]
