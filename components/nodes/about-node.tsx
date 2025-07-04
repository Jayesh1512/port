import { Handle, Position } from "reactflow"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Github, Linkedin, ExternalLink, Mail, Phone, MapPin } from "lucide-react"
import { portfolioData } from "@/data/portfolio-data"

export function AboutNode({ data }: { data: any }) {
  const { personal } = portfolioData

  return (
    <Card className="w-80 md:w-72 shadow-lg border-2 border-indigo-400 bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-all duration-300 rounded-sm font-[var(--font-space-grotesk)]">
      <Handle type="source" position={Position.Right} className="w-3 h-3 border-t-indigo-600" />

      {/* Header */}
      <CardHeader className="pb-3 bg-indigo-500 text-white rounded-none">
        <CardTitle className="text-lg flex items-center gap-2 font-bold tracking-wide">
          <User className="w-5 h-5" />
          ABOUT_ME.exe
        </CardTitle>
      </CardHeader>

      {/* Body */}
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-12 h-12 rounded-sm">
            <AvatarImage src="/placeholder.svg?height=48&width=48" />
            <AvatarFallback className="bg-blue-100 text-blue-600 rounded-sm font-bold">
              {personal.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-xl tracking-wide">{personal.name}</h3>
            <p className="text-sm text-gray-600 font-medium">{personal.title}</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-4 font-medium">{personal.bio}</p>

        <div className="space-y-2 mb-4 text-xs font-medium">
          <div className="flex items-center gap-2">
            <Mail className="w-3 h-3 text-gray-500" />
            <span>{personal.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-gray-500" />
            <span>{personal.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-gray-500" />
            <span>{personal.location}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1 bg-transparent rounded-sm font-bold">
            <Github className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" className="flex-1 bg-transparent rounded-sm font-bold">
            <Linkedin className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" className="flex-1 bg-transparent rounded-sm font-bold">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
