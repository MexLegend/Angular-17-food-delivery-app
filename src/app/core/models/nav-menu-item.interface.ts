export interface INavMenuItem {
  label?: string;
  link?: string;
  command?: boolean;
  icon?: string;
  description?: string;
  menu?: INavMenuItem[];
  separator?: boolean;
}