"use client"

import { useCallback } from "react"
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Node,
  type Edge,
  type Connection,
  ReactFlowProvider,
} from "reactflow"
import "reactflow/dist/style.css"

// Import all node components
import { AboutNode } from "@/components/nodes/about-node"
import { SkillsNode } from "@/components/nodes/skills-node"
import { ProjectNode } from "@/components/nodes/project-node"
import { ExperienceNode } from "@/components/nodes/experience-node"
import { EducationNode } from "@/components/nodes/education-node"
import { ContactNode } from "@/components/nodes/contact-node"
import { InterestsNode } from "@/components/nodes/interests-node"
import { AchievementsNode } from "@/components/nodes/achievements-node"
import { FloatingElements } from "@/components/floating-elements"
import { portfolioData } from "@/data/portfolio-data"

const nodeTypes = {
  about: AboutNode,
  skills: SkillsNode,
  project: ProjectNode,
  experience: ExperienceNode,
  education: EducationNode,
  contact: ContactNode,
  interests: InterestsNode,
  achievements: AchievementsNode,
}

// Create nodes from data
const createProjectNodes = () => {
  return portfolioData.projects.map((project, index) => ({
    id: `project${index + 1}`,
    type: "project",
    position: { x: 1800, y: 50 + index * 350 }, // Further right and more spacing
    data: { project },
  }))
}

const initialNodes: Node[] = [
  {
    id: "about",
    type: "about",
    position: { x: 600, y: 300 }, // More centered
    data: {},
  },
  {
    id: "skills",
    type: "skills",
    position: { x: 1200, y: 150 }, // Much further right
    data: {},
  },
  ...createProjectNodes(),
  {
    id: "experience",
    type: "experience",
    position: { x: 1200, y: 800 }, // Further right and down
    data: {},
  },
  {
    id: "education",
    type: "education",
    position: { x: 50, y: 150 }, // Further left
    data: {},
  },
  {
    id: "achievements",
    type: "achievements",
    position: { x: 50, y: 600 }, // Further left and down
    data: {},
  },
  {
    id: "contact",
    type: "contact",
    position: { x: 1800, y: 1200 }, // Much further right and down
    data: {},
  },
  {
    id: "interests",
    type: "interests",
    position: { x: 50, y: 1000 }, // Further left and down
    data: {},
  },
]

// Create edges dynamically
const createInitialEdges = (): Edge[] => {
  const edges: Edge[] = [
    { id: "about-skills", source: "about", target: "skills", animated: true, style: { stroke: "#6b7280" } },
    { id: "about-experience", source: "about", target: "experience", animated: true, style: { stroke: "#6b7280" } },
    { id: "about-education", source: "about", target: "education", animated: true, style: { stroke: "#6b7280" } },
    { id: "about-interests", source: "about", target: "interests", animated: true, style: { stroke: "#6b7280" } },
    {
      id: "education-achievements",
      source: "education",
      target: "achievements",
      animated: true,
      style: { stroke: "#6b7280" },
    },
    { id: "experience-contact", source: "experience", target: "contact", animated: true, style: { stroke: "#6b7280" } },
  ]

  // Add project connections
  portfolioData.projects.forEach((_, index) => {
    edges.push({
      id: `skills-project${index + 1}`,
      source: "skills",
      target: `project${index + 1}`,
      animated: true,
      style: { stroke: "#6b7280" },
    })
  })

  return edges
}

function PortfolioFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(createInitialEdges())

  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <FloatingElements />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3, nodes: [{ id: "about" }] }}
        minZoom={0.3}
        maxZoom={1.2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.6 }}
      >
        <Controls className="bg-white shadow-lg border rounded-lg" />
        <Background variant="dots" gap={24} size={2} color="#94a3b8" className="opacity-40" />
      </ReactFlow>
    </div>
  )
}

export default function Component() {
  return (
    <ReactFlowProvider>
      <PortfolioFlow />
    </ReactFlowProvider>
  )
}
