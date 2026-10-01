import { useParams, Link, Navigate } from 'react-router-dom';
import { findProperty } from '@/data/properties';

export default function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const property = slug ? findProperty(slug) : undefined;
  if (!property) return <Navigate to="/properties" replace />;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow pt-24">
        <div className="w-content-width mx-auto py-16 flex flex-col gap-8">
          <Link to="/properties" className="text-sm opacity-60 hover:opacity-100 w-fit">← Back to Propertys</Link>
          <img src={property.imageSrc} alt={property.title} className="w-full rounded-theme object-cover max-h-[60vh]" />
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-5xl font-bold">{property.title}</h1>
            {property.description && <p className="text-lg leading-relaxed opacity-80">{property.description}</p>}
            {property.body && <div className="text-base leading-relaxed opacity-80 whitespace-pre-line">{property.body}</div>}
          </div>
          {Array.isArray(property.specs) && property.specs.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-foreground/10 pt-6">
              {property.specs.map((s, i) => (<div key={i} className="flex flex-col"><span className="text-xs uppercase tracking-wide opacity-50">{s.label}</span><span className="text-base">{s.value}</span></div>))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
