import { MongoClient, Db } from 'mongodb';

const options = {};

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Please add MONGODB_URI to .env.local');
  }
  if (process.env.NODE_ENV === 'development' && global._mongoClientPromise) {
    return global._mongoClientPromise;
  }
  const client = new MongoClient(uri, options);
  const promise = client.connect();
  if (process.env.NODE_ENV === 'development') {
    global._mongoClientPromise = promise;
  }
  return promise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db();
}
