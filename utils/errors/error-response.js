export function createErrorResponse(code, message) {
    return {
      success: false,
      errorCode: code,
      errorMessage: message,
    };
  }
  