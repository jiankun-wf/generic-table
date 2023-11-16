export type ActionItem = {
  color?: string | "primary" | "success" | "warning" | "error";
  onClick?: (...args: any[]) => void;

  confirm?: {
    title?: string;
    content?: string;
    onConfirm?: (...args: any[]) => void;
  };
};

export type Key = string | number;

export type Size = "small" | "large" | "medium";
 