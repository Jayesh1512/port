import { Handle, Position } from "reactflow"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Zap, Music, Heart } from "lucide-react"
import { portfolioData } from "@/data/portfolio-data"

export function InterestsNode({ data }: { data: any }) {
  const { interests } = portfolioData

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy className="w-4 h-4" />
      case "Zap":
        return <Zap className="w-4 h-4" />
      case "Music":
        return <Music className="w-4 h-4" />
      default:
        return <Heart className="w-4 h-4" />
    }
  }

  const getIconColor = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return "text-amber-500"
      case "Zap":
        return "text-red-500"
      case "Music":
        return "text-purple-500"
      default:
        return "text-pink-500"
    }
  }

  return (
    <Card className="w-80 md:w-72 shadow-lg border-2 border-pink-400 bg-gradient-to-br from-pink-50 to-white hover:shadow-xl transition-all duration-300 rounded-sm font-[var(--font-space-grotesk)]">
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-pink-500" />

      {/* Header */}
      <CardHeader className="pb-3 bg-pink-500 text-white rounded-none">
        <CardTitle className="text-lg flex items-center gap-2 font-bold tracking-wide">
          <Heart className="w-5 h-5" />
          BEYOND_CODE.cfg
        </CardTitle>
      </CardHeader>

      {/* Body */}
      <CardContent className="p-4">
        <div className="space-y-3">
          {interests.map((interest, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`${getIconColor(interest.icon)} mt-1`}>{getIcon(interest.icon)}</div>
              <div>
                <h4 className="font-bold text-sm tracking-wide">{interest.name}</h4>
                <p className="text-xs text-gray-600 font-medium">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-pink-100 rounded-sm">
          <p className="text-xs text-center text-pink-700 font-medium">
            "LIFE_PHILOSOPHY: perseverance && dedication && respect_for_authority" 🌟
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
