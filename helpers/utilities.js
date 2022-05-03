/**
 * Convert a title cased string to a slug
 * @param {string} string A title cased string to slugify
 *
 * @returns {string} A slugified-string
 */
export const toSlug = (string) =>
    string
        .replace(/[^A-Za-z0-9\s]/g, "")
        .replace(/ /g, "-")
        .toLowerCase();

/**
 * Convert a snake_cased string to a camelCased string
 * @param {string} string A snake_cased string to camelCase
 *
 * @returns {string} A camelCased string
 */
export const snakeToCamel = (str) =>
    str.replace(/([-_][a-z])/g, (group) =>
        group.toUpperCase().replace("-", "").replace("_", "")
    );

/**
 * Convert a camelCased string to a kebab-cased string
 * @param {string} string A camelCased string to kebab-case
 *
 * @returns {string} A kebab-cased string
 */
export const camelToKebab = (str) =>
    str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();

/**
 * Get a YouTube thumbnail url
 * @param {string} config.id YouTube video ID
 * @param {string} config.domain YouTube images domain
 * @param {string} config.fileName Image quality file name
 * @param {string} config.path URL path
 * @param {string} config.protocol URL protocol
 * @param {string} config.mimeType File mime type
 */
export const getYouTubeThumbnailUrl = ({
    id,
    domain = "img.youtube.com",
    fileName = "maxresdefault",
    path = "vi",
    protocol = "https",
    mimeType = "jpg",
}) => `${protocol}://${domain}/${path}/${id}/${fileName}.${mimeType}`;

/*
 basic request wrapper, more tbc
*/
export const request = async ({
    endpoint,
    body,
    method = "get",
    corsMode = "cors",
    baseUrl = process.env.RAZZLE_INTERNAL_API_BASE_URL,
    ...options
}) => {
    // debug(`Making ${method} call to ${endpoint}`);

    const fetchOptions = {
        method: method,
        mode: corsMode,
        ...options,
    };

    if (method === "POST" || method === "PUT") {
        fetchOptions.headers = { "Content-Type": "application/json" };
        fetchOptions.body = JSON.stringify(body);
    }

    const res = await fetch(`${baseUrl}${endpoint}`, fetchOptions);
    return res;
};

/**
 * least-worst quick regex for email validation.
 * Recommendation here https://ui.dev/validate-email-address-javascript/ is to use this but still send validation email
 * @param {object} email string to test for email validity
 * @returns {boolean} boolean (true if it's a valid email, false if not)
 */
export const checkEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

/**
 * Takes an imgix URL and a quality setting (xs/s/m/l/xl) and applies
 * appropriate compression and optimisation filters to the URL.
 * Returns a URL to get the optimised image
 *
 * @param {string} imageUrl an imgix url
 * * @param {string} size size (xs/s/m/l/xl), which will affect final image quality
 * @returns {string} imageURL with additional params on the end
 */
export const createOptimisedImageUrl = (imageUrl, size = "l") => {
    // test for valid imgix url and image format
    if (
        /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(imageUrl) &&
        /(imgix.net|productimages.andertons.co.uk)\b/.test(imageUrl)
    ) {
        // debug(`creating optimised imgix URL for url: ${imageUrl}`);

        // put basic compression and background colouring on all URLs
        let optimisedUrl = `${imageUrl}?auto=compress`;

        // then apply different compression based on requested size
        switch (size.toLowerCase()) {
            case "xs":
                optimisedUrl += `&w=100&h=80&auto=format&q=50`;
                break;
            case "s":
                optimisedUrl += `&w=400&h=400&auto=format&q=60`;
                break;
            case "m":
                optimisedUrl += `&w=600&h=600&auto=format&q=60`;
                break;
            case "l":
                optimisedUrl += `&w=1000&h=1000&auto=format`;
                break;
            case "xl":
                optimisedUrl += `&pad=40&bg=ffffff`;
                break;
        }

        return optimisedUrl;
    } else {
        // debug(
        //     `Warning: attempted optimisation of non-imgix URL. Please don't do that`
        // );
        return imageUrl; // catch - return unmodified URL in case it gets called on a non-imgix domain
    }
};

export const splitArrayInto = (array, chunks) => {
    if (!array) {
        return null;
    }
    let [...arr] = array;
    let res = [];
    while (arr.length) {
        res.push(arr.splice(0, chunks));
    }
    return res;
};

export const generateCanonical = (slug) => {
    return slug === "/en/amuk" ? "" : slug;
};
