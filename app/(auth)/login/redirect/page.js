// app/redirecting/page.tsx
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function RedirectingPage() {
  const session = await auth();

  if (!session) {
    // Not logged in, send to login
    redirect('/auth/signin');
  }

  const role = session.user.role;

  if (role === 'admin') {
    redirect('/admin');
  } else if (role === 'user') {
    redirect('/dashboard');
  } else {
    redirect('/');
  }
}