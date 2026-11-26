/**
 * EDDI Version — Single source of truth.
 *
 * Update this constant once to change the version string
 * across all 11 locale files, JSON-LD schemas, and meta tags.
 *
 * Usage in locale files:  import { EDDI_VERSION } from '../version';
 * Usage in components:    import { EDDI_VERSION } from '../i18n/version';
 */
export const EDDI_VERSION = 'v6';
export const EDDI_LATEST_VERSION = '6.7.1';
/**
 * The feature release the What's New page describes. A patch release (6.7.1) bumps
 * EDDI_LATEST_VERSION only; the highlights stay those of 6.7, and the patch gets its
 * own item under "Also in This Release".
 */
export const EDDI_FEATURE_RELEASE = '6.7';
