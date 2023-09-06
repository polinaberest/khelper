import { User } from "src/app/features/auth/models/user.model";
import { Category } from "../../category/models/category.model";
import { Container } from "src/app/features/public/container-map/models/container.model";

export interface RequestPost {
    id: string;
    title: string;
    shortDescription: string;
    content: string;
    featuredImageUrl: string;
    urlHandle: string;
    author: User;
    volunteer: User | null;
    categories: Category[];
    desiredContainer: Container | null;
    publishDate: Date;
    updateDate: Date;
    untilDate: Date;
    isUrgent: boolean;
    isFulfilled: boolean;
};