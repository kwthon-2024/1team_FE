// src/mocks/handlers.js

import { search } from '@/mocks/apis/search'
import { kwTreeMailBoxList, kwTree } from './apis/kwTree'
import { myTreeMailBoxList, myTree } from './apis/myTree'
import { tree } from './apis/tree'
import { friendTreeMailBoxList, friendTree } from './apis/friendTree'

export const handlers = [
  search,
  kwTree,
  kwTreeMailBoxList,
  myTree,
  myTreeMailBoxList,
  tree,
  friendTree,
  friendTreeMailBoxList,
]
