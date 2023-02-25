
const selectSettings = (field) => (state) => state.settings[field]

export const selectUnit = selectSettings('unit')
export const selectLanguage = selectSettings('language')