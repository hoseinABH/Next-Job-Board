export type ModalKeys = 'confirmDelete';

export type CommonModals = Record<ModalKeys, boolean>;

export type Nullable<T> = T | null;

export type ModalMetadata = Nullable<Record<string, any>>;
