export function getExperience(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    const totalMonths =
        (now.getFullYear() - start.getFullYear()) * 12 +
        (now.getMonth() - start.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (months <= 2) {
        return `${years} years`;
    }

    if (months >= 3 && months <= 8) {
        return `${years}.5 years`;
    }

    return `~${years + 1} years`;
}