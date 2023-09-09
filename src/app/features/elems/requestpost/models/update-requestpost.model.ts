export interface UpdateRequestPost {
    title: string;
    shortDescription: string;
    content: string;
    featuredImageUrl: string;
    categoriesIds: string[];
    desiredContainerId: number;
    updateDate: Date;
    untilDate: Date;
    isUrgent: boolean;
};