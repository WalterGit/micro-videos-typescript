import Category from "./category";

describe("Category Tests", () => {
  test("should be category is Movie", () => {
    const category = new Category({
      name: "Walter",
      description: "Movie description",
      is_asctive: true,
      created_at: new Date(),
    });
    expect(category.props.name).toBe("Walter");
    expect(category.props.description).toBe("Movie description");
    expect(category.props.is_asctive).toBe(true);
    expect(category.props.created_at).toBeInstanceOf(Date);  

  });

  test("should be category is Movie", () => {
    const category = new Category({
      name: "",
      is_asctive: true,     
    });
    expect(category.props.name).toBe("");
  });
});
