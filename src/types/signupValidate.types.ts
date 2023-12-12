export interface ISuccessEntityOrganization {
  id: number,
  createdBy: number,
  updatedBy: number,
  createdAt: string,
  updatedAt: string,
  name: string | null,
  category: string | null,
  email: string,
  active: boolean,
  deleted: boolean
}
export interface ISuccessEntityRoles {
  id: number,
  name: string,
  level: number,
  authority: string,
  createdBy: number,
  updatedBy: number,
  createdAt: string,
  updatedAt: string,
  active: boolean,
  deleted: boolean
}
export interface ISuccessEntity {
  id: number,
  createdBy: number,
  updatedBy: number,
  createdAt: string,
  updatedAt: string,
  username: string,
  gender: string | null,
  roles : ISuccessEntityRoles[]
  active: boolean,
  blockedDate: string | null,
  forgetPasswordToken: string | null,
  forgetPasswordTime: string | null,
  forgetPasswordCount: number,
  invalidLoginTime: string | null,
  invalidLoginAttempts: number,
  invalidResetTime: string | null,
  isPasswordResetEnabled: boolean,
  passwordResetAttempts: number,
  lastLoggedIn: string | null,
  lastLoggedOut: string | null,
  accountExpired: boolean,
  accountLocked: boolean,
  credentialsExpired: boolean,
  authorization: string | null,
  currentDate: number,
  firstName: string | null,
  lastName: string | null,
  middleName: string | null,
  subject: string | null,
  phoneNumber: string | null,
  designation: string | null,
  organizations: ISuccessEntityOrganization[]
  isBlocked: boolean,
  cultureId: string | number | null,
  tenantId: number,
  isSuperUser: boolean,
  siteId: string | number | null,
  siteName: string | null,
  deleted: boolean
}
export interface ISuccessMessage {
  message: string
  entity: ISuccessEntity
  status: boolean,
  entityList: any | null,
  responseCode: number,
  totalCount: any | null
}