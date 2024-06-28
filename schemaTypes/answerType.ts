import {defineField, defineType} from 'sanity'
import {WORKFLOW_STATES} from './constats'
import {decisionTreeConfig} from '../decision-tree-config'
import {definePageType} from '@q42/sanity-plugin-page-tree'

const _answerType = defineType({
  title: 'Answer',
  name: 'answer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'status',
      type: 'string',
      hidden: true,
      options: {
        list: WORKFLOW_STATES,
      },
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'reference',
      to: [{type: 'question'}, {type: 'resultTemplate'}],
    }),
  ],
})

// export const answerType = definePageType(_answerType, decisionTreeConfig)
export const answerType = _answerType
