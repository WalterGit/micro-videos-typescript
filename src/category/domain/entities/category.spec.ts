import Category from "./category";

describe("Category Tests", () => {
  test("should be category is Movie", () => {
    const category = new Category({
      name: "Movie",
      description: "Movie description",
      is_asctive: true,
      created_at: new Date(),
    });
    expect(category.props.name).toBe("Movie");
    expect(category.props.description).toBe("Movie description");
    expect(category.props.is_asctive).toBe(true);
    expect(category.props.created_at).toBeInstanceOf(Date);
  });
});
