import {defineField, defineType} from 'sanity'
import {WORKFLOW_STATES} from './constats'
// import {decisionTreeConfig} from '../decision-tree-config'
// import {definePageType} from '@q42/sanity-plugin-page-tree'

const _questionType = defineType({
  title: 'Question',
  name: 'question',
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
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'string',
    }),
    defineField({
      name: 'answers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'answer'}],
        },
      ],
    }),
  ],
})

// export const questionType = definePageType(_questionType, decisionTreeConfig)
export const questionType = _questionType
