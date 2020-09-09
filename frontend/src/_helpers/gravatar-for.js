import * as md5Hex from 'md5-hex';

/**
 *
 * Function converted from Ruby to display a Gravatar
 * based on a user's email address.
 *
 * Original Ruby Function: https://github.com/mhartl/sample_app_6th_ed/blob/master/app/helpers/users_helper.rb
 *
 * @param {*} user User object containing email
 * @param {number} [size = 80] - Gravatar image size.
 * @returns {string} HTML Image tag containing dynamic gravatar
 */
function GravatarFor(user, size = 80) {
    if (!user) return null;

    const gravatarId = md5Hex(user.email.toLowerCase());
    const gravatarUrl = `https://secure.gravatar.com/avatar/${gravatarId}?s=${size}`;
    return <img src={gravatarUrl} alt={`${user.firstName} ${user.lastName}`} className="gravatar" />
}

export { GravatarFor }