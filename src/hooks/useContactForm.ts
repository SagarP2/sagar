"use client";

import { useState, useCallback } from "react";
import { toast } from "sonner";
import {
  CONTACT_SERVICE_OPTIONS,
  CONTACT_BUDGET_OPTIONS,
} from "@/constants/portfolio";
import { contactFormSchema } from "@/lib/validations/contact";
import type { ContactApiResponse } from "@/types/portfolio";

export interface ContactFormState {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_STATE: ContactFormState = {
  name: "",
  email: "",
  service: CONTACT_SERVICE_OPTIONS[0],
  budget: CONTACT_BUDGET_OPTIONS[0],
  message: "",
};

export function useContactForm() {
  const [formState, setFormState] = useState<ContactFormState>(INITIAL_STATE);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const updateField = useCallback(
    <K extends keyof ContactFormState>(field: K, value: ContactFormState[K]) => {
      setFormState((prev) => ({ ...prev, [field]: value }));
      if (status === "error") {
        setStatus("idle");
        setErrorMessage(null);
      }
    },
    [status]
  );

  const resetStatus = useCallback(() => {
    setFormState(INITIAL_STATE);
    setStatus("idle");
    setErrorMessage(null);
    setReferenceId(null);
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus("submitting");
      setErrorMessage(null);

      const payload = {
        ...formState,
        subject: `${formState.service} (${formState.budget})`,
      };

      const parsed = contactFormSchema.safeParse(payload);
      if (!parsed.success) {
        const firstIssue =
          parsed.error.issues[0]?.message ||
          "Please check your form fields and try again.";
        setStatus("error");
        setErrorMessage(firstIssue);
        toast.error(firstIssue);
        return;
      }

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
        });

        const result = (await response.json()) as ContactApiResponse;
        if (!response.ok || !result.success) {
          const msg =
            !result.success && result.message
              ? result.message
              : "Unable to send your message right now.";
          setStatus("error");
          setErrorMessage(msg);
          toast.error(msg);
          return;
        }

        setReferenceId(result.data.referenceId);
        setStatus("success");
        toast.success(result.message);
      } catch {
        const fallbackError =
          "Network error occurred while submitting. Please try again or email directly.";
        setStatus("error");
        setErrorMessage(fallbackError);
        toast.error(fallbackError);
      }
    },
    [formState]
  );

  return {
    formState,
    status,
    errorMessage,
    referenceId,
    updateField,
    handleSubmit,
    resetStatus,
  };
}

