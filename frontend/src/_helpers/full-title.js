function FullTitle(pageTitle) {
    const baseTitle = "React Sample App";

    if (!pageTitle || pageTitle.length === 0)
        return baseTitle;
    else
        return `${pageTitle} | ${baseTitle}`;
}

export { FullTitle }