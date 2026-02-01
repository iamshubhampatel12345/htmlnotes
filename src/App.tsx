import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ContentArea } from './components/ContentArea';
import { phases } from './data/phases';

export default function App() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(0);

  return (
    <div className="flex h-screen bg-gray-950 text-gray-100">
      <Navigation
        phases={phases}
        selectedPhase={selectedPhase}
        selectedTopic={selectedTopic}
        onPhaseSelect={setSelectedPhase}
        onTopicSelect={setSelectedTopic}
      />
      <ContentArea
        phase={phases[selectedPhase]}
        topicIndex={selectedTopic}
      />
    </div>
  );
}
