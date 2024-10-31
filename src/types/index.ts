export enum MissionStatus {
    pending = "Pending",
    inProgress = "In Progress",
    completed = "Completed"
}

export enum MissionPriority {
    high = "High",
    low = "Low"
}

export interface Mission {
    name: string;
    status: MissionStatus;
    priority: MissionPriority;
    description: string;
}
