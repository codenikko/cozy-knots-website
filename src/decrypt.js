// src/utils/decrypt.js
import { ENCRYPTED_TEXT, ENCRYPTION_KEY } from './protected.js';

async function importKey(b64Key) {
  const raw = Uint8Array.from(atob(b64Key), c => c.charCodeAt(0));
  return crypto.subtle.importKey('raw', raw, { name: 'AES-GCM' }, false, ['decrypt']);
}

async function decrypt(b64Ciphertext, b64Key) {
  const key = await importKey(b64Key);
  const combined = Uint8Array.from(atob(b64Ciphertext), c => c.charCodeAt(0));
  const iv = combined.slice(0, 12);
  const ciphertext = combined.slice(12);
  const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);
  return new TextDecoder().decode(plaintext);
}

export async function getProtectedText() {
  return decrypt(ENCRYPTED_TEXT, ENCRYPTION_KEY);
}