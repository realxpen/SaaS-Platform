import { DashboardCharts } from '@/components/DashboardCharts';
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, Activity, CreditCard } from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    name: 'Subscriptions',
    value: '+2350',
    change: '+180.1%',
    trend: 'up',
    icon: Users,
  },
  {
    name: 'Sales',
    value: '+12,234',
    change: '+19%',
    trend: 'up',
    icon: CreditCard,
  },
  {
    name: 'Active Now',
    value: '+573',
    change: '-201',
    trend: 'down',
    icon: Activity,
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 lg:p-8 w-full">
      <div className="mb-8 border-b border-gray-200 pb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back! Here&apos;s what&apos;s happening with your platform today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex flex-col mb-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">{stat.name}</p>
                <h2 className="text-2xl font-bold text-gray-900">{stat.value}</h2>
              </div>
              <div className="flex justify-between items-end mt-2 text-sm">
                <div className={`flex items-center gap-1 font-medium ${
                  stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
                }`}>
                  {stat.trend === 'up' ? '▲' : '▼'} {stat.change}
                </div>
                <div className="p-1 rounded-md text-gray-400">
                  <Icon className="w-5 h-5 opacity-50" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <DashboardCharts />
    </div>
  );
}
