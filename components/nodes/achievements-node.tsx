import { Handle, Position } from "reactflow"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Calendar } from "lucide-react"
import { portfolioData } from "@/data/portfolio-data"

export function AchievementsNode({ data }: { data: any }) {
  const { achievements } = portfolioData

  return (
    <Card className="w-80 md:w-72 shadow-lg border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-white hover:shadow-xl transition-all duration-300 rounded-sm font-[var(--font-space-grotesk)]">
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-yellow-500" />
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-yellow-500" />

      {/* Header */}
      <CardHeader className="pb-3 bg-yellow-500 text-white rounded-none">
        <CardTitle className="text-lg flex items-center gap-2 font-bold tracking-wide">
          <Trophy className="w-5 h-5" />
          ACHIEVEMENTS.xml
        </CardTitle>
      </CardHeader>

      {/* Body */}
      <CardContent className="p-4">
        <div className="space-y-3">
          {achievements.slice(0, 3).map((achievement, index) => (
            <div key={index} className="border-l-2 border-yellow-200 pl-3">
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-bold text-sm tracking-wide">{achievement.title}</h4>
                  <p className="text-xs text-gray-600 mb-1 font-medium">{achievement.description}</p>
                  {achievement.date && (
                    <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                      <Calendar className="w-3 h-3" />
                      {achievement.date}
                    </div>
                  )}
                  {achievement.certificate && (
                    <Badge variant="outline" className="text-xs mt-1 rounded-sm font-medium">
                      CERT_AVAILABLE
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-4 italic text-center font-medium">TROPHY_COUNT: INCREMENTING 🏆</p>
      </CardContent>
    </Card>
  )
}
