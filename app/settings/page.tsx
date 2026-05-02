import { SettingsForm } from '@/components/SettingsForm';

export default function SettingsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto w-full">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Settings</h1>
        <p className="text-gray-500">Manage your account settings and preferences.</p>
      </div>
      <SettingsForm />
    </div>
  );
}
