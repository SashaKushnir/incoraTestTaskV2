export const commonA = {
    fetchingToggle: (fetchingStatus: boolean) => ({type: "SET_FETCHING_STATUS", fetchingStatus}) as const,
    authToggle: (authStatus: boolean | null) => ({type: "SET_AUTH_STATUS", authStatus}) as const,
    setErrorMessage: (errorM: string) => ({type: "SET_ERROR_MESSAGE", errorM}) as const,
    setRandomUserId: (userId: number) => ({type: "SET_RANDOM_USER_ID", userId}) as const
}