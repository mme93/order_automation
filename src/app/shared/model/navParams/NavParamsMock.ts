export class NavParamsMock {
  static returnParam = null;

  public get(): any {
    if (NavParamsMock.returnParam) {
      return NavParamsMock.returnParam;
    }
    return JSON.stringify('default');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  static setParams(value: any) {
    NavParamsMock.returnParam = value;
  }
}
