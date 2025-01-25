export class User {
  constructor(
    public localId: string,
    public email: string,
    public displayName: string,
    public photoUrl: string,
    public lastLoginAt: number
  ) {}
}