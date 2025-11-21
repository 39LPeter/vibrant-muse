import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <Layout>
      <article className="container mx-auto px-4 py-20">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8 rounded-full">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/20 mb-4">
            {post.category}
          </Badge>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <span className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Featured Image */}
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-video object-cover rounded-3xl shadow-elevated mb-12"
            />
          ) : (
            <div className="w-full aspect-video gradient-primary rounded-3xl shadow-elevated mb-12 flex items-center justify-center text-white text-8xl font-heading">
              {post.title.charAt(0)}
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="font-heading font-bold text-3xl mt-12 mb-6 text-foreground">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-heading font-bold text-2xl mt-8 mb-4 text-foreground">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="border-y border-border py-8 mb-12">
            <h3 className="font-heading font-semibold text-xl mb-4">Share this article</h3>
            <div className="flex gap-3">
              <Button
                onClick={() => handleShare('twitter')}
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Twitter className="h-5 w-5 mr-2" /> Twitter
              </Button>
              <Button
                onClick={() => handleShare('facebook')}
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Facebook className="h-5 w-5 mr-2" /> Facebook
              </Button>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }}
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Share2 className="h-5 w-5 mr-2" /> Copy Link
              </Button>
            </div>
          </div>

          {/* Ad Placeholder */}
          <div className="bg-muted/50 rounded-3xl p-12 text-center mb-12 border-2 border-dashed border-border">
            <p className="text-muted-foreground font-medium">Advertisement Space</p>
            <p className="text-muted-foreground text-sm mt-2">
              Google AdSense or Sponsored Content
            </p>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} {...relatedPost} />
              ))}
            </div>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default BlogPost;
