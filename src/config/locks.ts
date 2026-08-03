/**
 * ==============================================================================
 * MANI SITE ACCESS LOCK CONFIGURATION
 * ==============================================================================
 * Central control for site locking / milestone presentation mode.
 * 
 * - Set `PAGES_LOCKED: false` to unlock all subpages (Collections, About, FAQ, etc.).
 * - Set `ACTIONS_LOCKED: false` to unlock all action buttons (Beta Signup, Checkout, etc.).
 */

export const SITE_LOCKS = {
  /** Toggle true/false to lock/unlock all subpages across the site */
  PAGES_LOCKED: false,

  /** Toggle true/false to lock/unlock action button modals (Subscribe, Join Beta, Checkout) */
  ACTIONS_LOCKED: false,
};
