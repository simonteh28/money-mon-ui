import { MenuItem } from 'primeng/api';

export interface mmMenuItem extends MenuItem {
  subMenu?: MenuItem[];
}
