import { defineField, defineType } from 'sanity'

export const artistType = defineType({
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'string',
            title: 'Artist description'
        }),
        defineField({
            name: 'photo',
            type: 'image',
            title: 'Artist photo',
            options: {
                hotspot: true,
            },
        }),
    ],
})