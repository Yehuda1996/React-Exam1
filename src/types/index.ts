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
    _id: string
    name: string;
    status: MissionStatus;
    priority: MissionPriority;
    description: string;
}
