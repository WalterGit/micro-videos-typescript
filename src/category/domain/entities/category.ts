export type CategoryProperties = {
  name: string;
  description: string;
  is_asctive: boolean;
  created_at?: Date;
};

export default class Category {
  constructor(public readonly props: CategoryProperties) {}

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get description(): string {
    return this.props.description;
  }

  get is_active(): boolean {
    return this.props.is_asctive;
  }

  get created_at(): Date | undefined {
    return this.props.created_at;
  }
}
