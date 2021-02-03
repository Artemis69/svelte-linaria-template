const DEV = process.env.ROLLUP_WATCH;

module.exports = {
    classNameSlug: (hash, title) => DEV ? `${title}__${hash}_${Date.now()}` : `${hash}`,
};