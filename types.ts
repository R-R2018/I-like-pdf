// FIX: Import `ReactElement` and use it to type the `icon` property to resolve the "Cannot find namespace 'JSX'" error.
import type { ReactElement } from 'react';

export enum ToolCategory {
  CONVERT = 'CONVERT',
  ORGANIZE = 'ORGANIZE',
  EDIT = 'EDIT',
  OPTIMIZE = 'OPTIMIZE',
  SECURITY = 'SECURITY',
}

export type ToolOption = 'password' | 'compressionLevel';

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: ReactElement;
  category: ToolCategory;
  color: string;
  options?: ToolOption[];
}