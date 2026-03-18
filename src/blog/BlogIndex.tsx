import { Link } from 'react-router-dom'
import { posts } from './posts'
import { ArrowRight, Zap } from 'lucide-react'

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#05060B] text-white">
      {/* Header */}
      <div className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] to-[#05060B]" />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-[#39B8FF] fill-[#39B8FF]" />
            <span className="text-[#39B8FF] text-sm font-semibold uppercase tracking-widest">Fremont Street Guide</span>
            <Zap className="w-6 h-6 text-[#39B8FF] fill-[#39B8FF]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Fremont Street Blog</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Guides, reviews, and insider tips to help you explore the best of Downtown Las Vegas and the Fremont Street Experience.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#39B8FF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#39B8FF]/10"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/hero_canopy_aerial.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060B]/80 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#39B8FF] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-white/40 text-xs mb-2">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <h2 className="text-lg font-bold mb-2 group-hover:text-[#39B8FF] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#39B8FF] text-sm font-semibold group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back to Home */}
      <div className="text-center pb-16">
        <Link to="/" className="text-white/50 hover:text-white transition-colors text-sm">
          ← Back to Fremont Attractions
        </Link>
      </div>
    </div>
  )
}
