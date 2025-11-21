import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Users } from "lucide-react";

const Index = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4 animate-in fade-in slide-in-from-top-4">
            <Sparkles className="h-4 w-4" />
            <span>Welcome to Fresh Thoughts</span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl gradient-hero bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4">
            Fresh Thoughts.
            <br />
            Bold Perspectives.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8">
            A space for authentic voices, real stories, and meaningful conversations
            about the world we live in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12">
            <Button
              asChild
              size="lg"
              className="rounded-full gradient-primary text-white shadow-elevated hover:shadow-soft transition-smooth text-lg px-8"
            >
              <Link to="/blog">
                Start Reading <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full text-lg px-8"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-8 bg-card rounded-3xl shadow-soft hover:shadow-elevated transition-smooth">
            <div className="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-heading font-bold text-2xl">Authenticity</h3>
            <p className="text-muted-foreground">
              Real voices sharing genuine experiences without filters or facades.
            </p>
          </div>
          <div className="text-center space-y-4 p-8 bg-card rounded-3xl shadow-soft hover:shadow-elevated transition-smooth">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-heading font-bold text-2xl">Truth</h3>
            <p className="text-muted-foreground">
              Honest perspectives backed by research, empathy, and critical thinking.
            </p>
          </div>
          <div className="text-center space-y-4 p-8 bg-card rounded-3xl shadow-soft hover:shadow-elevated transition-smooth">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-heading font-bold text-2xl">Community</h3>
            <p className="text-muted-foreground">
              Building connections through shared curiosity and meaningful dialogue.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Featured Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            Latest perspectives on what matters most
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full text-lg px-8"
          >
            <Link to="/blog">
              View All Posts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-12 md:p-16 text-center text-white shadow-elevated">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Join the Community
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get fresh perspectives delivered to your inbox. No spam, just thoughtful
            content you'll actually want to read.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button
              type="submit"
              size="lg"
              className="rounded-full bg-white text-primary hover:bg-white/90 font-semibold px-8"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
