import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'
import { DoorsOpenInput } from './components/DoorsOpenInputs'
import { definePageType } from '@q42/sanity-plugin-page-tree'
import { pageTreeConfig } from '../page-tree-config'

const _eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    icon: CalendarIcon,
    groups: [
        { name: 'details', title: 'Details' },
        { name: 'editorial', title: 'Editorial' },
    ],
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'eventType',
            type: 'string',
            deprecated: {
                reason: 'Use the "Event format" field instead.'
            },
            readOnly: true,
            hidden: true, // hide from content creators, but keep it in code
            options: {
                list: ['in-person', 'virtual'],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'format',
            type: 'string',
            title: 'Event format',
            options: {
                list: ['in-person', 'virtual'],
                layout: 'radio',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'date',
            type: 'datetime',
        }),
        defineField({
            name: 'doorsOpen',
            description: 'Number of minutes before the start time for admission',
            type: 'number',
            initialValue: 60,
            components: {
                input: DoorsOpenInput
            }
        }),
        defineField({
            name: 'venue',
            type: 'reference',
            to: [{ type: 'venue' }],
            readOnly: ({ value, document }) => !value && document?.eventType === 'virtual',
            validation: (rule) =>
                rule.custom((value, context) => {
                    if (value && context?.document?.eventType === 'virtual') {
                        return 'Only in-person events can have a venue'
                    }

                    return true
                }),
        }),
        defineField({
            name: 'headline',
            type: 'reference',
            to: [{ type: 'artist' }],
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'details',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'tickets',
            type: 'url',
        }),
    ],
    // Update the preview key in the schema
    preview: {
        select: {
            name: 'name',
            venue: 'venue.name',
            artist: 'headline.name',
            date: 'date',
            image: 'image',
        },
        prepare({ name, venue, artist, date, image }) {
            const nameFormatted = name || 'Untitled event'
            const dateFormatted = date
                ? new Date(date).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                })
                : 'No date'

            return {
                title: artist ? `${nameFormatted} (${artist})` : nameFormatted,
                subtitle: venue ? `${dateFormatted} at ${venue}` : dateFormatted,
                media: image || CalendarIcon,
            }
        },
    },
})

export const eventType = definePageType(_eventType, pageTreeConfig)