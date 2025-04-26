// app/redirecting/page.tsx
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function RedirectingPage() {
  const session = await auth();

  console.log(session, "REDIRECT SESSION")

  if (!session) {
    // Not logged in, send to login
    redirect('/');
  }

  const role = session.user.role;

  if (role === 'admin') {
    redirect('/admin');
  } else if (role === 'user') {
    redirect('/account');
  } else {
    redirect('/');
  }
}