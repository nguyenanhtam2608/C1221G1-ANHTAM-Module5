export class  Todo {
  // tslint:disable-next-line:variable-name
  private _id?: number;
  // tslint:disable-next-line:variable-name
  private _content?: string;
  // tslint:disable-next-line:variable-name
  private _complete?: boolean;
  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get complete(): boolean {
    return this._complete;
  }

  set complete(value: boolean) {
    this._complete = value;
  }
}
