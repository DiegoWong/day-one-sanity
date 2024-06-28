import {ActionComponent, DocumentActionDescription, defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/DefaultDocumentNode'
import {hierarchicalDocumentList} from '@sanity/hierarchical-document-list'
// import {contentGraphView} from 'sanity-plugin-graph-view'
import {dashboardTool} from '@sanity/dashboard'
import {presentationTool} from 'sanity/presentation'
import {documentListWidget} from 'sanity-plugin-dashboard-widget-document-list'
import {workflowImportedQuestion, customPublishAction} from './actions'
import {importedQuestion} from './badges'
import {projectId, dataset, sanityStudioPreviewUrl} from './env'

export default defineConfig({
  name: 'default',
  title: 'Day one with Sanity',

  projectId,
  dataset,
  document: {
    actions: (prev) => {
      const actions = prev.map((originalAction) => {
        return originalAction.action === 'publish'
          ? customPublishAction(originalAction)
          : originalAction
      })
      actions.push(workflowImportedQuestion)
      return actions
    },
    badges: [importedQuestion],
  },
  plugins: [
    presentationTool({previewUrl: sanityStudioPreviewUrl}),
    dashboardTool({
      widgets: [
        documentListWidget({
          title: 'Imported questions',
          showCreateButton: true,
          limit: 5,
          types: ['question'],
          query: "*[_type == 'question' && status == 'imported']",
        }),
      ],
    }),
    structureTool({structure, defaultDocumentNode}),
    visionTool(),
    hierarchicalDocumentList(),
    // contentGraphView({query: "*[_type in ['question', 'answer', 'resultTemplate']]"}),
  ],

  schema: {
    types: schemaTypes,
  },
})
