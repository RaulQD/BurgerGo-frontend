import type { IconType } from "react-icons/lib";

export type NavLinks = {
  label: string;
  path: string;
  icon: IconType;
}

export type NavigationTab = {
  name: string;
  href?: string;
  icon: IconType;
  isAction?: boolean; // Indica si es una acción (como cerrar sesión)
}

export type Tab = NavigationTab;