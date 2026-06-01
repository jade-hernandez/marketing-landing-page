import { useState } from "react";

import { validateEmail } from "../../utils/validation";
import type { ToastState } from "../../utils/types";

const FALLBACK_ERROR =
  "Failed to subscribe. Please ensure your email is correct or try again later.";

const SUCCESS_MESSAGE = "Subscription successful! Please check your email to confirm.";

function useNewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState<ToastState | null>(null);

  const submitNewsletterForm = async () => {
    setError("");
    setToast(null);

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Email address is required.");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/projects/challenges/newsletter",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmedEmail })
        }
      );

      if (!response.ok) {
        const errorMessage = await response
          .json()
          .then(data => data.error)
          .catch(() => null);

        throw new Error(errorMessage || FALLBACK_ERROR);
      }

      setEmail("");
      setToast({ type: "success", message: SUCCESS_MESSAGE });
    } catch (error) {
      const message =
        error instanceof TypeError || !(error instanceof Error) ? FALLBACK_ERROR : error.message;

      setToast({ type: "error", message });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    isLoading,
    error,
    toast,
    setEmail,
    setToast,
    submitNewsletterForm
  };
}

export { useNewsletterForm };
