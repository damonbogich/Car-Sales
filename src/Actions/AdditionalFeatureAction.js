export const addFeature = addedFeature => {
    return {type: "ADDITIONAL_FEATURE", payload: addedFeature }

}

export const removeFeature = removedFeature => {
    return {type: "REMOVE_FEATURE", payload: removedFeature}
}