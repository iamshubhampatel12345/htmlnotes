import { Lightbulb, Code2, Rocket } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

interface Concept {
  name: string;
  definition: string;
  code?: string;
  example?: string;
  tips?: string[];
}

interface ConceptCardProps {
  concept: Concept;
}

export function ConceptCard({ concept }: ConceptCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-600/50 transition-all">
      {/* Concept Name */}
      <h4 className="text-xl font-semibold text-blue-400 mb-3">{concept.name}</h4>

      {/* Definition */}
      <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
        <p className="text-slate-300 leading-relaxed">{concept.definition}</p>
      </div>

      {/* Code Example */}
      {concept.code && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Code Example</span>
          </div>
          <CodeBlock code={concept.code} />
        </div>
      )}

      {/* Real-World Example */}
      {concept.example && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Real-World Example</span>
          </div>
          <div className="bg-purple-950/30 border border-purple-800/30 rounded-lg p-4">
            <p className="text-slate-300 text-sm leading-relaxed">{concept.example}</p>
          </div>
        </div>
      )}

      {/* Tips */}
      {concept.tips && concept.tips.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Pro Tips</span>
          </div>
          <ul className="space-y-2">
            {concept.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="text-yellow-400 mt-1">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
