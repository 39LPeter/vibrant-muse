import { Layout } from "@/components/Layout";
import { Heart, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="w-32 h-32 mx-auto rounded-full gradient-hero flex items-center justify-center text-6xl text-white font-heading shadow-elevated">
              FT
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl">About Fresh Thoughts</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A space dedicated to authentic voices and meaningful conversations about the world we live in.
            </p>
          </div>

          {/* Story Section */}
          <div className="prose prose-lg max-w-none mb-16">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft">
              <h2 className="font-heading font-bold text-3xl mb-6">The Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fresh Thoughts was born from a simple belief: that authentic perspectives matter, especially in a world saturated with filtered content and curated personas. This blog is a space where real voices can share genuine insights about the issues that shape our lives.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether it's exploring cultural shifts, discussing societal challenges, or reflecting on personal growth, Fresh Thoughts aims to spark conversations that go beyond surface-level engagement. This is about depth, honesty, and the courage to think critically.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every post here comes from a place of genuine curiosity and a commitment to presenting perspectives that challenge, inspire, and resonate. This isn't about having all the answers—it's about asking better questions and creating space for meaningful dialogue.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <h2 className="font-heading font-bold text-4xl text-center mb-12">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-3xl p-8 shadow-soft text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl">Authenticity</h3>
                <p className="text-muted-foreground">
                  Real stories, honest perspectives, and genuine voices. No filters, no facades—just truth.
                </p>
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-soft text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl">Purpose</h3>
                <p className="text-muted-foreground">
                  Creating awareness, sharing insights, and sparking conversations that matter.
                </p>
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-soft text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl">Impact</h3>
                <p className="text-muted-foreground">
                  Words have power. We use ours to inspire thought, encourage dialogue, and drive positive change.
                </p>
              </div>
            </div>
          </div>

          {/* Topics Section */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="font-heading font-bold text-3xl mb-8">What We Write About</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Culture & Society</h4>
                  <p className="text-muted-foreground text-sm">Exploring the forces shaping our world and our place in it.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Youth Perspectives</h4>
                  <p className="text-muted-foreground text-sm">Amplifying voices and viewpoints of a generation redefining norms.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Global Issues</h4>
                  <p className="text-muted-foreground text-sm">Commentary on the challenges and opportunities facing humanity.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Personal Growth</h4>
                  <p className="text-muted-foreground text-sm">Reflections on identity, purpose, and navigating modern life.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card rounded-3xl p-12 shadow-soft">
            <h2 className="font-heading font-bold text-3xl mb-4">Join the Conversation</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Fresh Thoughts is more than a blog—it's a community of thinkers, dreamers, and doers. Your voice matters here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full gradient-primary text-white font-semibold hover:shadow-elevated transition-smooth"
              >
                Read the Blog
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border hover:bg-muted transition-smooth font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
