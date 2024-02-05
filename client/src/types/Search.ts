export interface Search {
    type: string,
    payload?: {
        search?: string,
        error?: Error,
        isLoading?: false
    },

}