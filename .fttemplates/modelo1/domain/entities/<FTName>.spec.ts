import <FTName  | pascalcase> from "./<FTName>";
import { <FTName  | pascalcase>Properties } from "./<FTName>.props";

describe("<FTName  | pascalcase> Tests", () => {
  it("should be <FTName  | lowercase> is Walter/Silva", () => {
    // Triple A (Arrange, Act, Assert)

    // Arrange
    const props: <FTName  | pascalcase>Properties = {
      name: "Walter/Silva",
      description: "Movie description",
      is_active: true,
      created_at: new Date(),
    };

    // Act
    const <FTName  | snakecase>: <FTName  | pascalcase> = new <FTName  | pascalcase>(props);

    // Assert
    expect(<FTName  | snakecase>.props.name).toBe("Walter/Silva");
    expect(<FTName  | snakecase>.props.description).toBe("Movie description");
    expect(<FTName  | snakecase>.props.is_active).toBeTruthy();
    expect(<FTName  | snakecase>.props.created_at).toBe(props.created_at);
  });

  it("should correctly initialize <FTName  | pascalcase> instance", () => {
    // Arrange
    const props: <FTName  | pascalcase>Properties = {
      name: "Walter",
      description: "Movie description1",
      is_active: true,
      created_at: new Date(),
    };

    // Act
    const <FTName  | snakecase> = new <FTName  | pascalcase>(props);

    // Assert
    expect(<FTName  | snakecase>.props).toStrictEqual(props);

  });
});
