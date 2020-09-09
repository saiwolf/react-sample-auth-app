
/**
 * Function converted from Ruby to display a page's
 * full title dynamically depending on the current page.
 * 
 * Original function: https://github.com/mhartl/sample_app_6th_ed/blob/master/app/helpers/application_helper.rb
 *
 * @param {string} pageTitle Name of current page.
 * @return {string} Full document title
 */
function FullTitle(pageTitle) {
    const baseTitle = "React Sample App";

    if (!pageTitle || pageTitle.length === 0)
        return baseTitle;
    else
        return `${pageTitle} | ${baseTitle}`;
}

export { FullTitle }