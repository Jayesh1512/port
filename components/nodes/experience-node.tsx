import { Handle, Position } from "reactflow"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, Award } from "lucide-react"
import { portfolioData } from "@/data/portfolio-data"

export function ExperienceNode({ data }: { data: any }) {
  const { experience } = portfolioData

  return (
    <Card className="w-80 md:w-72 shadow-lg border-2 border-orange-400 bg-gradient-to-br from-orange-50 to-white hover:shadow-xl transition-all duration-300 rounded-sm font-[var(--font-space-grotesk)]">
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-orange-500" />
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-orange-500" />

      {/* Header */}
      <CardHeader className="pb-3 bg-orange-500 text-white rounded-none">
        <CardTitle className="text-lg flex items-center gap-2 font-bold tracking-wide">
          <Briefcase className="w-5 h-5" />
          EXPERIENCE.log
        </CardTitle>
      </CardHeader>

      {/* Body */}
      <CardContent className="p-4">
        <div className="space-y-4">
          {experience.slice(0, 2).map((exp, index) => (
            <div key={index} className="border-l-2 border-orange-200 pl-3">
              <h4 className="font-bold text-sm tracking-wide">{exp.title}</h4>
              <p className="text-sm text-gray-600 font-medium">{exp.company}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 font-medium">
                <Calendar className="w-3 h-3" />
                {exp.duration}
                {exp.certificate && <Award className="w-3 h-3 text-orange-500" />}
              </div>
              <ul className="text-xs text-gray-600 space-y-1 font-medium">
                {exp.description.slice(0, 2).map((desc, descIndex) => (
                  <li key={descIndex}>• {desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4 italic font-medium">STATUS: BUILDING_CHAMPIONSHIP_TEAMS ⚽</p>
      </CardContent>
    </Card>
  )
}
