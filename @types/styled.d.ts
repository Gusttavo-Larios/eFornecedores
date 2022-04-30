import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      BLUE: string;
      RED: string;
      BLACK: string;
      WHITE_100: string;
      WHITE_200: string;
      WHITE_300: string;
    };
    FONTS: {
      LIGHT: string;
      REGULAR: string;
      MEDIUM: string;
      BOLD: string;
      BLACK: string;
    };
  }
}
