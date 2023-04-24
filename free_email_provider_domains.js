const free_email_provider_domains = await import("./list_mails");

const free_email_provider_set = new Set(free_email_provider_domains)

module.exports = free_email_provider_set;