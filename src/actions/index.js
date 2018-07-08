// This function is an action creator since it is a function
// that returns an action. An action is an object with a type property.
// This app only has one action since can only do 1 thing -- select a library.
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
}