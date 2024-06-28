import {
  ActionComponent,
  DocumentActionComponent,
  DocumentActionDescription,
  DocumentActionProps,
  useDocumentOperation,
} from 'sanity'
import {WORKFLOW_STATES} from './schemaTypes/constats'

export const workflowImportedQuestion: ActionComponent<DocumentActionProps> = (
  props: DocumentActionProps,
) => {
  if (props.type === 'question') {
    const labels = ['Approve Question', 'Approve Translations']
    const question = props.draft ? props.draft : props.published
    const {patch} = useDocumentOperation(props.id, props.type)
    const currentStatus = WORKFLOW_STATES.findIndex((state) => question?.status === state)
    if (currentStatus !== 2) {
      return {
        label: labels[currentStatus],
        onHandle: () => {
          patch.execute([{set: {status: WORKFLOW_STATES[currentStatus + 1]}}])
        },
      }
    }
  }
  return null
}

export const customPublishAction = (originalPublishAction: DocumentActionComponent) => {
  const customPublishAction: ActionComponent<DocumentActionProps> = (
    props: DocumentActionProps,
  ) => {
    const originalResult: DocumentActionDescription | null = originalPublishAction(props)
    const document = props.draft ? props.draft : props.published
    const status = document?.status ?? 'approved'
    if (props.type === 'question') {
      return {
        ...originalResult,
        label: 'Publish',
        disabled: status !== 'approved',
        onHandle: () => {
          // Add our custom functionality
          console.log(document)
          // then delegate to original handler
          if (originalResult?.onHandle) {
            originalResult.onHandle()
          }
        },
      }
    }
    return {
      ...originalResult,
      label: 'Publish',
      onHandle: () => {
        if (originalResult?.onHandle) {
          originalResult.onHandle()
        }
      },
    }
  }
  return customPublishAction
}
