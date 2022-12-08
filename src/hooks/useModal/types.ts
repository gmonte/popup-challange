import { ElementType } from 'react'

// eslint-disable-next-line
export interface Modal<T = any> {
  id: string
  Component: ElementType<T>
  props?: Omit<T, 'id' | 'open' | 'close'>
  open?: boolean
}


export interface OpenModalOptions {
  id: string
}

export interface CloseModalOptions {
  id: string
}

export interface RemoveModalOptions {
  id: string
}

export type CreateModal = <T>(options: Modal<T>) => void

export type RemoveModal = (options: RemoveModalOptions) => void

export type Action =
  { type: 'CREATE_MODAL', modal: Modal }
  | { type: 'OPEN_MODAL', modal: OpenModalOptions }
  | { type: 'CLOSE_MODAL', modal: CloseModalOptions }
  | { type: 'REMOVE_MODAL', modal: RemoveModalOptions }

export interface ModalProps {
  id: string
  open: boolean
  close: () => void
}

export interface IUseModal {
  createModal: CreateModal
  removeModal: RemoveModal
  modals: Modal[]
}
