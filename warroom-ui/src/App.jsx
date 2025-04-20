import React from 'react';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Swarm War Room Dashboard</h1>
      <div className="space-y-4">
        <p>Profit Today: $1,258.22</p>
        <p>Active Bots: 10,000</p>
        <p>Top Funnel: AI Ebook PDF (EPC $3.41)</p>
        <div className="flex gap-4">
          <Button>Deploy TikTok Swarm</Button>
          <Button variant="outline">Rotate Offers</Button>
          <Button variant="ghost">Pause EU Swarm</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
