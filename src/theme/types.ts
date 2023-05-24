export interface IThemeContext {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
}
