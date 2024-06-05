import { Collection as TCollection } from "../api/collection/Collection";

export const COLLECTION_TITLE_FIELD = "title";

export const CollectionTitle = (record: TCollection): string => {
  return record.title?.toString() || String(record.id);
};
