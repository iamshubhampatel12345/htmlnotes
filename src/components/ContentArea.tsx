import { CodeBlock } from './CodeBlock';
import { Lightbulb } from 'lucide-react';

interface Topic {
  title: string;
  definition: string;
  code?: string;
  realWorldExample: string;
  additionalCodes?: Array<{ label: string; code: string }>;
}

interface Phase {
  id: number;
  title: string;
  icon: string;
  topics: Topic[];
}

interface ContentAreaProps {
  phase: Phase;
  topicIndex: number;
}

export function ContentArea({ phase, topicIndex }: ContentAreaProps) {
  const topic = phase.topics[topicIndex];

  if (!topic) {
    return (
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          <div className="text-center py-20">
            <h2 className="text-2xl text-gray-400">No content available</h2>
            <p className="text-gray-500 mt-2">Select a topic from the sidebar</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{phase.icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-blue-400">{topic.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{phase.title}</p>
            </div>
          </div>
        </div>

        {/* Definition */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-100 mb-3 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded"></span>
            What is it?
          </h3>
          <p className="text-gray-300 leading-relaxed bg-gray-800 p-4 rounded-lg border border-gray-700">
            {topic.definition}
          </p>
        </section>

        {/* Code Example */}
        {topic.code && (
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-100 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded"></span>
              Code Example
            </h3>
            <CodeBlock code={topic.code} />
          </section>
        )}

        {/* Additional Code Examples */}
        {topic.additionalCodes && topic.additionalCodes.map((item, index) => (
          <section key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-100 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple-500 rounded"></span>
              {item.label}
            </h3>
            <CodeBlock code={item.code} />
          </section>
        ))}

        {/* Real World Example */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-100 mb-3 flex items-center gap-2">
            <span className="w-1 h-6 bg-yellow-500 rounded"></span>
            Real-World Example
          </h3>
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-700/50 rounded-lg p-5">
            <div className="flex gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <p className="text-gray-200 leading-relaxed">{topic.realWorldExample}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}