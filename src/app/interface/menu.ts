export interface MenuItem {
  label?: string;
  icon?: string;
  command?(event: MenuItemCommandEvent): void;
  items?: MenuItem[];
  name?: string;
  routerLink?: string;
}
export interface MenuItemCommandEvent {
  /**
   * Browser event.
   */
  originalEvent?: Event;
  /**
   * Selected menu item.
   */
  item?: MenuItem;
  /**
   * Index of the selected item.
   */
  index?: number;
}
