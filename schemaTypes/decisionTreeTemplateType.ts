import {defineField, defineType} from 'sanity'
import {definePageType} from '@q42/sanity-plugin-page-tree'
import {decisionTreeConfig} from '../decision-tree-config'

const _decisionTreeTemplateType = defineType({
  name: 'decisionTreeTemplate',
  title: 'Decision Tree Template',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'initialQuestion',
      title: 'Initial Question',
      type: 'reference',
      to: [{type: 'question'}],
    }),
  ],
})

export const decisionTreeTemplateType = definePageType(
  _decisionTreeTemplateType,
  decisionTreeConfig,
  {
    isRoot: true,
  },
)
