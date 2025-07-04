import { Handle, Position } from "reactflow"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code } from "lucide-react"
import { portfolioData } from "@/data/portfolio-data"

export function SkillsNode({ data }: { data: any }) {
  const { skills } = portfolioData

  return (
    <Card className="w-80 md:w-72 shadow-lg border-2 border-green-400 bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-all duration-300  font-[var(--font-space-grotesk)]">
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-green-500" />
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-green-500" />

      {/* Header */}
      <CardHeader className="pb-3 bg-green-500 text-white rounded-none">
        <CardTitle className="text-lg flex items-center gap-2 font-bold tracking-wide">
          <Code className="w-5 h-5" />
          SKILLS.json
        </CardTitle>
      </CardHeader>

      {/* Body */}
      <CardContent className="p-4">
        <div className="space-y-4">
          {skills.map((skillCategory, index) => (
            <div key={index}>
              <h4 className="font-bold text-sm mb-2 text-green-700 tracking-wide uppercase">
                {skillCategory.category}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {skillCategory.items.slice(0, 6).map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs bg-green-100 text-green-800 rounded-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
                {skillCategory.items.length > 6 && (
                  <Badge variant="outline" className="text-xs rounded-sm font-medium">
                    +{skillCategory.items.length - 6} more
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4 italic font-medium">PERFORMANCE: OPTIMIZED_FOR_SPEED 🏎️</p>
      </CardContent>
    </Card>
  )
}
