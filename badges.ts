import {DocumentBadgeDescription, DocumentBadgeProps} from 'sanity'
import {WORKFLOW_STATES} from './schemaTypes/constats'

export function importedQuestion(props: DocumentBadgeProps): DocumentBadgeDescription | null {
  if (props.type === 'question') {
    const question = props.draft ? props.draft : props.published
    const importedBadge = {
      label: 'Imported Question',
      title: 'Review Question and then approve it to publish it',
      color: 'warning',
    } as const
    const pendingTrnaslationsBadge = {
      label: 'Pending for translations',
      title: 'Add translations for question',
      color: 'warning',
    } as const
    const approvedBadge = {
      label: 'Import Approved',
      title: 'The question has been approved to be published',
      color: 'success',
    } as const
    const badges = [importedBadge, pendingTrnaslationsBadge, approvedBadge]
    const state = WORKFLOW_STATES.findIndex((state) => state === question?.status)
    return badges[state]
  }

  return null
}
