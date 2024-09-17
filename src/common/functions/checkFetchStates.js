export const checkFetchStates = (fetchStates, targetStatus, matchAll = false) => {
    return matchAll
        ? fetchStates.every(fetchState => fetchState === targetStatus)
        : fetchStates.some(fetchState => fetchState === targetStatus);
};