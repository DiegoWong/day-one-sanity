import { PageTreeConfig } from '@q42/sanity-plugin-page-tree';

export const decisionTreeConfig: PageTreeConfig = {
    /* Root page schema type name */
    rootSchemaType: 'decisionTreeTemplate',
    /* Array of all page schema type names */
    pageSchemaTypes: ['question', 'decisionTreeTemplate', 'answer', 'resultTemplate'],
    /* Api version to be used in all underlying Sanity client use */
    allowedParents: {
        question: ['answer', 'decisionTreeTemplate'],
        answer: ['question'],
        resultTemplate: ['answer']
    },
    apiVersion: '2023-12-08',
    /* Optionally provide the field name of the title field of your page documents, to be used to generate a slug automatically for example. */
    titleFieldName: 'title',
    /* Used for showing the full url for a document and linking to it. */
    /* optional, otherwise the path is shown */
    baseUrl: 'https://example.com',
};