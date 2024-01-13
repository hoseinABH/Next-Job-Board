import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// Types
import type { AppDispatch, RootState } from '@/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
