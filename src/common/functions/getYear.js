export const getYear = (date) => {
    if (!date) return "";
    const parsedDate = new Date(date);
    return isNaN(parsedDate.getFullYear()) ? "" : parsedDate.getFullYear();
};