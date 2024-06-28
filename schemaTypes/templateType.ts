import {defineField, defineType} from 'sanity'
import {definePageType} from '@q42/sanity-plugin-page-tree'
import {pageTreeConfig} from '../page-tree-config'

const _templateType = defineType({
  name: 'template',
  title: 'Template',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'typeOfdocument',
      title: 'type',
      type: 'string',
    }),
  ],
})

export const templateType = definePageType(_templateType, pageTreeConfig)
