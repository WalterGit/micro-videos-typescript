import category from "./category";
import Category from "./category";
import { CategoryProperties } from "./category.types";

describe("Category Tests", () => {
  test("should be category is Walter/Silva", () => {
    // Triple A (Arrange, Act, Assert)

    // Arrange
    const props: CategoryProperties = {
      name: "Walter/Silva",
      description: "Movie description",
      is_active: true,
      created_at: new Date(),
    };

    // Act
    const category: Category = new Category(props);

    // Assert
    expect(category.props.name).toBe("Walter/Silva");
    expect(category.props.description).toBe("Movie description");
    expect(category.props.is_active).toBeTruthy();
    expect(category.props.created_at).toBe(props.created_at);
  });

  test("should correctly initialize Category instance", () => {
    // Arrange
    const props: CategoryProperties = {
      name: "Walter",
      description: "Movie description1",
      is_active: true,
      created_at: new Date(),
    };

    // Act
    const category = new Category(props);

    // Assert
    expect(category.props).toMatchObject(props);
  });
});
