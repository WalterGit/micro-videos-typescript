import { <FTName  | pascalcase>Properties } from "./<FTName>.props";

export default class <FTName  | pascalcase> {
  constructor(public readonly props: <FTName  | pascalcase>Properties) {}

 get name(): string {
    return this.props.name;
  }

  get description(): string | undefined{
    return this.props.description;
  }

  get is_active(): boolean {
    return this.props.is_active;
  }

  get created_at(): Date | undefined {
    return this.props.created_at;
  }
}
