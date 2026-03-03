import { getDb } from './mongodb';

const INVITATIONS = 'invitations';
const APPROVED_EMAILS = 'approved_emails';

export interface Invitation {
  _id?: string;
  key: string;
  enabled: boolean;
  createdAt: Date;
}

export interface ApprovedEmail {
  _id?: string;
  email: string;
  createdAt: Date;
}

export async function findInvitationByKey(key: string): Promise<Invitation | null> {
  const db = await getDb();
  const doc = await db.collection(INVITATIONS).findOne({ key: key.trim(), enabled: true });
  return doc as unknown as Invitation | null;
}

export async function listInvitations(): Promise<Invitation[]> {
  const db = await getDb();
  const cursor = db.collection(INVITATIONS).find({}).sort({ createdAt: -1 });
  return (await cursor.toArray()) as unknown as Invitation[];
}

export async function upsertInvitation(key: string, enabled: boolean): Promise<Invitation> {
  const db = await getDb();
  const k = key.trim().toLowerCase();
  const now = new Date();
  const result = await db.collection(INVITATIONS).findOneAndUpdate(
    { key: k },
    { $set: { key: k, enabled, updatedAt: now }, $setOnInsert: { createdAt: now } },
    { upsert: true, returnDocument: 'after' }
  );
  return result as unknown as Invitation;
}

export async function setInvitationEnabled(key: string, enabled: boolean): Promise<boolean> {
  const db = await getDb();
  const r = await db.collection(INVITATIONS).updateOne(
    { key: key.trim().toLowerCase() },
    { $set: { enabled } }
  );
  return r.modifiedCount > 0 || r.matchedCount > 0;
}

export async function deleteInvitation(key: string): Promise<boolean> {
  const db = await getDb();
  const r = await db.collection(INVITATIONS).deleteOne({ key: key.trim().toLowerCase() });
  return r.deletedCount > 0;
}

export async function isEmailApproved(email: string): Promise<boolean> {
  const db = await getDb();
  const normalized = email.trim().toLowerCase();
  const doc = await db.collection(APPROVED_EMAILS).findOne({ email: normalized });
  return !!doc;
}

export async function listApprovedEmails(): Promise<ApprovedEmail[]> {
  const db = await getDb();
  const cursor = db.collection(APPROVED_EMAILS).find({}).sort({ createdAt: -1 });
  return (await cursor.toArray()) as unknown as ApprovedEmail[];
}

export async function addApprovedEmail(email: string): Promise<ApprovedEmail> {
  const db = await getDb();
  const normalized = email.trim().toLowerCase();
  const now = new Date();
  await db.collection(APPROVED_EMAILS).updateOne(
    { email: normalized },
    { $setOnInsert: { email: normalized, createdAt: now } },
    { upsert: true }
  );
  return { email: normalized, createdAt: now };
}

export async function removeApprovedEmail(email: string): Promise<boolean> {
  const db = await getDb();
  const r = await db.collection(APPROVED_EMAILS).deleteOne({ email: email.trim().toLowerCase() });
  return r.deletedCount > 0;
}
