import type { DefaultTheme } from "styled-components";

type ConfigProperty = string | number | boolean | {
  [key: string]: ConfigProperty;
}

export interface Theme extends Record<string, ConfigProperty> {
  colors: {
    primary: string;
    primary_light: string;
    secondary: string;
    border_color: string;
  };
}

declare module 'styled-components' {  
  export interface DefaultTheme extends Theme {}
}
