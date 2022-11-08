import { StateSchema } from 'app/providers/store-provider'

export const getAddCommentFormText = (state: StateSchema) => state?.addCommentForm?.text
export const getAddCommentFormError = (state: StateSchema) => state?.addCommentForm?.error
export const getAddCommentFormIsLoading = (state: StateSchema) => state?.addCommentForm?.isLoading
