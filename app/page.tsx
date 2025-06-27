import { AuthTabs } from '@/components/auth/auth-tabs';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <AuthTabs />
      </div>
    </main>
  );
}
