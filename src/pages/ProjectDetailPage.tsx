import { useParams, Link, Navigate } from 'react-router-dom';
import { findProject } from '@/data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? findProject(slug) : undefined;
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow pt-24">
        <div className="w-content-width mx-auto py-16 flex flex-col gap-8">
          <Link to="/projects" className="text-sm opacity-60 hover:opacity-100 w-fit">← Back to Projects</Link>
          <img src={project.imageSrc} alt={project.title} className="w-full rounded-theme object-cover max-h-[60vh]" />
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-5xl font-bold">{project.title}</h1>
            {project.description && <p className="text-lg leading-relaxed opacity-80">{project.description}</p>}
            {project.body && <div className="text-base leading-relaxed opacity-80 whitespace-pre-line">{project.body}</div>}
          </div>
          {Array.isArray(project.specs) && project.specs.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-foreground/10 pt-6">
              {project.specs.map((s, i) => (<div key={i} className="flex flex-col"><span className="text-xs uppercase tracking-wide opacity-50">{s.label}</span><span className="text-base">{s.value}</span></div>))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
