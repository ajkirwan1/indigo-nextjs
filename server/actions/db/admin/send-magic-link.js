'use server';

import db from '@/modules/db';
import crypto from 'crypto';
import { sendMagicLinkEmail } from '@/lib/mail/send-magic-link-email';

export async function sendMagicLink(email, userId) {
  try {
    // Step 1: Generate a secure token
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24 hour expiry

    // Step 2: Save to DB
    await db.magicLinkToken.create({
      data: {
        email,
        token,
        expiresAt,
        userId
      },
    });

    // Step 3: Build the URL
    const magicLink = `${process.env.NEXT_PUBLIC_BASE_URL}/new-user?token=${token}`;

    // Step 4: Send the email
    await sendMagicLinkEmail(email, magicLink);

    return { success: true };
  } catch (error) {
    console.error('Error sending magic link:', error);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}
