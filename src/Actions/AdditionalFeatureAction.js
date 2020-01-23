export const addFeature = addedFeature => {
    return {type: "ADDITIONAL_FEATURE", payload: addedFeature }

}

export const newFeature = feature => {
    return {type: "ADD_FEATURE", payload: feature}
}