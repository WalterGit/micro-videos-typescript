import Category from "./category";

describe("Category Tests", () => {
  test("should be category is Movie", () => {
    const category = new Category('Movie');
    expect(category.name).toBe('Movie');
  });
});
