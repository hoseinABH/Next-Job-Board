export type ModalKeys = 'confirmDelete';

export type CommonModals = Record<ModalKeys, boolean>;

export type Nullable<T> = T | null;

export interface DialogData<E> {
  title: string;
  message: string;
  model: {
    id: string;
    entity: E;
  };
}
