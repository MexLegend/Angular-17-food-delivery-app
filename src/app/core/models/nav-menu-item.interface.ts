export interface INavMenuItem {
  label: string;
  link: string;
  icon?: string;
  description?: string;
  menu?: INavMenuItem[];
}