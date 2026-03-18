import { useParams, Link, Navigate } from 'react-router-dom'
import { posts } from './posts'
import { Calendar, Tag, ArrowLeft, ExternalLink } from 'lucide-react'
import FremontGuide from '../posts/fremont-street-experience-guide'
import SlotzillaReview from '../posts/slotzilla-zipline-review'
import BarsPost from '../posts/best-bars-fremont-street'
import VsPost from '../posts/fremont-street-vs-the-strip'
import DowntownPost from '../posts/things-to-do-downtown-las-vegas'

const postComponents: Record<string, React.ComponentType> = {
  'fremont-street-experience-guide': FremontGuide,
  'slotzilla-zipline-review': SlotzillaReview,
  'best-bars-fremont-street': BarsPost,
  'fremont-street-vs-the-strip': VsPost,
  'things-to-do-downtown-las-vegas': DowntownPost,
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const meta = posts.find((p) => p.slug === slug)

  if (!meta || !slug || !postComponents[slug]) {
    return <Navigate to="/blog" replace />
  }

  const PostContent = postComponents[slug]

  return (
    <div className="min-h-screen bg-[#05060B] text-white">
      {/* Hero Image */}
      <div className="relative h-72 md:h-[480px] overflow-hidden">
        <img
          src={meta.image}
          alt={meta.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/hero_canopy_aerial.jpg'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05060B] via-[#05060B]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1 bg-[#39B8FF] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            <Tag className="w-3 h-3" /> {meta.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{meta.title}</h1>
          <div className="flex items-center gap-2 mt-3 text-white/50 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-10 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Post Content */}
        <div className="prose-blog [&>article>p]:text-[#A7B0C8] [&>article>p]:leading-relaxed [&>article>p]:mb-4 [&>article>h2]:text-white [&>article>h2]:font-bold [&>article>h2]:text-2xl [&>article>h2]:mt-8 [&>article>h2]:mb-4 [&>article>h3]:text-white [&>article>h3]:font-semibold [&>article>h3]:text-xl [&>article>h3]:mt-6 [&>article>h3]:mb-3 [&>article>ul]:text-[#A7B0C8] [&>article>ul]:mb-4 [&>article>ul]:pl-6 [&>article>ul]:list-disc [&>article>ol]:text-[#A7B0C8] [&>article>ol]:mb-4 [&>article>ol]:pl-6 [&>article>ol]:list-decimal [&>article_li]:mb-2 [&>article_a]:text-[#39B8FF] [&>article_a]:underline [&>article_strong]:text-white [&>article_em]:text-[#A7B0C8]">
          <PostContent />
        </div>

        {/* Affiliate CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#39B8FF]/20 to-[#39B8FF]/5 border border-[#39B8FF]/30 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to Book?</h3>
          <p className="text-white/60 mb-6">Find the best Fremont Street tours and experiences with trusted booking platforms.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={meta.ctaUrl || 'https://www.viator.com/searchResults/all?text=fremont+street+experience'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#39B8FF] text-black font-bold px-8 py-3 rounded-full hover:bg-[#5ccbff] transition-colors"
            >
              {meta.ctaText || 'Book This Experience'} <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link to="/blog" className="text-white/40 hover:text-white transition-colors text-sm">
            ← View all articles
          </Link>
        </div>
      </div>
    </div>
  )
}
