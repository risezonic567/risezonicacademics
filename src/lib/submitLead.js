/**
 * Submits lead data captured from the Lead Modal.
 * 
 * @param {Object} payload
 * @param {string} payload.fullName
 * @param {string} payload.phone
 * @param {string} payload.email
 * @param {string} payload.city
 * @param {string} payload.course
 * @param {string} payload.preferredMode
 * @param {string} [payload.message]
 * @param {string} [payload.source]
 * @param {string} [payload.pageUrl]
 * @param {string} [payload.submittedAt]
 * @param {string} [payload.honeypot]
 * @returns {Promise<{ ok: boolean }>}
 */
export async function submitLead(payload) {
  // If honeypot field is filled by bots, silently pretend success
  if (payload?.honeypot && payload.honeypot.trim() !== "") {
    return { ok: true };
  }

  // TODO: replace with real API call (e.g., fetch('/api/leads', { method: 'POST', body: JSON.stringify(payload) }))
  console.log("[submitLead] Lead submitted:", payload);

  await new Promise((resolve) => setTimeout(resolve, 800));

  return { ok: true };
}
