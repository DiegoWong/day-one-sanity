import type {StructureResolver} from 'sanity/structure'
import {CalendarIcon, UsersIcon, PinIcon, UnknownIcon, InfoOutlineIcon} from '@sanity/icons'
import {createDeskHierarchy} from '@sanity/hierarchical-document-list'
import {createPageTreeDocumentList} from '@q42/sanity-plugin-page-tree'
import {pageTreeConfig} from '../page-tree-config'
import {decisionTreeConfig} from '../decision-tree-config'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Upcoming Events')
        .schemaType('event')
        .icon(CalendarIcon)
        .child(S.documentList().title('Upcoming Events').filter('date > now()')),
      S.listItem()
        .title('Past Events')
        .schemaType('event')
        .icon(CalendarIcon)
        .child(S.documentList().title('Past Events').filter('date < now()')),
      S.divider(),
      S.documentTypeListItem('artist').title('Artists').icon(UsersIcon),
      S.documentTypeListItem('venue').title('Venues').icon(PinIcon),
      S.documentTypeListItem('question').title('Questions').icon(UnknownIcon),
      S.documentTypeListItem('answer').title('Answers').icon(InfoOutlineIcon),
      S.documentTypeListItem('home').title('Home'),
      S.documentTypeListItem('resultTemplate').title('Result Template'),
      S.documentTypeListItem('template').title('Templates'),
      S.documentTypeListItem('decisionTreeTemplate').title('Decision Tree Template'),
      createDeskHierarchy({
        S,
        context,
        title: 'Decision Tree',
        documentId: 'decision-tree',
        referenceTo: ['question'],
        maxDepth: 10,
      }),
      S.listItem()
        .title('Pages')
        .child(
          createPageTreeDocumentList(S, {
            config: pageTreeConfig,
            extendDocumentList: (builder) =>
              builder.id('pages').title('Pages').apiVersion(pageTreeConfig.apiVersion),
          }),
        ),
      S.listItem()
        .title('Decision Tree')
        .child(
          createPageTreeDocumentList(S, {
            config: decisionTreeConfig,
            extendDocumentList: (builder) =>
              builder
                .id('decision-tree-2')
                .title('Decision Tree')
                .apiVersion(decisionTreeConfig.apiVersion),
          }),
        ),
    ])
