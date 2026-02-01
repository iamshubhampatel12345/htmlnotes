import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Phase {
  id: number;
  title: string;
  icon: string;
  topics: Array<{
    title: string;
    definition: string;
    code?: string;
    realWorldExample: string;
  }>;
}

interface NavigationProps {
  phases: Phase[];
  selectedPhase: number;
  selectedTopic: number;
  onPhaseSelect: (phaseIndex: number) => void;
  onTopicSelect: (topicIndex: number) => void;
}

export function Navigation({
  phases,
  selectedPhase,
  selectedTopic,
  onPhaseSelect,
  onTopicSelect,
}: NavigationProps) {
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set([0]));

  const togglePhase = (phaseIndex: number) => {
    const newExpanded = new Set(expandedPhases);
    if (newExpanded.has(phaseIndex)) {
      newExpanded.delete(phaseIndex);
    } else {
      newExpanded.add(phaseIndex);
    }
    setExpandedPhases(newExpanded);
  };

  const handlePhaseClick = (phaseIndex: number) => {
    onPhaseSelect(phaseIndex);
    onTopicSelect(0);
    // Toggle expand/collapse when clicking phase
    togglePhase(phaseIndex);
  };

  return (
    <nav className="w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-400">HTML Mastery</h1>
        <p className="text-sm text-gray-400 mt-1">Complete HTML Learning Guide</p>
      </div>
      
      <div className="p-4">
        {phases.map((phase, phaseIndex) => (
          <div key={phase.id} className="mb-2">
            <button
              onClick={() => handlePhaseClick(phaseIndex)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                selectedPhase === phaseIndex
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-800 text-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{phase.icon}</span>
                <span className="font-medium text-sm">{phase.title}</span>
              </div>
              <span className="p-1">
                {expandedPhases.has(phaseIndex) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </span>
            </button>
            
            {expandedPhases.has(phaseIndex) && (
              <div className="ml-8 mt-1 space-y-1">
                {phase.topics.map((topic, topicIndex) => (
                  <button
                    key={topicIndex}
                    onClick={() => {
                      onPhaseSelect(phaseIndex);
                      onTopicSelect(topicIndex);
                    }}
                    className={`w-full text-left p-2 px-3 rounded text-sm transition-colors ${
                      selectedPhase === phaseIndex && selectedTopic === topicIndex
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-800 text-gray-400'
                    }`}
                  >
                    {topic.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}