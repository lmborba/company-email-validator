const free_email_provider_domains = require("./list_mails");

const free_email_provider_set = new Set(free_email_provider_domains)

module.exports = free_email_provider_set;