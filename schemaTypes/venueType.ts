import { defineField, defineType } from 'sanity'
import { definePageType } from '@q42/sanity-plugin-page-tree';
import { pageTreeConfig } from '../page-tree-config';

const _venueType = defineType({
    name: 'venue',
    title: 'Venue',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'city',
            type: 'string',
        }),
        defineField({
            name: 'country',
            type: 'string',
        }),
    ],
})

export const venueType = definePageType(_venueType, pageTreeConfig);