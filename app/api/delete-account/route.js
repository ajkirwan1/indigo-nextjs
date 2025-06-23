// app/api/delete-account/route.js
import { NextResponse } from 'next/server';
import { DeleteUserByRegistrationId } from '@/server/actions/db/client/delete-account';

export async function DELETE(req) {
  try {
    const { registrationId } = await req.json();

    if (!registrationId) {
      return NextResponse.json({
        success: false,
        errorCode: 'MISSING_ID',
        errorMessage: 'Registration ID is required.',
      }, { status: 400 });
    }

    const result = await DeleteUserByRegistrationId(registrationId);

    if (!result.success) {
      return NextResponse.json(result, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Delete Error:', error);
    return NextResponse.json({
      success: false,
      errorCode: 'SERVER_ERROR',
      errorMessage: 'Something went wrong while deleting the account.',
    }, { status: 500 });
  }
}
