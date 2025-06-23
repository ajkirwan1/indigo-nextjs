import { createErrorResponse } from "@/utils/errors/error-response";

export async function deleteAccountByRegistrationId(registrationId) {
  try {
    const res = await fetch('/api/delete-account', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ registrationId }),
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      return createErrorResponse('ACCOUNT_DELETE_FAILED', result.errorMessage || 'Deletion failed.');
    }

    return { success: true };
  } catch (error) {
    console.error('Error in deleteAccountByRegistrationId:', error);
    return createErrorResponse('DELETE_API_ERROR', error.message || 'Unexpected error.');
  }
}
