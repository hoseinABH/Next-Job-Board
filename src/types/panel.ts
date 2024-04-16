import type { DialogData } from './common';

export type ModalKeys = 'createPosition' | 'resumePreview';
export type PanelModals = Record<ModalKeys, boolean>;

export type LoadingKeys = 'getAllPositions';
export type PanelLoading = Record<LoadingKeys, boolean>;

export type DeleteDialogData = DialogData<'position'>;
