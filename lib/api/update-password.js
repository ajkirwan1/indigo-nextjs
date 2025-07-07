import { createErrorResponse } from '@/utils/errors/error-response';

export async function updatePasswordByUserId(userId, newPassword) {
  if (!userId || !newPassword) {
    // Early return if params missing, avoid useless API call
    return createErrorResponse(
      'INVALID_INPUT',
      'User ID and new password are required.'
    );
  }

  try {
    const res = await fetch('/api/user/update-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, newPassword }),
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      return createErrorResponse(
        'PASSWORD_UPDATE_FAILED',
        result.errorMessage || 'Failed to update password.'
      );
    }

    return { success: true };
  } catch (error) {
    console.error('Error in updatePasswordByUserId:', error);
    return createErrorResponse(
      'UPDATE_PASSWORD_API_ERROR',
      error.message || 'Unexpected error.'
    );
  }
}
