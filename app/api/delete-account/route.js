// app/api/delete-account/route.js
import { NextResponse } from 'next/server';
import { DeleteUserById } from '@/server/actions/db/client/delete-account';
import jwt from 'jsonwebtoken';
export async function DELETE(req) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({
        success: false,
        errorCode: 'MISSING_ID',
        errorMessage: 'Registration ID is required.',
      }, { status: 400 });
    }

    const secret = process.env.JWT_DELETE_ACCOUNT_SECRET;
    if (!secret) {
      return NextResponse.json({
        success: false,
        errorCode: 'MISSING_SECRET',
        errorMessage: 'JWT secret not configured.',
      }, { status: 500 });
    }

    const result = await DeleteUserById(userId);

    if (!result.success) {
      return NextResponse.json(result, { status: 500 });
    }

    const token = jwt.sign(
      {
        type: 'account-deleted',
        userId,
      },
      secret,
      { expiresIn: '2m' }
    );

    return NextResponse.json({
      success: true,
      token,
    });
  } catch (error) {
    console.error('API Delete Error:', error);
    return NextResponse.json({
      success: false,
      errorCode: 'SERVER_ERROR',
      errorMessage: 'Something went wrong while deleting the account.',
    }, { status: 500 });
  }
}
