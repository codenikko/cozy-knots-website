// src/utils/decrypt.js
import { ENCRYPTED_TEXT, ENCRYPTION_KEY } from './protected.js';

function decodeBase64(value, label) {
  const normalized = value.replace(/\s+/g, "").replace(/-/g, "+").replace(/_/g, "/");

  try {
    return Uint8Array.from(atob(normalized), c => c.charCodeAt(0));
  } catch (error) {
    throw new Error(`Invalid base64 ${label}.`, { cause: error });
  }
}

async function importKey(b64Key) {
  const raw = decodeBase64(b64Key, "encryption key");
  return crypto.subtle.importKey('raw', raw, { name: 'AES-GCM' }, false, ['decrypt']);
}

async function decrypt(b64Ciphertext, b64Key) {
  const key = await importKey(b64Key);
  const combined = decodeBase64(b64Ciphertext, "ciphertext");
  const iv = combined.slice(0, 12);
  const ciphertext = combined.slice(12);
  const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);
  return new TextDecoder().decode(plaintext);
}

export async function getProtectedText() {
  return decrypt(ENCRYPTED_TEXT, ENCRYPTION_KEY);
}
