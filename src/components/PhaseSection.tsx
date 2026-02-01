import { ConceptCard } from './ConceptCard';

interface Topic {
  title: string;
  concepts: Concept[];
}

interface Concept {
  name: string;
  definition: string;
  code?: string;
  example?: string;
  tips?: string[];
}

interface Phase {
  id: number;
  title: string;
  icon: string;
  description: string;
  topics: Topic[];
}

interface PhaseSectionProps {
  phase: Phase;
}

export function PhaseSection({ phase }: PhaseSectionProps) {
  return (
    <div className="space-y-8">
      {/* Phase Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 shadow-xl">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-5xl">{phase.icon}</span>
          <div>
            <div className="text-blue-100 text-sm font-medium">Phase {phase.id}</div>
            <h2 className="text-3xl font-bold text-white">{phase.title}</h2>
          </div>
        </div>
        <p className="text-blue-50 text-lg">{phase.description}</p>
      </div>

      {/* Topics */}
      {phase.topics.map((topic, topicIndex) => (
        <div key={topicIndex} className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3 pb-3 border-b border-slate-800">
            <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
              {topicIndex + 1}
            </span>
            {topic.title}
          </h3>

          <div className="grid gap-4">
            {topic.concepts.map((concept, conceptIndex) => (
              <ConceptCard key={conceptIndex} concept={concept} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
