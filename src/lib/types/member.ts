import { MemberStatus, MemberType } from "../enums/member.enum copy"

export interface MemberInput{
    memberType?: MemberType
    memberStatus?: MemberStatus
    memberNick: string
    memberPassword: string
    memberPhone: string
    memberAddress?: string
    memberDesc?: string
    memberImage?: string
    memberPoints?: number 
}

export interface Member{
    _id : string
    memberType?: MemberType
    memberStatus?: MemberStatus
    memberNick: string
    memberPassword?: string
    memberPhone: string
    memberAddress?: string
    memberDesc?: string
    memberImage?: string
    memberPoints: number 
    createdAt: Date
    updatedAt: Date
}

export interface MemberInput{
    memberNick: string
    memberPassword: string
}

export interface LoginInput{
    memberNick: string
    memberPassword: string

}

export interface MemberUpdateInput{
    memberNick?: string
    memberPassword?: string
    memberPhone?: string
    memberAddress?: string
    memberDesc?: string
    memberImage?: string
}