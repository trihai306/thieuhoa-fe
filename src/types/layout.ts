export type MenuType = {
  text: string;
  url: string;
  id: number;
  children?: MenuType[];
};
