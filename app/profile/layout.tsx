import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { verifyAccessCookie, getAccessCookieName } from '@/lib/access';

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(getAccessCookieName())?.value;
    if (!verifyAccessCookie(cookie)) {
      redirect('/enter');
    }
  } catch {
    redirect('/enter');
  }
  return <>{children}</>;
}
