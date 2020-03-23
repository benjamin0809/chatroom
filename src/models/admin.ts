import { BaseEntity } from './base'

export interface CreateSiteEntity {
  Code: string
  Name: string
  Level?: number
  SortIndex?: number
  Status?: number
  Description?: string
  Remark?: string
}
export interface UpdateSiteEntity extends CreateSiteEntity {
  CodeId: number
}

export interface CreateChatRoomEntity {
  name: string
  description?: string
  password?: string
  avatar?: string
  has_pwd: number
}

export interface UpdateChatRoomEntity extends CreateChatRoomEntity {
  id: number
}

export interface MeetingRoomEntity extends UpdateChatRoomEntity, BaseEntity {

}
