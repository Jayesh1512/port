import { Trophy, Zap, Music } from "lucide-react"

export function FloatingElements() {
  return (
    <>
      {/* Football */}
      <div
        className="absolute top-20 right-32 animate-bounce hidden md:block"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      >
        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
          <Trophy className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* F1 Car */}
      <div className="absolute top-80 left-20 animate-pulse hidden md:block" style={{ animationDelay: "1s" }}>
        <div className="w-10 h-6 bg-red-600 rounded-lg shadow-lg flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Music Note */}
      <div
        className="absolute bottom-32 right-20 animate-bounce hidden md:block"
        style={{ animationDelay: "2s", animationDuration: "2.5s" }}
      >
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
          <Music className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Additional fun elements */}
      <div className="absolute top-1/2 right-10 animate-ping hidden lg:block" style={{ animationDelay: "3s" }}>
        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
      </div>

      <div className="absolute bottom-20 left-32 animate-pulse hidden lg:block" style={{ animationDelay: "4s" }}>
        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
      </div>
    </>
  )
}
