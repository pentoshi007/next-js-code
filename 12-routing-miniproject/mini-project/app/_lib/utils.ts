// 
// PRIVATE FOLDER EXAMPLE - UTILITY FUNCTIONS
// File: app/_lib/utils.ts
// 
// This is a private folder (_lib) containing utility functions
// These functions are not routes, just helper functions
// 
// Private folder benefits:
// - Keeps utilities organized
// - Prevents accidental URL routing
// - Co-locates helpers with the features that use them
// - Clear separation between routes and utilities
//

/**
 * Validates email format
 * @param email - Email address to validate
 * @returns boolean - True if email is valid
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates password strength
 * @param password - Password to validate
 * @returns object with validation details
 */
export function validatePassword(password: string): {
  isValid: boolean;
  strength: "weak" | "medium" | "strong";
  messages: string[];
} {
  const messages: string[] = [];
  let strength: "weak" | "medium" | "strong" = "weak";

  if (password.length < 8) {
    messages.push("Password must be at least 8 characters");
  } else if (password.length < 12) {
    strength = "medium";
  } else {
    strength = "strong";
  }

  if (!/[A-Z]/.test(password)) {
    messages.push("Must contain uppercase letter");
  }

  if (!/[a-z]/.test(password)) {
    messages.push("Must contain lowercase letter");
  }

  if (!/[0-9]/.test(password)) {
    messages.push("Must contain number");
  }

  if (!/[!@#$%^&*]/.test(password)) {
    messages.push("Must contain special character (!@#$%^&*)");
  }

  return {
    isValid: messages.length === 0,
    strength,
    messages,
  };
}

/**
 * Formats date to readable string
 * @param date - Date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/**
 * Capitalizes first letter of string
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generates random ID
 * @returns Random ID string
 */
export function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 11);
}
