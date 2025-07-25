import { DashboardLayout } from "@/components/dashboard-layout";
import { MetricsCards } from "@/components/metrics-cards";
import { ProjectCard } from "@/components/project-card";
import { projects, projectMetrics } from "@/lib/mock-data";

export default function ProjectsPage() {
    return (
        <DashboardLayout title="My Projects" breadcrumb={["Dashboards"]}>
            <div className="space-y-6">
                {/* Project Metrics */}
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-gradient-card rounded-lg border border-border p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Current Projects</p>
                                <p className="text-2xl font-bold text-foreground">{projectMetrics.currentProjects.value}</p>
                                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs font-medium text-green-500">
                    {projectMetrics.currentProjects.change}
                  </span>
                                </div>
                            </div>
                            <div className="p-2 rounded-full bg-primary/10">
                                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-card rounded-lg border border-border p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Project Finance</p>
                                <p className="text-2xl font-bold text-foreground">{projectMetrics.projectFinance.value}</p>
                                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs font-medium text-red-500">
                    {projectMetrics.projectFinance.change}
                  </span>
                                </div>
                            </div>
                            <div className="p-2 rounded-full bg-primary/10">
                                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-card rounded-lg border border-border p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Our Clients</p>
                                <p className="text-2xl font-bold text-foreground">{projectMetrics.ourClients.value}</p>
                                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs font-medium text-green-500">
                    {projectMetrics.ourClients.change}
                  </span>
                                </div>
                            </div>
                            <div className="p-2 rounded-full bg-primary/10">
                                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
