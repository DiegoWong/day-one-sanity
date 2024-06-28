import { defineField, defineType } from 'sanity'
import { definePageType } from '@q42/sanity-plugin-page-tree';
import { pageTreeConfig } from '../page-tree-config';

const _homeType = defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        })
    ],
})

export const homeType = definePageType(_homeType, pageTreeConfig, {
    isRoot: true,
});