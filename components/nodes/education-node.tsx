import { Handle, Position } from "reactflow"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"
import { portfolioData } from "@/data/portfolio-data"

export function EducationNode({ data }: { data: any }) {
  const { education } = portfolioData

  return (
    <Card className="w-80 md:w-72 shadow-lg border-2 border-blue-400 bg-gradient-to-br from-indigo-50 to-white hover:shadow-xl transition-all duration-300 rounded-sm font-[var(--font-space-grotesk)]">
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-blue-500" />
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-blue-500" />

      {/* Header */}
      <CardHeader className="pb-3 bg-blue-500 text-white rounded-none">
        <CardTitle className="text-lg flex items-center gap-2 font-bold tracking-wide">
          <GraduationCap className="w-5 h-5" />
          EDUCATION.db
        </CardTitle>
      </CardHeader>

      {/* Body */}
      <CardContent className="p-4">
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-blue-200 pl-3">
              <h4 className="font-bold text-sm tracking-wide">{edu.degree}</h4>
              <p className="text-sm text-gray-600 font-medium">{edu.institution}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1 font-medium">
                <Calendar className="w-3 h-3" />
                {edu.duration}
              </div>
              <div className="flex items-center gap-2 text-xs text-indigo-600 font-medium">
                <Award className="w-3 h-3" />
                {edu.grade}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4 italic font-medium">ALGORITHM: PRECISION_OPTIMIZED 🎯</p>
      </CardContent>
    </Card>
  )
}
