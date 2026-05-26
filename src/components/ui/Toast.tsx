import { useEffect } from "react";

import { Badge } from "./Badge";

type ToastProps = {
  type: "success" | "error";
  message: string;
  onClose: () => void;
  duration?: number;
};

const typeStyles = {
  success: {
    bg: "bg-green-50",
    text: "text-green-700",
    label: "Success"
  },
  error: {
    bg: "bg-red-50",
    text: "text-red-800",
    label: "Error"
  }
};

function Toast({ type, message, onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const styles = typeStyles[type];
  const role = type === "error" ? "alert" : "status";

  return (
    <div
      className={`flex items-center justify-center gap-3 rounded-full ${styles.bg} p-1 pr-3 text-sm font-medium ${styles.text}`}
      role={role}
    >
      <Badge
        label={styles.label}
        classNames={styles.text}
      />
      <span>{message}</span>
    </div>
  );
}

export { Toast };
