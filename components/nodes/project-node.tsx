import { Handle, Position } from "reactflow"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, User } from "lucide-react"
import type { Project } from "@/types/portfolio"
import Link from "next/link"

interface ProjectNodeProps {
  data: {
    project: Project
  }
}

export function ProjectNode({ data }: ProjectNodeProps) {
  const { project } = data

  return (
    <Card className="w-80 md:w-72 shadow-lg border-2 border-purple-400 bg-gradient-to-br from-purple-50 to-white hover:shadow-xl transition-all duration-300 rounded-sm font-[var(--font-space-grotesk)]">
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-purple-500" />
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-purple-500" />

      {/* Header */}
      <CardHeader className="pb-3 bg-purple-500 text-white rounded-none">
        <CardTitle className="text-lg flex items-center gap-2 font-bold tracking-wide">
          <ExternalLink className="w-5 h-5" />
          PROJECT.md
        </CardTitle>
      </CardHeader>

      {/* Body */}
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 tracking-wide">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-3 font-medium">{project.description}</p>

        {project.supervisor && (
          <div className="flex items-center gap-1 mb-3 text-xs text-gray-500 font-medium">
            <User className="w-3 h-3" />
            <span>{project.supervisor}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs rounded-sm font-medium">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" className="text-xs rounded-sm font-medium">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          <Link href={project.code}>
          <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent rounded-sm font-bold">
            <Github className="w-3 h-3 mr-1" />
            CODE
          </Button>
          </Link>
          {project.link && (
            <Link href={project.link}>
            <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent rounded-sm font-bold">
              <ExternalLink className="w-3 h-3 mr-1" />
              DEMO
            </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
