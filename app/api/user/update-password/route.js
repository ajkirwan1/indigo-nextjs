import { NextResponse } from 'next/server';
import db from '@/modules/db';
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { userId, newPassword } = await req.json();

    if (!userId || !newPassword) {
      return NextResponse.json(
        { success: false, errorMessage: 'Missing user ID or new password.' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const user = await db.userNew.update({
      where: { id: userId },
      data: { hashedPassword },
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Update password error:', error);
    return NextResponse.json(
      { success: false, errorMessage: 'Internal server error.' },
      { status: 500 }
    );
  }
}
