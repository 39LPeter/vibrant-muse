import { Link } from "wouter";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

export const BlogCard = ({
  id,
  title,
  description,
  category,
  date,
  readTime,
  image,
}: BlogCardProps) => {
  return (
    <Link href={`/blog/${id}`} className="group" data-testid={`link-blog-${id}`}>
      <article className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-smooth h-full flex flex-col">
        <div className="aspect-video bg-gradient-primary relative overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-6xl font-heading">
              {title.charAt(0)}
            </div>
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              {category}
            </Badge>
            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
              <span className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </span>
            </div>
          </div>
          <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-smooth">
            {title}
          </h3>
          <p className="text-muted-foreground flex-1">{description}</p>
          <div className="mt-4">
            <span className="text-primary font-semibold group-hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};
