export interface RequestPost {
    id: string;
    title: string;
    shortDescription: string;
    content: string;
    featuredImageUrl: string;
    urlHandle: string;
    author: string;
    publishDate: Date;
    updateDate: Date;
    untilDate: Date;
    isUrgent: boolean;
    isFulfilled: boolean;
};