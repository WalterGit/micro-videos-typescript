import category from "./category";
import Category from "./category";

describe("Category Tests", () => {
  test("should be category is Movie", () => {
    // Triple A (Arrange, Act, Assert)

    // Arrange
    const props = {
      name: "Walter",
      description: "Movie description",
      is_asctive: true,
      created_at: new Date(),
    };

    // Act
    const category: Category = new Category(props);

    // Assert
    expect(category.props.name).toBe("Walter");
    expect(category.props.description).toBe("Movie description");
    expect(category.props.is_asctive).toBe(true);
    expect(category.props.created_at).toBeInstanceOf(Date);
  });
});
