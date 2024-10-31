export interface Mission {
    name: string,
    status: MissionStatus,
    priority: Priority
    description: string
}

enum MissionStatus {
    pending = "Pending",
    inProgress = "In Progress",
    completed = "Completed"
}

enum Priority {
    high = "High",
    low = "Low"
}
