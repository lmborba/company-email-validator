const { free_email_provider_domains } = require("./free_email_provider_domains.json");

const free_email_provider_set = new Set(free_email_provider_domains)

module.exports = free_email_provider_set;