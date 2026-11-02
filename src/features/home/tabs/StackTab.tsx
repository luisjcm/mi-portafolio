// src/features/home/tabs/StackTab.tsx
// Pestaña "Stack Técnico". Los datos están en content/stack.json.
import stackData from '../../../content/stack.json';
import TechIcon from '../../../components/TechIcon';
import Card from '../../../components/ui/Card';
import Tag from '../../../components/ui/Tag';

export default function StackTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stackData.map((group) => (
        <Card key={group.category} className={`p-6 ${group.spanFull ? 'md:col-span-2' : ''}`}>
          <h3 className="text-brand-text font-semibold text-[14px] mb-4 flex items-center gap-2">
            <TechIcon name={group.icon} />
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
