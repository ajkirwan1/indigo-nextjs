import { createErrorResponse } from "@/utils/errors/error-response";

export async function deleteAccountByRegistrationId(userId) {
  try {
    const res = await fetch('/api/delete-account', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });

    const result = await res.json();

    console.log(result, "result")

    if (!res.ok || !result.success) {
      return createErrorResponse('ACCOUNT_DELETE_FAILED', result.errorMessage || 'Deletion failed.');
    }

    // ✅ Success response includes the token
    return {
      success: true,
      token: result.token,
    };

  } catch (error) {
    console.error('Error in deleteAccountByRegistrationId:', error);
    return createErrorResponse('DELETE_API_ERROR', error.message || 'Unexpected error.');
  }
}
