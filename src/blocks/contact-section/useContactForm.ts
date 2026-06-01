import { useReducer } from "react";

import { validateEmail } from "../../utils/validation";
import type { ToastState } from "../../utils/types";

export const MAX_MESSAGE_LENGTH = 500;

const FALLBACK_ERROR =
  "Failed to submit. Please ensure your details are correct or try again later.";

type FormState = {
  name: string;
  email: string;
  message: string;
  isLoading: boolean;
  errors: { name: string; email: string; message: string };
  toast: ToastState | null;
};

type FormAction =
  | { type: "SET_FIELD"; field: "name" | "email" | "message"; value: string }
  | { type: "SET_ERRORS"; errors: FormState["errors"] }
  | { type: "SET_LOADING"; isLoading: boolean }
  | { type: "SET_TOAST"; toast: ToastState | null }
  | { type: "RESET_FORM" };

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  isLoading: false,
  errors: { name: "", email: "", message: "" },
  toast: null
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading
      };
    case "SET_TOAST":
      return {
        ...state,
        toast: action.toast
      };
    case "RESET_FORM":
      return {
        ...initialState
      };
    default:
      return state;
  }
}

function useContactForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { name, email, message, isLoading, errors, toast } = state;

  const submitContactForm = async () => {
    dispatch({ type: "SET_ERRORS", errors: { name: "", email: "", message: "" } });

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const newErrors = { name: "", email: "", message: "" };
    let hasError = false;

    if (!trimmedName) {
      newErrors.name = "Name is required.";
      hasError = true;
    }

    if (!trimmedEmail) {
      newErrors.email = "Email address is required.";
      hasError = true;
    } else if (!validateEmail(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address.";
      hasError = true;
    }

    if (!trimmedMessage) {
      newErrors.message = "Message is required.";
      hasError = true;
    } else if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must not exceed ${MAX_MESSAGE_LENGTH} characters.`;
      hasError = true;
    }

    if (hasError) {
      dispatch({ type: "SET_ERRORS", errors: newErrors });
      return;
    }

    dispatch({ type: "SET_LOADING", isLoading: true });

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/projects/challenges/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage
          })
        }
      );

      if (!response.ok) {
        const errorMessage = await response
          .json()
          .then(data => data.error)
          .catch(() => null);

        throw new Error(errorMessage || FALLBACK_ERROR);
      }

      const data = await response.json();

      dispatch({ type: "RESET_FORM" });
      dispatch({ type: "SET_TOAST", toast: { type: "success", message: data.message } });
    } catch (error) {
      const message =
        error instanceof TypeError || !(error instanceof Error) ? FALLBACK_ERROR : error.message;

      dispatch({
        type: "SET_TOAST",
        toast: { type: "error", message }
      });
    } finally {
      dispatch({ type: "SET_LOADING", isLoading: false });
    }
  };

  return {
    name,
    email,
    message,
    isLoading,
    errors,
    toast,
    setField: (field: "name" | "email" | "message", value: string) =>
      dispatch({ type: "SET_FIELD", field, value }),
    setToast: (toast: ToastState | null) => dispatch({ type: "SET_TOAST", toast }),
    submitContactForm
  };
}

export { useContactForm };
