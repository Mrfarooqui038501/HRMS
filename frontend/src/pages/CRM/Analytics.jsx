import React from 'react';
import { RefreshCw, Maximize2, Filter } from 'lucide-react';
import { RecentContacts } from '../../components/Analytics/RecentContacts';
import { DealsByStage } from '../../components/Analytics/DealsByStage';
import { DealStageChart } from '../../components/Analytics/DealStageChart';
import { RecentDeals } from '../../components/Analytics/RecentDeals';
import { Activity } from '../../components/Analytics/Activity';
import { RecentLeads } from '../../components/Analytics/RecentLeads';
import { LeadsStage } from '../../components/Analytics/LeadsStage';
import { RecentCompanies } from '../../components/Analytics/RecentCompanies';
import { StageChart } from '../../components/Analytics/StageChart';

function Analytics() {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Analytics</h1>
            <div className="text-gray-500">Dashboard / Analytics</div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-200 rounded-lg">
              <RefreshCw size={20} />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-lg">
              <Maximize2 size={20} />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-lg">
              <Filter size={20} />
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg">
              Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentContacts />
          <DealsByStage />
        </div>
      </div>
    </div>

    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DealStageChart />
          <Activity />
        </div>
        <RecentDeals />
      </div>
    </div>

    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LeadsStage title="Lost Leads Stage" barColor="bg-pink-500" />
          <StageChart />
        </div>
        
        <RecentCompanies />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentLeads />
          <LeadsStage title="Won Leads Stage" barColor="bg-green-500" />
        </div>
      </div>
    </div>

    </>
  );
}

export default Analytics;