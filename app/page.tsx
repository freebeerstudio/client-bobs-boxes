export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-white mb-4">
              PAI Dashboard
            </h1>
            <p className="text-xl text-blue-200">
              Personal AI Infrastructure
            </p>
          </div>

          {/* Status Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatusCard
              title="Environment"
              value={process.env.NODE_ENV || "development"}
              status="operational"
            />
            <StatusCard
              title="Version"
              value="1.0.0"
              status="operational"
            />
            <StatusCard
              title="Build"
              value={new Date().toLocaleDateString()}
              status="operational"
            />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <FeatureCard
              title="Multi-Stage Deployment"
              description="Development, Staging, and Production environments with automated CI/CD"
              icon="🚀"
            />
            <FeatureCard
              title="MCP Integrations"
              description="11 Model Context Protocol servers for comprehensive workspace integration"
              icon="🔌"
            />
            <FeatureCard
              title="AppleScript Libraries"
              description="8 native libraries with 265+ functions for Mac automation"
              icon="🍎"
            />
            <FeatureCard
              title="Cloud Infrastructure"
              description="Vercel hosting, Supabase database, GitHub Actions CI/CD"
              icon="☁️"
            />
          </div>

          {/* Info Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              System Information
            </h2>
            <div className="space-y-2 text-blue-100">
              <InfoRow label="Owner" value="Wayne Bridges / Free Beer Studio" />
              <InfoRow label="Repository" value="github.com/freebeerstudio/PAI" />
              <InfoRow label="Domain" value="app.freebeer.ai" />
              <InfoRow label="Deployment" value="Vercel" />
              <InfoRow label="Framework" value="Next.js 16 + TypeScript" />
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 text-blue-200">
            <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
            <p className="text-sm mt-2">Deployed via GitHub Actions CI/CD</p>
            <div className="mt-4 inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full border border-green-500/30">
              <span className="text-lg">✅</span>
              <span className="text-sm font-medium">Automated Deployment Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatusCardProps {
  title: string;
  value: string;
  status: "operational" | "warning" | "error";
}

function StatusCard({ title, value, status }: StatusCardProps) {
  const statusColors = {
    operational: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-blue-200">{title}</h3>
        <div className={`w-3 h-3 rounded-full ${statusColors[status]}`} />
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-colors">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </div>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex justify-between py-2 border-b border-white/10 last:border-0">
      <span className="font-medium">{label}:</span>
      <span className="text-white">{value}</span>
    </div>
  );
}
