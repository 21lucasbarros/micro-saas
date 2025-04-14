import { initializeApp } from "firebase-admin";
import { cert, getApp, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
// import { getStorage } from "firebase-admin/storage";
import "server-only";

const decodeKey = Buffer.from(
  process.env.FIREBASE_PRIVATE_KEY_BASE64!,
  "base64"
).toString("utf-8");

const firebaseCert = cert({
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
});

if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
    //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
}

export const db = getFirestore();
// export const storage = getStorage().bucket();
