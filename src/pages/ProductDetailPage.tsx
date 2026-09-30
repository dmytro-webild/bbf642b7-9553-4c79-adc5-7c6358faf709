import { useParams, Link, Navigate } from 'react-router-dom';
import { findProduct } from '@/data/products';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? findProduct(slug) : undefined;
  if (!product) return <Navigate to="/products" replace />;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow pt-24">
        <div className="w-content-width mx-auto py-16 flex flex-col gap-8">
          <Link to="/products" className="text-sm opacity-60 hover:opacity-100 w-fit">← Back to Products</Link>
          <img src={product.imageSrc} alt={product.title} className="w-full rounded-theme object-cover max-h-[60vh]" />
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-5xl font-bold">{product.title}</h1>
            {product.description && <p className="text-lg leading-relaxed opacity-80">{product.description}</p>}
            {product.body && <div className="text-base leading-relaxed opacity-80 whitespace-pre-line">{product.body}</div>}
          </div>
          {Array.isArray(product.specs) && product.specs.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-foreground/10 pt-6">
              {product.specs.map((s, i) => (<div key={i} className="flex flex-col"><span className="text-xs uppercase tracking-wide opacity-50">{s.label}</span><span className="text-base">{s.value}</span></div>))}
            </div>
          )}
          <button className="px-6 py-3 bg-primary-cta text-primary-cta-text rounded-full font-medium w-fit">Add to Cart</button>
        </div>
      </main>
    </div>
  );
}
