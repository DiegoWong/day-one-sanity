import {artistType} from './artistType'
import {eventType} from './eventType'
import {venueType} from './venueType'
import {questionType} from './questionType'
import {hierarchyTree} from '@sanity/hierarchical-document-list'
import {homeType} from './homeType'
import {decisionTreeTemplateType} from './decisionTreeTemplateType'
import {answerType} from './answerType'
import {resultTemplateType} from './resultTemplateType'
import {templateType} from './templateType'

export const schemaTypes = [
  eventType,
  artistType,
  venueType,
  questionType,
  homeType,
  hierarchyTree,
  decisionTreeTemplateType,
  answerType,
  resultTemplateType,
  templateType,
]
