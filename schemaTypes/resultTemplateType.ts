import { defineField, defineType } from 'sanity'
import { definePageType } from '@q42/sanity-plugin-page-tree';
import { decisionTreeConfig } from '../decision-tree-config';

const _resultTemplateType = defineType({
    name: 'resultTemplate',
    title: 'Result Template',
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
        })
    ],
})

// export const resultTemplateType = definePageType(_resultTemplateType, decisionTreeConfig);
export const resultTemplateType = _resultTemplateType