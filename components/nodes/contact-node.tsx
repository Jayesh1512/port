import { Handle, Position } from "reactflow"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"
import { portfolioData } from "@/data/portfolio-data"

export function ContactNode({ data }: { data: any }) {
  const { personal } = portfolioData

  return (
    <Card className="w-80 md:w-72 shadow-lg border-2 border-red-400 bg-gradient-to-br from-red-50 to-white hover:shadow-xl transition-all duration-300 rounded-sm font-[var(--font-space-grotesk)]">
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-red-500" />

      {/* Header */}
      <CardHeader className="pb-3 bg-red-500 text-white rounded-none">
        <CardTitle className="text-lg flex items-center gap-2 font-bold tracking-wide">
          <Mail className="w-5 h-5" />
          CONTACT.api
        </CardTitle>
      </CardHeader>

      {/* Body */}
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium">{personal.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium">{personal.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium">{personal.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium">Born: {personal.dateOfBirth}</span>
          </div>
        </div>


        <p className="text-xs text-gray-600 mt-3 text-center italic font-medium">
          READY_FOR: [tech_talk, football_analysis, f1_strategy] 🏎️⚽
        </p>
      </CardContent>
    </Card>
  )
}
